import * as ko from "knockout";

export class FormElement {
    constructor() {

    }
    content: any;
    elements = ko.observableArray<FormElement>();
}
