import { IObjectDescription } from "./object";

export var domain: {[index: string]: IObjectDescription} = {};

domain["panel"] = {
    name: "panel",
    properties: [
        { name: "text" },
        { name: "cssClasses" }
    ]
};

domain["layoutItem"] = {
    name: "layoutItem",
    properties: [
        { name: "cssClasses" }
    ]
};

domain["container"] = {
    name: "container",
    properties: [
        { name: "cssClasses" }
    ]
};

domain["label"] = {
    name: "label",
    properties: [
        { name: "cssClasses" }
    ]
};

domain["input"] = {
    name: "input",
    properties: [
        { name: "cssClasses" }
    ]
};

domain["layout"] = {
    name: "layout",
    properties: [
        { name: "cssClasses" }
    ]
};

domain["layoutRow"] = {
    name: "layoutRow",
    properties: [
        { name: "cssClasses" }
    ]
};

domain["layoutColumn"] = {
    name: "input",
    properties: [
        { name: "cssClasses" }
    ]
};

export function getObjectDescription(name: string) {
    return domain[name];
}

export function isSimpleType(name: string) {
    return !!name && (!domain[name] && name.indexOf("[]") == -1);
}

export function isArrayType(name: string) {
    return !!name && name.length > 2 && name[name.length-2] === "[" && name[name.length-1] === "]";
}

export function getArrayElementType(name: string) {
    if(isArrayType(name)) {
        return name.substring(0, name.length-2);
    }
    return undefined;
}
