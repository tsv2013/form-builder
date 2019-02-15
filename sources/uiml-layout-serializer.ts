import { FormElement } from "./form-element";
import { UimlPartsRepository } from "./uiml-parts";

export class UimlLayoutSerializer {
    static createElements(collection: KnockoutObservableArray<FormElement> | Array<FormElement>, parts: any[] = []) {
        parts.forEach(element => {
            var part = UimlPartsRepository.create(element.partclass);
            var formElement = new FormElement();
            formElement.content = part;
            UimlLayoutSerializer.createElements(formElement.elements, element.parts);
            collection.push(formElement);
        });
    }
    static serialize(root: FormElement): any {
        
    }
}