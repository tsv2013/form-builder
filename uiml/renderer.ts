import * as ko from "knockout";

import { UIMLWrapper } from "./uiml-wrapper";
import { IPart, htmlUiRendererPeers } from "./uiml";

function template(html: string): HTMLElement {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.children.length === 1 ? <HTMLElement>div.children[0] : div;
}

export interface IRenderer {
    render: (container?: HTMLElement) => HTMLElement;
    renderers: IRenderer[];
    getProperty: (propertyName: string) => any;
    part: IPart;
    renderChildren: (container: HTMLElement) => void;
}

export class InterfaceRenderer implements IRenderer {
    styles: any;
    part: IPart;
    constructor(part: IPart, uimlWrapper: UIMLWrapper) {
        this.part = part;
        this.styles = uimlWrapper.getStyles(part);
        (part.parts || []).forEach((partInfo) => {
            this.renderers.push(uimlWrapper.createRenderer(partInfo));
        });
    }
    getCustomProcessedStyles(): any {
        return ["cssClasses", "text", "data"]
    }
    applyStyles(part: IPart, element: HTMLElement) {
        Object.keys(this.styles).forEach(key => {
            var styleName = key;
            var styleValue = this.styles[key];
            if(this.getCustomProcessedStyles().indexOf(styleName) === -1) {
                (<any>element).css(styleName, styleValue);
            }
        });
        Object.keys(this.styles.cssClasses)
            .map(key => this.styles.cssClasses[key])
            .forEach(className => {
                element.className += (" " + className);
            });
        var text = this.getProperty("text");
        if(text && element.children.length === 0) {
            element.innerText = text;
        }
        var html = this.getProperty("html");
        if(html && element.children.length === 0) {
            element.innerHTML = html;
        }
    }
    getProperty(propertyName: string) {
        return this.part[propertyName] !== undefined ? this.part[propertyName] : this.styles[propertyName];
    }
    renderChildren(container: HTMLElement) {
        this.renderers.forEach(renderer => {
            renderer.render(container);
        });
    }
    getRenderResult() {
        return template("<div/>");
    }
    render(container: HTMLElement = null) {
        var renderResult = this.getRenderResult();
        var dataBindValue = this.getProperty("dataBind");
        if(dataBindValue !== undefined) {
            renderResult.dataset.bind = Object.keys(dataBindValue).map((k) => `${k}: ${dataBindValue[k]}`).join(", ");
        }
        this.applyStyles(this.part, renderResult);
        this.renderChildren(renderResult);
        var hint = this.getProperty("hint");
        if(!!hint) {
            renderResult.title = hint;
        }
        if(container) {
            container.append(renderResult);
        }
        return renderResult;
    }
    renderers: IRenderer[] = [];
}

export class ComponentRenderer extends InterfaceRenderer {
    public static componentPrefix = "";
    constructor(part: IPart, uimlWrapper: UIMLWrapper) {
        super(part, uimlWrapper);
    }
    render(container: HTMLElement) {
        var widgetName = ((ComponentRenderer.componentPrefix ? (ComponentRenderer.componentPrefix + "-") : "") + this.part.partclass).toLowerCase();
        var renderResult;
        var widgetOptions = JSON.stringify(this.part).split("\"").join("'");
        if(ko.components.isRegistered(widgetName)) {
            renderResult = template("<" + widgetName + " params=\"{ model: $data, context: $context, options: " + widgetOptions + "}\"/>");
        } else {
            if(typeof htmlUiRendererPeers[0].wloaders[widgetName] === "function") {
                renderResult = template("<div data-bind=\"lazyWidget: { name: '" + widgetName + "', options: " + widgetOptions + " }\"/>");
            } else {
                renderResult = template("<component-stub params=\"{ message: 'Error: Component " + widgetName + " is not installed.'}\"/>");
            }
        }
        this.applyStyles(this.part, renderResult);
        container.append(renderResult);
        return renderResult;
    }
}

ko.bindingHandlers["lazyWidget"] = {
    init: function(element: HTMLElement, valueAccessor, allBindings, viewModel, bindingContext) {
        let options = ko.unwrap(valueAccessor());
        let widgetName = options.name;
        let loader = htmlUiRendererPeers[0].wloaders[widgetName];
        loader().then(module => {
            var html = "";
            if(ko.components.isRegistered(widgetName)) {
                html = "<" + widgetName + " params='{ model: $data, context: $context, options: " + JSON.stringify(options.options) + "}'/>";
            } else {
                html = "<component-stub params=\"{ message: 'Error: Component " + widgetName + " is not installed.'}\"/>";
            }
            element.innerHTML = html;
            ko.applyBindingsToDescendants(bindingContext, element); 
        });
        element.innerHTML = "Widget is loading. Please wait...";
        return { controlsDescendantBindings: true };
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    }
};

ko.components.register("component-stub", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return {
                message: params.message
            };
        }
    },
    template: "<div data-bind='text: message'></div>"
});

export class ContainerRenderer extends InterfaceRenderer {
    constructor(part: IPart, uimlWrapper: UIMLWrapper) {
        super(part, uimlWrapper);
    }
    getRenderResult() {
        var bindings: string[] = [];
        var visible = this.getProperty("visible");
        if(!!visible) {
            bindings.push("visible: " + visible);
        }
        var css = this.getProperty("css");
        if(!!css) {
            bindings.push("css: " + css);
        }
        var element = template("<div data-bind='" + bindings.join(", ")  + "'/>");
        return element;
    }
}

export class LabelRenderer extends InterfaceRenderer {
    constructor(part: IPart, uimlWrapper: UIMLWrapper) {
        super(part, uimlWrapper);
    }
    getRenderResult() {
        return template(`<label>${this.getProperty("data")}</label>`);
    }
}

export class InputRenderer extends InterfaceRenderer {
    constructor(part: IPart, uimlWrapper: UIMLWrapper) {
        super(part, uimlWrapper);
    }
    getRenderResult() {
        if(!!this.getProperty("readonly"))
            return template("<label data-bind=\"text: $data." + this.getProperty("data") + "\">");
        else {
            return template("<input class=\"form-control\" placeholder=\"" + (this.getProperty("pleceholderText")||"") + "\""
                + " data-bind=\"value: $data." + this.getProperty("data") + ", valueUpdate: 'keyup'\""
                + (!!this.getProperty("hint") ? (" title=\"" + this.getProperty("hint") + "\"") : "")
                + (!!this.getProperty("pattern") ? (" pattern=\"" + this.getProperty("pattern") + "\"") : "")
                + (this.getProperty("isnullable") === false ? " required" : "")
                + ">");
        }
    }
}
