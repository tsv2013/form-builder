import * as ko from "knockout";

import { FormElement } from "./form-element";

import "./layout-item.scss";
var template = require("text-loader!./layout-item.html");

export class LayoutItem {

    constructor(private formElement: FormElement) {
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
        //ev.target.appendChild(document.getElementById(data));
        //this.items.push(new LayoutItem());
    }
}

ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return  new LayoutItem(params.element);
        }
    },
    template
});