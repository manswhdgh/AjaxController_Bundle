(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 664:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AjaxController = void 0;
var AjaxController = /** @class */ (function () {
    function AjaxController() {
    }
    AjaxController.sendGet = function (url, callback, errorCallback) {
        var xhttp = AjaxController.initialize(callback, errorCallback);
        xhttp.open("GET", url);
        xhttp.send();
    };
    AjaxController.sendGetAsync = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhttp = _this.initialize(resolve, reject);
                        xhttp.open("GET", url, true);
                        xhttp.send();
                    })];
            });
        });
    };
    // sendPost(url, query, callback, errorCallback)
    AjaxController.sendPost = function (url, query, callback, errorCallback) {
        var xhttp = AjaxController.initialize(callback, errorCallback);
        xhttp.open("POST", url);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhttp.send(query);
    };
    AjaxController.sendPostFormData = function (url, query, callback, errorCallback) {
        var xhttp = AjaxController.initialize(callback, errorCallback);
        xhttp.open("POST", url, true);
        xhttp.send(query);
    };
    AjaxController.sendPostFormDataAsync = function (url, query) {
        return new Promise(function (resolve, reject) {
            AjaxController.sendPostFormData(url, query, resolve, reject);
        });
    };
    AjaxController.sendPostAsync = function (url, query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        AjaxController.sendPost(url, query, resolve, reject);
                    })];
            });
        });
    };
    AjaxController.sendJsonAsync = function (url, json) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhttp = AjaxController.initialize(resolve, reject);
                        xhttp.open("POST", url, true);
                        xhttp.setRequestHeader("Content-Type", "application/json");
                        xhttp.send(json);
                    })];
            });
        });
    };
    AjaxController.sendObjectAsync = function (url, obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AjaxController.sendJsonAsync(url, JSON.stringify(obj))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AjaxController.sendFetchAsync = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhttp = _this.initialize(resolve, reject);
                        xhttp.responseType = "blob";
                        xhttp.withCredentials = false;
                        xhttp.open("GET", url);
                        xhttp.send();
                    })];
            });
        });
    };
    AjaxController.initialize = function (callback, errorCallback) {
        var xhttp = new XMLHttpRequest();
        xhttp.withCredentials = true;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    callback(this);
                }
                else {
                    errorCallback(this);
                }
            }
        };
        return xhttp;
    };
    return AjaxController;
}());
exports.AjaxController = AjaxController;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[664](0, __webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});