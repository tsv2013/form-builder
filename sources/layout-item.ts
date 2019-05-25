import * as ko from "knockout";

import { IFormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./layout-item.scss";
var template = require("text-loader!./layout-item.html");

export class LayoutItem {
    private static draggedElement: IFormElement = null;
    private static selectedElement = ko.observable<LayoutItem>();

    constructor(private formElement: IFormElement, htmlElement: HTMLElement) {
        formElement.render(htmlElement);
    }

    get elements() { return this.formElement.elements; }
    get isContainer() {
        return this.formElement.elements().length > 0;
    }
    isSelected = ko.observable<boolean>(false);

    dragstart(model: LayoutItem, ev) {
        ev.dataTransfer.setData("bf-item-json", JSON.stringify(UimlLayoutSerializer.serialize(model.formElement)));
        LayoutItem.draggedElement = model.formElement;
        return true;
    }
    dragover(model: LayoutItem, ev) {
        ev.preventDefault();
    }
    drop(model: LayoutItem, ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("bf-item-json");
        if(!!data) {
            var holder = this.formElement.parent || this.formElement;
            var newElement = UimlLayoutSerializer.createElement(JSON.parse(data), holder);
            holder.elements.splice(holder.elements.indexOf(this.formElement) + 1, 0, newElement);
            if(!!LayoutItem.draggedElement) {
                LayoutItem.draggedElement.parent.elements.remove(LayoutItem.draggedElement);
                LayoutItem.draggedElement = null;
            }
        }
    }
    select(model, ev) {
        if(!!LayoutItem.selectedElement()) {
            LayoutItem.selectedElement().isSelected(false);
        }
        model.isSelected(true);
        LayoutItem.selectedElement(model);
    }
}

ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var itemElelemt = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-content")[0]
            let formElement = params.element;
            return  new LayoutItem(formElement, <HTMLElement>itemElelemt);
        }
    },
    template
});
