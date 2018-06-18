(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _gitsearch_gitsearch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gitsearch/gitsearch.component */ "./src/app/gitsearch/gitsearch.component.ts");
/* harmony import */ var _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginate/paginate.component */ "./src/app/paginate/paginate.component.ts");
/* harmony import */ var _home_txt_txt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/txt/txt.component */ "./src/app/home/txt/txt.component.ts");
/* harmony import */ var _home_number_number_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/number/number.component */ "./src/app/home/number/number.component.ts");
/* harmony import */ var _home_img_img_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/img/img.component */ "./src/app/home/img/img.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], children: [
            { path: '', redirectTo: 'img', pathMatch: 'full' },
            { path: 'txt', component: _home_txt_txt_component__WEBPACK_IMPORTED_MODULE_7__["TxtComponent"] },
            { path: 'number', component: _home_number_number_component__WEBPACK_IMPORTED_MODULE_8__["NumberComponent"] },
            { path: 'img', component: _home_img_img_component__WEBPACK_IMPORTED_MODULE_9__["ImgComponent"] },
        ] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'gitsearch', component: _gitsearch_gitsearch_component__WEBPACK_IMPORTED_MODULE_5__["GitsearchComponent"] },
    { path: 'paginate', component: _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_6__["PaginateComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n\n  <div class=\"content\">\n\n    <header>\n      <app-header></app-header>\n    </header>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n  </div>\n\n  <div class=\"footer\">\n\n\n    <app-footer></app-footer>\n  </div>\n\n</div>\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _gitsearch_gitsearch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gitsearch/gitsearch.component */ "./src/app/gitsearch/gitsearch.component.ts");
/* harmony import */ var _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paginate/paginate.component */ "./src/app/paginate/paginate.component.ts");
/* harmony import */ var _home_img_img_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/img/img.component */ "./src/app/home/img/img.component.ts");
/* harmony import */ var _home_number_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/number/number.component */ "./src/app/home/number/number.component.ts");
/* harmony import */ var _home_number_num_num_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/number/num/num.component */ "./src/app/home/number/num/num.component.ts");
/* harmony import */ var _home_text_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/text/text.component */ "./src/app/home/text/text.component.ts");
/* harmony import */ var _home_txt_txt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/txt/txt.component */ "./src/app/home/txt/txt.component.ts");
/* harmony import */ var _home_txt_lorem_lorem_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/txt/lorem/lorem.component */ "./src/app/home/txt/lorem/lorem.component.ts");
/* harmony import */ var _unsplash_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./unsplash.service */ "./src/app/unsplash.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _gitsearch_gitsearch_component__WEBPACK_IMPORTED_MODULE_8__["GitsearchComponent"],
                _paginate_paginate_component__WEBPACK_IMPORTED_MODULE_9__["PaginateComponent"],
                _home_img_img_component__WEBPACK_IMPORTED_MODULE_10__["ImgComponent"],
                _home_number_number_component__WEBPACK_IMPORTED_MODULE_11__["NumberComponent"],
                _home_number_num_num_component__WEBPACK_IMPORTED_MODULE_12__["NumComponent"],
                _home_text_text_component__WEBPACK_IMPORTED_MODULE_13__["TextComponent"],
                _home_txt_txt_component__WEBPACK_IMPORTED_MODULE_14__["TxtComponent"],
                _home_txt_lorem_lorem_component__WEBPACK_IMPORTED_MODULE_15__["LoremComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [_unsplash_service__WEBPACK_IMPORTED_MODULE_16__["UnsplashService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    background: blueviolet;\r\n    padding:1.2em;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <p>foma 2018</p>\n  <p>Angular</p>\n</footer>"

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
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gitsearch/gitsearch.component.css":
/*!***************************************************!*\
  !*** ./src/app/gitsearch/gitsearch.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gitsearch/gitsearch.component.html":
/*!****************************************************!*\
  !*** ./src/app/gitsearch/gitsearch.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  gitsearch works!\n</p>\n"

/***/ }),

/***/ "./src/app/gitsearch/gitsearch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gitsearch/gitsearch.component.ts ***!
  \**************************************************/
/*! exports provided: GitsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitsearchComponent", function() { return GitsearchComponent; });
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

var GitsearchComponent = /** @class */ (function () {
    function GitsearchComponent() {
    }
    GitsearchComponent.prototype.ngOnInit = function () {
    };
    GitsearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gitsearch',
            template: __webpack_require__(/*! ./gitsearch.component.html */ "./src/app/gitsearch/gitsearch.component.html"),
            styles: [__webpack_require__(/*! ./gitsearch.component.css */ "./src/app/gitsearch/gitsearch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GitsearchComponent);
    return GitsearchComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background:rebeccapurple;\r\n}\r\n\r\nnav ul{\r\n    display: flex;\r\n    justify-content: space-between\r\n}\r\n\r\nnav ul li{\r\n    padding: .1em\r\n}\r\n\r\nnav ul li a{\r\n    color: white;\r\n    display: block;\r\n    padding: .5em;\r\n    background: transparent;\r\n    transition: .5s;\r\n    border-bottom: 1px solid transparent\r\n\r\n}\r\n\r\nnav ul li a:hover{\r\n    background: grey;\r\n}\r\n\r\nnav ul li a.act{\r\n    color: blue;\r\n    border-bottom: 1px solid wheat\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"cont\">\n  <ul>\n\n    <li>\n      <a\n              routerLink=\"/home\"\n              routerLinkActive=\"act\"\n      >home</a>\n    </li>\n\n\n    <li>\n      <a\n              routerLink=\"/about\"\n              routerLinkActive=\"act\"\n      >about</a>\n    </li>\n\n\n    <li>\n      <a\n              routerLink=\"/gitsearch\"\n              routerLinkActive=\"act\"\n      >GitSearch</a>\n    </li>\n\n    <li>\n      <a\n              routerLink=\"/paginate\"\n              routerLinkActive=\"act\"\n      >paginate</a>\n    </li>\n\n\n  </ul></div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-text></app-text>\n<router-outlet></router-outlet>\n"

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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/img/img.component.css":
/*!********************************************!*\
  !*** ./src/app/home/img/img.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div img{\r\n    display: block;\r\n    width: 150px;\r\n    height: 150px;\r\n    padding: 5px;\r\n}\r\n\r\ndiv{\r\n    display: inline-block\r\n}"

/***/ }),

/***/ "./src/app/home/img/img.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/img/img.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  img works!\n</p>\n\n<div *ngFor=\"let img of images\">\n  <img src=\"{{img.urls.small}}\">\n</div>\n"

/***/ }),

/***/ "./src/app/home/img/img.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/img/img.component.ts ***!
  \*******************************************/
/*! exports provided: ImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgComponent", function() { return ImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _unsplash_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../unsplash.service */ "./src/app/unsplash.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImgComponent = /** @class */ (function () {
    function ImgComponent(unService) {
        this.unService = unService;
        this.images = [];
    }
    ImgComponent.prototype.ngOnInit = function () {
        this.getImg();
    };
    ImgComponent.prototype.getImg = function () {
        var _this = this;
        this.unService.getImgUnsplash()
            .subscribe(function (res) {
            _this.images = res;
        });
    };
    ImgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-img',
            template: __webpack_require__(/*! ./img.component.html */ "./src/app/home/img/img.component.html"),
            styles: [__webpack_require__(/*! ./img.component.css */ "./src/app/home/img/img.component.css")]
        }),
        __metadata("design:paramtypes", [_unsplash_service__WEBPACK_IMPORTED_MODULE_1__["UnsplashService"]])
    ], ImgComponent);
    return ImgComponent;
}());



/***/ }),

/***/ "./src/app/home/number/num/num.component.css":
/*!***************************************************!*\
  !*** ./src/app/home/number/num/num.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.gray) >>> ul{\r\n    display: flex;\r\n}\r\n\r\n:host-context(.gray) >>> li{\r\n    display: block;\r\n    padding: 5px;\r\n}"

/***/ }),

/***/ "./src/app/home/number/num/num.component.html":
/*!****************************************************!*\
  !*** ./src/app/home/number/num/num.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let num of numbers\">{{num}}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/home/number/num/num.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home/number/num/num.component.ts ***!
  \**************************************************/
/*! exports provided: NumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumComponent", function() { return NumComponent; });
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

var NumComponent = /** @class */ (function () {
    function NumComponent() {
        this.numbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ];
    }
    NumComponent.prototype.ngOnInit = function () {
    };
    NumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-num',
            template: __webpack_require__(/*! ./num.component.html */ "./src/app/home/number/num/num.component.html"),
            styles: [__webpack_require__(/*! ./num.component.css */ "./src/app/home/number/num/num.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NumComponent);
    return NumComponent;
}());



/***/ }),

/***/ "./src/app/home/number/number.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/number/number.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/number/number.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/number/number.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  number works!\n</p>\n\n<app-num ></app-num>\n\n<app-num class=\"gray\"></app-num>"

/***/ }),

/***/ "./src/app/home/number/number.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/number/number.component.ts ***!
  \*************************************************/
/*! exports provided: NumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberComponent", function() { return NumberComponent; });
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

var NumberComponent = /** @class */ (function () {
    function NumberComponent() {
    }
    NumberComponent.prototype.ngOnInit = function () {
    };
    NumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-number',
            template: __webpack_require__(/*! ./number.component.html */ "./src/app/home/number/number.component.html"),
            styles: [__webpack_require__(/*! ./number.component.css */ "./src/app/home/number/number.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NumberComponent);
    return NumberComponent;
}());



/***/ }),

/***/ "./src/app/home/text/text.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/text/text.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.active{\r\n    color:green\r\n}"

/***/ }),

/***/ "./src/app/home/text/text.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/text/text.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n\n    <li><a\n            routerLinkActive=\"active\"\n            routerLink=\"txt\">txt</a></li>\n\n\n    <li><a\n            routerLinkActive=\"active\"\n            routerLink=\"number\">number</a></li>\n\n\n    <li><a\n            routerLinkActive=\"active\"\n            routerLink=\"img\">img</a></li>\n\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/home/text/text.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/text/text.component.ts ***!
  \*********************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
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

var TextComponent = /** @class */ (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(/*! ./text.component.html */ "./src/app/home/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.css */ "./src/app/home/text/text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/home/txt/lorem/lorem.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/txt/lorem/lorem.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/txt/lorem/lorem.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/txt/lorem/lorem.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>text</h3>\n\n<p>\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate totam, recusandae laborum incidunt aperiam vitae aliquam sequi, architecto aliquid natus doloribus omnis? Facilis ea ducimus praesentium pariatur quis veritatis!\n</p>\n\n<hr>"

/***/ }),

/***/ "./src/app/home/txt/lorem/lorem.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/txt/lorem/lorem.component.ts ***!
  \***************************************************/
/*! exports provided: LoremComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoremComponent", function() { return LoremComponent; });
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

var LoremComponent = /** @class */ (function () {
    function LoremComponent() {
    }
    LoremComponent.prototype.ngOnInit = function () {
    };
    LoremComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lorem',
            template: __webpack_require__(/*! ./lorem.component.html */ "./src/app/home/txt/lorem/lorem.component.html"),
            styles: [__webpack_require__(/*! ./lorem.component.css */ "./src/app/home/txt/lorem/lorem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoremComponent);
    return LoremComponent;
}());



/***/ }),

/***/ "./src/app/home/txt/txt.component.css":
/*!********************************************!*\
  !*** ./src/app/home/txt/txt.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/txt/txt.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/txt/txt.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-lorem *ngFor=\"let lorem of [1,2,3,4]\"></app-lorem>"

/***/ }),

/***/ "./src/app/home/txt/txt.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/txt/txt.component.ts ***!
  \*******************************************/
/*! exports provided: TxtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxtComponent", function() { return TxtComponent; });
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

var TxtComponent = /** @class */ (function () {
    function TxtComponent() {
    }
    TxtComponent.prototype.ngOnInit = function () {
    };
    TxtComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-txt',
            template: __webpack_require__(/*! ./txt.component.html */ "./src/app/home/txt/txt.component.html"),
            styles: [__webpack_require__(/*! ./txt.component.css */ "./src/app/home/txt/txt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TxtComponent);
    return TxtComponent;
}());



/***/ }),

/***/ "./src/app/paginate/paginate.component.css":
/*!*************************************************!*\
  !*** ./src/app/paginate/paginate.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/paginate/paginate.component.html":
/*!**************************************************!*\
  !*** ./src/app/paginate/paginate.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  paginate works!\n</p>\n"

/***/ }),

/***/ "./src/app/paginate/paginate.component.ts":
/*!************************************************!*\
  !*** ./src/app/paginate/paginate.component.ts ***!
  \************************************************/
/*! exports provided: PaginateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginateComponent", function() { return PaginateComponent; });
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

var PaginateComponent = /** @class */ (function () {
    function PaginateComponent() {
    }
    PaginateComponent.prototype.ngOnInit = function () {
    };
    PaginateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paginate',
            template: __webpack_require__(/*! ./paginate.component.html */ "./src/app/paginate/paginate.component.html"),
            styles: [__webpack_require__(/*! ./paginate.component.css */ "./src/app/paginate/paginate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginateComponent);
    return PaginateComponent;
}());



/***/ }),

/***/ "./src/app/unsplash.service.ts":
/*!*************************************!*\
  !*** ./src/app/unsplash.service.ts ***!
  \*************************************/
/*! exports provided: UnsplashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsplashService", function() { return UnsplashService; });
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


var UnsplashService = /** @class */ (function () {
    function UnsplashService(http) {
        this.http = http;
        this.apikey = '1dcac9804322f89a7f23a5f6ec79d9a295a721a562e21d8f7cedb815a9f0aa89';
        this.URL = "https://api.unsplash.com/photos/?page=1&client_id=" + this.apikey;
    }
    UnsplashService.prototype.getImgUnsplash = function () {
        return this.http.get(this.URL);
    };
    UnsplashService.prototype.getImages = function (num) {
        return this.http.get("https://api.unsplash.com/photos/?page=" + num + "&client_id=" + this.apikey);
    };
    UnsplashService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UnsplashService);
    return UnsplashService;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\subject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map