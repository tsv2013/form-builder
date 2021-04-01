import { IPart } from "../uiml";
import { createProperty } from "./uiml-parts";

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export function makeTitle(propertyName: string) {
    return propertyName.split("_").map(part => capitalize(part)).join(" ");
}

export function createPropertyEditor(propertyName: string) {
    return {
        partclass: "layoutItem",
        cssClasses: "item test-item test-group",
        parts: [
            {
                partclass: "label",
                cssClasses: "test-label",
                text: makeTitle(propertyName)
            },
            {
                partclass: "input",
                cssClasses: "test-input",
                data: propertyName
            }
        ]
    };
}

export function createColumnLayout(model: any, includeNestedObjects = false) {
    return {
        "partclass": "layoutColumn",
        "data": undefined,
        "cssClasses": "column",
        "parts": (Object.keys(model) || [])
            .filter(propertyName => includeNestedObjects || typeof model[propertyName] !== "object")
            .map(propertyName => createPropertyEditor(propertyName))
    }
}

export function createDefaultLayout(model: any) {
    const layout = {
        "partclass": "layoutRow",
        "data": undefined,
        "cssClasses": "row test-form",
        "parts": [ createColumnLayout(model) ]
    };
    (Object.keys(model) || [])
    .filter(propertyName => typeof model[propertyName] === "object")
    .forEach(propertyName => {
        const column = createColumnLayout(model[propertyName]);
        column.data = propertyName;
        layout.parts.push(column);
    })
    return layout;
}

export function modelFromJSON(json: any) {
    const model = {};
    let properties = Object.getOwnPropertyNames(json);
    properties = properties.concat(Object.keys(json));
    properties.forEach(key => {
        if(typeof json[key] !== "object") {
            model[key] = ko.observable(json[key]);
        } else {
            model[key] = modelFromJSON(json[key]);
        }
    })
    // return JSON.parse(JSON.stringify(json), (key: string, value: any) => {
    //     if(typeof value !== "object") {
    //         return ko.observable(value);
    //     }
    //     return value;
    // });
    return model;
}

export function traversePart(part: IPart, visit: (part: IPart) => void) {
    visit(part);
    (part.parts || []).forEach(child => {
        traversePart(child, visit);
    });
}

export function modelFromLayout(layout: any) {
    const model = {};
    traversePart(layout, (part: IPart) => {
        if(part["data"] !== undefined) {
            createProperty(model, {
                name: part["data"]
            });
        }
    });
    return model;
}

export function modelToJSON(model: any) {
    return ko.toJSON(model, null, 2)
}