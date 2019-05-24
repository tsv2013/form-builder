import * as ko from "knockout";

export interface IRenderable {
    render(htmlElement: HTMLElement);
}

export interface IFormElement extends IRenderable {
    parent: IFormElement;
    elements: KnockoutObservableArray<IFormElement>;
}

export class PlaceHolder implements IFormElement {
    constructor(public parent: IFormElement) {

    }
    elements = ko.observableArray<IFormElement>();
    render(htmlElement: HTMLElement) {
        htmlElement.innerHTML = "Drop items here";
    }
}
export class FormElement implements IFormElement {
    constructor(public parent: IFormElement) {

    }
    render(htmlElement: HTMLElement) {
        this.content.render(htmlElement);
    }
    content: IRenderable = new PlaceHolder(this);
    elements = ko.observableArray<IFormElement>();
}
