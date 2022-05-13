"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_C1_add-joueur_C1_add-joueur_module_ts"],{

/***/ 1630:
/*!*******************************************************!*\
  !*** ./src/app/C1_add-joueur/C1_add-joueur.page.scss ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: linear-gradient(195deg ,var(--blue) 40%, #7882e1 60%, #aeb4e8 70%, var(--orange) 0% );\n}\n\nion-item {\n  --background: transparent;\n  --border-style: transparent;\n}\n\nion-input {\n  font-size: 25px;\n  margin: 5px;\n}\n\nh1 {\n  color: white;\n  font-size: 40px;\n  margin-top: 60px;\n}\n\nion-range {\n  margin-top: 30px;\n  --knob-size:10px;\n  --bar-height:5px;\n}\n\nh3 {\n  font-size: 30px;\n  color: white;\n}\n\nion-button {\n  --background: transparent;\n  --border-style: transparent;\n  font-size: 50px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(230,230,230);\n}\n\nion-avatar {\n  width: 96/2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkMxX2FkZC1qb3VldXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkdBQUE7QUFBSjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBREo7O0FBS0E7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkQ7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDQyx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFKRDs7QUFPQTtFQUNDLGFBQUE7QUFKRCIsImZpbGUiOiJDMV9hZGQtam91ZXVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vYmFja2dyb3VuZCBjb2xvciBcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDE5NWRlZyAsdmFyKC0tYmx1ZSkgNDAlLCAjNzg4MmUxIDYwJSwgI2FlYjRlOCA3MCUsIHZhcigtLW9yYW5nZSkgMCUgKTtcclxufVxyXG5cclxuLy8gaW5wdXQgdHJhbnNwYXJlbnQgXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbi8vdGl0bGUgY3VzdG9tIFxyXG5oMSB7XHJcbiBjb2xvcjp3aGl0ZTtcclxuIGZvbnQtc2l6ZTogNDBweDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxufVxyXG5cclxuLy9yYW5nZSBjdXN0b21cclxuaW9uLXJhbmdle1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC0ta25vYi1zaXplOjEwcHg7XHJcbiAgICAtLWJhci1oZWlnaHQ6NXB4O1xyXG59XHJcbi8vIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHJhbmdlXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi8vYnV0dG9uIGN1c3RvbVxyXG5pb24tYnV0dG9ue1xyXG5cdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1ib3JkZXItc3R5bGU6IHRyYW5zcGFyZW50O1xyXG5cdGZvbnQtc2l6ZTogNTBweDtcclxuXHQtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcclxuXHQtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWhvdmVyIDogdHJhbnNwYXJlbnQ7XHJcblx0LS1ib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcclxuXHQtLWNvbG9yLWhvdmVyOnJnYigyMzAsMjMwLDIzMCk7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG5cdHdpZHRoOiA5Ni8ycHg7XHJcbn0iXX0= */";

/***/ }),

/***/ 5597:
/*!***************************************************************!*\
  !*** ./src/app/C1_add-joueur/C1_add-joueur-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddJoueurPageRoutingModule": () => (/* binding */ AddJoueurPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _C1_add_joueur_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C1_add-joueur.page */ 6125);




const routes = [
    {
        path: '',
        component: _C1_add_joueur_page__WEBPACK_IMPORTED_MODULE_0__.C1_AddJoueurPage
    }
];
let AddJoueurPageRoutingModule = class AddJoueurPageRoutingModule {
};
AddJoueurPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddJoueurPageRoutingModule);



/***/ }),

/***/ 5646:
/*!*******************************************************!*\
  !*** ./src/app/C1_add-joueur/C1_add-joueur.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddJoueurPageModule": () => (/* binding */ AddJoueurPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _C1_add_joueur_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C1_add-joueur-routing.module */ 5597);
/* harmony import */ var _C1_add_joueur_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C1_add-joueur.page */ 6125);







let AddJoueurPageModule = class AddJoueurPageModule {
};
AddJoueurPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _C1_add_joueur_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddJoueurPageRoutingModule
        ],
        declarations: [_C1_add_joueur_page__WEBPACK_IMPORTED_MODULE_1__.C1_AddJoueurPage]
    })
], AddJoueurPageModule);



/***/ }),

/***/ 6125:
/*!*****************************************************!*\
  !*** ./src/app/C1_add-joueur/C1_add-joueur.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1_AddJoueurPage": () => (/* binding */ C1_AddJoueurPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C1_add_joueur_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./C1_add-joueur.page.html */ 6868);
/* harmony import */ var _C1_add_joueur_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C1_add-joueur.page.scss */ 1630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _classes_joueur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/joueur */ 6198);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/offline.service */ 4056);







 //import our offline data service
let C1_AddJoueurPage = class C1_AddJoueurPage {
    constructor(service, alert, router, route) {
        this.service = service;
        this.alert = alert;
        this.router = router;
        this.route = route;
        this.tableauJoueurs = []; //local array of player names
        this.avatars = [];
    } //inject the service
    ngOnInit() { }
    // Generate Random Avatars
    ionViewWillEnter() {
        this.tableauJoueurs.length = 2;
        for (let i = 0; i < 13; i++) {
            this.avatars.push(this.randomAvatar());
        }
        this.route.queryParams.subscribe(param => {
            console.log(param);
            //
        });
    }
    // Executed each time the slider changes value, sets the length of tableauJoueurs array
    nbJoueurs(value) {
        this.tableauJoueurs.length = value;
    }
    // When user clicks OK, add each player name to the "joueurs" Array in the service
    OK() {
        if (this.checkInput(this.playerNames) == false) {
            this.alert.create({
                header: "Erreur",
                message: "Merci de saisir tous les noms de joueurs !",
                buttons: ['OK']
            }).then(res => {
                res.present();
            });
        }
        else {
            this.service.joueurs.length = 0;
            let index = 0;
            for (let input of this.playerNames) { // for/of = forEach 'input' 
                this.service.joueurs.push(new _classes_joueur__WEBPACK_IMPORTED_MODULE_2__.Joueur(index, String(input.value), 0, ""));
                index++;
            }
            this.router.navigate(['add-manche']);
        }
    }
    checkInput(listOfInputs) {
        for (let input of listOfInputs) {
            if (input.value == "") {
                return false;
            }
        }
    }
    randomAvatar() {
        return Math.floor(Math.random() * 20);
    }
};
C1_AddJoueurPage.ctorParameters = () => [
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_3__.OfflineService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
C1_AddJoueurPage.propDecorators = {
    playerNames: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput,] }],
    images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChildren, args: [Image,] }]
};
C1_AddJoueurPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-joueur',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C1_add_joueur_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_C1_add_joueur_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], C1_AddJoueurPage);



/***/ }),

/***/ 6868:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/C1_add-joueur/C1_add-joueur.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col class=\"ion-text-center\" size=\"8\">\r\n          <h1>NOMBRE DE JOUEURS</h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"10\">\r\n          <!-- Use ion-Range to display a slider to select number of players. ionChange will execute a method at each change of slider's value.  -->\r\n          <ion-range min=\"2\" max=\"12\" step=\"1\" [pin]=\"true\" (ionChange)=\"nbJoueurs(range.value)\" value=\"2\" #range>\r\n            <ion-label slot=\"start\"><h3>2</h3></ion-label>\r\n            <ion-label slot=\"end\"><h3>12</h3></ion-label>\r\n          </ion-range>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- For each player created with the slider, we create an input field to enter player's name. -->\r\n      <ion-row *ngFor=\"let joueur of tableauJoueurs;let index =index\">\r\n        <ion-col>\r\n          <ion-item>\r\n            <!-- Attribute a single ID to every input to retrieve values later -->\r\n\t\t\t\t\t\t<!-- <ion-avatar [routerLink]=\"['/select-avatar']\" [queryParams]=\"{ 'number' : [avatars[index]], 'playerIndex': index}\">\r\n\t\t\t\t\t\t\t<img [src]=\"'../../assets/avatars/adventurer-'+avatars[index]+'.png'\">\r\n\t\t\t\t\t\t</ion-avatar> -->\r\n            <ion-input id=\"{{'Joueur' + index}}\" type=\"text\" placeholder=\"Nom du joueur {{index+1}}\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row>\r\n        <ion-col class=\"ion-text-end\">\r\n          <ion-button (click)=\"OK()\">OK</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_C1_add-joueur_C1_add-joueur_module_ts.js.map