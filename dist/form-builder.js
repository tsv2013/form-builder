(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("FormBuilder", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["FormBuilder"] = factory(require("knockout"));
	else
		root["FormBuilder"] = factory(root["ko"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/form-builder.ts");
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

/***/ "./node_modules/text-loader/index.js!./sources/form-builder.html":
/*!**************************************************************!*\
  !*** ./node_modules/text-loader!./sources/form-builder.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-layout\">\r\n    <layout-item params=\"element: root\" data-bind=\"css: { 'bf-layout--design-mode': isDesignMode }\"></layout-item>\r\n    <!-- <div class=\"bf-mode-button fa\" data-bind=\"click: toggleDesignMode, text: isDesignMode ? 'View':'', css: { 'fa-cog': !isDesignMode } \"> -->\r\n    <div class=\"bf-mode-button\" data-bind=\"click: toggleDesignMode, text: isDesignMode ? 'View':'Design' \">\r\n    </div>\r\n</div>\r\n<div class=\"bf-toolbox\" data-bind=\"visible: isDesignMode, foreach: toolbox\">\r\n    <div class=\"bf-toolbox__item\" draggable=\"true\"\r\n        data-bind=\"text: title, event: { dragstart: $parent.dragstart }, attr: { title: hint }\">\r\n    </div>\r\n</div>\r\n<div class=\"bf-layout-json\" data-bind=\"visible: isDesignMode\">\r\n    <textarea data-bind=\"value: jsonText\"></textarea>\r\n</div>\r\n<script type=\"text/html\" id=\"bf-item-part\">\r\n    <div data-bind=\"with: formElement.context || $data\">\r\n    </div>\r\n</script>"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./sources/item-menu.html":
/*!***********************************************************!*\
  !*** ./node_modules/text-loader!./sources/item-menu.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-item-menu\" data-bind=\"click: function() { return true; }, clickBubble: false\">\r\n    <div>\r\n        <!-- ko foreach: menuItems -->\r\n        <!-- ko component: { name: $data.component || 'ui-button', params: { item: $data } } -->\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n        <object-editor params=\"context: content\"></object-editor>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./sources/layout-item.html":
/*!*************************************************************!*\
  !*** ./node_modules/text-loader!./sources/layout-item.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ko if: isContainer -->\r\n<div class=\"bf-item-content\" data-bind=\"click: select, css: css\">\r\n    <!-- ko foreach: elements -->\r\n    <layout-item params=\"element: $data\" data-bind=\"style: {  }\"></layout-item>\r\n    <!-- /ko -->\r\n    <!-- ko if: elements().length === 0 -->\r\n    <placeholder-item params=\"element: formElement\"></placeholder-item>\r\n    <!-- /ko -->\r\n</div>\r\n<!-- /ko -->\r\n<!-- ko ifnot: isContainer -->\r\n<div class=\"bf-item-content\" draggable=\"true\"\r\n    data-bind=\"event: { dragenter: dragenter, dragover: dragover, dragleave: dragleave, drop: drop, dragstart: dragstart }, click: select, css: css\">\r\n    <!-- ko ifnot: isDesignMode -->\r\n    <div class=\"bf-item-content-holder\" data-bind=\"with: formElement.context || $data\">\r\n    </div>\r\n    <!-- /ko -->\r\n    <!-- ko if: isDesignMode -->\r\n    <div class=\"bf-item-content-holder\" data-bind=\"let: { $part: part }\">\r\n        <!-- ko template: { name: \"bf-item-part\", afterRender: afterPartTemplateRender } -->\r\n        <!-- /ko -->\r\n    </div>\r\n    <!-- /ko -->\r\n</div>\r\n<!-- /ko -->\r\n<!-- ko if: isSelected -->\r\n<item-menu params=\"element: formElement\"></item-menu>\r\n<!-- /ko -->"

/***/ }),

/***/ "./node_modules/text-loader/index.js!./sources/placeholder-item.html":
/*!******************************************************************!*\
  !*** ./node_modules/text-loader!./sources/placeholder-item.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bf-item-placeholder\" data-bind=\"event: { dragover: dragover, drop: drop }\">\r\n</div>"

/***/ }),

/***/ "./sources/default-toolbox.ts":
/*!************************************!*\
  !*** ./sources/default-toolbox.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultToolboxItems = exports.createToolboxItemsFor = exports.defaultToolboxItems = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./sources/utils.ts");
exports.defaultToolboxItems = [
    {
        title: "row",
        hint: "Drag to add row",
        json: {
            partclass: "layoutRow",
            cssClasses: "row",
            parts: []
        }
    },
    {
        title: "column",
        hint: "Drag to add column",
        json: {
            partclass: "layoutColumn",
            cssClasses: "column",
            parts: []
        }
    },
    {
        title: "panel",
        hint: "Drag to add panel",
        json: {
            partclass: "panel",
            cssClasses: "panel",
            parts: []
        }
    },
    {
        title: "label",
        hint: "Drag to add label",
        json: {
            partclass: "label",
            cssClasses: "test-label",
            data: "Label text"
        }
    },
    {
        title: "input",
        hint: "Drag to add input element",
        json: {
            partclass: "input",
            cssClasses: "test-input",
            data: "valName"
        }
    },
    {
        title: "composite",
        hint: "Drag to add composite element",
        json: {
            partclass: "layoutItem",
            cssClasses: "item test-item test-group",
            parts: [
                {
                    partclass: "label",
                    cssClasses: "test-label",
                    data: "Name"
                },
                {
                    partclass: "input",
                    cssClasses: "test-input",
                    data: "name"
                }
            ]
        }
    }
];
function createToolboxItemsFor(model) {
    return (Object.keys(model) || [])
        .filter(function (propertyName) { return typeof model[propertyName] !== "object"; })
        .map(function (propertyName) {
        return {
            title: utils_1.makeTitle(propertyName),
            hint: "Drag to add " + utils_1.makeTitle(propertyName),
            json: utils_1.createPropertyEditor(propertyName)
        };
    });
}
exports.createToolboxItemsFor = createToolboxItemsFor;
function createDefaultToolboxItems(model) {
    return [].concat(exports.defaultToolboxItems).concat(createToolboxItemsFor(model));
}
exports.createDefaultToolboxItems = createDefaultToolboxItems;


/***/ }),

/***/ "./sources/form-builder.scss":
/*!***********************************!*\
  !*** ./sources/form-builder.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/form-builder.ts":
/*!*********************************!*\
  !*** ./sources/form-builder.ts ***!
  \*********************************/
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
exports.render = exports.FormBuilder = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var uiml_layout_serializer_1 = __webpack_require__(/*! ./uiml-layout-serializer */ "./sources/uiml-layout-serializer.ts");
__webpack_require__(/*! ./form-builder.scss */ "./sources/form-builder.scss");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
var template = __webpack_require__(/*! text-loader!./form-builder.html */ "./node_modules/text-loader/index.js!./sources/form-builder.html");
var FormBuilder = (function () {
    function FormBuilder(_layout, _context, toolboxItems) {
        var _this = this;
        if (toolboxItems === void 0) { toolboxItems = []; }
        this._layout = _layout;
        this.toolbox = ko.observableArray();
        this.root = uiml_layout_serializer_1.UimlLayoutSerializer.createRoot();
        this.root.context = _context;
        this._layoutSubscription = ko.computed(function () {
            var layoutValue = ko.unwrap(_layout);
            if (!Array.isArray(layoutValue)) {
                layoutValue = [layoutValue];
            }
            _this.root.content.parts = layoutValue.map(function (part) { return uiml_parts_1.UimlPart.fromJSON(part); });
        });
        toolboxItems.forEach(function (item) { return _this.toolbox.push(item); });
    }
    FormBuilder.prototype.dragstart = function (model, event) {
        var originalEvent = (event.originalEvent || event);
        originalEvent.dataTransfer.setData("bf-item-json", JSON.stringify(model.json));
        return true;
    };
    Object.defineProperty(FormBuilder.prototype, "jsonText", {
        get: function () {
            if (this.root.elements().length > 0) {
                return JSON.stringify(uiml_layout_serializer_1.UimlLayoutSerializer.serialize(this.root.elements()[0]), null, 2);
            }
            return FormBuilder.defaultText;
        },
        set: function (json) {
            this._layout(JSON.parse(json || FormBuilder.defaultText));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormBuilder.prototype, "isDesignMode", {
        get: function () {
            return this.root.isDesignMode;
        },
        set: function (value) {
            this.root.isDesignMode = value;
        },
        enumerable: false,
        configurable: true
    });
    FormBuilder.prototype.toggleDesignMode = function (builder) {
        builder.isDesignMode = !builder.isDesignMode;
        this.jsonText = this.jsonText;
    };
    FormBuilder.prototype.dispose = function () {
        this._layoutSubscription.dispose();
    };
    FormBuilder.defaultText = '{"partclass": "layoutRow","cssClasses": "row","parts": []}';
    return FormBuilder;
}());
exports.FormBuilder = FormBuilder;
ko.components.register("form-builder", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new FormBuilder(params.layout, params.context, params.items);
        }
    },
    template: template
});
function render(layout, items, context, node) {
    if (!ko.isWritableObservable(layout)) {
        layout = ko.observable(layout);
    }
    ko.applyBindings({ context: context, layout: layout, items: items }, node);
}
exports.render = render;
__exportStar(__webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts"), exports);
__exportStar(__webpack_require__(/*! ./form-element */ "./sources/form-element.ts"), exports);
__exportStar(__webpack_require__(/*! ./layout-item */ "./sources/layout-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./placeholder-item */ "./sources/placeholder-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./item-menu */ "./sources/item-menu.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./sources/utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./default-toolbox */ "./sources/default-toolbox.ts"), exports);
__exportStar(__webpack_require__(/*! ./form */ "./sources/form.ts"), exports);


/***/ }),

/***/ "./sources/form-element.ts":
/*!*********************************!*\
  !*** ./sources/form-element.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FormElement = exports.PlaceHolder = exports.fillDraggedOverInDirection = exports.hasParentEdgeInDirection = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
var uiml_layout_serializer_1 = __webpack_require__(/*! ./uiml-layout-serializer */ "./sources/uiml-layout-serializer.ts");
function hasParentEdgeInDirection(element, direction) {
    var parent = element && element.parent;
    if (!parent || !parent.elements) {
        return false;
    }
    var elements = ko.unwrap(parent.elements) || [];
    var index = elements.indexOf(element);
    if (parent.content["partclass"] === "layoutRow") {
        if (direction === "top" || direction === "bottom") {
            return true;
        }
        return index === 0 && direction === "left" || index === elements.length - 1 && direction === "right";
    }
    else {
        if (direction === "left" || direction === "right") {
            return true;
        }
        return index === 0 && direction === "top" || index === elements.length - 1 && direction === "bottom";
    }
}
exports.hasParentEdgeInDirection = hasParentEdgeInDirection;
function fillDraggedOverInDirection(current, direction, elements) {
    if (elements === void 0) { elements = []; }
    if (current && (!current.content || current.content["partclass"] !== "layout")) {
        elements.push(current);
        if (hasParentEdgeInDirection(current, direction)) {
            fillDraggedOverInDirection(current.parent, direction, elements);
        }
    }
}
exports.fillDraggedOverInDirection = fillDraggedOverInDirection;
var PlaceHolder = (function () {
    function PlaceHolder(parent) {
        this.parent = parent;
        this.isContainer = false;
        this.hasInnerLayout = false;
    }
    Object.defineProperty(PlaceHolder.prototype, "isDesignMode", {
        get: function () {
            return this.parent.isDesignMode;
        },
        enumerable: false,
        configurable: true
    });
    PlaceHolder.prototype.render = function (htmlElement) {
        htmlElement.innerHTML = "<span data-bind='if: formElement.isDesignMode'>Drop items here</span>";
    };
    PlaceHolder.prototype.addElement = function (json, location) {
        if (location === void 0) { location = "bottom"; }
        this.parent.addElement(json, location);
    };
    PlaceHolder.prototype.remove = function () { };
    PlaceHolder.prototype.dispose = function () { };
    return PlaceHolder;
}());
exports.PlaceHolder = PlaceHolder;
var FormElement = (function () {
    function FormElement(content, parent) {
        var _this = this;
        this.content = content;
        this.parent = parent;
        this._context = undefined;
        this._isDesignMode = ko.observable(false);
        this._dragPosition = ko.observable("");
        this.elements = ko.observableArray();
        var part = content;
        this._elementsSubscription = ko.computed(function () {
            var elements = (part.parts || []).map(function (part) { return uiml_layout_serializer_1.UimlLayoutSerializer.createElement(part, _this); });
            var prevElements = _this.elements.peek();
            _this.elements(elements);
            prevElements.forEach(function (element) { return element.dispose(); });
        });
    }
    Object.defineProperty(FormElement.prototype, "isContainer", {
        get: function () { return this.content.isContainer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "hasInnerLayout", {
        get: function () { return this.content.hasInnerLayout; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "dragPosition", {
        get: function () {
            return this._dragPosition();
        },
        set: function (value) {
            this._dragPosition(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "isDesignMode", {
        get: function () {
            if (!!this.parent) {
                return this.parent.isDesignMode;
            }
            return this._isDesignMode();
        },
        set: function (value) {
            this._isDesignMode(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormElement.prototype, "context", {
        get: function () {
            if (!this._context && this.parent) {
                this._context = this.parent.context;
                if (this.isContainer) {
                    var dataPath = this.content["data"];
                    if (!!dataPath) {
                        this._context = this.parent.context[dataPath];
                    }
                }
            }
            return this._context;
        },
        set: function (context) {
            this._context = context;
        },
        enumerable: false,
        configurable: true
    });
    FormElement.prototype.render = function (htmlElement) {
        if (this.content.hasInnerLayout || this.isContainer || this.elements().length === 0) {
            this.content.render(htmlElement);
        }
        else {
            this.elements().forEach(function (element) { return element.content.render(htmlElement); });
        }
    };
    FormElement.prototype.addElement = function (uimlPart, location, hoveredElement) {
        if (location === void 0) { location = "bottom"; }
        if (!this.isContainer || this === hoveredElement) {
            this.parent.addElement(uimlPart, location, this);
        }
        else {
            if (this.content["partclass"] === "layout") {
                var isHorizontalRoot = location === "left" || location === "right";
                var rootWrapper = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON({ partclass: isHorizontalRoot ? "layoutRow" : "layoutColumn", cssClasses: isHorizontalRoot ? "row" : "column" }), this);
                this.elements().forEach(function (element) { return element.parent = rootWrapper; });
                rootWrapper.elements(this.elements());
                this.elements([rootWrapper]);
                rootWrapper.addElement(uimlPart, location);
            }
            else if (this.content["partclass"] === "layoutRow") {
                if (!!hoveredElement && (location === "top" || location === "bottom")) {
                    var newColumn = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON({ partclass: "layoutColumn", cssClasses: "column" }), this);
                    this.elements.splice(this.elements().indexOf(hoveredElement), 1, newColumn);
                    hoveredElement.parent = newColumn;
                    newColumn.elements.push(hoveredElement);
                    newColumn.addElement(uimlPart, location, hoveredElement);
                }
                else {
                    var newElement = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uimlPart, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "right" ? 1 : 0), 0, newElement);
                }
            }
            else {
                if (!!hoveredElement && (location === "left" || location === "right")) {
                    var newRow = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON({ partclass: "layoutRow", cssClasses: "row" }), this);
                    this.elements.splice(this.elements().indexOf(hoveredElement), 1, newRow);
                    hoveredElement.parent = newRow;
                    newRow.elements.push(hoveredElement);
                    newRow.addElement(uimlPart, location, hoveredElement);
                }
                else {
                    var newElement = uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uimlPart, this);
                    this.elements.splice(this.elements().indexOf(hoveredElement) + (location === "bottom" ? 1 : 0), 0, newElement);
                }
            }
        }
    };
    FormElement.prototype.remove = function () {
        if (!!this.parent) {
            this.parent.elements.remove(this);
            if ((this.parent.content["partclass"] === "layoutRow" || this.parent.content["partclass"] === "layoutColumn") && this.parent.elements().length === 0) {
                this.parent.remove();
            }
        }
    };
    FormElement.prototype.dispose = function () {
        this._elementsSubscription.dispose();
    };
    return FormElement;
}());
exports.FormElement = FormElement;


/***/ }),

/***/ "./sources/form.ts":
/*!*************************!*\
  !*** ./sources/form.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./sources/utils.ts");
var form_builder_1 = __webpack_require__(/*! ./form-builder */ "./sources/form-builder.ts");
var default_toolbox_1 = __webpack_require__(/*! ./default-toolbox */ "./sources/default-toolbox.ts");
var Form = (function () {
    function Form(_object, onChange) {
        var _this = this;
        this._object = _object;
        this.onChange = onChange;
        this.model = utils_1.modelFromJSON(_object);
        this._layoutJson = ko.observable(utils_1.createDefaultLayout(this.model));
        this._changeObserver = ko.computed(function () { return _this.onChange && _this.onChange(_this.object, utils_1.modelToJSON(_this.model)); });
    }
    Object.defineProperty(Form.prototype, "layoutJson", {
        get: function () {
            return this._layoutJson();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "object", {
        get: function () {
            return ko.toJS(this.model);
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.dispose = function () {
        this._changeObserver.dispose();
    };
    Form.show = function (object, at, onChange) {
        var form = new Form(object, onChange);
        form_builder_1.render(form.layoutJson, default_toolbox_1.createDefaultToolboxItems(form.model), form.model, typeof at === "string" ? document.getElementById(at) : at);
        return form;
    };
    return Form;
}());
exports.Form = Form;


/***/ }),

/***/ "./sources/item-menu.scss":
/*!********************************!*\
  !*** ./sources/item-menu.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/item-menu.ts":
/*!******************************!*\
  !*** ./sources/item-menu.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemMenu = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
__webpack_require__(/*! ./item-menu.scss */ "./sources/item-menu.scss");
var template = __webpack_require__(/*! text-loader!./item-menu.html */ "./node_modules/text-loader/index.js!./sources/item-menu.html");
var ItemMenu = (function () {
    function ItemMenu(formElement) {
        this.formElement = formElement;
        this.menuItems = ko.observableArray();
        this.menuItems.push({
            title: "- Remove",
            action: function () { return formElement.remove(); },
            visible: ko.computed(function () { return !!formElement.parent; })
        });
    }
    Object.defineProperty(ItemMenu.prototype, "content", {
        get: function () {
            return this.formElement.content;
        },
        enumerable: false,
        configurable: true
    });
    return ItemMenu;
}());
exports.ItemMenu = ItemMenu;
ko.components.register("item-menu", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new ItemMenu(params.element);
        }
    },
    template: template
});


/***/ }),

/***/ "./sources/layout-item.scss":
/*!**********************************!*\
  !*** ./sources/layout-item.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/layout-item.ts":
/*!********************************!*\
  !*** ./sources/layout-item.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutItem = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var form_element_1 = __webpack_require__(/*! ./form-element */ "./sources/form-element.ts");
var uiml_layout_serializer_1 = __webpack_require__(/*! ./uiml-layout-serializer */ "./sources/uiml-layout-serializer.ts");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
__webpack_require__(/*! ./layout-item.scss */ "./sources/layout-item.scss");
var template = __webpack_require__(/*! text-loader!./layout-item.html */ "./node_modules/text-loader/index.js!./sources/layout-item.html");
function getLocation(x, y, width, height) {
    if (y >= height / width * x) {
        if (y >= -height / width * x + height) {
            return 'bottom';
        }
        else {
            return 'left';
        }
    }
    else {
        if (y >= -height / width * x + height) {
            return 'right';
        }
        else {
            return 'top';
        }
    }
}
var LayoutItem = (function () {
    function LayoutItem(formElement) {
        var _this = this;
        this.formElement = formElement;
        this._isSelected = ko.observable(false);
        this._hoverItems = [];
        this._currentHoverIndex = 0;
        this._hoverIndicatorTimer = undefined;
        this.afterPartTemplateRender = function (elements) {
            if (!_this.isContainer) {
                var holderElement = elements[1];
                var dataContext = ko.contextFor(holderElement);
                ko.cleanNode(holderElement);
                _this.formElement.render(holderElement);
                ko.applyBindings(dataContext, holderElement);
            }
        };
        this.isSelected = ko.computed(function () { return _this.formElement.isDesignMode && _this._isSelected(); });
    }
    LayoutItem.prototype.clearHoverIndicator = function () {
        LayoutItem.draggedOverElement = null;
        LayoutItem.draggedOverPosition = null;
        if (this._hoverIndicatorTimer) {
            clearTimeout(this._hoverIndicatorTimer);
            this._hoverIndicatorTimer = undefined;
        }
        if (Array.isArray(this._hoverItems)) {
            this._hoverItems.forEach(function (item) { return item.dragPosition = ""; });
        }
    };
    Object.defineProperty(LayoutItem.prototype, "elements", {
        get: function () { return this.formElement.elements; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LayoutItem.prototype, "isContainer", {
        get: function () { return this.formElement.isContainer; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LayoutItem.prototype, "css", {
        get: function () {
            var result = this.formElement.content instanceof uiml_parts_1.UimlPart ? this.formElement.content["cssClasses"] : "";
            if (this.formElement.isDesignMode) {
                if (this.isSelected()) {
                    result += " " + "bf-item--selected";
                }
                if (this.formElement.dragPosition) {
                    result += " " + "bf-item--drag-over-" + this.formElement.dragPosition;
                }
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    LayoutItem.prototype.dragstart = function (model, ev) {
        if (this.formElement.isDesignMode) {
            var originalEvent = (ev.originalEvent || ev);
            originalEvent.dataTransfer.setData("bf-item-json", JSON.stringify(uiml_layout_serializer_1.UimlLayoutSerializer.serialize(model.formElement)));
            LayoutItem.draggedElement = model.formElement;
            ev.cancelBubble = true;
            return true;
        }
    };
    LayoutItem.prototype.dragenter = function (model, ev) {
        ev.preventDefault();
        ev.cancelBubble = true;
    };
    LayoutItem.prototype.dragover = function (model, ev) {
        if (model.formElement.isDesignMode) {
            var originalEvent = (ev.originalEvent || ev), targetItem = ko.dataFor(originalEvent.target);
            var hoverLocation = getLocation(originalEvent.offsetX, originalEvent.offsetY, ev.target.clientWidth, ev.target.clientHeight);
            if (LayoutItem.draggedOverElement !== model.formElement || LayoutItem.draggedOverPosition !== hoverLocation) {
                model.clearHoverIndicator();
                LayoutItem.draggedOverElement = model.formElement;
                LayoutItem.draggedOverPosition = hoverLocation;
                model._hoverItems = [];
                form_element_1.fillDraggedOverInDirection(model.formElement, hoverLocation, model._hoverItems);
                model._currentHoverIndex = model._hoverItems.length - 1;
                var hoverIndicatorUpdater_1 = function () {
                    model._hoverItems[model._currentHoverIndex].dragPosition = "";
                    model._currentHoverIndex = (model._currentHoverIndex + 1) % model._hoverItems.length;
                    model._hoverItems[model._currentHoverIndex].dragPosition = hoverLocation;
                    model._hoverIndicatorTimer = setTimeout(hoverIndicatorUpdater_1, 1000);
                };
                hoverIndicatorUpdater_1();
            }
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    };
    LayoutItem.prototype.dragleave = function (model, ev) {
        if (model.formElement.isDesignMode) {
            model.clearHoverIndicator();
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    };
    LayoutItem.prototype.drop = function (model, ev) {
        if (model.formElement.isDesignMode) {
            var originalEvent = (ev.originalEvent || ev);
            var data = originalEvent.dataTransfer.getData("bf-item-json");
            if (!!data) {
                if (!!LayoutItem.draggedElement) {
                    LayoutItem.draggedElement.parent.elements.remove(LayoutItem.draggedElement);
                    LayoutItem.draggedElement = null;
                }
                var dropTargetElement = model._hoverItems[model._currentHoverIndex];
                dropTargetElement.addElement(uiml_parts_1.UimlPart.fromJSON(JSON.parse(data)), dropTargetElement.dragPosition, dropTargetElement);
            }
            model.clearHoverIndicator();
            ev.preventDefault();
            ev.cancelBubble = true;
        }
    };
    LayoutItem.prototype.select = function (model, ev) {
        if (this.formElement.isDesignMode) {
            if (!!LayoutItem.selectedElement()) {
                LayoutItem.selectedElement()._isSelected(false);
            }
            model._isSelected(true);
            LayoutItem.selectedElement(model);
            var originalEvent = (ev.originalEvent || ev);
            originalEvent.preventDefault();
            originalEvent.cancelBubble = true;
            return true;
        }
    };
    Object.defineProperty(LayoutItem.prototype, "isDesignMode", {
        get: function () {
            return this.formElement.isDesignMode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LayoutItem.prototype, "part", {
        get: function () {
            return this.formElement.content["part"];
        },
        enumerable: false,
        configurable: true
    });
    LayoutItem.draggedElement = null;
    LayoutItem.draggedOverElement = null;
    LayoutItem.draggedOverPosition = null;
    LayoutItem.selectedElement = ko.observable();
    return LayoutItem;
}());
exports.LayoutItem = LayoutItem;
ko.components.register("layout-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var formElement = params.element || uiml_layout_serializer_1.UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON(params.uiml), null);
            if (!!params.context) {
                formElement.context = params.context;
            }
            if (!formElement.isContainer) {
                var itemElelemtContainer = componentInfo.element.getElementsByClassName("bf-item-content-holder")[0];
                formElement.render(itemElelemtContainer);
            }
            return new LayoutItem(formElement);
        }
    },
    template: template
});


/***/ }),

/***/ "./sources/placeholder-item.scss":
/*!***************************************!*\
  !*** ./sources/placeholder-item.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/placeholder-item.ts":
/*!*************************************!*\
  !*** ./sources/placeholder-item.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderComponent = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var form_element_1 = __webpack_require__(/*! ./form-element */ "./sources/form-element.ts");
var layout_item_1 = __webpack_require__(/*! ./layout-item */ "./sources/layout-item.ts");
__webpack_require__(/*! ./placeholder-item.scss */ "./sources/placeholder-item.scss");
var template = __webpack_require__(/*! text-loader!./placeholder-item.html */ "./node_modules/text-loader/index.js!./sources/placeholder-item.html");
ko.components.register("placeholder-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var itemElelemt = componentInfo.element.getElementsByClassName("bf-item-placeholder")[0];
            var formElement = new form_element_1.PlaceHolder(params.element);
            formElement.render(itemElelemt);
            return new layout_item_1.LayoutItem(formElement);
        }
    },
    template: template
});
exports.PlaceholderComponent = null;


/***/ }),

/***/ "./sources/uiml-layout-serializer.ts":
/*!*******************************************!*\
  !*** ./sources/uiml-layout-serializer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UimlLayoutSerializer = void 0;
var form_element_1 = __webpack_require__(/*! ./form-element */ "./sources/form-element.ts");
var uiml_parts_1 = __webpack_require__(/*! ./uiml-parts */ "./sources/uiml-parts.ts");
var UimlLayoutSerializer = (function () {
    function UimlLayoutSerializer() {
    }
    UimlLayoutSerializer.createRoot = function () {
        var rootPart = uiml_parts_1.UimlPartsRepository.create(UimlLayoutSerializer.layoutPartClass, { cssClasses: "root" });
        return new form_element_1.FormElement(rootPart, null);
    };
    UimlLayoutSerializer.createElement = function (uimlPart, parent) {
        if (uimlPart.hasInnerLayout) {
            var groupElementJson = { partclass: UimlLayoutSerializer.layoutPartClass, cssClasses: "group", parts: [] };
            var groupElement = uiml_parts_1.UimlPart.fromJSON(groupElementJson);
            groupElement.parts = uimlPart.part.parts || [];
            uimlPart.parts = [groupElement];
        }
        return new form_element_1.FormElement(uimlPart, parent);
    };
    UimlLayoutSerializer.createElements = function (collection, parts, parent) {
        if (parts === void 0) { parts = []; }
        parts.forEach(function (elementJson) {
            collection.push(UimlLayoutSerializer.createElement(uiml_parts_1.UimlPart.fromJSON(elementJson), parent));
        });
    };
    UimlLayoutSerializer.serialize = function (formElement) {
        var uimlPart = formElement.content;
        var element = {
            partclass: uimlPart.partclass,
        };
        Object.keys(uimlPart.part).forEach(function (key) { return element[key] = uimlPart.part[key]; });
        if (formElement.elements().length) {
            element.parts = formElement.elements().map(function (fe) { return UimlLayoutSerializer.serialize(fe); });
        }
        if (Array.isArray(element.parts) && element.parts.length === 1 && element.parts[0].partclass === UimlLayoutSerializer.layoutPartClass) {
            element.parts = element.parts[0].parts;
        }
        return element;
    };
    UimlLayoutSerializer.layoutPartClass = "layout";
    return UimlLayoutSerializer;
}());
exports.UimlLayoutSerializer = UimlLayoutSerializer;


/***/ }),

/***/ "./sources/uiml-parts.scss":
/*!*********************************!*\
  !*** ./sources/uiml-parts.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sources/uiml-parts.ts":
/*!*******************************!*\
  !*** ./sources/uiml-parts.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UimlPartsRepository = exports.UimlPart = exports.createProperty = void 0;
var ko = __webpack_require__(/*! knockout */ "knockout");
var model_1 = __webpack_require__(/*! ../metadata/model */ "./metadata/model.ts");
__webpack_require__(/*! ./uiml-parts.scss */ "./sources/uiml-parts.scss");
function createProperty(target, propertyDescription, value) {
    var observableValue = ko.observable(value);
    Object.defineProperty(target, propertyDescription.name, {
        get: function () { return observableValue(); },
        set: function (val) { return observableValue(val); }
    });
}
exports.createProperty = createProperty;
var UimlPart = (function () {
    function UimlPart(_partclass) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this._partclass = _partclass;
        this.id = UimlPart.counter++;
        this._part = Object.assign({}, params[0]);
        this._objectDescription = model_1.getObjectDescription(_partclass);
        if (this._objectDescription) {
            this._objectDescription.properties.forEach(function (pd) {
                var propertyType = pd.type || "string";
                if (!model_1.isArrayType(propertyType)) {
                    createProperty(_this, pd, _this._part[pd.name]);
                }
            });
        }
        createProperty(this, { name: "data" }, this._part.data);
        createProperty(this, { name: "parts", type: "part[]" }, (this._part.parts || []).map(function (json) { return UimlPartsRepository.create(json.partclass, json); }));
    }
    UimlPart.prototype.render = function (htmlElement) {
        if (UimlPart.render) {
            UimlPart.render(this, htmlElement);
        }
        else {
            htmlElement.className += (" " + this["cssClasses"]);
            if (!this.isContainer) {
                htmlElement.innerHTML = this.partclass + this.id;
            }
        }
    };
    Object.defineProperty(UimlPart.prototype, "hasInnerLayout", {
        get: function () {
            return UimlPart.layoutHolderParts.indexOf(this.partclass) !== -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UimlPart.prototype, "isContainer", {
        get: function () {
            return UimlPart.containerParts.indexOf(this.partclass) !== -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UimlPart.prototype, "partclass", {
        get: function () {
            return UimlPart.layoutConvertableParts[this._partclass] || this._partclass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UimlPart.prototype, "part", {
        get: function () {
            var _this = this;
            var part = Object.assign({}, this._part);
            part.data = this.data;
            if (this._objectDescription) {
                this._objectDescription.properties.forEach(function (pd) {
                    part[pd.name] = _this[pd.name];
                });
            }
            return part;
        },
        enumerable: false,
        configurable: true
    });
    UimlPart.fromJSON = function (json) {
        return UimlPartsRepository.create(json.partclass, json);
    };
    UimlPart.prototype.toJSON = function () {
        return this.part;
    };
    UimlPart.prototype.create = function (partclass) {
        return UimlPartsRepository.create(partclass, {});
    };
    UimlPart.containerParts = ["layout", "layoutRow", "layoutColumn"];
    UimlPart.layoutHolderParts = ["panel"];
    UimlPart.layoutConvertableParts = {
        "view": "layout",
        "form": "layout",
        "koWith": "layoutColumn",
        "container": "layoutColumn",
        "accordion": "layoutColumn",
        "div": "container",
        "formGroup": "layoutItem"
    };
    UimlPart.render = undefined;
    UimlPart.counter = 1;
    return UimlPart;
}());
exports.UimlPart = UimlPart;
var UimlPartsRepository = (function () {
    function UimlPartsRepository() {
    }
    Object.defineProperty(UimlPartsRepository, "instance", {
        get: function () { return UimlPartsRepository._instance; },
        enumerable: false,
        configurable: true
    });
    UimlPartsRepository.register = function (partclass, partConstructor) {
        UimlPartsRepository.parts[partclass] = partConstructor;
    };
    UimlPartsRepository.create = function (partclass) {
        var _a;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        if (!!UimlPartsRepository.parts[partclass]) {
            return new ((_a = UimlPartsRepository.parts[partclass]).bind.apply(_a, __spreadArrays([void 0], params)))();
        }
        return new (UimlPart.bind.apply(UimlPart, __spreadArrays([void 0, partclass], params)))();
    };
    UimlPartsRepository.parts = {};
    UimlPartsRepository._instance = new UimlPartsRepository();
    return UimlPartsRepository;
}());
exports.UimlPartsRepository = UimlPartsRepository;


/***/ }),

/***/ "./sources/utils.ts":
/*!**************************!*\
  !*** ./sources/utils.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.modelToJSON = exports.modelFromJSON = exports.createDefaultLayout = exports.createColumnLayout = exports.createPropertyEditor = exports.makeTitle = exports.capitalize = void 0;
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
function makeTitle(propertyName) {
    return propertyName.split("_").map(function (part) { return capitalize(part); }).join(" ");
}
exports.makeTitle = makeTitle;
function createPropertyEditor(propertyName) {
    return {
        partclass: "layoutItem",
        cssClasses: "item test-item test-group",
        parts: [
            {
                partclass: "label",
                cssClasses: "test-label",
                data: makeTitle(propertyName)
            },
            {
                partclass: "input",
                cssClasses: "test-input",
                data: propertyName
            }
        ]
    };
}
exports.createPropertyEditor = createPropertyEditor;
function createColumnLayout(model, includeNestedObjects) {
    if (includeNestedObjects === void 0) { includeNestedObjects = false; }
    return {
        "partclass": "layoutColumn",
        "data": undefined,
        "cssClasses": "column",
        "parts": (Object.keys(model) || [])
            .filter(function (propertyName) { return includeNestedObjects || typeof model[propertyName] !== "object"; })
            .map(function (propertyName) { return createPropertyEditor(propertyName); })
    };
}
exports.createColumnLayout = createColumnLayout;
function createDefaultLayout(model) {
    var layout = {
        "partclass": "layoutRow",
        "data": undefined,
        "cssClasses": "row test-form",
        "parts": [createColumnLayout(model)]
    };
    (Object.keys(model) || [])
        .filter(function (propertyName) { return typeof model[propertyName] === "object"; })
        .forEach(function (propertyName) {
        var column = createColumnLayout(model[propertyName]);
        column.data = propertyName;
        layout.parts.push(column);
    });
    return layout;
}
exports.createDefaultLayout = createDefaultLayout;
function modelFromJSON(json) {
    return JSON.parse(JSON.stringify(json), function (key, value) {
        if (typeof value !== "object") {
            return ko.observable(value);
        }
        return value;
    });
}
exports.modelFromJSON = modelFromJSON;
function modelToJSON(model) {
    return ko.toJSON(model, null, 2);
}
exports.modelToJSON = modelToJSON;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bcGMtbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1twYy1uYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9tZXRhZGF0YS9tb2RlbC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0tYnVpbGRlci5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvaXRlbS1tZW51Lmh0bWwiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9sYXlvdXQtaXRlbS5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvcGxhY2Vob2xkZXItaXRlbS5odG1sIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvZGVmYXVsdC10b29sYm94LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvZm9ybS1idWlsZGVyLnNjc3M/NDlmNiIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0tYnVpbGRlci50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0tZWxlbWVudC50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9pdGVtLW1lbnUuc2Nzcz8wMDQ0Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvaXRlbS1tZW51LnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvbGF5b3V0LWl0ZW0uc2Nzcz8wODU1Iiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvbGF5b3V0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy9wbGFjZWhvbGRlci1pdGVtLnNjc3M/MjU4YSIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL3BsYWNlaG9sZGVyLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vW3BjLW5hbWVdLy4vc291cmNlcy91aW1sLWxheW91dC1zZXJpYWxpemVyLnRzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvdWltbC1wYXJ0cy5zY3NzIiwid2VicGFjazovL1twYy1uYW1lXS8uL3NvdXJjZXMvdWltbC1wYXJ0cy50cyIsIndlYnBhY2s6Ly9bcGMtbmFtZV0vLi9zb3VyY2VzL3V0aWxzLnRzIiwid2VicGFjazovL1twYy1uYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJrb1wiLFwiY29tbW9uanMyXCI6XCJrbm9ja291dFwiLFwiY29tbW9uanNcIjpcImtub2Nrb3V0XCIsXCJhbWRcIjpcImtub2Nrb3V0XCJ9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7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Qy9ELE9BQU8sQ0FBQyxzQkFBWTtRQUNqQixJQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBZkQsa0RBZUM7QUFFRCxTQUFnQixhQUFhLENBQUMsSUFBUztJQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzVELElBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELHNDQU9DO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLEtBQVU7SUFDbEMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFGRCxrQ0FFQzs7Ozs7Ozs7Ozs7O0FDbEVELHNEIiwiZmlsZSI6ImZvcm0tYnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiRm9ybUJ1aWxkZXJcIiwgW1wia25vY2tvdXRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRm9ybUJ1aWxkZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJrbm9ja291dFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRm9ybUJ1aWxkZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJrb1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9mb3JtLWJ1aWxkZXIudHNcIik7XG4iLCJpbXBvcnQgeyBJT2JqZWN0RGVzY3JpcHRpb24gfSBmcm9tIFwiLi9vYmplY3RcIjtcclxuXHJcbmV4cG9ydCB2YXIgZG9tYWluOiB7W2luZGV4OiBzdHJpbmddOiBJT2JqZWN0RGVzY3JpcHRpb259ID0ge307XHJcblxyXG5kb21haW5bXCJwYXJ0XCJdID0ge1xyXG4gICAgbmFtZTogXCJwYXJ0XCIsXHJcbiAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRjbGFzc1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInBhcnRzXCIsIHR5cGU6IFwicGFydFtdXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcInBhbmVsXCJdID0ge1xyXG4gICAgbmFtZTogXCJwYW5lbFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJ0ZXh0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0SXRlbVwiXSA9IHtcclxuICAgIG5hbWU6IFwibGF5b3V0SXRlbVwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5kb21haW5bXCJjb250YWluZXJcIl0gPSB7XHJcbiAgICBuYW1lOiBcImNvbnRhaW5lclwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5kb21haW5bXCJsYWJlbFwiXSA9IHtcclxuICAgIG5hbWU6IFwibGFiZWxcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwiY3NzQ2xhc3Nlc1wiIH1cclxuICAgIF1cclxufTtcclxuXHJcbmRvbWFpbltcImlucHV0XCJdID0ge1xyXG4gICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0XCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0Um93XCJdID0ge1xyXG4gICAgbmFtZTogXCJsYXlvdXRSb3dcIixcclxuICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjc3NDbGFzc2VzXCIgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuZG9tYWluW1wibGF5b3V0Q29sdW1uXCJdID0ge1xyXG4gICAgbmFtZTogXCJpbnB1dFwiLFxyXG4gICAgcHJvcGVydGllczogW1xyXG4gICAgICAgIHsgbmFtZTogXCJwYXJ0c1wiLCB0eXBlOiBcInBhcnRbXVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNzc0NsYXNzZXNcIiB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0RGVzY3JpcHRpb24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZG9tYWluW25hbWVdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTaW1wbGVUeXBlKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICEhbmFtZSAmJiAoIWRvbWFpbltuYW1lXSAmJiBuYW1lLmluZGV4T2YoXCJbXVwiKSA9PSAtMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5VHlwZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAhIW5hbWUgJiYgbmFtZS5sZW5ndGggPiAyICYmIG5hbWVbbmFtZS5sZW5ndGgtMl0gPT09IFwiW1wiICYmIG5hbWVbbmFtZS5sZW5ndGgtMV0gPT09IFwiXVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlFbGVtZW50VHlwZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIGlmKGlzQXJyYXlUeXBlKG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoLTIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYmYtbGF5b3V0XFxcIj5cXHJcXG4gICAgPGxheW91dC1pdGVtIHBhcmFtcz1cXFwiZWxlbWVudDogcm9vdFxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsgJ2JmLWxheW91dC0tZGVzaWduLW1vZGUnOiBpc0Rlc2lnbk1vZGUgfVxcXCI+PC9sYXlvdXQtaXRlbT5cXHJcXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJiZi1tb2RlLWJ1dHRvbiBmYVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogdG9nZ2xlRGVzaWduTW9kZSwgdGV4dDogaXNEZXNpZ25Nb2RlID8gJ1ZpZXcnOicnLCBjc3M6IHsgJ2ZhLWNvZyc6ICFpc0Rlc2lnbk1vZGUgfSBcXFwiPiAtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYmYtbW9kZS1idXR0b25cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHRvZ2dsZURlc2lnbk1vZGUsIHRleHQ6IGlzRGVzaWduTW9kZSA/ICdWaWV3JzonRGVzaWduJyBcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJiZi10b29sYm94XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGlzRGVzaWduTW9kZSwgZm9yZWFjaDogdG9vbGJveFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJmLXRvb2xib3hfX2l0ZW1cXFwiIGRyYWdnYWJsZT1cXFwidHJ1ZVxcXCJcXHJcXG4gICAgICAgIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGUsIGV2ZW50OiB7IGRyYWdzdGFydDogJHBhcmVudC5kcmFnc3RhcnQgfSwgYXR0cjogeyB0aXRsZTogaGludCB9XFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiYmYtbGF5b3V0LWpzb25cXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogaXNEZXNpZ25Nb2RlXFxcIj5cXHJcXG4gICAgPHRleHRhcmVhIGRhdGEtYmluZD1cXFwidmFsdWU6IGpzb25UZXh0XFxcIj48L3RleHRhcmVhPlxcclxcbjwvZGl2PlxcclxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwiYmYtaXRlbS1wYXJ0XFxcIj5cXHJcXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcIndpdGg6IGZvcm1FbGVtZW50LmNvbnRleHQgfHwgJGRhdGFcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L3NjcmlwdD5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLW1lbnVcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSwgY2xpY2tCdWJibGU6IGZhbHNlXFxcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogbWVudUl0ZW1zIC0tPlxcclxcbiAgICAgICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJGRhdGEuY29tcG9uZW50IHx8ICd1aS1idXR0b24nLCBwYXJhbXM6IHsgaXRlbTogJGRhdGEgfSB9IC0tPlxcclxcbiAgICAgICAgPCEtLSAva28gLS0+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgICAgIDxvYmplY3QtZWRpdG9yIHBhcmFtcz1cXFwiY29udGV4dDogY29udGVudFxcXCI+PC9vYmplY3QtZWRpdG9yPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGtvIGlmOiBpc0NvbnRhaW5lciAtLT5cXHJcXG48ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLWNvbnRlbnRcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHNlbGVjdCwgY3NzOiBjc3NcXFwiPlxcclxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGVsZW1lbnRzIC0tPlxcclxcbiAgICA8bGF5b3V0LWl0ZW0gcGFyYW1zPVxcXCJlbGVtZW50OiAkZGF0YVxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZTogeyAgfVxcXCI+PC9sYXlvdXQtaXRlbT5cXHJcXG4gICAgPCEtLSAva28gLS0+XFxyXFxuICAgIDwhLS0ga28gaWY6IGVsZW1lbnRzKCkubGVuZ3RoID09PSAwIC0tPlxcclxcbiAgICA8cGxhY2Vob2xkZXItaXRlbSBwYXJhbXM9XFxcImVsZW1lbnQ6IGZvcm1FbGVtZW50XFxcIj48L3BsYWNlaG9sZGVyLWl0ZW0+XFxyXFxuICAgIDwhLS0gL2tvIC0tPlxcclxcbjwvZGl2PlxcclxcbjwhLS0gL2tvIC0tPlxcclxcbjwhLS0ga28gaWZub3Q6IGlzQ29udGFpbmVyIC0tPlxcclxcbjxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tY29udGVudFxcXCIgZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIlxcclxcbiAgICBkYXRhLWJpbmQ9XFxcImV2ZW50OiB7IGRyYWdlbnRlcjogZHJhZ2VudGVyLCBkcmFnb3ZlcjogZHJhZ292ZXIsIGRyYWdsZWF2ZTogZHJhZ2xlYXZlLCBkcm9wOiBkcm9wLCBkcmFnc3RhcnQ6IGRyYWdzdGFydCB9LCBjbGljazogc2VsZWN0LCBjc3M6IGNzc1xcXCI+XFxyXFxuICAgIDwhLS0ga28gaWZub3Q6IGlzRGVzaWduTW9kZSAtLT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYmYtaXRlbS1jb250ZW50LWhvbGRlclxcXCIgZGF0YS1iaW5kPVxcXCJ3aXRoOiBmb3JtRWxlbWVudC5jb250ZXh0IHx8ICRkYXRhXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwhLS0gL2tvIC0tPlxcclxcbiAgICA8IS0tIGtvIGlmOiBpc0Rlc2lnbk1vZGUgLS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJmLWl0ZW0tY29udGVudC1ob2xkZXJcXFwiIGRhdGEtYmluZD1cXFwibGV0OiB7ICRwYXJ0OiBwYXJ0IH1cXFwiPlxcclxcbiAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiBcXFwiYmYtaXRlbS1wYXJ0XFxcIiwgYWZ0ZXJSZW5kZXI6IGFmdGVyUGFydFRlbXBsYXRlUmVuZGVyIH0gLS0+XFxyXFxuICAgICAgICA8IS0tIC9rbyAtLT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDwhLS0gL2tvIC0tPlxcclxcbjwvZGl2PlxcclxcbjwhLS0gL2tvIC0tPlxcclxcbjwhLS0ga28gaWY6IGlzU2VsZWN0ZWQgLS0+XFxyXFxuPGl0ZW0tbWVudSBwYXJhbXM9XFxcImVsZW1lbnQ6IGZvcm1FbGVtZW50XFxcIj48L2l0ZW0tbWVudT5cXHJcXG48IS0tIC9rbyAtLT5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJiZi1pdGVtLXBsYWNlaG9sZGVyXFxcIiBkYXRhLWJpbmQ9XFxcImV2ZW50OiB7IGRyYWdvdmVyOiBkcmFnb3ZlciwgZHJvcDogZHJvcCB9XFxcIj5cXHJcXG48L2Rpdj5cIiIsImltcG9ydCB7IGNyZWF0ZVByb3BlcnR5RWRpdG9yLCBtYWtlVGl0bGUgfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUb29sYm94SXRlbXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwicm93XCIsXHJcbiAgICAgICAgaGludDogXCJEcmFnIHRvIGFkZCByb3dcIixcclxuICAgICAgICBqc29uOiB7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJsYXlvdXRSb3dcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3NlczogXCJyb3dcIixcclxuICAgICAgICAgICAgcGFydHM6IFtcclxuXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGhpbnQ6IFwiRHJhZyB0byBhZGQgY29sdW1uXCIsXHJcbiAgICAgICAganNvbjoge1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGF5b3V0Q29sdW1uXCIsXHJcbiAgICAgICAgICAgIGNzc0NsYXNzZXM6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIHBhcnRzOiBbXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJwYW5lbFwiLFxyXG4gICAgICAgIGhpbnQ6IFwiRHJhZyB0byBhZGQgcGFuZWxcIixcclxuICAgICAgICBqc29uOiB7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJwYW5lbFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcInBhbmVsXCIsXHJcbiAgICAgICAgICAgIHBhcnRzOiBbXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJsYWJlbFwiLFxyXG4gICAgICAgIGhpbnQ6IFwiRHJhZyB0byBhZGQgbGFiZWxcIixcclxuICAgICAgICBqc29uOiB7XHJcbiAgICAgICAgICAgIHBhcnRjbGFzczogXCJsYWJlbFwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtbGFiZWxcIixcclxuICAgICAgICAgICAgZGF0YTogXCJMYWJlbCB0ZXh0XCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcImlucHV0XCIsXHJcbiAgICAgICAgaGludDogXCJEcmFnIHRvIGFkZCBpbnB1dCBlbGVtZW50XCIsXHJcbiAgICAgICAganNvbjoge1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgY3NzQ2xhc3NlczogXCJ0ZXN0LWlucHV0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFwidmFsTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJjb21wb3NpdGVcIixcclxuICAgICAgICBoaW50OiBcIkRyYWcgdG8gYWRkIGNvbXBvc2l0ZSBlbGVtZW50XCIsXHJcbiAgICAgICAganNvbjoge1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGF5b3V0SXRlbVwiLFxyXG4gICAgICAgICAgICBjc3NDbGFzc2VzOiBcIml0ZW0gdGVzdC1pdGVtIHRlc3QtZ3JvdXBcIixcclxuICAgICAgICAgICAgcGFydHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtbGFiZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0Y2xhc3M6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xib3hJdGVtc0Zvcihtb2RlbDogYW55KSB7XHJcbiAgICByZXR1cm4gKE9iamVjdC5rZXlzKG1vZGVsKSB8fCBbXSlcclxuICAgICAgICAuZmlsdGVyKHByb3BlcnR5TmFtZSA9PiB0eXBlb2YgbW9kZWxbcHJvcGVydHlOYW1lXSAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICAubWFwKHByb3BlcnR5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWFrZVRpdGxlKHByb3BlcnR5TmFtZSksXHJcbiAgICAgICAgICAgICAgICBoaW50OiBcIkRyYWcgdG8gYWRkIFwiICsgbWFrZVRpdGxlKHByb3BlcnR5TmFtZSksXHJcbiAgICAgICAgICAgICAgICBqc29uOiBjcmVhdGVQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0VG9vbGJveEl0ZW1zKG1vZGVsOiBhbnkpIHtcclxuICAgIHJldHVybiBbXS5jb25jYXQoZGVmYXVsdFRvb2xib3hJdGVtcykuY29uY2F0KGNyZWF0ZVRvb2xib3hJdGVtc0Zvcihtb2RlbCkpO1xyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCB7IEZvcm1FbGVtZW50IH0gZnJvbSBcIi4vZm9ybS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IFVpbWxMYXlvdXRTZXJpYWxpemVyIH0gZnJvbSBcIi4vdWltbC1sYXlvdXQtc2VyaWFsaXplclwiO1xyXG5cclxuaW1wb3J0IFwiLi9mb3JtLWJ1aWxkZXIuc2Nzc1wiO1xyXG5pbXBvcnQgeyBVaW1sUGFydCwgVWltbFBhcnRzUmVwb3NpdG9yeSB9IGZyb20gXCIuL3VpbWwtcGFydHNcIjtcclxudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vZm9ybS1idWlsZGVyLmh0bWxcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUJ1aWxkZXIge1xyXG4gICAgcHJpdmF0ZSBfbGF5b3V0U3Vic2NyaXB0aW9uOiBrby5Db21wdXRlZDtcclxuICAgIHByaXZhdGUgc3RhdGljIGRlZmF1bHRUZXh0ID0gJ3tcInBhcnRjbGFzc1wiOiBcImxheW91dFJvd1wiLFwiY3NzQ2xhc3Nlc1wiOiBcInJvd1wiLFwicGFydHNcIjogW119JztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xheW91dDogS25vY2tvdXRPYnNlcnZhYmxlPGFueT4sIF9jb250ZXh0PzogYW55LCB0b29sYm94SXRlbXM6IEFycmF5PGFueT4gPSBbXSkge1xyXG4gICAgICAgIHRoaXMucm9vdC5jb250ZXh0ID0gX2NvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5fbGF5b3V0U3Vic2NyaXB0aW9uID0ga28uY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgbGF5b3V0VmFsdWU6IGFueSA9IGtvLnVud3JhcChfbGF5b3V0KTtcclxuICAgICAgICAgICAgaWYoIUFycmF5LmlzQXJyYXkobGF5b3V0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXRWYWx1ZSA9IFtsYXlvdXRWYWx1ZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKDxVaW1sUGFydD50aGlzLnJvb3QuY29udGVudCkucGFydHMgPSBsYXlvdXRWYWx1ZS5tYXAocGFydCA9PiBVaW1sUGFydC5mcm9tSlNPTihwYXJ0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdG9vbGJveEl0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGlzLnRvb2xib3gucHVzaChpdGVtKSk7XHJcbiAgICB9XHJcbiAgICB0b29sYm94ID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XHJcbiAgICByb290OiBGb3JtRWxlbWVudCA9IFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZVJvb3QoKTtcclxuICAgIGRyYWdzdGFydChtb2RlbCwgZXZlbnQpIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IDxEcmFnRXZlbnQ+KCg8YW55PmV2ZW50KS5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50KTtcclxuICAgICAgICBvcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYmYtaXRlbS1qc29uXCIsIEpTT04uc3RyaW5naWZ5KG1vZGVsLmpzb24pKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGdldCBqc29uVGV4dCgpIHtcclxuICAgICAgICBpZih0aGlzLnJvb3QuZWxlbWVudHMoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShVaW1sTGF5b3V0U2VyaWFsaXplci5zZXJpYWxpemUodGhpcy5yb290LmVsZW1lbnRzKClbMF0pLCBudWxsLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEZvcm1CdWlsZGVyLmRlZmF1bHRUZXh0O1xyXG4gICAgfVxyXG4gICAgc2V0IGpzb25UZXh0KGpzb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2xheW91dChKU09OLnBhcnNlKGpzb24gfHwgRm9ybUJ1aWxkZXIuZGVmYXVsdFRleHQpKTtcclxuICAgIH1cclxuICAgIHNldCBpc0Rlc2lnbk1vZGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnJvb3QuaXNEZXNpZ25Nb2RlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEZXNpZ25Nb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb3QuaXNEZXNpZ25Nb2RlO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlRGVzaWduTW9kZShidWlsZGVyOiBGb3JtQnVpbGRlcikge1xyXG4gICAgICAgIGJ1aWxkZXIuaXNEZXNpZ25Nb2RlID0gIWJ1aWxkZXIuaXNEZXNpZ25Nb2RlO1xyXG4gICAgICAgIC8vIFRPRE86IHJlLXRoaW5rIC0gaG93IHRoZSB3aG9sZSBsYXlvdXQgd2lsbCBiZSB1cGRhdGVkLCByZW1vdmUgdGhpcyBjcnV0Y2hcclxuICAgICAgICB0aGlzLmpzb25UZXh0ID0gdGhpcy5qc29uVGV4dDtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fbGF5b3V0U3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImZvcm0tYnVpbGRlclwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvcm1CdWlsZGVyKHBhcmFtcy5sYXlvdXQsIHBhcmFtcy5jb250ZXh0LCBwYXJhbXMuaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIobGF5b3V0OiBLbm9ja291dE9ic2VydmFibGU8YW55PiB8IGFueSwgaXRlbXM6IEFycmF5PGFueT4sIGNvbnRleHQ/OiBhbnksIG5vZGU/OiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYoIWtvLmlzV3JpdGFibGVPYnNlcnZhYmxlKGxheW91dCkpIHtcclxuICAgICAgICBsYXlvdXQgPSBrby5vYnNlcnZhYmxlKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBrby5hcHBseUJpbmRpbmdzKHsgY29udGV4dDogY29udGV4dCwgbGF5b3V0OiBsYXlvdXQsIGl0ZW1zOiBpdGVtcyB9LCBub2RlKTtcclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vdWltbC1wYXJ0c1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9mb3JtLWVsZW1lbnRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGF5b3V0LWl0ZW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcGxhY2Vob2xkZXItaXRlbVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9pdGVtLW1lbnVcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZGVmYXVsdC10b29sYm94XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvcm1cIjsiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgSVJlbmRlcmFibGUsIFVpbWxQYXJ0IH0gZnJvbSBcIi4vdWltbC1wYXJ0c1wiO1xyXG5pbXBvcnQgeyBVaW1sTGF5b3V0U2VyaWFsaXplciB9IGZyb20gXCIuL3VpbWwtbGF5b3V0LXNlcmlhbGl6ZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1FbGVtZW50IGV4dGVuZHMgSVJlbmRlcmFibGUge1xyXG4gICAgcGFyZW50OiBJRm9ybUVsZW1lbnQ7XHJcbiAgICBhZGRFbGVtZW50KHVpbWxQYXJ0OiBVaW1sUGFydCwgbG9jYXRpb246IHN0cmluZywgaG92ZXJlZEVsZW1lbnQ/OiBJRm9ybUVsZW1lbnQpOiB2b2lkO1xyXG4gICAgcmVtb3ZlKCk6IHZvaWQ7XHJcbiAgICBkaXNwb3NlKCk6IHZvaWQ7XHJcbiAgICBlbGVtZW50cz86IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PElGb3JtRWxlbWVudD47XHJcbiAgICBjb250ZW50PzogSVJlbmRlcmFibGU7XHJcbiAgICBjb250ZXh0PzogYW55O1xyXG4gICAgaXNEZXNpZ25Nb2RlOiBib29sZWFuO1xyXG4gICAgZHJhZ1Bvc2l0aW9uPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzUGFyZW50RWRnZUluRGlyZWN0aW9uKGVsZW1lbnQ6IElGb3JtRWxlbWVudCwgZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnQ7XHJcbiAgICBpZighcGFyZW50IHx8ICFwYXJlbnQuZWxlbWVudHMpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGtvLnVud3JhcChwYXJlbnQuZWxlbWVudHMpIHx8IFtdO1xyXG4gICAgY29uc3QgaW5kZXggPSBlbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xyXG4gICAgaWYocGFyZW50LmNvbnRlbnRbXCJwYXJ0Y2xhc3NcIl0gPT09IFwibGF5b3V0Um93XCIpIHtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT09IFwidG9wXCIgfHwgZGlyZWN0aW9uID09PSBcImJvdHRvbVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5kZXggPT09IDAgJiYgZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBpbmRleCA9PT0gZWxlbWVudHMubGVuZ3RoIC0gMSAmJiBkaXJlY3Rpb24gPT09IFwicmlnaHRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYoZGlyZWN0aW9uID09PSBcImxlZnRcIiB8fCBkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSAwICYmIGRpcmVjdGlvbiA9PT0gXCJ0b3BcIiB8fCBpbmRleCA9PT0gZWxlbWVudHMubGVuZ3RoIC0gMSAmJiBkaXJlY3Rpb24gPT09IFwiYm90dG9tXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsRHJhZ2dlZE92ZXJJbkRpcmVjdGlvbihjdXJyZW50OiBJRm9ybUVsZW1lbnQsIGRpcmVjdGlvbjogc3RyaW5nLCBlbGVtZW50czogSUZvcm1FbGVtZW50W10gPSBbXSkge1xyXG4gICAgaWYoY3VycmVudCAmJiAoIWN1cnJlbnQuY29udGVudCB8fCBjdXJyZW50LmNvbnRlbnRbXCJwYXJ0Y2xhc3NcIl0gIT09IFwibGF5b3V0XCIpKSB7XHJcbiAgICAgICAgZWxlbWVudHMucHVzaChjdXJyZW50KTtcclxuICAgICAgICBpZihoYXNQYXJlbnRFZGdlSW5EaXJlY3Rpb24oY3VycmVudCwgZGlyZWN0aW9uKSkge1xyXG4gICAgICAgICAgICBmaWxsRHJhZ2dlZE92ZXJJbkRpcmVjdGlvbihjdXJyZW50LnBhcmVudCwgZGlyZWN0aW9uLCBlbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhY2VIb2xkZXIgaW1wbGVtZW50cyBJRm9ybUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhcmVudDogSUZvcm1FbGVtZW50KSB7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0IGlzRGVzaWduTW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuaXNEZXNpZ25Nb2RlO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGh0bWxFbGVtZW50LmlubmVySFRNTCA9IFwiPHNwYW4gZGF0YS1iaW5kPSdpZjogZm9ybUVsZW1lbnQuaXNEZXNpZ25Nb2RlJz5Ecm9wIGl0ZW1zIGhlcmU8L3NwYW4+XCI7XHJcbiAgICB9XHJcbiAgICBhZGRFbGVtZW50KGpzb246IGFueSwgbG9jYXRpb246IHN0cmluZyA9IFwiYm90dG9tXCIpIHtcclxuICAgICAgICB0aGlzLnBhcmVudC5hZGRFbGVtZW50KGpzb24sIGxvY2F0aW9uKTtcclxuICAgIH1cclxuICAgIHJlbW92ZSgpIHt9XHJcbiAgICBkaXNwb3NlKCkge31cclxuICAgIGlzQ29udGFpbmVyID0gZmFsc2U7XHJcbiAgICBoYXNJbm5lckxheW91dCA9IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnQgaW1wbGVtZW50cyBJRm9ybUVsZW1lbnQge1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudHNTdWJzY3JpcHRpb246IGtvLkNvbXB1dGVkO1xyXG4gICAgcHJpdmF0ZSBfY29udGV4dDphbnkgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9pc0Rlc2lnbk1vZGUgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuICAgIHByaXZhdGUgX2RyYWdQb3NpdGlvbiA9IGtvLm9ic2VydmFibGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29udGVudDogSVJlbmRlcmFibGUsIHB1YmxpYyBwYXJlbnQ6IElGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHBhcnQgPSBjb250ZW50IGFzIFVpbWxQYXJ0O1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRzU3Vic2NyaXB0aW9uID0ga28uY29tcHV0ZWQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IChwYXJ0LnBhcnRzIHx8IFtdKS5tYXAocGFydCA9PiBVaW1sTGF5b3V0U2VyaWFsaXplci5jcmVhdGVFbGVtZW50KHBhcnQsIHRoaXMpKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldkVsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMoZWxlbWVudHMpO1xyXG4gICAgICAgICAgICBwcmV2RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuZGlzcG9zZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50cyA9IGtvLm9ic2VydmFibGVBcnJheTxJRm9ybUVsZW1lbnQ+KCk7XHJcblxyXG4gICAgZ2V0IGlzQ29udGFpbmVyKCkgeyByZXR1cm4gdGhpcy5jb250ZW50LmlzQ29udGFpbmVyOyB9XHJcbiAgICBnZXQgaGFzSW5uZXJMYXlvdXQoKSB7IHJldHVybiB0aGlzLmNvbnRlbnQuaGFzSW5uZXJMYXlvdXQ7IH1cclxuXHJcbiAgICBnZXQgZHJhZ1Bvc2l0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnUG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldCBkcmFnUG9zaXRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbih2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzRGVzaWduTW9kZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzRGVzaWduTW9kZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEZXNpZ25Nb2RlKCkge1xyXG4gICAgICAgIGlmKCEhdGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmlzRGVzaWduTW9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVzaWduTW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjb250ZXh0KGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbnRleHQoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuX2NvbnRleHQgJiYgdGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMucGFyZW50LmNvbnRleHQ7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhUGF0aCA9IHRoaXMuY29udGVudFtcImRhdGFcIl07XHJcbiAgICAgICAgICAgICAgICBpZighIWRhdGFQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBjb21wbGV4IHBhdGhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5wYXJlbnQuY29udGV4dFtkYXRhUGF0aF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy5jb250ZW50Lmhhc0lubmVyTGF5b3V0IHx8IHRoaXMuaXNDb250YWluZXIgfHwgdGhpcy5lbGVtZW50cygpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQucmVuZGVyKGh0bWxFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMoKS5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jb250ZW50LnJlbmRlcihodG1sRWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZEVsZW1lbnQodWltbFBhcnQ6IFVpbWxQYXJ0LCBsb2NhdGlvbjogc3RyaW5nID0gXCJib3R0b21cIiwgaG92ZXJlZEVsZW1lbnQ/OiBJRm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBpZighdGhpcy5pc0NvbnRhaW5lciB8fCB0aGlzID09PSBob3ZlcmVkRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC5hZGRFbGVtZW50KHVpbWxQYXJ0LCBsb2NhdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5jb250ZW50W1wicGFydGNsYXNzXCJdID09PSBcImxheW91dFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0hvcml6b250YWxSb290ID0gbG9jYXRpb24gPT09IFwibGVmdFwiIHx8IGxvY2F0aW9uID09PSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm9vdFdyYXBwZXIgPSBVaW1sTGF5b3V0U2VyaWFsaXplci5jcmVhdGVFbGVtZW50KFVpbWxQYXJ0LmZyb21KU09OKHsgcGFydGNsYXNzOiBpc0hvcml6b250YWxSb290ID8gXCJsYXlvdXRSb3dcIiA6IFwibGF5b3V0Q29sdW1uXCIsIGNzc0NsYXNzZXM6IGlzSG9yaXpvbnRhbFJvb3QgPyBcInJvd1wiIDogXCJjb2x1bW5cIiB9KSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzKCkuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucGFyZW50ID0gcm9vdFdyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgcm9vdFdyYXBwZXIuZWxlbWVudHModGhpcy5lbGVtZW50cygpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMoW3Jvb3RXcmFwcGVyXSk7XHJcbiAgICAgICAgICAgICAgICByb290V3JhcHBlci5hZGRFbGVtZW50KHVpbWxQYXJ0LCBsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmNvbnRlbnRbXCJwYXJ0Y2xhc3NcIl0gPT09IFwibGF5b3V0Um93XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKCEhaG92ZXJlZEVsZW1lbnQgJiYgKGxvY2F0aW9uID09PSBcInRvcFwiIHx8IGxvY2F0aW9uID09PSBcImJvdHRvbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdDb2x1bW4gPSBVaW1sTGF5b3V0U2VyaWFsaXplci5jcmVhdGVFbGVtZW50KFVpbWxQYXJ0LmZyb21KU09OKHsgcGFydGNsYXNzOiBcImxheW91dENvbHVtblwiLCBjc3NDbGFzc2VzOiBcImNvbHVtblwiIH0pLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNwbGljZSh0aGlzLmVsZW1lbnRzKCkuaW5kZXhPZihob3ZlcmVkRWxlbWVudCksIDEsIG5ld0NvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEVsZW1lbnQucGFyZW50ID0gbmV3Q29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbHVtbi5lbGVtZW50cy5wdXNoKGhvdmVyZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb2x1bW4uYWRkRWxlbWVudCh1aW1sUGFydCwgbG9jYXRpb24sIGhvdmVyZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnBhcmVudC5hZGRFbGVtZW50KGpzb24sIGxvY2F0aW9uLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnQgPSBVaW1sTGF5b3V0U2VyaWFsaXplci5jcmVhdGVFbGVtZW50KHVpbWxQYXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnNwbGljZSh0aGlzLmVsZW1lbnRzKCkuaW5kZXhPZihob3ZlcmVkRWxlbWVudCkgKyAobG9jYXRpb24gPT09IFwicmlnaHRcIiA/IDEgOiAwKSwgMCwgbmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZighIWhvdmVyZWRFbGVtZW50ICYmIChsb2NhdGlvbiA9PT0gXCJsZWZ0XCIgfHwgbG9jYXRpb24gPT09IFwicmlnaHRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Um93ID0gVWltbExheW91dFNlcmlhbGl6ZXIuY3JlYXRlRWxlbWVudChVaW1sUGFydC5mcm9tSlNPTih7IHBhcnRjbGFzczogXCJsYXlvdXRSb3dcIiwgY3NzQ2xhc3NlczogXCJyb3dcIiB9KSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5zcGxpY2UodGhpcy5lbGVtZW50cygpLmluZGV4T2YoaG92ZXJlZEVsZW1lbnQpLCAxLCBuZXdSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyZWRFbGVtZW50LnBhcmVudCA9IG5ld1JvdztcclxuICAgICAgICAgICAgICAgICAgICBuZXdSb3cuZWxlbWVudHMucHVzaChob3ZlcmVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LmFkZEVsZW1lbnQodWltbFBhcnQsIGxvY2F0aW9uLCBob3ZlcmVkRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdFbGVtZW50ID0gVWltbExheW91dFNlcmlhbGl6ZXIuY3JlYXRlRWxlbWVudCh1aW1sUGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5zcGxpY2UodGhpcy5lbGVtZW50cygpLmluZGV4T2YoaG92ZXJlZEVsZW1lbnQpICsgKGxvY2F0aW9uID09PSBcImJvdHRvbVwiID8gMSA6IDApLCAwLCBuZXdFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICBpZighIXRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LmVsZW1lbnRzLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICAgICAgaWYoKHRoaXMucGFyZW50LmNvbnRlbnRbXCJwYXJ0Y2xhc3NcIl0gPT09IFwibGF5b3V0Um93XCIgfHwgdGhpcy5wYXJlbnQuY29udGVudFtcInBhcnRjbGFzc1wiXSA9PT0gXCJsYXlvdXRDb2x1bW5cIikgJiYgdGhpcy5wYXJlbnQuZWxlbWVudHMoKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50c1N1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRGVmYXVsdExheW91dCwgbW9kZWxGcm9tSlNPTiwgbW9kZWxUb0pTT04gfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9mb3JtLWJ1aWxkZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFRvb2xib3hJdGVtcyB9IGZyb20gXCIuL2RlZmF1bHQtdG9vbGJveFwiO1xyXG5pbXBvcnQgeyBJUGFydCB9IGZyb20gXCIuLi91aW1sXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSB7XHJcbiAgICBwcml2YXRlIF9sYXlvdXRKc29uOiBrby5PYnNlcnZhYmxlPElQYXJ0PjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NoYW5nZU9ic2VydmVyOiBrby5Db21wdXRlZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3Q6IGFueSwgcHJpdmF0ZSBvbkNoYW5nZTogKG9iamVjdDogYW55LCBqc29uOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbEZyb21KU09OKF9vYmplY3QpO1xyXG4gICAgICAgdGhpcy5fbGF5b3V0SnNvbiA9IGtvLm9ic2VydmFibGUoY3JlYXRlRGVmYXVsdExheW91dCh0aGlzLm1vZGVsKSk7XHJcbiAgICAgICB0aGlzLl9jaGFuZ2VPYnNlcnZlciA9IGtvLmNvbXB1dGVkKCgpID0+IHRoaXMub25DaGFuZ2UgJiYgdGhpcy5vbkNoYW5nZSh0aGlzLm9iamVjdCwgbW9kZWxUb0pTT04odGhpcy5tb2RlbCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxheW91dEpzb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheW91dEpzb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZWFkb25seSBtb2RlbDtcclxuICAgIHB1YmxpYyBnZXQgb2JqZWN0KCkge1xyXG4gICAgICAgIHJldHVybiBrby50b0pTKHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VPYnNlcnZlci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzaG93KG9iamVjdDogYW55LCBhdDogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIG9uQ2hhbmdlOiAob2JqZWN0OiBhbnksIGpzb246IHN0cmluZykgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybShvYmplY3QsIG9uQ2hhbmdlKTtcclxuICAgICAgICByZW5kZXIoZm9ybS5sYXlvdXRKc29uLCBjcmVhdGVEZWZhdWx0VG9vbGJveEl0ZW1zKGZvcm0ubW9kZWwpLCBmb3JtLm1vZGVsLCB0eXBlb2YgYXQgPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdCkgOiBhdCk7XHJcbiAgICAgICAgcmV0dXJuIGZvcm07XHJcbiAgICB9XHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xyXG5cclxuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuLi91aW1sXCI7XHJcblxyXG5pbXBvcnQgeyBJRm9ybUVsZW1lbnQgfSBmcm9tIFwiLi9mb3JtLWVsZW1lbnRcIjtcclxuXHJcbmltcG9ydCBcIi4vaXRlbS1tZW51LnNjc3NcIjtcclxudmFyIHRlbXBsYXRlID0gcmVxdWlyZShcInRleHQtbG9hZGVyIS4vaXRlbS1tZW51Lmh0bWxcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbU1lbnUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtRWxlbWVudDogSUZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5tZW51SXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIi0gUmVtb3ZlXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogKCkgPT4gZm9ybUVsZW1lbnQucmVtb3ZlKCksXHJcbiAgICAgICAgICAgIHZpc2libGU6IGtvLmNvbXB1dGVkKCgpID0+ICEhZm9ybUVsZW1lbnQucGFyZW50KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbnVJdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheTxJQWN0aW9uPigpO1xyXG4gICAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUVsZW1lbnQuY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxua28uY29tcG9uZW50cy5yZWdpc3RlcihcIml0ZW0tbWVudVwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEl0ZW1NZW51KHBhcmFtcy5lbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVcclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcblxyXG5pbXBvcnQgeyBmaWxsRHJhZ2dlZE92ZXJJbkRpcmVjdGlvbiwgSUZvcm1FbGVtZW50IH0gZnJvbSBcIi4vZm9ybS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IFVpbWxMYXlvdXRTZXJpYWxpemVyIH0gZnJvbSBcIi4vdWltbC1sYXlvdXQtc2VyaWFsaXplclwiO1xyXG5pbXBvcnQgeyBVaW1sUGFydCB9IGZyb20gXCIuL3VpbWwtcGFydHNcIjtcclxuXHJcbmltcG9ydCBcIi4vbGF5b3V0LWl0ZW0uc2Nzc1wiO1xyXG52YXIgdGVtcGxhdGUgPSByZXF1aXJlKFwidGV4dC1sb2FkZXIhLi9sYXlvdXQtaXRlbS5odG1sXCIpO1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICBpZih5ID49IGhlaWdodCAvIHdpZHRoICogeCkge1xyXG4gICAgICAgIGlmKHkgPj0gLSBoZWlnaHQgLyB3aWR0aCAqIHggKyBoZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdib3R0b20nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZih5ID49IC0gaGVpZ2h0IC8gd2lkdGggKiB4ICsgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAncmlnaHQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICd0b3AnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGF5b3V0SXRlbSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBkcmFnZ2VkRWxlbWVudDogSUZvcm1FbGVtZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIGRyYWdnZWRPdmVyRWxlbWVudDogSUZvcm1FbGVtZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIGRyYWdnZWRPdmVyUG9zaXRpb246IHN0cmluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBzZWxlY3RlZEVsZW1lbnQgPSBrby5vYnNlcnZhYmxlPExheW91dEl0ZW0+KCk7XHJcbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwcml2YXRlIF9ob3Zlckl0ZW1zOiBJRm9ybUVsZW1lbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudEhvdmVySW5kZXggPSAwO1xyXG4gICAgcHJpdmF0ZSBfaG92ZXJJbmRpY2F0b3JUaW1lciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBwcml2YXRlIGNsZWFySG92ZXJJbmRpY2F0b3IoKSB7XHJcbiAgICAgICAgTGF5b3V0SXRlbS5kcmFnZ2VkT3ZlckVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIExheW91dEl0ZW0uZHJhZ2dlZE92ZXJQb3NpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy5faG92ZXJJbmRpY2F0b3JUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faG92ZXJJbmRpY2F0b3JUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuX2hvdmVySW5kaWNhdG9yVGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy5faG92ZXJJdGVtcykpIHtcclxuICAgICAgICAgICAgdGhpcy5faG92ZXJJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kcmFnUG9zaXRpb24gPSBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtRWxlbWVudDogSUZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0ga28uY29tcHV0ZWQoKCkgPT4gdGhpcy5mb3JtRWxlbWVudC5pc0Rlc2lnbk1vZGUgJiYgdGhpcy5faXNTZWxlY3RlZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudHMoKSB7IHJldHVybiB0aGlzLmZvcm1FbGVtZW50LmVsZW1lbnRzOyB9XHJcbiAgICBnZXQgaXNDb250YWluZXIoKSB7IHJldHVybiB0aGlzLmZvcm1FbGVtZW50LmlzQ29udGFpbmVyOyB9XHJcbiAgICBnZXQgY3NzKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmZvcm1FbGVtZW50LmNvbnRlbnQgaW5zdGFuY2VvZiBVaW1sUGFydCA/IHRoaXMuZm9ybUVsZW1lbnQuY29udGVudFtcImNzc0NsYXNzZXNcIl0gOiBcIlwiO1xyXG4gICAgICAgIGlmKHRoaXMuZm9ybUVsZW1lbnQuaXNEZXNpZ25Nb2RlKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIgXCIgKyBcImJmLWl0ZW0tLXNlbGVjdGVkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5mb3JtRWxlbWVudC5kcmFnUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiBcIiArIFwiYmYtaXRlbS0tZHJhZy1vdmVyLVwiICsgdGhpcy5mb3JtRWxlbWVudC5kcmFnUG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGlzU2VsZWN0ZWQ6IGtvLkNvbXB1dGVkPGJvb2xlYW4+O1xyXG5cclxuICAgIGRyYWdzdGFydChtb2RlbDogTGF5b3V0SXRlbSwgZXY6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGlmKHRoaXMuZm9ybUVsZW1lbnQuaXNEZXNpZ25Nb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gPERyYWdFdmVudD4oKDxhbnk+ZXYpLm9yaWdpbmFsRXZlbnQgfHwgZXYpO1xyXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiYmYtaXRlbS1qc29uXCIsIEpTT04uc3RyaW5naWZ5KFVpbWxMYXlvdXRTZXJpYWxpemVyLnNlcmlhbGl6ZShtb2RlbC5mb3JtRWxlbWVudCkpKTtcclxuICAgICAgICAgICAgTGF5b3V0SXRlbS5kcmFnZ2VkRWxlbWVudCA9IG1vZGVsLmZvcm1FbGVtZW50O1xyXG4gICAgICAgICAgICBldi5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmFnZW50ZXIobW9kZWw6IExheW91dEl0ZW0sIGV2OiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBkcmFnb3Zlcihtb2RlbDogTGF5b3V0SXRlbSwgZXY6IERyYWdFdmVudCkge1xyXG4gICAgICAgIGlmKG1vZGVsLmZvcm1FbGVtZW50LmlzRGVzaWduTW9kZSkge1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IDxEcmFnRXZlbnQ+KCg8YW55PmV2KS5vcmlnaW5hbEV2ZW50IHx8IGV2KSxcclxuICAgICAgICAgICAgdGFyZ2V0SXRlbSA9IGtvLmRhdGFGb3IoPGFueT5vcmlnaW5hbEV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHZhciBob3ZlckxvY2F0aW9uID0gZ2V0TG9jYXRpb24ob3JpZ2luYWxFdmVudC5vZmZzZXRYLCBvcmlnaW5hbEV2ZW50Lm9mZnNldFksICg8YW55PmV2LnRhcmdldCkuY2xpZW50V2lkdGgsICg8YW55PmV2LnRhcmdldCkuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKExheW91dEl0ZW0uZHJhZ2dlZE92ZXJFbGVtZW50ICE9PSBtb2RlbC5mb3JtRWxlbWVudCB8fCBMYXlvdXRJdGVtLmRyYWdnZWRPdmVyUG9zaXRpb24gIT09IGhvdmVyTG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLmNsZWFySG92ZXJJbmRpY2F0b3IoKTtcclxuICAgICAgICAgICAgICAgIExheW91dEl0ZW0uZHJhZ2dlZE92ZXJFbGVtZW50ID0gbW9kZWwuZm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBMYXlvdXRJdGVtLmRyYWdnZWRPdmVyUG9zaXRpb24gPSBob3ZlckxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgbW9kZWwuX2hvdmVySXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZpbGxEcmFnZ2VkT3ZlckluRGlyZWN0aW9uKG1vZGVsLmZvcm1FbGVtZW50LCBob3ZlckxvY2F0aW9uLCBtb2RlbC5faG92ZXJJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5fY3VycmVudEhvdmVySW5kZXggPSBtb2RlbC5faG92ZXJJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG92ZXJJbmRpY2F0b3JVcGRhdGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLl9ob3Zlckl0ZW1zW21vZGVsLl9jdXJyZW50SG92ZXJJbmRleF0uZHJhZ1Bvc2l0aW9uID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5fY3VycmVudEhvdmVySW5kZXggPSAobW9kZWwuX2N1cnJlbnRIb3ZlckluZGV4ICsgMSkgJSBtb2RlbC5faG92ZXJJdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuX2hvdmVySXRlbXNbbW9kZWwuX2N1cnJlbnRIb3ZlckluZGV4XS5kcmFnUG9zaXRpb24gPSBob3ZlckxvY2F0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLl9ob3ZlckluZGljYXRvclRpbWVyID0gc2V0VGltZW91dChob3ZlckluZGljYXRvclVwZGF0ZXIsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaG92ZXJJbmRpY2F0b3JVcGRhdGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhZ2xlYXZlKG1vZGVsOiBMYXlvdXRJdGVtLCBldjogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgaWYobW9kZWwuZm9ybUVsZW1lbnQuaXNEZXNpZ25Nb2RlKSB7XHJcbiAgICAgICAgICAgIG1vZGVsLmNsZWFySG92ZXJJbmRpY2F0b3IoKTtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXYuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcm9wKG1vZGVsOiBMYXlvdXRJdGVtLCBldjogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgaWYobW9kZWwuZm9ybUVsZW1lbnQuaXNEZXNpZ25Nb2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gPERyYWdFdmVudD4oKDxhbnk+ZXYpLm9yaWdpbmFsRXZlbnQgfHwgZXYpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJiZi1pdGVtLWpzb25cIik7XHJcbiAgICAgICAgICAgIGlmKCEhZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYoISFMYXlvdXRJdGVtLmRyYWdnZWRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5b3V0SXRlbS5kcmFnZ2VkRWxlbWVudC5wYXJlbnQuZWxlbWVudHMucmVtb3ZlKExheW91dEl0ZW0uZHJhZ2dlZEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIExheW91dEl0ZW0uZHJhZ2dlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJvcFRhcmdldEVsZW1lbnQgPSBtb2RlbC5faG92ZXJJdGVtc1ttb2RlbC5fY3VycmVudEhvdmVySW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgZHJvcFRhcmdldEVsZW1lbnQuYWRkRWxlbWVudChVaW1sUGFydC5mcm9tSlNPTihKU09OLnBhcnNlKGRhdGEpKSwgZHJvcFRhcmdldEVsZW1lbnQuZHJhZ1Bvc2l0aW9uLCBkcm9wVGFyZ2V0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW9kZWwuY2xlYXJIb3ZlckluZGljYXRvcigpO1xyXG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldi5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdChtb2RlbDogTGF5b3V0SXRlbSwgZXY6IEV2ZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy5mb3JtRWxlbWVudC5pc0Rlc2lnbk1vZGUpIHtcclxuICAgICAgICAgICAgaWYoISFMYXlvdXRJdGVtLnNlbGVjdGVkRWxlbWVudCgpKSB7XHJcbiAgICAgICAgICAgICAgICBMYXlvdXRJdGVtLnNlbGVjdGVkRWxlbWVudCgpLl9pc1NlbGVjdGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb2RlbC5faXNTZWxlY3RlZCh0cnVlKTtcclxuICAgICAgICAgICAgTGF5b3V0SXRlbS5zZWxlY3RlZEVsZW1lbnQobW9kZWwpO1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxFdmVudCA9ICgoPGFueT5ldikub3JpZ2luYWxFdmVudCB8fCBldik7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEZXNpZ25Nb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1FbGVtZW50LmlzRGVzaWduTW9kZTtcclxuICAgIH1cclxuICAgIGdldCBwYXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1FbGVtZW50LmNvbnRlbnRbXCJwYXJ0XCJdO1xyXG4gICAgfVxyXG4gICAgYWZ0ZXJQYXJ0VGVtcGxhdGVSZW5kZXIgPSAoZWxlbWVudHM6IEhUTUxFbGVtZW50W10pID0+IHtcclxuICAgICAgICBpZighdGhpcy5pc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBjb25zdCBob2xkZXJFbGVtZW50ID0gZWxlbWVudHNbMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDb250ZXh0ID0ga28uY29udGV4dEZvcihob2xkZXJFbGVtZW50KTtcclxuICAgICAgICAgICAga28uY2xlYW5Ob2RlKGhvbGRlckVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnJlbmRlcihob2xkZXJFbGVtZW50KTtcclxuICAgICAgICAgICAga28uYXBwbHlCaW5kaW5ncyhkYXRhQ29udGV4dCwgaG9sZGVyRWxlbWVudCk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJsYXlvdXQtaXRlbVwiLCB7XHJcbiAgICB2aWV3TW9kZWw6IHtcclxuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xyXG4gICAgICAgICAgICBsZXQgZm9ybUVsZW1lbnQ6IElGb3JtRWxlbWVudCA9IHBhcmFtcy5lbGVtZW50IHx8IFVpbWxMYXlvdXRTZXJpYWxpemVyLmNyZWF0ZUVsZW1lbnQoVWltbFBhcnQuZnJvbUpTT04ocGFyYW1zLnVpbWwpLCBudWxsKTtcclxuICAgICAgICAgICAgaWYoISFwYXJhbXMuY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZm9ybUVsZW1lbnQuY29udGV4dCA9IHBhcmFtcy5jb250ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFmb3JtRWxlbWVudC5pc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1FbGVsZW10Q29udGFpbmVyID0gKDxIVE1MRWxlbWVudD5jb21wb25lbnRJbmZvLmVsZW1lbnQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiZi1pdGVtLWNvbnRlbnQtaG9sZGVyXCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9ybUVsZW1lbnQucmVuZGVyKDxIVE1MRWxlbWVudD5pdGVtRWxlbGVtdENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMYXlvdXRJdGVtKGZvcm1FbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGVcclxufSk7XHJcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcblxyXG5pbXBvcnQgeyBQbGFjZUhvbGRlciB9IGZyb20gXCIuL2Zvcm0tZWxlbWVudFwiO1xyXG5pbXBvcnQgeyBMYXlvdXRJdGVtIH0gZnJvbSBcIi4vbGF5b3V0LWl0ZW1cIjtcclxuXHJcbmltcG9ydCBcIi4vcGxhY2Vob2xkZXItaXRlbS5zY3NzXCI7XHJcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoXCJ0ZXh0LWxvYWRlciEuL3BsYWNlaG9sZGVyLWl0ZW0uaHRtbFwiKTtcclxuXHJcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJwbGFjZWhvbGRlci1pdGVtXCIsIHtcclxuICAgIHZpZXdNb2RlbDoge1xyXG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtRWxlbGVtdCA9ICg8SFRNTEVsZW1lbnQ+Y29tcG9uZW50SW5mby5lbGVtZW50KS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmYtaXRlbS1wbGFjZWhvbGRlclwiKVswXTtcclxuICAgICAgICAgICAgbGV0IGZvcm1FbGVtZW50ID0gbmV3IFBsYWNlSG9sZGVyKHBhcmFtcy5lbGVtZW50KTtcclxuICAgICAgICAgICAgZm9ybUVsZW1lbnQucmVuZGVyKDxIVE1MRWxlbWVudD5pdGVtRWxlbGVtdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTGF5b3V0SXRlbShmb3JtRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRlbXBsYXRlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYWNlaG9sZGVyQ29tcG9uZW50ID0gbnVsbDsiLCJpbXBvcnQgeyBGb3JtRWxlbWVudCwgSUZvcm1FbGVtZW50IH0gZnJvbSBcIi4vZm9ybS1lbGVtZW50XCI7XHJcbmltcG9ydCB7IFVpbWxQYXJ0c1JlcG9zaXRvcnksIFVpbWxQYXJ0IH0gZnJvbSBcIi4vdWltbC1wYXJ0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpbWxMYXlvdXRTZXJpYWxpemVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGxheW91dFBhcnRDbGFzcyA9IFwibGF5b3V0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVJvb3QoKTogRm9ybUVsZW1lbnQge1xyXG4gICAgICAgIHZhciByb290UGFydCA9IFVpbWxQYXJ0c1JlcG9zaXRvcnkuY3JlYXRlKFVpbWxMYXlvdXRTZXJpYWxpemVyLmxheW91dFBhcnRDbGFzcywgeyBjc3NDbGFzc2VzOiBcInJvb3RcIiB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IEZvcm1FbGVtZW50KHJvb3RQYXJ0LCBudWxsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudCh1aW1sUGFydDogVWltbFBhcnQsIHBhcmVudDogSUZvcm1FbGVtZW50KTogSUZvcm1FbGVtZW50IHtcclxuICAgICAgICBpZih1aW1sUGFydC5oYXNJbm5lckxheW91dCkge1xyXG4gICAgICAgICAgICB2YXIgZ3JvdXBFbGVtZW50SnNvbiA9IHsgcGFydGNsYXNzOiBVaW1sTGF5b3V0U2VyaWFsaXplci5sYXlvdXRQYXJ0Q2xhc3MsIGNzc0NsYXNzZXM6IFwiZ3JvdXBcIiwgcGFydHM6IFtdIH07XHJcbiAgICAgICAgICAgIHZhciBncm91cEVsZW1lbnQgPSBVaW1sUGFydC5mcm9tSlNPTihncm91cEVsZW1lbnRKc29uKTtcclxuICAgICAgICAgICAgZ3JvdXBFbGVtZW50LnBhcnRzID0gdWltbFBhcnQucGFydC5wYXJ0cyB8fCBbXTtcclxuICAgICAgICAgICAgdWltbFBhcnQucGFydHMgPSBbZ3JvdXBFbGVtZW50XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtRWxlbWVudCh1aW1sUGFydCwgcGFyZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRWxlbWVudHMoY29sbGVjdGlvbjogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8SUZvcm1FbGVtZW50PiB8IEFycmF5PElGb3JtRWxlbWVudD4sIHBhcnRzOiBhbnlbXSA9IFtdLCBwYXJlbnQ6IElGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHBhcnRzLmZvckVhY2goZWxlbWVudEpzb24gPT4ge1xyXG4gICAgICAgICAgICBjb2xsZWN0aW9uLnB1c2goVWltbExheW91dFNlcmlhbGl6ZXIuY3JlYXRlRWxlbWVudChVaW1sUGFydC5mcm9tSlNPTihlbGVtZW50SnNvbiksIHBhcmVudCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXJpYWxpemUoZm9ybUVsZW1lbnQ6IElGb3JtRWxlbWVudCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdWltbFBhcnQgPSA8VWltbFBhcnQ+Zm9ybUVsZW1lbnQuY29udGVudDtcclxuICAgICAgICB2YXIgZWxlbWVudDogYW55ID0ge1xyXG4gICAgICAgICAgICBwYXJ0Y2xhc3M6IHVpbWxQYXJ0LnBhcnRjbGFzcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHVpbWxQYXJ0LnBhcnQpLmZvckVhY2goa2V5ID0+IGVsZW1lbnRba2V5XSA9IHVpbWxQYXJ0LnBhcnRba2V5XSk7XHJcbiAgICAgICAgaWYoZm9ybUVsZW1lbnQuZWxlbWVudHMoKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5wYXJ0cyA9IGZvcm1FbGVtZW50LmVsZW1lbnRzKCkubWFwKGZlID0+IFVpbWxMYXlvdXRTZXJpYWxpemVyLnNlcmlhbGl6ZShmZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGVsZW1lbnQucGFydHMpICYmIGVsZW1lbnQucGFydHMubGVuZ3RoID09PSAxICYmIGVsZW1lbnQucGFydHNbMF0ucGFydGNsYXNzID09PSBVaW1sTGF5b3V0U2VyaWFsaXplci5sYXlvdXRQYXJ0Q2xhc3MpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5wYXJ0cyA9IGVsZW1lbnQucGFydHNbMF0ucGFydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmltcG9ydCB7IGdldE9iamVjdERlc2NyaXB0aW9uLCBpc0FycmF5VHlwZSB9IGZyb20gXCIuLi9tZXRhZGF0YS9tb2RlbFwiO1xyXG5pbXBvcnQgeyBJT2JqZWN0RGVzY3JpcHRpb24sIElQcm9wZXJ0eURlc2NyaXB0aW9uIH0gZnJvbSBcIi4uL21ldGFkYXRhL29iamVjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi91aW1sLXBhcnRzLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlbmRlcmFibGUge1xyXG4gICAgcmVuZGVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk7XHJcbiAgICBpc0NvbnRhaW5lcjogYm9vbGVhbjtcclxuICAgIGhhc0lubmVyTGF5b3V0OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvcGVydHkodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5RGVzY3JpcHRpb246IElQcm9wZXJ0eURlc2NyaXB0aW9uLCB2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBvYnNlcnZhYmxlVmFsdWUgPSBrby5vYnNlcnZhYmxlKHZhbHVlKTsgXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eURlc2NyaXB0aW9uLm5hbWUsIHtcclxuICAgICAgICBnZXQ6ICgpID0+IG9ic2VydmFibGVWYWx1ZSgpLFxyXG4gICAgICAgIHNldDogdmFsID0+IG9ic2VydmFibGVWYWx1ZSh2YWwpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVpbWxQYXJ0IGltcGxlbWVudHMgSVJlbmRlcmFibGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb250YWluZXJQYXJ0cyA9IFtcImxheW91dFwiLCBcImxheW91dFJvd1wiLCBcImxheW91dENvbHVtblwiXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGF5b3V0SG9sZGVyUGFydHMgPSBbXCJwYW5lbFwiXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGF5b3V0Q29udmVydGFibGVQYXJ0cyA9IHtcclxuICAgICAgICBcInZpZXdcIjogXCJsYXlvdXRcIixcclxuICAgICAgICBcImZvcm1cIjogXCJsYXlvdXRcIixcclxuICAgICAgICBcImtvV2l0aFwiOiBcImxheW91dENvbHVtblwiLFxyXG4gICAgICAgIFwiY29udGFpbmVyXCI6IFwibGF5b3V0Q29sdW1uXCIsXHJcbiAgICAgICAgXCJhY2NvcmRpb25cIjogXCJsYXlvdXRDb2x1bW5cIiwgLy8gVE9ETzogaW1wbGVtZW50IGFjY29yZGlvbi9sYXlvdXQgY29tcG9uZW50XHJcbiAgICAgICAgXCJkaXZcIjogXCJjb250YWluZXJcIixcclxuICAgICAgICBcImZvcm1Hcm91cFwiOiBcImxheW91dEl0ZW1cIlxyXG4gICAgfTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVuZGVyOiAocGFydDogYW55LCBjb250YWluZXI/OiBIVE1MRWxlbWVudCkgPT4gSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBjb3VudGVyID0gMTtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhcnQ6IGFueTtcclxuICAgIHByaXZhdGUgX29iamVjdERlc2NyaXB0aW9uOiBJT2JqZWN0RGVzY3JpcHRpb247XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYXJ0Y2xhc3M6IHN0cmluZywgLi4ucGFyYW1zOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlkID0gVWltbFBhcnQuY291bnRlcisrO1xyXG4gICAgICAgIHRoaXMuX3BhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXNbMF0pO1xyXG4gICAgICAgIHRoaXMuX29iamVjdERlc2NyaXB0aW9uID0gZ2V0T2JqZWN0RGVzY3JpcHRpb24oX3BhcnRjbGFzcyk7XHJcbiAgICAgICAgaWYodGhpcy5fb2JqZWN0RGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fb2JqZWN0RGVzY3JpcHRpb24ucHJvcGVydGllcy5mb3JFYWNoKHBkID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eVR5cGUgPSBwZC50eXBlIHx8IFwic3RyaW5nXCI7XHJcbiAgICAgICAgICAgICAgICBpZighaXNBcnJheVR5cGUocHJvcGVydHlUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVByb3BlcnR5KHRoaXMsIHBkLCB0aGlzLl9wYXJ0W3BkLm5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHRoaXMsIHsgbmFtZTogXCJkYXRhXCIgfSwgdGhpcy5fcGFydC5kYXRhKTtcclxuICAgICAgICBjcmVhdGVQcm9wZXJ0eSh0aGlzLCB7IG5hbWU6IFwicGFydHNcIiwgdHlwZTogXCJwYXJ0W11cIiB9LCAodGhpcy5fcGFydC5wYXJ0cyB8fCBbXSkubWFwKGpzb24gPT4gVWltbFBhcnRzUmVwb3NpdG9yeS5jcmVhdGUoanNvbi5wYXJ0Y2xhc3MsIGpzb24pKSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYoVWltbFBhcnQucmVuZGVyKSB7XHJcbiAgICAgICAgICAgIFVpbWxQYXJ0LnJlbmRlcih0aGlzLCBodG1sRWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaHRtbEVsZW1lbnQuY2xhc3NOYW1lICs9IChcIiBcIiArIHRoaXNbXCJjc3NDbGFzc2VzXCJdKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50LmlubmVySFRNTCA9IHRoaXMucGFydGNsYXNzICsgdGhpcy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBoYXNJbm5lckxheW91dCgpIHtcclxuICAgICAgICByZXR1cm4gVWltbFBhcnQubGF5b3V0SG9sZGVyUGFydHMuaW5kZXhPZih0aGlzLnBhcnRjbGFzcykgIT09IC0xO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiBVaW1sUGFydC5jb250YWluZXJQYXJ0cy5pbmRleE9mKHRoaXMucGFydGNsYXNzKSAhPT0gLTE7XHJcbiAgICB9XHJcbiAgICBnZXQgcGFydGNsYXNzKCkge1xyXG4gICAgICAgIHJldHVybiBVaW1sUGFydC5sYXlvdXRDb252ZXJ0YWJsZVBhcnRzW3RoaXMuX3BhcnRjbGFzc10gfHwgdGhpcy5fcGFydGNsYXNzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhcnQoKSB7XHJcbiAgICAgICAgdmFyIHBhcnQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9wYXJ0KTtcclxuICAgICAgICBwYXJ0LmRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgaWYodGhpcy5fb2JqZWN0RGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fb2JqZWN0RGVzY3JpcHRpb24ucHJvcGVydGllcy5mb3JFYWNoKHBkID0+IHtcclxuICAgICAgICAgICAgICAgIHBhcnRbcGQubmFtZV0gPSB0aGlzW3BkLm5hbWVdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICByZXR1cm4gcGFydDtcclxuICAgIH1cclxuICAgIHBhcnRzOiBBcnJheTxVaW1sUGFydD47XHJcbiAgICBkYXRhOiBhbnk7XHJcbiAgICBzdGF0aWMgZnJvbUpTT04oanNvbjogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIFVpbWxQYXJ0c1JlcG9zaXRvcnkuY3JlYXRlKGpzb24ucGFydGNsYXNzLCBqc29uKTtcclxuICAgIH1cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJ0O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlKHBhcnRjbGFzczogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFVpbWxQYXJ0c1JlcG9zaXRvcnkuY3JlYXRlKHBhcnRjbGFzcywge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVWltbFBhcnRzUmVwb3NpdG9yeSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBwYXJ0czoge1trZXk6IHN0cmluZ106IG5ldyAoLi4ucGFyYW1zOiBhbnkpID0+IFVpbWxQYXJ0IH0gPSB7fTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZSA9IG5ldyBVaW1sUGFydHNSZXBvc2l0b3J5KCk7XHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkgeyByZXR1cm4gVWltbFBhcnRzUmVwb3NpdG9yeS5faW5zdGFuY2U7IH1cclxuICAgIHN0YXRpYyByZWdpc3RlcihwYXJ0Y2xhc3M6IHN0cmluZywgcGFydENvbnN0cnVjdG9yOiBuZXcgKCkgPT4gVWltbFBhcnQpIHtcclxuICAgICAgICBVaW1sUGFydHNSZXBvc2l0b3J5LnBhcnRzW3BhcnRjbGFzc10gPSBwYXJ0Q29uc3RydWN0b3I7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY3JlYXRlKHBhcnRjbGFzczogc3RyaW5nLCAuLi5wYXJhbXM6IGFueSkge1xyXG4gICAgICAgIGlmKCEhVWltbFBhcnRzUmVwb3NpdG9yeS5wYXJ0c1twYXJ0Y2xhc3NdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWltbFBhcnRzUmVwb3NpdG9yeS5wYXJ0c1twYXJ0Y2xhc3NdKC4uLnBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgVWltbFBhcnQocGFydGNsYXNzLCAuLi5wYXJhbXMpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVGl0bGUocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWUuc3BsaXQoXCJfXCIpLm1hcChwYXJ0ID0+IGNhcGl0YWxpemUocGFydCkpLmpvaW4oXCIgXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvcGVydHlFZGl0b3IocHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydGNsYXNzOiBcImxheW91dEl0ZW1cIixcclxuICAgICAgICBjc3NDbGFzc2VzOiBcIml0ZW0gdGVzdC1pdGVtIHRlc3QtZ3JvdXBcIixcclxuICAgICAgICBwYXJ0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0Y2xhc3M6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXM6IFwidGVzdC1sYWJlbFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogbWFrZVRpdGxlKHByb3BlcnR5TmFtZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFydGNsYXNzOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBcInRlc3QtaW5wdXRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByb3BlcnR5TmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbHVtbkxheW91dChtb2RlbDogYW55LCBpbmNsdWRlTmVzdGVkT2JqZWN0cyA9IGZhbHNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFwicGFydGNsYXNzXCI6IFwibGF5b3V0Q29sdW1uXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IHVuZGVmaW5lZCxcclxuICAgICAgICBcImNzc0NsYXNzZXNcIjogXCJjb2x1bW5cIixcclxuICAgICAgICBcInBhcnRzXCI6IChPYmplY3Qua2V5cyhtb2RlbCkgfHwgW10pXHJcbiAgICAgICAgICAgIC5maWx0ZXIocHJvcGVydHlOYW1lID0+IGluY2x1ZGVOZXN0ZWRPYmplY3RzIHx8IHR5cGVvZiBtb2RlbFtwcm9wZXJ0eU5hbWVdICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICAubWFwKHByb3BlcnR5TmFtZSA9PiBjcmVhdGVQcm9wZXJ0eUVkaXRvcihwcm9wZXJ0eU5hbWUpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdExheW91dChtb2RlbDogYW55KSB7XHJcbiAgICBjb25zdCBsYXlvdXQgPSB7XHJcbiAgICAgICAgXCJwYXJ0Y2xhc3NcIjogXCJsYXlvdXRSb3dcIixcclxuICAgICAgICBcImRhdGFcIjogdW5kZWZpbmVkLFxyXG4gICAgICAgIFwiY3NzQ2xhc3Nlc1wiOiBcInJvdyB0ZXN0LWZvcm1cIixcclxuICAgICAgICBcInBhcnRzXCI6IFsgY3JlYXRlQ29sdW1uTGF5b3V0KG1vZGVsKSBdXHJcbiAgICB9O1xyXG4gICAgKE9iamVjdC5rZXlzKG1vZGVsKSB8fCBbXSlcclxuICAgIC5maWx0ZXIocHJvcGVydHlOYW1lID0+IHR5cGVvZiBtb2RlbFtwcm9wZXJ0eU5hbWVdID09PSBcIm9iamVjdFwiKVxyXG4gICAgLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjb2x1bW4gPSBjcmVhdGVDb2x1bW5MYXlvdXQobW9kZWxbcHJvcGVydHlOYW1lXSk7XHJcbiAgICAgICAgY29sdW1uLmRhdGEgPSBwcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgbGF5b3V0LnBhcnRzLnB1c2goY29sdW1uKTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbGF5b3V0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9kZWxGcm9tSlNPTihqc29uOiBhbnkpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGpzb24pLCAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZih0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtvLm9ic2VydmFibGUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vZGVsVG9KU09OKG1vZGVsOiBhbnkpIHtcclxuICAgIHJldHVybiBrby50b0pTT04obW9kZWwsIG51bGwsIDIpXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa25vY2tvdXRfXzsiXSwic291cmNlUm9vdCI6IiJ9