import { FormElement } from "./form-element";
import { UimlPartsRepository } from "./uiml-parts";

export class UimlLayoutSerializer {
    static createElement(element: any, parent?: FormElement): FormElement {
        var part = UimlPartsRepository.create(element.partclass);
        part.initialize(element);
        var formElement = new FormElement(parent);
        formElement.content = part;
        UimlLayoutSerializer.createElements(formElement.elements, element.parts, formElement);
        return formElement;
    }
    static createElements(collection: KnockoutObservableArray<FormElement> | Array<FormElement>, parts: any[] = [], parent?: FormElement) {
        parts.forEach(element => {
            collection.push(UimlLayoutSerializer.createElement(element));
        });
    }
    static serialize(root: FormElement): any {
        
    }
}