import * as ko from "knockout";

import { htmlUiRendererPeers } from "./uiml";

import "./layout.scss";

var layoutTemplate = require("text-loader!./layout.html");

export class LayoutViewModel {

}

ko.components.register("layout", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            // ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
            //     subscription.dispose();
            // });
            var panelFormElement = params.context.$parents[2];
            var layoutFormElement = panelFormElement.elements()[0];
            return {
                formElement: layoutFormElement,
                elements: ko.computed(() => {
                    return layoutFormElement.elements();
                })
            };
        }
    },
    template: layoutTemplate
});

// Widget registration in UIML rendering peers
//noinspection TypeScriptUnresolvedFunction
htmlUiRendererPeers[0].dclasses.push({
    id: "layout",
    mapsto: "ComponentRenderer"
});
