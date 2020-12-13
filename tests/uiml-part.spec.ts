import { UimlLayoutSerializer } from "../sources/uiml-layout-serializer";
import { UimlPart } from "../sources/uiml-parts";
import { render } from "../uiml";

test("render legacy layout - panel", () => {
    const json = {
        "id": "customer.public.customer.customer_id.payment.public.payment.customer_idPanel",
        "isRelation": true,
        "partclass": "panel",
        "visibleIndex": "customer.public.customer.customer_id.payment.public.payment.customer_id",
        "expanded": false,
        "cssClasses": "relation",
        "text": "payment",
        "customHeaderTemplate": "child-view-context-actions-template",
        "customBodyHeaderTemplate": "child-view-body-actions-template",
        "customHeaderData": "customer.public.customer.customer_id.payment.public.payment.customer_id",
        "parts": [{
            "id": "row2",
            "partclass": "layoutRow",
            "parts": [{
                "id": "customer.public.customer.customer_id.payment.public.payment.customer_idListView",
                "partclass": "child",
                "model": "customer.public.customer.customer_id.payment.public.payment.customer_id"
            }]
        }]
    };
    var elements = [];
    UimlLayoutSerializer.createElements(elements, [json], null);
    var element = elements[0];
    expect(element.content.partclass).toBe("panel");
    expect(element.elements().length).toBe(1);
    expect(element.elements()[0].content.partclass).toBe("layout");
    expect(element.elements()[0].elements().length).toBe(1);
    expect(element.elements()[0].elements()[0].content.partclass).toBe("layoutRow");
    expect(element.elements()[0].elements()[0].elements().length).toBe(1);
    var leafElement = element.elements()[0].elements()[0].elements()[0];
    expect(leafElement.content.partclass).toBe("child");
    expect(leafElement.isContainer).toBeFalsy();

    var container = document.createElement("div");
    UimlPart.render = render;
    leafElement.render(container);
    UimlPart.render = undefined;
    expect(container).toMatchSnapshot();
});