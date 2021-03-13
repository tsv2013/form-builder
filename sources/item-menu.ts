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
            title: "- Remove",
            action: () => formElement.remove(),
            visible: ko.computed(() => !!formElement.parent)
        });
    }

    menuItems = ko.observableArray<IMenuItem>();
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
