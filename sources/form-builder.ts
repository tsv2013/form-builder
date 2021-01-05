import * as ko from "knockout";

import { FormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./form-builder.scss";
var template = require("text-loader!./form-builder.html");

export class FormBuilder {
    private static defaultText = '{"partclass": "layoutRow","cssClasses": "row","parts": []}';
    constructor(private _layout: KnockoutObservable<any>, _context?: any, toolboxItems: Array<any> = []) {
        this.root.context = _context;
        ko.computed(() => {
            this.root.elements([]);
            var layoutValue: any = ko.unwrap(_layout);
            if(!Array.isArray(layoutValue)) {
                layoutValue = [layoutValue];
            }
            UimlLayoutSerializer.createElements(this.root.elements, layoutValue, this.root);
        });
        toolboxItems.forEach(item => this.toolbox.push(item));
    }
    toolbox = ko.observableArray();
    root: FormElement = UimlLayoutSerializer.createRoot();
    dragstart(model, event) {
        var originalEvent = <DragEvent>((<any>event).originalEvent || event);
        originalEvent.dataTransfer.setData("bf-item-json", JSON.stringify(model.json));
        return true;
    }
    get jsonText() {
        if(this.root.elements().length > 0) {
            return JSON.stringify(UimlLayoutSerializer.serialize(this.root.elements()[0]), null, 2);
        }
        return FormBuilder.defaultText;
    }
    set jsonText(json: string) {
        this._layout(JSON.parse(json || FormBuilder.defaultText));
    }
    set isDesignMode(value: boolean) {
        this.root.isDesignMode = value;
    }
    get isDesignMode() {
        return this.root.isDesignMode;
    }
    toggleDesignMode(builder: FormBuilder) {
        builder.isDesignMode = !builder.isDesignMode;
    }
}

ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new FormBuilder(params.layout, params.context, params.items);
        }
    },
    template
});

export function render(layout: KnockoutObservable<any> | any, items: Array<any>, context?: any, node?: HTMLElement) {
    if(!ko.isWritableObservable(layout)) {
        layout = ko.observable(layout);
    }
    ko.applyBindings({ context: context, layout: layout, items: items }, node);
}

export * from "./uiml-parts";
export * from "./form-element";
export * from "./layout-item";
export * from "./placeholder-item";
export * from "./item-menu";
