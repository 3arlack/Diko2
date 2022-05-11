"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_C7_vote-joueur_C7_vote-joueur_module_ts"],{

/***/ 1829:
/*!*********************************************************!*\
  !*** ./src/app/C7_vote-joueur/C7_vote-joueur.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".avatar {\n  font-size: 30px;\n}\n\n.hidden {\n  display: none;\n}\n\nion-content {\n  --background:linear-gradient(190deg, var(--orange) 20%, var(--blue) 0%);\n}\n\nion-content h1 {\n  font-size: 40px;\n  text-align: center;\n  text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.46);\n  color: white;\n  font-weight: bold;\n}\n\nion-content h2 {\n  font-size: 35px;\n  text-align: right;\n  margin-right: 20px;\n  font-family: \"Rancho\";\n}\n\nion-content p {\n  font-size: 35px;\n  text-align: center;\n  margin: 30px;\n  font-family: \"Rancho\";\n  margin-top: 80px;\n}\n\nion-fab-button {\n  --background:#F68F59;\n  position: fixed;\n  bottom: 0;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM3X3ZvdGUtam91ZXVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFHQTtFQUNJLHVFQUFBO0FBQUo7O0FBSUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFNQTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUhKIiwiZmlsZSI6IkM3X3ZvdGUtam91ZXVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi8vYmFja2dyb3VuZCBjb2xvclxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTkwZGVnLCB2YXIoLS1vcmFuZ2UpIDIwJSwgdmFyKC0tYmx1ZSkgMCUpO1xyXG4gICAgXHJcbn1cclxuLy90aXRsZVxyXG5pb24tY29udGVudCBoMXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggNHB4IDNweCByZ2JhKDAsMCwwLDAuNDYpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4vL3RpdGxlXHJcbmlvbi1jb250ZW50IGgye1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTpcIlJhbmNob1wiO1xyXG59XHJcblxyXG5cclxuaW9uLWNvbnRlbnQgcHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OlwiUmFuY2hvXCI7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4vL3Bvc2l0aW9uIGFuZCBjb2xvciBvZiB0aGUgYnV0dG9uXHJcbmlvbi1mYWItYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGNjhGNTk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59Il19 */";

/***/ }),

/***/ 4278:
/*!*****************************************************************!*\
  !*** ./src/app/C7_vote-joueur/C7_vote-joueur-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoteJoueurPageRoutingModule": () => (/* binding */ VoteJoueurPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _C7_vote_joueur_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C7_vote-joueur.page */ 1661);




const routes = [
    {
        path: '',
        component: _C7_vote_joueur_page__WEBPACK_IMPORTED_MODULE_0__.C7_VoteJoueurPage
    }
];
let VoteJoueurPageRoutingModule = class VoteJoueurPageRoutingModule {
};
VoteJoueurPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VoteJoueurPageRoutingModule);



/***/ }),

/***/ 4155:
/*!*********************************************************!*\
  !*** ./src/app/C7_vote-joueur/C7_vote-joueur.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoteJoueurPageModule": () => (/* binding */ VoteJoueurPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _C7_vote_joueur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C7_vote-joueur-routing.module */ 4278);
/* harmony import */ var _C7_vote_joueur_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C7_vote-joueur.page */ 1661);







let VoteJoueurPageModule = class VoteJoueurPageModule {
};
VoteJoueurPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _C7_vote_joueur_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoteJoueurPageRoutingModule
        ],
        declarations: [_C7_vote_joueur_page__WEBPACK_IMPORTED_MODULE_1__.C7_VoteJoueurPage]
    })
], VoteJoueurPageModule);



/***/ }),

/***/ 1661:
/*!*******************************************************!*\
  !*** ./src/app/C7_vote-joueur/C7_vote-joueur.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C7_VoteJoueurPage": () => (/* binding */ C7_VoteJoueurPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C7_vote_joueur_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./C7_vote-joueur.page.html */ 3205);
/* harmony import */ var _C7_vote_joueur_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C7_vote-joueur.page.scss */ 1829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offline.service */ 4056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);




 // import ActiveRoute
 // import service

let C7_VoteJoueurPage = class C7_VoteJoueurPage {
    constructor(route, service, NavCtrl) {
        this.route = route;
        this.service = service;
        this.NavCtrl = NavCtrl;
        // retrieve Game Master ID (MJ)
        this.idMj = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].id_mj;
        // retrieve chosen word
        this.mot = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].mot_choisi;
        // retrieve "query parameter" in the route to get index number of definition
        this.route.queryParams.subscribe(param => {
            this.indexDefinition = parseInt(param['indexDefinition']);
            //retrieve word definition
            this.definition = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].definition;
        });
    }
    ngOnInit() {
        // retrieve list of players
        this.joueurs = this.service.joueurs;
    }
    // ViewChildren's QueryList is accessible only starting from this method
    ngAfterViewInit() {
        // Retrieves votes
        let arrayVote = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote;
        // Retrieves all the "resultat" arrays
        let resultatTemp = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours];
        // Browses ion-chips, if chip is in arrayVote (has been voted already), color it ;
        this.chips.forEach((chip, index) => {
            for (let y = 0; y < arrayVote.length; y++) {
                if (arrayVote[y] == index) {
                    chip.color = "success";
                }
            }
            // Also, if chip is Game Master's (MJ), disable it 
            if (this.idMj == index) {
                chip.disabled = true;
            }
            // Check votes in each "resultat" array ; if we find a vote corresponding to current chip index AND not in current "resultat" array, we disable it
            for (let i = 0; i < resultatTemp.resultat.length; i++) {
                for (let y = 0; y < resultatTemp.resultat[i].id_vote.length; y++) {
                    if (resultatTemp.resultat[i].id_vote[y] == index && i !== this.indexDefinition) {
                        chip.disabled = true;
                    }
                }
            }
        });
    }
    click(id_joueur) {
        // Retrieve position of "id_joueur" parametre in id_vote array
        let index = this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.indexOf(id_joueur);
        if (index !== -1) { //if value exists in array
            this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.splice(index, 1); //delete it
            this.chips.get(id_joueur).color = ""; // removes color from chip
        }
        else { //else, add it to the array
            this.service.manches[this.service.mancheEnCours].tours[this.service.toursEnCours].resultat[this.indexDefinition].id_vote.push(id_joueur);
            this.chips.get(id_joueur).color = "success"; // sets color on chip
        }
    }
    goBack() {
        this.NavCtrl.back();
    }
};
C7_VoteJoueurPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_2__.OfflineService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
C7_VoteJoueurPage.propDecorators = {
    chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonChip,] }]
};
C7_VoteJoueurPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-vote-joueur',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C7_vote_joueur_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_C7_vote_joueur_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], C7_VoteJoueurPage);



/***/ }),

/***/ 3205:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/C7_vote-joueur/C7_vote-joueur.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h1>Définition n°{{indexDefinition+1}}</h1>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h2>{{mot}}</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>{{definition}}</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- for every entry in current Tour's resultats, we create a line so we can enter votes -->\r\n    <ion-row>\r\n      <!-- Only create element if player is NOT MJ -->\r\n      <ion-col *ngFor=\"let joueur of joueurs; let index = index\">\r\n        <ion-chip (click)=\"click(joueur.id_joueur)\">\r\n          <ion-avatar>\r\n            <img src=\"../../assets/avatarexemple.jpg\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            {{joueur.nom_joueur}}\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-fab>\r\n        <ion-fab-button (click)=\"goBack()\">\r\n          <ion-icon name=\"chevron-back-sharp\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_C7_vote-joueur_C7_vote-joueur_module_ts.js.map