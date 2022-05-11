"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_C3_current-manche_C3_current-manche_module_ts"],{

/***/ 5178:
/*!***************************************************************!*\
  !*** ./src/app/C3_current-manche/C3_current-manche.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  height: 100vh;\n  background: linear-gradient(180deg, var(--blue) 15%, rgba(150, 150, 150, 0.7) 50%, var(--blue) 85%);\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nh1 {\n  font-family: \"Sansation Bold\";\n  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.25);\n  font-size: 15vw;\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkMzX2N1cnJlbnQtbWFuY2hlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxtR0FBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0QiLCJmaWxlIjoiQzNfY3VycmVudC1tYW5jaGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG5cdGhlaWdodDoxMDB2aDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1ibHVlKSAxNSUsIHJnYmEoMTUwLDE1MCwxNTAsMC43KSA1MCUsIHZhcigtLWJsdWUpIDg1JSk7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaDF7XHJcblx0Zm9udC1mYW1pbHk6XCJTYW5zYXRpb24gQm9sZFwiO1xyXG5cdHRleHQtc2hhZG93OiA3cHggN3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGZvbnQtc2l6ZToxNXZ3O1xyXG5cdGNvbG9yOnZhcigtLXdoaXRlKTtcclxufSJdfQ== */";

/***/ }),

/***/ 6393:
/*!***********************************************************************!*\
  !*** ./src/app/C3_current-manche/C3_current-manche-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentManchePageRoutingModule": () => (/* binding */ CurrentManchePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _C3_current_manche_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C3_current-manche.page */ 4319);




const routes = [
    {
        path: '',
        component: _C3_current_manche_page__WEBPACK_IMPORTED_MODULE_0__.C3_CurrentManchePage
    }
];
let CurrentManchePageRoutingModule = class CurrentManchePageRoutingModule {
};
CurrentManchePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrentManchePageRoutingModule);



/***/ }),

/***/ 759:
/*!***************************************************************!*\
  !*** ./src/app/C3_current-manche/C3_current-manche.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentManchePageModule": () => (/* binding */ CurrentManchePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _C3_current_manche_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C3_current-manche-routing.module */ 6393);
/* harmony import */ var _C3_current_manche_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C3_current-manche.page */ 4319);







let CurrentManchePageModule = class CurrentManchePageModule {
};
CurrentManchePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _C3_current_manche_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrentManchePageRoutingModule
        ],
        declarations: [_C3_current_manche_page__WEBPACK_IMPORTED_MODULE_1__.C3_CurrentManchePage]
    })
], CurrentManchePageModule);



/***/ }),

/***/ 4319:
/*!*************************************************************!*\
  !*** ./src/app/C3_current-manche/C3_current-manche.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C3_CurrentManchePage": () => (/* binding */ C3_CurrentManchePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C3_current_manche_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./C3_current-manche.page.html */ 9130);
/* harmony import */ var _C3_current_manche_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C3_current-manche.page.scss */ 5178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offline.service */ 4056);




 // import service
let C3_CurrentManchePage = class C3_CurrentManchePage {
    constructor(service) {
        this.service = service;
    } //inject service
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.mancheEnCours = this.service.mancheEnCours; //gets current Round from service and sets local variable
    }
};
C3_CurrentManchePage.ctorParameters = () => [
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_2__.OfflineService }
];
C3_CurrentManchePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-current-manche',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C3_current_manche_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_C3_current_manche_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], C3_CurrentManchePage);



/***/ }),

/***/ 9130:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/C3_current-manche/C3_current-manche.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content routerLink=\"/select-mj\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col class=\"ion-text-center\">\n\t\t\t\t<!-- Display current Round (+1 because array starts at 0) -->\n\t\t\t\t<h1>MANCHE {{mancheEnCours+1}}</h1>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_C3_current-manche_C3_current-manche_module_ts.js.map