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
    private _dragPosition = ko.observable<string>("");
    private _isSelected = ko.observable<boolean>(false);

    constructor(private formElement: IFormElement) {
        this.isSelected = ko.computed(() => this.formElement.isDesignMode && this._isSelected());
    }

    get elements() { return this.formElement.elements; }
    get isContainer() { return this.formElement.isContainer; }
    get css() {
        let result = this.formElement.content instanceof UimlPart ? this.formElement.content.cssclass : "";
        if(this.formElement.isDesignMode) {
            if(this.isSelected()) {
                result += " " + "bf-item--selected";
            }
            if(this._dragPosition()) {
                result += " " + "bf-item--drag-over-" + this._dragPosition();
            }
        }
        return result;
    }
    isSelected: ko.Computed<boolean>;

    dragstart(model: LayoutItem, ev: DragEvent) {
        if(this.formElement.isDesignMode) {
            ev.dataTransfer.setData("bf-item-json", JSON.stringify(UimlLayoutSerializer.serialize(model.formElement)));
            LayoutItem.draggedElement = model.formElement;
            return true;
        }
    }
    dragenter(model: LayoutItem, ev: DragEvent) {
        ev.preventDefault();
        ev.cancelBubble = true;
    }
    dragover(model: LayoutItem, ev: DragEvent) {
        if(this.formElement.isDesignMode) {
            var originalEvent = <DragEvent>(ev || (<any>ev).originalEvent),
            targetItem = ko.dataFor(<any>originalEvent.target);
            var hoverLocation = getLocation(originalEvent.offsetX, originalEvent.offsetY, (<any>ev.target).clientWidth, (<any>ev.target).clientHeight);
            model._dragPosition(hoverLocation);
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    }
    dragleave(model: LayoutItem, ev: DragEvent) {
        if(this.formElement.isDesignMode) {
            model._dragPosition("");
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    }
    drop(model: LayoutItem, ev: DragEvent) {
        if(this.formElement.isDesignMode) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("bf-item-json");
            if(!!data) {
                this.formElement.addElement(JSON.parse(data), model._dragPosition());
                if(!!LayoutItem.draggedElement) {
                    LayoutItem.draggedElement.parent.elements.remove(LayoutItem.draggedElement);
                    LayoutItem.draggedElement = null;
                }
            }
            model._dragPosition("");
            ev.cancelBubble = true;
        }
    }
    select(model: LayoutItem, ev: Event) {
        if(this.formElement.isDesignMode) {
            if(!!LayoutItem.selectedElement()) {
                LayoutItem.selectedElement()._isSelected(false);
            }
            model._isSelected(true);
            LayoutItem.selectedElement(model);
        }
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
