import * as ko from "knockout";

import { IRenderable } from "./form-element";

import "./uiml-parts.scss";

export class UimlPart implements IRenderable {
    static counter = 1;
    private id: number;
    constructor(private _partclass: string, ...params: any) {
        this.id = UimlPart.counter++;
        this.cssclass = params[0].cssClasses;
    }
    render(htmlElement: HTMLElement) {
        htmlElement.className += (" " + this.cssclass);
        htmlElement.innerHTML = this.partclass + this.id;
    }
    cssclass = "";
    get partclass() { return this._partclass; }
    parts = ko.observableArray<UimlPart>();
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