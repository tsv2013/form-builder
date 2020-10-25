import * as ko from "knockout";

import { IFormElement } from "./form-element";

import "./item-menu.scss";
var template = require("text-loader!./item-menu.html");

export interface IMenuItem {
    title: string;
    action: () => void;
    visible?: KnockoutObservable<boolean>;
}

export class ItemMenu {
    constructor(private formElement: IFormElement) {
        this.menuItems.push({
            title: "x",
            action: () => formElement.remove(),
            visible: ko.computed(() => !!formElement.parent)
        });
    }

    menuItems = ko.observableArray<IMenuItem>();
}

ko.components.register("item-menu", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new ItemMenu(params.element);
        }
    },
    template
});
