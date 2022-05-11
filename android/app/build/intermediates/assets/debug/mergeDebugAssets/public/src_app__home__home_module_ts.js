"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app__home__home_module_ts"],{

/***/ 9443:
/*!***************************************!*\
  !*** ./src/app/_home/_home.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-modal {\n  font-family: \"Sansation Bold\";\n  font-size: 5vw;\n  color: var(--white);\n  --background: linear-gradient(0deg, rgb(210,210,210) 0%, var(--blue) 100%);\n}\n\nion-modal ion-button {\n  margin-top: 10vh;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  font-size: 7vw;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-style: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(230,230,230);\n}\n\nion-grid {\n  height: 100%;\n}\n\nion-modal p {\n  margin-bottom: 10vh;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\nion-content {\n  --ion-background-color:linear-gradient(160deg, var(--blue) 50%, var(--orange) 0%);\n}\n\nion-img {\n  width: 100%;\n  margin-top: 50px;\n}\n\n.row_button {\n  margin-top: 120px;\n}\n\n.custom_home ion-button {\n  margin-top: 25px;\n  font-size: 25px;\n  --background: var(--blue);\n  --border-radius:8px;\n  height: 60px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEVBQUE7QUFGRDs7QUFNQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFIRDs7QUFPQTtFQUNDLFlBQUE7QUFKRDs7QUFPQTtFQUNDLG1CQUFBO0FBSkQ7O0FBT0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFKRDs7QUFXQTtFQUNDLGlGQUFBO0FBUkQ7O0FBWUE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QUFURDs7QUFjQTtFQUNDLGlCQUFBO0FBWEQ7O0FBZUE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWkQiLCJmaWxlIjoiX2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLS0tLS0tLSBNT0RBTCBDU1MgKGNob29zZSBiZXR3ZWVuIG9ubGluZSBvciBvZmZsaW5lIG1vZGUpLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbi8vIG1vZGFsIGJhY2tncm91bmRcclxuaW9uLW1vZGFsIHtcclxuXHRmb250LWZhbWlseTpcIlNhbnNhdGlvbiBCb2xkXCI7XHJcblx0Zm9udC1zaXplOjV2dztcclxuXHRjb2xvcjp2YXIoLS13aGl0ZSk7XHJcblx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDIxMCwyMTAsMjEwKSAwJSwgdmFyKC0tYmx1ZSkgMTAwJSk7XHJcbn1cclxuXHJcbi8vIG1vZGFsIGJ1dHRvbnNcclxuaW9uLW1vZGFsIGlvbi1idXR0b257XHJcblx0bWFyZ2luLXRvcDoxMHZoO1xyXG5cdHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGZvbnQtc2l6ZTo3dnc7XHJcblx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHQtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuXHQtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWhvdmVyIDogdHJhbnNwYXJlbnQ7XHJcblx0LS1ib3JkZXItc3R5bGU6IHRyYW5zcGFyZW50O1xyXG5cdC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcblx0LS1jb2xvci1ob3ZlcjpyZ2IoMjMwLDIzMCwyMzApO1xyXG59XHJcblxyXG4vLyBDZW50ZXIgbW9kYWwgZ3JpZCBjb250ZW50XHJcbmlvbi1ncmlke1xyXG5cdGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5pb24tbW9kYWwgcHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHZoXHQ7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLSBIT01FIENTUyAobG9nbyBhbmQgbmV3IGdhbWUgYnV0dG9uKSAtLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuLy8gYmFja2dyb3VuZCBjb2xvclxyXG5pb24tY29udGVudHtcclxuXHQtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCgxNjBkZWcsIHZhcigtLWJsdWUpIDUwJSwgdmFyKC0tb3JhbmdlKSAwJSk7XHJcbn1cclxuXHJcbi8vIGxvZ28gY3VzdG9tIFxyXG5pb24taW1ne1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cclxufVxyXG5cclxuLy8gYnV0dG9uJ3MgbG9jYXRpb25cclxuLnJvd19idXR0b257XHJcblx0bWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi8vIGJ1dHRvbidzIGN1c3RvbSBcclxuLmN1c3RvbV9ob21lIGlvbi1idXR0b257XHJcblx0bWFyZ2luLXRvcDogMjVweDtcclxuXHRmb250LXNpemU6IDI1cHg7XHJcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcclxuXHQtLWJvcmRlci1yYWRpdXM6OHB4O1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 1128:
/*!***********************************************!*\
  !*** ./src/app/_home/_home-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_home.page */ 4235);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__._HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 242:
/*!***************************************!*\
  !*** ./src/app/_home/_home.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_home.page */ 4235);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_home-routing.module */ 1128);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__._HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 4235:
/*!*************************************!*\
  !*** ./src/app/_home/_home.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_HomePage": () => (/* binding */ _HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./_home.page.html */ 6565);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_home.page.scss */ 9443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);




 //Import ModalController
let _HomePage = class _HomePage {
    constructor(modalController) {
        this.modalController = modalController;
        //Need to inject modalController to call it below
    }
    //Method called when creating a new game, to dismiss modal (else, it will stay on-screen even when changing route)
    dismiss() {
        this.modalController.dismiss(); // Call the dismiss() method of ModalController
    }
};
_HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
_HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], _HomePage);



/***/ }),

/***/ 6565:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/_home/_home.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\" class=\"fond\">\r\n\t<div id=\"container\">\r\n\t\t<ion-grid class=\"custom_home\" >\r\n\t\t\t<ion-row class=\"ion-justify-content-center\">\r\n\t\t\t\t<ion-col >\r\n\t\t\t\t\t<ion-img src=\"../../assets/dikologo.png\"></ion-img>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row class=\"ion-justify-content-center row_button\">\r\n\t\t\t\t<ion-col>\r\n\t\t\t\t\t<ion-button id=\"trigger-button\" expand=\"block\">NOUVELLE PARTIE</ion-button>\r\n\t\t\t\t\t<ion-button routerLink=\"/rejoindre-partie\" expand=\"block\">REJOINDRE LA PARTIE</ion-button>\r\n\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t</ion-grid>\r\n\r\n\t<!-- uses a modal to select game mode : online or offline. Display triggered by button with id \"triger-button\" -->\r\n\t\t<ion-modal\r\n\t\ttrigger=\"trigger-button\"\r\n\t\t[swipeToClose]=\"true\"\r\n\t\t>\r\n\t\t\t<ng-template>\r\n\t\t\t\t<ion-grid>\r\n\t\t\t\t\t<ion-row>\r\n\t\t\t\t\t\t<ion-col class=\"ion-text-center\">\r\n\t\t\t\t\t\t\t<ion-button routerLink=\"/online-host-create\" (click)=\"dismiss()\">Mode Connecté</ion-button>\r\n\t\t\t\t\t\t\t<p class=\"ion-text-end\">Joue en ligne avec tes amis,<br>\r\n\t\t\t\t\t\t\t\tchacun joue sur son téléphone !</p>\r\n\t\t\t\t\t\t\t<ion-button routerLink=\"/add-joueur\" (click)=\"dismiss()\">Mode Déconnecté</ion-button>\r\n\t\t\t\t\t\t\t<p class=\"ion-text-start\">Joue avec tes amis<br>sur un seul\r\n\t\t\t\t\t\t\t\ttéléphone !</p>\r\n\t\t\t\t\t\t</ion-col>\r\n\t\t\t\t\t</ion-row>\r\n\t\t\t\t</ion-grid>\r\n\t\t\t</ng-template>\r\n\t\t</ion-modal>\r\n\t</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app__home__home_module_ts.js.map