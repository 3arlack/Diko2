"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_A5B3_loading_A5B3_loading_module_ts"],{

/***/ 2304:
/*!*****************************************************!*\
  !*** ./src/app/A5B3_loading/A5B3_loading.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: linear-gradient(180deg, var(--blue) 15%, rgba(150,150,150,0.7) 50%, var(--blue) 85%);\n  color: white;\n}\n\nion-grid {\n  color: white;\n}\n\nion-grid h3, h1 {\n  font-size: 12vw;\n  font-family: \"Sansation Bold\";\n  text-transform: uppercase;\n  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.25);\n}\n\nion-grid p {\n  font-size: 6vw;\n  font-family: \"Sansation\";\n  text-transform: uppercase;\n}\n\nion-chip {\n  font-size: 5vw;\n}\n\nion-spinner {\n  transform: scale(2);\n  margin-top: 5vw;\n  margin-bottom: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkE1QjNfbG9hZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrR0FBQTtFQUNBLFlBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7QUFDRDs7QUFFQTtFQUNDLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FBQ0Q7O0FBR0E7RUFDQyxjQUFBO0FBQUQ7O0FBR0E7RUFDQyxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFEIiwiZmlsZSI6IkE1QjNfbG9hZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1ibHVlKSAxNSUsIHJnYmEoMTUwLDE1MCwxNTAsMC43KSA1MCUsIHZhcigtLWJsdWUpIDg1JSk7XHJcblx0Y29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuaW9uLWdyaWQgaDMsaDEge1xyXG5cdGZvbnQtc2l6ZTogMTJ2dztcclxuXHRmb250LWZhbWlseTogJ1NhbnNhdGlvbiBCb2xkJztcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdHRleHQtc2hhZG93OiA3cHggN3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG5pb24tZ3JpZCBwIHtcclxuXHRmb250LXNpemU6IDZ2dztcclxuXHRmb250LWZhbWlseTogJ1NhbnNhdGlvbic7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHQvLyB0ZXh0LXNoYWRvdzogN3B4IDdweCA3cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuaW9uLWNoaXAge1xyXG5cdGZvbnQtc2l6ZTogNXZ3O1xyXG59XHJcblxyXG5pb24tc3Bpbm5lciB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuXHRtYXJnaW4tdG9wOiA1dnc7XHJcblx0bWFyZ2luLWJvdHRvbTogNXZ3O1xyXG59Il19 */";

/***/ }),

/***/ 5962:
/*!*************************************************************!*\
  !*** ./src/app/A5B3_loading/A5B3_loading-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageRoutingModule": () => (/* binding */ LoadingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _A5B3_loading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A5B3_loading.page */ 3662);




const routes = [
    {
        path: '',
        component: _A5B3_loading_page__WEBPACK_IMPORTED_MODULE_0__.A5B3_LoadingPage
    }
];
let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoadingPageRoutingModule);



/***/ }),

/***/ 1007:
/*!*****************************************************!*\
  !*** ./src/app/A5B3_loading/A5B3_loading.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageModule": () => (/* binding */ LoadingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _A5B3_loading_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A5B3_loading-routing.module */ 5962);
/* harmony import */ var _A5B3_loading_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A5B3_loading.page */ 3662);







let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _A5B3_loading_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoadingPageRoutingModule
        ],
        declarations: [_A5B3_loading_page__WEBPACK_IMPORTED_MODULE_1__.A5B3_LoadingPage]
    })
], LoadingPageModule);



/***/ }),

/***/ 3662:
/*!***************************************************!*\
  !*** ./src/app/A5B3_loading/A5B3_loading.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A5B3_LoadingPage": () => (/* binding */ A5B3_LoadingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A5B3_loading_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./A5B3_loading.page.html */ 6477);
/* harmony import */ var _A5B3_loading_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A5B3_loading.page.scss */ 2304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/partie.service */ 4617);






let A5B3_LoadingPage = class A5B3_LoadingPage {
    constructor(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.counter2 = 0;
        this.joueurs = [];
        this.partieEncours = this.service.partieEnCours;
        this.counter = 0;
        this.counter2 = 0;
        //Retrieve param in current Route to switch status
        this.route.queryParams.subscribe(param => {
            switch (param["status"]) {
                case "definitionOK": //When player has entered his definition
                    this.message = "En attente des autres joueurs...";
                    this.service.getPartie(this.partieEncours).subscribe(u => {
                        this.counter2 = u.joueur.length;
                    });
                    break;
                default:
                    break;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.joueurs = [];
        //Retrieve param in current Route to switch status
        this.route.queryParams.subscribe(param => {
            switch (param["status"]) {
                case "definitionOK":
                    this.waitingAllDefinition(this.service, this.router); //waiting for all definitions from all players before votes
                    break;
                default:
                    this.waitingConnectedPlayers(this.service, this.router); //
                    break;
            }
        });
    }
    waitingConnectedPlayers(service, router) {
        setTimeout(() => {
            console.log("check");
            service.getPartie(service.partieEnCours).subscribe(partie => {
                this.joueurs = partie.joueur; // Array of all expected players 
                const result = partie.joueur.filter(joueur => joueur.nom_joueur == null); // Array of players'name null in DB (not connected)
                const joueursConnectes = partie.joueur.filter(joueur => joueur.nom_joueur != null); // Array of connected players (with a name in DB)
                console.log("joueursCo : " + joueursConnectes.length + ", AllPlayers : " + this.joueurs.length);
                this.progress = joueursConnectes.length / this.joueurs.length; //progress bar 
                if (result.length > 0) { //if there are still player's not connected, we wait ...
                    console.log("toujours de la place");
                    this.waitingConnectedPlayers(service, router);
                }
                else { //if the array of not connected players is empty, the game start !
                    router.navigate(["current-manche-online"]);
                }
            });
        }, 1000);
    }
    waitingAllDefinition(service, router) {
        setTimeout(() => {
            console.log("check");
            service.checkDefinitions(service.partieEnCours, service.mancheEnCours, service.tourEnCours).subscribe(reponse => {
                this.counter2 = reponse.nbJoueurs; //number total of players 
                this.counter = reponse.nbJoueurs - reponse.nbDefNull; //number of players who already complete the definition
                this.progress = this.counter / this.counter2; //progress bar
                if (reponse.nbDefNull > 0) { //if still definiton null, we wait until every one complete the definition
                    this.waitingAllDefinition(service, router);
                }
                else {
                    this.router.navigate(["online-proposition"]); //when it's done, go to the propositions 
                }
            });
        }, 1000);
    }
};
A5B3_LoadingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_2__.PartieService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
A5B3_LoadingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-loading',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A5B3_loading_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_A5B3_loading_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], A5B3_LoadingPage);



/***/ }),

/***/ 6477:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/A5B3_loading/A5B3_loading.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        <!-- waiting message -->\r\n        <h1>{{message}}</h1>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"joueurs.length > 0\">\r\n      <ion-col class=\"ion-text-center\">\r\n        <h3>Joueurs connectés :</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"counter2 !=0\">\r\n      <ion-col class=\"ion-text-center\">\r\n        <!-- counter to know how many definition are complete -->\r\n        <p>Définitions remplies : {{counter}}/{{counter2}}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\t\t<ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        <!-- spinner-->\r\n        <ion-spinner name=\"lines\" color=\"light\"></ion-spinner>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center\">\r\n        <!-- progress bar -->\r\n        <ion-progress-bar [value]=\"progress\" color=\"light\"></ion-progress-bar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let joueur of joueurs;let index = index\">\r\n      <ion-col class=\"ion-text-center\">\r\n        <!-- chips of players connected -->\r\n        <ion-chip *ngIf=\"joueur.nom_joueur != null\">\r\n          <ion-avatar>\r\n            <img src=\"../../assets/avatarexemple.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            {{joueur.nom_joueur}}\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>    \r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_A5B3_loading_A5B3_loading_module_ts.js.map