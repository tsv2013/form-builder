import * as ko from "knockout";

import "./form-builder.scss";
var template = require("text-loader!./form-builder.html");

export class FormBuilder {
    static render(node: HTMLElement) {
        ko.applyBindings(new FormBuilder(), node);
    }
}

ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return {
            };
        }
    },
    template
});