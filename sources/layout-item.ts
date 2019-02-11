import * as ko from "knockout";

import "./layout-item.scss";
var template = require("text-loader!./layout-item.html");

export class LayoutItem {
    items = ko.observableArray<LayoutItem>();
    get isContainer() {
        return this.items().length > 0;
    }

    dragover(model, ev) {
        ev.preventDefault();
    }
    drop(model, ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("bf-item-json");
        //ev.target.appendChild(document.getElementById(data));
        this.items.push(new LayoutItem());
    }
}

ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return  new LayoutItem();
        }
    },
    template
});