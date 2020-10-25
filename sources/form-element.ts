import * as ko from "knockout";
import { IRenderable } from "./uiml-parts";
import { UimlLayoutSerializer } from "./uiml-layout-serializer";

export interface IFormElement extends IRenderable {
    parent: IFormElement;
    addElement(json: any, location: string): void;
    remove(): void;
    elements?: KnockoutObservableArray<IFormElement>;
    content?: IRenderable;
    width?: KnockoutObservable<string>;
}

export class PlaceHolder implements IFormElement {
    constructor(public parent: IFormElement) {

    }
    render(htmlElement: HTMLElement) {
        htmlElement.innerHTML = "Drop items here";
    }
    addElement(json: any, location: string = "bottom") {
        this.parent.addElement(json, location);
    }
    remove() {}
    isContainer = false;
}

export class FormElement implements IFormElement {
    constructor(public parent: IFormElement) {
        // ko.computed(() => {       
        //     let width = 99 / this.elements().length + "%";
        //     this.elements().forEach(element => {
        //         if(this.content["partclass"] === "layoutRow") {
        //             element.width(width);
        //         } else {
        //             element.width(undefined);
        //         }
        //     });
        // });
    }
    render(htmlElement: HTMLElement) {
        this.content.render(htmlElement);
    }
    addElement(json: any, location: string = "bottom") {
        if((this.content["partclass"] === "layoutRow" && json.partclass === "layoutColumn") || (this.isContainer && json.partclass === "layoutItem")) {
            this.elements.push(UimlLayoutSerializer.createElement(json, this));
        } else {
            var holder =  this.parent;
            var newElement = UimlLayoutSerializer.createElement(json, holder);
            if(holder.content["partclass"] === "layoutRow") {
                if(location === "top" || location === "bottom") {
                    var newRow = UimlLayoutSerializer.createElement({
                        partclass: "layoutColumn",
                        cssClasses: "column",
                        parts: [
                            
                        ]
                    }, holder);
                    holder.elements.splice(holder.elements.indexOf(this), 1, newRow);
                    this.parent = newRow;
                    newElement.parent = newRow;
                    if(location === "bottom") {
                        newRow.elements.push(this);
                        newRow.elements.push(newElement);
                    } else {
                        newRow.elements.push(newElement);
                        newRow.elements.push(this);
                    }
                } else {
                    holder.elements.splice(holder.elements.indexOf(this) + (location === "right" ? 1 : 0), 0, newElement);
                }
            } else if(holder.content["partclass"] === "layoutColumn") {
                if(location === "left" || location === "right") {
                    var newRow = UimlLayoutSerializer.createElement({
                        partclass: "layoutRow",
                        cssClasses: "row",
                        parts: [
                            
                        ]
                    }, holder);
                    holder.elements.splice(holder.elements.indexOf(this), 1, newRow);
                    this.parent = newRow;
                    newElement.parent = newRow;
                    if(location === "left") {
                        newRow.elements.push(newElement);
                        newRow.elements.push(this);
                    } else {
                        newRow.elements.push(this);
                        newRow.elements.push(newElement);
                    }
                } else {
                    holder.elements.splice(holder.elements.indexOf(this) + (location === "bottom" ? 1 : 0), 0, newElement);
                }
            } else {
                throw new Error("Invalid layout configuration.");
            }
        }
    }
    remove() {
        if(!!this.parent) {
            this.parent.elements.remove(this);
            if((this.parent.content["partclass"] === "layoutRow" || this.parent.content["partclass"] === "layoutColumn") && this.parent.elements().length === 0) {
                this.parent.remove();
            }
        }
    }
    content: IRenderable = new PlaceHolder(this);
    elements = ko.observableArray<IFormElement>();
    get isContainer() { return this.content.isContainer; }
    width = ko.observable();
}
