import * as ko from "knockout";
import { IPropertyDescription } from "../metadata/object";
import { getObjectDescription, isArrayType } from "../metadata/model";

import "./object.scss";

var objectEditorTemplate = require("text-loader!./object.html");

function createPropertyEditorUiml(propertyDescription: IPropertyDescription) {
    let propertyType = propertyDescription.type || "string";
    let parts = [];
    if(isArrayType(propertyType)) {
        parts.push({
            partclass: "collection-editor",
            cssClasses: "test-input",
            data: propertyDescription.name,
            elementType: propertyDescription.type
        });
    } else {
        parts.push({
            partclass: "label",
            cssClasses: "test-label",
            data: propertyDescription.title || propertyDescription.name
        });
        parts.push({
            partclass: "input",
            cssClasses: "test-input",
            data: propertyDescription.name
        });
    }
    return {
        partclass: "layoutItem",
        cssClasses: "item test-item test-group",
        parts
    }
}

export class ObjectWidgetViewModel {

    constructor(options = { }, public context: any) {
        this.layoutUiml.parts.push(createPropertyEditorUiml({name: "data"}));
        const objectDescription = getObjectDescription(context.partclass);
        if(objectDescription) {
            objectDescription.properties.forEach(pd => {
                this.layoutUiml.parts.push(createPropertyEditorUiml(pd));
            });
        }
    }
    layoutUiml = {
        partclass: "layoutColumn",
        cssClasses: "column",
        parts: []
    };

    dispose() {
    }
}

ko.components.register("object-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new ObjectWidgetViewModel(params.options, params.context);
        }
    },
    template: objectEditorTemplate
});
