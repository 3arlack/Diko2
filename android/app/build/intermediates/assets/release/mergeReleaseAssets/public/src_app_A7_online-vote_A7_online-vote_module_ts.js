"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_A7_online-vote_A7_online-vote_module_ts"],{

/***/ 9691:
/*!*********************************************************!*\
  !*** ./src/app/A7_online-vote/A7_online-vote.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:linear-gradient(190deg, var(--orange) 20%, var(--blue) 0%);\n}\n\nion-content h1 {\n  font-size: 40px;\n  text-align: center;\n  text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.46);\n  color: white;\n  font-weight: bold;\n}\n\nion-content h2 {\n  font-size: 35px;\n  text-align: right;\n  margin-right: 20px;\n  font-family: \"Rancho\";\n}\n\nion-content p {\n  font-size: 35px;\n  text-align: center;\n  margin: 30px;\n  font-family: \"Rancho\";\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkE3X29ubGluZS12b3RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVFQUFBO0FBREo7O0FBS0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUZKOztBQU1BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFISiIsImZpbGUiOiJBN19vbmxpbmUtdm90ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy9iYWNrZ3JvdW5kIGNvbG9yXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxOTBkZWcsIHZhcigtLW9yYW5nZSkgMjAlLCB2YXIoLS1ibHVlKSAwJSk7XHJcbiAgICBcclxufVxyXG4vL3RpdGxlXHJcbmlvbi1jb250ZW50IGgxe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCA0cHggM3B4IHJnYmEoMCwwLDAsMC40Nik7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi8vdGl0bGVcclxuaW9uLWNvbnRlbnQgaDJ7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OlwiUmFuY2hvXCI7XHJcbn1cclxuXHJcblxyXG5pb24tY29udGVudCBwe1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6XCJSYW5jaG9cIjtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 1238:
/*!*****************************************************************!*\
  !*** ./src/app/A7_online-vote/A7_online-vote-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineVotePageRoutingModule": () => (/* binding */ OnlineVotePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _A7_online_vote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A7_online-vote.page */ 6302);




const routes = [
    {
        path: '',
        component: _A7_online_vote_page__WEBPACK_IMPORTED_MODULE_0__.A7_OnlineVotePage
    }
];
let OnlineVotePageRoutingModule = class OnlineVotePageRoutingModule {
};
OnlineVotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnlineVotePageRoutingModule);



/***/ }),

/***/ 1382:
/*!*********************************************************!*\
  !*** ./src/app/A7_online-vote/A7_online-vote.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineVotePageModule": () => (/* binding */ OnlineVotePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _A7_online_vote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A7_online-vote-routing.module */ 1238);
/* harmony import */ var _A7_online_vote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A7_online-vote.page */ 6302);







let OnlineVotePageModule = class OnlineVotePageModule {
};
OnlineVotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _A7_online_vote_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnlineVotePageRoutingModule
        ],
        declarations: [_A7_online_vote_page__WEBPACK_IMPORTED_MODULE_1__.A7_OnlineVotePage]
    })
], OnlineVotePageModule);



/***/ }),

/***/ 6302:
/*!*******************************************************!*\
  !*** ./src/app/A7_online-vote/A7_online-vote.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A7_OnlineVotePage": () => (/* binding */ A7_OnlineVotePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A7_online_vote_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./A7_online-vote.page.html */ 7463);
/* harmony import */ var _A7_online_vote_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A7_online-vote.page.scss */ 9691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/partie.service */ 4617);







let A7_OnlineVotePage = class A7_OnlineVotePage {
    constructor(route, service, NavCtrl) {
        this.route = route;
        this.service = service;
        this.NavCtrl = NavCtrl;
        this.partieEnCours = this.service.partieEnCours;
        this.joueurEnCours = this.service.joueurEnCours;
        this.textButton = "Choisir cette définition";
        this.buttondisabled = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        //Get param from current Route
        this.route.queryParams.subscribe(param => {
            this.indexDefinition = parseInt(param["indexDefinition"]);
            // Get from DB : current word, current definition
            this.service.getPartie(this.partieEnCours).subscribe(u => {
                this.partie = u;
                this.service.getTour(u.manche[this.service.mancheEnCours]._ID).subscribe(tableauTours => {
                    this.mot = tableauTours[this.service.tourEnCours].mot_choisi;
                    let idTour = tableauTours[this.service.tourEnCours]._ID;
                    //get all resultats
                    this.service.getAllResultat(idTour).subscribe(tableauResultat => {
                        //retreive defintion, id_resultat and id_vote from DB
                        this.definition = tableauResultat[this.indexDefinition].definition;
                        this.idResultat = tableauResultat[this.indexDefinition]._ID;
                        this.idVote = tableauResultat[this.indexDefinition].id_vote;
                        //only one vote for each player
                        for (let i = 0; i < tableauResultat.length; i++) { //foreach definition
                            if (i != this.indexDefinition) { //if it's not the definition index
                                for (let y = 0; y < tableauResultat[i].id_vote.length; y++) { //foreach vote array 
                                    if (tableauResultat[i].id_vote[y] == this.joueurEnCours) { //if we found current player id 
                                        console.log("vote détecté !");
                                        this.buttondisabled = true; // the button is disabled and the player can not vote another time
                                    }
                                }
                            }
                        }
                        //The player can cancel his vote 
                        for (let i = 0; i < this.idVote.length; i++) {
                            if (this.joueurEnCours == this.idVote[i]) {
                                this.textButton = "Retirer mon vote";
                                // this.boutonVote.color = "danger";
                            }
                            else {
                                this.textButton = "Choisir cette définition";
                                // this.boutonVote.color = "primary";
                            }
                        }
                    });
                });
            });
        });
    }
    goBack() {
        // Go back in user history
        this.NavCtrl.back();
    }
    validate() {
        //ws to delete or create a vote when player click on the button 
        if (this.textButton == "Retirer mon vote") {
            this.service.deleteVote(this.idResultat, this.joueurEnCours).subscribe(() => {
                this.goBack();
            });
        }
        else {
            this.service.createVote(this.idResultat, this.joueurEnCours).subscribe(() => {
                this.goBack();
            });
        }
    }
};
A7_OnlineVotePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_2__.PartieService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
A7_OnlineVotePage.propDecorators = {
    boutonVote: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChildren, args: ["buttonvote",] }]
};
A7_OnlineVotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-online-vote',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A7_online_vote_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_A7_online_vote_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], A7_OnlineVotePage);



/***/ }),

/***/ 7463:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/A7_online-vote/A7_online-vote.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n            <h1>Définition n°{{indexDefinition+1}}</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n            <h2>{{mot}}</h2>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>\r\n                <p>{{definition}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n        <!-- for every entry in current Tour's resultats, we create a line so we can enter votes -->\r\n        <ion-row>\r\n            <!-- Only create element if player is NOT MJ -->\r\n            <ion-col class=\"ion-text-center\">\r\n                <ion-button [disabled]=\"buttondisabled\" (click)=\"validate()\" #buttonvote>{{textButton}}</ion-button>\r\n                <ion-button (click)=\"goBack()\">Retour</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_A7_online-vote_A7_online-vote_module_ts.js.map