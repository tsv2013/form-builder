import * as ko from "knockout";

import { IFormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./layout-item.scss";
var template = require("text-loader!./layout-item.html");

export class LayoutItem {

    constructor(private formElement: IFormElement, htmlElement: HTMLElement) {
        formElement.render(htmlElement);
    }

    get elements() { return this.formElement.elements; }
    get isContainer() {
        return this.formElement.elements().length > 0;
    }
    isSelected = ko.observable<boolean>(false);

    dragover(model, ev) {
        ev.preventDefault();
    }
    drop(model, ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("bf-item-json");
        var holder = this.formElement.parent || this.formElement;
        holder.elements.splice(holder.elements.indexOf(this.formElement) + 1, 0, UimlLayoutSerializer.createElement(JSON.parse(data), holder));
    }
}

ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var itemElelemt = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-content")[0]
            let formElement = params.element;
            return  new LayoutItem(formElement, <HTMLElement>itemElelemt);
        }
    },
    template
});