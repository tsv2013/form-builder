import * as ko from "knockout";

import "./ui-button.scss";
var template = require("text-loader!./ui-button.html");

ko.components.register("ui-button", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return params.item;
        }
    },
    template
});
