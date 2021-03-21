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
            data: propertyDescription.title || propertyDescription.name
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
        return template("<label>" + this.getProperty("data") + "</label>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9tZXRhZGF0YS9tb2RlbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2NvbGxlY3Rpb24uaHRtbCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2xheW91dC5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvb2JqZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9wYW5lbC5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvdWktYnV0dG9uLmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aS1kcm9wZG93bi1idXR0b24uaHRtbCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2NvbGxlY3Rpb24uc2Nzcz83ZTZiIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvY29sbGVjdGlvbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2luZGV4LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvbGF5b3V0LnNjc3M/M2Y1YSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL2xheW91dC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL29iamVjdC5zY3NzPzU2M2UiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9wYW5lbC5zY3NzP2VmZDEiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC9wYW5lbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL3JlbmRlcmVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3VpbWwvdWktYnV0dG9uLnNjc3M/ODk1OSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL3VpLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi91aW1sL3VpLWRyb3Bkb3duLWJ1dHRvbi5zY3NzPzYzYjgiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aS1kcm9wZG93bi1idXR0b24udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aW1sLXdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vdWltbC91aW1sLnRzIiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJrb1wiLFwiY29tbW9uanMyXCI6XCJrbm9ja291dFwiLFwiY29tbW9uanNcIjpcImtub2Nrb3V0XCIsXCJhbWRcIjpcImtub2Nrb3V0XCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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b2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJVaW1sXCIsIFtcImtub2Nrb3V0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlVpbWxcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiVWltbFwiXSA9IGZhY3Rvcnkocm9vdFtcImtvXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi91aW1sL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgSU9iamVjdERlc2NyaXB0aW9uIH0gZnJvbSBcIi4vb2JqZWN0XCI7XHJcblxyXG5leHBvcnQgdmFyIGRvbWFpbjoge1tpbmRleDogc3RyaW5nXTogSU9iamVjdERlc2NyaXB0aW9ufSA9IHt9O1xyXG5cclxuZG9tYWluW1wicGFydFwiXSA9IHtcclxuICAgIG5hbWU6IFwicGFydFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0Y2xhc3NcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5kb21haW5bXCJwYW5lbFwiXSA9IHtcclxuICAgIG5hbWU6IFwicGFuZWxcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwidGV4dFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImxheW91dEl0ZW1cIl0gPSB7XHJcbiAgICBuYW1lOiBcImxheW91dEl0ZW1cIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wiY29udGFpbmVyXCJdID0ge1xyXG4gICAgbmFtZTogXCJjb250YWluZXJcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGFiZWxcIl0gPSB7XHJcbiAgICBuYW1lOiBcImxhYmVsXCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5kb21haW5bXCJpbnB1dFwiXSA9IHtcclxuICAgIG5hbWU6IFwiaW5wdXRcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImxheW91dFwiXSA9IHtcclxuICAgIG5hbWU6IFwibGF5b3V0XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImxheW91dFJvd1wiXSA9IHtcclxuICAgIG5hbWU6IFwibGF5b3V0Um93XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImxheW91dENvbHVtblwiXSA9IHtcclxuICAgIG5hbWU6IFwiaW5wdXRcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdERlc2NyaXB0aW9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGRvbWFpbltuYW1lXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2ltcGxlVHlwZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIW5hbWUgJiYgKCFkb21haW5bbmFtZV0gJiYgbmFtZS5pbmRleE9mKFwiW11cIikgPT0gLTEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheVR5cGUobmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gISFuYW1lICYmIG5hbWUubGVuZ3RoID4gMiAmJiBuYW1lW25hbWUubGVuZ3RoLTJdID09PSBcIltcIiAmJiBuYW1lW25hbWUubGVuZ3RoLTFdID09PSBcIl1cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFycmF5RWxlbWVudFR5cGUobmFtZTogc3RyaW5nKSB7XHJcbiAgICBpZihpc0FycmF5VHlwZShuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aC0yKTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9J2NvbGxlY3Rpb24nIGRhdGEtYmluZD1cXFwiXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sbGVjdGlvbl9faGVhZGVyXFxcIlxcclxcbiAgICAgICAgZGF0YS1iaW5kPVxcXCJjbGljazogZnVuY3Rpb24gKCkgeyBjb2xsYXBzZWQoIWNvbGxhcHNlZCgpKTsgfSwgY3NzOiB7ICdjb2xsZWN0aW9uX19oZWFkZXItLWNvbGxhcHNlZCc6IGNvbGxhcHNlZCB9XFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb25fX2NvbnRlbnRcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7ICdjb2xsZWN0aW9uX19jb250ZW50LS1oaWRkZW4nOiBjb2xsYXBzZWQgfVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsZWN0aW9uX19pdGVtLW1lbnVcXFwiPlxcclxcbiAgICAgICAgICAgIDx1aS1kcm9wZG93bi1idXR0b24gcGFyYW1zPVxcXCJpdGVtOiBhZGRBY3Rpb25cXFwiPjwvdWktZHJvcGRvd24tYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGl0ZW1zIC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGVjdGlvbl9faXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPG9iamVjdC1lZGl0b3IgcGFyYW1zPVxcXCJjb250ZXh0OiAkZGF0YSwgdHlwZTogJHBhcmVudC5lbGVtZW50VHlwZVxcXCI+PC9vYmplY3QtZWRpdG9yPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxlY3Rpb25fX2l0ZW0tbWVudVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tbWVudV9fYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBmdW5jdGlvbigpIHsgJHBhcmVudC5yZW1vdmUoJGRhdGEpOyB9XFxcIj4tIFJlbW92ZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBrbyBmb3JlYWNoOiBlbGVtZW50cyAtLT5cXHJcXG48bGF5b3V0LWl0ZW0gcGFyYW1zPVxcXCJlbGVtZW50OiAkZGF0YVxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZTogeyAgfVxcXCI+PC9sYXlvdXQtaXRlbT5cXHJcXG48IS0tIC9rbyAtLT5cXHJcXG48IS0tIGtvIGlmOiBlbGVtZW50cygpLmxlbmd0aCA9PT0gMCAtLT5cXHJcXG48cGxhY2Vob2xkZXItaXRlbSBwYXJhbXM9XFxcImVsZW1lbnQ6IGZvcm1FbGVtZW50XFxcIj48L3BsYWNlaG9sZGVyLWl0ZW0+XFxyXFxuPCEtLSAva28gLS0+XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nb2JqZWN0JyBkYXRhLWJpbmQ9XFxcIlxcXCI+XFxyXFxuICAgIDxsYXlvdXQtaXRlbSBwYXJhbXM9XFxcInVpbWw6IGxheW91dFVpbWwsIGNvbnRleHQ6IGNvbnRleHRcXFwiIGRhdGEtYmluZD1cXFwic3R5bGU6IHsgIH1cXFwiPjwvbGF5b3V0LWl0ZW0+XFxyXFxuPC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0ncGFuZWwnIGRhdGEtYmluZD1cXFwidmlzaWJsZTogISRkYXRhLnZpc2libGUgfHwgJGRhdGEudmlzaWJsZSgpLCBjc3M6IGNzc0NsYXNzZXNcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPSdwYW5lbF9faGVhZGVyJ1xcclxcbiAgICAgICAgZGF0YS1iaW5kPVxcXCJjbGljazogZnVuY3Rpb24gKCkgeyBjb2xsYXBzZWQoIWNvbGxhcHNlZCgpKTsgcmVhZHkodHJ1ZSk7IH0sIGNzczogeyAncGFuZWxfX2hlYWRlci0tY29sbGFwc2VkJzogY29sbGFwc2VkIH1cXFwiPlxcclxcbiAgICAgICAgPCEtLSBrbyBpZjogISEkZGF0YS52aXNpYmxlIC0tPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9J3BhbmVsX19oZWFkZXItY2xvc2UtaWNvbicgZGF0YS1iaW5kPVxcXCJjbGljazogZnVuY3Rpb24gKCkgeyB2aXNpYmxlKGZhbHNlKTsgfVxcXCI+JiMxMDA2MDs8L3NwYW4+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsX19oZWFkZXItZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdwYW5lbF9faGVhZGVyLWNhcHRpb24nIGRhdGEtYmluZD1cXFwidGV4dDogdGV4dCB8fCAnUGFuZWwgdGl0bGUnXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3BhbmVsX19oZWFkZXItY29sbGFwc2VyJyBkYXRhLWJpbmQ9XFxcInRleHQ6IChjb2xsYXBzZWQoKSA/ICcmIzcwOTsnIDogJyYjNzA4OycpXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9J3BhbmVsX19ib2R5JyBkYXRhLWJpbmQ9XFxcImNzczogeyAncGFuZWxfX2JvZHktLWhpZGRlbic6IGNvbGxhcHNlZCB9XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsX19jb250ZW50XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICFjb2xsYXBzZWQoKSwgd2l0aDogJHBhcmVudFxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYmYtaXRlbS1tZW51X19pdGVtIGJmLWl0ZW0tbWVudV9fYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRpdGxlLCBjbGljazogYWN0aW9uLCBjbGlja0J1YmJsZTogZmFsc2UsIHZpc2libGU6ICEkZGF0YS52aXNpYmxlIHx8ICRkYXRhLnZpc2libGUoKVxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYmYtaXRlbS1tZW51X19kcm9wZG93bi1jb250YWluZXJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tbWVudV9fZHJvcGRvd25cXFwiIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGUsIGNsaWNrQnViYmxlOiBmYWxzZSwgdmlzaWJsZTogdmlzaWJsZVxcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLW1lbnVfX2Ryb3Bkb3duLWl0ZW1zXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHZpc2libGVcXFwiPlxcclxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBpdGVtcyAtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tbWVudV9fZHJvcGRvd24taXRlbVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZSwgY2xpY2s6ICRwYXJlbnQuY2xpY2ssIGNsaWNrQnViYmxlOiBmYWxzZSwgdmlzaWJsZTogISRkYXRhLnZpc2libGUgfHwgJGRhdGEudmlzaWJsZSgpXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgaHRtbFVpUmVuZGVyZXJQZWVycywgcmVuZGVyIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmltcG9ydCBcIi4vY29sbGVjdGlvbi5zY3NzXCI7XHJcblxyXG52YXIgY29sbGVjdGlvbkVkaXRvclRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vY29sbGVjdGlvbi5odG1sXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25XaWRnZXRWaWV3TW9kZWwge1xyXG4gICAgcHJpdmF0ZSBfaXRlbXNTdWJzY3JpcHRpb246IGtvLlN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWw6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IHsgZGF0YTogc3RyaW5nLCBlbGVtZW50VHlwZTogc3RyaW5nIH0sIHB1YmxpYyBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gY29udGV4dC4kZGF0YTtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMubW9kZWxbb3B0aW9ucy5kYXRhXSB8fCBbXTtcclxuICAgICAgICB0aGlzLml0ZW1zKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zU3Vic2NyaXB0aW9uID0gdGhpcy5pdGVtcy5zdWJzY3JpYmUoaXRlbXMgPT4gdGhpcy5tb2RlbFt0aGlzLm9wdGlvbnMuZGF0YV0gPSBpdGVtcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGVzID0gWyBcImxhYmVsXCIsIFwiaW5wdXRcIiwgXCJwYW5lbFwiIF07XHJcbiAgICAgICAgdHlwZXMuZm9yRWFjaCh0eXBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRBY3Rpb24uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4gdGhpcy5hZGQodHlwZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VkID0ga28ub2JzZXJ2YWJsZSh0cnVlKTtcclxuXHJcbiAgICBpdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xyXG5cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jb2xsYXBzZWQoKT8nPic6J3YnfSAke3RoaXMub3B0aW9ucy5kYXRhfSAoJHt0aGlzLml0ZW1zKCkubGVuZ3RofSlgO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVsZW1lbnRUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFjdGlvbiA9IHtcclxuICAgICAgICB0aXRsZTogXCIrIEFkZFwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZChlbGVtZW50VHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gVE9ETzogcGFzcyBjcmVhdG9yIGZ1bmN0aW9uIGFzIGEgcGFyYW1ldGVyXHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMubW9kZWwuY3JlYXRlKGVsZW1lbnRUeXBlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlID0gKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXRlbXMucmVtb3ZlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiY29sbGVjdGlvbi1lZGl0b3JcIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sbGVjdGlvbldpZGdldFZpZXdNb2RlbChwYXJhbXMub3B0aW9ucywgcGFyYW1zLmNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogY29sbGVjdGlvbkVkaXRvclRlbXBsYXRlXHJcbn0pO1xyXG5cclxuLy8gV2lkZ2V0IHJlZ2lzdHJhdGlvbiBpbiBVSU1MIHJlbmRlcmluZyBwZWVyc1xyXG4vL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXHJcbmh0bWxVaVJlbmRlcmVyUGVlcnNbMF0uZGNsYXNzZXMucHVzaCh7XHJcbiAgICBpZDogXCJjb2xsZWN0aW9uLWVkaXRvclwiLFxyXG4gICAgbWFwc3RvOiBcIkNvbXBvbmVudFJlbmRlcmVyXCJcclxufSk7IiwiaW1wb3J0IHsgSVVNTCwgSVVNTEludGVyZmFjZSwgSVBhcnQsIGh0bWxVaVJlbmRlcmVyUGVlcnMgfSBmcm9tIFwiLi91aW1sXCI7XHJcbmltcG9ydCB7IFVJTUxXcmFwcGVyIH0gZnJvbSBcIi4vdWltbC13cmFwcGVyXCI7XHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi91aW1sXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3JlbmRlcmVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3BhbmVsXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2xheW91dFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vYmplY3RcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vY29sbGVjdGlvblwiO1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdWktYWN0aW9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3VpLWJ1dHRvblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91aS1kcm9wZG93bi1idXR0b25cIjtcclxuXHJcblxyXG5kZWNsYXJlIHZhciBjb25maWc6IElVTUw7XHJcblxyXG5jb25zdCB1aW1sV3JhcHBlciA9IG5ldyBVSU1MV3JhcHBlcih0eXBlb2YgY29uZmlnICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbmZpZyB8fCB7IHVpbWxpbnRlcmZhY2U6IDxJVU1MSW50ZXJmYWNlPnt9LCBwZWVyczogaHRtbFVpUmVuZGVyZXJQZWVycyB9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIocGFydDogSVBhcnQsIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50KSB7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IHVpbWxXcmFwcGVyLmNyZWF0ZVJlbmRlcmVyKHBhcnQpO1xyXG4gICAgcmV0dXJuIHJlbmRlcmVyLnJlbmRlcihjb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaCgpIHtcclxuICAgIHVpbWxXcmFwcGVyLnJlZnJlc2goKTtcclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcblxyXG5pbXBvcnQgeyBodG1sVWlSZW5kZXJlclBlZXJzIH0gZnJvbSBcIi4vdWltbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9sYXlvdXQuc2Nzc1wiO1xyXG5cclxudmFyIGxheW91dFRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vbGF5b3V0Lmh0bWxcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0Vmlld01vZGVsIHtcclxuXHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJsYXlvdXRcIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgIC8vIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soY29tcG9uZW50SW5mby5lbGVtZW50LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBzdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgdmFyIHBhbmVsRm9ybUVsZW1lbnQgPSBwYXJhbXMuY29udGV4dC4kcGFyZW50c1syXTtcclxuICAgICAgICAgICAgdmFyIGxheW91dEZvcm1FbGVtZW50ID0gcGFuZWxGb3JtRWxlbWVudC5lbGVtZW50cygpWzBdO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZm9ybUVsZW1lbnQ6IGxheW91dEZvcm1FbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudHM6IGtvLmNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGF5b3V0Rm9ybUVsZW1lbnQuZWxlbWVudHMoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBsYXlvdXRUZW1wbGF0ZVxyXG59KTtcclxuXHJcbi8vIFdpZGdldCByZWdpc3RyYXRpb24gaW4gVUlNTCByZW5kZXJpbmcgcGVlcnNcclxuLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRGdW5jdGlvblxyXG5odG1sVWlSZW5kZXJlclBlZXJzWzBdLmRjbGFzc2VzLnB1c2goe1xyXG4gICAgaWQ6IFwibGF5b3V0XCIsXHJcbiAgICBtYXBzdG86IFwiQ29tcG9uZW50UmVuZGVyZXJcIlxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgSVByb3BlcnR5RGVzY3JpcHRpb24gfSBmcm9tIFwiLi4vbWV0YWRhdGEvb2JqZWN0XCI7XHJcbmltcG9ydCB7IGdldE9iamVjdERlc2NyaXB0aW9uLCBpc0FycmF5VHlwZSB9IGZyb20gXCIuLi9tZXRhZGF0YS9tb2RlbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9vYmplY3Quc2Nzc1wiO1xyXG5cclxudmFyIG9iamVjdEVkaXRvclRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vb2JqZWN0Lmh0bWxcIik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9wZXJ0eUVkaXRvclVpbWwocHJvcGVydHlEZXNjcmlwdGlvbjogSVByb3BlcnR5RGVzY3JpcHRpb24pIHtcclxuICAgIGxldCBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eURlc2NyaXB0aW9uLnR5cGUgfHwgXCJzdHJpbmdcIjtcclxuICAgIGxldCBwYXJ0cyA9IFtdO1xyXG4gICAgaWYoaXNBcnJheVR5cGUocHJvcGVydHlUeXBlKSkge1xyXG4gICAgICAgIHBhcnRzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwiY29sbGVjdGlvbi1lZGl0b3JcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3NlczogXCJ0ZXN0LWlucHV0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnR5RGVzY3JpcHRpb24ubmFtZSxcclxuICAgICAgICAgICAgZWxlbWVudFR5cGU6IHByb3BlcnR5RGVzY3JpcHRpb24udHlwZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJ0cy5wdXNoKHtcclxuICAgICAgICAgICAgcGFydGNsYXNzOiBcImxhYmVsXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IFwidGVzdC1sYWJlbFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0eURlc2NyaXB0aW9uLnRpdGxlIHx8IHByb3BlcnR5RGVzY3JpcHRpb24ubmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBhcnRzLnB1c2goe1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3NlczogXCJ0ZXN0LWlucHV0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnR5RGVzY3JpcHRpb24ubmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJ0Y2xhc3M6IFwibGF5b3V0SXRlbVwiLFxyXG4gICAgICAgIGNzc0NsYXNzZXM6IFwiaXRlbSB0ZXN0LWl0ZW0gdGVzdC1ncm91cFwiLFxyXG4gICAgICAgIHBhcnRzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RXaWRnZXRWaWV3TW9kZWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7IH0sIHB1YmxpYyBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxheW91dFVpbWwucGFydHMucHVzaChjcmVhdGVQcm9wZXJ0eUVkaXRvclVpbWwoe25hbWU6IFwiZGF0YVwifSkpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdERlc2NyaXB0aW9uID0gZ2V0T2JqZWN0RGVzY3JpcHRpb24oY29udGV4dC5wYXJ0Y2xhc3MpO1xyXG4gICAgICAgIGlmKG9iamVjdERlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIG9iamVjdERlc2NyaXB0aW9uLnByb3BlcnRpZXMuZm9yRWFjaChwZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dFVpbWwucGFydHMucHVzaChjcmVhdGVQcm9wZXJ0eUVkaXRvclVpbWwocGQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGF5b3V0VWltbCA9IHtcclxuICAgICAgICBwYXJ0Y2xhc3M6IFwibGF5b3V0Q29sdW1uXCIsXHJcbiAgICAgICAgY3NzQ2xhc3NlczogXCJjb2x1bW5cIixcclxuICAgICAgICBwYXJ0czogW11cclxuICAgIH07XHJcblxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgIH1cclxufVxyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3RlcihcIm9iamVjdC1lZGl0b3JcIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgT2JqZWN0V2lkZ2V0Vmlld01vZGVsKHBhcmFtcy5vcHRpb25zLCBwYXJhbXMuY29udGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBvYmplY3RFZGl0b3JUZW1wbGF0ZVxyXG59KTtcclxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCB7IGh0bWxVaVJlbmRlcmVyUGVlcnMsIHJlbmRlciB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5pbXBvcnQgXCIuL3BhbmVsLnNjc3NcIjtcclxuXHJcbnZhciBwYW5lbFRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vcGFuZWwuaHRtbFwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYW5lbFdpZGdldFZpZXdNb2RlbCB7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgY29udGV4dCkge1xyXG4gICAgICAgIHRoaXMuJHBhcmVudCA9IGNvbnRleHQuJHBhcmVudCAmJiBjb250ZXh0LiRwYXJlbnQuZGF0YTtcclxuICAgICAgICB2YXIgcGFuZWxWaXNpYmxlSW5kZXggPSBvcHRpb25zLnZpc2libGVJbmRleDtcclxuICAgICAgICBpZighIXBhbmVsVmlzaWJsZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGNvbnRleHQuJHBhcmVudC52aXNpYmxlW3BhbmVsVmlzaWJsZUluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKGtvLmNvbXB1dGVkKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBpc05lZWRUb0V4cGFuZCA9IGtvLnVud3JhcCh0aGlzLnZpc2libGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQoIWlzTmVlZFRvRXhwYW5kKTtcclxuICAgICAgICAgICAgICAgIGlmKGlzTmVlZFRvRXhwYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxhcHNlZCghb3B0aW9ucy5leHBhbmRlZCk7XHJcbiAgICAgICAgdGhpcy5yZWFkeSghIW9wdGlvbnMuZXhwYW5kZWQpO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzZXMgPSBvcHRpb25zLmNzc0NsYXNzZXM7XHJcbiAgICB9XHJcbiAgICBjb2xsYXBzZWQgPSBrby5vYnNlcnZhYmxlKHRydWUpO1xyXG4gICAgcmVhZHkgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuICAgIHZpc2libGU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICAgICRwYXJlbnQ7XHJcbiAgICB0ZXh0ID0gXCJcIjtcclxuICAgIGNzc0NsYXNzZXMgPSBcIlwiO1xyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YnNjcmlwdGlvbiA9PiBzdWJzY3JpcHRpb24uZGlzcG9zZSgpKTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnNwbGljZSgwLCB0aGlzLl9zdWJzY3JpcHRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwicGFuZWxcIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgIGxldCBwYW5lbFZpZXdNb2RlbCA9IG5ldyBQYW5lbFdpZGdldFZpZXdNb2RlbChwYXJhbXMub3B0aW9ucywgcGFyYW1zLmNvbnRleHQpO1xyXG4gICAgICAgICAgICBsZXQgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZW5kZXJSZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCA9IGNvbXBvbmVudEluZm8uZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFuZWxfX2NvbnRlbnRcIilbMF07XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAocGFyYW1zLm9wdGlvbnMucGFydHMgfHwgW10pLmZvckVhY2gocGFydCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRDb250ZW50ID0gcmVuZGVyKHBhcnQsIGNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQocGFydENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclJlc3VsdC5wdXNoKHBhcnRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYocGFuZWxWaWV3TW9kZWwucmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyQ29udGVudCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IHBhbmVsVmlld01vZGVsLnJlYWR5LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlcyA9IHJlbmRlckNvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkQ29udGV4dCA9IHBhcmFtcy5jb250ZXh0LmNyZWF0ZUNoaWxkQ29udGV4dChwYXJhbXMubW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga28uYXBwbHlCaW5kaW5ncyhjaGlsZENvbnRleHQsIG5vZGVzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKGNvbXBvbmVudEluZm8uZWxlbWVudCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFuZWxWaWV3TW9kZWwuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhbmVsVmlld01vZGVsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogcGFuZWxUZW1wbGF0ZVxyXG59KTtcclxuXHJcbi8vIFdpZGdldCByZWdpc3RyYXRpb24gaW4gVUlNTCByZW5kZXJpbmcgcGVlcnNcclxuLy9ub2luc3BlY3Rpb24gVHlwZVNjcmlwdFVucmVzb2x2ZWRGdW5jdGlvblxyXG5odG1sVWlSZW5kZXJlclBlZXJzWzBdLmRjbGFzc2VzLnB1c2goe1xyXG4gICAgaWQ6IFwicGFuZWxcIixcclxuICAgIG1hcHN0bzogXCJDb21wb25lbnRSZW5kZXJlclwiXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCB7IFVJTUxXcmFwcGVyIH0gZnJvbSBcIi4vdWltbC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IElQYXJ0LCBodG1sVWlSZW5kZXJlclBlZXJzIH0gZnJvbSBcIi4vdWltbFwiO1xyXG5cclxuZnVuY3Rpb24gdGVtcGxhdGUoaHRtbDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIHJldHVybiBkaXYuY2hpbGRyZW4ubGVuZ3RoID09PSAxID8gPEhUTUxFbGVtZW50PmRpdi5jaGlsZHJlblswXSA6IGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVuZGVyZXIge1xyXG4gICAgcmVuZGVyOiAoY29udGFpbmVyPzogSFRNTEVsZW1lbnQpID0+IEhUTUxFbGVtZW50O1xyXG4gICAgcmVuZGVyZXJzOiBJUmVuZGVyZXJbXTtcclxuICAgIGdldFByb3BlcnR5OiAocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+IGFueTtcclxuICAgIHBhcnQ6IElQYXJ0O1xyXG4gICAgcmVuZGVyQ2hpbGRyZW46IChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlUmVuZGVyZXIgaW1wbGVtZW50cyBJUmVuZGVyZXIge1xyXG4gICAgc3R5bGVzOiBhbnk7XHJcbiAgICBwYXJ0OiBJUGFydDtcclxuICAgIGNvbnN0cnVjdG9yKHBhcnQ6IElQYXJ0LCB1aW1sV3JhcHBlcjogVUlNTFdyYXBwZXIpIHtcclxuICAgICAgICB0aGlzLnBhcnQgPSBwYXJ0O1xyXG4gICAgICAgIHRoaXMuc3R5bGVzID0gdWltbFdyYXBwZXIuZ2V0U3R5bGVzKHBhcnQpO1xyXG4gICAgICAgIChwYXJ0LnBhcnRzIHx8IFtdKS5mb3JFYWNoKChwYXJ0SW5mbykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHVpbWxXcmFwcGVyLmNyZWF0ZVJlbmRlcmVyKHBhcnRJbmZvKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXN0b21Qcm9jZXNzZWRTdHlsZXMoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gW1wiY3NzQ2xhc3Nlc1wiLCBcInRleHRcIiwgXCJkYXRhXCJdXHJcbiAgICB9XHJcbiAgICBhcHBseVN0eWxlcyhwYXJ0OiBJUGFydCwgZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGVOYW1lID0ga2V5O1xyXG4gICAgICAgICAgICB2YXIgc3R5bGVWYWx1ZSA9IHRoaXMuc3R5bGVzW2tleV07XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0Q3VzdG9tUHJvY2Vzc2VkU3R5bGVzKCkuaW5kZXhPZihzdHlsZU5hbWUpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgKDxhbnk+ZWxlbWVudCkuY3NzKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcy5jc3NDbGFzc2VzKVxyXG4gICAgICAgICAgICAubWFwKGtleSA9PiB0aGlzLnN0eWxlcy5jc3NDbGFzc2VzW2tleV0pXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAoXCIgXCIgKyBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2V0UHJvcGVydHkoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGlmKHRleHQgJiYgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHRtbCA9IHRoaXMuZ2V0UHJvcGVydHkoXCJodG1sXCIpO1xyXG4gICAgICAgIGlmKGh0bWwgJiYgZWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQgPyB0aGlzLnBhcnRbcHJvcGVydHlOYW1lXSA6IHRoaXMuc3R5bGVzW3Byb3BlcnR5TmFtZV07XHJcbiAgICB9XHJcbiAgICByZW5kZXJDaGlsZHJlbihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlcnMuZm9yRWFjaChyZW5kZXJlciA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihjb250YWluZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVuZGVyUmVzdWx0KCkge1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZShcIjxkaXYvPlwiKTtcclxuICAgIH1cclxuICAgIHJlbmRlcihjb250YWluZXI6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIHZhciByZW5kZXJSZXN1bHQgPSB0aGlzLmdldFJlbmRlclJlc3VsdCgpO1xyXG4gICAgICAgIHZhciBkYXRhQmluZFZhbHVlID0gdGhpcy5nZXRQcm9wZXJ0eShcImRhdGFCaW5kXCIpO1xyXG4gICAgICAgIGlmKGRhdGFCaW5kVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZW5kZXJSZXN1bHQuZGF0YXNldC5iaW5kID0gT2JqZWN0LmtleXMoZGF0YUJpbmRWYWx1ZSkubWFwKChrKSA9PiBgJHtrfTogJHtkYXRhQmluZFZhbHVlW2tdfWApLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlcyh0aGlzLnBhcnQsIHJlbmRlclJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gICAgICAgIHZhciBoaW50ID0gdGhpcy5nZXRQcm9wZXJ0eShcImhpbnRcIik7XHJcbiAgICAgICAgaWYoISFoaW50KSB7XHJcbiAgICAgICAgICAgIHJlbmRlclJlc3VsdC50aXRsZSA9IGhpbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKHJlbmRlclJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZW5kZXJSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZW5kZXJlcnM6IElSZW5kZXJlcltdID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRSZW5kZXJlciBleHRlbmRzIEludGVyZmFjZVJlbmRlcmVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgY29tcG9uZW50UHJlZml4ID0gXCJcIjtcclxuICAgIGNvbnN0cnVjdG9yKHBhcnQ6IElQYXJ0LCB1aW1sV3JhcHBlcjogVUlNTFdyYXBwZXIpIHtcclxuICAgICAgICBzdXBlcihwYXJ0LCB1aW1sV3JhcHBlcik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHZhciB3aWRnZXROYW1lID0gKChDb21wb25lbnRSZW5kZXJlci5jb21wb25lbnRQcmVmaXggPyAoQ29tcG9uZW50UmVuZGVyZXIuY29tcG9uZW50UHJlZml4ICsgXCItXCIpIDogXCJcIikgKyB0aGlzLnBhcnQucGFydGNsYXNzKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciByZW5kZXJSZXN1bHQ7XHJcbiAgICAgICAgdmFyIHdpZGdldE9wdGlvbnMgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBhcnQpLnNwbGl0KFwiXFxcIlwiKS5qb2luKFwiJ1wiKTtcclxuICAgICAgICBpZihrby5jb21wb25lbnRzLmlzUmVnaXN0ZXJlZCh3aWRnZXROYW1lKSkge1xyXG4gICAgICAgICAgICByZW5kZXJSZXN1bHQgPSB0ZW1wbGF0ZShcIjxcIiArIHdpZGdldE5hbWUgKyBcIiBwYXJhbXM9XFxcInsgbW9kZWw6ICRkYXRhLCBjb250ZXh0OiAkY29udGV4dCwgb3B0aW9uczogXCIgKyB3aWRnZXRPcHRpb25zICsgXCJ9XFxcIi8+XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBodG1sVWlSZW5kZXJlclBlZXJzWzBdLndsb2FkZXJzW3dpZGdldE5hbWVdID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclJlc3VsdCA9IHRlbXBsYXRlKFwiPGRpdiBkYXRhLWJpbmQ9XFxcImxhenlXaWRnZXQ6IHsgbmFtZTogJ1wiICsgd2lkZ2V0TmFtZSArIFwiJywgb3B0aW9uczogXCIgKyB3aWRnZXRPcHRpb25zICsgXCIgfVxcXCIvPlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlclJlc3VsdCA9IHRlbXBsYXRlKFwiPGNvbXBvbmVudC1zdHViIHBhcmFtcz1cXFwieyBtZXNzYWdlOiAnRXJyb3I6IENvbXBvbmVudCBcIiArIHdpZGdldE5hbWUgKyBcIiBpcyBub3QgaW5zdGFsbGVkLid9XFxcIi8+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwbHlTdHlsZXModGhpcy5wYXJ0LCByZW5kZXJSZXN1bHQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocmVuZGVyUmVzdWx0KTtcclxuICAgICAgICByZXR1cm4gcmVuZGVyUmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiY29tcG9uZW50LXN0dWJcIiwge1xyXG4gICAgdmlld01vZGVsOiB7XHJcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHBhcmFtcy5tZXNzYWdlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlOiBcIjxkaXYgZGF0YS1iaW5kPSd0ZXh0OiBtZXNzYWdlJz48L2Rpdj5cIlxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWluZXJSZW5kZXJlciBleHRlbmRzIEludGVyZmFjZVJlbmRlcmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhcnQ6IElQYXJ0LCB1aW1sV3JhcHBlcjogVUlNTFdyYXBwZXIpIHtcclxuICAgICAgICBzdXBlcihwYXJ0LCB1aW1sV3JhcHBlcik7XHJcbiAgICB9XHJcbiAgICBnZXRSZW5kZXJSZXN1bHQoKSB7XHJcbiAgICAgICAgdmFyIGJpbmRpbmdzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHZhciB2aXNpYmxlID0gdGhpcy5nZXRQcm9wZXJ0eShcInZpc2libGVcIik7XHJcbiAgICAgICAgaWYoISF2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIGJpbmRpbmdzLnB1c2goXCJ2aXNpYmxlOiBcIiArIHZpc2libGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3NzID0gdGhpcy5nZXRQcm9wZXJ0eShcImNzc1wiKTtcclxuICAgICAgICBpZighIWNzcykge1xyXG4gICAgICAgICAgICBiaW5kaW5ncy5wdXNoKFwiY3NzOiBcIiArIGNzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGVtcGxhdGUoXCI8ZGl2IGRhdGEtYmluZD0nXCIgKyBiaW5kaW5ncy5qb2luKFwiLCBcIikgICsgXCInLz5cIik7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYWJlbFJlbmRlcmVyIGV4dGVuZHMgSW50ZXJmYWNlUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IocGFydDogSVBhcnQsIHVpbWxXcmFwcGVyOiBVSU1MV3JhcHBlcikge1xyXG4gICAgICAgIHN1cGVyKHBhcnQsIHVpbWxXcmFwcGVyKTtcclxuICAgIH1cclxuICAgIGdldFJlbmRlclJlc3VsdCgpIHtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGUoYDxsYWJlbD4ke3RoaXMuZ2V0UHJvcGVydHkoXCJkYXRhXCIpfTwvbGFiZWw+YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFJlbmRlcmVyIGV4dGVuZHMgSW50ZXJmYWNlUmVuZGVyZXIge1xyXG4gICAgY29uc3RydWN0b3IocGFydDogSVBhcnQsIHVpbWxXcmFwcGVyOiBVSU1MV3JhcHBlcikge1xyXG4gICAgICAgIHN1cGVyKHBhcnQsIHVpbWxXcmFwcGVyKTtcclxuICAgIH1cclxuICAgIGdldFJlbmRlclJlc3VsdCgpIHtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGUoXCI8aW5wdXQgY2xhc3M9XFxcImlucHV0LWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJcIiArICh0aGlzLmdldFByb3BlcnR5KFwicGxlY2Vob2xkZXJUZXh0XCIpfHxcIlwiKSArIFwiXFxcIlwiXHJcbiAgICAgICAgICAgICsgXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogJGRhdGEuXCIgKyB0aGlzLmdldFByb3BlcnR5KFwiZGF0YVwiKSArIFwiLCB2YWx1ZVVwZGF0ZTogJ2tleXVwJ1xcXCJcIlxyXG4gICAgICAgICAgICArICghIXRoaXMuZ2V0UHJvcGVydHkoXCJyZWFkb25seVwiKSA/IFwiIGRpc2FibGVkXCIgOiBcIlwiKVxyXG4gICAgICAgICAgICArICghIXRoaXMuZ2V0UHJvcGVydHkoXCJoaW50XCIpID8gKFwiIHRpdGxlPVxcXCJcIiArIHRoaXMuZ2V0UHJvcGVydHkoXCJoaW50XCIpICsgXCJcXFwiXCIpIDogXCJcIilcclxuICAgICAgICAgICAgKyAoISF0aGlzLmdldFByb3BlcnR5KFwicGF0dGVyblwiKSA/IChcIiBwYXR0ZXJuPVxcXCJcIiArIHRoaXMuZ2V0UHJvcGVydHkoXCJwYXR0ZXJuXCIpICsgXCJcXFwiXCIpIDogXCJcIilcclxuICAgICAgICAgICAgKyAodGhpcy5nZXRQcm9wZXJ0eShcImlzbnVsbGFibGVcIikgPT09IGZhbHNlID8gXCIgcmVxdWlyZWRcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICsgXCI+XCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3VpLWJ1dHRvbi5zY3NzXCI7XHJcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCJ0ZXh0LWxvYWRlciEuL3VpLWJ1dHRvbi5odG1sXCIpO1xyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInVpLWJ1dHRvblwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLml0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlXHJcbn0pO1xyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5pbXBvcnQgeyBJQWN0aW9uIH0gZnJvbSBcIi4vdWktYWN0aW9uXCI7XHJcblxyXG5pbXBvcnQgXCIuL3VpLWRyb3Bkb3duLWJ1dHRvbi5zY3NzXCI7XHJcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCJ0ZXh0LWxvYWRlciEuL3VpLWRyb3Bkb3duLWJ1dHRvbi5odG1sXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2l0ZW06IElBY3Rpb24sIHByaXZhdGUgX2hpZGU6ICgpID0+IHZvaWQpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW0udGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgdmlzaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPiAwICYmICghdGhpcy5faXRlbS52aXNpYmxlIHx8IGtvLnVud3JhcCh0aGlzLl9pdGVtLnZpc2libGUpKTtcclxuICAgIH1cclxuICAgIGdldCBpdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbS5pdGVtcyB8fCBbXTtcclxuICAgIH1cclxuICAgIGNsaWNrID0gKGl0ZW06IElBY3Rpb24sIGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdGVtLmFjdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidWktZHJvcGRvd24tYnV0dG9uXCIsIHtcclxuICAgIHZpZXdNb2RlbDoge1xyXG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRJbmZvLmVsZW1lbnQuY2hpbGRyZW5bMF0uYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRHJvcGRvd25CdXR0b24ocGFyYW1zLml0ZW0sIGhpZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVxyXG59KTtcclxuIiwiaW1wb3J0IHsgSVVNTCwgSVBlZXIsIElQYXJ0IH0gZnJvbSBcIi4vdWltbFwiO1xyXG5pbXBvcnQgKiBhcyBSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVJTUxXcmFwcGVyIHtcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyc01hcCA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfZ2V0VHlwZUNvbnN0cnVjdG9yKHR5cGVOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgdHlwZUNvbnN0cnVjdG9yID0gUmVuZGVyZXJbdHlwZU5hbWVdO1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHR5cGVDb25zdHJ1Y3RvciA9PT0gXCJmdW5jdGlvblwiKSA/IHR5cGVDb25zdHJ1Y3RvciA6IFJlbmRlcmVyLkludGVyZmFjZVJlbmRlcmVyO1xyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdWltbDogSVVNTCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB2YXIgaHRtbFByZXNlbnRhdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdWltbC5wZWVycy5mb3JFYWNoKChwZWVyOiBJUGVlcikgPT4ge1xyXG4gICAgICAgICAgICBpZihwZWVyLnBlZXJuYW1lID09PSBcInByZXNlbnRhdGlvblwiICYmIHBlZXIuaWQgPT09IFwiSFRNTFVJUmVuZGVyZXJcIikge1xyXG4gICAgICAgICAgICAgICAgaHRtbFByZXNlbnRhdGlvbiA9IHBlZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZighaHRtbFByZXNlbnRhdGlvbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIVE1MVUlSZW5kZXJlciBwcmVzZW50YXRpb24gbm90IGZvdW5kLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbFByZXNlbnRhdGlvbi5kY2xhc3Nlcy5mb3JFYWNoKChkY2xhc3MpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXJzTWFwW2RjbGFzcy5pZF0gPSB0aGlzLl9nZXRUeXBlQ29uc3RydWN0b3IoZGNsYXNzLm1hcHN0byk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRTdHlsZXMocGFydDogSVBhcnQpOiB7fSB7XHJcbiAgICAgICAgdmFyIHN0eWxlcyA9IHsgY3NzQ2xhc3NlczogW10gfTtcclxuICAgICAgICBpZihwYXJ0KSB7XHJcbiAgICAgICAgICAgICh0aGlzLl91aW1sLnVpbWxpbnRlcmZhY2Uuc3R5bGVzIHx8IFtdKS5mb3JFYWNoKChzdHlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc3R5bGUucGFydGNsYXNzID09PSBwYXJ0LnBhcnRjbGFzcyB8fCBzdHlsZS5wYXJ0bmFtZSA9PT0gcGFydC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN0eWxlLm5hbWUgIT09IFwiY3NzQ2xhc3NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbc3R5bGUubmFtZV0gPSBzdHlsZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5jc3NDbGFzc2VzLnB1c2goc3R5bGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIChwYXJ0LmNzc0NsYXNzZXMgfHwgXCJcIikuc3BsaXQoXCIgXCIpLmZvckVhY2goKHN0eWxlTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVzLmNzc0NsYXNzZXMucHVzaChzdHlsZU5hbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcclxuICAgIH1cclxuICAgIGNyZWF0ZVJlbmRlcmVyKHBhcnQ6IElQYXJ0KTogUmVuZGVyZXIuSVJlbmRlcmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLl9yZW5kZXJlcnNNYXBbcGFydC5wYXJ0Y2xhc3NdIHx8IFJlbmRlcmVyLkNvbXBvbmVudFJlbmRlcmVyKShwYXJ0LCB0aGlzKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElQYXJ0IHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgcGFydGNsYXNzOiBzdHJpbmc7XHJcbiAgICBwYXJ0cz86IElQYXJ0W107XHJcbiAgICBjc3NDbGFzc2VzPzogc3RyaW5nO1xyXG4gICAgW290aGVyczogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZSB7XHJcbiAgICBwYXJ0bmFtZT86IHN0cmluZztcclxuICAgIHBhcnRjbGFzcz86IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVNTEludGVyZmFjZSB7XHJcbiAgICBwYXJ0czogSVBhcnRbXTtcclxuICAgIHN0eWxlcz86IElTdHlsZVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wZXJ0eSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbWFwc3RvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBtYXBzdG86IHN0cmluZztcclxuICAgIGRwcm9wZXJ0aWVzPzogSVByb3BlcnR5W107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlZXIge1xyXG4gICAgcGVlcm5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBkY2xhc3NlczogSUNsYXNzW107XHJcbiAgICB3bG9hZGVyczogeyBbd2lkZ2V0OiBzdHJpbmddOiAoKSA9PiBQcm9taXNlPGFueT4gfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVU1MIHtcclxuICAgIHVpbWxpbnRlcmZhY2U6IElVTUxJbnRlcmZhY2U7XHJcbiAgICBwZWVyczogSVBlZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGxldCBodG1sVWlSZW5kZXJlclBlZXJzID0gW1xyXG4gICAgPElQZWVyPntcclxuICAgICAgICBwZWVybmFtZTogXCJwcmVzZW50YXRpb25cIixcclxuICAgICAgICBpZDogXCJIVE1MVUlSZW5kZXJlclwiLFxyXG4gICAgICAgIGRjbGFzc2VzOiBbXHJcbiAgICAgICAgICAgIHsgaWQ6IFwiY29udGFpbmVyXCIsIG1hcHN0bzogXCJDb250YWluZXJSZW5kZXJlclwiIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IFwiaW5wdXRcIiwgbWFwc3RvOiBcIklucHV0UmVuZGVyZXJcIiB9LFxyXG4gICAgICAgICAgICB7IGlkOiBcImxhYmVsXCIsIG1hcHN0bzogXCJMYWJlbFJlbmRlcmVyXCIgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgd2xvYWRlcnM6IDx7IFt3aWRnZXQ6IHN0cmluZ106ICgpID0+IFByb21pc2U8YW55PiB9Pnt9XHJcbiAgICB9XHJcbl07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rbm9ja291dF9fOyJdLCJzb3VyY2VSb290IjoiIn0=