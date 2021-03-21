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
                data: makeTitle(propertyName)
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
    return JSON.parse(JSON.stringify(json), (key: string, value: any) => {
        if(typeof value !== "object") {
            return ko.observable(value);
        }
        return value;
    });
}

export function modelToJSON(model: any) {
    return ko.toJSON(model, null, 2)
}