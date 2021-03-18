import * as ko from "knockout";

import { IAction } from "../uiml";

import { IFormElement } from "./form-element";

import "./item-menu.scss";
var template = require("text-loader!./item-menu.html");

export class ItemMenu {
    constructor(private formElement: IFormElement) {
        this.menuItems.push({
            title: "- Remove",
            action: () => formElement.remove(),
            visible: ko.computed(() => !!formElement.parent)
        });
    }

    menuItems = ko.observableArray<IAction>();
    get content() {
        return this.formElement.content;
    }
}

ko.components.register("item-menu", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new ItemMenu(params.element);
        }
    },
    template
});
