"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_A4_online-definition_A4_online-definition_module_ts"],{

/***/ 2662:
/*!*********************************************************************!*\
  !*** ./src/app/A4_online-definition/A4_online-definition.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: linear-gradient(0deg, var(--blue) 0%, var(--orange) 50%, var(--blue) 100%);\n}\n\nh1 {\n  font-family: \"Sansation Bold\";\n  font-size: 8vh;\n  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);\n  color: var(--white);\n  padding-bottom: 5vh;\n}\n\nion-textarea {\n  --background: rgba(246, 143, 89, 0.2);\n  padding: 5px;\n  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 3vh;\n}\n\nion-button {\n  font-size: 8vw;\n  font-family: \"Sansation\";\n  --color:black;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-style: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(50,50,50);\n}\n\nh2 {\n  font-family: \"Rancho\";\n  font-size: 6vh;\n}\n\np {\n  font-size: 5vw;\n}\n\n.main {\n  height: 100%;\n  text-align: center;\n}\n\n.cadre {\n  background: rgba(255, 244, 244, 0.95);\n  border: 6px solid var(--orange);\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5%;\n  padding: 2vh;\n  margin: 3vh;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n\n#imgCol {\n  background-image: url('joueur2.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  left: 0%;\n  width: auto;\n  height: 25vh;\n}\n\n#imgCol::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  bottom: -38%;\n  left: 0%;\n  background: white;\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(12vh 5vw);\n          clip-path: ellipse(12vh 5vw);\n}\n\n#imgCol::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -2;\n  bottom: -39%;\n  left: 1%;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(12vh 5vw);\n          clip-path: ellipse(12vh 5vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkE0X29ubGluZS1kZWZpbml0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdGQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFFQTtFQUNDLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUNEOztBQUVBO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFFQTtFQUNDLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUFBLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBR0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUFBRDs7QUFJQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQUREIiwiZmlsZSI6IkE0X29ubGluZS1kZWZpbml0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCB2YXIoLS1ibHVlKSAwJSwgdmFyKC0tb3JhbmdlKSA1MCUsIHZhcigtLWJsdWUpIDEwMCUpO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiU2Fuc2F0aW9uIEJvbGRcIjtcclxuXHRmb250LXNpemU6OHZoO1xyXG5cdHRleHQtc2hhZG93OiA2cHggNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGNvbG9yOnZhcigtLXdoaXRlKTtcclxuXHRwYWRkaW5nLWJvdHRvbTogNXZoO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG5cdC0tYmFja2dyb3VuZDogcmdiYSgyNDYsIDE0MywgODksIDAuMik7XHJcblx0cGFkZGluZzo1cHg7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHRtYXJnaW4tYm90dG9tOiAzdmg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG5cdGZvbnQtc2l6ZTo4dnc7XHJcblx0Zm9udC1mYW1pbHk6XCJTYW5zYXRpb25cIjtcclxuXHQtLWNvbG9yOmJsYWNrO1xyXG5cdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG5cdC0tYmFja2dyb3VuZC1ob3ZlciA6IHRyYW5zcGFyZW50O1xyXG5cdC0tYm9yZGVyLXN0eWxlOiB0cmFuc3BhcmVudDtcclxuXHQtLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xyXG5cdC0tY29sb3ItaG92ZXI6cmdiKDUwLDUwLDUwKTtcclxufVxyXG5cclxuaDIge1xyXG5cdGZvbnQtZmFtaWx5OiBcIlJhbmNob1wiO1xyXG5cdGZvbnQtc2l6ZTo2dmg7XHJcbn1cclxuXHJcbnAge1xyXG5cdGZvbnQtc2l6ZTo1dnc7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FkcmUge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDQsIDI0NCwgMC45NSk7XHJcblx0Ym9yZGVyOiA2cHggc29saWQgdmFyKC0tb3JhbmdlKTtcclxuXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUlO1xyXG5cdHBhZGRpbmc6IDJ2aDtcclxuXHRtYXJnaW46IDN2aDtcclxuXHRtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuI2ltZ0NvbHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvam91ZXVyMi5wbmdcIik7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdGxlZnQ6MCU7XHJcblx0d2lkdGg6YXV0bztcclxuXHRoZWlnaHQ6MjV2aDtcclxufVxyXG5cclxuLy9zdXBwb3J0XHJcbiNpbWdDb2w6OmJlZm9yZXtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdGNvbnRlbnQ6Jyc7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0ei1pbmRleDogLTE7XHJcblx0Ym90dG9tOi0zOCU7XHJcblx0bGVmdDowJTtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRjbGlwLXBhdGg6IGVsbGlwc2UoMTJ2aCA1dncpO1xyXG59XHJcblxyXG4vLyBzaGFkb3dcclxuI2ltZ0NvbDo6YWZ0ZXJ7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHRjb250ZW50OicnO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0yO1xyXG5cdGJvdHRvbTotMzklO1xyXG5cdGxlZnQ6MSU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdGNsaXAtcGF0aDogZWxsaXBzZSgxMnZoIDV2dyk7XHJcbn0iXX0= */";

/***/ }),

/***/ 2825:
/*!*****************************************************************************!*\
  !*** ./src/app/A4_online-definition/A4_online-definition-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineDefinitionPageRoutingModule": () => (/* binding */ OnlineDefinitionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _A4_online_definition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A4_online-definition.page */ 4074);




const routes = [
    {
        path: '',
        component: _A4_online_definition_page__WEBPACK_IMPORTED_MODULE_0__.A4_OnlineDefinitionPage
    }
];
let OnlineDefinitionPageRoutingModule = class OnlineDefinitionPageRoutingModule {
};
OnlineDefinitionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnlineDefinitionPageRoutingModule);



/***/ }),

/***/ 3953:
/*!*********************************************************************!*\
  !*** ./src/app/A4_online-definition/A4_online-definition.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineDefinitionPageModule": () => (/* binding */ OnlineDefinitionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _A4_online_definition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A4_online-definition-routing.module */ 2825);
/* harmony import */ var _A4_online_definition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A4_online-definition.page */ 4074);







let OnlineDefinitionPageModule = class OnlineDefinitionPageModule {
};
OnlineDefinitionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _A4_online_definition_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnlineDefinitionPageRoutingModule
        ],
        declarations: [_A4_online_definition_page__WEBPACK_IMPORTED_MODULE_1__.A4_OnlineDefinitionPage]
    })
], OnlineDefinitionPageModule);



/***/ }),

/***/ 4074:
/*!*******************************************************************!*\
  !*** ./src/app/A4_online-definition/A4_online-definition.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A4_OnlineDefinitionPage": () => (/* binding */ A4_OnlineDefinitionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A4_online_definition_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./A4_online-definition.page.html */ 9965);
/* harmony import */ var _A4_online_definition_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A4_online-definition.page.scss */ 2662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/partie.service */ 4617);







let A4_OnlineDefinitionPage = class A4_OnlineDefinitionPage {
    constructor(service, router, alert) {
        this.service = service;
        this.router = router;
        this.alert = alert;
        this.partie = this.service.partieEnCours;
        this.joueurEnCours = this.service.joueurEnCours;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //we make sur all definition input are empty.
        this.definition.value = "";
        // Retrieve current game from DB
        this.service.getPartie(this.partie).subscribe(u => {
            this.joueur = u.joueur[this.joueurEnCours].nom_joueur;
            this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours => {
                // Retrieve current word from DB
                this.mot = tableauTours[this.service.tourEnCours].mot_choisi;
            });
        });
    }
    //button "Valider"
    onClick() {
        if (this.definition.value == "") { //if the input is empty -> ALERT
            this.alert.create({
                header: "Erreur",
                message: "Vous devez rentrer une définition !",
                buttons: ['OK']
            }).then(res => {
                res.present();
            });
        }
        else { //if the definition is not empty
            // A OPTIMISER ??
            this.service.getPartie(this.partie).subscribe(u => {
                console.log(u);
                this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours => {
                    console.log(tableauTours);
                    let idTour = tableauTours[this.service.tourEnCours]._ID;
                    this.service.getResultat(idTour, this.service.joueurEnCours).subscribe(idResultat => {
                        console.log(idResultat);
                        this.service.updateResultat(idResultat, this.definition.value).subscribe(() => {
                            this.router.navigate(['loading'], { queryParams: { status: "definitionOK" } });
                        });
                    });
                });
            });
        }
    }
};
A4_OnlineDefinitionPage.ctorParameters = () => [
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_2__.PartieService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
A4_OnlineDefinitionPage.propDecorators = {
    definition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTextarea,] }]
};
A4_OnlineDefinitionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-online-definition',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A4_online_definition_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_A4_online_definition_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], A4_OnlineDefinitionPage);



/***/ }),

/***/ 9965:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/A4_online-definition/A4_online-definition.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\t<div class=\"main\">\r\n\t\t<!--player's name-->\r\n\t\t<h1>{{joueur}}</h1>\r\n\t\t<div class=\"cadre ion-text-center\">\r\n\t\t\t<!-- word-->\r\n\t\t\t<h2>{{mot}}</h2>\r\n\t\t\t<p>Quelle est ta définition ?</p>\r\n\t\t\t<!-- input to enter the definition-->\r\n\t\t\t<ion-textarea rows=8 inputmode=\"text\"></ion-textarea>\r\n\t\t\t<!-- button to validate the definition-->\r\n\t\t\t<ion-button (click)=\"onClick()\">Valider</ion-button>\r\n\t\t</div>\r\n\t\t<div id=\"imgCol\"></div>\r\n\t</div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_A4_online-definition_A4_online-definition_module_ts.js.map