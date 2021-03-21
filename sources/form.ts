import { createDefaultLayout, modelFromJSON, modelToJSON } from "./utils";
import { render } from "./form-builder";
import { createDefaultToolboxItems } from "./default-toolbox";
import { IPart } from "../uiml";

export class Form {
    private _layoutJson: ko.Observable<IPart>;
    private readonly _changeObserver: ko.Computed;

    constructor(private _object: any, private onChange: (object: any, json: string) => void) {
       this.model = modelFromJSON(_object);
       this._layoutJson = ko.observable(createDefaultLayout(this.model));
       this._changeObserver = ko.computed(() => this.onChange && this.onChange(this.object, modelToJSON(this.model)));
    }

    public get layoutJson() {
        return this._layoutJson();
    }
    public readonly model;
    public get object() {
        return ko.toJS(this.model);
    }
    dispose() {
        this._changeObserver.dispose();
    }

    public static show(object: any, at: HTMLElement | string, onChange: (object: any, json: string) => void) {
        const form = new Form(object, onChange);
        render(form.layoutJson, createDefaultToolboxItems(form.model), form.model, typeof at === "string" ? document.getElementById(at) : at);
        return form;
    }
}