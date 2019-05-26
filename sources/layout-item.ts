import * as ko from "knockout";

import { IFormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./layout-item.scss";
var template = require("text-loader!./layout-item.html");

export class LayoutItem {
    private static draggedElement: IFormElement = null;
    private static selectedElement = ko.observable<LayoutItem>();

    constructor(private formElement: IFormElement) {
    }

    get elements() { return this.formElement.elements; }
    get isContainer() { return this.formElement.isContainer; }
    get width() { return this.formElement.width && this.formElement.width(); }
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
            this.formElement.addElement(JSON.parse(data));
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
            let itemElelemt = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-content")[0]
            let formElement: IFormElement = params.element;
            formElement.render(<HTMLElement>itemElelemt);
            return new LayoutItem(formElement);
        }
    },
    template
});
