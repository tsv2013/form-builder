import { createDefaultLayout, modelFromJSON, modelToJSON } from "./utils";
import { render } from "./form-builder";
import { createDefaultToolboxItems } from "./default-toolbox";
import { IPart } from "../uiml";

export class Form {
    public static createDefaultLayout = createDefaultLayout;
    private _layout: ko.Observable<IPart>;
    private readonly _modelChangedObserver: ko.Computed;
    private readonly _layoutChangedObserver: ko.Computed;

    constructor(private _model: any, layout: any, private onModelChanged?: (object: any, json: string) => void, private onLayoutChanged?: (layout: any) => void) {
       this.model = modelFromJSON(_model || {});
       this._layout = ko.observable(layout || Form.createDefaultLayout(this.model));
       this._modelChangedObserver = ko.computed(() => this.onModelChanged && this.onModelChanged(this.object, modelToJSON(this.model)));
       this._layoutChangedObserver = ko.computed(() => this.onLayoutChanged && this.onLayoutChanged(this.layout));
    }

    public get layout() {
        return this._layout();
    }
    public set layout(layout: any) {
        this._layout(layout);
    }
    public readonly model;
    public get object() {
        return ko.toJS(this.model);
    }
    dispose() {
        this._modelChangedObserver.dispose();
        this._layoutChangedObserver.dispose();
    }

    public static show(model: any, layout: any, at: HTMLElement | string, onModelChanged?: (object: any, json: string) => void, onLayoutChanged?: (layout: any) => void) {
        const form = new Form(model, layout, onModelChanged, onLayoutChanged);
        render(form.layout, createDefaultToolboxItems(form.model), form.model, typeof at === "string" ? document.getElementById(at) : at);
        return form;
    }
}