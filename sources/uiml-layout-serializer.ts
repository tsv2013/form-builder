import { FormElement, IFormElement } from "./form-element";
import { UimlPartsRepository, UimlPart } from "./uiml-parts";

export class UimlLayoutSerializer {
    private static layoutPartClass = "layout";
    public static createRoot(): FormElement {
        var rootPart = UimlPartsRepository.create(UimlLayoutSerializer.layoutPartClass, { cssClasses: "root" });
        var formElement = new FormElement(rootPart, null);
        return formElement;
    }
    public static createElement(element: any, parent: IFormElement): IFormElement {
        var part = UimlPartsRepository.create(element.partclass, element);
        var formElement = new FormElement(part, parent);
        if(part.hasInnerLayout) {
            var groupElement = { partclass: UimlLayoutSerializer.layoutPartClass, cssClasses: "group", parts: element.parts };
            part.setParts([groupElement]);
            var groupPart = UimlPartsRepository.create(UimlLayoutSerializer.layoutPartClass, groupElement);
            var groupFormElement = new FormElement(groupPart, formElement);
            formElement.elements.push(groupFormElement);
            UimlLayoutSerializer.createElements(groupFormElement.elements, groupElement.parts, groupFormElement);
        } else {
            UimlLayoutSerializer.createElements(formElement.elements, element.parts, formElement);
        }
        return formElement;
    }
    public static createElements(collection: KnockoutObservableArray<IFormElement> | Array<IFormElement>, parts: any[] = [], parent: IFormElement) {
        parts.forEach(element => {
            collection.push(UimlLayoutSerializer.createElement(element, parent));
        });
    }
    public static serialize(formElement: IFormElement): any {
        const uimlPart = <UimlPart>formElement.content;
        var element: any = {
            partclass: uimlPart.partclass,
        };
        Object.keys(uimlPart.part).forEach(key => element[key] = uimlPart.part[key]);
        if(formElement.elements().length) {
            element.parts = formElement.elements().map(fe => UimlLayoutSerializer.serialize(fe));
        }
        if(Array.isArray(element.parts) && element.parts.length === 1 && element.parts[0].partclass === UimlLayoutSerializer.layoutPartClass) {
            element.parts = element.parts[0].parts;
        }
        return element;
    }
}