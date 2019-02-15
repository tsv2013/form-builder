import * as ko from "knockout";

import { FormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./layout-item.scss";
var template = require("text-loader!./layout-item.html");

export class LayoutItem {

    constructor(private formElement: FormElement, htmlElement: HTMLElement) {
        formElement.content.render(htmlElement);
    }

    get elements() { return this.formElement.elements; }
    get isContainer() {
        return this.elements().length > 0;
    }

    dragover(model, ev) {
        ev.preventDefault();
    }
    drop(model, ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("bf-item-json");
        var holder = this.formElement.parent || this.formElement;
        holder.elements.push(UimlLayoutSerializer.createElement(JSON.parse(data), holder));
        //ev.target.appendChild(document.getElementById(data));
        //this.items.push(new LayoutItem());
    }
}

ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var itemElelemt = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-placeholder")[0]
            return  new LayoutItem(params.element, <HTMLElement>itemElelemt);
        }
    },
    template
});