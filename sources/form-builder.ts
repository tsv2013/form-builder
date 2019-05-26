import * as ko from "knockout";

import { FormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./form-builder.scss";
var template = require("text-loader!./form-builder.html");

export class FormBuilder {
    static render(layout: any, node: HTMLElement) {
        ko.applyBindings({ layout: layout }, node);
    }
    constructor(layout: KnockoutObservable<any> | any = {}) {
        this.root = UimlLayoutSerializer.createRoot();
        ko.computed(() => {
            this.root.elements([]);
            var layoutValue = ko.unwrap(layout);
            if(!Array.isArray(layoutValue)) layoutValue = [layoutValue];
            UimlLayoutSerializer.createElements(this.root.elements, layoutValue, null);
        });
        this.toolbox.push({
            title: "row",
            json: {
                partclass: "layoutRow",
                cssClasses: "row",
                parts: [
                    
                ]
            }
        });
        this.toolbox.push({
            title: "column",
            json: {
                partclass: "layoutColumn",
                cssClasses: "column",
                parts: [
                    
                ]
            }
        });
        this.toolbox.push({
            title: "item",
            json: {
                partclass: "layoutItem",
                cssClasses: "item",
                parts: [
                    
                ]
            }
        });
    }
    toolbox = ko.observableArray();
    root: FormElement;
    dragstart(model, event) {
        event.dataTransfer.setData("bf-item-json", JSON.stringify(model.json));
        return true;
    }
}

ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new FormBuilder(params.layout());
        }
    },
    template
});

export { LayoutItem } from "./layout-item";
export { PlaceholderComponent } from "./placeholder-item";