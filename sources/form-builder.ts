import * as ko from "knockout";

import { FormElement } from "./form-element";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

import "./form-builder.scss";
import { UimlPart, UimlPartsRepository } from "./uiml-parts";
import { Form } from "./form";
var template = require("text-loader!./form-builder.html");

export class FormBuilder {
    private _layoutSubscription: ko.Computed;
    private _modelSubscription: ko.Computed;
    private static defaultText = '{"partclass": "layoutRow","cssClasses": "row","parts": []}';
    constructor(private _form: Form, toolboxItems: Array<any> = []) {
        this._modelSubscription = ko.computed(() => {
            this.root.context = _form.model;
        });
        this._layoutSubscription = ko.computed(() => {
            var layoutValue: any = _form.layout;
            if(!Array.isArray(layoutValue)) {
                layoutValue = [layoutValue];
            }
            (<UimlPart>this.root.content).parts = layoutValue.map(part => UimlPart.fromJSON(part));
        });
        toolboxItems.forEach(item => this.toolbox.push(item));
    }
    toolbox = ko.observableArray();
    root: FormElement = UimlLayoutSerializer.createRoot();
    dragstart(model, event) {
        var originalEvent = <DragEvent>((<any>event).originalEvent || event);
        originalEvent.dataTransfer.setData("bf-item-json", JSON.stringify(model.json));
        return true;
    }
    get jsonText() {
        if(this.root.elements().length > 0) {
            return JSON.stringify(UimlLayoutSerializer.serialize(this.root.elements()[0]), null, 2);
        }
        return FormBuilder.defaultText;
    }
    set jsonText(json: string) {
        this._form.layout = JSON.parse(json || FormBuilder.defaultText);
    }
    set isDesignMode(value: boolean) {
        this.root.isDesignMode = value;
    }
    get isDesignMode() {
        return this.root.isDesignMode;
    }
    toggleDesignMode(builder: FormBuilder) {
        builder.isDesignMode = !builder.isDesignMode;
        // TODO: re-think - how the whole layout will be updated, remove this crutch
        this.jsonText = this.jsonText;
    }
    dispose() {
        this._modelSubscription.dispose();
        this._layoutSubscription.dispose();
    }
}

ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return new FormBuilder(params.form, params.items);
        }
    },
    template
});
