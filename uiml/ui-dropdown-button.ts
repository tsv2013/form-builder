import * as ko from "knockout";
import { IAction } from "./ui-action";

import "./ui-dropdown-button.scss";
var template = require("text-loader!./ui-dropdown-button.html");

export class DropdownButton {
    constructor(private _item: IAction, private _hide: () => void) {
    }

    get title() {
        return this._item.title;
    }
    get visible() {
        return this.items.length > 0 && (!this._item.visible || ko.unwrap(this._item.visible));
    }
    get items() {
        return this._item.items || [];
    }
    click = (item: IAction, event: MouseEvent) => {
        setTimeout(() => {
            this._hide();
        });
        item.action();
    }
}

ko.components.register("ui-dropdown-button", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            const hide = () => {
                componentInfo.element.children[0].blur();
            }
            return new DropdownButton(params.item, hide);
        }
    },
    template
});
