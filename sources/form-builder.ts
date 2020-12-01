import * as ko from "knockout";

import { FormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./form-builder.scss";
var template = require("text-loader!./form-builder.html");

export class FormBuilder {
    constructor(private layout: KnockoutObservable<any>, toolboxItems: Array<any> = []) {
        ko.computed(() => {
            this.root.elements([]);
            var layoutValue: any = ko.unwrap(layout);
            if(!Array.isArray(layoutValue)) {
                layoutValue = [layoutValue];
            }
            UimlLayoutSerializer.createElements(this.root.elements, layoutValue, null);
        });
        this.toolbox.push({
            title: "row",
            hint: "Drag to add row",
            json: {
                partclass: "layoutRow",
                cssClasses: "row",
                parts: [
                    
                ]
            }
        });
        this.toolbox.push({
            title: "column",
            hint: "Drag to add column",
            json: {
                partclass: "layoutColumn",
                cssClasses: "column",
                parts: [
                    
                ]
            }
        });
        this.toolbox.push({
            title: "item",
            hint: "Drag to add item",
            json: {
                partclass: "layoutItem",
                cssClasses: "item",
                parts: [
                    
                ]
            }
        });
        toolboxItems.forEach(item => this.toolbox.push(item));
    }
    toolbox = ko.observableArray();
    root: FormElement = UimlLayoutSerializer.createRoot();
    dragstart(model, event) {
        event.dataTransfer.setData("bf-item-json", JSON.stringify(model.json));
        return true;
    }
    private static defaultText = '{"partclass": "layoutRow","cssClasses": "row","parts": []}';
    get jsonText() {
        if(this.root.elements().length > 0) {
            return JSON.stringify(UimlLayoutSerializer.serialize(this.root.elements()[0]), null, 2);
        }
        return FormBuilder.defaultText;
    }
    set jsonText(json: string) {
        this.layout(JSON.parse(json || FormBuilder.defaultText));
    }
}

ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new FormBuilder(params.layout, params.items);
        }
    },
    template
});

export function render(layout: KnockoutObservable<any> | any, items: Array<any>, node?: HTMLElement) {
    if(!ko.isWritableObservable(layout)) {
        layout = ko.observable(layout);
    }
    ko.applyBindings({ layout: layout, items: items }, node);
}

export * from "./uiml-parts";
export * from "./form-element";
export * from "./layout-item";
export * from "./placeholder-item";
export * from "./item-menu";
