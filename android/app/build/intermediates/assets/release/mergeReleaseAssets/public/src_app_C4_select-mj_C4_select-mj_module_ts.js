"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_C4_select-mj_C4_select-mj_module_ts"],{

/***/ 3623:
/*!*****************************************************!*\
  !*** ./src/app/C4_select-mj/C4_select-mj.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".logode {\n  font-size: 100px;\n}\n\n.valide {\n  font-size: 50px;\n  color: green;\n}\n\nion-content {\n  --background: linear-gradient(195deg ,var(--blue) 40%, #7882e1 60%, #aeb4e8 70%, var(--orange) 0% );\n}\n\n.custom_content_selectMJ {\n  height: 100%;\n}\n\n.custom_content_selectMJ h1 {\n  font-size: 50px;\n  text-align: center;\n  color: white;\n  margin-top: 30px;\n}\n\n.custom_content_selectMJ h2 {\n  font-size: 50px;\n  text-align: center;\n  color: white;\n  margin: 20px;\n}\n\n.custom_content_selectMJ p {\n  font-size: 20px;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  color: white;\n  margin: 20px;\n}\n\n#imgCol {\n  background-image: url('maitre_jeu.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n  width: auto;\n  min-height: 25vh;\n  height: 55vh;\n}\n\n#imgCol::before {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 47%;\n  left: 18%;\n  background: white;\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(12vh 5vw);\n          clip-path: ellipse(12vh 5vw);\n}\n\n#imgCol::after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  z-index: -2;\n  top: 48%;\n  left: 19%;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  -webkit-clip-path: ellipse(12vh 5vw);\n          clip-path: ellipse(12vh 5vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM0X3NlbGVjdC1tai5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFLQTtFQUNDLG1HQUFBO0FBRkQ7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBTUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjs7QUFRQTtFQUNDLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEQ7O0FBU0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUFORDs7QUFVQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQVBEIiwiZmlsZSI6IkM0X3NlbGVjdC1tai5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb2Rle1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG5cclxuLnZhbGlkZXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0gUGFnZSBDdXN0b20gKGdhbWUgbWFzdGVyIGFubm91bmNlbWVudCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG5cclxuLy9iYWNrZ3JvdW5kIGNvbG9yXHJcbmlvbi1jb250ZW50e1xyXG5cdC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE5NWRlZyAsdmFyKC0tYmx1ZSkgNDAlLCAjNzg4MmUxIDYwJSwgI2FlYjRlOCA3MCUsIHZhcigtLW9yYW5nZSkgMCUgKTtcclxufVxyXG5cclxuLmN1c3RvbV9jb250ZW50X3NlbGVjdE1Ke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vL3RpdGxlXHJcbi5jdXN0b21fY29udGVudF9zZWxlY3RNSiBoMXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmN1c3RvbV9jb250ZW50X3NlbGVjdE1KIGgye1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b21fY29udGVudF9zZWxlY3RNSiBwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tIE1vZGFsIEN1c3RvbSAod29yZCBjaG9pY2UpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiNpbWdDb2x7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL21haXRyZV9qZXUucG5nXCIpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR3aWR0aDphdXRvO1xyXG5cdG1pbi1oZWlnaHQ6IDI1dmg7XHJcblx0aGVpZ2h0OjU1dmg7XHJcbn1cclxuXHJcbi8vc3VwcG9ydFxyXG4jaW1nQ29sOjpiZWZvcmV7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHRjb250ZW50OicnO1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG5cdHRvcDo0NyU7XHJcblx0bGVmdDoxOCU7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OjEwMCU7XHJcblx0Y2xpcC1wYXRoOiBlbGxpcHNlKDEydmggNXZ3KTtcclxufVxyXG5cclxuLy8gc2hhZG93XHJcbiNpbWdDb2w6OmFmdGVye1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0Y29udGVudDonJztcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAtMjtcclxuXHR0b3A6NDglO1xyXG5cdGxlZnQ6MTklO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRjbGlwLXBhdGg6IGVsbGlwc2UoMTJ2aCA1dncpO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 856:
/*!*************************************************************!*\
  !*** ./src/app/C4_select-mj/C4_select-mj-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectMjPageRoutingModule": () => (/* binding */ SelectMjPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _C4_select_mj_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C4_select-mj.page */ 4372);




const routes = [
    {
        path: '',
        component: _C4_select_mj_page__WEBPACK_IMPORTED_MODULE_0__.C4_SelectMjPage
    }
];
let SelectMjPageRoutingModule = class SelectMjPageRoutingModule {
};
SelectMjPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SelectMjPageRoutingModule);



/***/ }),

/***/ 2769:
/*!*****************************************************!*\
  !*** ./src/app/C4_select-mj/C4_select-mj.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectMjPageModule": () => (/* binding */ SelectMjPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _C4_select_mj_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./C4_select-mj-routing.module */ 856);
/* harmony import */ var _C4_select_mj_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C4_select-mj.page */ 4372);







let SelectMjPageModule = class SelectMjPageModule {
};
SelectMjPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _C4_select_mj_routing_module__WEBPACK_IMPORTED_MODULE_0__.SelectMjPageRoutingModule
        ],
        declarations: [_C4_select_mj_page__WEBPACK_IMPORTED_MODULE_1__.C4_SelectMjPage]
    })
], SelectMjPageModule);



/***/ }),

/***/ 4372:
/*!***************************************************!*\
  !*** ./src/app/C4_select-mj/C4_select-mj.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C4_SelectMjPage": () => (/* binding */ C4_SelectMjPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C4_select_mj_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./C4_select-mj.page.html */ 8364);
/* harmony import */ var _C4_select_mj_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./C4_select-mj.page.scss */ 3623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offline.service */ 4056);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);




 // import service
 // import ModalController
let C4_SelectMjPage = class C4_SelectMjPage {
    constructor(service, modalController) {
        this.service = service;
        this.modalController = modalController;
    } //inject service, and ModalController to control Modal (to dismiss) 
    ngOnInit() {
    }
    ionViewWillEnter() {
        // retrieves values from service : current tour, id_mj to know who's the game master, its name...
        this.tourEnCours = this.service.toursEnCours;
        this.idMJ = this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].id_mj;
        this.nomMJ = this.service.joueurs[this.idMJ].nom_joueur;
        // We also search randomly for a word in db
        this.randomWord();
    }
    // Gets a random word from JSON database
    randomWord() {
        let randomIndex = Math.floor(Math.random() * this.service.data.data.length); //Generates a random number from 1 to database length
        // gets word from database and sets it in current tour in service, and also locally to display it
        this.service.manches[this.service.mancheEnCours].tours[this.tourEnCours].mot_choisi = this.service.data.data[randomIndex].word;
        this.mot = this.service.data.data[randomIndex].word;
        this.service.definition = this.service.data.data[randomIndex].def;
    }
    // Dismiss modal
    dismiss() {
        this.modalController.dismiss(); //Calls dismiss method from ModalController
    }
};
C4_SelectMjPage.ctorParameters = () => [
    { type: _services_offline_service__WEBPACK_IMPORTED_MODULE_2__.OfflineService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
C4_SelectMjPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-select-mj',
        template: _c_Users_stagiaire_Desktop_Dev_diko_node_modules_ngtools_webpack_src_loaders_direct_resource_js_C4_select_mj_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_C4_select_mj_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], C4_SelectMjPage);



/***/ }),

/***/ 8364:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/C4_select-mj/C4_select-mj.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n<ion-grid class=\"custom_content_selectMJ\" id=\"mainGrid\">\r\n    <ion-row>\r\n        <ion-col>\r\n            <h1>{{nomMJ}}</h1>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col id=\"imgCol\">\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n            <h2>Tu es le maître du jeu !</h2>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col>\r\n            <p>Prend le téléphone en main ...</p>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n\r\n<!-- Modal to select word for this round. MJ can randomly select a new one. backdropDismiss=false to prevent user from leaving Modal -->\r\n<ion-modal\r\ntrigger=\"mainGrid\"\r\nbackdropDismiss=false\r\n>\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size=\"6\" class=\"ion-text-center\">\r\n              Le mot est :\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <!-- Display a random word by default. -->\r\n                <h1>{{mot}}</h1>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <ion-icon name=\"dice-outline\" class=\"logode\" (click)=\"randomWord()\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <h3>Lis-le à haute voix et valide</h3>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"ion-text-center\">\r\n                <ion-icon class=\"valide\" name=\"checkmark-circle-outline\" routerLink=\"/definition-joueur\" (click)=\"dismiss()\"></ion-icon>\r\n            </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_C4_select-mj_C4_select-mj_module_ts.js.map