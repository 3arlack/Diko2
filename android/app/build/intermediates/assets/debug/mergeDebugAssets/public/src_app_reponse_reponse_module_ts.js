"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reponse_reponse_module_ts"],{

/***/ 276:
/*!*******************************************!*\
  !*** ./src/app/reponse/reponse.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color:linear-gradient(170deg, var(--blue) 20%, var(--orange) 0%);\n}\n\nion-content h1 {\n  font-size: 40px;\n  text-align: center;\n  text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.46);\n  color: white;\n  font-weight: bold;\n}\n\nion-content h2 {\n  font-size: 35px;\n  text-align: left;\n  font-family: \"Rancho\";\n}\n\nion-content h3 {\n  margin-top: 70px;\n  font-size: 25px;\n  text-align: center;\n  text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.46);\n  color: white;\n}\n\nion-content p {\n  font-size: 30px;\n  text-align: center;\n  margin: 30px;\n  font-family: \"Rancho\";\n  margin-top: 70px;\n}\n\n#imgCol {\n  background-image: url('reponse.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  position: relative;\n  left: 5%;\n  width: auto;\n  height: 35vh;\n}\n\n#imgCol::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  bottom: -48%;\n  left: -25%;\n  background: #d9d7d7;\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(12vh 5vw);\n          clip-path: ellipse(12vh 5vw);\n}\n\n#imgCol::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -2;\n  bottom: -49%;\n  left: -24%;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(12vh 5vw);\n          clip-path: ellipse(12vh 5vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9uc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUZBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDQyxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFEOztBQUlBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FBREQ7O0FBS0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUFGRCIsImZpbGUiOiJyZXBvbnNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpsaW5lYXItZ3JhZGllbnQoMTcwZGVnLCB2YXIoLS1ibHVlKSAyMCUsIHZhcigtLW9yYW5nZSkgMCUpO1xyXG59XHJcblxyXG5pb24tY29udGVudCBoMXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggNHB4IDNweCByZ2JhKDAsMCwwLDAuNDYpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaDJ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6XCJSYW5jaG9cIjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaDN7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCA0cHggM3B4IHJnYmEoMCwwLDAsMC40Nik7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgcHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OlwiUmFuY2hvXCI7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG5cclxuI2ltZ0NvbHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcmVwb25zZS5wbmdcIik7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0bGVmdDo1JTtcclxuXHR3aWR0aDphdXRvO1xyXG5cdGhlaWdodDozNXZoO1xyXG59XHJcblxyXG4vL3N1cHBvcnRcclxuI2ltZ0NvbDo6YmVmb3Jle1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0Y29udGVudDonJztcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAtMTtcclxuXHRib3R0b206LTQ4JTtcclxuXHRsZWZ0Oi0yNSU7XHJcblx0YmFja2dyb3VuZDogcmdiKDIxNywgMjE1LCAyMTUpO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdGNsaXAtcGF0aDogZWxsaXBzZSgxMnZoIDV2dyk7XHJcbn1cclxuXHJcbi8vIHNoYWRvd1xyXG4jaW1nQ29sOjphZnRlcntcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdGNvbnRlbnQ6Jyc7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0ei1pbmRleDogLTI7XHJcblx0Ym90dG9tOi00OSU7XHJcblx0bGVmdDotMjQlO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRjbGlwLXBhdGg6IGVsbGlwc2UoMTJ2aCA1dncpO1xyXG59Il19 */";

/***/ }),

/***/ 377:
/*!***************************************************!*\
  !*** ./src/app/reponse/reponse-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponsePageRoutingModule": () => (/* binding */ ReponsePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _reponse_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reponse.page */ 655);




const routes = [
    {
        path: '',
        component: _reponse_page__WEBPACK_IMPORTED_MODULE_0__.ReponsePage
    }
];
let ReponsePageRoutingModule = class ReponsePageRoutingModule {
};
ReponsePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReponsePageRoutingModule);



/***/ }),

/***/ 3875:
/*!*******************************************!*\
  !*** ./src/app/reponse/reponse.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponsePageModule": () => (/* binding */ ReponsePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _reponse_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reponse-routing.module */ 377);
/* harmony import */ var _reponse_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reponse.page */ 655);







let ReponsePageModule = class ReponsePageModule {
};
ReponsePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reponse_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReponsePageRoutingModule
        ],
        declarations: [_reponse_page__WEBPACK_IMPORTED_MODULE_1__.ReponsePage]
    })
], ReponsePageModule);



/***/ }),

/***/ 655:
/*!*****************************************!*\
  !*** ./src/app/reponse/reponse.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReponsePage": () => (/* binding */ ReponsePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reponse_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./reponse.page.html */ 1022);
/* harmony import */ var _reponse_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reponse.page.scss */ 276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offline.service */ 4056);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/partie.service */ 4617);




 // import Router to navigate
 // import service

let ReponsePage = class ReponsePage {
    constructor(service, route, onlineService, currentRoute) {
        this.service = service;
        this.route = route;
        this.onlineService = onlineService;
        this.currentRoute = currentRoute;
        this.partieEnCours = this.onlineService.partieEnCours;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        // Get param from current Route
        this.currentRoute.queryParams.subscribe(param => {
            this.status = param["status"];
            if (this.status == "online") { //If online mode
                // Get from DB : current word, correct definition
                this.onlineService.getPartie(this.partieEnCours).subscribe(u => {
                    this.onlineService.getTour(u.manche[this.onlineService.mancheEnCours]._ID).subscribe(tableauTours => {
                        this.mot = tableauTours[this.onlineService.tourEnCours].mot_choisi;
                        let idTour = tableauTours[this.onlineService.tourEnCours]._ID;
                        this.onlineService.getAllResultat(idTour).subscribe(tableauResultat => {
                            this.definition = this.onlineService.findDefinition(tableauResultat);
                        });
                    });
                });
            }
            else { //If online mode
                this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
                this.definition = this.service.definition;
            }
        });
    }
    // Routing method
    check() {
        if (this.status == "online") { //if online mode
            this.onlineService.getPartie(this.partieEnCours).subscribe(u => {
                if (this.onlineService.tourEnCours == u.joueur.length - 1) {
                    if (this.onlineService.mancheEnCours == u.manche.length - 1) {
                        this.route.navigate(['winner-resultat'], { queryParams: { status: "online" } });
                    }
                    else { // else, we go to a new round & reset the game turns counter
                        console.log("nouvelle manche !");
                        this.onlineService.mancheEnCours++;
                        this.onlineService.tourEnCours = 0;
                        this.route.navigate(['current-manche-online']);
                    }
                }
                else { // else, if there ARE game turns left, we go to the next game turn
                    console.log("nouveau tour !");
                    this.onlineService.tourEnCours++;
                    this.route.navigate(['online-definition']);
                }
                ;
            });
        }
        else { //if offline mode
            if (this.service.toursEnCours == this.service.joueurs.length - 1) {
                // if there are no more rounds left, we display the winner
                if (this.service.mancheEnCours == this.service.manches.length - 1) {
                    this.route.navigate(['winner-resultat']);
                }
                else { // else, we go to a new round & reset the game turns counter
                    this.service.mancheEnCours++;
                    this.service.toursEnCours = 0;
                    this.route.navigate(['current-manche']);
                }
            }
            else { // else, if there ARE game turns left, we go to the next game turn
                this.service.toursEnCours++;
                this.route.navigate(['select-mj']);
            }
        }
        // tests if there are no game turns left.
    }
};
ReponsePage.ctorParameters = () => [
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_2__.OfflineService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_3__.PartieService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
ReponsePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reponse',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_reponse_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reponse_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReponsePage);



/***/ }),

/***/ 1022:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/reponse/reponse.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content (click)=\"check()\">\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <h1>RÉPONSE</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <!-- word-->\r\n                <h2>{{mot}}</h2>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <h3>La bonne définition était :</h3>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <!--good definition-->\r\n                <p>\"{{definition}}\"</p>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row>\r\n            <ion-col size = \"4\">\r\n                <img src=\"../../assets/reponse.png\">\r\n            </ion-col>\r\n        </ion-row> -->\r\n        <div id=\"imgCol\"></div>\r\n    </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_reponse_reponse_module_ts.js.map