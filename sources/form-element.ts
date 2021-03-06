import * as ko from "knockout";
import { IRenderable, UimlPart } from "./uiml-parts";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

export interface IFormElement extends IRenderable {
    parent: IFormElement;
    addElement(uimlPart: UimlPart, location: string, hoveredElement?: IFormElement): void;
    remove(): void;
    dispose(): void;
    elements?: KnockoutObservableArray<IFormElement>;
    content?: UimlPart;
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
    if(parent.content.partclass === "layoutRow") {
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
    if(current && (!current.content || current.content.partclass !== "layout")) {
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
    addElement(json: UimlPart, location: string = "bottom") {
        this.parent.addElement(json, location);
    }
    remove() {}
    dispose() {}
    isContainer = false;
    hasInnerLayout = false;
}

export class FormElement implements IFormElement {
    private _elementsSubscription: ko.Computed;
    private _context:any = undefined;
    private _isDesignMode = ko.observable(false);
    private _dragPosition = ko.observable<string>("");

    constructor(public content: UimlPart, public parent: IFormElement) {
        this._elementsSubscription = ko.computed(() => {
            const elements = (this.content.parts || []).map(part => UimlLayoutSerializer.createElement(part, this));
            const prevElements = this.elements.peek();
            this.elements(elements);
            prevElements.forEach(element => element.dispose());
        });
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
                let dataPath = this.content.data;
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
    addElement(uimlPart: UimlPart, location: string = "bottom", hoveredElement?: IFormElement) {
        if(!this.isContainer || this === hoveredElement) {
            this.parent.addElement(uimlPart, location, this);
        } else {
            const indexOfHovered = this.elements().indexOf(hoveredElement);
            const hoveredPart = this.content.parts[indexOfHovered];
            if(this.content.partclass === "layout") {
                const isHorizontalRoot = location === "left" || location === "right";
                const wrapperPart = isHorizontalRoot ? "layoutRow" : "layoutColumn";
                const wrapperClass = isHorizontalRoot ? "row" : "column";
                const wrappedPart = UimlPart.fromJSON({ partclass: wrapperPart, cssClasses: wrapperClass });
                wrappedPart.parts = [uimlPart];
                if(this.content.parts.length > 0) {
                    const rootPart = UimlPart.fromJSON({ partclass: wrapperPart, cssClasses: wrapperClass });
                    rootPart.parts = this.content.parts;
                    const parts = [rootPart];
                    parts.splice((location === "right" || location === "bottom" ? 1 : 0), 0, wrappedPart);
                    this.content.parts = parts;
                } else {
                    this.content.parts = [wrappedPart];
                }
                // var rootWrapper = UimlLayoutSerializer.createElement(UimlPart.fromJSON({ partclass: isHorizontalRoot ? "layoutRow" : "layoutColumn", cssClasses: isHorizontalRoot ? "row" : "column" }), this);
                // this.elements().forEach(element => element.parent = rootWrapper);
                // rootWrapper.elements(this.elements());
                // this.elements([rootWrapper]);
                // rootWrapper.addElement(uimlPart, location);
            }
            else if(this.content.partclass === "layoutRow") {
                if(!!hoveredPart && (location === "top" || location === "bottom")) {
                    var newColumnPart = UimlPart.fromJSON({ partclass: "layoutColumn", cssClasses: "column" });
                    newColumnPart.parts = [hoveredPart];
                    newColumnPart.parts.splice((location === "bottom" ? 1 : 0), 0, uimlPart);
                    this.content.parts.splice(indexOfHovered, 1, newColumnPart);
                    // var newColumn = UimlLayoutSerializer.createElement(UimlPart.fromJSON({ partclass: "layoutColumn", cssClasses: "column" }), this);
                    // this.elements.splice(this.elements().indexOf(hoveredElement), 1, newColumn);
                    // hoveredElement.parent = newColumn;
                    // newColumn.elements.push(hoveredElement);
                    // newColumn.addElement(uimlPart, location, hoveredElement);
                    // // this.parent.addElement(json, location, this);
                } else {
                    this.content.parts.splice(indexOfHovered + (location === "right" ? 1 : 0), 0, uimlPart);
                    // var newElement = UimlLayoutSerializer.createElement(uimlPart, this);
                    // this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "right" ? 1 : 0), 0, newElement);
                }
                this.content.parts = this.content.parts;
            } else {
                if(!!hoveredPart && (location === "left" || location === "right")) {
                    var newRowPart = UimlPart.fromJSON({ partclass: "layoutRow", cssClasses: "row" });
                    newRowPart.parts = [hoveredPart];
                    newRowPart.parts.splice((location === "right" ? 1 : 0), 0, uimlPart);
                    this.content.parts.splice(indexOfHovered, 1, newRowPart);
                    // var newRow = UimlLayoutSerializer.createElement(UimlPart.fromJSON({ partclass: "layoutRow", cssClasses: "row" }), this);
                    // this.elements.splice(this.elements().indexOf(hoveredElement), 1, newRow);
                    // hoveredElement.parent = newRow;
                    // newRow.elements.push(hoveredElement);
                    // newRow.addElement(uimlPart, location, hoveredElement);
                } else {
                    this.content.parts.splice(indexOfHovered + (location === "bottom" ? 1 : 0), 0, uimlPart);
                    // var newElement = UimlLayoutSerializer.createElement(uimlPart, this);
                    // this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "bottom" ? 1 : 0), 0, newElement);
                }
                this.content.parts = this.content.parts;
            }
        }
    }
    remove() {
        if(!!this.parent) {
            this.parent.elements.remove(this);
            if((this.parent.content.partclass === "layoutRow" || this.parent.content.partclass === "layoutColumn") && this.parent.elements().length === 0) {
                this.parent.remove();
            }
        }
    }
    dispose() {
        this._elementsSubscription.dispose();
    }
}
