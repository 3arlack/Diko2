"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_B1_rejoindre-partie_B1_rejoindre-partie_module_ts"],{

/***/ 2323:
/*!*******************************************************************!*\
  !*** ./src/app/B1_rejoindre-partie/B1_rejoindre-partie.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: linear-gradient(195deg ,var(--blue) 40%, #7882e1 60%, #aeb4e8 70%, var(--orange) 0% );\n}\n\nion-input {\n  font-size: 25px;\n  margin: 5px;\n  --background: transparent;\n  --border-style: transparent;\n}\n\nh1 {\n  color: white;\n  font-size: 40px;\n  margin-top: 60px;\n}\n\nion-button {\n  margin-top: 50px;\n  --background: transparent;\n  --border-style: transparent;\n  font-size: 50px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(230,230,230);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkIxX3Jlam9pbmRyZS1wYXJ0aWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkdBQUE7QUFBSjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQURKOztBQUtBO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUZEOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNILG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFMRCIsImZpbGUiOiJCMV9yZWpvaW5kcmUtcGFydGllLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vYmFja2dyb3VuZCBjb2xvciBcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE5NWRlZyAsdmFyKC0tYmx1ZSkgNDAlLCAjNzg4MmUxIDYwJSwgI2FlYjRlOCA3MCUsIHZhcigtLW9yYW5nZSkgMCUgKTtcclxufVxyXG5cclxuLy8gaW5wdXQgY3VzdG9tIFxyXG5pb24taW5wdXR7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLy90aXRsZSBjdXN0b20gXHJcbmgxIHtcclxuIGNvbG9yOndoaXRlO1xyXG4gZm9udC1zaXplOiA0MHB4O1xyXG4gbWFyZ2luLXRvcDo2MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8vYnV0dG9uIGN1c3RvbVxyXG5pb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcblx0LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG5cdC0tYmFja2dyb3VuZC1ob3ZlciA6IHRyYW5zcGFyZW50O1xyXG5cdC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcblx0LS1jb2xvci1ob3ZlcjpyZ2IoMjMwLDIzMCwyMzApO1xyXG59Il19 */";

/***/ }),

/***/ 1691:
/*!***************************************************************************!*\
  !*** ./src/app/B1_rejoindre-partie/B1_rejoindre-partie-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejoindrePartiePageRoutingModule": () => (/* binding */ RejoindrePartiePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _B1_rejoindre_partie_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./B1_rejoindre-partie.page */ 5923);




const routes = [
    {
        path: '',
        component: _B1_rejoindre_partie_page__WEBPACK_IMPORTED_MODULE_0__.B1_RejoindrePartiePage
    }
];
let RejoindrePartiePageRoutingModule = class RejoindrePartiePageRoutingModule {
};
RejoindrePartiePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RejoindrePartiePageRoutingModule);



/***/ }),

/***/ 5407:
/*!*******************************************************************!*\
  !*** ./src/app/B1_rejoindre-partie/B1_rejoindre-partie.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejoindrePartiePageModule": () => (/* binding */ RejoindrePartiePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _B1_rejoindre_partie_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./B1_rejoindre-partie-routing.module */ 1691);
/* harmony import */ var _B1_rejoindre_partie_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./B1_rejoindre-partie.page */ 5923);







let RejoindrePartiePageModule = class RejoindrePartiePageModule {
};
RejoindrePartiePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _B1_rejoindre_partie_routing_module__WEBPACK_IMPORTED_MODULE_0__.RejoindrePartiePageRoutingModule
        ],
        declarations: [_B1_rejoindre_partie_page__WEBPACK_IMPORTED_MODULE_1__.B1_RejoindrePartiePage]
    })
], RejoindrePartiePageModule);



/***/ }),

/***/ 5923:
/*!*****************************************************************!*\
  !*** ./src/app/B1_rejoindre-partie/B1_rejoindre-partie.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B1_RejoindrePartiePage": () => (/* binding */ B1_RejoindrePartiePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_B1_rejoindre_partie_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./B1_rejoindre-partie.page.html */ 6070);
/* harmony import */ var _B1_rejoindre_partie_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./B1_rejoindre-partie.page.scss */ 2323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/partie.service */ 4617);







let B1_RejoindrePartiePage = class B1_RejoindrePartiePage {
    constructor(service, route, alert) {
        this.service = service;
        this.route = route;
        this.alert = alert;
    }
    ngOnInit() {
    }
    //Check if game exists, else displays an error message
    OK() {
        // Gets game sessions from DB
        this.service.getPartie(Number(this.partie.value)).subscribe(u => {
            console.log(u);
            if (u != undefined && u.joueur.filter(joueur => joueur.nom_joueur == null).length > 0) { // If game exists
                this.service.partieEnCours = Number(this.partie.value);
                this.route.navigate(['/add-name']); // Route to next component
            }
            else {
                //Displays an error message
                this.alert.create({
                    header: "Erreur",
                    message: "Ce numéro de partie n'existe pas !",
                    buttons: ['OK']
                }).then(res => {
                    res.present();
                });
            }
        });
    }
};
B1_RejoindrePartiePage.ctorParameters = () => [
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_2__.PartieService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
B1_RejoindrePartiePage.propDecorators = {
    partie: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["numberGame",] }]
};
B1_RejoindrePartiePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rejoindre-partie',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_B1_rejoindre_partie_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_B1_rejoindre_partie_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], B1_RejoindrePartiePage);



/***/ }),

/***/ 6070:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/B1_rejoindre-partie/B1_rejoindre-partie.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"ion-text-center\" size=\"8\">\r\n        <h1>NUMERO DE PARTIE</h1>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"8\">\r\n        <!-- input to enter the number of a game already created-->\r\n        <ion-input type=\"number\" inputmode=\"numeric\" placeholder=\"Numéro de la partie\" #numberGame></ion-input>        \r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-end\">\r\n      <ion-button (click)=\"OK()\">OK</ion-button>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_B1_rejoindre-partie_B1_rejoindre-partie_module_ts.js.map