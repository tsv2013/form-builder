import * as ko from "knockout";
import { htmlUiRendererPeers, render } from "./index";

import "./collection.scss";

var collectionEditorTemplate = require("text-loader!./collection.html");

export class CollectionWidgetViewModel {
    private _itemsSubscription: ko.Subscription;
    private readonly model: any;

    constructor(private options: { data: string, elementType: string }, public context: any) {
        this.model = context.$data;
        let data = this.model[options.data] || [];
        this.items(data);
        this._itemsSubscription = this.items.subscribe(items => this.model[this.options.data] = items);
    }

    collapsed = ko.observable(true);

    items = ko.observableArray();

    get title() {
        return `${this.collapsed()?'>':'v'} ${this.options.data} (${this.items().length})`;
    }

    get elementType() {
        return this.options.elementType;
    }

    add = (collectionWidget: CollectionWidgetViewModel) => {
        // TODO: pass creator function as a parameter
        this.items.push(this.model.create(this.elementType));
    }

    remove = (item: any) => {
        this.items.remove(item);
    }

    dispose() {
        this._itemsSubscription.dispose();
    }
}

ko.components.register("collection-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new CollectionWidgetViewModel(params.options, params.context);
        }
    },
    template: collectionEditorTemplate
});

// Widget registration in UIML rendering peers
//noinspection TypeScriptUnresolvedFunction
htmlUiRendererPeers[0].dclasses.push({
    id: "collection-editor",
    mapsto: "ComponentRenderer"
});