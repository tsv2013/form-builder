import * as ko from "knockout";
import { IRenderable } from "./uiml-parts";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

export interface IFormElement extends IRenderable {
    parent: IFormElement;
    addElement(json: any): void;
    elements?: KnockoutObservableArray<IFormElement>;
    content?: IRenderable;
}

export class PlaceHolder implements IFormElement {
    constructor(public parent: IFormElement) {

    }
    render(htmlElement: HTMLElement) {
        htmlElement.innerHTML = "Drop items here";
    }
    addElement(json: any) {
        this.parent.addElement(json);
    }
    isContainer = false;
}

export class FormElement implements IFormElement {
    constructor(public parent: IFormElement) {

    }
    render(htmlElement: HTMLElement) {
        this.content.render(htmlElement);
    }
    addElement(json: any) {
        if((this.content["partclass"] === "layoutRow" && json.partclass === "layoutColumn") || (this.isContainer && json.partclass === "layoutItem")) {
            this.elements.push(UimlLayoutSerializer.createElement(json, this));
        } else {
            var holder =  this.parent;
            var newElement = UimlLayoutSerializer.createElement(json, holder);
            holder.elements.splice(holder.elements.indexOf(this) + 1, 0, newElement);
        }
        
    }
    content: IRenderable = new PlaceHolder(this);
    elements = ko.observableArray<IFormElement>();
    get isContainer() { return this.content.isContainer; }
}
