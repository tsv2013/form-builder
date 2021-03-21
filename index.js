var layoutJson = ko.observable({
    partclass: "layoutRow",
    cssClasses: "row test-form"
});

// layoutJson({
//     "id": "customer.public.customer.customer_id.payment.public.payment.customer_idPanel",
//     "isRelation": true,
//     "partclass": "panel",
//     "visibleIndex": "customer.public.customer.customer_id.payment.public.payment.customer_id",
//     "expanded": false,
//     "cssClasses": "relation",
//     "text": "payment",
//     "customHeaderTemplate": "child-view-context-actions-template",
//     "customBodyHeaderTemplate": "child-view-body-actions-template",
//     "customHeaderData": "customer.public.customer.customer_id.payment.public.payment.customer_id",
//     "parts": [
//       {
//         "id": "row2",
//         "partclass": "layoutRow",
//         "parts": [
//           {
//             "id": "customer.public.customer.customer_id.payment.public.payment.customer_idListView",
//             "partclass": "child",
//             "model": "customer.public.customer.customer_id.payment.public.payment.customer_id"
//           }
//         ]
//       }
//     ]
//   });

layoutJson({
    "partclass": "layoutRow",
    "cssClasses": "row test-form",
    "parts": [
      {
        "partclass": "panel",
        "text": "Test panel",
        "parts": [
          {
            "partclass": "label",
            "cssClasses": "test-label",
            "data": "Name"
          },
          {
            "partclass": "input",
            "cssClasses": "test-input",
            "data": "name"
          }
        ]
      },
      {
        "partclass": "input",
        "cssClasses": "test-input",
        "data": "name"
      }
    ]
  });

var model = {
    name: ko.observable("Tom"),
    surname: ko.observable("Young"),
    zipcode: ko.observable("103844"),
    city: ko.observable("Kanzas"),
    address: ko.observable("Mountain drive, 754"),
    phone: ko.observable("2-300-765-11-22"),
    data: {
        first_name: ko.observable("Bob"),
        last_name: ko.observable("Sallivan"),
        email: ko.observable("bob@sallivan-family.org"),
    }
}

var renderedsMap = Uiml.htmlUiRendererPeers[0].dclasses;
renderedsMap.push({ id: "textInput", mapsto: "InputRenderer" });
renderedsMap.push({ id: "plainEditor", mapsto: "InputRenderer" });
Uiml.refresh();

FormBuilder.UimlPart.render = Uiml.render;

var toolboxItems = [].concat(FormBuilder.defaultToolboxItems);
toolboxItems.push({
    title: "item",
    hint: "Drag to add item",
    json: {
        partclass: "layoutItem",
        cssClasses: "item",
        parts: [
            
        ]
    }
});
toolboxItems = toolboxItems.concat(FormBuilder.createToolboxItemsFor(model))


FormBuilder.render(layoutJson, toolboxItems, model, document.getElementById("form-builder-container"));
