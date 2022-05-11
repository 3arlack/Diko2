"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_A1_online-host-create_A1_online-host-create_module_ts"],{

/***/ 1665:
/*!***********************************************************************!*\
  !*** ./src/app/A1_online-host-create/A1_online-host-create.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --ion-background-color: linear-gradient(195deg ,var(--blue) 40%, #7882e1 60%, #aeb4e8 70%, var(--orange) 0% );\n}\n\nion-input {\n  font-size: 25px;\n  margin: 5px;\n  --background: transparent;\n  --border-style: transparent;\n}\n\nh1 {\n  color: white;\n  font-size: 40px;\n  margin-top: 60px;\n}\n\nion-range {\n  margin-top: 30px;\n  --knob-size:10px;\n  --bar-height:5px;\n}\n\nh3 {\n  font-size: 30px;\n  color: white;\n}\n\nion-button {\n  margin-top: 50px;\n  --background: transparent;\n  --border-style: transparent;\n  font-size: 50px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n  --box-shadow: transparent;\n  --color-hover:rgb(230,230,230);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExX29ubGluZS1ob3N0LWNyZWF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2R0FBQTtBQUFKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBS0E7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRkQ7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0gsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQUpEIiwiZmlsZSI6IkExX29ubGluZS1ob3N0LWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2JhY2tncm91bmQgY29sb3IgXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgxOTVkZWcgLHZhcigtLWJsdWUpIDQwJSwgIzc4ODJlMSA2MCUsICNhZWI0ZTggNzAlLCB2YXIoLS1vcmFuZ2UpIDAlICk7XHJcbn1cclxuXHJcbi8vIGlucHV0IGN1c3RvbSBcclxuaW9uLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8vdGl0bGUgY3VzdG9tIFxyXG5oMSB7XHJcbiBjb2xvcjp3aGl0ZTtcclxuIGZvbnQtc2l6ZTogNDBweDtcclxuIG1hcmdpbi10b3A6NjBweDtcclxufVxyXG5cclxuLy9yYW5nZSBjdXN0b21cclxuaW9uLXJhbmdle1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC0ta25vYi1zaXplOjEwcHg7XHJcbiAgICAtLWJhci1oZWlnaHQ6NXB4O1xyXG59XHJcbi8vIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHJhbmdlXHJcbmgze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi8vYnV0dG9uIGN1c3RvbVxyXG5pb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcblx0LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XHJcblx0LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG5cdC0tYmFja2dyb3VuZC1ob3ZlciA6IHRyYW5zcGFyZW50O1xyXG5cdC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcblx0LS1jb2xvci1ob3ZlcjpyZ2IoMjMwLDIzMCwyMzApO1xyXG59Il19 */";

/***/ }),

/***/ 228:
/*!*******************************************************************************!*\
  !*** ./src/app/A1_online-host-create/A1_online-host-create-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineHostCreatePageRoutingModule": () => (/* binding */ OnlineHostCreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _A1_online_host_create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A1_online-host-create.page */ 615);




const routes = [
    {
        path: '',
        component: _A1_online_host_create_page__WEBPACK_IMPORTED_MODULE_0__.A1_OnlineHostCreatePage
    }
];
let OnlineHostCreatePageRoutingModule = class OnlineHostCreatePageRoutingModule {
};
OnlineHostCreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OnlineHostCreatePageRoutingModule);



/***/ }),

/***/ 310:
/*!***********************************************************************!*\
  !*** ./src/app/A1_online-host-create/A1_online-host-create.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlineHostCreatePageModule": () => (/* binding */ OnlineHostCreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _A1_online_host_create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./A1_online-host-create-routing.module */ 228);
/* harmony import */ var _A1_online_host_create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A1_online-host-create.page */ 615);







let OnlineHostCreatePageModule = class OnlineHostCreatePageModule {
};
OnlineHostCreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _A1_online_host_create_routing_module__WEBPACK_IMPORTED_MODULE_0__.OnlineHostCreatePageRoutingModule
        ],
        declarations: [_A1_online_host_create_page__WEBPACK_IMPORTED_MODULE_1__.A1_OnlineHostCreatePage]
    })
], OnlineHostCreatePageModule);



/***/ }),

/***/ 615:
/*!*********************************************************************!*\
  !*** ./src/app/A1_online-host-create/A1_online-host-create.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A1_OnlineHostCreatePage": () => (/* binding */ A1_OnlineHostCreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A1_online_host_create_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./A1_online-host-create.page.html */ 8693);
/* harmony import */ var _A1_online_host_create_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./A1_online-host-create.page.scss */ 1665);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _classes_joueur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/joueur */ 6198);
/* harmony import */ var _classes_partie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/partie */ 239);
/* harmony import */ var _services_partie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/partie.service */ 4617);









let A1_OnlineHostCreatePage = class A1_OnlineHostCreatePage {
    constructor(service, router, alert) {
        this.service = service;
        this.router = router;
        this.alert = alert;
    }
    ngOnInit() {
    }
    //button to validate the creation of the new game with : number of players, numbers of round and name of the game host
    OK() {
        if (this.name_joueur.value == "") { //if the input is empty -> alert !
            this.alert.create({
                header: "Erreur",
                message: "Merci de saisir votre nom !",
                buttons: ['OK']
            }).then(res => {
                res.present();
            });
        }
        else { //if all input ok
            //initialization of the new game object
            let maPartie = new _classes_partie__WEBPACK_IMPORTED_MODULE_3__.Partie;
            maPartie.mancheEnCours = 0;
            maPartie.tourEnCours = 0;
            maPartie.joueur = [];
            //create the Joueur object
            let monJoueur = new _classes_joueur__WEBPACK_IMPORTED_MODULE_2__.Joueur(0, "", 0, "");
            this.service.joueurEnCours = 0;
            //attribute the value of the input (name of the player)
            monJoueur.nom_joueur = String(this.name_joueur.value);
            maPartie.joueur.push(monJoueur);
            maPartie.joueur.length = Number(this.nbr_joueur.value);
            //initialise the number of round (Manche Array's length)
            maPartie.manche = [];
            maPartie.manche.length = Number(this.nbr_manche.value);
            //create the game in DB
            this.service.createPartie(maPartie).subscribe((reponse) => {
                this.service.partieEnCours = reponse;
                //go to lobby page
                this.router.navigate(['lobby']);
            });
        }
    }
};
A1_OnlineHostCreatePage.ctorParameters = () => [
    { type: _services_partie_service__WEBPACK_IMPORTED_MODULE_4__.PartieService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
A1_OnlineHostCreatePage.propDecorators = {
    nbr_joueur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['playerCount',] }],
    name_joueur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['playername',] }],
    nbr_manche: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['nbrManche',] }]
};
A1_OnlineHostCreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-online-host-create',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_A1_online_host_create_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_A1_online_host_create_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], A1_OnlineHostCreatePage);



/***/ }),

/***/ 239:
/*!***********************************!*\
  !*** ./src/app/classes/partie.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Partie": () => (/* binding */ Partie)
/* harmony export */ });
class Partie {
}


/***/ }),

/***/ 8693:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/A1_online-host-create/A1_online-host-create.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n    <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col class=\"ion-text-center\" size=\"8\">\r\n            <h1>NOMBRE DE JOUEURS</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size=\"8\">\r\n            <!-- Use ion-Range to display a slider to select number of players. ionChange will execute a method at each change of slider's value.  -->\r\n            <ion-range min=\"2\" max=\"12\" step=\"1\" snaps=\"true\" [pin]=\"true\" value=\"2\" #playerCount>\r\n                <ion-label slot=\"start\"><h3>2</h3></ion-label>\r\n                <ion-label slot=\"end\"><h3>12</h3></ion-label>\r\n            </ion-range>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size=\"8\">\r\n                <!--player's name-->\r\n                <ion-input placeholder=\"Votre nom\" #playername></ion-input>        \r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col class=\"ion-text-center\" size=\"8\">\r\n                <h1>NOMBRE DE MANCHES</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size=\"8\">\r\n                <!-- Use ion-Range to display a slider to select number of rounds. We set the value at 1, so if user doesn't interact with slider, we still have at least 1 round ! -->\r\n                <ion-range min=\"1\" max=\"10\" step=\"1\" snaps=\"true\" [pin]=\"true\" #nbrManche value=\"1\">\r\n                    <ion-label slot=\"start\"><h3>1</h3></ion-label>\r\n                    <ion-label slot=\"end\"><h3>10</h3></ion-label>\r\n                </ion-range>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-justify-content-end\">\r\n            <ion-button (click)=\"OK()\">OK</ion-button>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_A1_online-host-create_A1_online-host-create_module_ts.js.map