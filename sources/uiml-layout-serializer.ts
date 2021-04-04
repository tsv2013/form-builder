import { FormElement, IFormElement } from "./form-element";
import { UimlPartsRepository, UimlPart } from "./uiml-parts";

export class UimlLayoutSerializer {
    private static layoutPartClass = "layout";
    public static createRoot(): FormElement {
        var rootPart = UimlPartsRepository.create(UimlLayoutSerializer.layoutPartClass, { cssClasses: "root" });
        return new FormElement(rootPart, null);
    }
    public static createElement(uimlPart: UimlPart, parent: IFormElement): IFormElement {
        if(uimlPart.hasInnerLayout) {
            var groupElementJson = { partclass: UimlLayoutSerializer.layoutPartClass, cssClasses: "group", parts: [] };
            var groupElement = UimlPart.fromJSON(groupElementJson);
            groupElement.parts = uimlPart.part.parts || [];
            uimlPart.parts = [groupElement];
        }
        return new FormElement(uimlPart, parent);
    }
    public static createElements(collection: KnockoutObservableArray<IFormElement> | Array<IFormElement>, parts: any[] = [], parent: IFormElement) {
        parts.forEach(elementJson => {
            collection.push(UimlLayoutSerializer.createElement(UimlPart.fromJSON(elementJson), parent));
        });
    }
    public static serialize(formElement: IFormElement): any {
        const uimlPart = formElement.content;
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