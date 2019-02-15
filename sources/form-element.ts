import * as ko from "knockout";

export interface IRenderable {
    render(htmlElement: HTMLElement);
}

export class PlaceHolder implements IRenderable {
    render(htmlElement: HTMLElement) { }
}
export class FormElement {
    constructor(public parent?: FormElement) {

    }
    content: IRenderable = new PlaceHolder();
    elements = ko.observableArray<FormElement>();
}
