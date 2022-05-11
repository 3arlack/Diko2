"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_winner-resultat_winner-resultat_module_ts"],{

/***/ 2281:
/*!***********************************************************!*\
  !*** ./src/app/winner-resultat/winner-resultat.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: linear-gradient(180deg, var(--blue) 0%, var(--orange) 100%);\n  --color:white;\n  font-size: 5vh;\n}\n\nion-modal {\n  --background: linear-gradient(180deg, var(--blue) 0%, var(--orange) 100%);\n  color: white;\n}\n\nion-grid {\n  --min-height:70vh;\n}\n\nh1 {\n  font-family: \"Sansation Bold\";\n  font-size: 6vh;\n  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);\n}\n\nh4 {\n  font-family: \"Sansation Bold\";\n}\n\nion-modal p {\n  font-size: 6vh;\n}\n\n#image {\n  background-image: url('winner.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  width: auto;\n  min-height: 30vh;\n  height: 60vh;\n}\n\n#image::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0%;\n  left: 22%;\n  background: #E33434;\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: polygon(20% 70%, 50% 70%, 35% 100%, 0% 100%);\n          clip-path: polygon(20% 70%, 50% 70%, 35% 100%, 0% 100%);\n}\n\n#image::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -2;\n  top: 1%;\n  left: 23%;\n  background: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: polygon(20% 70%, 50% 70%, 35% 100%, 0% 100%);\n          clip-path: polygon(20% 70%, 50% 70%, 35% 100%, 0% 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbm5lci1yZXN1bHRhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5RUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBR0E7RUFDQyx5RUFBQTtFQUNBLFlBQUE7QUFBRDs7QUFHQTtFQUNDLGlCQUFBO0FBQUQ7O0FBR0E7RUFDQyw2QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtBQUFEOztBQUdBO0VBQ0MsNkJBQUE7QUFBRDs7QUFHQTtFQUNDLGNBQUE7QUFBRDs7QUFJQTtFQUNDLG1DQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBREQ7O0FBS0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtEQUFBO1VBQUEsdURBQUE7QUFGRDs7QUFNQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0RBQUE7VUFBQSx1REFBQTtBQUhEIiwiZmlsZSI6Indpbm5lci1yZXN1bHRhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1ibHVlKSAwJSwgdmFyKC0tb3JhbmdlKSAxMDAlKTtcclxuXHQtLWNvbG9yOndoaXRlO1xyXG5cdGZvbnQtc2l6ZTo1dmg7XHJcbn1cclxuXHJcbi8vIG1vZGFsIGJhY2tncm91bmRcclxuaW9uLW1vZGFsIHtcclxuXHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJsdWUpIDAlLCB2YXIoLS1vcmFuZ2UpIDEwMCUpO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcblx0LS1taW4taGVpZ2h0Ojcwdmg7XHJcbn1cclxuXHJcbmgxe1xyXG5cdGZvbnQtZmFtaWx5OlwiU2Fuc2F0aW9uIEJvbGRcIjtcclxuXHRmb250LXNpemU6NnZoO1xyXG5cdHRleHQtc2hhZG93OiA2cHggNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG5oNHtcclxuXHRmb250LWZhbWlseTogXCJTYW5zYXRpb24gQm9sZFwiO1xyXG59XHJcblxyXG5pb24tbW9kYWwgcHtcclxuXHRmb250LXNpemU6NnZoO1xyXG59XHJcblxyXG4vL2ltYWdlXHJcbiNpbWFnZXtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvd2lubmVyLnBuZ1wiKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0d2lkdGg6YXV0bztcclxuXHRtaW4taGVpZ2h0OiAzMHZoO1xyXG5cdGhlaWdodDo2MHZoO1xyXG59XHJcblxyXG4vL3N1cHBvcnRcclxuI2ltYWdlOjpiZWZvcmV7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHRjb250ZW50OicnO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG5cdHRvcDowJTtcclxuXHRsZWZ0OjIyJTtcclxuXHRiYWNrZ3JvdW5kOiAjRTMzNDM0O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdGNsaXAtcGF0aDogcG9seWdvbigyMCUgNzAlLCA1MCUgNzAlLCAzNSUgMTAwJSwgMCUgMTAwJSk7XHJcbn1cclxuXHJcbi8vc2hhZG93XHJcbiNpbWFnZTo6YWZ0ZXJ7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHRjb250ZW50OicnO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0yO1xyXG5cdHRvcDoxJTtcclxuXHRsZWZ0OjIzJTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0Y2xpcC1wYXRoOiBwb2x5Z29uKDIwJSA3MCUsIDUwJSA3MCUsIDM1JSAxMDAlLCAwJSAxMDAlKTtcclxufSJdfQ== */";

/***/ }),

/***/ 2184:
/*!*******************************************************************!*\
  !*** ./src/app/winner-resultat/winner-resultat-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinnerResultatPageRoutingModule": () => (/* binding */ WinnerResultatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _winner_resultat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winner-resultat.page */ 9934);




const routes = [
    {
        path: '',
        component: _winner_resultat_page__WEBPACK_IMPORTED_MODULE_0__.WinnerResultatPage
    }
];
let WinnerResultatPageRoutingModule = class WinnerResultatPageRoutingModule {
};
WinnerResultatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WinnerResultatPageRoutingModule);



/***/ }),

/***/ 952:
/*!***********************************************************!*\
  !*** ./src/app/winner-resultat/winner-resultat.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinnerResultatPageModule": () => (/* binding */ WinnerResultatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _winner_resultat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winner-resultat-routing.module */ 2184);
/* harmony import */ var _winner_resultat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winner-resultat.page */ 9934);







let WinnerResultatPageModule = class WinnerResultatPageModule {
};
WinnerResultatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _winner_resultat_routing_module__WEBPACK_IMPORTED_MODULE_0__.WinnerResultatPageRoutingModule
        ],
        declarations: [_winner_resultat_page__WEBPACK_IMPORTED_MODULE_1__.WinnerResultatPage]
    })
], WinnerResultatPageModule);



/***/ }),

/***/ 9934:
/*!*********************************************************!*\
  !*** ./src/app/winner-resultat/winner-resultat.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinnerResultatPage": () => (/* binding */ WinnerResultatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_winner_resultat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./winner-resultat.page.html */ 4214);
/* harmony import */ var _winner_resultat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winner-resultat.page.scss */ 2281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offline.service */ 4056);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/partie.service */ 4617);








let WinnerResultatPage = class WinnerResultatPage {
    constructor(service, modalController, currentRoute, onlineService) {
        this.service = service;
        this.modalController = modalController;
        this.currentRoute = currentRoute;
        this.onlineService = onlineService;
        this.joueurs = [];
        this.partieEnCours = this.onlineService.partieEnCours;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //Get status from route param : online or offline
        this.currentRoute.queryParams.subscribe(param => {
            this.status = param["status"];
            if (this.status == "online") { //if online mode
                this.onlineService.getScores(this.partieEnCours).subscribe(partie => {
                    this.joueurs = partie.joueur;
                    // Sort player array to find winner
                    this.joueurs.sort((a, b) => {
                        return b.score_joueur - a.score_joueur;
                    });
                    this.winner = this.joueurs[0].nom_joueur;
                    // Reset all values
                    this.onlineService.mancheEnCours = 0;
                    this.onlineService.tourEnCours = 0;
                });
            }
            else { //if offline mode
                this.joueurs = this.service.joueurs;
                for (let i = 0; i < this.joueurs.length; i++) {
                    for (let p = 0; p < this.service.manches.length; p++) {
                        for (let x = 0; x < this.service.manches[p].tours.length; x++) {
                            // If the current player is not the game master
                            if (this.joueurs[i].id_joueur !== this.service.manches[p].tours[x].id_mj) {
                                for (let y = 0; y < this.service.manches[p].tours[x].resultat.length; y++) {
                                    for (let z = 0; z < this.service.manches[p].tours[x].resultat[y].id_vote.length; z++) {
                                        //If he votes for the good definition
                                        if (this.service.manches[p].tours[x].id_mj == this.service.manches[p].tours[x].resultat[y].id_joueur && this.joueurs[i].id_joueur == this.service.manches[p].tours[x].resultat[y].id_vote[z]) {
                                            console.log("point bonne définition accordé à : " + this.joueurs[i].nom_joueur);
                                            this.joueurs[i].score_joueur++; //1 point for the current player
                                            // If the current player votes for another defintion....
                                        }
                                        else if (this.joueurs[i].id_joueur == this.service.manches[p].tours[x].resultat[y].id_vote[z] && this.joueurs[i].id_joueur !== this.service.manches[p].tours[x].resultat[y].id_joueur) {
                                            console.log("point vote accordé à : " + this.joueurs[this.service.manches[p].tours[x].resultat[y].id_joueur].nom_joueur + ", tour : " + x + ", resultat : " + y);
                                            this.joueurs[this.service.manches[p].tours[x].resultat[y].id_joueur].score_joueur++; //1 point for the definition's player
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Reset all values
                this.service.mancheEnCours = 0;
                this.service.toursEnCours = 0;
                // Sort player array to find winner
                this.joueurs.sort((a, b) => {
                    return b.score_joueur - a.score_joueur;
                });
                this.winner = this.joueurs[0].nom_joueur;
            }
        });
    }
    dismiss() {
        this.modalController.dismiss();
    }
};
WinnerResultatPage.ctorParameters = () => [
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_2__.OfflineService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_3__.PartieService }
];
WinnerResultatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-winner-resultat',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_winner_resultat_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_winner_resultat_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WinnerResultatPage);



/***/ }),

/***/ 4214:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/winner-resultat/winner-resultat.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\t<ion-grid>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col class=\"ion-text-center\">\r\n\t\t\t\t<h1>RESULTATS</h1>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row *ngFor=\"let joueur of joueurs;let index = index\" class=\"ion-text-center\">\r\n\t\t\t<ion-col>\r\n\t\t\t\t<h4>{{joueur.nom_joueur}}</h4>\r\n\t\t\t</ion-col>\r\n\t\t\t<ion-col>\r\n\t\t\t\t<h5>{{joueur.score_joueur}} POINTS</h5>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t\t<ion-row>\r\n\t\t\t<ion-col class=\"ion-text-center\">\r\n\t\t\t\t<ion-button color=\"danger\" size=\"large\" routerLink=\"/\">REJOUER</ion-button>\r\n\t\t\t</ion-col>\r\n\t\t</ion-row>\r\n\t</ion-grid>\r\n\r\n\t<!-- Modal displayed by default, announcing the winner name -->\r\n\t<ion-modal\r\n\t[swipeToClose]=\"true\"\r\n\t[isOpen]=\"true\"\r\n\t(click)=\"dismiss()\"\r\n\t>\r\n\t\t<ng-template>\r\n\t\t\t<div class=\"ion-align-items-start\">\t\t\t\t\r\n\t\t\t\t<h1 class=\"ion-text-center\">LE GRAND GAGNANT EST</h1>\r\n\t\t\t\t<p class=\"ion-text-center\">{{winner}}</p>\r\n\t\t\t\t<div class=\"ion-text-center\" id=\"image\"></div>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</ion-modal>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_winner-resultat_winner-resultat_module_ts.js.map