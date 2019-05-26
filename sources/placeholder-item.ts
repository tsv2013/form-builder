import * as ko from "knockout";

import { PlaceHolder } from "./form-element";
import { LayoutItem } from "./layout-item";

import "./placeholder-item.scss";
var template = require("text-loader!./placeholder-item.html");

ko.components.register("placeholder-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            let itemElelemt = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-placeholder")[0];
            let formElement = new PlaceHolder(params.element);
            formElement.render(<HTMLElement>itemElelemt);
            return new LayoutItem(formElement);
        }
    },
    template
});

export const PlaceholderComponent = null;