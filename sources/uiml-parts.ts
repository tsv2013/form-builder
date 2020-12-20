import "./uiml-parts.scss";

export interface IRenderable {
    render(htmlElement: HTMLElement);
    isContainer: boolean;
    hasInnerLayout: boolean;
}

export class UimlPart implements IRenderable {
    public static containerParts = ["layout", "layoutRow", "layoutColumn"];
    public static layoutHolderParts = ["panel"];
    public static layoutConvertableParts = {
        "view": "layout",
        "form": "layout",
        "koWith": "layoutRow",
        "container": "layoutRow",
        "accordion": "layoutRow", // TODO: implement accordion/layout component
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
        this._part = Object.assign({}, params[0]);
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
        return this._part;
    }
    get data() {
        return this._part.data;
    }
    setParts(parts: any[]) {
        this._part.parts = parts;
        this._partToUse.parts = parts;
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
