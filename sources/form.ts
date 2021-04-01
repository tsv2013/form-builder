import * as ko from "knockout";
import { createDefaultLayout, modelFromJSON, modelFromLayout, modelToJSON } from "./utils";
import { createDefaultToolboxItems } from "./default-toolbox";
import { IPart } from "../uiml";

export class Form {
    public static createDefaultLayout = createDefaultLayout;
    private _model: ko.Observable<any>;
    private _layout: ko.Observable<IPart>;
    private readonly _modelChangedObserver: ko.Computed;
    private readonly _layoutChangedObserver: ko.Computed;

    constructor(originalModel: any, layout: any, private onModelChanged?: (object: any, json: string) => void, private onLayoutChanged?: (layout: any) => void) {
        this._model = ko.observable(modelFromJSON(originalModel || {}));
        this._layout = ko.observable(layout || Form.createDefaultLayout(this.model));
        this._modelChangedObserver = ko.computed(() => this.onModelChanged && this.onModelChanged(this.object, modelToJSON(this.model)));
        this._layoutChangedObserver = ko.computed(() => {
            if(originalModel === null) {
                this._model(modelFromJSON(modelFromLayout(this.layout)));
            }
            this.onLayoutChanged && this.onLayoutChanged(this.layout);
        });
    }

    public get layout() {
        return this._layout();
    }
    public set layout(layout: any) {
        this._layout(layout);
    }
    public get model() {
        return this._model();
    }
    public get object() {
        return ko.toJS(this.model);
    }
    dispose() {
        this._modelChangedObserver.dispose();
        this._layoutChangedObserver.dispose();
    }

    public static show(model: any, layout: any, at: HTMLElement | string, onModelChanged?: (object: any, json: string) => void, onLayoutChanged?: (layout: any) => void) {
        const form = new Form(model, layout, onModelChanged, onLayoutChanged);
        const items = createDefaultToolboxItems(form.model);
        ko.applyBindings({ form, items }, typeof at === "string" ? document.getElementById(at) : at);
        return form;
    }
}
