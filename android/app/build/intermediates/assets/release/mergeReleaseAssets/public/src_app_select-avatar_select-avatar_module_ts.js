"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_select-avatar_select-avatar_module_ts"],{

/***/ 4027:
/*!*******************************************************!*\
  !*** ./src/app/select-avatar/select-avatar.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: linear-gradient(0deg, rgb(210,210,210) 0%, var(--orange) 100%);\n  color: white;\n}\n\nion-grid {\n  font-family: \"Sansation Bold\";\n  font-size: 5vw;\n  color: white;\n}\n\nh1 {\n  font-size: 12vw;\n  color: white;\n  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.25);\n}\n\nion-button {\n  margin-top: 10vh;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  font-size: 7vw;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-style: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(230,230,230);\n}\n\nion-avatar {\n  margin: 1vw;\n  height: 25vw;\n  width: 25vw;\n  background-color: #5e6dee;\n  display: inline-block;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);\n}\n\n.selected {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1hdmF0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNEVBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FBQ0Q7O0FBRUE7RUFDQyxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUFDRDs7QUFFQTtFQUNDLHFCQUFBO0FBQ0QiLCJmaWxlIjoic2VsZWN0LWF2YXRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDIxMCwyMTAsMjEwKSAwJSwgdmFyKC0tb3JhbmdlKSAxMDAlKTtcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG5cdGZvbnQtZmFtaWx5OlwiU2Fuc2F0aW9uIEJvbGRcIjtcclxuXHRmb250LXNpemU6NXZ3O1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5oMXtcclxuXHRmb250LXNpemU6MTJ2dztcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0ZXh0LXNoYWRvdzogN3B4IDdweCA3cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcblx0bWFyZ2luLXRvcDoxMHZoO1xyXG5cdHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGZvbnQtc2l6ZTo3dnc7XHJcblx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHQtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuXHQtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWhvdmVyIDogdHJhbnNwYXJlbnQ7XHJcblx0LS1ib3JkZXItc3R5bGU6IHRyYW5zcGFyZW50O1xyXG5cdC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcblx0LS1jb2xvci1ob3ZlcjpyZ2IoMjMwLDIzMCwyMzApO1xyXG59XHJcblxyXG5pb24tYXZhdGFye1xyXG5cdG1hcmdpbjoxdnc7XHJcblx0aGVpZ2h0OjI1dnc7XHJcblx0d2lkdGg6IDI1dnc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDk0LCAxMDksIDIzOCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLnNlbGVjdGVke1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */";

/***/ }),

/***/ 7158:
/*!***************************************************************!*\
  !*** ./src/app/select-avatar/select-avatar-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAvatarPageRoutingModule": () => (/* binding */ SelectAvatarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _select_avatar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-avatar.page */ 5509);




const routes = [
    {
        path: '',
        component: _select_avatar_page__WEBPACK_IMPORTED_MODULE_0__.SelectAvatarPage
    }
];
let SelectAvatarPageRoutingModule = class SelectAvatarPageRoutingModule {
};
SelectAvatarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectAvatarPageRoutingModule);



/***/ }),

/***/ 2172:
/*!*******************************************************!*\
  !*** ./src/app/select-avatar/select-avatar.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAvatarPageModule": () => (/* binding */ SelectAvatarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _select_avatar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-avatar-routing.module */ 7158);
/* harmony import */ var _select_avatar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-avatar.page */ 5509);







let SelectAvatarPageModule = class SelectAvatarPageModule {
};
SelectAvatarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _select_avatar_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectAvatarPageRoutingModule
        ],
        declarations: [_select_avatar_page__WEBPACK_IMPORTED_MODULE_1__.SelectAvatarPage]
    })
], SelectAvatarPageModule);



/***/ }),

/***/ 5509:
/*!*****************************************************!*\
  !*** ./src/app/select-avatar/select-avatar.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectAvatarPage": () => (/* binding */ SelectAvatarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_avatar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./select-avatar.page.html */ 6982);
/* harmony import */ var _select_avatar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-avatar.page.scss */ 4027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);






let SelectAvatarPage = class SelectAvatarPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.avatars = [];
        for (let i = 0; i < 21; i++) {
            this.avatars.push("../assets/avatars/adventurer-" + i + ".png");
        }
        this.route.queryParams.subscribe(param => {
            console.log(param);
            this.selection = param.number;
        });
    }
    ngOnInit() { }
    select(index) {
        this.selection = index;
        this.route.queryParams.subscribe(param => {
            console.log(param);
            this.router.navigate(['add-joueur'], { queryParams: { 'playerIndex': param.playerIndex, 'number': index } });
        });
    }
};
SelectAvatarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SelectAvatarPage.propDecorators = {
    ionAvatars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar,] }]
};
SelectAvatarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-select-avatar',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_select_avatar_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_select_avatar_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SelectAvatarPage);



/***/ }),

/***/ 6982:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/select-avatar/select-avatar.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\t<h1 class=\"ion-text-center\">Sélection avatar</h1>\n\t<div class=\"ion-text-center\">\n\t\t<ion-avatar [ngClass]=\"{'selected':selection == index}\" #ionAvatar *ngFor=\"let avatar of avatars; let index = index\" (click)=\"select(index)\">\n\t\t\t<img [src]=avatar>\n\t\t</ion-avatar>\n\t</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_select-avatar_select-avatar_module_ts.js.map