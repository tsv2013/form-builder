import * as ko from "knockout";

import { LayoutItem } from "./layout-item";

import "./form-builder.scss";
var template = require("text-loader!./form-builder.html");

export class FormBuilder {
    static render(node: HTMLElement) {
        ko.applyBindings({}, node);
    }
    root = new LayoutItem();
    dragstart(model, event) {
        event.dataTransfer.setData("bf-item-json", JSON.stringify(model));
        return true;
    }
}

ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new FormBuilder();
        }
    },
    template
});