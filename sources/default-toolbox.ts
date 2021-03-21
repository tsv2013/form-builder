import { createPropertyEditor, makeTitle } from "./utils";

export const defaultToolboxItems = [
    {
        title: "row",
        hint: "Drag to add row",
        json: {
            partclass: "layoutRow",
            cssClasses: "row",
            parts: [

            ]
        }
    },
    {
        title: "column",
        hint: "Drag to add column",
        json: {
            partclass: "layoutColumn",
            cssClasses: "column",
            parts: [

            ]
        }
    },
    {
        title: "panel",
        hint: "Drag to add panel",
        json: {
            partclass: "panel",
            cssClasses: "panel",
            parts: [

            ]
        }
    },
    {
        title: "label",
        hint: "Drag to add label",
        json: {
            partclass: "label",
            cssClasses: "test-label",
            data: "Label text"
        }
    },
    {
        title: "input",
        hint: "Drag to add input element",
        json: {
            partclass: "input",
            cssClasses: "test-input",
            data: "valName"
        }
    },
    {
        title: "composite",
        hint: "Drag to add composite element",
        json: {
            partclass: "layoutItem",
            cssClasses: "item test-item test-group",
            parts: [
                {
                    partclass: "label",
                    cssClasses: "test-label",
                    data: "Name"
                },
                {
                    partclass: "input",
                    cssClasses: "test-input",
                    data: "name"
                }
            ]
        }
    }
];

export function createToolboxItemsFor(model: any) {
    return (Object.keys(model) || [])
        .filter(propertyName => typeof model[propertyName] !== "object")
        .map(propertyName => {
            return {
                title: makeTitle(propertyName),
                hint: "Drag to add " + makeTitle(propertyName),
                json: createPropertyEditor(propertyName)
            };
        });
}

export function createDefaultToolboxItems(model: any) {
    return [].concat(defaultToolboxItems).concat(createToolboxItemsFor(model));
}