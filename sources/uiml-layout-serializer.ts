import { FormElement, IFormElement } from "./form-element";
import { UimlPartsRepository, UimlPart } from "./uiml-parts";

export class UimlLayoutSerializer {
    static createRoot(): FormElement {
        var formElement = new FormElement(null);
        formElement.content = UimlPartsRepository.create("layout", { cssClasses: "root" });
        return formElement;
    }
    static createElement(element: any, parent: IFormElement): IFormElement {
        var part = UimlPartsRepository.create(element.partclass, element);
        var formElement = new FormElement(parent);
        formElement.content = part;
        UimlLayoutSerializer.createElements(formElement.elements, element.parts, formElement);
        return formElement;
    }
    static createElements(collection: KnockoutObservableArray<IFormElement> | Array<IFormElement>, parts: any[] = [], parent: IFormElement) {
        parts.forEach(element => {
            collection.push(UimlLayoutSerializer.createElement(element, parent));
        });
    }
    static serialize(formElement: IFormElement): any {
        var element: any = {
            partclass: (<UimlPart>formElement.content).partclass,
        };
        if((<UimlPart>formElement.content).cssclass) {
            element.cssClasses = (<UimlPart>formElement.content).cssclass;
        }
        if(formElement.elements().length) {
            element.parts = formElement.elements().map(fe => UimlLayoutSerializer.serialize(fe));
        }
        return element;
    }
}