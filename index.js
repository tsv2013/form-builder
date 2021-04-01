var renderedsMap = Uiml.htmlUiRendererPeers[0].dclasses;
renderedsMap.push({ id: "textInput", mapsto: "InputRenderer" });
renderedsMap.push({ id: "plainEditor", mapsto: "InputRenderer" });
Uiml.refresh();

FormBuilder.UimlPart.render = Uiml.render;

///////////////////////////////////////////////////////////////////////////////////////////////////

var layoutJson = {
    partclass: "layoutRow",
    cssClasses: "row test-form"
};

// layoutJson = {
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
//   };

layoutJson = {
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
            "text": "Name"
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
  };

var model = {
    name: "Tom",
    surname: "Young",
    zipcode: "103844",
    city: "Kanzas",
    address: "Mountain drive, 754",
    phone: "2-300-765-11-22",
    data: {
        first_name: "Bob",
        last_name: "Sallivan",
        email: "bob@sallivan-family.org",
    }
}

var model = FormBuilder.Form.show(model, layoutJson, document.getElementById("form-builder-container"));

// var toolboxItems = [].concat(FormBuilder.defaultToolboxItems);
// toolboxItems.push({
//     title: "item",
//     hint: "Drag to add item",
//     json: {
//         partclass: "layoutItem",
//         cssClasses: "item",
//         parts: [
            
//         ]
//     }
// });
// toolboxItems = toolboxItems.concat(FormBuilder.createToolboxItemsFor(model))

// FormBuilder.render(layoutJson, toolboxItems, model, document.getElementById("form-builder-container"));
