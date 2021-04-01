(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("Uiml", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["Uiml"] = factory(require("knockout"));
	else
		root["Uiml"] = factory(root["ko"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_knockout__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./uiml/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./metadata/model.ts":
/*!***************************!*\
  !*** ./metadata/model.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayElementType = exports.isArrayType = exports.isSimpleType = exports.getObjectDescription = exports.domain = void 0;
exports.domain = {};
exports.domain["part"] = {
    name: "part",
    properties: [
        { name: "partclass" },
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["panel"] = {
    name: "panel",
    properties: [
        { name: "text" },
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["layoutItem"] = {
    name: "layoutItem",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["container"] = {
    name: "container",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["label"] = {
    name: "label",
    properties: [
        { name: "text" },
        { name: "cssClasses" }
    ]
};
exports.domain["input"] = {
    name: "input",
    properties: [
        { name: "cssClasses" }
    ]
};
exports.domain["layout"] = {
    name: "layout",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["layoutRow"] = {
    name: "layoutRow",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
exports.domain["layoutColumn"] = {
    name: "input",
    properties: [
        { name: "parts", type: "part[]" },
        { name: "cssClasses" }
    ]
};
function getObjectDescription(name) {
    return exports.domain[name];
}
exports.getObjectDescription = getObjectDescription;
function isSimpleType(name) {
    return !!name && (!exports.domain[name] && name.indexOf("[]") == -1);
}
exports.isSimpleType = isSimpleType;
function isArrayType(name) {
    return !!name && name.length > 2 && name[name.length - 2] === "[" && name[name.length - 1] === "]";
}
exports.isArrayType = isArrayType;
function getArrayElementType(name) {
    if (isArrayType(name)) {
        return name.substring(0, name.length - 2);
    }
    return undefined;
}
exports.getArrayElementType = getArrayElementType;


/***/ }),

/***/ "./node_modules/text-loader/index.js!./uiml/collection.html":
/*!*********************************************************!*\
  !*** ./node_modules/text-loader!./uiml/collection.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='collection' data-bind=\"\">\r\n    <div class=\"collection__header\"\r\n        data-bind=\"click: function () { collapsed(!collapsed()); }, css: { 'collection__header--collapsed': collapsed }\">\r\n        <span data-bind=\"text: title\"></span>\r\n    </div>\r\n    <div class=\"collection__content\" data-bind=\"css: { 'collection__content--hidden': collapsed }\">\r\n        <div class=\"collection__item-menu\">\r\n            <ui-dropdown-button params=\"item: addAction\"></ui-dropdown-button>\r\n        </div>\r\n        <!-- ko foreach: items -->\r\n        <div class=\"collection__item\">\r\n            <object-editor params=\"context: $data, type: $parent.elementType\"></object-editor>\r\n            <div class=\"collection__item-menu\">\r\n                <div class=\"bf-item-menu__button\" data-bind=\"click: function() { $parent.remove($data); }\">- Remove</div>\r\n            </div>\r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./uiml/layout.html":
/*!*****************************************************!*\
  !*** ./node_modules/text-loader!./uiml/layout.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko foreach: elements -->\r\n<layout-item params=\"element: $data\" data-bind=\"style: {  }\"></layout-item>\r\n<!-- /ko -->\r\n<!-- ko if: elements().length === 0 -->\r\n<placeholder-item params=\"element: formElement\"></placeholder-item>\r\n<!-- /ko -->\r\n"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./uiml/object.html":
/*!*****************************************************!*\
  !*** ./node_modules/text-loader!./uiml/object.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='object' data-bind=\"\">\r\n    <layout-item params=\"uiml: layoutUiml, context: context\" data-bind=\"style: {  }\"></layout-item>\r\n</div>"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./uiml/panel.html":
/*!****************************************************!*\
  !*** ./node_modules/text-loader!./uiml/panel.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel' data-bind=\"visible: !$data.visible || $data.visible(), css: cssClasses\">\r\n    <div class='panel__header'\r\n        data-bind=\"click: function () { collapsed(!collapsed()); ready(true); }, css: { 'panel__header--collapsed': collapsed }\">\r\n        <!-- ko if: !!$data.visible -->\r\n        <span class='panel__header-close-icon' data-bind=\"click: function () { visible(false); }\">&#10060;</span>\r\n        <!-- /ko -->\r\n        <div class=\"panel__header-group\">\r\n            <span class='panel__header-caption' data-bind=\"text: text || 'Panel title'\"></span>\r\n            <span class='panel__header-collapser' data-bind=\"text: (collapsed() ? '&#709;' : '&#708;')\"></span>\r\n        </div>\r\n    </div>\r\n    <div class='panel__body' data-bind=\"css: { 'panel__body--hidden': collapsed }\">\r\n        <div class=\"panel__content\" data-bind=\"visible: !collapsed(), with: $parent\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./uiml/ui-button.html":
/*!********************************************************!*\
  !*** ./node_modules/text-loader!./uiml/ui-button.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-item-menu__item bf-item-menu__button\" data-bind=\"text: title, click: action, clickBubble: false, visible: !$data.visible || $data.visible()\">\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./uiml/ui-dropdown-button.html":
/*!*****************************************************************!*\
  !*** ./node_modules/text-loader!./uiml/ui-dropdown-button.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-item-menu__dropdown-container\" tabindex=\"-1\">\r\n    <div class=\"bf-item-menu__dropdown\" data-bind=\"text: title, clickBubble: false, visible: visible\">\r\n    </div>\r\n    <div class=\"bf-item-menu__dropdown-items\" data-bind=\"visible: visible\">\r\n        <!-- ko foreach: items -->\r\n        <div class=\"bf-item-menu__dropdown-item\" data-bind=\"text: title, click: $parent.click, clickBubble: false, visible: !$data.visible || $data.visible()\">\r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./uiml/collection.scss":
/*!******************************!*\
  !*** ./uiml/collection.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uiml/collection.ts":
/*!****************************!*\
  !*** ./uiml/collection.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionWidgetViewModel = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var index_1 = __webpack_require__(/*! ./index */ "./uiml/index.ts");
__webpack_require__(/*! ./collection.scss */ "./uiml/collection.scss");
var collectionEditorTemplate = __webpack_require__(/*! text-loader!./collection.html */ "./node_modules/text-loader/index.js!./uiml/collection.html");
var CollectionWidgetViewModel = (function () {
    function CollectionWidgetViewModel(options, context) {
        var _this = this;
        this.options = options;
        this.context = context;
        this.collapsed = ko.observable(true);
        this.items = ko.observableArray();
        this.addAction = {
            title: "+ Add",
            items: []
        };
        this.remove = function (item) {
            _this.items.remove(item);
        };
        this.model = context.$data;
        var data = this.model[options.data] || [];
        this.items(data);
        this._itemsSubscription = this.items.subscribe(function (items) { return _this.model[_this.options.data] = items; });
        var types = ["label", "input", "panel"];
        types.forEach(function (type) {
            _this.addAction.items.push({
                title: type,
                action: function () { return _this.add(type); }
            });
        });
    }
    Object.defineProperty(CollectionWidgetViewModel.prototype, "title", {
        get: function () {
            return (this.collapsed() ? '>' : 'v') + " " + this.options.data + " (" + this.items().length + ")";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CollectionWidgetViewModel.prototype, "elementType", {
        get: function () {
            return this.options.elementType;
        },
        enumerable: false,
        configurable: true
    });
    CollectionWidgetViewModel.prototype.add = function (elementType) {
        this.items.push(this.model.create(elementType));
    };
    CollectionWidgetViewModel.prototype.dispose = function () {
        this._itemsSubscription.dispose();
    };
    return CollectionWidgetViewModel;
}());
exports.CollectionWidgetViewModel = CollectionWidgetViewModel;
ko.components.register("collection-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new CollectionWidgetViewModel(params.options, params.context);
        }
    },
    template: collectionEditorTemplate
});
index_1.htmlUiRendererPeers[0].dclasses.push({
    id: "collection-editor",
    mapsto: "ComponentRenderer"
});


/***/ }),

/***/ "./uiml/index.ts":
/*!***********************!*\
  !*** ./uiml/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh = exports.render = void 0;
var uiml_1 = __webpack_require__(/*! ./uiml */ "./uiml/uiml.ts");
var uiml_wrapper_1 = __webpack_require__(/*! ./uiml-wrapper */ "./uiml/uiml-wrapper.ts");
__exportStar(__webpack_require__(/*! ./uiml */ "./uiml/uiml.ts"), exports);
__exportStar(__webpack_require__(/*! ./renderer */ "./uiml/renderer.ts"), exports);
__exportStar(__webpack_require__(/*! ./panel */ "./uiml/panel.ts"), exports);
__exportStar(__webpack_require__(/*! ./layout */ "./uiml/layout.ts"), exports);
__exportStar(__webpack_require__(/*! ./object */ "./uiml/object.ts"), exports);
__exportStar(__webpack_require__(/*! ./collection */ "./uiml/collection.ts"), exports);
__exportStar(__webpack_require__(/*! ./ui-action */ "./uiml/ui-action.ts"), exports);
__exportStar(__webpack_require__(/*! ./ui-button */ "./uiml/ui-button.ts"), exports);
__exportStar(__webpack_require__(/*! ./ui-dropdown-button */ "./uiml/ui-dropdown-button.ts"), exports);
var uimlWrapper = new uiml_wrapper_1.UIMLWrapper(typeof config !== "undefined" && config || { uimlinterface: {}, peers: uiml_1.htmlUiRendererPeers });
function render(part, container) {
    var renderer = uimlWrapper.createRenderer(part);
    return renderer.render(container);
}
exports.render = render;
function refresh() {
    uimlWrapper.refresh();
}
exports.refresh = refresh;


/***/ }),

/***/ "./uiml/layout.scss":
/*!**************************!*\
  !*** ./uiml/layout.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uiml/layout.ts":
/*!************************!*\
  !*** ./uiml/layout.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutViewModel = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var uiml_1 = __webpack_require__(/*! ./uiml */ "./uiml/uiml.ts");
__webpack_require__(/*! ./layout.scss */ "./uiml/layout.scss");
var layoutTemplate = __webpack_require__(/*! text-loader!./layout.html */ "./node_modules/text-loader/index.js!./uiml/layout.html");
var LayoutViewModel = (function () {
    function LayoutViewModel() {
    }
    return LayoutViewModel;
}());
exports.LayoutViewModel = LayoutViewModel;
ko.components.register("layout", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var panelFormElement = params.context.$parents[2];
            var layoutFormElement = panelFormElement.elements()[0];
            return {
                formElement: layoutFormElement,
                elements: ko.computed(function () {
                    return layoutFormElement.elements();
                })
            };
        }
    },
    template: layoutTemplate
});
uiml_1.htmlUiRendererPeers[0].dclasses.push({
    id: "layout",
    mapsto: "ComponentRenderer"
});


/***/ }),

/***/ "./uiml/object.scss":
/*!**************************!*\
  !*** ./uiml/object.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uiml/object.ts":
/*!************************!*\
  !*** ./uiml/object.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWidgetViewModel = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var model_1 = __webpack_require__(/*! ../metadata/model */ "./metadata/model.ts");
__webpack_require__(/*! ./object.scss */ "./uiml/object.scss");
var objectEditorTemplate = __webpack_require__(/*! text-loader!./object.html */ "./node_modules/text-loader/index.js!./uiml/object.html");
function createPropertyEditorUiml(propertyDescription) {
    var propertyType = propertyDescription.type || "string";
    var parts = [];
    if (model_1.isArrayType(propertyType)) {
        parts.push({
            partclass: "collection-editor",
            cssClasses: "test-input",
            data: propertyDescription.name,
            elementType: propertyDescription.type
        });
    }
    else {
        parts.push({
            partclass: "label",
            cssClasses: "test-label",
            text: propertyDescription.title || propertyDescription.name
        });
        parts.push({
            partclass: "input",
            cssClasses: "test-input",
            data: propertyDescription.name
        });
    }
    return {
        partclass: "layoutItem",
        cssClasses: "item test-item test-group",
        parts: parts
    };
}
var ObjectWidgetViewModel = (function () {
    function ObjectWidgetViewModel(options, context) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.context = context;
        this.layoutUiml = {
            partclass: "layoutColumn",
            cssClasses: "column",
            parts: []
        };
        this.layoutUiml.parts.push(createPropertyEditorUiml({ name: "data" }));
        var objectDescription = model_1.getObjectDescription(context.partclass);
        if (objectDescription) {
            objectDescription.properties.forEach(function (pd) {
                _this.layoutUiml.parts.push(createPropertyEditorUiml(pd));
            });
        }
    }
    ObjectWidgetViewModel.prototype.dispose = function () {
    };
    return ObjectWidgetViewModel;
}());
exports.ObjectWidgetViewModel = ObjectWidgetViewModel;
ko.components.register("object-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new ObjectWidgetViewModel(params.options, params.context);
        }
    },
    template: objectEditorTemplate
});


/***/ }),

/***/ "./uiml/panel.scss":
/*!*************************!*\
  !*** ./uiml/panel.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uiml/panel.ts":
/*!***********************!*\
  !*** ./uiml/panel.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelWidgetViewModel = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var index_1 = __webpack_require__(/*! ./index */ "./uiml/index.ts");
__webpack_require__(/*! ./panel.scss */ "./uiml/panel.scss");
var panelTemplate = __webpack_require__(/*! text-loader!./panel.html */ "./node_modules/text-loader/index.js!./uiml/panel.html");
var PanelWidgetViewModel = (function () {
    function PanelWidgetViewModel(options, context) {
        var _this = this;
        this._subscriptions = [];
        this.collapsed = ko.observable(true);
        this.ready = ko.observable(false);
        this.text = "";
        this.cssClasses = "";
        this.$parent = context.$parent && context.$parent.data;
        var panelVisibleIndex = options.visibleIndex;
        if (!!panelVisibleIndex) {
            this.visible = context.$parent.visible[panelVisibleIndex];
            this._subscriptions.push(ko.computed(function () {
                var isNeedToExpand = ko.unwrap(_this.visible);
                _this.collapsed(!isNeedToExpand);
                if (isNeedToExpand) {
                    _this.ready(true);
                }
            }));
        }
        this.collapsed(!options.expanded);
        this.ready(!!options.expanded);
        this.text = options.text;
        this.cssClasses = options.cssClasses;
    }
    PanelWidgetViewModel.prototype.dispose = function () {
        this._subscriptions.forEach(function (subscription) { return subscription.dispose(); });
        this._subscriptions.splice(0, this._subscriptions.length);
        this.visible = undefined;
    };
    return PanelWidgetViewModel;
}());
exports.PanelWidgetViewModel = PanelWidgetViewModel;
ko.components.register("panel", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var panelViewModel = new PanelWidgetViewModel(params.options, params.context);
            var renderContent = function () {
                var renderResult = [];
                var containerElement = componentInfo.element.getElementsByClassName("panel__content")[0];
                containerElement.innerHTML = "";
                (params.options.parts || []).forEach(function (part) {
                    var partContent = index_1.render(part, containerElement);
                    containerElement.appendChild(partContent);
                    renderResult.push(partContent);
                });
                return renderResult;
            };
            if (panelViewModel.ready()) {
                renderContent();
            }
            else {
                var subscription_1 = panelViewModel.ready.subscribe(function () {
                    setTimeout(function () {
                        var nodes = renderContent();
                        if (nodes.length > 0) {
                            var childContext = params.context.createChildContext(params.model);
                            ko.applyBindings(childContext, nodes[0]);
                        }
                    }, 1);
                    subscription_1.dispose();
                });
            }
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                panelViewModel.dispose();
            });
            return panelViewModel;
        }
    },
    template: panelTemplate
});
index_1.htmlUiRendererPeers[0].dclasses.push({
    id: "panel",
    mapsto: "ComponentRenderer"
});


/***/ }),

/***/ "./uiml/renderer.ts":
/*!**************************!*\
  !*** ./uiml/renderer.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputRenderer = exports.LabelRenderer = exports.ContainerRenderer = exports.ComponentRenderer = exports.InterfaceRenderer = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var uiml_1 = __webpack_require__(/*! ./uiml */ "./uiml/uiml.ts");
function template(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return div.children.length === 1 ? div.children[0] : div;
}
var InterfaceRenderer = (function () {
    function InterfaceRenderer(part, uimlWrapper) {
        var _this = this;
        this.renderers = [];
        this.part = part;
        this.styles = uimlWrapper.getStyles(part);
        (part.parts || []).forEach(function (partInfo) {
            _this.renderers.push(uimlWrapper.createRenderer(partInfo));
        });
    }
    InterfaceRenderer.prototype.getCustomProcessedStyles = function () {
        return ["cssClasses", "text", "data"];
    };
    InterfaceRenderer.prototype.applyStyles = function (part, element) {
        var _this = this;
        Object.keys(this.styles).forEach(function (key) {
            var styleName = key;
            var styleValue = _this.styles[key];
            if (_this.getCustomProcessedStyles().indexOf(styleName) === -1) {
                element.css(styleName, styleValue);
            }
        });
        Object.keys(this.styles.cssClasses)
            .map(function (key) { return _this.styles.cssClasses[key]; })
            .forEach(function (className) {
            element.className += (" " + className);
        });
        var text = this.getProperty("text");
        if (text && element.children.length === 0) {
            element.innerText = text;
        }
        var html = this.getProperty("html");
        if (html && element.children.length === 0) {
            element.innerHTML = html;
        }
    };
    InterfaceRenderer.prototype.getProperty = function (propertyName) {
        return this.part[propertyName] !== undefined ? this.part[propertyName] : this.styles[propertyName];
    };
    InterfaceRenderer.prototype.renderChildren = function (container) {
        this.renderers.forEach(function (renderer) {
            renderer.render(container);
        });
    };
    InterfaceRenderer.prototype.getRenderResult = function () {
        return template("<div/>");
    };
    InterfaceRenderer.prototype.render = function (container) {
        if (container === void 0) { container = null; }
        var renderResult = this.getRenderResult();
        var dataBindValue = this.getProperty("dataBind");
        if (dataBindValue !== undefined) {
            renderResult.dataset.bind = Object.keys(dataBindValue).map(function (k) { return k + ": " + dataBindValue[k]; }).join(", ");
        }
        this.applyStyles(this.part, renderResult);
        this.renderChildren(renderResult);
        var hint = this.getProperty("hint");
        if (!!hint) {
            renderResult.title = hint;
        }
        if (container) {
            container.append(renderResult);
        }
        return renderResult;
    };
    return InterfaceRenderer;
}());
exports.InterfaceRenderer = InterfaceRenderer;
var ComponentRenderer = (function (_super) {
    __extends(ComponentRenderer, _super);
    function ComponentRenderer(part, uimlWrapper) {
        return _super.call(this, part, uimlWrapper) || this;
    }
    ComponentRenderer.prototype.render = function (container) {
        var widgetName = ((ComponentRenderer.componentPrefix ? (ComponentRenderer.componentPrefix + "-") : "") + this.part.partclass).toLowerCase();
        var renderResult;
        var widgetOptions = JSON.stringify(this.part).split("\"").join("'");
        if (ko.components.isRegistered(widgetName)) {
            renderResult = template("<" + widgetName + " params=\"{ model: $data, context: $context, options: " + widgetOptions + "}\"/>");
        }
        else {
            if (typeof uiml_1.htmlUiRendererPeers[0].wloaders[widgetName] === "function") {
                renderResult = template("<div data-bind=\"lazyWidget: { name: '" + widgetName + "', options: " + widgetOptions + " }\"/>");
            }
            else {
                renderResult = template("<component-stub params=\"{ message: 'Error: Component " + widgetName + " is not installed.'}\"/>");
            }
        }
        this.applyStyles(this.part, renderResult);
        container.append(renderResult);
        return renderResult;
    };
    ComponentRenderer.componentPrefix = "";
    return ComponentRenderer;
}(InterfaceRenderer));
exports.ComponentRenderer = ComponentRenderer;
ko.components.register("component-stub", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return {
                message: params.message
            };
        }
    },
    template: "<div data-bind='text: message'></div>"
});
var ContainerRenderer = (function (_super) {
    __extends(ContainerRenderer, _super);
    function ContainerRenderer(part, uimlWrapper) {
        return _super.call(this, part, uimlWrapper) || this;
    }
    ContainerRenderer.prototype.getRenderResult = function () {
        var bindings = [];
        var visible = this.getProperty("visible");
        if (!!visible) {
            bindings.push("visible: " + visible);
        }
        var css = this.getProperty("css");
        if (!!css) {
            bindings.push("css: " + css);
        }
        var element = template("<div data-bind='" + bindings.join(", ") + "'/>");
        return element;
    };
    return ContainerRenderer;
}(InterfaceRenderer));
exports.ContainerRenderer = ContainerRenderer;
var LabelRenderer = (function (_super) {
    __extends(LabelRenderer, _super);
    function LabelRenderer(part, uimlWrapper) {
        return _super.call(this, part, uimlWrapper) || this;
    }
    LabelRenderer.prototype.getRenderResult = function () {
        return template("<label>" + this.getProperty("text") + "</label>");
    };
    return LabelRenderer;
}(InterfaceRenderer));
exports.LabelRenderer = LabelRenderer;
var InputRenderer = (function (_super) {
    __extends(InputRenderer, _super);
    function InputRenderer(part, uimlWrapper) {
        return _super.call(this, part, uimlWrapper) || this;
    }
    InputRenderer.prototype.getRenderResult = function () {
        return template("<input class=\"input-control\" placeholder=\"" + (this.getProperty("pleceholderText") || "") + "\""
            + " data-bind=\"value: $data." + this.getProperty("data") + ", valueUpdate: 'keyup'\""
            + (!!this.getProperty("readonly") ? " disabled" : "")
            + (!!this.getProperty("hint") ? (" title=\"" + this.getProperty("hint") + "\"") : "")
            + (!!this.getProperty("pattern") ? (" pattern=\"" + this.getProperty("pattern") + "\"") : "")
            + (this.getProperty("isnullable") === false ? " required" : "")
            + ">");
    };
    return InputRenderer;
}(InterfaceRenderer));
exports.InputRenderer = InputRenderer;


/***/ }),

/***/ "./uiml/ui-action.ts":
/*!***************************!*\
  !*** ./uiml/ui-action.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./uiml/ui-button.scss":
/*!*****************************!*\
  !*** ./uiml/ui-button.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uiml/ui-button.ts":
/*!***************************!*\
  !*** ./uiml/ui-button.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ko = __webpack_require__(/*! knockout */ "knockout");
__webpack_require__(/*! ./ui-button.scss */ "./uiml/ui-button.scss");
var template = __webpack_require__(/*! text-loader!./ui-button.html */ "./node_modules/text-loader/index.js!./uiml/ui-button.html");
ko.components.register("ui-button", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.item;
        }
    },
    template: template
});


/***/ }),

/***/ "./uiml/ui-dropdown-button.scss":
/*!**************************************!*\
  !*** ./uiml/ui-dropdown-button.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./uiml/ui-dropdown-button.ts":
/*!************************************!*\
  !*** ./uiml/ui-dropdown-button.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownButton = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
__webpack_require__(/*! ./ui-dropdown-button.scss */ "./uiml/ui-dropdown-button.scss");
var template = __webpack_require__(/*! text-loader!./ui-dropdown-button.html */ "./node_modules/text-loader/index.js!./uiml/ui-dropdown-button.html");
var DropdownButton = (function () {
    function DropdownButton(_item, _hide) {
        var _this = this;
        this._item = _item;
        this._hide = _hide;
        this.click = function (item, event) {
            setTimeout(function () {
                _this._hide();
            });
            item.action();
        };
    }
    Object.defineProperty(DropdownButton.prototype, "title", {
        get: function () {
            return this._item.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DropdownButton.prototype, "visible", {
        get: function () {
            return this.items.length > 0 && (!this._item.visible || ko.unwrap(this._item.visible));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DropdownButton.prototype, "items", {
        get: function () {
            return this._item.items || [];
        },
        enumerable: false,
        configurable: true
    });
    return DropdownButton;
}());
exports.DropdownButton = DropdownButton;
ko.components.register("ui-dropdown-button", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var hide = function () {
                componentInfo.element.children[0].blur();
            };
            return new DropdownButton(params.item, hide);
        }
    },
    template: template
});


/***/ }),

/***/ "./uiml/uiml-wrapper.ts":
/*!******************************!*\
  !*** ./uiml/uiml-wrapper.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIMLWrapper = void 0;
var Renderer = __webpack_require__(/*! ./renderer */ "./uiml/renderer.ts");
var UIMLWrapper = (function () {
    function UIMLWrapper(_uiml) {
        this._uiml = _uiml;
        this._renderersMap = {};
        this.refresh();
    }
    UIMLWrapper.prototype._getTypeConstructor = function (typeName) {
        var typeConstructor = Renderer[typeName];
        return (typeof typeConstructor === "function") ? typeConstructor : Renderer.InterfaceRenderer;
    };
    UIMLWrapper.prototype.refresh = function () {
        var _this = this;
        var htmlPresentation = null;
        this._uiml.peers.forEach(function (peer) {
            if (peer.peername === "presentation" && peer.id === "HTMLUIRenderer") {
                htmlPresentation = peer;
            }
        });
        if (!htmlPresentation) {
            throw new Error("HTMLUIRenderer presentation not found.");
        }
        htmlPresentation.dclasses.forEach(function (dclass) {
            _this._renderersMap[dclass.id] = _this._getTypeConstructor(dclass.mapsto);
        });
    };
    UIMLWrapper.prototype.getStyles = function (part) {
        var styles = { cssClasses: [] };
        if (part) {
            (this._uiml.uimlinterface.styles || []).forEach(function (style) {
                if (style.partclass === part.partclass || style.partname === part.id) {
                    if (style.name !== "cssClass") {
                        styles[style.name] = style.value;
                    }
                    else {
                        styles.cssClasses.push(style.value);
                    }
                }
            });
            (part.cssClasses || "").split(" ").forEach(function (styleName) {
                styles.cssClasses.push(styleName);
            });
        }
        return styles;
    };
    UIMLWrapper.prototype.createRenderer = function (part) {
        return new (this._renderersMap[part.partclass] || Renderer.ComponentRenderer)(part, this);
    };
    return UIMLWrapper;
}());
exports.UIMLWrapper = UIMLWrapper;


/***/ }),

/***/ "./uiml/uiml.ts":
/*!**********************!*\
  !*** ./uiml/uiml.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlUiRendererPeers = void 0;
exports.htmlUiRendererPeers = [
    {
        peername: "presentation",
        id: "HTMLUIRenderer",
        dclasses: [
            { id: "container", mapsto: "ContainerRenderer" },
            { id: "input", mapsto: "InputRenderer" },
            { id: "label", mapsto: "LabelRenderer" }
        ],
        wloaders: {}
    }
];


/***/ }),

/***/ "knockout":
/*!********************************************************************************************!*\
  !*** external {"root":"ko","commonjs2":"knockout","commonjs":"knockout","amd":"knockout"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_knockout__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9tZXRhZGF0YS9tb2RlbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2NvbGxlY3Rpb24uaHRtbCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2xheW91dC5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvb2JqZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9wYW5lbC5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvdWktYnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aS1kcm9wZG93bi1idXR0b24uaHRtbCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2NvbGxlY3Rpb24uc2Nzcz83ZTZiIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvY29sbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2luZGV4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvbGF5b3V0LnNjc3M/M2Y1YSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2xheW91dC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL29iamVjdC5zY3NzPzU2M2UiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9wYW5lbC5zY3NzP2VmZDEiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9wYW5lbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL3JlbmRlcmVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvdWktYnV0dG9uLnNjc3M/ODk1OSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL3VpLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL3VpLWRyb3Bkb3duLWJ1dHRvbi5zY3NzPzYzYjgiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aS1kcm9wZG93bi1idXR0b24udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aW1sLXdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aW1sLnRzIiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJrb1wiLFwiY29tbW9uanMyXCI6XCJrbm9ja291dFwiLFwiY29tbW9uanNcIjpcImtub2Nrb3V0XCIsXCJhbWRcIjpcImtub2Nrb3V0XCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVWltbFwiLCBbXCJrbm9ja291dFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJVaW1sXCJdID0gZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlVpbWxcIl0gPSBmYWN0b3J5KHJvb3RbXCJrb1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdWltbC9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IElPYmplY3REZXNjcmlwdGlvbiB9IGZyb20gXCIuL29iamVjdFwiO1xyXG5cclxuZXhwb3J0IHZhciBkb21haW46IHtbaW5kZXg6IHN0cmluZ106IElPYmplY3REZXNjcmlwdGlvbn0gPSB7fTtcclxuXHJcbmRvbWFpbltcInBhcnRcIl0gPSB7XHJcbiAgICBuYW1lOiBcInBhcnRcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydGNsYXNzXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wicGFuZWxcIl0gPSB7XHJcbiAgICBuYW1lOiBcInBhbmVsXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInRleHRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5kb21haW5bXCJsYXlvdXRJdGVtXCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRJdGVtXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImNvbnRhaW5lclwiXSA9IHtcclxuICAgIG5hbWU6IFwiY29udGFpbmVyXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImxhYmVsXCJdID0ge1xyXG4gICAgbmFtZTogXCJsYWJlbFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJ0ZXh0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImlucHV0XCJdID0ge1xyXG4gICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0XCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0Um93XCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRSb3dcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0Q29sdW1uXCJdID0ge1xyXG4gICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0RGVzY3JpcHRpb24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZG9tYWluW25hbWVdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTaW1wbGVUeXBlKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICEhbmFtZSAmJiAoIWRvbWFpbltuYW1lXSAmJiBuYW1lLmluZGV4T2YoXCJbXVwiKSA9PSAtMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5VHlwZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIW5hbWUgJiYgbmFtZS5sZW5ndGggPiAyICYmIG5hbWVbbmFtZS5sZW5ndGgtMl0gPT09IFwiW1wiICYmIG5hbWVbbmFtZS5sZW5ndGgtMV0gPT09IFwiXVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlFbGVtZW50VHlwZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmKGlzQXJyYXlUeXBlKG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoLTIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29sbGVjdGlvbicgZGF0YS1iaW5kPVxcXCJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uX19oZWFkZXJcXFwiXFxyXFxuICAgICAgICBkYXRhLWJpbmQ9XFxcImNsaWNrOiBmdW5jdGlvbiAoKSB7IGNvbGxhcHNlZCghY29sbGFwc2VkKCkpOyB9LCBjc3M6IHsgJ2NvbGxlY3Rpb25fX2hlYWRlci0tY29sbGFwc2VkJzogY29sbGFwc2VkIH1cXFwiPlxcclxcbiAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sbGVjdGlvbl9fY29udGVudFxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsgJ2NvbGxlY3Rpb25fX2NvbnRlbnQtLWhpZGRlbic6IGNvbGxhcHNlZCB9XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb25fX2l0ZW0tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgPHVpLWRyb3Bkb3duLWJ1dHRvbiBwYXJhbXM9XFxcIml0ZW06IGFkZEFjdGlvblxcXCI+PC91aS1kcm9wZG93bi1idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogaXRlbXMgLS0+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uX19pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICA8b2JqZWN0LWVkaXRvciBwYXJhbXM9XFxcImNvbnRleHQ6ICRkYXRhLCB0eXBlOiAkcGFyZW50LmVsZW1lbnRUeXBlXFxcIj48L29iamVjdC1lZGl0b3I+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGVjdGlvbl9faXRlbS1tZW51XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmYtaXRlbS1tZW51X19idXR0b25cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGZ1bmN0aW9uKCkgeyAkcGFyZW50LnJlbW92ZSgkZGF0YSk7IH1cXFwiPi0gUmVtb3ZlPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGtvIGZvcmVhY2g6IGVsZW1lbnRzIC0tPlxcclxcbjxsYXlvdXQtaXRlbSBwYXJhbXM9XFxcImVsZW1lbnQ6ICRkYXRhXFxcIiBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7ICB9XFxcIj48L2xheW91dC1pdGVtPlxcclxcbjwhLS0gL2tvIC0tPlxcclxcbjwhLS0ga28gaWY6IGVsZW1lbnRzKCkubGVuZ3RoID09PSAwIC0tPlxcclxcbjxwbGFjZWhvbGRlci1pdGVtIHBhcmFtcz1cXFwiZWxlbWVudDogZm9ybUVsZW1lbnRcXFwiPjwvcGxhY2Vob2xkZXItaXRlbT5cXHJcXG48IS0tIC9rbyAtLT5cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdvYmplY3QnIGRhdGEtYmluZD1cXFwiXFxcIj5cXHJcXG4gICAgPGxheW91dC1pdGVtIHBhcmFtcz1cXFwidWltbDogbGF5b3V0VWltbCwgY29udGV4dDogY29udGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZTogeyAgfVxcXCI+PC9sYXlvdXQtaXRlbT5cXHJcXG48L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPSdwYW5lbCcgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAhJGRhdGEudmlzaWJsZSB8fCAkZGF0YS52aXNpYmxlKCksIGNzczogY3NzQ2xhc3Nlc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3BhbmVsX19oZWFkZXInXFxyXFxuICAgICAgICBkYXRhLWJpbmQ9XFxcImNsaWNrOiBmdW5jdGlvbiAoKSB7IGNvbGxhcHNlZCghY29sbGFwc2VkKCkpOyByZWFkeSh0cnVlKTsgfSwgY3NzOiB7ICdwYW5lbF9faGVhZGVyLS1jb2xsYXBzZWQnOiBjb2xsYXBzZWQgfVxcXCI+XFxyXFxuICAgICAgICA8IS0tIGtvIGlmOiAhISRkYXRhLnZpc2libGUgLS0+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz0ncGFuZWxfX2hlYWRlci1jbG9zZS1pY29uJyBkYXRhLWJpbmQ9XFxcImNsaWNrOiBmdW5jdGlvbiAoKSB7IHZpc2libGUoZmFsc2UpOyB9XFxcIj4mIzEwMDYwOzwvc3Bhbj5cXHJcXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWxfX2hlYWRlci1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3BhbmVsX19oZWFkZXItY2FwdGlvbicgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0ZXh0IHx8ICdQYW5lbCB0aXRsZSdcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz0ncGFuZWxfX2hlYWRlci1jb2xsYXBzZXInIGRhdGEtYmluZD1cXFwidGV4dDogKGNvbGxhcHNlZCgpID8gJyYjNzA5OycgOiAnJiM3MDg7JylcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncGFuZWxfX2JvZHknIGRhdGEtYmluZD1cXFwiY3NzOiB7ICdwYW5lbF9fYm9keS0taGlkZGVuJzogY29sbGFwc2VkIH1cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWxfX2NvbnRlbnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWNvbGxhcHNlZCgpLCB3aXRoOiAkcGFyZW50XFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLW1lbnVfX2l0ZW0gYmYtaXRlbS1tZW51X19idXR0b25cXFwiIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGUsIGNsaWNrOiBhY3Rpb24sIGNsaWNrQnViYmxlOiBmYWxzZSwgdmlzaWJsZTogISRkYXRhLnZpc2libGUgfHwgJGRhdGEudmlzaWJsZSgpXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLW1lbnVfX2Ryb3Bkb3duLWNvbnRhaW5lclxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYmYtaXRlbS1tZW51X19kcm9wZG93blxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZSwgY2xpY2tCdWJibGU6IGZhbHNlLCB2aXNpYmxlOiB2aXNpYmxlXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tbWVudV9fZHJvcGRvd24taXRlbXNcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogdmlzaWJsZVxcXCI+XFxyXFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGl0ZW1zIC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmYtaXRlbS1tZW51X19kcm9wZG93bi1pdGVtXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRpdGxlLCBjbGljazogJHBhcmVudC5jbGljaywgY2xpY2tCdWJibGU6IGZhbHNlLCB2aXNpYmxlOiAhJGRhdGEudmlzaWJsZSB8fCAkZGF0YS52aXNpYmxlKClcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQgeyBodG1sVWlSZW5kZXJlclBlZXJzLCByZW5kZXIgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuaW1wb3J0IFwiLi9jb2xsZWN0aW9uLnNjc3NcIjtcclxuXHJcbnZhciBjb2xsZWN0aW9uRWRpdG9yVGVtcGxhdGUgPSByZXF1aXJlKFwidGV4dC1sb2FkZXIhLi9jb2xsZWN0aW9uLmh0bWxcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbldpZGdldFZpZXdNb2RlbCB7XHJcbiAgICBwcml2YXRlIF9pdGVtc1N1YnNjcmlwdGlvbjoga28uU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RlbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogeyBkYXRhOiBzdHJpbmcsIGVsZW1lbnRUeXBlOiBzdHJpbmcgfSwgcHVibGljIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBjb250ZXh0LiRkYXRhO1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5tb2RlbFtvcHRpb25zLmRhdGFdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuaXRlbXMoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLml0ZW1zLnN1YnNjcmliZShpdGVtcyA9PiB0aGlzLm1vZGVsW3RoaXMub3B0aW9ucy5kYXRhXSA9IGl0ZW1zKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbIFwibGFiZWxcIiwgXCJpbnB1dFwiLCBcInBhbmVsXCIgXTtcclxuICAgICAgICB0eXBlcy5mb3JFYWNoKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEFjdGlvbi5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB0aGlzLmFkZCh0eXBlKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZWQgPSBrby5vYnNlcnZhYmxlKHRydWUpO1xyXG5cclxuICAgIGl0ZW1zID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcblxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbGxhcHNlZCgpPyc+Jzondid9ICR7dGhpcy5vcHRpb25zLmRhdGF9ICgke3RoaXMuaXRlbXMoKS5sZW5ndGh9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnRUeXBlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZWxlbWVudFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aW9uID0ge1xyXG4gICAgICAgIHRpdGxlOiBcIisgQWRkXCIsXHJcbiAgICAgICAgaXRlbXM6IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGVsZW1lbnRUeXBlOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBUT0RPOiBwYXNzIGNyZWF0b3IgZnVuY3Rpb24gYXMgYSBwYXJhbWV0ZXJcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2godGhpcy5tb2RlbC5jcmVhdGUoZWxlbWVudFR5cGUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUgPSAoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5yZW1vdmUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9pdGVtc1N1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJjb2xsZWN0aW9uLWVkaXRvclwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xsZWN0aW9uV2lkZ2V0Vmlld01vZGVsKHBhcmFtcy5vcHRpb25zLCBwYXJhbXMuY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBjb2xsZWN0aW9uRWRpdG9yVGVtcGxhdGVcclxufSk7XHJcblxyXG4vLyBXaWRnZXQgcmVnaXN0cmF0aW9uIGluIFVJTUwgcmVuZGVyaW5nIHBlZXJzXHJcbi8vbm9pbnNwZWN0aW9uIFR5cGVTY3JpcHRVbnJlc29sdmVkRnVuY3Rpb25cclxuaHRtbFVpUmVuZGVyZXJQZWVyc1swXS5kY2xhc3Nlcy5wdXNoKHtcclxuICAgIGlkOiBcImNvbGxlY3Rpb24tZWRpdG9yXCIsXHJcbiAgICBtYXBzdG86IFwiQ29tcG9uZW50UmVuZGVyZXJcIlxyXG59KTsiLCJpbXBvcnQgeyBJVU1MLCBJVU1MSW50ZXJmYWNlLCBJUGFydCwgaHRtbFVpUmVuZGVyZXJQZWVycyB9IGZyb20gXCIuL3VpbWxcIjtcclxuaW1wb3J0IHsgVUlNTFdyYXBwZXIgfSBmcm9tIFwiLi91aW1sLXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3VpbWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcmVuZGVyZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGFuZWxcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGF5b3V0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29iamVjdFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi91aS1hY3Rpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdWktYnV0dG9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VpLWRyb3Bkb3duLWJ1dHRvblwiO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIGNvbmZpZzogSVVNTDtcclxuXHJcbmNvbnN0IHVpbWxXcmFwcGVyID0gbmV3IFVJTUxXcmFwcGVyKHR5cGVvZiBjb25maWcgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uZmlnIHx8IHsgdWltbGludGVyZmFjZTogPElVTUxJbnRlcmZhY2U+e30sIHBlZXJzOiBodG1sVWlSZW5kZXJlclBlZXJzIH0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihwYXJ0OiBJUGFydCwgY29udGFpbmVyPzogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gdWltbFdyYXBwZXIuY3JlYXRlUmVuZGVyZXIocGFydCk7XHJcbiAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKGNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoKCkge1xyXG4gICAgdWltbFdyYXBwZXIucmVmcmVzaCgpO1xyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCB7IGh0bWxVaVJlbmRlcmVyUGVlcnMgfSBmcm9tIFwiLi91aW1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2xheW91dC5zY3NzXCI7XHJcblxyXG52YXIgbGF5b3V0VGVtcGxhdGUgPSByZXF1aXJlKFwidGV4dC1sb2FkZXIhLi9sYXlvdXQuaHRtbFwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRWaWV3TW9kZWwge1xyXG5cclxufVxyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImxheW91dFwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgLy8ga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhjb21wb25lbnRJbmZvLmVsZW1lbnQsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICB2YXIgcGFuZWxGb3JtRWxlbWVudCA9IHBhcmFtcy5jb250ZXh0LiRwYXJlbnRzWzJdO1xyXG4gICAgICAgICAgICB2YXIgbGF5b3V0Rm9ybUVsZW1lbnQgPSBwYW5lbEZvcm1FbGVtZW50LmVsZW1lbnRzKClbMF07XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRWxlbWVudDogbGF5b3V0Rm9ybUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50czoga28uY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXRGb3JtRWxlbWVudC5lbGVtZW50cygpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IGxheW91dFRlbXBsYXRlXHJcbn0pO1xyXG5cclxuLy8gV2lkZ2V0IHJlZ2lzdHJhdGlvbiBpbiBVSU1MIHJlbmRlcmluZyBwZWVyc1xyXG4vL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXHJcbmh0bWxVaVJlbmRlcmVyUGVlcnNbMF0uZGNsYXNzZXMucHVzaCh7XHJcbiAgICBpZDogXCJsYXlvdXRcIixcclxuICAgIG1hcHN0bzogXCJDb21wb25lbnRSZW5kZXJlclwiXHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQgeyBJUHJvcGVydHlEZXNjcmlwdGlvbiB9IGZyb20gXCIuLi9tZXRhZGF0YS9vYmplY3RcIjtcclxuaW1wb3J0IHsgZ2V0T2JqZWN0RGVzY3JpcHRpb24sIGlzQXJyYXlUeXBlIH0gZnJvbSBcIi4uL21ldGFkYXRhL21vZGVsXCI7XHJcblxyXG5pbXBvcnQgXCIuL29iamVjdC5zY3NzXCI7XHJcblxyXG52YXIgb2JqZWN0RWRpdG9yVGVtcGxhdGUgPSByZXF1aXJlKFwidGV4dC1sb2FkZXIhLi9vYmplY3QuaHRtbFwiKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5RWRpdG9yVWltbChwcm9wZXJ0eURlc2NyaXB0aW9uOiBJUHJvcGVydHlEZXNjcmlwdGlvbikge1xyXG4gICAgbGV0IHByb3BlcnR5VHlwZSA9IHByb3BlcnR5RGVzY3JpcHRpb24udHlwZSB8fCBcInN0cmluZ1wiO1xyXG4gICAgbGV0IHBhcnRzID0gW107XHJcbiAgICBpZihpc0FycmF5VHlwZShwcm9wZXJ0eVR5cGUpKSB7XHJcbiAgICAgICAgcGFydHMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJjb2xsZWN0aW9uLWVkaXRvclwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtaW5wdXRcIixcclxuICAgICAgICAgICAgZGF0YTogcHJvcGVydHlEZXNjcmlwdGlvbi5uYW1lLFxyXG4gICAgICAgICAgICBlbGVtZW50VHlwZTogcHJvcGVydHlEZXNjcmlwdGlvbi50eXBlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcnRzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3NlczogXCJ0ZXN0LWxhYmVsXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IHByb3BlcnR5RGVzY3JpcHRpb24udGl0bGUgfHwgcHJvcGVydHlEZXNjcmlwdGlvbi5uYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGFydHMucHVzaCh7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtaW5wdXRcIixcclxuICAgICAgICAgICAgZGF0YTogcHJvcGVydHlEZXNjcmlwdGlvbi5uYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRjbGFzczogXCJsYXlvdXRJdGVtXCIsXHJcbiAgICAgICAgY3NzQ2xhc3NlczogXCJpdGVtIHRlc3QtaXRlbSB0ZXN0LWdyb3VwXCIsXHJcbiAgICAgICAgcGFydHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdFdpZGdldFZpZXdNb2RlbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHsgfSwgcHVibGljIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMubGF5b3V0VWltbC5wYXJ0cy5wdXNoKGNyZWF0ZVByb3BlcnR5RWRpdG9yVWltbCh7bmFtZTogXCJkYXRhXCJ9KSk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0RGVzY3JpcHRpb24gPSBnZXRPYmplY3REZXNjcmlwdGlvbihjb250ZXh0LnBhcnRjbGFzcyk7XHJcbiAgICAgICAgaWYob2JqZWN0RGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgb2JqZWN0RGVzY3JpcHRpb24ucHJvcGVydGllcy5mb3JFYWNoKHBkID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0VWltbC5wYXJ0cy5wdXNoKGNyZWF0ZVByb3BlcnR5RWRpdG9yVWltbChwZCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXlvdXRVaW1sID0ge1xyXG4gICAgICAgIHBhcnRjbGFzczogXCJsYXlvdXRDb2x1bW5cIixcclxuICAgICAgICBjc3NDbGFzc2VzOiBcImNvbHVtblwiLFxyXG4gICAgICAgIHBhcnRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwib2JqZWN0LWVkaXRvclwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RXaWRnZXRWaWV3TW9kZWwocGFyYW1zLm9wdGlvbnMsIHBhcmFtcy5jb250ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IG9iamVjdEVkaXRvclRlbXBsYXRlXHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5cclxuaW1wb3J0IHsgaHRtbFVpUmVuZGVyZXJQZWVycywgcmVuZGVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmltcG9ydCBcIi4vcGFuZWwuc2Nzc1wiO1xyXG5cclxudmFyIHBhbmVsVGVtcGxhdGUgPSByZXF1aXJlKFwidGV4dC1sb2FkZXIhLi9wYW5lbC5odG1sXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhbmVsV2lkZ2V0Vmlld01vZGVsIHtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbnMgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50ID0gY29udGV4dC4kcGFyZW50ICYmIGNvbnRleHQuJHBhcmVudC5kYXRhO1xyXG4gICAgICAgIHZhciBwYW5lbFZpc2libGVJbmRleCA9IG9wdGlvbnMudmlzaWJsZUluZGV4O1xyXG4gICAgICAgIGlmKCEhcGFuZWxWaXNpYmxlSW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gY29udGV4dC4kcGFyZW50LnZpc2libGVbcGFuZWxWaXNpYmxlSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goa28uY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzTmVlZFRvRXhwYW5kID0ga28udW53cmFwKHRoaXMudmlzaWJsZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCghaXNOZWVkVG9FeHBhbmQpO1xyXG4gICAgICAgICAgICAgICAgaWYoaXNOZWVkVG9FeHBhbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkKCFvcHRpb25zLmV4cGFuZGVkKTtcclxuICAgICAgICB0aGlzLnJlYWR5KCEhb3B0aW9ucy5leHBhbmRlZCk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xyXG4gICAgICAgIHRoaXMuY3NzQ2xhc3NlcyA9IG9wdGlvbnMuY3NzQ2xhc3NlcztcclxuICAgIH1cclxuICAgIGNvbGxhcHNlZCA9IGtvLm9ic2VydmFibGUodHJ1ZSk7XHJcbiAgICByZWFkeSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xyXG4gICAgdmlzaWJsZTogS25vY2tvdXRPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gICAgJHBhcmVudDtcclxuICAgIHRleHQgPSBcIlwiO1xyXG4gICAgY3NzQ2xhc3NlcyA9IFwiXCI7XHJcblxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHN1YnNjcmlwdGlvbi5kaXNwb3NlKCkpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuc3BsaWNlKDAsIHRoaXMuX3N1YnNjcmlwdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJwYW5lbFwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgbGV0IHBhbmVsVmlld01vZGVsID0gbmV3IFBhbmVsV2lkZ2V0Vmlld01vZGVsKHBhcmFtcy5vcHRpb25zLCBwYXJhbXMuY29udGV4dCk7XHJcbiAgICAgICAgICAgIGxldCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlclJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gY29tcG9uZW50SW5mby5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYW5lbF9fY29udGVudFwiKVswXTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIChwYXJhbXMub3B0aW9ucy5wYXJ0cyB8fCBbXSkuZm9yRWFjaChwYXJ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydENvbnRlbnQgPSByZW5kZXIocGFydCwgY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChwYXJ0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUmVzdWx0LnB1c2gocGFydENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyUmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZihwYW5lbFZpZXdNb2RlbC5yZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJDb250ZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3Vic2NyaXB0aW9uID0gcGFuZWxWaWV3TW9kZWwucmVhZHkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVzID0gcmVuZGVyQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihub2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRDb250ZXh0ID0gcGFyYW1zLmNvbnRleHQuY3JlYXRlQ2hpbGRDb250ZXh0KHBhcmFtcy5tb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrby5hcHBseUJpbmRpbmdzKGNoaWxkQ29udGV4dCwgbm9kZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soY29tcG9uZW50SW5mby5lbGVtZW50LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbFZpZXdNb2RlbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFuZWxWaWV3TW9kZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBwYW5lbFRlbXBsYXRlXHJcbn0pO1xyXG5cclxuLy8gV2lkZ2V0IHJlZ2lzdHJhdGlvbiBpbiBVSU1MIHJlbmRlcmluZyBwZWVyc1xyXG4vL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXHJcbmh0bWxVaVJlbmRlcmVyUGVlcnNbMF0uZGNsYXNzZXMucHVzaCh7XHJcbiAgICBpZDogXCJwYW5lbFwiLFxyXG4gICAgbWFwc3RvOiBcIkNvbXBvbmVudFJlbmRlcmVyXCJcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5cclxuaW1wb3J0IHsgVUlNTFdyYXBwZXIgfSBmcm9tIFwiLi91aW1sLXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgSVBhcnQsIGh0bWxVaVJlbmRlcmVyUGVlcnMgfSBmcm9tIFwiLi91aW1sXCI7XHJcblxyXG5mdW5jdGlvbiB0ZW1wbGF0ZShodG1sOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgcmV0dXJuIGRpdi5jaGlsZHJlbi5sZW5ndGggPT09IDEgPyA8SFRNTEVsZW1lbnQ+ZGl2LmNoaWxkcmVuWzBdIDogZGl2O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZW5kZXJlciB7XHJcbiAgICByZW5kZXI6IChjb250YWluZXI/OiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQ7XHJcbiAgICByZW5kZXJlcnM6IElSZW5kZXJlcltdO1xyXG4gICAgZ2V0UHJvcGVydHk6IChwcm9wZXJ0eU5hbWU6IHN0cmluZykgPT4gYW55O1xyXG4gICAgcGFydDogSVBhcnQ7XHJcbiAgICByZW5kZXJDaGlsZHJlbjogKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VSZW5kZXJlciBpbXBsZW1lbnRzIElSZW5kZXJlciB7XHJcbiAgICBzdHlsZXM6IGFueTtcclxuICAgIHBhcnQ6IElQYXJ0O1xyXG4gICAgY29uc3RydWN0b3IocGFydDogSVBhcnQsIHVpbWxXcmFwcGVyOiBVSU1MV3JhcHBlcikge1xyXG4gICAgICAgIHRoaXMucGFydCA9IHBhcnQ7XHJcbiAgICAgICAgdGhpcy5zdHlsZXMgPSB1aW1sV3JhcHBlci5nZXRTdHlsZXMocGFydCk7XHJcbiAgICAgICAgKHBhcnQucGFydHMgfHwgW10pLmZvckVhY2goKHBhcnRJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2godWltbFdyYXBwZXIuY3JlYXRlUmVuZGVyZXIocGFydEluZm8pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEN1c3RvbVByb2Nlc3NlZFN0eWxlcygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBbXCJjc3NDbGFzc2VzXCIsIFwidGV4dFwiLCBcImRhdGFcIl1cclxuICAgIH1cclxuICAgIGFwcGx5U3R5bGVzKHBhcnQ6IElQYXJ0LCBlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZU5hbWUgPSBrZXk7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZVZhbHVlID0gdGhpcy5zdHlsZXNba2V5XTtcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRDdXN0b21Qcm9jZXNzZWRTdHlsZXMoKS5pbmRleE9mKHN0eWxlTmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5lbGVtZW50KS5jc3Moc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzLmNzc0NsYXNzZXMpXHJcbiAgICAgICAgICAgIC5tYXAoa2V5ID0+IHRoaXMuc3R5bGVzLmNzc0NsYXNzZXNba2V5XSlcclxuICAgICAgICAgICAgLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IChcIiBcIiArIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nZXRQcm9wZXJ0eShcInRleHRcIik7XHJcbiAgICAgICAgaWYodGV4dCAmJiBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodG1sID0gdGhpcy5nZXRQcm9wZXJ0eShcImh0bWxcIik7XHJcbiAgICAgICAgaWYoaHRtbCAmJiBlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZCA/IHRoaXMucGFydFtwcm9wZXJ0eU5hbWVdIDogdGhpcy5zdHlsZXNbcHJvcGVydHlOYW1lXTtcclxuICAgIH1cclxuICAgIHJlbmRlckNoaWxkcmVuKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVycy5mb3JFYWNoKHJlbmRlcmVyID0+IHtcclxuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRSZW5kZXJSZXN1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlKFwiPGRpdi8+XCIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgdmFyIHJlbmRlclJlc3VsdCA9IHRoaXMuZ2V0UmVuZGVyUmVzdWx0KCk7XHJcbiAgICAgICAgdmFyIGRhdGFCaW5kVmFsdWUgPSB0aGlzLmdldFByb3BlcnR5KFwiZGF0YUJpbmRcIik7XHJcbiAgICAgICAgaWYoZGF0YUJpbmRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJlbmRlclJlc3VsdC5kYXRhc2V0LmJpbmQgPSBPYmplY3Qua2V5cyhkYXRhQmluZFZhbHVlKS5tYXAoKGspID0+IGAke2t9OiAke2RhdGFCaW5kVmFsdWVba119YCkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwcGx5U3R5bGVzKHRoaXMucGFydCwgcmVuZGVyUmVzdWx0KTtcclxuICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHJlbmRlclJlc3VsdCk7XHJcbiAgICAgICAgdmFyIGhpbnQgPSB0aGlzLmdldFByb3BlcnR5KFwiaGludFwiKTtcclxuICAgICAgICBpZighIWhpbnQpIHtcclxuICAgICAgICAgICAgcmVuZGVyUmVzdWx0LnRpdGxlID0gaGludDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQocmVuZGVyUmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlbmRlclJlc3VsdDtcclxuICAgIH1cclxuICAgIHJlbmRlcmVyczogSVJlbmRlcmVyW10gPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFJlbmRlcmVyIGV4dGVuZHMgSW50ZXJmYWNlUmVuZGVyZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb21wb25lbnRQcmVmaXggPSBcIlwiO1xyXG4gICAgY29uc3RydWN0b3IocGFydDogSVBhcnQsIHVpbWxXcmFwcGVyOiBVSU1MV3JhcHBlcikge1xyXG4gICAgICAgIHN1cGVyKHBhcnQsIHVpbWxXcmFwcGVyKTtcclxuICAgIH1cclxuICAgIHJlbmRlcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHdpZGdldE5hbWUgPSAoKENvbXBvbmVudFJlbmRlcmVyLmNvbXBvbmVudFByZWZpeCA/IChDb21wb25lbnRSZW5kZXJlci5jb21wb25lbnRQcmVmaXggKyBcIi1cIikgOiBcIlwiKSArIHRoaXMucGFydC5wYXJ0Y2xhc3MpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHJlbmRlclJlc3VsdDtcclxuICAgICAgICB2YXIgd2lkZ2V0T3B0aW9ucyA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGFydCkuc3BsaXQoXCJcXFwiXCIpLmpvaW4oXCInXCIpO1xyXG4gICAgICAgIGlmKGtvLmNvbXBvbmVudHMuaXNSZWdpc3RlcmVkKHdpZGdldE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJlbmRlclJlc3VsdCA9IHRlbXBsYXRlKFwiPFwiICsgd2lkZ2V0TmFtZSArIFwiIHBhcmFtcz1cXFwieyBtb2RlbDogJGRhdGEsIGNvbnRleHQ6ICRjb250ZXh0LCBvcHRpb25zOiBcIiArIHdpZGdldE9wdGlvbnMgKyBcIn1cXFwiLz5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGh0bWxVaVJlbmRlcmVyUGVlcnNbMF0ud2xvYWRlcnNbd2lkZ2V0TmFtZV0gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUmVzdWx0ID0gdGVtcGxhdGUoXCI8ZGl2IGRhdGEtYmluZD1cXFwibGF6eVdpZGdldDogeyBuYW1lOiAnXCIgKyB3aWRnZXROYW1lICsgXCInLCBvcHRpb25zOiBcIiArIHdpZGdldE9wdGlvbnMgKyBcIiB9XFxcIi8+XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUmVzdWx0ID0gdGVtcGxhdGUoXCI8Y29tcG9uZW50LXN0dWIgcGFyYW1zPVxcXCJ7IG1lc3NhZ2U6ICdFcnJvcjogQ29tcG9uZW50IFwiICsgd2lkZ2V0TmFtZSArIFwiIGlzIG5vdCBpbnN0YWxsZWQuJ31cXFwiLz5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcyh0aGlzLnBhcnQsIHJlbmRlclJlc3VsdCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChyZW5kZXJSZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiByZW5kZXJSZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJjb21wb25lbnQtc3R1YlwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcGFyYW1zLm1lc3NhZ2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6IFwiPGRpdiBkYXRhLWJpbmQ9J3RleHQ6IG1lc3NhZ2UnPjwvZGl2PlwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhaW5lclJlbmRlcmVyIGV4dGVuZHMgSW50ZXJmYWNlUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IocGFydDogSVBhcnQsIHVpbWxXcmFwcGVyOiBVSU1MV3JhcHBlcikge1xyXG4gICAgICAgIHN1cGVyKHBhcnQsIHVpbWxXcmFwcGVyKTtcclxuICAgIH1cclxuICAgIGdldFJlbmRlclJlc3VsdCgpIHtcclxuICAgICAgICB2YXIgYmluZGluZ3M6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgdmFyIHZpc2libGUgPSB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcclxuICAgICAgICBpZighIXZpc2libGUpIHtcclxuICAgICAgICAgICAgYmluZGluZ3MucHVzaChcInZpc2libGU6IFwiICsgdmlzaWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjc3MgPSB0aGlzLmdldFByb3BlcnR5KFwiY3NzXCIpO1xyXG4gICAgICAgIGlmKCEhY3NzKSB7XHJcbiAgICAgICAgICAgIGJpbmRpbmdzLnB1c2goXCJjc3M6IFwiICsgY3NzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0ZW1wbGF0ZShcIjxkaXYgZGF0YS1iaW5kPSdcIiArIGJpbmRpbmdzLmpvaW4oXCIsIFwiKSAgKyBcIicvPlwiKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsUmVuZGVyZXIgZXh0ZW5kcyBJbnRlcmZhY2VSZW5kZXJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJ0OiBJUGFydCwgdWltbFdyYXBwZXI6IFVJTUxXcmFwcGVyKSB7XHJcbiAgICAgICAgc3VwZXIocGFydCwgdWltbFdyYXBwZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVuZGVyUmVzdWx0KCkge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZShgPGxhYmVsPiR7dGhpcy5nZXRQcm9wZXJ0eShcInRleHRcIil9PC9sYWJlbD5gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0UmVuZGVyZXIgZXh0ZW5kcyBJbnRlcmZhY2VSZW5kZXJlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJ0OiBJUGFydCwgdWltbFdyYXBwZXI6IFVJTUxXcmFwcGVyKSB7XHJcbiAgICAgICAgc3VwZXIocGFydCwgdWltbFdyYXBwZXIpO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVuZGVyUmVzdWx0KCkge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZShcIjxpbnB1dCBjbGFzcz1cXFwiaW5wdXQtY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlwiICsgKHRoaXMuZ2V0UHJvcGVydHkoXCJwbGVjZWhvbGRlclRleHRcIil8fFwiXCIpICsgXCJcXFwiXCJcclxuICAgICAgICAgICAgKyBcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiAkZGF0YS5cIiArIHRoaXMuZ2V0UHJvcGVydHkoXCJkYXRhXCIpICsgXCIsIHZhbHVlVXBkYXRlOiAna2V5dXAnXFxcIlwiXHJcbiAgICAgICAgICAgICsgKCEhdGhpcy5nZXRQcm9wZXJ0eShcInJlYWRvbmx5XCIpID8gXCIgZGlzYWJsZWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICsgKCEhdGhpcy5nZXRQcm9wZXJ0eShcImhpbnRcIikgPyAoXCIgdGl0bGU9XFxcIlwiICsgdGhpcy5nZXRQcm9wZXJ0eShcImhpbnRcIikgKyBcIlxcXCJcIikgOiBcIlwiKVxyXG4gICAgICAgICAgICArICghIXRoaXMuZ2V0UHJvcGVydHkoXCJwYXR0ZXJuXCIpID8gKFwiIHBhdHRlcm49XFxcIlwiICsgdGhpcy5nZXRQcm9wZXJ0eShcInBhdHRlcm5cIikgKyBcIlxcXCJcIikgOiBcIlwiKVxyXG4gICAgICAgICAgICArICh0aGlzLmdldFByb3BlcnR5KFwiaXNudWxsYWJsZVwiKSA9PT0gZmFsc2UgPyBcIiByZXF1aXJlZFwiIDogXCJcIilcclxuICAgICAgICAgICAgKyBcIj5cIik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCBcIi4vdWktYnV0dG9uLnNjc3NcIjtcclxudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vdWktYnV0dG9uLmh0bWxcIik7XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidWktYnV0dG9uXCIsIHtcclxuICAgIHZpZXdNb2RlbDoge1xyXG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXMuaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVcclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7IElBY3Rpb24gfSBmcm9tIFwiLi91aS1hY3Rpb25cIjtcclxuXHJcbmltcG9ydCBcIi4vdWktZHJvcGRvd24tYnV0dG9uLnNjc3NcIjtcclxudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vdWktZHJvcGRvd24tYnV0dG9uLmh0bWxcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25CdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaXRlbTogSUFjdGlvbiwgcHJpdmF0ZSBfaGlkZTogKCkgPT4gdm9pZCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbS50aXRsZTtcclxuICAgIH1cclxuICAgIGdldCB2aXNpYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDAgJiYgKCF0aGlzLl9pdGVtLnZpc2libGUgfHwga28udW53cmFwKHRoaXMuX2l0ZW0udmlzaWJsZSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtLml0ZW1zIHx8IFtdO1xyXG4gICAgfVxyXG4gICAgY2xpY2sgPSAoaXRlbTogSUFjdGlvbiwgZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0ZW0uYWN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ1aS1kcm9wZG93bi1idXR0b25cIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgY29uc3QgaGlkZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudEluZm8uZWxlbWVudC5jaGlsZHJlblswXS5ibHVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEcm9wZG93bkJ1dHRvbihwYXJhbXMuaXRlbSwgaGlkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBJVU1MLCBJUGVlciwgSVBhcnQgfSBmcm9tIFwiLi91aW1sXCI7XHJcbmltcG9ydCAqIGFzIFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUlNTFdyYXBwZXIge1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXJzTWFwID0ge307XHJcbiAgICBwcml2YXRlIF9nZXRUeXBlQ29uc3RydWN0b3IodHlwZU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciB0eXBlQ29uc3RydWN0b3IgPSBSZW5kZXJlclt0eXBlTmFtZV07XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdHlwZUNvbnN0cnVjdG9yID09PSBcImZ1bmN0aW9uXCIpID8gdHlwZUNvbnN0cnVjdG9yIDogUmVuZGVyZXIuSW50ZXJmYWNlUmVuZGVyZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91aW1sOiBJVU1MKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIHZhciBodG1sUHJlc2VudGF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl91aW1sLnBlZXJzLmZvckVhY2goKHBlZXI6IElQZWVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBlZXIucGVlcm5hbWUgPT09IFwicHJlc2VudGF0aW9uXCIgJiYgcGVlci5pZCA9PT0gXCJIVE1MVUlSZW5kZXJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sUHJlc2VudGF0aW9uID0gcGVlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKCFodG1sUHJlc2VudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhUTUxVSVJlbmRlcmVyIHByZXNlbnRhdGlvbiBub3QgZm91bmQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sUHJlc2VudGF0aW9uLmRjbGFzc2VzLmZvckVhY2goKGRjbGFzcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlcnNNYXBbZGNsYXNzLmlkXSA9IHRoaXMuX2dldFR5cGVDb25zdHJ1Y3RvcihkY2xhc3MubWFwc3RvKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFN0eWxlcyhwYXJ0OiBJUGFydCk6IHt9IHtcclxuICAgICAgICB2YXIgc3R5bGVzID0geyBjc3NDbGFzc2VzOiBbXSB9O1xyXG4gICAgICAgIGlmKHBhcnQpIHtcclxuICAgICAgICAgICAgKHRoaXMuX3VpbWwudWltbGludGVyZmFjZS5zdHlsZXMgfHwgW10pLmZvckVhY2goKHN0eWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihzdHlsZS5wYXJ0Y2xhc3MgPT09IHBhcnQucGFydGNsYXNzIHx8IHN0eWxlLnBhcnRuYW1lID09PSBwYXJ0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3R5bGUubmFtZSAhPT0gXCJjc3NDbGFzc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZS5uYW1lXSA9IHN0eWxlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmNzc0NsYXNzZXMucHVzaChzdHlsZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKHBhcnQuY3NzQ2xhc3NlcyB8fCBcIlwiKS5zcGxpdChcIiBcIikuZm9yRWFjaCgoc3R5bGVOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXMuY3NzQ2xhc3Nlcy5wdXNoKHN0eWxlTmFtZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGVzO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlUmVuZGVyZXIocGFydDogSVBhcnQpOiBSZW5kZXJlci5JUmVuZGVyZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuX3JlbmRlcmVyc01hcFtwYXJ0LnBhcnRjbGFzc10gfHwgUmVuZGVyZXIuQ29tcG9uZW50UmVuZGVyZXIpKHBhcnQsIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSVBhcnQge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBwYXJ0Y2xhc3M6IHN0cmluZztcclxuICAgIHBhcnRzPzogSVBhcnRbXTtcclxuICAgIGNzc0NsYXNzZXM/OiBzdHJpbmc7XHJcbiAgICBbb3RoZXJzOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlIHtcclxuICAgIHBhcnRuYW1lPzogc3RyaW5nO1xyXG4gICAgcGFydGNsYXNzPzogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVU1MSW50ZXJmYWNlIHtcclxuICAgIHBhcnRzOiBJUGFydFtdO1xyXG4gICAgc3R5bGVzPzogSVN0eWxlW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BlcnR5IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBtYXBzdG86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3Mge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG1hcHN0bzogc3RyaW5nO1xyXG4gICAgZHByb3BlcnRpZXM/OiBJUHJvcGVydHlbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGVlciB7XHJcbiAgICBwZWVybmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGRjbGFzc2VzOiBJQ2xhc3NbXTtcclxuICAgIHdsb2FkZXJzOiB7IFt3aWRnZXQ6IHN0cmluZ106ICgpID0+IFByb21pc2U8YW55PiB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVTUwge1xyXG4gICAgdWltbGludGVyZmFjZTogSVVNTEludGVyZmFjZTtcclxuICAgIHBlZXJzOiBJUGVlcltdO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGh0bWxVaVJlbmRlcmVyUGVlcnMgPSBbXHJcbiAgICA8SVBlZXI+e1xyXG4gICAgICAgIHBlZXJuYW1lOiBcInByZXNlbnRhdGlvblwiLFxyXG4gICAgICAgIGlkOiBcIkhUTUxVSVJlbmRlcmVyXCIsXHJcbiAgICAgICAgZGNsYXNzZXM6IFtcclxuICAgICAgICAgICAgeyBpZDogXCJjb250YWluZXJcIiwgbWFwc3RvOiBcIkNvbnRhaW5lclJlbmRlcmVyXCIgfSxcclxuICAgICAgICAgICAgeyBpZDogXCJpbnB1dFwiLCBtYXBzdG86IFwiSW5wdXRSZW5kZXJlclwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IFwibGFiZWxcIiwgbWFwc3RvOiBcIkxhYmVsUmVuZGVyZXJcIiB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB3bG9hZGVyczogPHsgW3dpZGdldDogc3RyaW5nXTogKCkgPT4gUHJvbWlzZTxhbnk+IH0+e31cclxuICAgIH1cclxuXTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tub2Nrb3V0X187Il0sInNvdXJjZVJvb3QiOiIifQ==