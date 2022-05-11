"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_A2_lobby_A2_lobby_module_ts"],{

/***/ 5825:
/*!*********************************************!*\
  !*** ./src/app/A2_lobby/A2_lobby.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: linear-gradient(0deg, rgb(210,210,210) 0%, var(--blue) 100%);\n}\n\nion-grid {\n  font-family: \"Sansation Bold\";\n  font-size: 5vw;\n  color: white;\n}\n\nh1 {\n  font-size: 12vw;\n  text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.25);\n}\n\nion-button {\n  margin-top: 10vh;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);\n  font-size: 7vw;\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --border-style: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(230,230,230);\n}\n\nion-chip {\n  font-size: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkEyX2xvYmJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBFQUFBO0FBQ0Q7O0FBRUE7RUFDQyw2QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsNENBQUE7QUFDRDs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFDRDs7QUFFQTtFQUNDLGNBQUE7QUFDRCIsImZpbGUiOiJBMl9sb2JieS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiKDIxMCwyMTAsMjEwKSAwJSwgdmFyKC0tYmx1ZSkgMTAwJSk7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuXHRmb250LWZhbWlseTpcIlNhbnNhdGlvbiBCb2xkXCI7XHJcblx0Zm9udC1zaXplOjV2dztcclxuXHRjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuaDF7XHJcblx0Zm9udC1zaXplOjEydnc7XHJcblx0dGV4dC1zaGFkb3c6IDdweCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG5cdG1hcmdpbi10b3A6MTB2aDtcclxuXHR0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHRmb250LXNpemU6N3Z3O1xyXG5cdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG5cdC0tYmFja2dyb3VuZC1ob3ZlciA6IHRyYW5zcGFyZW50O1xyXG5cdC0tYm9yZGVyLXN0eWxlOiB0cmFuc3BhcmVudDtcclxuXHQtLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xyXG5cdC0tY29sb3ItaG92ZXI6cmdiKDIzMCwyMzAsMjMwKTtcclxufVxyXG5cclxuaW9uLWNoaXAge1xyXG5cdGZvbnQtc2l6ZTogNXZ3O1xyXG59Il19 */";

/***/ }),

/***/ 7948:
/*!*****************************************************!*\
  !*** ./src/app/A2_lobby/A2_lobby-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LobbyPageRoutingModule": () => (/* binding */ LobbyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _A2_lobby_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A2_lobby.page */ 9193);




const routes = [
    {
        path: '',
        component: _A2_lobby_page__WEBPACK_IMPORTED_MODULE_0__.A2_LobbyPage
    }
];
let LobbyPageRoutingModule = class LobbyPageRoutingModule {
};
LobbyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LobbyPageRoutingModule);



/***/ }),

/***/ 845:
/*!*********************************************!*\
  !*** ./src/app/A2_lobby/A2_lobby.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LobbyPageModule": () => (/* binding */ LobbyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _A2_lobby_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A2_lobby-routing.module */ 7948);
/* harmony import */ var _A2_lobby_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A2_lobby.page */ 9193);







let LobbyPageModule = class LobbyPageModule {
};
LobbyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _A2_lobby_routing_module__WEBPACK_IMPORTED_MODULE_0__.LobbyPageRoutingModule
        ],
        declarations: [_A2_lobby_page__WEBPACK_IMPORTED_MODULE_1__.A2_LobbyPage]
    })
], LobbyPageModule);



/***/ }),

/***/ 9193:
/*!*******************************************!*\
  !*** ./src/app/A2_lobby/A2_lobby.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A2_LobbyPage": () => (/* binding */ A2_LobbyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A2_lobby_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./A2_lobby.page.html */ 5438);
/* harmony import */ var _A2_lobby_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A2_lobby.page.scss */ 5825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/partie.service */ 4617);







let A2_LobbyPage = class A2_LobbyPage {
    constructor(service, router, alert) {
        this.service = service;
        this.router = router;
        this.alert = alert;
        this.joueurs = []; // initialize array
        // retrieve current game from DB
        this.service.getPartie(this.service.partieEnCours).subscribe(u => {
            this.IDPartie = u.id;
            this.joueurs = u.joueur;
            this.maPartie = u;
            this.votes = this.chips.length; //Retrieves total number of votes from total number of ion-chip elements
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //all the players are waiting for the new players coming in the game ... 
        this.waitingPlayers(this.service, this.router, this.chips);
    }
    //button function from HTML -> "Démarrer" - Game host can start the game even if all the players expected are not connected ... 
    click(button) {
        if (button == true) {
            this.alert.create({
                header: "Attention",
                subHeader: "Tous les joueurs ne sont pas encore connectés",
                message: "Etes-vous sûr de vouloir lancer la partie avec les joueurs actuellement connectés ?",
                buttons: [
                    { text: "J'annule et j'attends", handler: () => { } },
                    { text: 'Je confirme', handler: () => { this.launchPartie(); } } // or to confirm and start the game -> go to OK()
                ]
            }).then(res => {
                res.present();
            });
        }
    }
    launchPartie() {
        this.service.createTour(this.service.partieEnCours).subscribe(() => {
            this.router.navigate(['current-manche-online']);
            // //we can delete the players without name in the DB, then go to the current-manche-online page.
        });
    }
    //all the players are waiting for the new players coming in the game ... 
    waitingPlayers(service, router, chips) {
        setTimeout(() => {
            console.log("check");
            service.getPartie(service.partieEnCours).subscribe(partie => //retreive the current game from DB
             {
                this.joueurs = partie.joueur; //all the players expected
                this.votes = chips.length; // all the players connected
                if (this.votes > 1) { //if the game host is alone, he can't start the game
                    this.button.disabled = false; //the button is disabled
                }
                if (this.votes == this.joueurs.length) { //when all the players expected are connected ...
                    this.launchPartie(); //-> go to launchPartie()
                }
                else {
                    this.waitingPlayers(service, router, chips); //else, the current player have to wait ...
                }
            });
        }, 1000);
    }
    ;
};
A2_LobbyPage.ctorParameters = () => [
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_2__.PartieService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
A2_LobbyPage.propDecorators = {
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonChip,] }],
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["button",] }]
};
A2_LobbyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-lobby',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A2_lobby_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_A2_lobby_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], A2_LobbyPage);



/***/ }),

/***/ 5438:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/A2_lobby/A2_lobby.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <h1>JOUEURS CONNECTES</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n              <!-- Game's number to give to another players to play online-->\r\n              <h3>Numéro de la partie : {{IDPartie}}</h3>\r\n          </ion-col>\r\n      </ion-row>\r\n        <ion-row *ngFor=\"let joueur of joueurs;let index = index\">\r\n            <ion-col class=\"ion-text-center\">\r\n                <!-- chips of all the players connected -->\r\n                <ion-chip *ngIf=\"joueur.nom_joueur != null\">\r\n                    <ion-avatar>\r\n                        <img src=\"../../assets/avatarexemple.jpg\">\r\n                    </ion-avatar>\r\n                    <ion-label>\r\n                        {{joueur.nom_joueur}}\r\n                    </ion-label>\r\n                </ion-chip>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <!-- number of players connected / number of players expected-->\r\n                {{votes}}/{{joueurs.length}}\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <!-- the button is disabled when the game's Master is alone-->\r\n                <ion-button (click)=\"click(true)\" disabled=\"true\" #button>Démarrer</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_A2_lobby_A2_lobby_module_ts.js.map