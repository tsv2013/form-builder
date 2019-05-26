import "./uiml-parts.scss";

export interface IRenderable {
    render(htmlElement: HTMLElement);
    isContainer: boolean;
}

export class UimlPart implements IRenderable {
    private static counter = 1;
    private id: number;
    constructor(private _partclass: string, ...params: any) {
        this.id = UimlPart.counter++;
        this.cssclass = params[0].cssClasses;
    }
    render(htmlElement: HTMLElement) {
        htmlElement.className += (" " + this.cssclass);
        if(!this.isContainer) {
            htmlElement.innerHTML = this.partclass + this.id;
        }
    }
    cssclass = "";
    get isContainer() { return ["layout", "layoutRoot", "layoutRow", "layoutColumn"].indexOf(this._partclass) !== -1; }
    get partclass() { return this._partclass; }
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
