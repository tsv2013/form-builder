import * as ko from "knockout";
import { IPropertyDescription } from "../metadata/object";
import { getObjectDescription } from "../metadata/model";

import "./object.scss";

var objectEditorTemplate = require("text-loader!./object.html");

function createPropertyEditorUiml(propertyDescription: IPropertyDescription) {
    return {
        partclass: "layoutItem",
        cssClasses: "item test-item test-group",
        parts: [
            {
                partclass: "label",
                cssClasses: "test-label",
                data: propertyDescription.title || propertyDescription.name
            },
            {
                partclass: "input",
                cssClasses: "test-input",
                data: propertyDescription.name
            }
        ]
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
        parts: [
            
        ]
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
