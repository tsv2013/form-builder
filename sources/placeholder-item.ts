import * as ko from "knockout";

import { PlaceHolder } from "./form-element";
import { LayoutItem } from "./layout-item";

import "./placeholder-item.scss";
var template = require("text-loader!./placeholder-item.html");

ko.components.register("placeholder-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var itemElelemt = (<HTMLElement>componentInfo.element).getElementsByClassName("bf-item-placeholder")[0]
            return  new LayoutItem(new PlaceHolder(params.parent), <HTMLElement>itemElelemt);
        }
    },
    template
});

export const PlaceholderComponent = null;