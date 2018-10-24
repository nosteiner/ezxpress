(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./AuthInterceptor.ts":
/*!****************************!*\
  !*** ./AuthInterceptor.ts ***!
  \****************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem("token");
        if (idToken) {
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/MotoBoy.ts":
/*!****************************!*\
  !*** ./src/app/MotoBoy.ts ***!
  \****************************/
/*! exports provided: MotoBoy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoBoy", function() { return MotoBoy; });
var MotoBoy = /** @class */ (function () {
    function MotoBoy() {
        this.active = true;
        this.rate = null;
        this.icon = "https://png.icons8.com/ios/40/3CBC32/cycling-road-filled.png";
    }
    return MotoBoy;
}());



/***/ }),

/***/ "./src/app/Order.ts":
/*!**************************!*\
  !*** ./src/app/Order.ts ***!
  \**************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-5 pt-5\">\r\n    <div class=\"col\">\r\n      <h1>Life is better on a bike</h1>\r\n      <p>\r\n        Speed - bicycles do not stop. No traffic jams, no traffic lights and many shortcuts.\r\n        Efficient and ecological - all deliveries are carried out without a drop of fuel, pollution or noise.\r\n        Economical and affordable - unlike motorcycles, there are no expenses for car wear, no insurance expenses and\r\n        no fuel expenses! Therefore, the prices for errands are much lower than usual.\r\n      </p>\r\n    </div>\r\n    <div class=\"col\">\r\n      <img src=\"https://i.giphy.com/media/3o84Ufy4oR2l0nSdEs/giphy.webp\" />\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/add-motoboy/add-motoboy.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-motoboy/add-motoboy.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n<div class = \"space1\"></div>\r\n<div class=\"motoboy-container\">\r\n\r\n    <h1>Register as a Motoboy</h1>\r\n\r\n  <mat-card>\r\n\r\n    <div class=\"row\">\r\n        <div class = \"space\"></div>\r\n  <mat-form-field>\r\n       <input matInput [(ngModel)]= motoboy.userName placeholder=\"User Name\">\r\n  </mat-form-field>\r\n  <div class = \"space\"></div>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]= motoboy.email placeholder=\"Email\">\r\n  </mat-form-field>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n      <div class = \"space\"></div>\r\n      <mat-form-field>\r\n        <input matInput [(ngModel)]= motoboy.firstName placeholder=\"First Name\">\r\n      </mat-form-field>\r\n      <div class = \"space\"></div>\r\n      <mat-form-field>\r\n        <input matInput [(ngModel)]= motoboy.lastName placeholder=\"Last Name\">\r\n      </mat-form-field>\r\n  </div>\r\n  <div class=\"row\">\r\n      <div class = \"space\"></div>\r\n      <mat-form-field>\r\n        <input matInput [(ngModel)]= motoboy.phoneNumber placeholder=\"Phone Number\">\r\n      </mat-form-field>\r\n      \r\n    </div>\r\n      <div class=\"row\">\r\n\r\n          <div class = \"space\"></div>\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Enter your password\" [type]=\"!hide ? 'password' : 'text'\">\r\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </mat-form-field>\r\n            <div class = \"space\"></div>\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]= motoboy.password placeholder=\"Confirm your password\" [type]=\"!hide ? 'password' : 'text'\">\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n      \r\n        </div>\r\n <div class=\"row\">\r\n    <div class = \"space\"></div>\r\n  <span> Add Photo</span>\r\n    <input classe=\" inputFile\" (change)=\"onPhotofile($event)\" type=\"file\">\r\n    </div>\r\n   <!-- <span>PhotoID</span>\r\n    <input classe=\" inputFile\" type=\"file\"> -->\r\n\r\n  <!-- <mat-form-field>\r\n    <input matInput [(ngModel)]= motoboy.photoId placeholder=\"Photo ID\">\r\n  </mat-form-field> -->\r\n\r\n  <div class=\"SubmitRow\">\r\n      <div class = \"space\"></div>\r\n      <div class = \"space\"></div>\r\n      <div class = \"space\"></div>\r\n  <button class=\"btn\" (click)='submitMotoBoy()' mat-raised-button color=\"accent\">Submit</button>\r\n  </div>\r\n</mat-card>\r\n</div>\r\n<div class = \"space1\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-motoboy/add-motoboy.component.scss":
/*!********************************************************!*\
  !*** ./src/app/add-motoboy/add-motoboy.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  flex-direction: row; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.motoboy-container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  padding-top: 2%;\n  padding-bottom: 2%; }\n\n.motoboy-container > * {\n  width: 90%; }\n\nspan {\n  color: #5f7a7a;\n  text-align: left;\n  padding-top: 1%;\n  padding-bottom: 1%; }\n\n.btn {\n  margin-top: 2%; }\n\n.space1 {\n  width: 30%; }\n\n.space {\n  width: 10%; }\n\nh1 {\n  text-align: center;\n  color: #3f51b5; }\n\n.SubmitRow {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/add-motoboy/add-motoboy.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-motoboy/add-motoboy.component.ts ***!
  \******************************************************/
/*! exports provided: AddMotoboyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMotoboyComponent", function() { return AddMotoboyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _MotoBoy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MotoBoy */ "./src/app/MotoBoy.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddMotoboyComponent = /** @class */ (function () {
    function AddMotoboyComponent(motoService, userService, authService) {
        this.motoService = motoService;
        this.userService = userService;
        this.authService = authService;
        this.selectPhoto = "";
        this.motoboy = new _MotoBoy__WEBPACK_IMPORTED_MODULE_2__["MotoBoy"]();
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    AddMotoboyComponent.prototype.onPhotofile = function (event) {
        this.selectPhoto = event.target.files[0];
        //this.motoService.uploadPhoto(this.selectPhoto)
    };
    AddMotoboyComponent.prototype.submitMotoBoy = function () {
        var _this = this;
        this.motoboy.photo = this.selectPhoto;
        this.motoService.addMotoBoy(this.motoboy);
        this.motoService.singleMotoObservable.subscribe(function (motoboy) {
            _this.authService.login({ username: motoboy.userName, password: motoboy.password });
        });
    };
    AddMotoboyComponent.prototype.ngOnInit = function () {
    };
    AddMotoboyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-motoboy',
            template: __webpack_require__(/*! ./add-motoboy.component.html */ "./src/app/add-motoboy/add-motoboy.component.html"),
            styles: [__webpack_require__(/*! ./add-motoboy.component.scss */ "./src/app/add-motoboy/add-motoboy.component.scss")]
        }),
        __metadata("design:paramtypes", [_moto_service__WEBPACK_IMPORTED_MODULE_1__["MotoService"], _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AddMotoboyComponent);
    return AddMotoboyComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _newclient_newclient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newclient/newclient.component */ "./src/app/newclient/newclient.component.ts");
/* harmony import */ var _add_motoboy_add_motoboy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-motoboy/add-motoboy.component */ "./src/app/add-motoboy/add-motoboy.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _edit_moto_edit_moto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-moto/edit-moto.component */ "./src/app/edit-moto/edit-moto.component.ts");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "./src/app/edit-customer/edit-customer.component.ts");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stars/stars.component */ "./src/app/stars/stars.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'add-customer', component: _newclient_newclient_component__WEBPACK_IMPORTED_MODULE_3__["NewclientComponent"] },
    { path: 'add-motoboy', component: _add_motoboy_add_motoboy_component__WEBPACK_IMPORTED_MODULE_4__["AddMotoboyComponent"] },
    { path: 'add-delivery', component: _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_5__["DeliveryComponent"] },
    { path: 'orders', component: _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'app-edit-moto', component: _edit_moto_edit_moto_component__WEBPACK_IMPORTED_MODULE_9__["EditMotoComponent"] },
    { path: 'app-edit-customer', component: _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_10__["EditCustomerComponent"] },
    { path: 'table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"] },
    { path: 'star', component: _stars_stars_component__WEBPACK_IMPORTED_MODULE_11__["StarsComponent"] },
    { path: 'aboutUs', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-menu></app-menu>\r\n<div class=\"app-container\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\n  height: 100vh !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'ezXpress';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.isLoggedIn();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/agm-direction.umd.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(agm_direction__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/index.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ezxpress_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ezxpress.service */ "./src/app/ezxpress.service.ts");
/* harmony import */ var _add_motoboy_add_motoboy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-motoboy/add-motoboy.component */ "./src/app/add-motoboy/add-motoboy.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _newclient_newclient_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./newclient/newclient.component */ "./src/app/newclient/newclient.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _destination_destination_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./destination/destination.component */ "./src/app/destination/destination.component.ts");
/* harmony import */ var _maproute_maproute_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./maproute/maproute.component */ "./src/app/maproute/maproute.component.ts");
/* harmony import */ var _moto_share_live_location_moto_share_live_location_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./moto-share-live-location/moto-share-live-location.component */ "./src/app/moto-share-live-location/moto-share-live-location.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./order-dialog/order-dialog.component */ "./src/app/order-dialog/order-dialog.component.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./orders.service */ "./src/app/orders.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signature_signature_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./signature/signature.component */ "./src/app/signature/signature.component.ts");
/* harmony import */ var _orderdelivered_orderdelivered_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./orderdelivered/orderdelivered.component */ "./src/app/orderdelivered/orderdelivered.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _edit_moto_edit_moto_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./edit-moto/edit-moto.component */ "./src/app/edit-moto/edit-moto.component.ts");
/* harmony import */ var _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./edit-customer/edit-customer.component */ "./src/app/edit-customer/edit-customer.component.ts");
/* harmony import */ var _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./order-screen/order-screen.component */ "./src/app/order-screen/order-screen.component.ts");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./stars/stars.component */ "./src/app/stars/stars.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/stepper/stepper.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _AuthInterceptor__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../AuthInterceptor */ "./AuthInterceptor.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _msgsnack_msgsnack_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./msgsnack/msgsnack.component */ "./src/app/msgsnack/msgsnack.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _add_motoboy_add_motoboy_component__WEBPACK_IMPORTED_MODULE_24__["AddMotoboyComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_25__["MapComponent"],
                _newclient_newclient_component__WEBPACK_IMPORTED_MODULE_26__["NewclientComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"],
                _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_28__["DeliveryComponent"],
                _destination_destination_component__WEBPACK_IMPORTED_MODULE_30__["DestinationComponent"],
                _maproute_maproute_component__WEBPACK_IMPORTED_MODULE_31__["MaprouteComponent"],
                _moto_share_live_location_moto_share_live_location_component__WEBPACK_IMPORTED_MODULE_32__["MotoShareLiveLocationComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_34__["TableComponent"],
                _order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_35__["OrderDialogComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_37__["ProfileComponent"],
                _signature_signature_component__WEBPACK_IMPORTED_MODULE_38__["SignatureComponent"],
                _orderdelivered_orderdelivered_component__WEBPACK_IMPORTED_MODULE_39__["OrderdeliveredComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_40__["LoginComponent"],
                _edit_moto_edit_moto_component__WEBPACK_IMPORTED_MODULE_41__["EditMotoComponent"],
                _edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_42__["EditCustomerComponent"],
                _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_43__["OrderScreenComponent"],
                _stars_stars_component__WEBPACK_IMPORTED_MODULE_44__["StarsComponent"],
                _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_46__["StepperComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_51__["MenuComponent"],
                _msgsnack_msgsnack_component__WEBPACK_IMPORTED_MODULE_52__["MsgsnackComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_53__["AboutUsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_54__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB-G0WodfAOEjuc9WcD0lC70UesBjzJG9g',
                    libraries: ["places"]
                }),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                agm_direction__WEBPACK_IMPORTED_MODULE_8__["AgmDirectionModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                FlexLayoutModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_10__["GooglePlaceModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                angular2_signaturepad__WEBPACK_IMPORTED_MODULE_18__["SignaturePadModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_45__["MatRadioModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_47__["MatStepperModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["IconsModule"]
            ],
            entryComponents: [_order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_35__["OrderDialogComponent"], _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_43__["OrderScreenComponent"]],
            providers: [_ezxpress_service__WEBPACK_IMPORTED_MODULE_23__["EzxpressService"], _moto_service__WEBPACK_IMPORTED_MODULE_29__["MotoService"], _orders_service__WEBPACK_IMPORTED_MODULE_36__["OrdersService"], _auth_service__WEBPACK_IMPORTED_MODULE_48__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_49__["JwtHelperService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _AuthInterceptor__WEBPACK_IMPORTED_MODULE_50__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moto.service */ "./src/app/moto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, router, customerService, motoService) {
        this.http = http;
        this.router = router;
        this.customerService = customerService;
        this.motoService = motoService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"];
        this.msgSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.msgUpdated = this.msgSubject.asObservable();
        this.authUpdated = this.authSubject.asObservable();
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        this.http.post('/login', user).subscribe(function (result) {
            localStorage.setItem('token', result.token);
            _this.isLoggedIn();
            _this.router.navigate(['']);
        }, function (err) {
            _this.msgSubject.next("Invalid user name or password");
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        this.http.get('/userDetails').subscribe(function (data) {
            _this.setUser(data);
        });
    };
    AuthService.prototype.logoff = function () {
        localStorage.removeItem('token');
        this.currentUser = null;
        this.authSubject.next(null);
        this.router.navigate(['']);
    };
    AuthService.prototype.setUser = function (user) {
        var _this = this;
        if (user.motoboyId === null) {
            this.customerService.singleCustomerObservable.subscribe(function (customer) {
                _this.currentUser = customer;
                _this.authSubject.next(customer);
            });
            this.customerService.getCustomer(user.customerId);
            this.userType = "customer";
        }
        else {
            this.motoService.singleMotoObservable.subscribe(function (motoboy) {
                _this.currentUser = motoboy;
                _this.authSubject.next(motoboy);
            });
            this.motoService.getMoto(user.motoboyId);
            this.userType = "motoboy";
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"], _moto_service__WEBPACK_IMPORTED_MODULE_6__["MotoService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer */ "./src/app/customer.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerService = /** @class */ (function () {
    function CustomerService(motoService, http, snackBar) {
        this.motoService = motoService;
        this.http = http;
        this.snackBar = snackBar;
        this.NewCustomer = new _customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        this.currentCustomer = new _customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
        this.singleCustomerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.singleCustomerObservable = this.singleCustomerSubject.asObservable();
    }
    CustomerService.prototype.getCustomers = function () {
        var _this = this;
        this.http.get('customersApi/').subscribe(function (data) {
            _this.customers = data;
        });
    };
    CustomerService.prototype.getCustomer = function (id) {
        var _this = this;
        this.http.get('customersApi/customer').subscribe(function (data) {
            _this.currentCustomer = data[0];
            _this.singleCustomerSubject.next(data[0]);
            console.log(_this.currentCustomer);
            console.log("a");
        });
    };
    CustomerService.prototype.addNewClient = function (newClient) {
        var _this = this;
        this.http.post('customersApi/add', newClient).subscribe(function (data) {
            _this.currentCustomer = data;
            _this.currentCustomer.userName = newClient.userName;
            _this.currentCustomer.password = newClient.password;
            _this.singleCustomerSubject.next(_this.currentCustomer);
            _this.snackBar.open("Sigup Succesful", " ", {
                duration: 2000,
            });
        });
    };
    CustomerService.prototype.updateUstomer = function (currentCustomer) {
        var _this = this;
        var id = currentCustomer.customerId;
        this.http.put('customersApi/update/' + id, { customer: currentCustomer }).subscribe(function (data) {
            _this.currentCustomer = data;
            _this.singleCustomerSubject.next(data);
        });
    };
    CustomerService.prototype.deleteCustomer = function (currentCustomer) {
        var _this = this;
        console.log("inside delete");
        var id = currentCustomer.customerId;
        currentCustomer.active = false;
        this.http.put('customersApi/delete/' + id, { customer: currentCustomer }).subscribe(function (data) {
            _this.currentCustomer = data;
            _this.singleCustomerSubject.next(data);
        });
    };
    CustomerService.prototype.reverseAddress = function (lat, lng) {
        this.motoService.reverseAddress(lat, lng);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_moto_service__WEBPACK_IMPORTED_MODULE_1__["MotoService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customer.ts":
/*!*****************************!*\
  !*** ./src/app/customer.ts ***!
  \*****************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/delivery/delivery.component.html":
/*!**************************************************!*\
  !*** ./src/app/delivery/delivery.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n \r\n  <div class=\"row\">\r\n    <div class=\"col-5\">\r\n      <h2> From </h2>\r\n      <mat-form-field>\r\n        <input matInput color=\"primary\" type='text' [(ngModel)]='order.localAddress' placeholder=\"Pickup Address\"\r\n          #search>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput color=\"primary\" type='text' [(ngModel)]='order.description' placeholder=\"Description\" #search>\r\n      </mat-form-field>\r\n      <br>\r\n      <h2> Destination </h2>\r\n      <app-destination></app-destination>\r\n    </div>\r\n\r\n    <div class=\"col-3\">\r\n      <mat-spinner id=\"spinner\" *ngIf='this.calcOrder == true' [color]=\"color\" [mode]=\"mode\" [value]=\"value\"></mat-spinner>\r\n      <div class=\"delivery-type\" *ngIf='this.calcOrder == false'>\r\n        \r\n        <h2> Delivery Type</h2>\r\n        <div id=\"labels\">\r\n          \r\n          <input type=\"radio\" class=\"radio_item\" id=\"radio1\" name=\"order.deliveryType\" [checked]=\"order.deliveryType === 'envelope'\"\r\n            (change)=\"setValue('envelope')\" value=\"envelope\" />\r\n          <label class=\"label_item\" for=\"radio1\">\r\n            <img src=\"https://www.editor.ru/wp-content/uploads/2015/07/par-avion-open.png\"> </label>\r\n          <p class=\"legendDelivery\">Up to 300gr</p>\r\n\r\n          <input type=\"radio\" class=\"radio_item\" id=\"radio2\" name=\"order.deliveryType\" [checked]=\"order.deliveryType === 'box'\"\r\n            (change)=\"setValue('box')\" value=\"box\" />\r\n          <label class=\"label_item\" for=\"radio2\">\r\n            <img src=\"http://pngimg.com/uploads/box/box_PNG139.png\"> </label>\r\n          <p class=\"legendDelivery1\">Up to 5Kg</p>\r\n\r\n        </div>\r\n\r\n        <button class=\"btn\" *ngIf=\"(this.order.deliveryType != undefined)\" (click)='calculateRate()' mat-raised-button\r\n          color=\"primary\">Calculate</button>\r\n      </div>\r\n      \r\n      <div id=\"price\" *ngIf=\"this.order.price > 0\">\r\n        <h2> Distance: {{ dist }} Km</h2>\r\n        <h2> Price : {{ order.price | currency:\"₪\"}}</h2>\r\n        <button class=\"btn\" (click)='confirmOrder()' mat-raised-button color=\"primary\">Confirm</button>\r\n        <button class=\"btn\" routerLink='/' mat-raised-button color=\"accent\">Cancel</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-4\">\r\n      <app-map [order]=\"order\"></app-map>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/delivery/delivery.component.scss":
/*!**************************************************!*\
  !*** ./src/app/delivery/delivery.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio_item {\n  display: none !important; }\n\n.label_item {\n  opacity: 0.3; }\n\n.radio_item:checked + label {\n  opacity: 1; }\n\nimg {\n  height: 70px;\n  width: 70px; }\n\n/* .container {\r\n  display: flex;\r\n  padding: 10px;\r\n}\r\nimg {\r\n    height: 70px;\r\n    width: 70px;\r\n}\r\n.order-container {\r\n    width: 400px;\r\n    margin-left:0px;\r\n    text-align: left;\r\n    \r\n}\r\n.legendDelivery{\r\n font-size: 12px;\r\n padding-left: 7px;\r\n}\r\n\r\n.mat-form-field.mat-form-field {\r\n    width: 350px;\r\n}\r\n\r\n.legendDelivery1{\r\n  font-size: 12px;\r\n  padding-left: 10px;\r\n  \r\n \r\n }\r\n\r\n .app-map{ flex: 1; }\r\n\r\n#minimumPrice{\r\n  font-style: italic;\r\n  font-size: 18px;\r\n}\r\n \r\n#spinner{\r\n  margin-left: 10px;\r\n} */\n\n/* label > input{  */\n\n/* HIDE RADIO */\n\n/* visibility: hidden;  */\n\n/* Makes input not-clickable */\n\n/* position: absolute;  */\n\n/* Remove input from document flow */\n\n/* }\r\n  label > input + img{ \r\n    cursor:pointer;\r\n    border:2px solid transparent;\r\n  }\r\n  label > input:checked + img{ \r\n    border:2px solid #E3C298;\r\n  }\r\n  h2{\r\n    color: #3f51b5;;\r\n  }\r\n  p{\r\n    color: #3f51b5;;\r\n  } */\n"

/***/ }),

/***/ "./src/app/delivery/delivery.component.ts":
/*!************************************************!*\
  !*** ./src/app/delivery/delivery.component.ts ***!
  \************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Order */ "./src/app/Order.ts");
/* harmony import */ var _maproute_maproute_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maproute/maproute.component */ "./src/app/maproute/maproute.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-dialog/order-dialog.component */ "./src/app/order-dialog/order-dialog.component.ts");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DeliveryComponent = /** @class */ (function () {
    function DeliveryComponent(orderService, motoService, mapsApiLoader, ngZone, dialog, authService) {
        var _this = this;
        this.orderService = orderService;
        this.motoService = motoService;
        this.mapsApiLoader = mapsApiLoader;
        this.ngZone = ngZone;
        this.dialog = dialog;
        this.authService = authService;
        this.calcOrder = false;
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.order = new _Order__WEBPACK_IMPORTED_MODULE_1__["Order"]();
        this.motoService.addressUpdated.subscribe(function (data) {
            _this.order.localAddress = data.localAddress;
            _this.order.latitudeOriginAddress = data.lat;
            _this.order.longitudeOriginAddress = data.lng;
        });
    }
    DeliveryComponent.prototype.setValue = function (value) {
        this.order.deliveryType = value;
    };
    DeliveryComponent.prototype.calculateRate = function () {
        var _this = this;
        this.calcOrder = true;
        var localAddress = new google.maps.LatLng(this.order.latitudeOriginAddress, this.order.longitudeDestAddress);
        var destAddress = new google.maps.LatLng(this.order.latitudeDestAddress, this.order.longitudeDestAddress);
        var travelway = google.maps.TravelMode.DRIVING;
        var directionsService = new google.maps.DirectionsService();
        var directionsRequest = {
            origin: localAddress,
            destination: destAddress,
            travelMode: travelway,
            avoidHighways: true
        };
        directionsService.route(directionsRequest, function (result, status) {
            _this.dist = result.routes[0].legs[0].distance.value / 1000;
            if (_this.order.deliveryType == "envelope")
                var multPrice = 5;
            else
                var multPrice = 7;
            if (_this.dist <= 4)
                _this.order.price = 20;
            else
                _this.order.price = (_this.dist) * multPrice;
            _this.calcOrder = false;
            //this.mapRoute.showRoutes(result)
        });
    };
    DeliveryComponent.prototype.confirmOrder = function () {
        var _this = this;
        this.order.orderDate = new Date();
        this.order.statusId = 1;
        this.orderService.addNewOrder(this.order);
        var dialogRef = this.dialog.open(_order_dialog_order_dialog_component__WEBPACK_IMPORTED_MODULE_6__["OrderDialogComponent"], {
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.motoService.getClosesMoto(_this.order.latitudeOriginAddress, _this.order.longitudeOriginAddress);
        });
    };
    DeliveryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsApiLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElement.nativeElement, { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log(place);
                    _this.order.localAddress = place.formatted_address;
                    _this.order.latitudeOriginAddress = place.geometry.location.lat();
                    _this.order.longitudeOriginAddress = place.geometry.location.lng();
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DeliveryComponent.prototype, "searchElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_maproute_maproute_component__WEBPACK_IMPORTED_MODULE_2__["MaprouteComponent"]),
        __metadata("design:type", _maproute_maproute_component__WEBPACK_IMPORTED_MODULE_2__["MaprouteComponent"])
    ], DeliveryComponent.prototype, "mapRoute", void 0);
    DeliveryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delivery',
            template: __webpack_require__(/*! ./delivery.component.html */ "./src/app/delivery/delivery.component.html"),
            styles: [__webpack_require__(/*! ./delivery.component.scss */ "./src/app/delivery/delivery.component.scss")]
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"], _moto_service__WEBPACK_IMPORTED_MODULE_7__["MotoService"],
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], DeliveryComponent);
    return DeliveryComponent;
}());



/***/ }),

/***/ "./src/app/destination/destination.component.html":
/*!********************************************************!*\
  !*** ./src/app/destination/destination.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\r\n  <input matInput [ngModel]=\"this.order.destAddress\" placeholder=\"Destination Address\" #searchDest>\r\n</mat-form-field>\r\n<br>\r\n<mat-form-field>\r\n<input matInput [(ngModel)]=\"this.order.contactDestination\" placeholder=\"Recipient's name\">\r\n</mat-form-field>\r\n<mat-form-field>\r\n  <input matInput [(ngModel)]=\"this.order.phoneDestination\" placeholder=\"Contact phone number\">\r\n  </mat-form-field>\r\n\r\n"

/***/ }),

/***/ "./src/app/destination/destination.component.scss":
/*!********************************************************!*\
  !*** ./src/app/destination/destination.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field.mat-form-field {\n  width: 350px; }\n"

/***/ }),

/***/ "./src/app/destination/destination.component.ts":
/*!******************************************************!*\
  !*** ./src/app/destination/destination.component.ts ***!
  \******************************************************/
/*! exports provided: DestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationComponent", function() { return DestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delivery/delivery.component */ "./src/app/delivery/delivery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DestinationComponent = /** @class */ (function () {
    function DestinationComponent(deliveryComponent, mapsApiLoader, ngZone) {
        this.deliveryComponent = deliveryComponent;
        this.mapsApiLoader = mapsApiLoader;
        this.ngZone = ngZone;
        this.order = this.deliveryComponent.order;
        console.log(this.order);
    }
    DestinationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsApiLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchDestElement.nativeElement, { types: ["address"] });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.order.destAddress = place.formatted_address;
                    _this.order.latitudeDestAddress = place.geometry.location.lat();
                    _this.order.longitudeDestAddress = place.geometry.location.lng();
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchDest'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DestinationComponent.prototype, "searchDestElement", void 0);
    DestinationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destination',
            template: __webpack_require__(/*! ./destination.component.html */ "./src/app/destination/destination.component.html"),
            styles: [__webpack_require__(/*! ./destination.component.scss */ "./src/app/destination/destination.component.scss")]
        }),
        __metadata("design:paramtypes", [_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_2__["DeliveryComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DestinationComponent);
    return DestinationComponent;
}());



/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.html":
/*!************************************************************!*\
  !*** ./src/app/edit-customer/edit-customer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"space1\"></div>\r\n  \r\n    <div class=\"client-container\">\r\n        <h1><mat-icon>edit</mat-icon>Edit your profile</h1>\r\n  \r\n      <mat-card>\r\n        <div class=\"row\">\r\n            <mat-form-field>\r\n                <input matInput [(ngModel)]=editedClient.firstName placeholder=\"First Name\">\r\n              </mat-form-field>\r\n          <div class=\"space\"></div>\r\n          <mat-form-field>\r\n              <input matInput [(ngModel)]=editedClient.lastName placeholder=\"Last Name\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"space\"></div>\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=editedClient.email placeholder=\"Email\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"row\">\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=editedClient.phoneNumber placeholder=\"Phone Number\">\r\n          </mat-form-field>\r\n          <div class=\"space\"></div>\r\n          <mat-form-field>\r\n            <input matInput [(ngModel)]=editedClient.address placeholder=\"Address\">\r\n          </mat-form-field>\r\n        </div>\r\n \r\n  \r\n        <div class=\"SubmitRow\">\r\n            <button class=\"btn\" (click)='submitEdit()' mat-raised-button color=\"accent\">Save changes</button>        </div>\r\n  \r\n    </mat-card>\r\n  </div>\r\n  \r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/edit-customer/edit-customer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  flex-direction: row; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.motoboy-container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  padding-top: 2%;\n  padding-bottom: 2%; }\n\n.motoboy-container > * {\n  width: 100%; }\n\nspan {\n  color: #5f7a7a;\n  text-align: left;\n  padding-top: 1%;\n  padding-bottom: 1%; }\n\n.btn {\n  margin-top: 2%; }\n\n.space1 {\n  width: 30%; }\n\n.space {\n  width: 10%; }\n\nh1 {\n  text-align: center;\n  color: #3f51b5; }\n\n.SubmitRow {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/edit-customer/edit-customer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-customer/edit-customer.component.ts ***!
  \**********************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer */ "./src/app/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCustomerComponent = /** @class */ (function () {
    function EditCustomerComponent(customerService, userService) {
        this.customerService = customerService;
        this.userService = userService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.editedClient = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
        this.password = '';
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.singleCustomerObservable.subscribe(function (data) {
            _this.editedClient = data;
            console.log(_this.editedClient);
        });
        this.customerService.getCustomer(2);
    };
    EditCustomerComponent.prototype.submitEdit = function () {
        this.customerService.addNewClient(this.editedClient);
        this.userService.addNewClient(this.user);
    };
    EditCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-customer',
            template: __webpack_require__(/*! ./edit-customer.component.html */ "./src/app/edit-customer/edit-customer.component.html"),
            styles: [__webpack_require__(/*! ./edit-customer.component.scss */ "./src/app/edit-customer/edit-customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}());



/***/ }),

/***/ "./src/app/edit-moto/edit-moto.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-moto/edit-moto.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"space1\"></div>\r\n  <div class=\"motoboy-container\">\r\n\r\n    <h1>\r\n      <mat-icon>edit</mat-icon>Edit your profile</h1>\r\n\r\n    <mat-card>\r\n\r\n      <div class=\"row\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=m otoboy.firstName placeholder=\"First Name\">\r\n        </mat-form-field>\r\n        <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=m otoboy.lastName placeholder=\"Last Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=m otoboy.phoneNumber placeholder=\"Phone Number\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=m otoboy.email placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"space\"></div>\r\n      <span> Add Photo</span>\r\n      <input classe=\" inputFile\" (change)=\"onPhotofile($event)\" type=\"file\">\r\n\r\n      <!-- <span>PhotoID</span>\r\n        <input classe=\" inputFile\" type=\"file\"> -->\r\n\r\n      <!-- <mat-form-field>\r\n        <input matInput [(ngModel)]= motoboy.photoId placeholder=\"Photo ID\">\r\n      </mat-form-field> -->\r\n\r\n      <div class=\"SubmitRow\">\r\n        <div class=\"space\"></div>\r\n        <div class=\"space\"></div>\r\n        <div class=\"space\"></div>\r\n        <button class=\"btn\" (click)='submitEdit()' mat-raised-button color=\"accent\">Save changes</button>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"space1\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/edit-moto/edit-moto.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-moto/edit-moto.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  flex-direction: row; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.motoboy-container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  padding-top: 2%;\n  padding-bottom: 2%; }\n\n.motoboy-container > * {\n  width: 100%; }\n\nspan {\n  color: #5f7a7a;\n  text-align: left;\n  padding-top: 1%;\n  padding-bottom: 1%; }\n\n.btn {\n  margin-top: 2%; }\n\n.space1 {\n  width: 30%; }\n\n.space {\n  width: 10%; }\n\nh1 {\n  text-align: center;\n  color: #3f51b5; }\n\n.SubmitRow {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/edit-moto/edit-moto.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-moto/edit-moto.component.ts ***!
  \**************************************************/
/*! exports provided: EditMotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMotoComponent", function() { return EditMotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _MotoBoy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MotoBoy */ "./src/app/MotoBoy.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditMotoComponent = /** @class */ (function () {
    function EditMotoComponent(motoService, userService) {
        this.motoService = motoService;
        this.userService = userService;
        this.motoboy = new _MotoBoy__WEBPACK_IMPORTED_MODULE_2__["MotoBoy"]();
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.password = '';
    }
    EditMotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.motoService.singleMotoObservable.subscribe(function (data) {
            _this.motoboy = data;
            console.log(_this.motoboy);
        });
        this.motoService.getMoto(1);
    };
    EditMotoComponent.prototype.submitEdit = function () {
        if (this.password == this.user.password) {
            this.motoService.updateMotoBoy(this.motoboy);
            //addd edit password&userName
            this.userService.addNewClient(this.user);
        }
        else {
            alert('password does not match');
        }
    };
    EditMotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-moto',
            template: __webpack_require__(/*! ./edit-moto.component.html */ "./src/app/edit-moto/edit-moto.component.html"),
            styles: [__webpack_require__(/*! ./edit-moto.component.scss */ "./src/app/edit-moto/edit-moto.component.scss")]
        }),
        __metadata("design:paramtypes", [_moto_service__WEBPACK_IMPORTED_MODULE_1__["MotoService"], _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], EditMotoComponent);
    return EditMotoComponent;
}());



/***/ }),

/***/ "./src/app/ezxpress.service.ts":
/*!*************************************!*\
  !*** ./src/app/ezxpress.service.ts ***!
  \*************************************/
/*! exports provided: EzxpressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EzxpressService", function() { return EzxpressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EzxpressService = /** @class */ (function () {
    function EzxpressService(http) {
        this.http = http;
        this.motoBoy = [];
        this.client = [];
        this.order = [];
    }
    EzxpressService.prototype.getMotoBoy = function () {
        return this.motoBoy;
    };
    EzxpressService.prototype.addMotoBoy = function (motoboy) {
        this.motoBoy.push(motoboy);
    };
    EzxpressService.prototype.addNewOrder = function (order) {
        this.http.post('ordersApi/add', order).subscribe(function (data) {
        });
    };
    EzxpressService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EzxpressService);
    return EzxpressService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<footer class=\"page-footer font-small teal pt-4\">\r\n  <!-- Footer Text -->\r\n  <div class=\"container-fluid text-center text-md-left\">\r\n\r\n    <!-- Grid row -->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-6 mt-md-0 mt-3\">\r\n\r\n        <!-- Content -->\r\n        <h5 class=\"text-uppercase font-weight-bold\">Footer text 1</h5>\r\n        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae\r\n          commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae harum esse fugiat.\r\n          Itaque, culpa?</p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <hr class=\"clearfix w-100 d-md-none pb-3\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-6 mb-md-0 mb-3\">\r\n\r\n        <!-- Content -->\r\n        <h5 class=\"text-uppercase font-weight-bold\">Footer text 2</h5>\r\n        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum commodi\r\n          aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id excepturi hic.</p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row -->\r\n\r\n  </div>\r\n  <!-- Footer Text -->\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"footer-copyright p-3\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        © 2018 Copyright: <a class=\"align-middle\" href=\"http://www.noamsteiner.com/\"> Noam Steiner</a>\r\n      </div>\r\n \r\n      <!-- Grid column -->\r\n      <div class=\"col-md-2\">\r\n        <a href=\"mailto:no.steiner@gmail.com\">Contact us</a> | <a href=\"mailto:no.steiner@gmail.com\">Careers</a>\r\n      </div>\r\n\r\n      <div class=\"col-md-1\">\r\n        <a class=\"fb-ic\" href=\"https://github.com/nosteiner/ezxpress\">\r\n          <mdb-icon icon=\"github\" size=\"2x\" class=\"white-text\"></mdb-icon>\r\n        </a>\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"view intro-2 rgba-gradient\">\r\n    <div class=\"full-bg-img\">\r\n        <div class=\"container flex-center\">\r\n            <div class=\"row flex-center pt-5 mt-3\">\r\n                <div class=\"col-md-6 text-center text-md-left margins\">\r\n                    <div class=\"white-text\">\r\n                        <h1 class=\"h1-responsive\">Make purchases with our app </h1>\r\n                        <h6>Lorem ipsum dolor sit amet, consectetur\r\n                            adipisicing\r\n                            elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat!\r\n                            Commodi sequi\r\n                            non animi ea dolor molestiae iste.</h6>\r\n                        <br>\r\n                        <a class=\"btn btn-outline-white\">Learn more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-header {\n  height: unset !important; }\n\n.intro-2 {\n  background: url(\"https://ksr-ugc.imgix.net/assets/015/781/101/9bfd0b23738429e5645c9b865d84cded_original.png?ixlib=rb-1.1.0&crop=faces&w=1552&h=873&fit=crop&v=1489536055&auto=format&frame=1&q=92&s=2db5e22eba467d03a0a3df15caa9ca27\") no-repeat center center;\n  background-size: cover; }\n\n.view {\n  height: 100vh !important; }\n\n.btn .fa {\n  margin-left: 3px; }\n\nh6 {\n  line-height: 1.7; }\n\n.rgba-gradient .full-bg-img {\n  background: linear-gradient(45deg, rgba(207, 250, 15, 0.384), rgba(0, 195, 255, 0.384) 100%);\n  height: 100vh !important; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.myImage = "./../../img/expressdelivery.jpg";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-lg-center mt-5 pt-5\">\r\n    <div class=\"col-12 col-md-auto\">\r\n      <div class=\"text-center border border-light mt-3 p-5\">\r\n\r\n        <p class=\"h4 mb-4\">Sign in</p>\r\n        \r\n        <input type=\"text\" class=\"form-control mb-4\" [(ngModel)]=\"userName\" placeholder=\"User name\">\r\n\r\n        <div class=\"input-group\">\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\">\r\n          <div class=\"input-group-append\">\r\n            <span class=\"input-group-text\">\r\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <p *ngIf=\"msg ==='Invalid user name or password'\" class=\"msg\">\r\n          <mat-icon>warning</mat-icon>\r\n          {{ msg }}\r\n        </p>\r\n\r\n\r\n        <button mdbBtn type=\"button\" color=\"mdb-color\" class=\"waves-light m-4\" mdbWavesEffect (click)=\"login()\">Login</button>\r\n        <p class=\"blue-grey-text\">Don't have an account? <a class=\"font-weight-bold\" (click)=\"signup()\">Sign up</a>\r\n        </p>\r\n\r\n        <div class=\"row justify-content-md-center\" *ngIf=\"toogle==1\">\r\n          <button mdbBtn type=\"button\" color=\"default\" outline=\"true\" mdbWavesEffect routerLink=\"/add-motoboy\">New\r\n            Delivery Person</button>\r\n          <button mdbBtn type=\"button\" color=\"default\" outline=\"true\" mdbWavesEffect routerLink=\"/add-customer\">New\r\n            Customer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, customerService, dialog, router, authService) {
        this.usersService = usersService;
        this.customerService = customerService;
        this.dialog = dialog;
        this.router = router;
        this.authService = authService;
        this.tokenid = { token: '' };
        this.hide = true;
        this.userName = '';
        this.password = '';
        this.toogle = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.msgUpdated.subscribe(function (data) {
            _this.msg = data;
        });
    };
    LoginComponent.prototype.login = function () {
        this.loginParms = { username: this.userName, password: this.password };
        this.authService.login(this.loginParms);
    };
    LoginComponent.prototype.signup = function () {
        if (this.toogle == 1) {
            this.toogle = 0;
        }
        if (this.toogle == 0) {
            this.toogle = 1;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div>\r\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\">  \r\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n      <agm-direction [origin]=\"origin\" [destination]=\"destination\" [travelMode]=\"travelMode\">\r\n      </agm-direction>\r\n      <!-- <agm-marker class=\"mapMarker\" *ngFor=\"let motoBoy of motoBoys\" [latitude]=\"motoBoy.latitude\" [longitude]=\"motoBoy.longitude\"\r\n        [iconUrl]='\"https://png.icons8.com/ios/40/3CBC32/cycling-road-filled.png\"'>\r\n      </agm-marker> -->\r\n    </agm-map>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100vh;\n  width: 100vh; }\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Order */ "./src/app/Order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(motoService) {
        this.motoService = motoService;
        this.order = new _Order__WEBPACK_IMPORTED_MODULE_2__["Order"];
        this.origin = { lat: 0, lng: 0 };
        this.destination = { lat: 0, lng: 0 };
        this.travelMode = "WALKING";
    }
    MapComponent.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.origin = { lat: _this.order.latitudeOriginAddress, lng: _this.order.longitudeOriginAddress };
                //this.destination = { lat: this.order.latitudeDestAddress, lng: this.order.longitudeDestAddress }
                _this.motoService.reverseAddress(_this.lat, _this.lng);
            });
        }
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserLocation();
        setInterval(function () {
            if (_this.order.latitudeOriginAddress != undefined && (_this.order.latitudeDestAddress != undefined)) {
                _this.origin = { lat: _this.order.latitudeOriginAddress, lng: _this.order.longitudeOriginAddress };
                _this.destination = { lat: _this.order.latitudeDestAddress, lng: _this.order.longitudeDestAddress };
            }
        }, 4000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Order__WEBPACK_IMPORTED_MODULE_2__["Order"])
    ], MapComponent.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapDiv'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapComponent.prototype, "mapDiv", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_moto_service__WEBPACK_IMPORTED_MODULE_1__["MotoService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/maproute/maproute.component.html":
/*!**************************************************!*\
  !*** ./src/app/maproute/maproute.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  id=\"mapDiv\">\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/maproute/maproute.component.scss":
/*!**************************************************!*\
  !*** ./src/app/maproute/maproute.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mapDiv {\n  height: 650px;\n  z-index: 1000; }\n"

/***/ }),

/***/ "./src/app/maproute/maproute.component.ts":
/*!************************************************!*\
  !*** ./src/app/maproute/maproute.component.ts ***!
  \************************************************/
/*! exports provided: MaprouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaprouteComponent", function() { return MaprouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaprouteComponent = /** @class */ (function () {
    //@ViewChild('mapDiv') mapDiv: ElementRef;
    //map: google.maps.Map;
    function MaprouteComponent() {
    }
    MaprouteComponent.prototype.showRoutes = function (result) {
        var lat = 32.0503025, lng = 34.76668559999996;
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var centerMap = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            zoom: 12,
            center: centerMap
        };
        var map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
        directionsDisplay.setMap(map);
        directionsDisplay.setDirections(result);
    };
    MaprouteComponent.prototype.ngOnInit = function () {
    };
    MaprouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maproute',
            template: __webpack_require__(/*! ./maproute.component.html */ "./src/app/maproute/maproute.component.html"),
            styles: [__webpack_require__(/*! ./maproute.component.scss */ "./src/app/maproute/maproute.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MaprouteComponent);
    return MaprouteComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar intro-fixed-nav\"\r\n    [containerInside]=\"false\">\r\n    <mdb-navbar-brand>\r\n        <a class=\"logo navbar-brand font-weight-bold\" routerLink=\"\"> <strong>ezXpress</strong> </a>\r\n    </mdb-navbar-brand>\r\n    <links>\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                <a class=\"nav-link\" routerLink=\"\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                <a class=\"nav-link\" routerLink=\"/aboutUs\">About</a>\r\n            </li>\r\n            <li class=\"nav-item waves-light\" *ngIf=\"userType\" mdbWavesEffect>\r\n                <a class=\"nav-link\" routerLink=\"/profile\">My Profile</a>\r\n            </li>\r\n            <li class=\"nav-item waves-light\" mdbWavesEffect>\r\n                <a class=\"nav-link\" routerLink=\"/table\">\r\n                    <span *ngIf=\"userType === 'customer'\"> My orders</span>\r\n                    <span *ngIf=\"userType === 'motoboy'\"> Open orders</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item waves-light\" *ngIf=\"userType === 'customer'\" mdbWavesEffect>\r\n                <a class=\"nav-link\" routerLink=\"/add-delivery\">Express Delivery</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <span class=\"navbar-text white-text\" *ngIf='currentUser != null'>\r\n            You are connected as\r\n            <b>{{currentUser.firstName}}\r\n                {{currentUser.lastName}}</b>\r\n        </span>\r\n        <form class=\"form-inline\">\r\n            <form class=\"form-inline\">\r\n                <button mdbBtn type=\"button\" color=\"mdb-color\" class=\"waves-light\" *ngIf='currentUser == null' routerLink=\"/login\"\r\n                    mdbWavesEffect> Signin/Signup</button>\r\n                <button mdbBtn type=\"button\" color=\"mdb-color\" class=\"waves-light\" (click)=\"this.authService.logoff()\"\r\n                    *ngIf='currentUser != null'>Logout</button>\r\n            </form>\r\n        </form>\r\n\r\n    </links>\r\n\r\n</mdb-navbar>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 2em;\n  font-weight: bold;\n  margin-top: 0%; }\n\n.head {\n  font-family: 'Dosis', sans-serif;\n  text-align: center;\n  letter-spacing: 5px;\n  width: 100%;\n  height: 100%; }\n\n.menu {\n  text-align: left; }\n\n.white-icon {\n  color: white; }\n\n.app-user-connected {\n  padding-left: 40px;\n  padding-top: 3px; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(authService) {
        this.authService = authService;
        this.currentUser = new _user__WEBPACK_IMPORTED_MODULE_2__["User"];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("menu");
        this.currentUser = this.authService.currentUser;
        this.authService.authUpdated.subscribe(function (user) {
            _this.currentUser = user;
            _this.userType = _this.authService.userType;
            if (user === null) {
                _this.userType = null;
            }
            console.log(_this.currentUser);
            console.log(_this.userType);
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/moto-share-live-location/moto-share-live-location.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/moto-share-live-location/moto-share-live-location.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Please Enter your e-mail to share live location</h1>\r\n  <div class=\"form\">\r\n    <mat-form-field>\r\n      <input matInput [(ngModel)]=\"currentMotoId\" placeholder=\"your id\">\r\n    </mat-form-field>\r\n    <button mat-button (click)=\"submit()\">SHARE LIVE LOCATION</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/moto-share-live-location/moto-share-live-location.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/moto-share-live-location/moto-share-live-location.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/moto-share-live-location/moto-share-live-location.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/moto-share-live-location/moto-share-live-location.component.ts ***!
  \********************************************************************************/
/*! exports provided: MotoShareLiveLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoShareLiveLocationComponent", function() { return MotoShareLiveLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../moto.service */ "./src/app/moto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotoShareLiveLocationComponent = /** @class */ (function () {
    function MotoShareLiveLocationComponent(motoService) {
        this.motoService = motoService;
    }
    MotoShareLiveLocationComponent.prototype.ngOnInit = function () {
    };
    MotoShareLiveLocationComponent.prototype.submit = function () {
        console.log(this.currentMotoId);
        this.motoService.shareLiveLocation(this.currentMotoId);
    };
    MotoShareLiveLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moto-share-live-location',
            template: __webpack_require__(/*! ./moto-share-live-location.component.html */ "./src/app/moto-share-live-location/moto-share-live-location.component.html"),
            styles: [__webpack_require__(/*! ./moto-share-live-location.component.scss */ "./src/app/moto-share-live-location/moto-share-live-location.component.scss")]
        }),
        __metadata("design:paramtypes", [_moto_service__WEBPACK_IMPORTED_MODULE_1__["MotoService"]])
    ], MotoShareLiveLocationComponent);
    return MotoShareLiveLocationComponent;
}());



/***/ }),

/***/ "./src/app/moto.service.ts":
/*!*********************************!*\
  !*** ./src/app/moto.service.ts ***!
  \*********************************/
/*! exports provided: MotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoService", function() { return MotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _MotoBoy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MotoBoy */ "./src/app/MotoBoy.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MotoService = /** @class */ (function () {
    function MotoService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.motoBoys = [];
        this.currentMotoBoy = new _MotoBoy__WEBPACK_IMPORTED_MODULE_2__["MotoBoy"]();
        this.formData = new FormData();
        this.allMotoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.singleMotoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.singleMotoObservable = this.singleMotoSubject.asObservable();
        this.allMotoObservable = this.allMotoSubject.asObservable();
        this.getAllMoto();
        this.addressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.addressUpdated = this.addressSubject.asObservable();
    }
    MotoService.prototype.getAllMoto = function () {
        var _this = this;
        this.http.get('motoboysApi/').subscribe(function (data) {
            _this.motoBoys = data;
            _this.allMotoSubject.next(_this.motoBoys);
        });
    };
    MotoService.prototype.getMoto = function (id) {
        var _this = this;
        this.http.get('motoboysApi/' + id).subscribe(function (data) {
            _this.currentMotoBoy = data[0];
            _this.singleMotoSubject.next(data[0]);
            console.log(_this.currentMotoBoy);
        });
    };
    MotoService.prototype.shareLiveLocation = function (id) {
        // this.singleMotoObservable.subscribe(() => {
        //   setInterval(this.getMotoCurrentLocation(), 5000);
        // })
        this.getMoto(id);
    };
    MotoService.prototype.updateMotoBoy = function (currentMotoBoy) {
        var _this = this;
        var id = currentMotoBoy.motoboyId;
        this.http.put('motoboysApi/update/' + id, { motoboy: currentMotoBoy }).subscribe(function (data) {
            //update motoboys array
            _this.currentMotoBoy = data;
            _this.singleMotoSubject.next(data);
        });
    };
    MotoService.prototype.unActivatMotoboy = function (currentMotoBoy) {
        currentMotoBoy.active = false;
        this.updateMotoBoy(currentMotoBoy);
    };
    MotoService.prototype.getMotoCurrentLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.currentMotoBoy.latitude = position.coords.latitude;
                _this.currentMotoBoy.longitude = position.coords.longitude;
                _this.currentMotoBoy.position = {
                    type: 'Point',
                    coordinates: [_this.currentMotoBoy.longitude, _this.currentMotoBoy.latitude]
                };
                _this.reverseAddress(_this.currentMotoBoy.latitude, _this.currentMotoBoy.longitude);
                _this.updateMotoBoy(_this.currentMotoBoy);
            });
        }
    };
    MotoService.prototype.reverseAddress = function (lat, lng) {
        var _this = this;
        var geocoder = new google.maps.Geocoder;
        var latlng = { lat: lat, lng: lng };
        geocoder.geocode({ "location": latlng }, function (results, status) {
            _this.localAddress = results[0].formatted_address;
            console.log(_this.localAddress);
            _this.addressSubject.next({ localAddress: _this.localAddress, lat: lat, lng: lng });
        });
    };
    MotoService.prototype.addMotoBoy = function (motoboy) {
        var _this = this;
        var photo = motoboy.photo;
        motoboy.photo = " ";
        this.http.post('motoboysApi/add', motoboy).subscribe(function (data) {
            _this.currentMotoBoy = data;
            _this.currentMotoBoy.userName = motoboy.userName;
            _this.currentMotoBoy.password = motoboy.password;
            _this.uploadPhoto(photo);
            _this.snackBar.open("Sigup Succesful", " ", {
                duration: 2000,
            });
            _this.singleMotoSubject.next(data);
        });
    };
    MotoService.prototype.getClosesMoto = function (lat, lng) {
        var count = 0;
        for (var i = 0; i < this.motoBoys.length; i++) {
            var distance = this.getDistanceFromLatLonInKm(lat, lng, this.motoBoys[i].latitude, this.motoBoys[i].longitude);
            if (distance <= 1) {
            }
        }
    };
    // Fucntions to Calculate a distance between 2 points =====>
    MotoService.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    MotoService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    /// ================>
    MotoService.prototype.uploadPhoto = function (photoFile) {
        var photoFileName = this.currentMotoBoy.motoboyId + '.png';
        this.formData.append("uploads", photoFile, photoFileName);
        this.http.post('uploadPhoto', this.formData).subscribe(function (data) {
        });
    };
    MotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], MotoService);
    return MotoService;
}());



/***/ }),

/***/ "./src/app/msgsnack/msgsnack.component.html":
/*!**************************************************!*\
  !*** ./src/app/msgsnack/msgsnack.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p id=\"msg\">\r\n  SignUp Successful !!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/msgsnack/msgsnack.component.scss":
/*!**************************************************!*\
  !*** ./src/app/msgsnack/msgsnack.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#msg {\n  color: orangered; }\n"

/***/ }),

/***/ "./src/app/msgsnack/msgsnack.component.ts":
/*!************************************************!*\
  !*** ./src/app/msgsnack/msgsnack.component.ts ***!
  \************************************************/
/*! exports provided: MsgsnackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgsnackComponent", function() { return MsgsnackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgsnackComponent = /** @class */ (function () {
    function MsgsnackComponent(snackBar) {
        this.snackBar = snackBar;
    }
    MsgsnackComponent_1 = MsgsnackComponent;
    MsgsnackComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.openFromComponent(MsgsnackComponent_1, {
            duration: 500,
        });
    };
    MsgsnackComponent.prototype.ngOnInit = function () {
    };
    MsgsnackComponent = MsgsnackComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-msgsnack',
            template: __webpack_require__(/*! ./msgsnack.component.html */ "./src/app/msgsnack/msgsnack.component.html"),
            styles: [__webpack_require__(/*! ./msgsnack.component.scss */ "./src/app/msgsnack/msgsnack.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], MsgsnackComponent);
    return MsgsnackComponent;
    var MsgsnackComponent_1;
}());



/***/ }),

/***/ "./src/app/newclient/newclient.component.html":
/*!****************************************************!*\
  !*** ./src/app/newclient/newclient.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"space1\"></div>\r\n\r\n  <div class=\"client-container\">\r\n    <h1>Register as a New customer</h1>\r\n\r\n    <mat-card>\r\n      <div class=\"row\">\r\n          <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=newClient.userName placeholder=\"User Name\">\r\n        </mat-form-field>\r\n        <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=newClient.firstName placeholder=\"First Name\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=newClient.lastName placeholder=\"Last Name\">\r\n        </mat-form-field>\r\n        <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=newClient.email placeholder=\"Email\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=newClient.phoneNumber placeholder=\"Phone Number\">\r\n        </mat-form-field>\r\n        <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=newClient.address placeholder=\"Address\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n          <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=password placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n        <div class=\"space\"></div>\r\n        <mat-form-field>\r\n          <input matInput [(ngModel)]=newClient.password placeholder=\"Confirm your password\" [type]=\"hide ? 'password' : 'text'\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n      <div class=\"SubmitRow\">\r\n          <div class=\"space\"></div>\r\n      <button class=\"btn\" (click)='submitNewClient()' mat-raised-button color=\"accent\">Submit</button>\r\n      </div>\r\n\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/newclient/newclient.component.scss":
/*!****************************************************!*\
  !*** ./src/app/newclient/newclient.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  flex-direction: row; }\n\n.row {\n  display: flex;\n  flex-direction: row; }\n\n.client-container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  padding-top: 2%;\n  padding-bottom: 2%; }\n\n.client-container > * {\n  width: 90%; }\n\nspan {\n  color: #5f7a7a;\n  text-align: left;\n  padding-top: 1%;\n  padding-bottom: 1%; }\n\n.btn {\n  margin-top: 2%; }\n\n.space1 {\n  width: 30%; }\n\n.space {\n  width: 15%; }\n\nh1 {\n  text-align: center;\n  color: #3f51b5; }\n\n.btn {\n  width: 90%; }\n\nSubmitRow {\n  width: 90%; }\n\n.row {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/newclient/newclient.component.ts":
/*!**************************************************!*\
  !*** ./src/app/newclient/newclient.component.ts ***!
  \**************************************************/
/*! exports provided: MyErrorStateMatcher, NewclientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewclientComponent", function() { return NewclientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer */ "./src/app/customer.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var NewclientComponent = /** @class */ (function () {
    function NewclientComponent(customerService, userService, authService) {
        this.customerService = customerService;
        this.userService = userService;
        this.authService = authService;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.newClient = new _customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
        this.hide = true;
        this.userName = '';
        this.password = '';
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    NewclientComponent.prototype.submitNewClient = function () {
        var _this = this;
        console.log("kkkgfgfgdfgfd" + this.newClient);
        if (this.password == this.newClient.password) {
            this.customerService.addNewClient(this.newClient);
            //this.userService.addNewClient(this.user);
            this.customerService.singleCustomerObservable.subscribe(function (user) {
                _this.authService.login({ username: user.userName, password: user.password });
            });
        }
        else {
            alert('password  does not match');
        }
    };
    NewclientComponent.prototype.ngOnInit = function () {
    };
    NewclientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newclient',
            template: __webpack_require__(/*! ./newclient.component.html */ "./src/app/newclient/newclient.component.html"),
            styles: [__webpack_require__(/*! ./newclient.component.scss */ "./src/app/newclient/newclient.component.scss")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], NewclientComponent);
    return NewclientComponent;
}());



/***/ }),

/***/ "./src/app/order-dialog/order-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-dialog/order-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Thanks for your Order </h2>\r\n<p>  The system is processing it and very soon will receive your confirmation</p>\r\n\r\n\r\n<p>You can track the order status on    <button mat-raised-button color=\"accent\" routerLink=\"/table\" (click)='this.dialogRef.close()' >My orders</button> </p>\r\n<p> You will receive an SMS when a Motoboy will be on his way to  pick up</p>\r\n<button routerLink='/' (click)='this.dialogRef.close()'> Close </button> "

/***/ }),

/***/ "./src/app/order-dialog/order-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/order-dialog/order-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-dialog/order-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-dialog/order-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: OrderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDialogComponent", function() { return OrderDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var OrderDialogComponent = /** @class */ (function () {
    function OrderDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    OrderDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    OrderDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-dialog',
            template: __webpack_require__(/*! ./order-dialog.component.html */ "./src/app/order-dialog/order-dialog.component.html"),
            styles: [__webpack_require__(/*! ./order-dialog.component.scss */ "./src/app/order-dialog/order-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], OrderDialogComponent);
    return OrderDialogComponent;
}());



/***/ }),

/***/ "./src/app/order-screen/order-screen.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-screen/order-screen.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <mat-dialog-content>\r\n\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <h2 id=\"container\" style=\"color: indigo\">Order no: {{order.orderId}}</h2>\r\n            </mat-card-header>\r\n\r\n            <mat-card-content>\r\n                <label>Order date:\r\n                    <span> {{order.orderDate}}</span>\r\n                </label>\r\n\r\n                <label>Customer:\r\n                    <span> {{order.customer.firstName}} {{order.customer.lastName}}</span>\r\n                </label>\r\n\r\n                <label *ngIf=\"order.motoboyId\">First name motoboy:\r\n                    <span> {{order.motoboy.firstName}}</span>\r\n                </label>\r\n\r\n                <label>Destination Address:\r\n                    <span> {{order.destAddress}}</span>\r\n                </label>\r\n\r\n                <label>Description:\r\n                    <span> {{order.description}}</span>\r\n                </label>\r\n\r\n                <label>Price:\r\n                    <span> {{order.price}}₪</span>\r\n                </label>\r\n\r\n\r\n            </mat-card-content>\r\n\r\n<span *ngIf=\"u\">userType == \"motoboy\"\r\n            <button mat-raised-button class=\"w3-theme\" *ngIf=\"order.statusId == 2\" (click)=\"handleChangeStatus(3)\">pickedup order</button>\r\n            <button mat-raised-button class=\"w3-theme\" *ngIf=\"order.statusId == 3\" (click)=\"handleChangeStatus(4)\">order deliverd</button>\r\n        </span>\r\n        </mat-card>\r\n    </mat-dialog-content>\r\n\r\n    <app-stepper [order]=\"order\" [userType]=\"userType\"></app-stepper>\r\n    <mat-dialog-actions>\r\n        <button mat-raised-button class=\"w3-theme\" (click)=\"close()\">Close</button>\r\n    </mat-dialog-actions>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/order-screen/order-screen.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/order-screen/order-screen.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\nlabel {\n  display: block;\n  width: 500px;\n  font: bold 18px; }\n\nspan {\n  font: 15px; }\n"

/***/ }),

/***/ "./src/app/order-screen/order-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-screen/order-screen.component.ts ***!
  \********************************************************/
/*! exports provided: OrderScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderScreenComponent", function() { return OrderScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var OrderScreenComponent = /** @class */ (function () {
    function OrderScreenComponent(authService, ordersService, dialogRef, dialogData) {
        this.authService = authService;
        this.ordersService = ordersService;
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.showButton = true;
        this.order = this.dialogData.order;
    }
    OrderScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.order);
        if (this.order.orderId > 0) {
            this.showButton = false;
        }
        this.currentUser = this.authService.currentUser;
        this.userType = this.authService.userType;
        this.authService.authUpdated.subscribe(function (user) {
            _this.currentUser = user;
            console.log(_this.currentUser);
            _this.userType = _this.authService.userType;
            console.log(_this.userType);
        });
    };
    OrderScreenComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    OrderScreenComponent.prototype.handleChangeStatus = function (newStatus) {
        this.ordersService.updateOrderStatus(this.order, this.order.orderId, newStatus);
        // if (newStatus == 4) {
        //   setTimeout(function(){ this.dialogRef.close(); }, 3000);
        // }
    };
    OrderScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-screen',
            template: __webpack_require__(/*! ./order-screen.component.html */ "./src/app/order-screen/order-screen.component.html"),
            styles: [__webpack_require__(/*! ./order-screen.component.scss */ "./src/app/order-screen/order-screen.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], OrderScreenComponent);
    return OrderScreenComponent;
}());



/***/ }),

/***/ "./src/app/orderdelivered/orderdelivered.component.html":
/*!**************************************************************!*\
  !*** ./src/app/orderdelivered/orderdelivered.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"order-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title><h1>Order Delivered Confirmation</h1></mat-card-title>\r\n  </mat-card-header>\r\n  \r\n  <mat-card-content>\r\n    <p>  Customer: <span class=\"field\"> {{ order.customer.firstName}} {{ order.customer.lastName}} </span></p>\r\n    <p>  From: <span class=\"field\"> {{order.localAddress }} </span> </p> \r\n    <p>  To:  <span class=\"field\">{{order.contactDestination}} </span></p> \r\n    <p>  Dest Address: <span class=\"field\">  {{order.destAddress}} </span></p>\r\n    <p>  Date:<span class=\"field\"> {{order.dateDelivery}} </span></p>\r\n    <p>  Date Received: <span class=\"field\"> {{order.deliveryDate}} </span></p> \r\n\r\n    <app-signature [order]=\"order\"></app-signature>\r\n  </mat-card-content>\r\n\r\n    <button class=\"btn\" (click)='confirmDelivered(order)'  mat-raised-button color=\"primary\">Confirm</button>\r\n \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/orderdelivered/orderdelivered.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/orderdelivered/orderdelivered.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".order-card {\n  max-width: 600px;\n  color: #E3C298;\n  margin-top: 20px;\n  margin-left: 450px; }\n\n.field {\n  color: #910bdf; }\n\np {\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/orderdelivered/orderdelivered.component.ts":
/*!************************************************************!*\
  !*** ./src/app/orderdelivered/orderdelivered.component.ts ***!
  \************************************************************/
/*! exports provided: OrderdeliveredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdeliveredComponent", function() { return OrderdeliveredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderdeliveredComponent = /** @class */ (function () {
    function OrderdeliveredComponent(ordersService) {
        this.ordersService = ordersService;
        // order : Order;
        // localAddress : string = " Hayesod 4"
        this.deliveryDate = new Date();
    }
    OrderdeliveredComponent.prototype.viewFormConfirmation = function (order) {
        this.order.deliveryDate = new Date();
    };
    OrderdeliveredComponent.prototype.confirmDelivered = function (order) {
        this.handleChangeStatus(888, order);
    };
    OrderdeliveredComponent.prototype.handleChangeStatus = function (newStatus, order) {
        this.ordersService.updateOrderStatus(order, order.orderId, newStatus);
    };
    OrderdeliveredComponent.prototype.ngOnInit = function () {
        console.log("========= inside orderdelivered ==============");
        console.log(this.order);
        console.log(this.order.customer.firstName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderdeliveredComponent.prototype, "order", void 0);
    OrderdeliveredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderdelivered',
            template: __webpack_require__(/*! ./orderdelivered.component.html */ "./src/app/orderdelivered/orderdelivered.component.html"),
            styles: [__webpack_require__(/*! ./orderdelivered.component.scss */ "./src/app/orderdelivered/orderdelivered.component.scss")]
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], OrderdeliveredComponent);
    return OrderdeliveredComponent;
}());



/***/ }),

/***/ "./src/app/orders.service.ts":
/*!***********************************!*\
  !*** ./src/app/orders.service.ts ***!
  \***********************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersService = /** @class */ (function () {
    function OrdersService(http, snackBar, router) {
        this.http = http;
        this.snackBar = snackBar;
        this.router = router;
        this.formData = new FormData();
        this.allOrders = [];
        this.allOrdersSbject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.OrdersServiceUrl = '/ordersApi';
        this.allOrdersObservable = this.allOrdersSbject.asObservable();
        this.getAllOrders();
    }
    OrdersService.prototype.getAllOrders = function () {
        var _this = this;
        this.http.get(this.OrdersServiceUrl).subscribe(function (orders) {
            _this.allOrders = orders;
            console.log(orders);
            _this.allOrdersSbject.next(orders);
        });
    };
    OrdersService.prototype.findOrder = function (order_id) {
        return this.allOrders.find(function (order) { return order.orderId == order_id; });
    };
    OrdersService.prototype.addNewOrder = function (order) {
        var _this = this;
        console.log("inside Add");
        this.http.post('ordersApi/add', order).subscribe(function () {
            _this.getAllOrders();
        });
    };
    OrdersService.prototype.getOrderById = function (id) {
        this.http.get(this.OrdersServiceUrl + ("/" + id)).subscribe(function (order) {
        });
    };
    OrdersService.prototype.updateOrderStatus = function (order, id, status) {
        var _this = this;
        order.statusId = status;
        this.http.put("ordersApi/updateStatus/" + id, order).subscribe(function () {
            if (status == 888) {
                _this.confirmEmail(order);
            }
            _this.getAllOrders();
        });
    };
    OrdersService.prototype.sendSmsToCustomer = function (order) {
        this.http.post('/send', {
            from: 'Acme Inc',
            to: order.phoneNumber,
            text: 'motoBoy on the way!'
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    OrdersService.prototype.cancelAssignToOrder = function (order) {
        order.motoboy = null;
        order.status = 1;
    };
    OrdersService.prototype.confirmEmail = function (order) {
        var _this = this;
        console.log("send email ........");
        this.http.post('/sendEmail', order).subscribe(function (data) {
            console.log(data);
            _this.snackBar.open("Email Sent to the client", " ", {
                duration: 3000,
            });
            _this.router.navigate(['']);
        });
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row mt-5 pt-5\">\r\n        <div class=\"col\">\r\n            <h1>Your profile</h1>\r\n            <div class=\"user-container\">\r\n                <mat-card>\r\n                    <p>First Name: <span>{{currentUser.firstName}}</span></p>\r\n                    <p>Last Name: <span>{{currentUser.lastName}}</span></p>\r\n                    <p>Email: <span>{{currentUser.email}}</span></p>\r\n                    <p>Phone Number: <span>{{currentUser.phoneNumber}}</span></p>\r\n                    <p>Address: <span>{{currentUser.Address}}</span></p>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  color: #3f51b5;\n  background-color: white; }\n\nh1 {\n  text-align: center; }\n\nspan {\n  color: black; }\n\nmat-card {\n  margin: auto;\n  width: 33%; }\n\n.user-container {\n  display: flex;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.ststusId = 5;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.currentUser;
        this.userType = this.authService.userType;
        this.authService.authUpdated.subscribe(function (user) {
            _this.currentUser = user;
            console.log(_this.currentUser);
            _this.userType = _this.authService.userType;
            console.log(_this.userType);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/signature/signature.component.html":
/*!****************************************************!*\
  !*** ./src/app/signature/signature.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad\">\r\n<signature-pad [options]=\"signaturePadOptions\" (onBeginEvent)=\"drawStart()\">\r\n\r\n</signature-pad>\r\n<br>\r\n<button class=\"btn\" (click)='drawComplete()'  mat-raised-button color=\"primary\">Save</button>\r\n<button class=\"btn\" (click)='this.signaturePad.clear()'  mat-raised-button color=\"accent\">Clear</button>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/signature/signature.component.scss":
/*!****************************************************!*\
  !*** ./src/app/signature/signature.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n  border: 1px solid orange;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/signature/signature.component.ts":
/*!**************************************************!*\
  !*** ./src/app/signature/signature.component.ts ***!
  \**************************************************/
/*! exports provided: SignatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureComponent", function() { return SignatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-signaturepad/signature-pad */ "./node_modules/angular2-signaturepad/signature-pad.js");
/* harmony import */ var angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Order */ "./src/app/Order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignatureComponent = /** @class */ (function () {
    function SignatureComponent(ordersServices) {
        this.ordersServices = ordersServices;
        this.signaturePadOptions = {
            'minWidth': 3,
            'canvasWidth': 400,
            'canvasHeight': 200
        };
    }
    SignatureComponent.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        this.signaturePad.set('minWidth', 3); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    };
    SignatureComponent.prototype.drawComplete = function () {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
        this.order.signature = this.signaturePad.toDataURL();
        //this.ordersServices.uploadSignature(image)
    };
    SignatureComponent.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Order__WEBPACK_IMPORTED_MODULE_3__["Order"])
    ], SignatureComponent.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_1__["SignaturePad"]),
        __metadata("design:type", angular2_signaturepad_signature_pad__WEBPACK_IMPORTED_MODULE_1__["SignaturePad"])
    ], SignatureComponent.prototype, "signaturePad", void 0);
    SignatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signature',
            template: __webpack_require__(/*! ./signature.component.html */ "./src/app/signature/signature.component.html"),
            styles: [__webpack_require__(/*! ./signature.component.scss */ "./src/app/signature/signature.component.scss")]
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], SignatureComponent);
    return SignatureComponent;
}());



/***/ }),

/***/ "./src/app/stars/stars.component.html":
/*!********************************************!*\
  !*** ./src/app/stars/stars.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-radio-group>\r\n        <mat-radio-button value=\"1\"> <mat-icon>sentiment_very_satisfied</mat-icon></mat-radio-button>\r\n        <mat-radio-button value=\"2\"><mat-icon>insert_emoticon</mat-icon></mat-radio-button>\r\n        <mat-radio-button value=\"3\"><mat-icon>sentiment_satisfied_alt</mat-icon></mat-radio-button>\r\n        <mat-radio-button value=\"4\"><mat-icon>sentiment_dissatisfied</mat-icon></mat-radio-button>\r\n        <mat-radio-button value=\"5\"><mat-icon>sentiment_very_dissatisfied</mat-icon></mat-radio-button>\r\n      </mat-radio-group>\r\n</mat-card>\r\n<app-stepper></app-stepper>\r\n\r\n<div class=\"rate\">\r\n        <input type=\"radio\" id=\"star5\" name=\"rate\" value=\"5\" />\r\n        <label for=\"star5\" title=\"text\">5 stars</label>\r\n        <input type=\"radio\" id=\"star4\" name=\"rate\" value=\"4\" />\r\n        <label for=\"star4\" title=\"text\">4 stars</label>\r\n        <input type=\"radio\" id=\"star3\" name=\"rate\" value=\"3\" />\r\n        <label for=\"star3\" title=\"text\">3 stars</label>\r\n        <input type=\"radio\" id=\"star2\" name=\"rate\" value=\"2\" />\r\n        <label for=\"star2\" title=\"text\">2 stars</label>\r\n        <input type=\"radio\" id=\"star1\" name=\"rate\" value=\"1\" />\r\n        <label for=\"star1\" title=\"text\">1 star</label>\r\n      </div>"

/***/ }),

/***/ "./src/app/stars/stars.component.scss":
/*!********************************************!*\
  !*** ./src/app/stars/stars.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px; }\n.rate {\n  border: 1px solid #cccccc;\n  float: left;\n  height: 46px;\n  padding: 0 10px; }\n.rate:not(:checked) > input {\n  position: absolute;\n  top: -9999px; }\n.rate:not(:checked) > label {\n  float: right;\n  width: 1em;\n  overflow: hidden;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 30px;\n  color: #ccc; }\n.rate:not(:checked) > label:before {\n  content: '★ '; }\n.rate > input:checked ~ label {\n  color: #ffc700; }\n.rate:not(:checked) > label:hover, .rate:not(:checked) > label:hover ~ label {\n  color: #deb217; }\n.rate > input:checked + label:hover, .rate > input:checked + label:hover ~ label, .rate > input:checked ~ label:hover, .rate > input:checked ~ label:hover ~ label, .rate > label:hover ~ input:checked ~ label {\n  color: #c59b08; }\n"

/***/ }),

/***/ "./src/app/stars/stars.component.ts":
/*!******************************************!*\
  !*** ./src/app/stars/stars.component.ts ***!
  \******************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.edditing = false;
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    StarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stars',
            template: __webpack_require__(/*! ./stars.component.html */ "./src/app/stars/stars.component.html"),
            styles: [__webpack_require__(/*! ./stars.component.scss */ "./src/app/stars/stars.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "./src/app/stepper/stepper.component.html":
/*!************************************************!*\
  !*** ./src/app/stepper/stepper.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ol class=\"progtrckr\" data-progtrckr-steps=\"5\">\r\n<div *ngIf=\"order.statusId===1\">\r\n    <li class=\"progtrckr-done\">New order</li>\r\n    <li class=\"progtrckr-todo\">wating for pickUp</li>\r\n    <li class=\"progtrckr-todo\">On the way</li>\r\n    <li class=\"progtrckr-todo\">Delivered</li>\r\n    <li class=\"progtrckr-todo\">Closed</li>\r\n</div>\r\n<div *ngIf=\"order.statusId===2\">\r\n        <li class=\"progtrckr-done\">New order</li>\r\n        <li class=\"progtrckr-done\">wating for pickUp</li>\r\n        <li class=\"progtrckr-todo\">On the way</li>\r\n        <li class=\"progtrckr-todo\">Delivered</li>\r\n        <li class=\"progtrckr-todo\">Closed</li>\r\n</div>\r\n<div *ngIf=\"order.statusId===3\">\r\n        <li class=\"progtrckr-done\">New order</li>\r\n        <li class=\"progtrckr-done\">wating for pickUp</li>\r\n        <li class=\"progtrckr-done\">On the way</li>\r\n        <li class=\"progtrckr-todo\">Delivered</li>\r\n        <li class=\"progtrckr-todo\">Closed</li>\r\n</div>\r\n<div *ngIf=\"order.statusId===4\">\r\n        <li class=\"progtrckr-done\">New order</li>\r\n        <li class=\"progtrckr-done\">wating for pickUp</li>\r\n        <li class=\"progtrckr-done\">On the way</li>\r\n        <li class=\"progtrckr-done\">Delivered</li>\r\n        <li class=\"progtrckr-todo\">Closed</li>\r\n</div>\r\n<div *ngIf=\"order.statusId===888\">\r\n        <li class=\"progtrckr-done\">New order</li>\r\n        <li class=\"progtrckr-done\">wating for pickUp</li>\r\n        <li class=\"progtrckr-done\">On the way</li>\r\n        <li class=\"progtrckr-done\">Delivered</li>\r\n        <li class=\"progtrckr-done\">Closed</li>\r\n</div>\r\n </ol>\r\n"

/***/ }),

/***/ "./src/app/stepper/stepper.component.scss":
/*!************************************************!*\
  !*** ./src/app/stepper/stepper.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol.progtrckr {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n\nol.progtrckr li {\n  display: inline-block;\n  text-align: center;\n  line-height: 3em; }\n\nol.progtrckr[data-progtrckr-steps=\"2\"] li {\n  width: 49%; }\n\nol.progtrckr[data-progtrckr-steps=\"3\"] li {\n  width: 33%; }\n\nol.progtrckr[data-progtrckr-steps=\"4\"] li {\n  width: 24%; }\n\nol.progtrckr[data-progtrckr-steps=\"5\"] li {\n  width: 19%; }\n\nol.progtrckr[data-progtrckr-steps=\"6\"] li {\n  width: 16%; }\n\nol.progtrckr[data-progtrckr-steps=\"7\"] li {\n  width: 14%; }\n\nol.progtrckr[data-progtrckr-steps=\"8\"] li {\n  width: 12%; }\n\nol.progtrckr[data-progtrckr-steps=\"9\"] li {\n  width: 11%; }\n\nol.progtrckr li.progtrckr-done {\n  color: black;\n  border-bottom: 4px solid yellowgreen; }\n\nol.progtrckr li.progtrckr-todo {\n  color: silver;\n  border-bottom: 4px solid silver; }\n\nol.progtrckr li:after {\n  content: \"\\00a0\\00a0\"; }\n\nol.progtrckr li:before {\n  position: relative;\n  bottom: -2.5em;\n  float: left;\n  left: 50%;\n  line-height: 1em; }\n\nol.progtrckr li.progtrckr-done:before {\n  content: \"\\2713\";\n  color: white;\n  background-color: yellowgreen;\n  height: 1.2em;\n  width: 1.2em;\n  line-height: 1.2em;\n  border: none;\n  border-radius: 1.2em; }\n\nol.progtrckr li.progtrckr-todo:before {\n  content: \"\\039F\";\n  color: silver;\n  background-color: white;\n  font-size: 1.5em;\n  bottom: -1.6em; }\n"

/***/ }),

/***/ "./src/app/stepper/stepper.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stepper/stepper.component.ts ***!
  \**********************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Order */ "./src/app/Order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepperComponent = /** @class */ (function () {
    function StepperComponent() {
    }
    StepperComponent.prototype.ngOnInit = function () {
        console.log("this.order.statusId");
        console.log(this.order.statusId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Order__WEBPACK_IMPORTED_MODULE_1__["Order"])
    ], StepperComponent.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StepperComponent.prototype, "userType", void 0);
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.component.html */ "./src/app/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.scss */ "./src/app/stepper/stepper.component.scss")]
        })
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-5 pt-5\">\r\n    <div class=\"col\">\r\n      <div *ngIf='!selectedOrder'>\r\n        <mat-icon class=\"click\" (click)=\"refresh()\">refresh</mat-icon>\r\n\r\n        <mat-table [dataSource]=\"dataSource\">\r\n          <ng-container matColumnDef=\"orderId\">\r\n            <mat-header-cell *matHeaderCellDef> Order Id </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\"> {{order.orderId}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"customerId\">\r\n            <mat-header-cell *matHeaderCellDef> Customer </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\">\r\n              <div *ngIf=\"order.customerId != null\">{{order.customer.firstName}} {{order.customer.lastName}}</div>\r\n            </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"customerPhone\">\r\n            <mat-header-cell *matHeaderCellDef> Customer Phone number </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\">\r\n              <div *ngIf=\"order.customerId != null\">{{order.customer.phone}}</div>\r\n            </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"description\">\r\n            <mat-header-cell *matHeaderCellDef> Description </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\">\r\n              <div *ngIf=\"order.customerId != null\">{{order.description}}</div>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"motoboyName\">\r\n            <mat-header-cell *matHeaderCellDef> Moto Boy </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\">\r\n              <div *ngIf=\"order.motoboyId == null\" style=\"color: red\">waiting</div>\r\n              <div *ngIf=\"order.motoboyId && order.customerId != null\">{{order.motoboy.firstName}}\r\n                {{order.motoboy.lastName}}</div>\r\n            </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"localAddress\">\r\n            <mat-header-cell *matHeaderCellDef> Collecting Address </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\"> {{order.localAddress}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"destAddress\">\r\n            <mat-header-cell *matHeaderCellDef> Delivery Address </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\"> {{order.destAddress}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"price\">\r\n            <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\"> {{order.price}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"orderDate\">\r\n            <mat-header-cell *matHeaderCellDef> Order Time </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\"> {{order.orderDate}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"active\">\r\n            <mat-header-cell *matHeaderCellDef> Take an Order </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\">\r\n              <mat-icon class=\"click\" *ngIf=\"order.motoboy === null\" (click)=\"handleAsignToOrder(order,2)\">add_circle</mat-icon>\r\n              <mat-icon class=\"lock-click\" style=\"color: burlywood\" *ngIf=\"order.motoboyId\">how_to_reg</mat-icon>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let order\"> {{order.status.name}} </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>>\r\n            <mat-cell *matCellDef=\"let order\">\r\n\r\n\r\n              <span>\r\n                <mat-icon matTooltip=\"Edit Order\" class=\"click\" mat-raised-button (click)=\"editOrder(order.orderId)\">visibility</mat-icon>\r\n              </span>\r\n              <span *ngIf=\"order.statusId == 4\">\r\n                <mat-icon matTooltip=\"Close Order\" class=\"click\" mat-raised-button (click)=\"closeOrder(order)\">check_circle_outline</mat-icon>\r\n              </span>\r\n            </mat-cell>>\r\n          </ng-container>\r\n\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-orderdelivered *ngIf='selectedOrder' [order]=\"selectedOrder\"></app-orderdelivered>"

/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-button {\n  background-color: dodgerblue;\n  color: white; }\n\n.mat-header-cell {\n  flex: 1;\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  color: #7c57e2;\n  -webkit-text-decoration-style: wavy;\n          text-decoration-style: wavy;\n  font-size: 15Px; }\n\n.orders-container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr); }\n\n.click {\n  cursor: pointer; }\n\n.lock-click {\n  cursor: context-menu; }\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-screen/order-screen.component */ "./src/app/order-screen/order-screen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TableComponent = /** @class */ (function () {
    function TableComponent(ordersService, motoService, dialog, authService) {
        this.ordersService = ordersService;
        this.motoService = motoService;
        this.dialog = dialog;
        this.authService = authService;
        this.openOrders = new Array();
        this.orders = new Array();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.orders);
        this.displayedColumns = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataSource.data === this.order used this way to filter
        this.dataSource.data = this.ordersService.allOrders;
        console.log(this.dataSource.data);
        this.ordersService.getAllOrders();
        this.ordersService.allOrdersObservable.subscribe(function (data) {
            _this.dataSource.data = data.sort(_this.compare);
            console.log(_this.dataSource.data);
            _this.currentUser = _this.authService.currentUser;
            _this.authService.authUpdated.subscribe(function (user) {
                _this.currentUser = user;
                _this.userType = _this.authService.userType;
            });
            _this.initColumns();
        });
        //nees to replace with current user
    };
    TableComponent.prototype.handleAsignToOrder = function (order, newStatus) {
        this.ordersService.updateOrderStatus(order, order.orderId, newStatus);
    };
    TableComponent.prototype.editOrder = function (order_id) {
        var order = this.ordersService.findOrder(order_id);
        //let companySelected = this.companyService.findCompany(client.company_id)
        //client.company = companySelected.name;
        var dialogRef = this.dialog.open(_order_screen_order_screen_component__WEBPACK_IMPORTED_MODULE_5__["OrderScreenComponent"], {
            width: '900px',
            data: { order: order }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    TableComponent.prototype.closeOrder = function (order) {
        this.selectedOrder = order;
        console.log(order);
    };
    TableComponent.prototype.applyFilter = function (filterValue) {
        console.log(filterValue);
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    TableComponent.prototype.refresh = function () {
        this.ordersService.getAllOrders();
    };
    TableComponent.prototype.initColumns = function () {
        if (this.authService.userType === "motoboy") {
            console.log("show moto columns");
            this.displayedColumns = ['orderId', 'description', 'customerId', 'customerPhone', 'localAddress', 'destAddress', 'orderDate', 'status', 'active', 'actions'];
        }
        else if (this.authService.userType === "customer") {
            console.log("show customer columns");
            this.displayedColumns = ['orderId', 'description', 'motoboyName', 'localAddress', 'destAddress', 'orderDate', 'status', 'actions'];
        }
    };
    //sort the array by status 
    TableComponent.prototype.compare = function (a, b) {
        if (a.statusId < b.statusId)
            return -1;
        if (a.statusId > b.statusId)
            return 1;
        return 0;
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"], _moto_service__WEBPACK_IMPORTED_MODULE_3__["MotoService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moto.service */ "./src/app/moto.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersService = /** @class */ (function () {
    function UsersService(http, router, customerService, motoService) {
        this.http = http;
        this.router = router;
        this.customerService = customerService;
        this.motoService = motoService;
        this.newUser = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.singleUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.singleUserObservable = this.singleUserSubject.asObservable();
    }
    UsersService.prototype.getCustomers = function () {
        var _this = this;
        this.http.get('usersApi/').subscribe(function (data) {
            _this.customers = data;
        });
    };
    UsersService.prototype.getCustomer = function (id) {
        var _this = this;
        this.http.get('usersApi/' + id).subscribe(function (data) {
            _this.currentUser = data[0];
            _this.singleUserSubject.next(data[0]);
        });
    };
    UsersService.prototype.addNewClient = function (newUser) {
        var _this = this;
        this.http.post('usersApi/add', newUser).subscribe(function (data) {
            _this.currentUser = data[0];
            _this.singleUserSubject.next(data[0]);
        });
    };
    UsersService.prototype.deleteCustomer = function (currentUser) {
        var _this = this;
        var id = currentUser.customerId;
        currentUser.active = false;
        this.http.put('usersApi/delete/' + id, { customer: currentUser }).subscribe(function (data) {
            //update motoboys array
            _this.currentUser = data;
            _this.singleUserSubject.next(data);
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"], _moto_service__WEBPACK_IMPORTED_MODULE_1__["MotoService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// platformBrowserDynamic().Module(AppModule)
//   .catch(err => console.log(err));
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\steiner\code\ezxpress\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map