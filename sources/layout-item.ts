import * as ko from "knockout";

import { fillDraggedOverInDirection, IFormElement } from "./form-element";
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
    private static draggedOverElement: IFormElement = null;
    private static draggedOverPosition: string = null;
    private static selectedElement = ko.observable<LayoutItem>();
    private _isSelected = ko.observable<boolean>(false);
    private _hoverItems: IFormElement[] = [];
    private _currentHoverIndex = 0;
    private _hoverIndicatorTimer = undefined;

    private clearHoverIndicator() {
        LayoutItem.draggedOverElement = null;
        LayoutItem.draggedOverPosition = null;
        if(this._hoverIndicatorTimer) {
            clearTimeout(this._hoverIndicatorTimer);
            this._hoverIndicatorTimer = undefined;
        }
        if(Array.isArray(this._hoverItems)) {
            this._hoverItems.forEach(item => item.dragPosition = "");
        }
    }

    constructor(private formElement: IFormElement) {
        this.isSelected = ko.computed(() => this.formElement.isDesignMode && this._isSelected());
    }

    get elements() { return this.formElement.elements; }
    get isContainer() { return this.formElement.isContainer; }
    get css() {
        let result = this.formElement.content instanceof UimlPart ? this.formElement.content["cssClasses"] : "";
        if(this.formElement.isDesignMode) {
            if(this.isSelected()) {
                result += " " + "bf-item--selected";
            }
            if(this.formElement.dragPosition) {
                result += " " + "bf-item--drag-over-" + this.formElement.dragPosition;
            }
        }
        return result;
    }
    isSelected: ko.Computed<boolean>;

    dragstart(model: LayoutItem, ev: DragEvent) {
        if(this.formElement.isDesignMode) {
            var originalEvent = <DragEvent>((<any>ev).originalEvent || ev);
            originalEvent.dataTransfer.setData("bf-item-json", JSON.stringify(UimlLayoutSerializer.serialize(model.formElement)));
            LayoutItem.draggedElement = model.formElement;
            ev.cancelBubble = true;
            return true;
        }
    }
    dragenter(model: LayoutItem, ev: DragEvent) {
        ev.preventDefault();
        ev.cancelBubble = true;
    }
    dragover(model: LayoutItem, ev: DragEvent) {
        if(model.formElement.isDesignMode) {
            var originalEvent = <DragEvent>((<any>ev).originalEvent || ev),
            targetItem = ko.dataFor(<any>originalEvent.target);
            var hoverLocation = getLocation(originalEvent.offsetX, originalEvent.offsetY, (<any>ev.target).clientWidth, (<any>ev.target).clientHeight);
            
            if(LayoutItem.draggedOverElement !== model.formElement || LayoutItem.draggedOverPosition !== hoverLocation) {
                model.clearHoverIndicator();
                LayoutItem.draggedOverElement = model.formElement;
                LayoutItem.draggedOverPosition = hoverLocation;
                model._hoverItems = [];
                fillDraggedOverInDirection(model.formElement, hoverLocation, model._hoverItems);
                model._currentHoverIndex = model._hoverItems.length - 1;
                const hoverIndicatorUpdater = () => {
                    model._hoverItems[model._currentHoverIndex].dragPosition = "";
                    model._currentHoverIndex = (model._currentHoverIndex + 1) % model._hoverItems.length;
                    model._hoverItems[model._currentHoverIndex].dragPosition = hoverLocation;
                    model._hoverIndicatorTimer = setTimeout(hoverIndicatorUpdater, 1000);
                }
                hoverIndicatorUpdater();
            }

            ev.preventDefault();
            ev.cancelBubble = true;
        }
    }
    dragleave(model: LayoutItem, ev: DragEvent) {
        if(model.formElement.isDesignMode) {
            model.clearHoverIndicator();
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    }
    drop(model: LayoutItem, ev: DragEvent) {
        if(model.formElement.isDesignMode) {
            var originalEvent = <DragEvent>((<any>ev).originalEvent || ev);
            var data = originalEvent.dataTransfer.getData("bf-item-json");
            if(!!data) {
                if(!!LayoutItem.draggedElement) {
                    LayoutItem.draggedElement.parent.elements.remove(LayoutItem.draggedElement);
                    LayoutItem.draggedElement = null;
                }
                const dropTargetElement = model._hoverItems[model._currentHoverIndex];
                dropTargetElement.addElement(JSON.parse(data), dropTargetElement.dragPosition, dropTargetElement);
            }
            model.clearHoverIndicator();
            ev.preventDefault();
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
            var originalEvent = ((<any>ev).originalEvent || ev);
            originalEvent.preventDefault();
            originalEvent.cancelBubble = true;
            return true;
        }
    }
}

ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            let formElement: IFormElement = params.element || UimlLayoutSerializer.createElement(params.uiml, null);
            if(!!params.context) {
                formElement.context = params.context;
            }
            if(!formElement.isContainer) {
                let itemElelemtContainer = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-content-holder")[0];
                formElement.render(<HTMLElement>itemElelemtContainer);
            }
            return new LayoutItem(formElement);
        }
    },
    template
});
