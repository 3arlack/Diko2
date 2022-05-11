"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_C6_propositions_C6_propositions_module_ts"],{

/***/ 2211:
/*!***********************************************************!*\
  !*** ./src/app/C6_propositions/C6_propositions.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-modal {\n  --background:var(--orange);\n  color: white;\n}\n\nh1 {\n  font-family: \"Sansation Bold\";\n  font-size: 6vh;\n  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);\n}\n\nh2 {\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n#imgCol {\n  background-image: url('annonce.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  width: auto;\n  min-height: 25vh;\n  height: 60vh;\n}\n\n#imgCol::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  bottom: -40%;\n  left: 7%;\n  background: white;\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(16vh 6vw);\n          clip-path: ellipse(16vh 6vw);\n}\n\n#imgCol::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -2;\n  bottom: -41%;\n  left: 8%;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(16vh 6vw);\n          clip-path: ellipse(16vh 6vw);\n}\n\nion-content {\n  --background:linear-gradient(190deg, var(--orange) 20%, var(--blue) 0%);\n}\n\n.custom_propositions h1 {\n  font-size: 40px;\n  text-align: center;\n  text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.46);\n  color: white;\n  font-weight: bold;\n}\n\n.custom_propositions h2 {\n  font-size: 35px;\n  text-align: right;\n  margin-right: 20px;\n  font-family: \"Rancho\";\n}\n\n.custom_propositions p {\n  font-size: 20px;\n  text-align: center;\n  margin-top: 10px;\n  color: white;\n}\n\n.custom_propositions h4 {\n  font-size: 35px;\n  text-align: left;\n  font-family: \"Rancho\";\n  color: white;\n  margin: 20px;\n}\n\nion-button {\n  float: right;\n  --border-radius: 19px;\n  --box-shadow: 1px 1px 3px #635c63;\n  font-size: 24px;\n  --background: #F68F59;\n  --background-activated:#f66f26;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM2X3Byb3Bvc2l0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQywwQkFBQTtFQUNBLFlBQUE7QUFGRDs7QUFLQTtFQUNDLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FBRkQ7O0FBS0E7RUFDQyw0Q0FBQTtBQUZEOztBQUtBO0VBQ0Msb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGRDs7QUFNQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQUhEOztBQU9BO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FBSkQ7O0FBVUE7RUFDQyx1RUFBQTtBQVBEOztBQVdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVlBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQVRKIiwiZmlsZSI6IkM2X3Byb3Bvc2l0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0gTU9EQUwgY3VzdG9tIC0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbmlvbi1tb2RhbHtcclxuXHQtLWJhY2tncm91bmQ6dmFyKC0tb3JhbmdlKTtcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtZmFtaWx5OiBcIlNhbnNhdGlvbiBCb2xkXCI7XHJcblx0Zm9udC1zaXplOjZ2aDtcclxuXHR0ZXh0LXNoYWRvdzogNnB4IDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuaDIge1xyXG5cdHRleHQtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4jaW1nQ29se1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9hbm5vbmNlLnBuZ1wiKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0d2lkdGg6YXV0bztcclxuXHRtaW4taGVpZ2h0OiAyNXZoO1xyXG5cdGhlaWdodDo2MHZoO1xyXG59XHJcblxyXG4vL3N1cHBvcnRcclxuI2ltZ0NvbDo6YmVmb3Jle1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0Y29udGVudDonJztcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAtMTtcclxuXHRib3R0b206LTQwJTtcclxuXHRsZWZ0OjclO1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdGNsaXAtcGF0aDogZWxsaXBzZSgxNnZoIDZ2dyk7XHJcbn1cclxuXHJcbi8vIHNoYWRvd1xyXG4jaW1nQ29sOjphZnRlcntcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdGNvbnRlbnQ6Jyc7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0ei1pbmRleDogLTI7XHJcblx0Ym90dG9tOi00MSU7XHJcblx0bGVmdDo4JTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0Y2xpcC1wYXRoOiBlbGxpcHNlKDE2dmggNnZ3KTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwcm9wb3NpdGlvbnMgcGFnZSBjdXN0b20gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuLy8gYmFja2dyb3VuZCBjb2xvclxyXG5pb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxOTBkZWcsIHZhcigtLW9yYW5nZSkgMjAlLCB2YXIoLS1ibHVlKSAwJSk7XHJcbn1cclxuXHJcbi8vdGl0bGVcclxuLmN1c3RvbV9wcm9wb3NpdGlvbnMgaDF7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDRweCAzcHggcmdiYSgwLDAsMCwwLjQ2KTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jdXN0b21fcHJvcG9zaXRpb25zIGgye1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTpcIlJhbmNob1wiO1xyXG59XHJcblxyXG4uY3VzdG9tX3Byb3Bvc2l0aW9ucyBwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uY3VzdG9tX3Byb3Bvc2l0aW9ucyBoNHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTpcIlJhbmNob1wiO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi8vYnV0dG9uIGN1c3RvbVxyXG5pb24tYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxOXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiAxcHggMXB4IDNweCAjNjM1YzYzO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjY4RjU5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZjY2ZjI2O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 3061:
/*!*******************************************************************!*\
  !*** ./src/app/C6_propositions/C6_propositions-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropositionsPageRoutingModule": () => (/* binding */ PropositionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _C6_propositions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C6_propositions.page */ 9177);




const routes = [
    {
        path: '',
        component: _C6_propositions_page__WEBPACK_IMPORTED_MODULE_0__.C6_PropositionsPage
    }
];
let PropositionsPageRoutingModule = class PropositionsPageRoutingModule {
};
PropositionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PropositionsPageRoutingModule);



/***/ }),

/***/ 9222:
/*!***********************************************************!*\
  !*** ./src/app/C6_propositions/C6_propositions.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropositionsPageModule": () => (/* binding */ PropositionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _C6_propositions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C6_propositions-routing.module */ 3061);
/* harmony import */ var _C6_propositions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C6_propositions.page */ 9177);







let PropositionsPageModule = class PropositionsPageModule {
};
PropositionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _C6_propositions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PropositionsPageRoutingModule
        ],
        declarations: [
            _C6_propositions_page__WEBPACK_IMPORTED_MODULE_1__.C6_PropositionsPage
        ]
    })
], PropositionsPageModule);



/***/ }),

/***/ 9177:
/*!*********************************************************!*\
  !*** ./src/app/C6_propositions/C6_propositions.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C6_PropositionsPage": () => (/* binding */ C6_PropositionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C6_propositions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./C6_propositions.page.html */ 4859);
/* harmony import */ var _C6_propositions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C6_propositions.page.scss */ 2211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offline.service */ 4056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);




 // import service
 // import ModalController 
let C6_PropositionsPage = class C6_PropositionsPage {
    constructor(ModalController, service) {
        this.ModalController = ModalController;
        this.service = service;
        this.joueurs = this.service.joueurs; // retrieve players
    } //inject service and modalController
    ngOnInit() {
        // At startup, retrieve the chosen word
        this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
        // Retrieve current Game Master (MJ)
        this.idMj = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].id_mj;
        // Also retrieve the "resultats" Array, containing each player's definition
        this.resultats = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat;
        console.log(this.joueurs);
        console.log(this.resultats);
        // Loop to find resultat of id_mj and insert real definition instead
        for (let i = 0; i < this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat.length; i++) {
            if (this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[i].id_joueur == this.idMj) {
                this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[i].definition = this.service.definition;
            }
        }
    }
    // dismiss Modal
    dismiss() {
        this.ModalController.dismiss();
    }
    ionViewWillEnter() {
        if (this.chips.length == this.joueurs.length - 1) {
            this.button.disabled = false;
        }
        else {
            this.button.disabled = true;
        }
    }
};
C6_PropositionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_2__.OfflineService }
];
C6_PropositionsPage.propDecorators = {
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonChip,] }],
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['button',] }]
};
C6_PropositionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-propositions',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C6_propositions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_C6_propositions_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], C6_PropositionsPage);



/***/ }),

/***/ 4859:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/C6_propositions/C6_propositions.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\t<ion-grid class=\"custom_propositions\">\r\n\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<h1>PROPOSITIONS</h1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<h2>{{mot}}</h2>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t\t<p>Clique sur les définitions pour les lire et récolte les votes des joueurs !</p>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t<!-- for every entry in current Tour's resultats, we create a line so we can enter votes -->\r\n\t\t\t<ion-row *ngFor=\"let resultat of resultats; let index = index\" routerLink=\"/vote-joueur\" [queryParams]=\"{ indexDefinition : [index]}\" >\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col>\r\n\t\t\t\t\t\t<h4>Définition n°{{index+1}}</h4>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t<ion-col *ngFor=\"let vote of resultat.id_vote\">\r\n\t\t\t\t\t\t<ion-chip>\r\n\t\t\t\t\t\t\t<ion-avatar>\r\n\t\t\t\t\t\t\t\t<img src=\"../../assets/avatarexemple.jpg\">\r\n\t\t\t\t\t\t\t</ion-avatar>\r\n\t\t\t\t\t\t\t<ion-label>\r\n\t\t\t\t\t\t\t\t{{joueurs[vote].nom_joueur}}\r\n\t\t\t\t\t\t\t</ion-label>\r\n\t\t\t\t\t\t</ion-chip>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-row>\r\n\r\n\t\t<ion-row>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<ion-button disabled=\"true\" routerLink=\"/reponse\" #button>Valider les votes</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n\r\n\t<!-- Modal displayed by default, just a warning for the Game Master -->\r\n\t<ion-modal\r\n\t[swipeToClose]=\"true\"\r\n\t[isOpen]=\"true\"\r\n\t(click)=\"dismiss()\"\r\n\t>\r\n\t\t<ng-template>\r\n\t\t\t<ion-grid>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\r\n\t\t\t\t\t\t<h1>MAÎTRE DU JEU</h1>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row class=\"ion-justify-content-center\">\r\n\t\t\t\t\t<ion-col id=\"imgCol\">\r\n\t\t\t\t\t\t<!-- <ion-img src=\"../../assets/annonce.png\"></ion-img> -->\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\r\n\t\t\t\t\t\t<h2>TU VAS LIRE LES DÉFINITIONS PROPOSÉES...</h2>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t\t<ion-row>\r\n\t\t\t\t\t<ion-col class=\"ion-text-center\">\r\n\t\t\t\t\t\t<h2>PARMI ELLES, SE CACHE LA BONNE DÉFINITION...</h2>\r\n\t\t\t\t\t</ion-col>\r\n\t\t\t\t</ion-row>\r\n\t\t\t</ion-grid>\r\n\t\t</ng-template>\r\n\t</ion-modal>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_C6_propositions_C6_propositions_module_ts.js.map