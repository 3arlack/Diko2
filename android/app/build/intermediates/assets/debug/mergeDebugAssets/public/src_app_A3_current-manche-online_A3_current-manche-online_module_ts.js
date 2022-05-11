"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_A3_current-manche-online_A3_current-manche-online_module_ts"],{

/***/ 3154:
/*!*****************************************************************************!*\
  !*** ./src/app/A3_current-manche-online/A3_current-manche-online.page.scss ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  height: 100vh;\n  background: linear-gradient(180deg, var(--blue) 15%, rgba(150, 150, 150, 0.7) 50%, var(--blue) 85%);\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nh1 {\n  font-family: \"Sansation Bold\";\n  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.25);\n  font-size: 15vw;\n  color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkEzX2N1cnJlbnQtbWFuY2hlLW9ubGluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUdBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0MsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNEIiwiZmlsZSI6IkEzX2N1cnJlbnQtbWFuY2hlLW9ubGluZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XHJcblx0aGVpZ2h0OjEwMHZoO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJsdWUpIDE1JSwgcmdiYSgxNTAsMTUwLDE1MCwwLjcpIDUwJSwgdmFyKC0tYmx1ZSkgODUlKTtcclxufVxyXG5cclxuaW9uLXJvd3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5oMXtcclxuXHRmb250LWZhbWlseTpcIlNhbnNhdGlvbiBCb2xkXCI7XHJcblx0dGV4dC1zaGFkb3c6IDdweCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0Zm9udC1zaXplOjE1dnc7XHJcblx0Y29sb3I6dmFyKC0td2hpdGUpO1xyXG59Il19 */";

/***/ }),

/***/ 212:
/*!*************************************************************************************!*\
  !*** ./src/app/A3_current-manche-online/A3_current-manche-online-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentMancheOnlinePageRoutingModule": () => (/* binding */ CurrentMancheOnlinePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _A3_current_manche_online_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A3_current-manche-online.page */ 1859);




const routes = [
    {
        path: '',
        component: _A3_current_manche_online_page__WEBPACK_IMPORTED_MODULE_0__.A3_CurrentMancheOnlinePage
    }
];
let CurrentMancheOnlinePageRoutingModule = class CurrentMancheOnlinePageRoutingModule {
};
CurrentMancheOnlinePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrentMancheOnlinePageRoutingModule);



/***/ }),

/***/ 6139:
/*!*****************************************************************************!*\
  !*** ./src/app/A3_current-manche-online/A3_current-manche-online.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentMancheOnlinePageModule": () => (/* binding */ CurrentMancheOnlinePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _A3_current_manche_online_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A3_current-manche-online-routing.module */ 212);
/* harmony import */ var _A3_current_manche_online_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A3_current-manche-online.page */ 1859);







let CurrentMancheOnlinePageModule = class CurrentMancheOnlinePageModule {
};
CurrentMancheOnlinePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _A3_current_manche_online_routing_module__WEBPACK_IMPORTED_MODULE_0__.CurrentMancheOnlinePageRoutingModule
        ],
        declarations: [_A3_current_manche_online_page__WEBPACK_IMPORTED_MODULE_1__.A3_CurrentMancheOnlinePage]
    })
], CurrentMancheOnlinePageModule);



/***/ }),

/***/ 1859:
/*!***************************************************************************!*\
  !*** ./src/app/A3_current-manche-online/A3_current-manche-online.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A3_CurrentMancheOnlinePage": () => (/* binding */ A3_CurrentMancheOnlinePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A3_current_manche_online_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./A3_current-manche-online.page.html */ 2996);
/* harmony import */ var _A3_current_manche_online_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A3_current-manche-online.page.scss */ 3154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/partie.service */ 4617);





let A3_CurrentMancheOnlinePage = class A3_CurrentMancheOnlinePage {
    constructor(service) {
        this.service = service;
        this.mancheEnCours = 0;
        this.partieEnCours = this.service.partieEnCours;
    }
    ngOnInit() {
    }
    //to convert the value of mancheEnCours to int
    ConvertToInt(mancheEnCours) {
        return parseInt(mancheEnCours);
    }
    ionViewWillEnter() {
        // Get current Round from service
        this.mancheEnCours = this.service.mancheEnCours;
    }
};
A3_CurrentMancheOnlinePage.ctorParameters = () => [
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_2__.PartieService }
];
A3_CurrentMancheOnlinePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-current-manche-online',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A3_current_manche_online_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_A3_current_manche_online_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], A3_CurrentMancheOnlinePage);



/***/ }),

/***/ 2996:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/A3_current-manche-online/A3_current-manche-online.page.html ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content routerLink=\"/online-definition\" >\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <!-- Display current Round (+1 because array starts at 0) -->\r\n                <h1>MANCHE {{ConvertToInt(mancheEnCours)+ConvertToInt(1)}}</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_A3_current-manche-online_A3_current-manche-online_module_ts.js.map