import * as ko from "knockout";

import { htmlUiRendererPeers, render } from "./index";

import "./panel.scss";

var panelTemplate = require("text-loader!./panel.html");

export class PanelWidgetViewModel {
    private _subscriptions = [];

    constructor(options, context) {
        this.$parent = context.$parent && context.$parent.data;
        var panelVisibleIndex = options.visibleIndex;
        if(!!panelVisibleIndex) {
            this.visible = context.$parent.visible[panelVisibleIndex];
            this._subscriptions.push(ko.computed(() => {
                var isNeedToExpand = ko.unwrap(this.visible);
                this.collapsed(!isNeedToExpand);
                if(isNeedToExpand) {
                    this.ready(true);
                }
            }));
        }
        this.collapsed(!options.expanded);
        this.ready(!!options.expanded);
        this.text = options.text;
        this.cssClasses = options.cssClasses;
    }
    collapsed = ko.observable(true);
    ready = ko.observable(false);
    visible: KnockoutObservable<boolean>;
    $parent;
    text = "";
    cssClasses = "";

    dispose() {
        this._subscriptions.forEach(subscription => subscription.dispose());
        this._subscriptions.splice(0, this._subscriptions.length);
        this.visible = undefined;
    }
}

ko.components.register("panel", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            let panelViewModel = new PanelWidgetViewModel(params.options, params.context);
            let renderContent = () => {
                var renderResult = [];
                var containerElement: HTMLElement = componentInfo.element.getElementsByClassName("panel__content")[0];
                containerElement.innerHTML = "";
                // TODO: remove this ...
                (params.options.parts || params.context.$parent.formElement.content.parts || []).forEach(part => {
                    var partContent = render(part, containerElement);
                    containerElement.appendChild(partContent);
                    renderResult.push(partContent);
                });
                return renderResult;
            };
            if(panelViewModel.ready()) {
                renderContent();
            } else {
                let subscription = panelViewModel.ready.subscribe(() => {
                    setTimeout(() => {
                        var nodes = renderContent();
                        if(nodes.length > 0) {
                            var childContext = params.context.createChildContext(params.model);
                            ko.applyBindings(childContext, nodes[0]);
                        }
                    }, 1);
                    subscription.dispose();
                });
            }
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, () => {
                panelViewModel.dispose();
            });
            return panelViewModel;
        }
    },
    template: panelTemplate
});

// Widget registration in UIML rendering peers
//noinspection TypeScriptUnresolvedFunction
htmlUiRendererPeers[0].dclasses.push({
    id: "panel",
    mapsto: "ComponentRenderer"
});
