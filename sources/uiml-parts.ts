import * as ko from "knockout";

import { getObjectDescription, isArrayType } from "../metadata/model";
import { IObjectDescription, IPropertyDescription } from "../metadata/object";

import "./uiml-parts.scss";

export interface IRenderable {
    render(htmlElement: HTMLElement);
    isContainer: boolean;
    hasInnerLayout: boolean;
}

export function createProperty(target: Object, propertyDescription: IPropertyDescription, value: any) {
    const observableValue = ko.observable(value); 
    Object.defineProperty(target, propertyDescription.name, {
        get: () => observableValue(),
        set: val => observableValue(val)
    });
}

export class UimlPart implements IRenderable {
    public static containerParts = ["layout", "layoutRow", "layoutColumn"];
    public static layoutHolderParts = ["panel"];
    public static layoutConvertableParts = {
        "view": "layout",
        "form": "layout",
        "koWith": "layoutColumn",
        "container": "layoutColumn",
        "accordion": "layoutColumn", // TODO: implement accordion/layout component
        "div": "container",
        "formGroup": "layoutItem"
    };
    public static render: (part: any, container?: HTMLElement) => HTMLElement = undefined;
    private static counter = 1;
    private id: number;
    private _part: any;
    private _objectDescription: IObjectDescription;
    constructor(private _partclass: string, ...params: any) {
        this.id = UimlPart.counter++;
        this._part = Object.assign({}, params[0]);
        this._objectDescription = getObjectDescription(_partclass);
        if(this._objectDescription) {
            this._objectDescription.properties.forEach(pd => {
                //let propertyType = pd.type || "string";
                //if(!isArrayType(propertyType)) {
                    createProperty(this, pd, this._part[pd.name]);
                //}
            });
        }
        createProperty(this, { name: "data" }, this._part.data);
    }
    render(htmlElement: HTMLElement) {
        if(UimlPart.render) {
            UimlPart.render(this, htmlElement);
        } else {
            htmlElement.className += (" " + this["cssClasses"]);
            if(!this.isContainer) {
                htmlElement.innerHTML = this.partclass + this.id;
            }
        }
    }
    get hasInnerLayout() {
        return UimlPart.layoutHolderParts.indexOf(this.partclass) !== -1;
    }
    get isContainer() {
        return UimlPart.containerParts.indexOf(this.partclass) !== -1;
    }
    get partclass() {
        return UimlPart.layoutConvertableParts[this._partclass] || this._partclass;
    }
    get part() {
        var part = Object.assign({}, this._part);
        part.data = this.data;
        if(this._objectDescription) {
            this._objectDescription.properties.forEach(pd => {
                part[pd.name] = this[pd.name];
            });
        }        
        return part;
    }
    parts;
    data;
    // get parts() {
    //     return this._part.parts;
    // }
    // set parts(parts: any[]) {
    //     this._part.parts = parts;
    // }
    toJSON() {
        return this.part;
    }
    // TODO: remove, use UimlPartsRepository
    create(partclass: string) {
        return new UimlPart(partclass);
    }
}

export class UimlPartsRepository {
    private static parts: {[key: string]: new (...params: any) => UimlPart } = {};
    private static _instance = new UimlPartsRepository();
    static get instance() { return UimlPartsRepository._instance; }
    static register(partclass: string, partConstructor: new () => UimlPart) {
        UimlPartsRepository.parts[partclass] = partConstructor;
    }
    static create(partclass: string, ...params: any) {
        if(!!UimlPartsRepository.parts[partclass]) {
            return new UimlPartsRepository.parts[partclass](...params);
        }
        return new UimlPart(partclass, ...params);
    }
}
