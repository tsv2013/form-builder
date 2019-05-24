import { FormElement, IFormElement } from "./form-element";
import { UimlPartsRepository } from "./uiml-parts";

export class UimlLayoutSerializer {
    static createRoot(): FormElement {
        var formElement = new FormElement(null);
        return formElement;
    }
    static createElement(element: any, parent?: IFormElement): IFormElement {
        var part = UimlPartsRepository.create(element.partclass, element);
        var formElement = new FormElement(parent);
        formElement.content = part;
        UimlLayoutSerializer.createElements(formElement.elements, element.parts, formElement);
        return formElement;
    }
    static createElements(collection: KnockoutObservableArray<IFormElement> | Array<IFormElement>, parts: any[] = [], parent?: IFormElement) {
        parts.forEach(element => {
            collection.push(UimlLayoutSerializer.createElement(element));
        });
    }
    static serialize(root: FormElement): any {
        
    }
}