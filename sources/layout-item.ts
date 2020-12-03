import * as ko from "knockout";

import { IFormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";
import { UimlPart } from "./uiml-parts";

import "./layout-item.scss";
var template = require("text-loader!./layout-item.html");

function getLocation(x: number, y: number, width: number, height: number) {
    if(y >= height / width * x) {
        if(y >= - height / width * x + height) {
            return 'bottom';
        }
        else {
            return 'left';
        }
    }
    else {
        if(y >= - height / width * x + height) {
            return 'right';
        }
        else {
            return 'top';
        }
    }
}
export class LayoutItem {
    private static draggedElement: IFormElement = null;
    private static selectedElement = ko.observable<LayoutItem>();
    private dragPosition = ko.observable<string>("");

    constructor(private formElement: IFormElement) {
    }

    get elements() { return this.formElement.elements; }
    get isContainer() { return this.formElement.isContainer; }
    get css() {
        let result = this.formElement.content instanceof UimlPart ? this.formElement.content.cssclass : "";
        if(this.isSelected()) {
            result += " " + "bf-item--selected";
        }
        if(this.dragPosition()) {
            result += " " + "bf-item--drag-over-" + this.dragPosition();
        }
        return result;
    }
    isSelected = ko.observable<boolean>(false);

    dragstart(model: LayoutItem, ev: DragEvent) {
        ev.dataTransfer.setData("bf-item-json", JSON.stringify(UimlLayoutSerializer.serialize(model.formElement)));
        LayoutItem.draggedElement = model.formElement;
        return true;
    }
    dragenter(model: LayoutItem, ev: DragEvent) {
        ev.preventDefault();
    }
    dragover(model: LayoutItem, ev: DragEvent) {
        var originalEvent = <DragEvent>(ev || (<any>ev).originalEvent),
        targetItem = ko.dataFor(<any>originalEvent.target);
        var hoverLocation = getLocation(originalEvent.offsetX, originalEvent.offsetY, (<any>ev.target).clientWidth, (<any>ev.target).clientHeight);
        model.dragPosition(hoverLocation);
        ev.preventDefault();
    }
    dragleave(model: LayoutItem, ev: DragEvent) {
        model.dragPosition("");
        ev.preventDefault();
    }
    drop(model: LayoutItem, ev: DragEvent) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("bf-item-json");
        if(!!data) {
            this.formElement.addElement(JSON.parse(data), model.dragPosition());
            if(!!LayoutItem.draggedElement) {
                LayoutItem.draggedElement.parent.elements.remove(LayoutItem.draggedElement);
                LayoutItem.draggedElement = null;
            }
        }
        model.dragPosition("");
    }
    select(model: LayoutItem, ev: Event) {
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
            let formElement: IFormElement = params.element;
            if(!formElement.isContainer) {
                let itemElelemtContainer = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-content-holder")[0];
                formElement.render(<HTMLElement>itemElelemtContainer);
            }
            return new LayoutItem(formElement);
        }
    },
    template
});
