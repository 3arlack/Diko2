"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_C5_definition-joueur_C5_definition-joueur_module_ts"],{

/***/ 3641:
/*!*********************************************************************!*\
  !*** ./src/app/C5_definition-joueur/C5_definition-joueur.page.scss ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "ion-modal {\n  --background: linear-gradient(0deg, var(--blue) 0%, var(--orange) 50%, var(--blue) 100%);\n}\n\nion-modal h1 {\n  font-family: \"Sansation Bold\";\n  font-size: 8vh;\n  text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);\n  color: var(--white);\n  padding-bottom: 5vh;\n}\n\nion-modal ion-textarea {\n  --background: rgba(246, 143, 89, 0.2);\n  padding: 5px;\n  box-shadow: inset 4px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 3vh;\n}\n\nion-modal ion-button {\n  font-size: 8vw;\n  font-family: \"Sansation\";\n  --color:black;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-style: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(50,50,50);\n}\n\nion-modal h2 {\n  font-family: \"Rancho\";\n  font-size: 6vh;\n}\n\nion-modal p {\n  font-size: 5vw;\n}\n\n.main {\n  height: 100%;\n}\n\n.cadre {\n  background: rgba(255, 244, 244, 0.95);\n  border: 6px solid var(--orange);\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5%;\n  padding: 2vh;\n  margin: 3vh;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM1X2RlZmluaXRpb24tam91ZXVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHdGQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNDLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFFQTtFQUNDLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUNEOztBQUVBO0VBQ0MscUJBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFBQSx1QkFBQTtBQUNEIiwiZmlsZSI6IkM1X2RlZmluaXRpb24tam91ZXVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tb2RhbCB7XHJcblx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgdmFyKC0tYmx1ZSkgMCUsIHZhcigtLW9yYW5nZSkgNTAlLCB2YXIoLS1ibHVlKSAxMDAlKTtcclxufVxyXG5cclxuaW9uLW1vZGFsIGgxIHtcclxuXHRmb250LWZhbWlseTogXCJTYW5zYXRpb24gQm9sZFwiO1xyXG5cdGZvbnQtc2l6ZTo4dmg7XHJcblx0dGV4dC1zaGFkb3c6IDZweCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcblx0Y29sb3I6dmFyKC0td2hpdGUpO1xyXG5cdHBhZGRpbmctYm90dG9tOiA1dmg7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCBpb24tdGV4dGFyZWEge1xyXG5cdC0tYmFja2dyb3VuZDogcmdiYSgyNDYsIDE0MywgODksIDAuMik7XHJcblx0cGFkZGluZzo1cHg7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHRtYXJnaW4tYm90dG9tOiAzdmg7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCBpb24tYnV0dG9uIHtcclxuXHRmb250LXNpemU6OHZ3O1xyXG5cdGZvbnQtZmFtaWx5OlwiU2Fuc2F0aW9uXCI7XHJcblx0LS1jb2xvcjpibGFjaztcclxuXHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xyXG5cdC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuXHQtLWJhY2tncm91bmQtaG92ZXIgOiB0cmFuc3BhcmVudDtcclxuXHQtLWJvcmRlci1zdHlsZTogdHJhbnNwYXJlbnQ7XHJcblx0LS1ib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcclxuXHQtLWNvbG9yLWhvdmVyOnJnYig1MCw1MCw1MCk7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCBoMntcclxuXHRmb250LWZhbWlseTogXCJSYW5jaG9cIjtcclxuXHRmb250LXNpemU6NnZoO1xyXG59XHJcblxyXG5pb24tbW9kYWwgcHtcclxuXHRmb250LXNpemU6NXZ3O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FkcmUge1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDQsIDI0NCwgMC45NSk7XHJcblx0Ym9yZGVyOiA2cHggc29saWQgdmFyKC0tb3JhbmdlKTtcclxuXHRib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUlO1xyXG5cdHBhZGRpbmc6IDJ2aDtcclxuXHRtYXJnaW46IDN2aDtcclxuXHRtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcclxufSJdfQ== */";

/***/ }),

/***/ 7823:
/*!*****************************************************************************!*\
  !*** ./src/app/C5_definition-joueur/C5_definition-joueur-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefinitionJoueurPageRoutingModule": () => (/* binding */ DefinitionJoueurPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _C5_definition_joueur_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C5_definition-joueur.page */ 6036);




const routes = [
    {
        path: '',
        component: _C5_definition_joueur_page__WEBPACK_IMPORTED_MODULE_0__.C5_DefinitionJoueurPage
    }
];
let DefinitionJoueurPageRoutingModule = class DefinitionJoueurPageRoutingModule {
};
DefinitionJoueurPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DefinitionJoueurPageRoutingModule);



/***/ }),

/***/ 8947:
/*!*********************************************************************!*\
  !*** ./src/app/C5_definition-joueur/C5_definition-joueur.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefinitionJoueurPageModule": () => (/* binding */ DefinitionJoueurPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _C5_definition_joueur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C5_definition-joueur-routing.module */ 7823);
/* harmony import */ var _C5_definition_joueur_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C5_definition-joueur.page */ 6036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);








let DefinitionJoueurPageModule = class DefinitionJoueurPageModule {
};
DefinitionJoueurPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _C5_definition_joueur_routing_module__WEBPACK_IMPORTED_MODULE_0__.DefinitionJoueurPageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
        declarations: [_C5_definition_joueur_page__WEBPACK_IMPORTED_MODULE_1__.C5_DefinitionJoueurPage]
    })
], DefinitionJoueurPageModule);



/***/ }),

/***/ 6036:
/*!*******************************************************************!*\
  !*** ./src/app/C5_definition-joueur/C5_definition-joueur.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C5_DefinitionJoueurPage": () => (/* binding */ C5_DefinitionJoueurPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C5_definition_joueur_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./C5_definition-joueur.page.html */ 6968);
/* harmony import */ var _C5_definition_joueur_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C5_definition-joueur.page.scss */ 3641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offline.service */ 4056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);




 //import service
 //import modalController
 // import Router
let C5_DefinitionJoueurPage = class C5_DefinitionJoueurPage {
    // inject service, ModalController (to dismiss modals) and router (to navigate to new route at the end)
    constructor(service, modalController, router, alert) {
        this.service = service;
        this.modalController = modalController;
        this.router = router;
        this.alert = alert;
        this.indexJoueur = 0;
    }
    ngOnInit() {
        // Retrieve current word from service
        this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
        // Retrieve array of players
        this.joueurs = this.service.joueurs;
        //Retrieve id of current Game Master (MJ)
        this.idMj = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].id_mj;
    }
    //on dismiss Modal
    dismiss(index) {
        // debugger;
        if (document.getElementById("definition" + index).value == "") {
            this.alert.create({
                header: "Erreur",
                message: "Merci de saisir une définition !",
                buttons: ['OK']
            }).then(res => {
                res.present();
            });
        }
        else {
            this.indexJoueur++; // increment indexJoueur
            // We retrieve current player's definition and put it in the service
            for (let b = 0; b < this.joueurs.length; b++) {
                if (this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[b].id_joueur == index) {
                    this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[b].definition = document.getElementById("definition" + index).value;
                }
            }
            // Also retrieve player's id
            // this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[index].id_joueur = 
            // this.joueurs[index].id_joueur;
            //Check : if we get to the last modal, we navigate to next page and dismiss modal ; else, just dismiss current modal.
            if (this.indexJoueur == this.joueurs.length - 1) {
                this.indexJoueur = 0;
                this.router.navigate(['propositions']);
                this.modalController.dismiss();
            }
            else {
                this.modalController.dismiss();
            }
        }
    }
    ionViewWillEnter() {
        console.log(this.service.manches);
    }
};
C5_DefinitionJoueurPage.ctorParameters = () => [
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_2__.OfflineService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
C5_DefinitionJoueurPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-definition-joueur',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C5_definition_joueur_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_C5_definition_joueur_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], C5_DefinitionJoueurPage);



/***/ }),

/***/ 6968:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/C5_definition-joueur/C5_definition-joueur.page.html ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n\t<!-- We create a modal for every player, so player can input its definition. They're displayed on top of each other and so hide each other. -->\r\n\t<ng-container *ngFor=\"let joueur of joueurs ; let indexElement = index\">\r\n\t\t<!-- Only create element if player is NOT MJ -->\r\n\t\t<ion-modal *ngIf=\"idMj!=joueur.id_joueur\"\r\n\t\t[swipeToClose]=\"false\"\r\n\t\t[isOpen]=\"true\"\r\n\t\t>\r\n\t\t\t<ng-template>\r\n\t\t\t\t<div class=\"main\">\r\n\t\t\t\t\t<h1 class=\"ion-text-center\" id=\"{{joueur.id_joueur}}\">{{joueur.nom_joueur}}</h1>\r\n\t\t\t\t\t<div class=\"cadre ion-text-center\">\r\n\t\t\t\t\t\t<h2>{{mot}}</h2>\r\n\t\t\t\t\t\t<p>Quelle est ta définition ?</p>\r\n\t\t\t\t\t\t<!--input to enter the definition-->\r\n\t\t\t\t\t\t<ion-textarea rows=\"14\" id=\"{{'definition' + indexElement}}\" inputmode=\"text\"></ion-textarea>\r\n\t\t\t\t\t\t<ion-button (click)=\"dismiss(indexElement)\">Valider</ion-button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t</ion-modal>\r\n\t</ng-container>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_C5_definition-joueur_C5_definition-joueur_module_ts.js.map