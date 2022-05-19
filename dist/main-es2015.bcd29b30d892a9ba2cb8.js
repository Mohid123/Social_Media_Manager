(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+BVi":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.service.ts ***!
  \********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _auth_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-http */ "NtJg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");







class AuthService {
    constructor(authHttpService, router) {
        this.authHttpService = authHttpService;
        this.router = router;
        // private fields
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        this.authLocalStorageToken = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appVersion}-${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].USERDATA_KEY}`;
        this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.currentUser$ = this.currentUserSubject.asObservable();
        this.isLoading$ = this.isLoadingSubject.asObservable();
        const subscr = this.getUserByToken().subscribe();
        this.unsubscribe.push(subscr);
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    set currentUserValue(user) {
        this.currentUserSubject.next(user);
    }
    // public methods
    login(email, password) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((auth) => {
            const result = this.setAuthFromLocalStorage(auth);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.getUserByToken()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    logout() {
        localStorage.removeItem(this.authLocalStorageToken);
        this.router.navigate(['/auth/login'], {
            queryParams: {},
        });
    }
    getUserByToken() {
        const auth = this.getAuthFromLocalStorage();
        if (!auth || !auth.accessToken) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        this.isLoadingSubject.next(true);
        return this.authHttpService.getUserByToken(auth.accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            if (user) {
                this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user);
            }
            else {
                this.logout();
            }
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    // need create new user then login
    registration(user) {
        this.isLoadingSubject.next(true);
        return this.authHttpService.createUser(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            this.isLoadingSubject.next(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.login(user.email, user.password)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.error('err', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    forgotPassword(email) {
        this.isLoadingSubject.next(true);
        return this.authHttpService
            .forgotPassword(email)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.isLoadingSubject.next(false)));
    }
    // private methods
    setAuthFromLocalStorage(auth) {
        // store auth accessToken/refreshToken/epiresIn in local storage to keep user logged in between page refreshes
        if (auth && auth.accessToken) {
            localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
            return true;
        }
        return false;
    }
    getAuthFromLocalStorage() {
        try {
            const authData = JSON.parse(localStorage.getItem(this.authLocalStorageToken));
            return authData;
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _auth_http__WEBPACK_IMPORTED_MODULE_4__["AuthHTTPService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "+H5S":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/fr.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// France
const locale = {
    lang: 'fr',
    data: {
        TRANSLATOR: {
            SELECT: 'choisissez votre langue',
        },
        MENU: {
            NEW: 'Nouveau',
            ACTIONS: 'Actes',
            CREATE_POST: 'Créer un nouveau Post',
            PAGES: 'Pages',
            FEATURES: 'Fonctionnalités',
            APPS: 'Applications',
            DASHBOARD: 'Tableau de Bord',
        },
        AUTH: {
            GENERAL: {
                OR: 'Ou',
                SUBMIT_BUTTON: 'Soumettre',
                NO_ACCOUNT: 'Ne pas avoir de compte?',
                SIGNUP_BUTTON: 'Registre',
                FORGOT_BUTTON: 'Mot de passe oublié',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Créer un compte',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Mot de passe',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nom d\'utilisateur'
            },
            VALIDATION: {
                INVALID: '{{name}} n\'est pas valide',
                REQUIRED: '{{name}} est requis',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Nombre d\'enregistrements sélectionnés: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'éCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Les clients',
                CUSTOMERS_LIST: 'Liste des clients',
                NEW_CUSTOMER: 'Nouveau client',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Suppression du client',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement ce client?',
                    WAIT_DESCRIPTION: 'Le client est en train de supprimer ...',
                    MESSAGE: 'Le client a été supprimé'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Supprimer les clients',
                    DESCRIPTION: 'Êtes-vous sûr de supprimer définitivement les clients sélectionnés?',
                    WAIT_DESCRIPTION: 'Les clients suppriment ...',
                    MESSAGE: 'Les clients sélectionnés ont été supprimés'
                },
                UPDATE_STATUS: {
                    TITLE: 'Le statut a été mis à jour pour les clients sélectionnés',
                    MESSAGE: 'Le statut des clients sélectionnés a été mis à jour avec succès'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Le client a été mis à jour',
                    ADD_MESSAGE: 'Le client a été créé'
                }
            }
        }
    }
};


/***/ }),

/***/ "+hgU":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/ch.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// China
const locale = {
    lang: 'ch',
    data: {
        TRANSLATOR: {
            SELECT: '选择你的语言',
        },
        MENU: {
            NEW: '新',
            ACTIONS: '行动',
            CREATE_POST: '创建新帖子',
            PAGES: 'Pages',
            FEATURES: '特征',
            APPS: '应用',
            DASHBOARD: '仪表板',
        },
        AUTH: {
            GENERAL: {
                OR: '要么',
                SUBMIT_BUTTON: '提交',
                NO_ACCOUNT: '没有账号？',
                SIGNUP_BUTTON: '注册',
                FORGOT_BUTTON: '忘记密码',
                BACK_BUTTON: '背部',
                PRIVACY: '隐私',
                LEGAL: '法律',
                CONTACT: '联系',
            },
            LOGIN: {
                TITLE: '创建帐号',
                BUTTON: '签到',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: '用戶名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: '顾客',
                CUSTOMERS_LIST: '客户名单',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Junaid WorkSpace\dividis_social_media_manager\src\main.ts */"zUnb");


/***/ }),

/***/ "0BOj":
/*!***************************************************!*\
  !*** ./src/app/core/utils/local-storage.utils.ts ***!
  \***************************************************/
/*! exports provided: StorageItem, getItem, setItem, removeItem, clear, forceClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageItem", function() { return StorageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceClear", function() { return forceClear; });
var StorageItem;
(function (StorageItem) {
    StorageItem["AppToken"] = "app-token";
    StorageItem["Club"] = "club";
    StorageItem["ClubToken"] = "club-token";
    StorageItem["ClubLogo"] = "clubLogo";
    StorageItem["ClubUid"] = "clubUid";
    StorageItem["Clubsch"] = "clubsch";
    StorageItem["Fbsch"] = "fbsch";
    StorageItem["Igsch"] = "igsch";
    StorageItem["NewUser"] = "newUser";
    StorageItem["ProfileImageUrl"] = "profileImageUrl";
    StorageItem["SelectedClub"] = "selectedClub";
    StorageItem["User"] = "user";
    StorageItem["LoggedInUser"] = "loggedInUser";
})(StorageItem || (StorageItem = {}));
const getItem = (itemName) => {
    const item = localStorage.getItem(itemName);
    return item ? JSON.parse(item) : null;
};
const setItem = (itemName, value) => {
    localStorage.setItem(itemName, JSON.stringify(value));
};
const removeItem = (itemName) => {
    localStorage.removeItem(itemName);
};
const clear = () => {
    let selectedClub = getItem(StorageItem.SelectedClub);
    localStorage.clear();
    setItem(StorageItem.SelectedClub, selectedClub);
};
const forceClear = () => {
    localStorage.clear();
};


/***/ }),

/***/ "19P/":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/filter.model.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "1m+6":
/*!***********************************************!*\
  !*** ./src/app/core/models/response.model.ts ***!
  \***********************************************/
/*! exports provided: ApiResponse, ApiError, ErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResponse", function() { return ApiResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiError", function() { return ApiError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
class ApiResponse {
    constructor() {
        this.errors = [];
    }
    getErrorsText() {
        return this.errors.map((e) => e.text).join(' ');
    }
    hasErrors() {
        return this.errors.length > 0;
    }
}
class ApiError {
}
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["UnknownError"] = 1] = "UnknownError";
    ErrorCode[ErrorCode["OrderIsOutdated"] = 2] = "OrderIsOutdated";
})(ErrorCode || (ErrorCode = {}));


/***/ }),

/***/ "2ndO":
/*!************************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.component.ts ***!
  \************************************************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.service */ "ONK0");



const _c0 = ["splashScreen"];
class SplashScreenComponent {
    constructor(el, splashScreenService) {
        this.el = el;
        this.splashScreenService = splashScreenService;
    }
    ngOnInit() {
        this.splashScreenService.init(this.splashScreen);
    }
}
SplashScreenComponent.ɵfac = function SplashScreenComponent_Factory(t) { return new (t || SplashScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"])); };
SplashScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashScreenComponent, selectors: [["app-splash-screen"]], viewQuery: function SplashScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splashScreen = _t.first);
    } }, decls: 6, vars: 0, consts: [["id", "splash-screen"], ["splashScreen", ""], [2, "font-family", "sans-serif", "font-weight", "600", "color", "rgb(37, 37, 37)"], ["viewBox", "0 0 50 50", 1, "splash-spinner"], ["cx", "25", "cy", "25", "r", "20", "fill", "none", "stroke-width", "5", 1, "path"]], template: function SplashScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "D I V I D I S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "circle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#splash-screen[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: #f2f3f8;\n}\n\n#splash-screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: calc(100vw - 100%);\n  margin-bottom: 30px;\n}\n\n#splash-screen.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.splash-spinner[_ngcontent-%COMP%] {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  margin-left: calc(100vw - 100%);\n  width: 50px;\n  height: 50px;\n}\n\n.splash-spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke: #5d78ff;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBQTtFQUNGO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQUFGO0VBR0E7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VBREY7RUFJQTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUFGRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLG9CQUFBO0VBQUY7RUFHQTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7RUFERjtFQUlBO0lBQ0UseUJBQUE7SUFDQSx1QkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGxhc2gtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmODtcclxufVxyXG5cclxuI3NwbGFzaC1zY3JlZW4gaW1nIHtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDB2dyAtIDEwMCUpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzcGxhc2gtc2NyZWVuLmhpZGRlbiB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zcGxhc2gtc3Bpbm5lciB7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDEwMHZ3IC0gMTAwJSk7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3BsYXNoLXNwaW5uZXIgLnBhdGgge1xyXG4gIHN0cm9rZTogIzVkNzhmZjtcclxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRhc2gge1xyXG4gIDAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-splash-screen',
                templateUrl: './splash-screen.component.html',
                styleUrls: ['./splash-screen.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"] }]; }, { splashScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['splashScreen', { static: true }]
        }] }); })();


/***/ }),

/***/ "51MP":
/*!********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.config.ts ***!
  \********************************************************************************************************/
/*! exports provided: NgPaginationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationConfig", function() { return NgPaginationConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/paginator.model */ "fksT");
// Fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination-config.ts



/**
 * A configuration service for the [`NgPagination`](#/components/paginator/api#NgPagination) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
class NgPaginationConfig {
    constructor() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"][2];
        this.rotate = false;
    }
}
NgPaginationConfig.ɵfac = function NgPaginationConfig_Factory(t) { return new (t || NgPaginationConfig)(); };
NgPaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgPaginationConfig, factory: NgPaginationConfig.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "6cNE":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/http-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var _utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/local-storage.utils */ "0BOj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_club_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/club.service */ "wDSB");






class Interceptor {
    constructor(clubService) {
        this.clubService = clubService;
    }
    intercept(request, next) {
        var _a;
        let customReq;
        let club = this.clubService.selectedClub;
        let clubBaseUrl = club === null || club === void 0 ? void 0 : club.baseURL;
        if (request.url.includes('getAllClubs') || request.url.includes('loginByEmail')) {
            customReq = request.clone();
        }
        else if (request.url.includes('searchClub') || request.url.includes('loginByEmail')) {
            customReq = request.clone();
        }
        else if (request.url.includes('socialapi.solissol') || request.url.includes("http://localhost:3005")) {
            customReq = request.clone({
                headers: request.headers.set('Authorization', (_a = Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["StorageItem"].AppToken)) === null || _a === void 0 ? void 0 : _a.access_token)
            });
        }
        else if (request.url.includes(clubBaseUrl) && club.pickerClub) {
            customReq = request.clone({
                headers: request.headers.set('Authorization', Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["StorageItem"].ClubToken)).set('clubID', club.id)
            });
        }
        else if (request.url.includes(clubBaseUrl)) {
            customReq = request.clone({
                headers: request.headers.set('Authorization', Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["StorageItem"].ClubToken))
            });
        }
        else {
            customReq = request.clone();
        }
        return next.handle(customReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    }
}
Interceptor.ɵfac = function Interceptor_Factory(t) { return new (t || Interceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_club_service__WEBPACK_IMPORTED_MODULE_4__["ClubService"])); };
Interceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Interceptor, factory: Interceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Interceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _services_club_service__WEBPACK_IMPORTED_MODULE_4__["ClubService"] }]; }, null); })();


/***/ }),

/***/ "7dP1":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: MainAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAuthService", function() { return MainAuthService; });
/* harmony import */ var _utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/local-storage.utils */ "0BOj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "a+Vh");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-api.service */ "Ggq3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.service */ "tVj7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");










class MainAuthService extends _base_api_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiService"] {
    constructor(http, _profileService, router) {
        super(http);
        this.http = http;
        this._profileService = _profileService;
        this.router = router;
        this._User$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].User));
        this.User$ = this._User$.asObservable();
        this._LoggedInUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].LoggedInUser));
        this.LoggedInUser$ = this._LoggedInUser$.asObservable();
        this._AppToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].AppToken));
        this.AppToken$ = this._AppToken$.asObservable();
        this._ClubToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].ClubToken));
        this.ClubToken$ = this._ClubToken$.asObservable();
    }
    get user() {
        return this._User$.getValue();
    }
    set user(user) {
        Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["setItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].User, user);
        this._User$.next(user);
    }
    get loggedInUser() {
        return this._LoggedInUser$.getValue();
    }
    set loggedInUser(loggedInUser) {
        Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["setItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].LoggedInUser, loggedInUser);
        this._LoggedInUser$.next(loggedInUser);
    }
    get appToken() {
        return this._AppToken$.getValue();
    }
    set appToken(appToken) {
        Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["setItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].AppToken, appToken);
        this._AppToken$.next(appToken);
    }
    get clubToken() {
        return this._ClubToken$.getValue();
    }
    set clubToken(clubToken) {
        Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["setItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].ClubToken, clubToken);
        this._ClubToken$.next(clubToken);
    }
    loginByEmail(payload) {
        return this.post('/auth/loginByEmail', payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((res) => {
            var _a, _b;
            if (!res.hasErrors()) {
                if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.newUser) {
                    Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["setItem"])(_utils__WEBPACK_IMPORTED_MODULE_3__["StorageItem"].NewUser, res.data.newUser);
                }
                if ((_b = res.data) === null || _b === void 0 ? void 0 : _b.user.admin) {
                    this.appToken = res.data.app_token;
                    this.loggedInUser = res.data.loggedInUser;
                    this.clubToken = res.data.token;
                    this.user = res.data.user;
                }
            }
        }));
    }
    getSignedInUser() {
        var _a;
        let id = (_a = this.loggedInUser) === null || _a === void 0 ? void 0 : _a.id;
        return this._profileService.getUserById(id);
    }
    logoutSignedInUser() {
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["clear"])();
        this.router.navigateByUrl('/login');
    }
}
MainAuthService.ɵfac = function MainAuthService_Factory(t) { return new (t || MainAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
MainAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MainAuthService, factory: MainAuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MainAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "8mIn":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class JwtInterceptor {
    constructor() {
    }
    intercept(request, next) {
        // if (request.url.includes(`${constants.api_url}`) || request.url.includes(`${constants.clubApiUrl}`)) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response.status) {
                response.body = {
                    status: [200, 201, 204].includes(response.status),
                    data: response.body,
                };
            }
            return response;
        }));
        // } else {
        //   return next.handle(request);
        // }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    appVersion: 'v723demo1',
    USERDATA_KEY: 'authf649fc9a5f55',
    isMockEnabled: true,
    apiUrl: 'api',
    version: '0.0.0'
};


/***/ }),

/***/ "Br0f":
/*!******************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/index.ts ***!
  \******************************************************/
/*! exports provided: SortState, PageSizes, PaginatorState, GroupingState, TableService, TableExtendedService, CRUDTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/table.model */ "Vh1Q");
/* empty/unused harmony star reexport *//* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/sort.model */ "fr3w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return _models_sort_model__WEBPACK_IMPORTED_MODULE_1__["SortState"]; });

/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/paginator.model */ "fksT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PageSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"]; });

/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/grouping.model */ "WWIl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return _models_grouping_model__WEBPACK_IMPORTED_MODULE_3__["GroupingState"]; });

/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/search.model */ "EASb");
/* empty/unused harmony star reexport *//* harmony import */ var _models_filter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/filter.model */ "19P/");
/* empty/unused harmony star reexport *//* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/table.service */ "aENq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return _services_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"]; });

/* harmony import */ var _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/table.extended.service */ "CjzB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableExtendedService", function() { return _services_table_extended_service__WEBPACK_IMPORTED_MODULE_7__["TableExtendedService"]; });

/* harmony import */ var _crud_table_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crud-table.module */ "RbrB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return _crud_table_module__WEBPACK_IMPORTED_MODULE_8__["CRUDTableModule"]; });

// Models






// Directives
// Services


// Module



/***/ }),

/***/ "CjzB":
/*!********************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.extended.service.ts ***!
  \********************************************************************************/
/*! exports provided: TableExtendedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExtendedService", function() { return TableExtendedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.service */ "aENq");




class TableExtendedService extends _table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] {
    constructor(http) {
        super(http);
    }
}
TableExtendedService.ɵfac = function TableExtendedService_Factory(t) { return new (t || TableExtendedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TableExtendedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TableExtendedService, factory: TableExtendedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableExtendedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "EASb":
/*!********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/search.model.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "G28U":
/*!*******************************************!*\
  !*** ./src/app/_fake/fake-api.service.ts ***!
  \*******************************************/
/*! exports provided: FakeAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeAPIService", function() { return FakeAPIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _fake_db_users_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-db/users.table */ "R3gj");
/* harmony import */ var _fake_db_cars_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-db/cars.table */ "LtPJ");




// ECommerce
// import { ECommerceDataContext } from '../modules/e-commerce/_fake/fake-server/_e-commerce.data-context';
class FakeAPIService {
    constructor() { }
    /**
     * Create Fake DB and API
     */
    createDb() {
        // tslint:disable-next-line:class-name
        const db = {
            // auth module
            users: _fake_db_users_table__WEBPACK_IMPORTED_MODULE_1__["UsersTable"].users,
            // data-table
            cars: _fake_db_cars_table__WEBPACK_IMPORTED_MODULE_2__["CarsTable"].cars,
        };
        return db;
    }
}
FakeAPIService.ɵfac = function FakeAPIService_Factory(t) { return new (t || FakeAPIService)(); };
FakeAPIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeAPIService, factory: FakeAPIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeAPIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ggq3":
/*!***************************************************!*\
  !*** ./src/app/core/services/base-api.service.ts ***!
  \***************************************************/
/*! exports provided: BaseApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiService", function() { return BaseApiService; });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ "dkQB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_response_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../models/response.model */ "1m+6");

/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */







const headersConfig = {
    'LOCALE': 'en',
    'Accept': 'application/json',
    'access-control-allow-origin': '*'
};
class BaseApiService {
    constructor(http) {
        this.http = http;
    }
    setHeaders() {
        const header = Object.assign(Object.assign({}, headersConfig), { 'Content-Type': 'application/json' });
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](header);
    }
    setHeadersForMedia() {
        const header = Object.assign({}, headersConfig);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](header);
    }
    get(path, params) {
        // Add safe, URL encoded_page parameter
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: this.objectToQueryString(params) }),
            //observe: 'response',
            headers: this.setHeaders()
        };
        return this.mapAndCatchError(this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].api_url}${path}`, options));
    }
    externalGet(path, params) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: this.objectToQueryString(params) })
        };
        return this.http.get(`${path}`, options);
    }
    baseGet(path, params) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: this.objectToQueryString(params) }),
            headers: this.setHeaders()
        };
        return this.mapAndCatchError(this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].base_url}${path}`, options));
    }
    clubApiGet(path, params) {
        const options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: this.objectToQueryString(params) }),
            headers: this.setHeaders()
        };
        return this.mapAndCatchError(this.http.get(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].clubApiUrl}${path}`, options));
    }
    post(path, body = {}) {
        // Add safe, URL encoded_page parameter
        const options = { headers: this.setHeaders() };
        return this.mapAndCatchError(this.http.post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].api_url}${path}`, JSON.stringify(body), options));
    }
    clubApiPost(path, body = {}) {
        return this.mapAndCatchError(this.http.post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].clubApiUrl}${path}`, body));
    }
    postMedia(path, body = {}) {
        // Add safe, URL encoded_page parameter
        return this.mapAndCatchError(this.http.post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].api_url}${path}`, body));
    }
    put(path, body = {}) {
        // Add safe, URL encoded_page parameter
        const options = { headers: this.setHeaders() };
        return this.mapAndCatchError(this.http.put(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].api_url}${path}`, JSON.stringify(body), options));
    }
    delete(path, body = {}) {
        // Add safe, URL encoded_page parameter
        const options = {
            headers: this.setHeaders(),
            body: JSON.stringify(body)
        };
        return this.mapAndCatchError(this.http.delete(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].api_url}${path}`, options));
    }
    externalPost(path, body = {}, options = {}) {
        if (options.responseType) {
            return this.http.post(`${path}`, JSON.stringify(body), { responseType: options.responseType, headers: this.setHeaders() });
        }
        else {
            return this.http.post(`${src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["constants"].base_url}${path}`, JSON.stringify(body), { headers: this.setHeaders() });
            // .catch(error => error);
        }
    }
    objectToQueryString(obj) {
        const str = [];
        for (const p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
        return str.join('&');
    }
    mapAndCatchError(response) {
        return response.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            const result = new _models_response_model__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            Object.assign(result, r);
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            const result = new _models_response_model__WEBPACK_IMPORTED_MODULE_5__["ApiResponse"]();
            // if err.error is not ApiResponse<TData> e.g. connection issue
            if (err.error instanceof ErrorEvent ||
                err.error instanceof ProgressEvent) {
                result.errors.push({
                    code: _models_response_model__WEBPACK_IMPORTED_MODULE_5__["ErrorCode"].UnknownError,
                    text: 'Unknown error.'
                });
            }
            else {
                result.errors.push({
                    code: err.status,
                    text: err.message,
                    error: err.error
                });
                // Object.assign(result, err.error)
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        }));
    }
}
BaseApiService.ɵfac = function BaseApiService_Factory(t) { return new (t || BaseApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BaseApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BaseApiService, factory: BaseApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BaseApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LZ44":
/*!****************************************************!*\
  !*** ./src/app/modules/auth/_models/auth.model.ts ***!
  \****************************************************/
/*! exports provided: AuthModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModel", function() { return AuthModel; });
class AuthModel {
    setAuth(auth) {
        this.accessToken = auth.accessToken;
        this.refreshToken = auth.refreshToken;
        this.expiresIn = auth.expiresIn;
    }
}


/***/ }),

/***/ "LtPJ":
/*!*********************************************!*\
  !*** ./src/app/_fake/fake-db/cars.table.ts ***!
  \*********************************************/
/*! exports provided: CarsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsTable", function() { return CarsTable; });
class CarsTable {
}
CarsTable.cars = [
    {
        id: 1,
        cModel: 'Elise',
        cManufacture: 'Lotus',
        cModelYear: 2004,
        cMileage: 116879,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lotus Elise first appeared in 1996 and revolutionised small sports car design with its lightweight extruded aluminium chassis and composite body. There have been many variations, but the basic principle remain the same.`,
        cColor: 'Red',
        cPrice: 18347,
        cCondition: 1,
        createdDate: '09/30/2017',
        cStatus: 0,
        cVINCode: '1FTWX3D52AE575540',
    },
    {
        id: 2,
        cModel: 'Sunbird',
        cManufacture: 'Pontiac',
        cModelYear: 1984,
        cMileage: 99515,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 cModel years,and later as a compact for the 1982 to 1994 cModel years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 cModel years, as the 1982 cModel was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        cColor: 'Khaki',
        cPrice: 165956,
        cCondition: 0,
        createdDate: '03/22/2018',
        cStatus: 1,
        cVINCode: 'JM1NC2EF8A0293556',
    },
    {
        id: 3,
        cModel: 'Amigo',
        cManufacture: 'Isuzu',
        cModelYear: 1993,
        cMileage: 138027,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Isuzu MU is a mid-size SUV that was produced by the Japan-based cManufacturer Isuzu. The three-door MU was introduced in 1989, followed in 1990 by the five-door version called Isuzu MU Wizard, both of which stopped production in 1998 to be replaced by a second generation. This time, the five-door version dropped the "MU" prefix, to become the Isuzu Wizard. The acronym "MU" is short for "Mysterious Utility". Isuzu cManufactured several variations to the MU and its derivates for sale in other countries.`,
        cColor: 'Aquamarine',
        cPrice: 45684,
        cCondition: 0,
        createdDate: '03/06/2018',
        cStatus: 0,
        cVINCode: '1G6DG8E56C0973889',
    },
    {
        id: 4,
        cModel: 'LS',
        cManufacture: 'Lexus',
        cModelYear: 2004,
        cMileage: 183068,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lexus LS (Japanese: レクサス・LS, Rekusasu LS) is a full-size luxury car (F-segment in Europe) serving as the flagship cModel of Lexus, the luxury division of Toyota. For the first four generations, all LS cModels featured V8 engines and were predominantly rear-wheel-drive, with Lexus also offering all-wheel-drive, hybrid, and long-wheelbase variants. The fifth generation changed to using a V6 engine with no V8 option, and the long wheelbase variant was removed entirely.`,
        cColor: 'Mauv',
        cPrice: 95410,
        cCondition: 1,
        createdDate: '02/03/2018',
        cStatus: 1,
        cVINCode: '2T1BU4EE6DC859114',
    },
    {
        id: 5,
        cModel: 'Paseo',
        cManufacture: 'Toyota',
        cModelYear: 1997,
        cMileage: 74884,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota Paseo (known as the Cynos in Japan and other regions) is a sports styled compact car sold from 1991–1999 and was loosely based on the Tercel. It was available as a coupe and in later cModels as a convertible. Toyota stopped selling the car in the United States in 1997, however the car continued to be sold in Canada, Europe and Japan until 1999, but had no direct replacement. The Paseo, like the Tercel, shares a platform with the Starlet. Several parts are interchangeable between the three`,
        cColor: 'Pink',
        cPrice: 24796,
        cCondition: 1,
        createdDate: '08/13/2017',
        cStatus: 0,
        cVINCode: '1D7RB1GP0AS597432',
    },
    {
        id: 6,
        cModel: 'M',
        cManufacture: 'Infiniti',
        cModelYear: 2009,
        cMileage: 194846,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Infiniti M is a line of mid-size luxury (executive) cars from the Infiniti luxury division of Nissan.\r\nThe first iteration was the M30 Coupe/Convertible, which were rebadged JDM Nissan Leopard.\r\nAfter a long hiatus, the M nameplate was used for Infiniti's mid-luxury sedans (executive cars). First was the short-lived M45 sedan, a rebadged version of the Japanese-spec Nissan Gloria. The next generations, the M35/45 and M37/56/35h/30d, became the flagship of the Infiniti brand and are based on the JDM Nissan Fuga.`,
        cColor: 'Puce',
        cPrice: 30521,
        cCondition: 1,
        createdDate: '01/27/2018',
        cStatus: 0,
        cVINCode: 'YV1940AS1D1542424',
    },
    {
        id: 7,
        cModel: 'Phantom',
        cManufacture: 'Rolls-Royce',
        cModelYear: 2008,
        cMileage: 164124,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Rolls-Royce Phantom VIII is a luxury saloon car cManufactured by Rolls-Royce Motor Cars. It is the eighth and current generation of Rolls-Royce Phantom, and the second launched by Rolls-Royce under BMW ownership. It is offered in two wheelbase lengths`,
        cColor: 'Purple',
        cPrice: 196247,
        cCondition: 1,
        createdDate: '09/28/2017',
        cStatus: 1,
        cVINCode: '3VWML7AJ1DM234625',
    },
    {
        id: 8,
        cModel: 'QX',
        cManufacture: 'Infiniti',
        cModelYear: 2002,
        cMileage: 57410,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Infiniti QX80 (called the Infiniti QX56 until 2013) is a full-size luxury SUV built by Nissan Motor Company's Infiniti division. The naming convention originally adhered to the current trend of using a numeric designation derived from the engine's displacement, thus QX56 since the car has a 5.6-liter engine. From the 2014 cModel year, the car was renamed the QX80, as part of Infiniti's cModel name rebranding. The new name carries no meaning beyond suggesting that the vehicle is larger than smaller cModels such as the QX60`,
        cColor: 'Green',
        cPrice: 185775,
        cCondition: 1,
        createdDate: '11/15/2017',
        cStatus: 0,
        cVINCode: 'WDDHF2EB9CA161524',
    },
    {
        id: 9,
        cModel: 'Daytona',
        cManufacture: 'Dodge',
        cModelYear: 1993,
        cMileage: 4444,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Dodge Daytona was an automobile which was produced by the Chrysler Corporation under their Dodge division from 1984 to 1993. It was a front-wheel drive hatchback based on the Chrysler G platform, which was derived from the Chrysler K platform. The Chrysler Laser was an upscale rebadged version of the Daytona. The Daytona was restyled for 1987, and again for 1992. It replaced the Mitsubishi Galant-based Challenger, and slotted between the Charger and the Conquest. The Daytona was replaced by the 1995 Dodge Avenger, which was built by Mitsubishi Motors. The Daytona derives its name mainly from the Dodge Charger Daytona, which itself was named after the Daytona 500 race in Daytona Beach, Florida.`,
        cColor: 'Maroon',
        cPrice: 171898,
        cCondition: 0,
        createdDate: '12/24/2017',
        cStatus: 1,
        cVINCode: 'WBAET37422N752051',
    },
    {
        id: 10,
        cModel: '1500 Silverado',
        cManufacture: 'Chevrolet',
        cModelYear: 1999,
        cMileage: 195310,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Chevrolet Silverado, and its mechanically identical cousin, the GMC Sierra, are a series of full-size and heavy-duty pickup trucks cManufactured by General Motors and introduced in 1998 as the successor to the long-running Chevrolet C/K line. The Silverado name was taken from a trim level previously used on its predecessor, the Chevrolet C/K pickup truck from 1975 through 1998. General Motors continues to offer a GMC-badged variant of the Chevrolet full-size pickup under the GMC Sierra name, first used in 1987 for its variant of the GMT400 platform trucks.`,
        cColor: 'Blue',
        cPrice: 25764,
        cCondition: 0,
        createdDate: '08/30/2017',
        cStatus: 1,
        cVINCode: '1N6AF0LX6EN590806',
    },
    {
        id: 11,
        cModel: 'CTS',
        cManufacture: 'Cadillac',
        cModelYear: 2012,
        cMileage: 170862,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Cadillac CTS is a mid-size luxury car / executive car designed, engineered, cManufactured and marketed by General Motors, and now in its third generation. \r\nInitially available only as a 4-door sedan on the GM Sigma platform, GM had offered the second generation CTS in three body styles: 4-door sedan, 2-door coupe, and 5-door sport wagon also using the Sigma platform — and the third generation in coupe and sedan configurations, using a stretched version of the GM Alpha platform.\r\nWayne Cherry and Kip Wasenko designed the exterior of the first generation CTS, marking the production debut of a design language (marketed as "Art and Science") first seen on the Evoq concept car. Bob Boniface and Robin Krieg designed the exterior of the third generation CTS`,
        cColor: 'Crimson',
        cPrice: 80588,
        cCondition: 0,
        createdDate: '02/15/2018',
        cStatus: 0,
        cVINCode: '1G4HR54KX4U506530',
    },
    {
        id: 12,
        cModel: 'Astro',
        cManufacture: 'Chevrolet',
        cModelYear: 1995,
        cMileage: 142137,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Chevrolet Astro was a rear-wheel drive van/minivan cManufactured and marketed by the American automaker Chevrolet from 1985 to 2005 and over two build generations. Along with its rebadged variant, the GMC Safari, the Astro was marketed in passenger as well as cargo and livery configurations—featuring a V6 engine, unibody construction with a separate front engine/suspension sub-frame, leaf-spring rear suspension, rear bi-parting doors, and a seating capacity of up to eight passengers`,
        cColor: 'Teal',
        cPrice: 72430,
        cCondition: 1,
        createdDate: '07/31/2017',
        cStatus: 0,
        cVINCode: 'KMHGH4JH2DU676107',
    },
    {
        id: 13,
        cModel: 'XL7',
        cManufacture: 'Suzuki',
        cModelYear: 2009,
        cMileage: 165165,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Suzuki XL-7 (styled as XL7 for the second generation) is Suzuki's mid-sized SUV that was made from 1998 to 2009, over two generations. It was slotted above the Grand Vitara in Suzuki's lineup.`,
        cColor: 'Puce',
        cPrice: 118667,
        cCondition: 0,
        createdDate: '02/04/2018',
        cStatus: 0,
        cVINCode: '1N6AF0LX9EN733005',
    },
    {
        id: 14,
        cModel: 'SJ 410',
        cManufacture: 'Suzuki',
        cModelYear: 1984,
        cMileage: 176074,
        // tslint:disable-next-line:max-line-length
        cDescription: `The SJ-Series was introduced to the United States (Puerto Rico (SJ-410) and Canada earlier) in 1985 for the 1986 cModel year. It was cPriced at $6200 and 47,000 were sold in its first year. The Samurai had a 1.3 liter, 63 hp (47 kW), 4-cylinder engine and was available as a convertible or a hardtop, and with or without a rear seat. The Suzuki Samurai became intensely popular within the serious 4WD community for its good off-road performance and reliability compared to other 4WDs of the time. This is due to the fact that while very compact and light, it is a real 4WD vehicle equipped with a transfer case, switchable 4WD and low range. Its lightness makes it a very nimble off-roader less prone to sinking in softer ground than heavier types. It is also considered a great beginner off-roader due to its simple design and ease of engine and suspension modifications.`,
        cColor: 'Orange',
        cPrice: 84325,
        cCondition: 0,
        createdDate: '12/22/2017',
        cStatus: 0,
        cVINCode: '2C3CDYBT6DH183756',
    },
    {
        id: 15,
        cModel: 'F-Series',
        cManufacture: 'Ford',
        cModelYear: 1995,
        cMileage: 53030,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Ford F-Series is a series of light-duty trucks and medium-duty trucks (Class 2-7) that have been marketed and cManufactured by Ford Motor Company since 1948. While most variants of the F-Series trucks are full-size pickup trucks, the F-Series also includes chassis cab trucks and commercial vehicles. The Ford F-Series has been the best-selling vehicle in the United States since 1986 and the best-selling pickup since 1977.[1][2] It is also the best selling vehicle in Canada.[3] As of the 2018 cModel year, the F-Series generates $41.0 billion in annual revenue for Ford, making the F-Series brand more valuable than Coca-Cola and Nike.`,
        cColor: 'Aquamarine',
        cPrice: 77108,
        cCondition: 0,
        createdDate: '01/09/2018',
        cStatus: 0,
        cVINCode: 'WBAVB33526P873481',
    },
    {
        id: 16,
        cModel: 'HS',
        cManufacture: 'Lexus',
        cModelYear: 2011,
        cMileage: 84718,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Lexus HS (Japanese: レクサス・HS, Rekusasu HS) is a dedicated hybrid vehicle introduced by Lexus as a new entry-level luxury compact sedan in 2009.[2] Built on the Toyota New MC platform,[3] it is classified as a compact under Japanese regulations concerning vehicle exterior dimensions and engine displacement. Unveiled at the North American International Auto Show in January 2009, the HS 250h went on sale in July 2009 in Japan, followed by the United States in August 2009 as a 2010 cModel. The HS 250h represented the first dedicated hybrid vehicle in the Lexus lineup, as well as the first offered with an inline-four gasoline engine.[4] Bioplastic materials are used for the vehicle interior.[5] With a total length of 184.8 inches, the Lexus HS is slightly larger than the Lexus IS, but still smaller than the mid-size Lexus ES.`,
        cColor: 'Purple',
        cPrice: 140170,
        cCondition: 0,
        createdDate: '11/14/2017',
        cStatus: 1,
        cVINCode: '1FTWF3A56AE545514',
    },
    {
        id: 17,
        cModel: 'Land Cruiser',
        cManufacture: 'Toyota',
        cModelYear: 2008,
        cMileage: 157019,
        // tslint:disable-next-line:max-line-length
        cDescription: `Production of the first generation Land Cruiser began in 1951 (90 units) as Toyota's version of a Jeep-like vehicle.[2][3] The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis versions. The Land Cruiser's reliability and longevity has led to huge popularity, especially in Australia where it is the best-selling body-on-frame, four-wheel drive vehicle.[4] Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store.`,
        cColor: 'Crimson',
        cPrice: 72638,
        cCondition: 1,
        createdDate: '08/08/2017',
        cStatus: 1,
        cVINCode: '3C3CFFDR2FT957799',
    },
    {
        id: 18,
        cModel: 'Wrangler',
        cManufacture: 'Jeep',
        cModelYear: 1994,
        cMileage: 55857,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Jeep Wrangler is a series of compact and mid-size (Wrangler Unlimited and Wrangler 4-door JL) four-wheel drive off-road vehicle cModels, cManufactured by Jeep since 1986, and currently migrating from its third into its fourth generation. The Wrangler JL was unveiled in late 2017 and will be produced at Jeep's Toledo Complex.`,
        cColor: 'Red',
        cPrice: 193523,
        cCondition: 0,
        createdDate: '02/28/2018',
        cStatus: 1,
        cVINCode: '3C4PDCAB7FT652291',
    },
    {
        id: 19,
        cModel: 'Sunbird',
        cManufacture: 'Pontiac',
        cModelYear: 1994,
        cMileage: 165202,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Sunbird is an automobile that was produced by Pontiac, initially as a subcompact for the 1976 to 1980 cModel years, and later as a compact for the 1982 to 1994 cModel years. The Sunbird badge ran for 18 years (with a hiatus during the 1981 and 1982 cModel years, as the 1982 cModel was called J2000) and was then replaced in 1995 by the Pontiac Sunfire. Through the years the Sunbird was available in notchback coupé, sedan, hatchback, station wagon, and convertible body styles.`,
        cColor: 'Blue',
        cPrice: 198739,
        cCondition: 0,
        createdDate: '05/13/2017',
        cStatus: 1,
        cVINCode: '1GD22XEG9FZ103872',
    },
    {
        id: 20,
        cModel: 'A4',
        cManufacture: 'Audi',
        cModelYear: 1998,
        cMileage: 117958,
        // tslint:disable-next-line:max-line-length
        cDescription: `The A4 has been built in five generations and is based on the Volkswagen Group B platform. The first generation A4 succeeded the Audi 80. The automaker's internal numbering treats the A4 as a continuation of the Audi 80 lineage, with the initial A4 designated as the B5-series, followed by the B6, B7, B8 and the B9. The B8 and B9 versions of the A4 are built on the Volkswagen Group MLB platform shared with many other Audi cModels and potentially one Porsche cModel within Volkswagen Group`,
        cColor: 'Yellow',
        cPrice: 159377,
        cCondition: 0,
        createdDate: '12/15/2017',
        cStatus: 1,
        cVINCode: '2C3CDXCT2FH350366',
    },
    {
        id: 21,
        cModel: 'Camry Solara',
        cManufacture: 'Toyota',
        cModelYear: 2006,
        cMileage: 22436,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota Camry Solara, popularly known as the Toyota Solara, is a mid-size coupe/convertible built by Toyota. The Camry Solara is mechanically based on the Toyota Camry and effectively replaced the discontinued Camry Coupe (XV10); however, in contrast with its predecessor's conservative design, the Camry Solara was designed with a greater emphasis on sportiness, with more rakish styling, and uprated suspension and engine tuning intended to provide a sportier feel.[5] The coupe was launched in late 1998 as a 1999 cModel.[1] In 2000, the convertible was introduced, effectively replacing the Celica convertible in Toyota's North American lineup`,
        cColor: 'Green',
        cPrice: 122562,
        cCondition: 0,
        createdDate: '07/11/2017',
        cStatus: 0,
        cVINCode: '3C3CFFHH6DT874066',
    },
    {
        id: 22,
        cModel: 'Tribeca',
        cManufacture: 'Subaru',
        cModelYear: 2007,
        cMileage: 127958,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Subaru Tribeca is a mid-size crossover SUV made from 2005 to 2014. Released in some markets, including Canada, as the Subaru B9 Tribeca, the name "Tribeca" derives from the Tribeca neighborhood of New York City.[1] Built on the Subaru Legacy platform and sold in five- and seven-seat configurations, the Tribeca was intended to be sold alongside a slightly revised version known as the Saab 9-6. Saab, at the time a subsidiary of General Motors (GM), abandoned the 9-6 program just prior to its release subsequent to GM's 2005 divestiture of its 20 percent stake in FHI.`,
        cColor: 'Yellow',
        cPrice: 90221,
        cCondition: 1,
        createdDate: '11/12/2017',
        cStatus: 0,
        cVINCode: 'WVWGU7AN9AE957575',
    },
    {
        id: 23,
        cModel: '1500 Club Coupe',
        cManufacture: 'GMC',
        cModelYear: 1997,
        cMileage: 95783,
        // tslint:disable-next-line:max-line-length
        cDescription: `GMC (General Motors Truck Company), formally the GMC Division of General Motors LLC, is a division of the American automobile cManufacturer General Motors (GM) that primarily focuses on trucks and utility vehicles. GMC sells pickup and commercial trucks, buses, vans, military vehicles, and sport utility vehicles marketed worldwide by General Motors.`,
        cColor: 'Teal',
        cPrice: 64376,
        cCondition: 1,
        createdDate: '06/28/2017',
        cStatus: 0,
        cVINCode: 'SCFBF04BX7G920997',
    },
    {
        id: 24,
        cModel: 'Firebird',
        cManufacture: 'Pontiac',
        cModelYear: 2002,
        cMileage: 74063,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Pontiac Firebird is an American automobile built by Pontiac from the 1967 to the 2002 cModel years. Designed as a pony car to compete with the Ford Mustang, it was introduced 23 February 1967, the same cModel year as GM's Chevrolet division platform-sharing Camaro.[1] This also coincided with the release of the 1967 Mercury Cougar, Ford's upscale, platform-sharing version of the Mustang. The name "Firebird" was also previously used by GM for the General Motors Firebird 1950s and early-1960s`,
        cColor: 'Puce',
        cPrice: 94178,
        cCondition: 1,
        createdDate: '09/13/2017',
        cStatus: 0,
        cVINCode: '3C63D2JL5CG563879',
    },
    {
        id: 25,
        cModel: 'RAV4',
        cManufacture: 'Toyota',
        cModelYear: 1996,
        cMileage: 99461,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Toyota RAV4 (Japanese: トヨタ RAV4 Toyota Ravufō) is a compact crossover SUV (sport utility vehicle) produced by the Japanese automobile cManufacturer Toyota. This was the first compact crossover SUV;[1] it made its debut in Japan and Europe in 1994,[2] and in North America in 1995. The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car. Although not all RAV4s are four-wheel-drive, RAV4 stands for "Recreational Activity Vehicle: 4-wheel drive", because the aforementioned equipment is an option in select countries`,
        cColor: 'Goldenrod',
        cPrice: 48342,
        cCondition: 0,
        createdDate: '12/29/2017',
        cStatus: 0,
        cVINCode: '2C4RDGDG6DR836144',
    },
    {
        id: 26,
        cModel: 'Amanti / Opirus',
        cManufacture: 'Kia',
        cModelYear: 2007,
        cMileage: 189651,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Kia Opirus was an executive car cManufactured and marketed by Kia Motors that was launched in April 2003 and was marketed globally under various nameplates, prominently as the Amanti. It was considered to be Kia's flagship vehicle.`,
        cColor: 'Indigo',
        cPrice: 44292,
        cCondition: 1,
        createdDate: '09/01/2017',
        cStatus: 1,
        cVINCode: '1C4SDHCT2CC055294',
    },
    {
        id: 27,
        cModel: 'S60',
        cManufacture: 'Volvo',
        cModelYear: 2001,
        cMileage: 78963,
        // tslint:disable-next-line:max-line-length
        cDescription: `First introduced in 2004, Volvo's S60 R used a Haldex all-wheel-drive system mated to a 300 PS (221 kW; 296 hp) / 400 N⋅m (300 lbf⋅ft) inline-5. The 2004–2005 cModels came with a 6-speed manual transmission, or an available 5-speed automatic which allowed only 258 lb⋅ft (350 N⋅m) torque in 1st and 2nd gears. The 2006–2007 cModels came with a 6-speed manual or 6-speed automatic transmission (which was no longer torque-restricted)`,
        cColor: 'Goldenrod',
        cPrice: 9440,
        cCondition: 0,
        createdDate: '11/06/2017',
        cStatus: 0,
        cVINCode: '3C6TD5CT5CG316067',
    },
    {
        id: 28,
        cModel: 'Grand Marquis',
        cManufacture: 'Mercury',
        cModelYear: 1984,
        cMileage: 153027,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Mercury Grand Marquis is an automobile that was sold by the Mercury division of Ford Motor Company from 1975 to 2011. From 1975 to 1982, it was the premium cModel of the Mercury Marquis cModel line, becoming a standalone cModel line in 1983. For its entire production run, the Grand Marquis served as the flagship of the Mercury line, with the Ford (LTD) Crown Victoria serving as its Ford counterpart. In addition, from 1979 to 2011, the Grand Marquis shared the rear-wheel drive Panther platform alongside the Lincoln Town Car`,
        cColor: 'Goldenrod',
        cPrice: 76027,
        cCondition: 0,
        createdDate: '12/16/2017',
        cStatus: 1,
        cVINCode: '3C3CFFJH2DT871398',
    },
    {
        id: 29,
        cModel: 'Talon',
        cManufacture: 'Eagle',
        cModelYear: 1991,
        cMileage: 111234,
        // tslint:disable-next-line:max-line-length
        cDescription: `Cosmetically, differences between the three were found in wheels, availability of cColors, tail lights, front and rear bumpers, and spoilers. The Talon featured two-tone body cColor with a black 'greenhouse' (roof, pillars, door-mounted mirrors) regardless of the body cColor. The variants featured 5-speed manual or 4-speed automatic transmissions and a hood bulge on the left-hand side of the car in order for camshaft clearance on the 4G63 engine. The base cModel DL did not use this engine but still had a bulge as evident in the 1992 Talon brochure. 2nd Generation cars all had such a bulge, even with the inclusion of the 420A engine`,
        cColor: 'Teal',
        cPrice: 157216,
        cCondition: 0,
        createdDate: '05/08/2017',
        cStatus: 1,
        cVINCode: 'YV1902FH1D2957659',
    },
    {
        id: 30,
        cModel: 'Passport',
        cManufacture: 'Honda',
        cModelYear: 2002,
        cMileage: 3812,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Passport was a part of a partnership between Isuzu and Honda in the 1990s, which saw an exchange of passenger vehicles from Honda to Isuzu, such as the Isuzu Oasis, and trucks from Isuzu to Honda, such as the Passport and Acura SLX. This arrangement was convenient for both companies, as Isuzu discontinued passenger car production in 1993 after a corporate restructuring, and Honda was in desperate need a SUV, a segment that was growing in popularity in North America as well as Japan during the 1990s. The partnership ended in 2002 with the discontinuation of the Passport in favor of the Honda-engineered Pilot`,
        cColor: 'Puce',
        cPrice: 41299,
        cCondition: 1,
        createdDate: '03/08/2018',
        cStatus: 0,
        cVINCode: 'WVWEU9AN4AE524071',
    },
    {
        id: 31,
        cModel: 'H3',
        cManufacture: 'Hummer',
        cModelYear: 2006,
        cMileage: 196321,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Hummer H3 is a sport utility vehicle/off-road vehicle from Hummer that was produced from 2005 to 2010. Introduced for the 2006 cModel year, it was based on a highly modified GMT355 underpinning the Chevrolet cColorado/GMC Canyon compact pickup trucks that were also built at GM's Shreveport Operations in Shreveport, Louisiana and the Port Elizabeth plant in South Africa. The H3 was actually the smallest among the Hummer cModels. It was available either as a traditional midsize SUV or as a midsize pickup known as the H3T`,
        cColor: 'Pink',
        cPrice: 186964,
        cCondition: 1,
        createdDate: '06/04/2017',
        cStatus: 1,
        cVINCode: '4T1BF1FK4FU746230',
    },
    {
        id: 32,
        cModel: 'Comanche',
        cManufacture: 'Jeep',
        cModelYear: 1992,
        cMileage: 72285,
        // tslint:disable-next-line:max-line-length
        cDescription: `The Jeep Comanche (designated MJ) is a pickup truck variant of the Cherokee compact SUV (1984–2001)[3] cManufactured and marketed by Jeep for cModel years 1986-1992 in rear wheel (RWD) and four-wheel drive (4WD) cModels as well as two cargo bed lengths: six-feet (1.83 metres) and seven-feet (2.13 metres)`,
        cColor: 'Mauv',
        cPrice: 145971,
        cCondition: 1,
        createdDate: '09/01/2017',
        cStatus: 0,
        cVINCode: '1J4PN2GK1BW745045',
    },
    {
        id: 33,
        cModel: 'Blazer',
        cManufacture: 'Chevrolet',
        cModelYear: 1993,
        cMileage: 189804,
        // tslint:disable-next-line:max-line-length
        cDescription: `The 2014 – 2nd generation, MY14 Duramax 2.8L diesel engines have several new parts, namely a new water-cooled variable-geometry turbocharger, a new high-pressure common-rail fuel delivery system, a new exhaust gas recirculation (EGR) system, a new intake manifold, a new cylinder head, a new cylinder block, a new balance shaft unit and a new Engine Control Module (ECM). and now produce 197 hp and 369 Ft/Lbs of torque`,
        cColor: 'Indigo',
        cPrice: 154594,
        cCondition: 0,
        createdDate: '09/13/2017',
        cStatus: 0,
        cVINCode: '1G6KD57Y43U482896',
    },
    {
        id: 34,
        cModel: 'Envoy XUV',
        cManufacture: 'GMC',
        cModelYear: 2004,
        cMileage: 187960,
        // tslint:disable-next-line:max-line-length
        cDescription: `The GMC Envoy is a mid-size SUV that was produced by General Motors. It was introduced for the 1998 cModel year. After the first generation Envoy was discontinued after the 2000 cModel year, but the Envoy was reintroduced and redesigned for the 2002 cModel year, and it was available in the GMC line of vehicles from the 2002 to 2009 cModel years`,
        cColor: 'Turquoise',
        cPrice: 185103,
        cCondition: 1,
        createdDate: '12/07/2017',
        cStatus: 0,
        cVINCode: '5GAER23D09J658030',
    },
];


/***/ }),

/***/ "NtJg":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/index.ts ***!
  \***********************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_auth_fake_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fake/auth-fake-http.service */ "OcTV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return _fake_auth_fake_http_service__WEBPACK_IMPORTED_MODULE_0__["AuthHTTPService"]; });

// #fake-start#
 // You have to comment this, when your real back-end is done
// #fake-end#
// #real-start#
// export { AuthHTTPService } from './auth-http.service'; // You have to uncomment this, when your real back-end is done
// #real-end#


/***/ }),

/***/ "ONK0":
/*!**********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.service.ts ***!
  \**********************************************************************************/
/*! exports provided: SplashScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return SplashScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "GS7A");




class SplashScreenService {
    /**
     * Service constructor
     *
     * @param animationBuilder: AnimationBuilder
     */
    constructor(animationBuilder) {
        this.animationBuilder = animationBuilder;
    }
    /**
     * Init
     *
     * @param element: ElementRef
     */
    init(element) {
        this.el = element;
    }
    /**
     * Hide
     */
    hide() {
        if (this.stopped || !this.el) {
            return;
        }
        const player = this.animationBuilder
            .build([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '1' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(800, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: '0' }))])
            .create(this.el.nativeElement);
        player.onDone(() => {
            if (typeof this.el.nativeElement.remove === 'function') {
                this.el.nativeElement.remove();
            }
            else {
                this.el.nativeElement.style.display = 'none !important';
            }
            this.stopped = true;
        });
        setTimeout(() => player.play(), 100);
    }
}
SplashScreenService.ɵfac = function SplashScreenService_Factory(t) { return new (t || SplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"])); };
SplashScreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SplashScreenService, factory: SplashScreenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AnimationBuilder"] }]; }, null); })();


/***/ }),

/***/ "OcTV":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/auth/_services/auth-http/fake/auth-fake-http.service.ts ***!
  \*********************************************************************************/
/*! exports provided: AuthHTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHTTPService", function() { return AuthHTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_auth_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_models/auth.model */ "LZ44");
/* harmony import */ var _fake_fake_db_users_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_fake/fake-db/users.table */ "R3gj");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");








const API_USERS_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/users`;
class AuthHTTPService {
    constructor(http) {
        this.http = http;
    }
    // public methods
    login(email, password) {
        const notFoundError = new Error('Not Found');
        if (!email || !password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(notFoundError);
        }
        return this.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            if (result.length <= 0) {
                return notFoundError;
            }
            const user = result.find((u) => {
                return (u.email.toLowerCase() === email.toLowerCase() &&
                    u.password === password);
            });
            if (!user) {
                return notFoundError;
            }
            const auth = new _models_auth_model__WEBPACK_IMPORTED_MODULE_3__["AuthModel"]();
            auth.accessToken = user.accessToken;
            auth.refreshToken = user.refreshToken;
            auth.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
            return auth;
        }));
    }
    createUser(user) {
        user.roles = [2]; // Manager
        user.accessToken = 'access-token-' + Math.random();
        user.refreshToken = 'access-token-' + Math.random();
        user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
        user.pic = './assets/media/users/default.jpg';
        return this.http.post(API_USERS_URL, user);
    }
    forgotPassword(email) {
        return this.getAllUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            const user = result.find((u) => u.email.toLowerCase() === email.toLowerCase());
            return user !== undefined;
        }));
    }
    getUserByToken(token) {
        const user = _fake_fake_db_users_table__WEBPACK_IMPORTED_MODULE_4__["UsersTable"].users.find((u) => {
            return u.accessToken === token;
        });
        if (!user) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(user);
    }
    getAllUsers() {
        return this.http.get(API_USERS_URL);
    }
}
AuthHTTPService.ɵfac = function AuthHTTPService_Factory(t) { return new (t || AuthHTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
AuthHTTPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthHTTPService, factory: AuthHTTPService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthHTTPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QWUF":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/jp.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Japan
const locale = {
    lang: 'jp',
    data: {
        TRANSLATOR: {
            SELECT: 'あなたが使う言語を選んでください',
        },
        MENU: {
            NEW: '新しい',
            ACTIONS: '行動',
            CREATE_POST: '新しい投稿を作成',
            PAGES: 'Pages',
            FEATURES: '特徴',
            APPS: 'アプリ',
            DASHBOARD: 'ダッシュボード',
        },
        AUTH: {
            GENERAL: {
                OR: 'または',
                SUBMIT_BUTTON: '提出する',
                NO_ACCOUNT: 'アカウントを持っていない？',
                SIGNUP_BUTTON: 'サインアップ',
                FORGOT_BUTTON: 'パスワードをお忘れですか',
                BACK_BUTTON: 'バック',
                PRIVACY: 'プライバシー',
                LEGAL: '法的',
                CONTACT: '接触',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'ユーザー名'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "QnJH":
/*!*********************************************************************************!*\
  !*** ./src/app/_metronic/partials/layout/splash-screen/splash-screen.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SplashScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenModule", function() { return SplashScreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.component */ "2ndO");




class SplashScreenModule {
}
SplashScreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplashScreenModule });
SplashScreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SplashScreenModule_Factory(t) { return new (t || SplashScreenModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplashScreenModule, { declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashScreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "R3gj":
/*!**********************************************!*\
  !*** ./src/app/_fake/fake-db/users.table.ts ***!
  \**********************************************/
/*! exports provided: UsersTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTable", function() { return UsersTable; });
class UsersTable {
}
UsersTable.users = [
    {
        id: 1,
        username: 'admin',
        password: 'demo',
        email: 'admin@demo.com',
        accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
        refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
        roles: [1],
        pic: './assets/media/users/300_25.jpg',
        fullname: 'Sean S',
        firstname: 'Sean',
        lastname: 'Stark',
        occupation: 'CEO',
        companyName: 'Keenthemes',
        phone: '456669067890',
        language: 'en',
        timeZone: 'International Date Line West',
        website: 'https://keenthemes.com',
        emailSettings: {
            emailNotification: true,
            sendCopyToPersonalEmail: false,
            activityRelatesEmail: {
                youHaveNewNotifications: false,
                youAreSentADirectMessage: false,
                someoneAddsYouAsAsAConnection: true,
                uponNewOrder: false,
                newMembershipApproval: false,
                memberRegistration: true
            },
            updatesFromKeenthemes: {
                newsAboutKeenthemesProductsAndFeatureUpdates: false,
                tipsOnGettingMoreOutOfKeen: false,
                thingsYouMissedSindeYouLastLoggedIntoKeen: true,
                newsAboutMetronicOnPartnerProductsAndOtherServices: true,
                tipsOnMetronicBusinessProducts: true
            },
        },
        communication: {
            email: true,
            sms: true,
            phone: false
        },
        address: {
            addressLine: 'L-12-20 Vertex, Cybersquare',
            city: 'San Francisco',
            state: 'California',
            postCode: '45000',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/admin',
            facebook: 'https://facebook.com/admin',
            twitter: 'https://twitter.com/admin',
            instagram: 'https://instagram.com/admin',
        },
    },
    {
        id: 2,
        username: 'user',
        password: 'demo',
        email: 'user@demo.com',
        accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
        refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
        roles: [2],
        pic: './assets/media/users/100_2.jpg',
        fullname: 'Megan F',
        firstname: 'Megan',
        lastname: 'Fox',
        occupation: 'Deputy Head of Keenthemes in New York office',
        companyName: 'Keenthemes',
        phone: '456669067891',
        language: 'en',
        timeZone: 'International Date Line West',
        communication: {
            email: true,
            sms: true,
            phone: false
        },
        emailSettings: {
            emailNotification: true,
            sendCopyToPersonalEmail: false,
            activityRelatesEmail: {
                youHaveNewNotifications: false,
                youAreSentADirectMessage: false,
                someoneAddsYouAsAsAConnection: true,
                uponNewOrder: false,
                newMembershipApproval: false,
                memberRegistration: true
            },
            updatesFromKeenthemes: {
                newsAboutKeenthemesProductsAndFeatureUpdates: false,
                tipsOnGettingMoreOutOfKeen: false,
                thingsYouMissedSindeYouLastLoggedIntoKeen: true,
                newsAboutMetronicOnPartnerProductsAndOtherServices: true,
                tipsOnMetronicBusinessProducts: true
            },
        },
        address: {
            addressLine: '3487  Ingram Road',
            city: 'Greensboro',
            state: 'North Carolina',
            postCode: '27409',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/user',
            facebook: 'https://facebook.com/user',
            twitter: 'https://twitter.com/user',
            instagram: 'https://instagram.com/user',
        },
    },
    {
        id: 3,
        username: 'guest',
        password: 'demo',
        email: 'guest@demo.com',
        accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
        refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
        roles: [3],
        pic: './assets/media/users/default.jpg',
        fullname: 'Manu G',
        firstname: 'Manu',
        lastname: 'Ginobili',
        occupation: 'CFO',
        companyName: 'Keenthemes',
        phone: '456669067892',
        language: 'en',
        timeZone: 'International Date Line West',
        communication: {
            email: true,
            sms: true,
            phone: false
        },
        emailSettings: {
            emailNotification: true,
            sendCopyToPersonalEmail: false,
            activityRelatesEmail: {
                youHaveNewNotifications: false,
                youAreSentADirectMessage: false,
                someoneAddsYouAsAsAConnection: true,
                uponNewOrder: false,
                newMembershipApproval: false,
                memberRegistration: true
            },
            updatesFromKeenthemes: {
                newsAboutKeenthemesProductsAndFeatureUpdates: false,
                tipsOnGettingMoreOutOfKeen: false,
                thingsYouMissedSindeYouLastLoggedIntoKeen: true,
                newsAboutMetronicOnPartnerProductsAndOtherServices: true,
                tipsOnMetronicBusinessProducts: true
            },
        },
        address: {
            addressLine: '1467  Griffin Street',
            city: 'Phoenix',
            state: 'Arizona',
            postCode: '85012',
        },
        socialNetworks: {
            linkedIn: 'https://linkedin.com/guest',
            facebook: 'https://facebook.com/guest',
            twitter: 'https://twitter.com/guest',
            instagram: 'https://instagram.com/guest',
        },
    },
];
UsersTable.tokens = [
    {
        id: 1,
        accessToken: 'access-token-' + Math.random(),
        refreshToken: 'access-token-' + Math.random(),
    },
];


/***/ }),

/***/ "RbrB":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/crud-table.module.ts ***!
  \******************************************************************/
/*! exports provided: CRUDTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRUDTableModule", function() { return CRUDTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "gBr1");
/* harmony import */ var _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/paginator/ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sort-icon/sort-icon.component */ "xGIk");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");








class CRUDTableModule {
}
CRUDTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CRUDTableModule });
CRUDTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CRUDTableModule_Factory(t) { return new (t || CRUDTableModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CRUDTableModule, { declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]], exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CRUDTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_6__["InlineSVGModule"]],
                exports: [_components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_paginator_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_3__["NgPagination"], _components_sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_5__["SortIconComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SBCs":
/*!***********************************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/ng-pagination/ng-pagination.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NgPaginationEllipsis, NgPaginationFirst, NgPaginationLast, NgPaginationNext, NgPaginationNumber, NgPaginationPrevious, NgPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationEllipsis", function() { return NgPaginationEllipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationFirst", function() { return NgPaginationFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationLast", function() { return NgPaginationLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNext", function() { return NgPaginationNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationNumber", function() { return NgPaginationNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPaginationPrevious", function() { return NgPaginationPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPagination", function() { return NgPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-pagination.config */ "51MP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
// tslint:disable:max-line-length component-class-suffix directive-selector directive-class-suffix component-selector no-host-metadata-property object-literal-key-quotes prefer-const
// fork of https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/pagination/pagination.ts




function NgPagination_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function NgPagination_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function NgPagination_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function NgPagination_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function NgPagination_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "...");
} }
function NgPagination_ng_template_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgPagination_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_template_10_span_1_Template, 2, 0, "span", 15);
} if (rf & 2) {
    const page_r17 = ctx.$implicit;
    const currentPage_r18 = ctx.currentPage;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", page_r17 === currentPage_r18);
} }
function NgPagination_a_12_ng_template_1_Template(rf, ctx) { }
const _c10 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function NgPagination_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_12_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r21.selectPage(1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_12_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r12.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r12.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r12.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r12.tplFirst == null ? null : ctx_r12.tplFirst.templateRef) || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r12.previousDisabled(), ctx_r12.page));
} }
function NgPagination_a_13_ng_template_1_Template(rf, ctx) { }
const _c13 = function (a0) { return { disabled: a0 }; };
function NgPagination_a_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_13_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r24.selectPage(ctx_r24.page - 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_13_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r13.previousDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r13.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r13.previousDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r13.tplPrevious == null ? null : ctx_r13.tplPrevious.templateRef) || _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c13, ctx_r13.previousDisabled()));
} }
function NgPagination_ng_container_14_a_1_ng_template_1_Template(rf, ctx) { }
const _c14 = function (a1) { return { disabled: true, currentPage: a1 }; };
function NgPagination_ng_container_14_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r27.page)("disabled", ctx_r27.isEllipsis(pageNumber_r26) || ctx_r27.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", pageNumber_r26 === ctx_r27.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r27.tplEllipsis == null ? null : ctx_r27.tplEllipsis.templateRef) || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c14, ctx_r27.page));
} }
function NgPagination_ng_container_14_a_2_ng_template_1_Template(rf, ctx) { }
const _c15 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function NgPagination_ng_container_14_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_ng_container_14_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r32.selectPage(pageNumber_r26); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_2_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pageNumber_r26 === ctx_r28.page)("disabled", ctx_r28.isEllipsis(pageNumber_r26) || ctx_r28.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r28.disabled ? "-1" : null)("aria-disabled", ctx_r28.disabled ? "true" : null)("aria-current", pageNumber_r26 === ctx_r28.page ? "page" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r28.tplNumber == null ? null : ctx_r28.tplNumber.templateRef) || _r10)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c15, ctx_r28.disabled, pageNumber_r26, ctx_r28.page));
} }
function NgPagination_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_ng_container_14_a_1_Template, 2, 9, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_container_14_a_2_Template, 2, 13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pageNumber_r26 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isEllipsis(pageNumber_r26));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.isEllipsis(pageNumber_r26));
} }
function NgPagination_a_15_ng_template_1_Template(rf, ctx) { }
function NgPagination_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_15_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r37.selectPage(ctx_r37.page + 1); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_15_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r15.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r15.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r15.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r15.tplNext == null ? null : ctx_r15.tplNext.templateRef) || _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r15.nextDisabled(), ctx_r15.page));
} }
function NgPagination_a_16_ng_template_1_Template(rf, ctx) { }
function NgPagination_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgPagination_a_16_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r40.selectPage(ctx_r40.pageCount); return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgPagination_a_16_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r16.nextDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r16.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r16.nextDisabled() ? "true" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", (ctx_r16.tplLast == null ? null : ctx_r16.tplLast.templateRef) || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c10, ctx_r16.nextDisabled(), ctx_r16.page));
} }
function getValueInRange(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt(`${value}`, 10);
}
/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
class NgPaginationEllipsis {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationEllipsis.ɵfac = function NgPaginationEllipsis_Factory(t) { return new (t || NgPaginationEllipsis)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationEllipsis.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationEllipsis, selectors: [["ng-template", "ngPaginationEllipsis", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationEllipsis, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationEllipsis]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
class NgPaginationFirst {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationFirst.ɵfac = function NgPaginationFirst_Factory(t) { return new (t || NgPaginationFirst)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationFirst.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationFirst, selectors: [["ng-template", "ngPaginationFirst", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationFirst, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationFirst]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
class NgPaginationLast {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationLast.ɵfac = function NgPaginationLast_Factory(t) { return new (t || NgPaginationLast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationLast.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationLast, selectors: [["ng-template", "ngPaginationLast", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationLast, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationLast]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
class NgPaginationNext {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNext.ɵfac = function NgPaginationNext_Factory(t) { return new (t || NgPaginationNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNext, selectors: [["ng-template", "ngPaginationNext", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNext]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
class NgPaginationNumber {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationNumber.ɵfac = function NgPaginationNumber_Factory(t) { return new (t || NgPaginationNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationNumber.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationNumber, selectors: [["ng-template", "ngPaginationNumber", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationNumber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationNumber]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
class NgPaginationPrevious {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NgPaginationPrevious.ɵfac = function NgPaginationPrevious_Factory(t) { return new (t || NgPaginationPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
NgPaginationPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgPaginationPrevious, selectors: [["ng-template", "ngPaginationPrevious", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPaginationPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[ngPaginationPrevious]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
class NgPagination {
    constructor(config) {
        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */
        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
    }
    hasPrevious() { return this.page > 1; }
    hasNext() { return this.page < this.pageCount; }
    nextDisabled() { return !this.hasNext() || this.disabled; }
    previousDisabled() { return !this.hasPrevious() || this.disabled; }
    selectPage(pageNumber) { this._updatePages(pageNumber); }
    ngOnChanges(changes) { this._updatePages(this.page); }
    isEllipsis(pageNumber) { return pageNumber === -1; }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    _applyEllipses(start, end) {
        if (this.ellipses) {
            if (start > 0) {
                // The first page will always be included. If the displayed range
                // starts after the third page, then add ellipsis. But if the range
                // starts on the third page, then add the second page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (start > 2) {
                    this.pages.unshift(-1);
                }
                else if (start === 2) {
                    this.pages.unshift(2);
                }
                this.pages.unshift(1);
            }
            if (end < this.pageCount) {
                // The last page will always be included. If the displayed range
                // ends before the third-last page, then add ellipsis. But if the range
                // ends on third-last page, then add the second-last page instead of
                // an ellipsis, because the ellipsis would only hide a single page.
                if (end < (this.pageCount - 2)) {
                    this.pages.push(-1);
                }
                else if (end === (this.pageCount - 2)) {
                    this.pages.push(this.pageCount - 1);
                }
                this.pages.push(this.pageCount);
            }
        }
    }
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    _applyRotation() {
        let start = 0;
        let end = this.pageCount;
        let leftOffset = Math.floor(this.maxSize / 2);
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        return [start, end];
    }
    /**
     * Paginates page numbers based on maxSize items per page.
     */
    _applyPagination() {
        let page = Math.ceil(this.page / this.maxSize) - 1;
        let start = page * this.maxSize;
        let end = start + this.maxSize;
        return [start, end];
    }
    _setPageInRange(newPageNo) {
        const prevPageNo = this.page;
        this.page = getValueInRange(newPageNo, this.pageCount, 1);
        if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
        }
    }
    _updatePages(newPage) {
        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
        if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
        }
        // fill-in model needed to render pages
        this.pages.length = 0;
        for (let i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
        }
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            let start = 0;
            let end = this.pageCount;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            else {
                [start, end] = this._applyPagination();
            }
            this.pages = this.pages.slice(start, end);
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
}
NgPagination.ɵfac = function NgPagination_Factory(t) { return new (t || NgPagination)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"])); };
NgPagination.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgPagination, selectors: [["ng-pagination"]], contentQueries: function NgPagination_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationEllipsis, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationFirst, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationLast, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNext, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationNumber, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPaginationPrevious, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplEllipsis = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplFirst = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplLast = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNext = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplNumber = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tplPrevious = _t.first);
    } }, hostAttrs: ["role", "navigation"], inputs: { disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", rotate: "rotate", collectionSize: "collectionSize", maxSize: "maxSize", page: "page", pageSize: "pageSize", size: "size" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_1 = goog.getMsg("First");
        i18n_0 = MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:@@ng.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_3 = goog.getMsg("Previous");
        i18n_2 = MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:@@ng.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_5 = goog.getMsg("Next");
        i18n_4 = MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:@@ng.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_7 = goog.getMsg("Last");
        i18n_6 = MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:@@ng.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } let i18n_8; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9 = goog.getMsg("First");
        i18n_8 = MSG_EXTERNAL_ng_pagination_first_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__9;
    }
    else {
        i18n_8 = $localize `:@@ng.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`;
    } let i18n_11; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__12 = goog.getMsg("Previous");
        i18n_11 = MSG_EXTERNAL_ng_pagination_previous_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__12;
    }
    else {
        i18n_11 = $localize `:@@ng.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
    } let i18n_16; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__17 = goog.getMsg("Next");
        i18n_16 = MSG_EXTERNAL_ng_pagination_next_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__17;
    }
    else {
        i18n_16 = $localize `:@@ng.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
    } let i18n_18; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__19 = goog.getMsg("Last");
        i18n_18 = MSG_EXTERNAL_ng_pagination_last_aria$$SRC_APP__METRONIC_SHARED_CRUD_TABLE_COMPONENTS_PAGINATOR_NG_PAGINATION_NG_PAGINATION_COMPONENT_TS__19;
    }
    else {
        i18n_18 = $localize `:@@ng.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`;
    } return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["aria-label", i18n_0, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", "href", "", 3, "disabled", "click", 4, "ngIf"], ["aria-label", i18n_2, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", "href", "", 3, "disabled", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["aria-label", i18n_4, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", 3, "disabled", "click", 4, "ngIf"], ["aria-label", i18n_6, "class", "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1", 3, "disabled", "click", 4, "ngIf"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-back", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-arrow-next", "icon-xs"], ["aria-hidden", "true", 1, "ki", "ki-bold-double-arrow-next", "icon-xs"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["aria-label", i18n_8, "href", "", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", i18n_11, "href", "", 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", "tabindex", "-1", "aria-disabled", "true", 3, "active", "disabled", 4, "ngIf"], ["class", "btn btn-icon btn-sm border-0 btn-light btn-hover-primary mr-2 my-1", 3, "active", "disabled", "click", 4, "ngIf"], ["tabindex", "-1", "aria-disabled", "true", 1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1"], [1, "btn", "btn-icon", "btn-sm", "border-0", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["aria-label", i18n_16, 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"], ["aria-label", i18n_18, 1, "btn", "btn-icon", "btn-sm", "btn-light", "btn-hover-primary", "mr-2", "my-1", 3, "click"]]; }, template: function NgPagination_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgPagination_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgPagination_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgPagination_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgPagination_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgPagination_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgPagination_a_12_Template, 2, 9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgPagination_a_13_Template, 2, 8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgPagination_ng_container_14_Template, 3, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NgPagination_a_15_Template, 2, 9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgPagination_a_16_Template, 2, 9, "a", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPagination, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ng-pagination',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: { 'role': 'navigation' },
                templateUrl: './ng-pagination.component.html',
            }]
    }], function () { return [{ type: _ng_pagination_config__WEBPACK_IMPORTED_MODULE_1__["NgPaginationConfig"] }]; }, { tplEllipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationEllipsis, { static: false }]
        }], tplFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationFirst, { static: false }]
        }], tplLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationLast, { static: false }]
        }], tplNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNext, { static: false }]
        }], tplNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationNumber, { static: false }]
        }], tplPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NgPaginationPrevious, { static: false }]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ellipses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collectionSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/i18n/vocabs/en */ "UXkn");
/* harmony import */ var _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/i18n/vocabs/ch */ "+hgU");
/* harmony import */ var _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/i18n/vocabs/es */ "z+X0");
/* harmony import */ var _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/i18n/vocabs/jp */ "QWUF");
/* harmony import */ var _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/i18n/vocabs/de */ "s3F9");
/* harmony import */ var _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/i18n/vocabs/fr */ "+H5S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/i18n/translation.service */ "e4g8");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.service */ "ONK0");
/* harmony import */ var _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_metronic/shared/crud-table */ "Br0f");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "EApP");

// language list














const _c0 = ["root", ""];
class AppComponent {
    constructor(translationService, splashScreenService, router, tableService, toastr) {
        this.translationService = translationService;
        this.splashScreenService = splashScreenService;
        this.router = router;
        this.tableService = tableService;
        this.toastr = toastr;
        this.subscriptions = [];
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register translations
        this.translationService.loadTranslations(_modules_i18n_vocabs_en__WEBPACK_IMPORTED_MODULE_1__["locale"], _modules_i18n_vocabs_ch__WEBPACK_IMPORTED_MODULE_2__["locale"], _modules_i18n_vocabs_es__WEBPACK_IMPORTED_MODULE_3__["locale"], _modules_i18n_vocabs_jp__WEBPACK_IMPORTED_MODULE_4__["locale"], _modules_i18n_vocabs_de__WEBPACK_IMPORTED_MODULE_5__["locale"], _modules_i18n_vocabs_fr__WEBPACK_IMPORTED_MODULE_6__["locale"]);
    }
    ngOnInit() {
        const routerSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]) {
                // clear filtration paginations and others
                this.tableService.setDefaults();
                // hide splash screen
                this.splashScreenService.hide();
                // scroll to top on every route change
                window.scrollTo(0, 0);
                // to display back the body content
                setTimeout(() => {
                    document.body.classList.add("page-loaded");
                }, 500);
            }
        });
        this.unsubscribe.push(routerSubscription);
        // OFFLINE/ONLINE CHECK
        this.onlineEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, "online");
        this.offlineEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, "offline");
        //ONLINE CHECK
        this.subscriptions.push(this.onlineEvent.subscribe((e) => {
            this.toastr.success("You are now back online", "Internet Status");
        }));
        //OFFLINE CHECK
        this.subscriptions.push(this.offlineEvent.subscribe((e) => {
            this.toastr.error("You are offline. Please Check your Internet Connection", "Internet Status");
        }));
    }
    ngOnDestroy() {
        this.unsubscribe.forEach((sb) => sb.unsubscribe());
        // UNSUBSCRIBE FROM OBSERVABLE
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__["SplashScreenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_11__["TableExtendedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body", "root", ""]], attrs: _c0, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBQTtFQUNBLFNBQUE7QUFDRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: "body[root]",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss"],
            }]
    }], function () { return [{ type: _modules_i18n_translation_service__WEBPACK_IMPORTED_MODULE_9__["TranslationService"] }, { type: _metronic_partials_layout_splash_screen_splash_screen_service__WEBPACK_IMPORTED_MODULE_10__["SplashScreenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_11__["TableExtendedService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "UXkn":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/en.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// USA
const locale = {
    lang: 'en',
    data: {
        TRANSLATOR: {
            SELECT: 'Select your language',
        },
        MENU: {
            NEW: 'new',
            ACTIONS: 'Actions',
            CREATE_POST: 'Create New Post',
            PAGES: 'Pages',
            FEATURES: 'Features',
            APPS: 'Apps',
            DASHBOARD: 'Dashboard',
        },
        AUTH: {
            GENERAL: {
                OR: 'Or',
                SUBMIT_BUTTON: 'Submit',
                NO_ACCOUNT: 'Don\'t have an account?',
                SIGNUP_BUTTON: 'Sign Up',
                FORGOT_BUTTON: 'Forgot Password',
                BACK_BUTTON: 'Back',
                PRIVACY: 'Privacy',
                LEGAL: 'Legal',
                CONTACT: 'Contact',
            },
            LOGIN: {
                TITLE: 'Login Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Username'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "Vh1Q":
/*!*******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/table.model.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "WWIl":
/*!**********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/grouping.model.ts ***!
  \**********************************************************************/
/*! exports provided: GroupingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupingState", function() { return GroupingState; });
class GroupingState {
    constructor() {
        this.selectedRowIds = new Set();
        this.itemIds = [];
    }
    checkAreAllRowsSelected() {
        if (this.itemIds.length === 0) {
            return false;
        }
        return this.selectedRowIds.size === this.itemIds.length;
    }
    selectRow(id) {
        if (this.selectedRowIds.has(id)) {
            this.selectedRowIds.delete(id);
        }
        else {
            this.selectedRowIds.add(id);
        }
        return this;
    }
    // tslint:disable-next-line:variable-name
    clearRows(_itemIds) {
        this.itemIds = _itemIds;
        this.selectedRowIds = new Set();
        return this;
    }
    isRowSelected(id) {
        return this.selectedRowIds.has(id);
    }
    selectAllRows() {
        const areAllSelected = this.itemIds.length === this.selectedRowIds.size;
        if (areAllSelected) {
            this.selectedRowIds = new Set();
        }
        else {
            this.selectedRowIds = new Set();
            this.itemIds.forEach(id => this.selectedRowIds.add(id));
        }
        return this;
    }
    getSelectedRows() {
        return Array.from(this.selectedRowIds);
    }
    getSelectedRowsCount() {
        return this.selectedRowIds.size;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ "8mIn");
/* harmony import */ var _core_interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/interceptors/http-interceptor */ "6cNE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "wzUX");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-clipboard */ "IbkX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/auth/_services/auth.service */ "+BVi");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-highlightjs */ "dJsq");
/* harmony import */ var _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_metronic/partials/layout/splash-screen/splash-screen.module */ "QnJH");
/* harmony import */ var _fake_fake_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_fake/fake-api.service */ "G28U");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularx-social-login */ "ybVy");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-apexcharts */ "Tczp");
/* harmony import */ var _core_services_video_service_video_processing_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/services/video-service/video-processing.service */ "ZFxB");
/* harmony import */ var angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-disable-browser-back-button */ "6tbR");


































function appInitializer(authService) {
    return () => {
        return new Promise((resolve) => {
            authService.getUserByToken().subscribe().add(resolve);
        });
    };
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _core_services_video_service_video_processing_service__WEBPACK_IMPORTED_MODULE_24__["VideoProcessingService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
            useFactory: appInitializer,
            multi: true,
            deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
        },
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__["HIGHLIGHT_OPTIONS"],
            useValue: {
                coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                languages: {
                    xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "highlight-js-lib-languages-xml").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7)),
                    typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "highlight-js-lib-languages-typescript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7)),
                    scss: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scss */ "highlight-js-lib-languages-scss").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scss */ "YROV", 7)),
                    json: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-json */ "highlight-js-lib-languages-json").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
                }
            },
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_1__["Interceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"],
            multi: true
        },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_21__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_21__["FacebookLoginProvider"]('132795392262404')
                    }
                ]
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__["SplashScreenModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__["HighlightModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_21__["SocialLoginModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__["NgApexchartsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_25__["BackButtonDisableModule"].forRoot({
                preserveScrollPosition: true
            }),
            src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].isMockEnabled
                ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_fake_fake_api_service__WEBPACK_IMPORTED_MODULE_17__["FakeAPIService"], {
                    passThruUnknownUrl: true,
                    dataEncapsulation: false,
                })
                : [],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot({ positionClass: 'toast-top-right' }),
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__["InlineSVGModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__["SplashScreenModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__["HighlightModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_21__["SocialLoginModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__["NgApexchartsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_25__["BackButtonDisableModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__["InlineSVGModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _metronic_partials_layout_splash_screen_splash_screen_module__WEBPACK_IMPORTED_MODULE_16__["SplashScreenModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__["HighlightModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_7__["ClipboardModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_21__["SocialLoginModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_23__["NgApexchartsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                    angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_25__["BackButtonDisableModule"].forRoot({
                        preserveScrollPosition: true
                    }),
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].isMockEnabled
                        ? angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["HttpClientInMemoryWebApiModule"].forRoot(_fake_fake_api_service__WEBPACK_IMPORTED_MODULE_17__["FakeAPIService"], {
                            passThruUnknownUrl: true,
                            dataEncapsulation: false,
                        })
                        : [],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot({ positionClass: 'toast-top-right' }),
                    ng_inline_svg__WEBPACK_IMPORTED_MODULE_9__["InlineSVGModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                ],
                providers: [
                    _core_services_video_service_video_processing_service__WEBPACK_IMPORTED_MODULE_24__["VideoProcessingService"],
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                        useFactory: appInitializer,
                        multi: true,
                        deps: [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]],
                    },
                    {
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__["HIGHLIGHT_OPTIONS"],
                        useValue: {
                            coreLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js-lib-core */ "highlight-js-lib-core").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
                            languages: {
                                xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "highlight-js-lib-languages-xml").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7)),
                                typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "highlight-js-lib-languages-typescript").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7)),
                                scss: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-scss */ "highlight-js-lib-languages-scss").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/scss */ "YROV", 7)),
                                json: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-json */ "highlight-js-lib-languages-json").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/json */ "WtIr", 7))
                            }
                        },
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_http_interceptor__WEBPACK_IMPORTED_MODULE_1__["Interceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"],
                        multi: true
                    },
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_21__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_21__["FacebookLoginProvider"]('132795392262404')
                                }
                            ]
                        },
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZFxB":
/*!*************************************************************************!*\
  !*** ./src/app/core/services/video-service/video-processing.service.ts ***!
  \*************************************************************************/
/*! exports provided: VideoProcessingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProcessingService", function() { return VideoProcessingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



class VideoProcessingService {
    constructor(document) {
        this.document = document;
        this.rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
    generateThumbnail(videoFile) {
        const video = this.document.createElement('video');
        const canvas = this.document.createElement('canvas');
        const context = canvas.getContext('2d');
        return new Promise((resolve, reject) => {
            canvas.addEventListener('error', reject);
            video.addEventListener('error', reject);
            video.addEventListener('canplay', event => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
                resolve(canvas.toDataURL());
            });
            if (videoFile.type) {
                video.setAttribute('type', videoFile.type);
            }
            video.preload = 'auto';
            video.src = window.URL.createObjectURL(videoFile);
            video.load();
        });
    }
    dataURLtoFile(dataurl, filename) {
        return new Promise((resolve, reject) => {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            resolve(new File([u8arr], filename, { type: 'image/jpeg' }));
        });
    }
    get_average_rgb(img) {
        return new Promise((resolve, reject) => {
            var context = document.createElement('canvas').getContext('2d');
            if (typeof img == 'string') {
                var src = img;
                img = new Image;
                img.setAttribute('crossOrigin', '');
                img.src = src;
            }
            context.imageSmoothingEnabled = true;
            context.drawImage(img, 0, 0, 100, 100);
            let imageData = context.getImageData(0, 0, 1, 1).data.slice(0, 3);
            resolve(imageData);
        });
    }
    getAverageRGB(imgEl) {
        return new Promise((resolve, reject) => {
            var blockSize = 5; // only visit every 5 pixels
            let defaultRGB = { r: 0, g: 0, b: 0 }; // for non-supporting envs
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            let data;
            let width;
            let height;
            let i = -4;
            let length;
            let rgb = { r: 0, g: 0, b: 0 };
            let count = 0;
            if (typeof imgEl == 'string') {
                var src = imgEl;
                imgEl = new Image;
                imgEl.setAttribute('crossOrigin', '');
                imgEl.src = src;
            }
            if (!context) {
                return defaultRGB;
            }
            height = canvas.height;
            width = canvas.width;
            context.imageSmoothingEnabled = true;
            context.drawImage(imgEl, 0, 0, 20, 12);
            try {
                data = context.getImageData(0, 0, width, height);
            }
            catch (e) {
                /* security error, img on diff domain */
                return defaultRGB;
            }
            length = data.data.length;
            while ((i += blockSize * 4) < length) {
                ++count;
                rgb.r += data.data[i];
                rgb.g += data.data[i + 1];
                rgb.b += data.data[i + 2];
            }
            // ~~ used to floor values
            rgb.r = ~~(rgb.r / count);
            rgb.g = ~~(rgb.g / count);
            rgb.b = ~~(rgb.b / count);
            resolve(rgb);
        });
    }
}
VideoProcessingService.ɵfac = function VideoProcessingService_Factory(t) { return new (t || VideoProcessingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
VideoProcessingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VideoProcessingService, factory: VideoProcessingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoProcessingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "a+Vh":
/*!*************************************!*\
  !*** ./src/app/core/utils/index.ts ***!
  \*************************************/
/*! exports provided: StorageItem, getItem, setItem, removeItem, clear, forceClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.utils */ "0BOj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageItem", function() { return _local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["StorageItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return _local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return _local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["setItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return _local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["removeItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return _local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceClear", function() { return _local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["forceClear"]; });




/***/ }),

/***/ "aENq":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/services/table.service.ts ***!
  \***********************************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/paginator.model */ "fksT");
/* harmony import */ var _models_sort_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/sort.model */ "fr3w");
/* harmony import */ var _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/grouping.model */ "WWIl");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "AytR");






const DEFAULT_STATE = {
    filter: {},
    paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"](),
    sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_3__["SortState"](),
    searchTerm: '',
    grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__["GroupingState"](),
    entityId: undefined
};
class TableService {
    constructor(http) {
        // Private fields
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this._isFirstLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this._tableState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](DEFAULT_STATE);
        this._errorMessage = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this._subscriptions = [];
        // API URL has to be overrided
        this.API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/endpoint`;
        this.http = http;
    }
    // Getters
    get items$() {
        return this._items$.asObservable();
    }
    get isLoading$() {
        return this._isLoading$.asObservable();
    }
    get isFirstLoading$() {
        return this._isFirstLoading$.asObservable();
    }
    get errorMessage$() {
        return this._errorMessage.asObservable();
    }
    get subscriptions() {
        return this._subscriptions;
    }
    // State getters
    get paginator() {
        return this._tableState$.value.paginator;
    }
    get filter() {
        return this._tableState$.value.filter;
    }
    get sorting() {
        return this._tableState$.value.sorting;
    }
    get searchTerm() {
        return this._tableState$.value.searchTerm;
    }
    get grouping() {
        return this._tableState$.value.grouping;
    }
    // CREATE
    // server should return the object with ID
    create(item) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.post(this.API_URL, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('CREATE ITEM', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: undefined });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // READ (Returning filtered list of entities)
    find(tableState) {
        const url = this.API_URL + '/find';
        this._errorMessage.next('');
        return this.http.post(url, tableState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('FIND ITEMS', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ items: [], total: 0 });
        }));
    }
    getItemById(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('GET ITEM BY IT', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({ id: undefined });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE
    update(item) {
        const url = `${this.API_URL}/${item.id}`;
        this._isLoading$.next(true);
        this._errorMessage.next('');
        return this.http.put(url, item).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('UPDATE ITEM', item, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(item);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // UPDATE Status
    updateStatusForItems(ids, status) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const body = { ids, status };
        const url = this.API_URL + '/updateStatus';
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('UPDATE STATUS FOR SELECTED ITEMS', ids, status, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // DELETE
    delete(id) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = `${this.API_URL}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE ITEM', id, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    // delete list of items
    deleteItems(ids = []) {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const url = this.API_URL + '/deleteItems';
        const body = { ids };
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            this._errorMessage.next(err);
            console.error('DELETE SELECTED ITEMS', ids, err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => this._isLoading$.next(false)));
    }
    fetch() {
        this._isLoading$.next(true);
        this._errorMessage.next('');
        const request = this.find(this._tableState$.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            this._items$.next(res.items);
            this.patchStateWithoutFetch({
                paginator: this._tableState$.value.paginator.recalculatePaginator(res.total),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((err) => {
            this._errorMessage.next(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
                items: [],
                total: 0
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this._isLoading$.next(false);
            const itemIds = this._items$.value.map((el) => {
                const item = el;
                return item.id;
            });
            this.patchStateWithoutFetch({
                grouping: this._tableState$.value.grouping.clearRows(itemIds),
            });
        }))
            .subscribe();
        this._subscriptions.push(request);
    }
    setDefaults() {
        this.patchStateWithoutFetch({ filter: {} });
        this.patchStateWithoutFetch({ sorting: new _models_sort_model__WEBPACK_IMPORTED_MODULE_3__["SortState"]() });
        this.patchStateWithoutFetch({ grouping: new _models_grouping_model__WEBPACK_IMPORTED_MODULE_4__["GroupingState"]() });
        this.patchStateWithoutFetch({ searchTerm: '' });
        this.patchStateWithoutFetch({
            paginator: new _models_paginator_model__WEBPACK_IMPORTED_MODULE_2__["PaginatorState"]()
        });
        this._isFirstLoading$.next(true);
        this._isLoading$.next(true);
        this._tableState$.next(DEFAULT_STATE);
        this._errorMessage.next('');
    }
    // Base Methods
    patchState(patch) {
        this.patchStateWithoutFetch(patch);
        this.fetch();
    }
    patchStateWithoutFetch(patch) {
        const newState = Object.assign(this._tableState$.value, patch);
        this._tableState$.next(newState);
    }
}


/***/ }),

/***/ "dkQB":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony import */ var _core_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/utils/local-storage.utils */ "0BOj");
var _a;

const constants = {
    clubApiUrl: ((_a = Object(_core_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["getItem"])(_core_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_0__["StorageItem"].SelectedClub)) === null || _a === void 0 ? void 0 : _a.baseURL) || "",
    api_url: 'https://socialapi.solissol.com/api/v1/en',
    base_url: 'https://graph.facebook.com/',
    app_id: '132795392262404',
    app_secret: '3485268dc803c40732f47998c447e4b0'
};
// live api url = 'https://socialapi.solissol.com/api/v1/en'
// local api irl = 'http://192.168.1.106:3005'
//Local Development Facebook App Credentials
//app_id = 844857613045687
//app_secret = 2159f936003b2d66dfa879da95a60da5
//Live FB App Credentials
// app_id = 132795392262404
//app_secret = 3485268dc803c40732f47998c447e4b0


/***/ }),

/***/ "e4g8":
/*!*****************************************************!*\
  !*** ./src/app/modules/i18n/translation.service.ts ***!
  \*****************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
// Localization is based on '@ngx-translate/core';
// Please be familiar with official documentations first => https://github.com/ngx-translate/core



const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
class TranslationService {
    constructor(translate) {
        this.translate = translate;
        // Private properties
        this.langIds = [];
        // add new langIds to the list
        this.translate.addLangs(['en']);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
    }
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    }
    setLanguage(lang) {
        if (lang) {
            this.translate.use(this.translate.getDefaultLang());
            this.translate.use(lang);
            localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
        }
    }
    /**
     * Returns selected language
     */
    getSelectedLanguage() {
        return (localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) ||
            this.translate.getDefaultLang());
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "fksT":
/*!***********************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/paginator.model.ts ***!
  \***********************************************************************/
/*! exports provided: PageSizes, PaginatorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSizes", function() { return PageSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorState", function() { return PaginatorState; });
const PageSizes = [3, 5, 10, 15, 50, 100];
class PaginatorState {
    constructor() {
        this.page = 1;
        this.pageSize = PageSizes[2];
        this.total = 0;
        this.pageSizes = [];
    }
    recalculatePaginator(total) {
        this.total = total;
        return this;
    }
}


/***/ }),

/***/ "fr3w":
/*!******************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/models/sort.model.ts ***!
  \******************************************************************/
/*! exports provided: SortState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortState", function() { return SortState; });
class SortState {
    constructor() {
        this.column = 'id'; // Id by default
        this.direction = 'asc'; // asc by default;
    }
}


/***/ }),

/***/ "gBr1":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/paginator/paginator.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/paginator.model */ "fksT");
/* harmony import */ var _ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-pagination/ng-pagination.component */ "SBCs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");






function PaginatorComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginatorComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ps_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ps_r2, " ");
} }
class PaginatorComponent {
    constructor() {
        this.paginate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizes = _models_paginator_model__WEBPACK_IMPORTED_MODULE_1__["PageSizes"];
    }
    ngOnInit() {
    }
    pageChange(num) {
        this.paginator.page = num;
        this.paginate.emit(this.paginator);
    }
    sizeChange() {
        this.paginator.pageSize = +this.paginator.pageSize;
        this.paginator.page = 1;
        this.paginate.emit(this.paginator);
    }
}
PaginatorComponent.ɵfac = function PaginatorComponent_Factory(t) { return new (t || PaginatorComponent)(); };
PaginatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginatorComponent, selectors: [["app-paginator"]], inputs: { paginator: "paginator", isLoading: "isLoading" }, outputs: { paginate: "paginate" }, decls: 8, vars: 12, consts: [[1, "d-flex", "flex-wrap", "py-2", "mr-3"], [3, "collectionSize", "page", "maxSize", "rotate", "boundaryLinks", "pageSize", "pageChange"], [1, "d-flex", "align-items-center", "py-3"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "form-control", "form-control-sm", "font-weight-bold", "mr-4", "border-0", "bg-light", "false", 2, "width", "75px", 3, "ngModel", "ngModelChange", "change"], ["class", "btn", 4, "ngFor", "ngForOf"], [1, "react-bootstrap-table-pagin", "ation-total"], [1, "d-flex", "align-items-center"], [1, "mr-2", "text-muted"], [1, "spinner", "spinner-primary", "mr-10"], [1, "btn"]], template: function PaginatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-pagination", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PaginatorComponent_Template_ng_pagination_pageChange_1_listener($event) { return ctx.paginator.page = $event; })("pageChange", function PaginatorComponent_Template_ng_pagination_pageChange_1_listener($event) { return ctx.pageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginatorComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginatorComponent_Template_select_ngModelChange_4_listener($event) { return ctx.paginator.pageSize = $event; })("change", function PaginatorComponent_Template_select_change_4_listener() { return ctx.sizeChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginatorComponent_option_5_Template, 2, 1, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.paginator.total)("page", ctx.paginator.page)("maxSize", 4)("rotate", true)("boundaryLinks", true)("pageSize", ctx.paginator.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paginator.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pageSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("\u00A0Showing rows ", ctx.paginator.page, " to\u00A0", ctx.paginator.pageSize, " of\u00A0", ctx.paginator.total, "");
    } }, directives: [_ng_pagination_ng_pagination_component__WEBPACK_IMPORTED_MODULE_2__["NgPagination"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paginator',
                templateUrl: './paginator.component.html',
                styleUrls: ['./paginator.component.scss']
            }]
    }], function () { return []; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ratC":
/*!******************************************************!*\
  !*** ./src/app/modules/auth/_services/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "7dP1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");





class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        let token = this.authService.appToken.access_token;
        if (token && token.length > 0) {
            try {
                let data = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
                if (data.id) {
                    return true;
                }
                else {
                    this.router.navigateByUrl('/login');
                    return false;
                }
            }
            catch (error) {
                this.router.navigateByUrl('/login');
                return false;
            }
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["MainAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["MainAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "s3F9":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/de.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Germany
const locale = {
    lang: 'de',
    data: {
        TRANSLATOR: {
            SELECT: 'Wähle deine Sprache',
        },
        MENU: {
            NEW: 'Neu',
            ACTIONS: 'Aktionen',
            CREATE_POST: 'Erstellen Sie einen neuen Beitrag',
            PAGES: 'Pages',
            FEATURES: 'Eigenschaften',
            APPS: 'Apps',
            DASHBOARD: 'Instrumententafel'
        },
        AUTH: {
            GENERAL: {
                OR: 'Oder',
                SUBMIT_BUTTON: 'einreichen',
                NO_ACCOUNT: 'Hast du kein Konto?',
                SIGNUP_BUTTON: 'Anmelden',
                FORGOT_BUTTON: 'Passwort vergessen',
                BACK_BUTTON: 'Zurück',
                PRIVACY: 'Privatsphäre',
                LEGAL: 'Legal',
                CONTACT: 'Kontakt',
            },
            LOGIN: {
                TITLE: 'Create Account',
                BUTTON: 'Sign In',
            },
            FORGOT: {
                TITLE: 'Forgotten Password?',
                DESC: 'Enter your email to reset your password',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Nutzername'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "tVj7":
/*!************************************************!*\
  !*** ./src/app/core/services/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-api.service */ "Ggq3");
/* harmony import */ var _club_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./club.service */ "wDSB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class UsersService extends _base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"] {
    constructor(clubService, http) {
        super(http);
        this.clubService = clubService;
        this.http = http;
    }
    getAllUsers(offset, limit) {
        limit = parseInt(limit) < 1 ? 10 : limit;
        offset = parseInt(offset) < 0 ? 0 : offset;
        return this.get(`/profile/getAllUsers?offset=${offset}&limit=${limit}`);
    }
    getUserById(id) {
        var _a;
        let collection = ((_a = this.clubService.selectedClub) === null || _a === void 0 ? void 0 : _a.pickerClub) ? 'pickerClubs' : 'club';
        return this.get(`/profile/getUserById/${id}?collection=${collection}`);
    }
    addUser(user) {
        return this.post('/profile/addUser', user);
    }
    updateUser(user) {
        return this.post('/profile/updateUser', user);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_club_service__WEBPACK_IMPORTED_MODULE_2__["ClubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _club_service__WEBPACK_IMPORTED_MODULE_2__["ClubService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/auth/_services/auth.guard */ "ratC");





const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("default~modules-auth-auth-module~pages-layout-module"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then((m) => m.AuthModule),
    },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-errors-errors-module */ "modules-errors-errors-module").then(__webpack_require__.bind(null, /*! ./modules/errors/errors.module */ "o1DB")).then((m) => m.ErrorsModule),
    },
    {
        path: 'pages',
        canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | pages-layout-module */[__webpack_require__.e("default~modules-auth-auth-module~pages-layout-module"), __webpack_require__.e("pages-layout-module")]).then(__webpack_require__.bind(null, /*! ./pages/layout.module */ "P0uM")).then((m) => m.LayoutModule),
    },
    { path: '**',
        redirectTo: 'login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wDSB":
/*!***********************************************!*\
  !*** ./src/app/core/services/club.service.ts ***!
  \***********************************************/
/*! exports provided: ClubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubService", function() { return ClubService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/local-storage.utils */ "0BOj");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-api.service */ "Ggq3");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "a+Vh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");








class ClubService extends _base_api_service__WEBPACK_IMPORTED_MODULE_4__["BaseApiService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this._SelectedClub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getItem"])(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_1__["StorageItem"].SelectedClub));
        this.SelectedClub$ = this._SelectedClub$.asObservable();
        this.limit = 20;
    }
    get selectedClub() {
        return this._SelectedClub$.getValue();
    }
    set selectedClub(club) {
        Object(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_1__["setItem"])(_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_1__["StorageItem"].SelectedClub, club);
        this._SelectedClub$.next(club);
    }
    getAllClubs(page) {
        // limit = parseInt(limit) < 1 ? 10 : limit;
        // offset = parseInt(offset) < 0 ? 0 : offset;
        const param = {
            limit: this.limit,
            offset: page ? this.limit * page : 0
            // userStatus: type
        };
        return this.get('/club/getAllClubs', param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    getDividisClubs(page) {
        const param = {
            limit: this.limit,
            offset: page ? this.limit * page : 0
            // userStatus: type
        };
        return this.clubApiGet('/club/getAllClubs', param);
    }
    //   getAllUsersForPanel( page: number, type?:string ): Observable<ApiResponse<user>> {
    //     const param:any = {
    //         limit: this.limit, 
    //         offset: page ? this.limit * page : 0,
    //         userStatus: type
    //     }
    //     return this.clubApiGet('/profile/getUsersForPanel', param)
    // }
    getClubById(clubID) {
        return this.get(`/club/getClubByID/${clubID}`);
    }
    addClub(payload) {
        return this.post('/club/addClub', payload);
    }
    updateClub(club) {
        return this.post('/club/updateClub', club);
    }
    deleteClub(clubID) {
        return this.get(`/club/deleteClub/${clubID}`);
    }
    getClubGroups(offset, limit) {
        limit = parseInt(limit) < 1 ? 10 : limit;
        offset = parseInt(offset) < 0 ? 0 : offset;
        return this.clubApiGet(`/groups/getAllGroups?offset=${offset}&limit=${limit}`);
    }
    getClubEvents(offset, limit) {
        limit = parseInt(limit) < 1 ? 10 : limit;
        offset = parseInt(offset) < 0 ? 0 : offset;
        return this.clubApiGet(`/event/getAllEvents?offset=${offset}&limit=${limit}`);
    }
    getLiveStreamBit() {
        return this.clubApiGet(`/firebase-migration-functions/getLiveStreamValue`);
    }
    changeLiveStreamBit(liveStreamBit) {
        return this.clubApiGet(`/firebase-migration-functions/changeLiveStreamBit/${liveStreamBit}`);
    }
    getUserClubProfile(userId) {
        return this.clubApiGet(`/profile/getProfileById/${userId}`);
    }
    searchClubByName(clubName, offset, limit) {
        return this.get(`/club/searchClub/${clubName}?offset=${offset}&limit=${limit}`);
    }
    searchClubByNameForPicker(clubName, offset, limit) {
        return this.clubApiGet(`/club/searchClubByName/${clubName}?offset=${offset}&limit=${limit}`);
    }
}
ClubService.ɵfac = function ClubService_Factory(t) { return new (t || ClubService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
ClubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClubService, factory: ClubService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ClubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xGIk":
/*!*****************************************************************************************!*\
  !*** ./src/app/_metronic/shared/crud-table/components/sort-icon/sort-icon.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-inline-svg */ "W79Q");




function SortIconComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Up-2.svg");
} }
function SortIconComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Navigation/Down-2.svg");
} }
function SortIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SortIconComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "asc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.activeDirection === "desc");
} }
function SortIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inlineSVG", "./assets/media/svg/icons/Shopping/Sort1.svg");
} }
class SortIconComponent {
    constructor(el) {
        this.el = el;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
    }
    ngOnChanges() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        // Load css classes
        parent.classList.add('sortable');
        parent.classList.remove('sortable-active');
        if (this.column === this.activeColumn) {
            parent.classList.add('sortable-active');
        }
        // load icons
        this.isActive = this.column === this.activeColumn;
    }
    ngOnInit() {
        const parent = this.el.nativeElement.parentElement;
        if (!parent) {
            return;
        }
        parent.addEventListener('click', () => {
            this.sort.emit(this.column);
        });
    }
}
SortIconComponent.ɵfac = function SortIconComponent_Factory(t) { return new (t || SortIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SortIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortIconComponent, selectors: [["app-sort-icon"]], inputs: { column: "column", activeColumn: "activeColumn", activeDirection: "activeDirection" }, outputs: { sort: "sort" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", 3, "inlineSVG"], ["cacheSVG", "true", 1, "svg-icon", "svg-icon-sm", "svg-icon-primary", "ml-1", "svg-icon-sort", 3, "inlineSVG"]], template: function SortIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SortIconComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortIconComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__["InlineSVGDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LWljb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sort-icon',
                templateUrl: './sort-icon.component.html',
                styleUrls: ['./sort-icon.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "z+X0":
/*!*******************************************!*\
  !*** ./src/app/modules/i18n/vocabs/es.ts ***!
  \*******************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
// Spain
const locale = {
    lang: 'es',
    data: {
        TRANSLATOR: {
            SELECT: 'Elige tu idioma',
        },
        MENU: {
            NEW: 'nuevo',
            ACTIONS: 'Comportamiento',
            CREATE_POST: 'Crear nueva publicación',
            PAGES: 'Pages',
            FEATURES: 'Caracteristicas',
            APPS: 'Aplicaciones',
            DASHBOARD: 'Tablero'
        },
        AUTH: {
            GENERAL: {
                OR: 'O',
                SUBMIT_BUTTON: 'Enviar',
                NO_ACCOUNT: 'No tienes una cuenta?',
                SIGNUP_BUTTON: 'Regístrate',
                FORGOT_BUTTON: 'Se te olvidó tu contraseña',
                BACK_BUTTON: 'Espalda',
                PRIVACY: 'Intimidad',
                LEGAL: 'Legal',
                CONTACT: 'Contacto',
            },
            LOGIN: {
                TITLE: 'Crear una cuenta',
                BUTTON: 'Registrarse',
            },
            FORGOT: {
                TITLE: 'Contraseña olvidada?',
                DESC: 'Ingrese su correo electrónico para restablecer su contraseña',
                SUCCESS: 'Your account has been successfully reset.'
            },
            REGISTER: {
                TITLE: 'Sign Up',
                DESC: 'Enter your details to create your account',
                SUCCESS: 'Your account has been successfuly registered.'
            },
            INPUT: {
                EMAIL: 'Email',
                FULLNAME: 'Fullname',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                USERNAME: 'Usuario'
            },
            VALIDATION: {
                INVALID: '{{name}} is not valid',
                REQUIRED: '{{name}} is required',
                MIN_LENGTH: '{{name}} minimum length is {{min}}',
                AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
                NOT_FOUND: 'The requested {{name}} is not found',
                INVALID_LOGIN: 'The login detail is incorrect',
                REQUIRED_FIELD: 'Required field',
                MIN_LENGTH_FIELD: 'Minimum field length:',
                MAX_LENGTH_FIELD: 'Maximum field length:',
                INVALID_FIELD: 'Field is not valid',
            }
        },
        ECOMMERCE: {
            COMMON: {
                SELECTED_RECORDS_COUNT: 'Selected records count: ',
                ALL: 'All',
                SUSPENDED: 'Suspended',
                ACTIVE: 'Active',
                FILTER: 'Filter',
                BY_STATUS: 'by Status',
                BY_TYPE: 'by Type',
                BUSINESS: 'Business',
                INDIVIDUAL: 'Individual',
                SEARCH: 'Search',
                IN_ALL_FIELDS: 'in all fields'
            },
            ECOMMERCE: 'eCommerce',
            CUSTOMERS: {
                CUSTOMERS: 'Customers',
                CUSTOMERS_LIST: 'Customers list',
                NEW_CUSTOMER: 'New Customer',
                DELETE_CUSTOMER_SIMPLE: {
                    TITLE: 'Customer Delete',
                    DESCRIPTION: 'Are you sure to permanently delete this customer?',
                    WAIT_DESCRIPTION: 'Customer is deleting...',
                    MESSAGE: 'Customer has been deleted'
                },
                DELETE_CUSTOMER_MULTY: {
                    TITLE: 'Customers Delete',
                    DESCRIPTION: 'Are you sure to permanently delete selected customers?',
                    WAIT_DESCRIPTION: 'Customers are deleting...',
                    MESSAGE: 'Selected customers have been deleted'
                },
                UPDATE_STATUS: {
                    TITLE: 'Status has been updated for selected customers',
                    MESSAGE: 'Selected customers status have successfully been updated'
                },
                EDIT: {
                    UPDATE_MESSAGE: 'Customer has been updated',
                    ADD_MESSAGE: 'Customer has been created'
                }
            }
        }
    }
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.bcd29b30d892a9ba2cb8.js.map