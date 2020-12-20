import * as ko from "knockout";
import { IRenderable } from "./uiml-parts";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

export interface IFormElement extends IRenderable {
    parent: IFormElement;
    addElement(json: any, location: string, hoveredElement?: IFormElement): void;
    remove(): void;
    elements?: KnockoutObservableArray<IFormElement>;
    content?: IRenderable;
    context?: any;
    isDesignMode: boolean;
    dragPosition?: string;
}

export function hasParentEdgeInDirection(element: IFormElement, direction: string) {
    const parent = element && element.parent;
    if(!parent || !parent.elements) {
        return false;
    }
    const elements = ko.unwrap(parent.elements) || [];
    const index = elements.indexOf(element);
    if(parent.content["partclass"] === "layoutRow") {
        if(direction === "top" || direction === "bottom") {
            return true;
        }
        return index === 0 && direction === "left" || index === elements.length - 1 && direction === "right";
    } else {
        if(direction === "left" || direction === "right") {
            return true;
        }
        return index === 0 && direction === "top" || index === elements.length - 1 && direction === "bottom";
    }
}

export function fillDraggedOverInDirection(current: IFormElement, direction: string, elements: IFormElement[] = []) {
    if(current && current.content["partclass"] !== "layout") {
        elements.push(current);
        if(hasParentEdgeInDirection(current, direction)) {
            fillDraggedOverInDirection(current.parent, direction, elements);
        }
    }
}

export class PlaceHolder implements IFormElement {
    constructor(public parent: IFormElement) {

    }
    get isDesignMode() {
        return this.parent.isDesignMode;
    }
    render(htmlElement: HTMLElement) {
        htmlElement.innerHTML = "<span data-bind='if: formElement.isDesignMode'>Drop items here</span>";
    }
    addElement(json: any, location: string = "bottom") {
        this.parent.addElement(json, location);
    }
    remove() {}
    isContainer = false;
    hasInnerLayout = false;
}

export class FormElement implements IFormElement {
    private _context:any = undefined;
    private _isDesignMode = ko.observable(false);
    private _dragPosition = ko.observable<string>("");

    constructor(public content: IRenderable, public parent: IFormElement) {
    }

    elements = ko.observableArray<IFormElement>();

    get isContainer() { return this.content.isContainer; }
    get hasInnerLayout() { return this.content.hasInnerLayout; }

    get dragPosition() {
        return this._dragPosition();
    }
    set dragPosition(value: string) {
        this._dragPosition(value);
    }

    set isDesignMode(value: boolean) {
        this._isDesignMode(value);
    }
    get isDesignMode() {
        if(!!this.parent) {
            return this.parent.isDesignMode;
        }
        return this._isDesignMode();
    }

    set context(context: any) {
        this._context = context;
    }
    get context() {
        if(!this._context && this.parent) {
            this._context = this.parent.context;
            if(this.isContainer) {
                let dataPath = this.content["data"];
                if(!!dataPath) {
                    // TODO: support complex path
                    this._context = this.parent.context[dataPath];
                }
            }
        }
        return this._context;
    }
    render(htmlElement: HTMLElement) {
        if(this.content.hasInnerLayout || this.isContainer || this.elements().length === 0) {
            this.content.render(htmlElement);
        }
        else {
            this.elements().forEach(element => element.content.render(htmlElement));
        }
    }
    addElement(json: any, location: string = "bottom", hoveredElement?: IFormElement) {
        if(!this.isContainer || this === hoveredElement) {
            this.parent.addElement(json, location, this);
        } else {
            if(this.content["partclass"] === "layoutRow") {
                if(location === "top" || location === "bottom") {
                    var newColumn = UimlLayoutSerializer.createElement({ partclass: "layoutColumn", cssClasses: "column" }, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement), 1, newColumn);
                    hoveredElement.parent = newColumn;
                    newColumn.elements.push(hoveredElement);
                    newColumn.addElement(json, location, hoveredElement);
                    // this.parent.addElement(json, location, this);
                } else {
                    var newElement = UimlLayoutSerializer.createElement(json, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "right" ? 1 : 0), 0, newElement);
                }
            } else {
                if(location === "left" || location === "right") {
                    var newRow = UimlLayoutSerializer.createElement({ partclass: "layoutRow", cssClasses: "row" }, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement), 1, newRow);
                    hoveredElement.parent = newRow;
                    newRow.elements.push(hoveredElement);
                    newRow.addElement(json, location, hoveredElement);
                } else {
                    var newElement = UimlLayoutSerializer.createElement(json, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "bottom" ? 1 : 0), 0, newElement);
                }
                if(this.content["partclass"] === "layout" && this.elements().length > 1) {
                    const isHorizontalRoot = location === "left" || location === "right";
                    var rootWrapper = UimlLayoutSerializer.createElement({ partclass: isHorizontalRoot ? "layoutRow" : "layoutColumn", cssClasses: isHorizontalRoot ? "row" : "column" }, this);
                    this.elements().forEach(element => element.parent = rootWrapper);
                    rootWrapper.elements(this.elements());
                    this.elements([rootWrapper]);
                }
            }
        }
    }
    remove() {
        if(!!this.parent) {
            this.parent.elements.remove(this);
            if((this.parent.content["partclass"] === "layoutRow" || this.parent.content["partclass"] === "layoutColumn") && this.parent.elements().length === 0) {
                this.parent.remove();
            }
        }
    }
}
