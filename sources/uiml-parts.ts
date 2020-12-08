import "./uiml-parts.scss";

export interface IRenderable {
    render(htmlElement: HTMLElement);
    isContainer: boolean;
}

export class UimlPart implements IRenderable {
    public static layoutParts = ["layout", "layoutRow", "layoutColumn"];
    public static layoutConvertableParts = {
        "view": "layout",
        "form": "layout",
        "koWith": "layoutRow",
        "container": "layoutRow",
        "accordion": "layoutRow", // TODO: implement layout component
        "panel": "layoutRow", // TODO: implement layout component
        "div": "container",
        "formGroup": "layoutItem"
    };
    public static render: (part: any, container?: HTMLElement) => HTMLElement = undefined;
    private static counter = 1;
    private id: number;
    private _part: any;
    private _partToUse: any;
    constructor(private _partclass: string, ...params: any) {
        this.id = UimlPart.counter++;
        this._part = params[0] || {};
        this._partToUse = Object.assign({}, this._part);
        this._partToUse.partclass = this.partclass;
        this.cssclass = this._part.cssClasses;
    }
    render(htmlElement: HTMLElement) {
        if(UimlPart.render) {
            UimlPart.render(this._partToUse, htmlElement);
        } else {
            htmlElement.className += (" " + this.cssclass);
            if(!this.isContainer) {
                htmlElement.innerHTML = this.partclass + this.id;
            }
        }
    }
    cssclass = "";
    get isContainer() {
        return UimlPart.layoutParts.indexOf(this.partclass) !== -1;
    }
    get partclass() {
        return UimlPart.layoutConvertableParts[this._partclass] || this._partclass;
    }
    get part() {
        return this._part;
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
