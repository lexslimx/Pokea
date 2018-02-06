webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" routerLink=\"/welcome\" routerLinkActive=\"active\">pokea</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" routerLink=\"/payment\" routerLinkActive=\"active\">Payments\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\">\r\n                    Account\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                    <a class=\"dropdown-item\" href=\"#\">Deposit</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Send</a>\r\n                    <a class=\"dropdown-item\" href=\"#\">Receive</a>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"#\">Contacts</a>\r\n\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"#\">Help</a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n    \r\n            <button type=\"login\" value=\"Login\" routerLink=\"/login\" routerLinkActive=\"active\" class=\"btn\">Login</button>\r\n\r\n           <button type=\"button\" routerLink=\"/cards\" routerLinkActive=\"active\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Profile</button>\r\n        </form>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n<!-- Routed views go here -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_credit_card_credit_card_component__ = __webpack_require__("../../../../../src/app/components/credit-card/credit-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_payment_payment_component__ = __webpack_require__("../../../../../src/app/components/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_payment_newPayment_component__ = __webpack_require__("../../../../../src/app/components/payment/newPayment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_registration_registration_component__ = __webpack_require__("../../../../../src/app/components/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_rlogin_rlogin_component__ = __webpack_require__("../../../../../src/app/components/rlogin/rlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_7__components_account_account_component__["a" /* AccountComponent */] },
    { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_8__components_credit_card_credit_card_component__["a" /* CreditCardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_rlogin_rlogin_component__["a" /* RloginComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_15__components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_10__components_payment_payment_component__["a" /* PaymentComponent */] },
    { path: 'newPayment', component: __WEBPACK_IMPORTED_MODULE_11__components_payment_newPayment_component__["a" /* NewPaymentComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_credit_card_credit_card_component__["a" /* CreditCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_payment_payment_component__["a" /* PaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_rlogin_rlogin_component__["a" /* RloginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_payment_newPayment_component__["a" /* NewPaymentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only      
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Sign In</div>\r\n        <div style=\"float:right; font-size: 80%; position: relative; top:-10px\">\r\n          <a href=\"#\">Forgot password?</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div style=\"padding-top:30px\" class=\"panel-body\">\r\n\r\n        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n\r\n        <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\r\n\r\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"glyphicon glyphicon-user\"></i>\r\n            </span>\r\n            <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"username or email\">\r\n          </div>\r\n\r\n          <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n            <span class=\"input-group-addon\">\r\n              <i class=\"glyphicon glyphicon-lock\"></i>\r\n            </span>\r\n            <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\">\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input id=\"login-remember\" type=\"checkbox\" name=\"remember\" value=\"1\"> Remember me\r\n              </label>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div style=\"margin-top:10px\" class=\"form-group\">\r\n            <!-- Button -->\r\n\r\n            <div class=\"col-sm-12 controls\">\r\n              <a id=\"btn-login\" href=\"#\" class=\"btn btn-success\">Login </a>\r\n              <a id=\"btn-fblogin\" href=\"#\" class=\"btn btn-primary\">Login with Facebook</a>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"col-md-12 control\">\r\n              <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">\r\n                Don't have an account!\r\n                <a href=\"#\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\">\r\n                  Sign Up Here\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"signupbox\" style=\"display:none; margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n    <div class=\"panel panel-info\">\r\n      <div class=\"panel-heading\">\r\n        <div class=\"panel-title\">Sign Up</div>\r\n        <div style=\"float:right; font-size: 85%; position: relative; top:-10px\">\r\n          <a id=\"signinlink\" href=\"#\" onclick=\"$('#signupbox').hide(); $('#loginbox').show()\">Sign In</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <form id=\"signupform\" class=\"form-horizontal\" role=\"form\">\r\n\r\n          <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\r\n            <p>Error:</p>\r\n            <span></span>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"firstname\" class=\"col-md-3 control-label\">First Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" class=\"form-control\" name=\"firstname\" placeholder=\"First Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastname\" class=\"col-md-3 control-label\">Last Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" class=\"form-control\" name=\"lastname\" placeholder=\"Last Name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"icode\" class=\"col-md-3 control-label\">Invitation Code</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" class=\"form-control\" name=\"icode\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <!-- Button -->\r\n            <div class=\"col-md-offset-3 col-md-9\">\r\n              <button id=\"btn-signup\" type=\"button\" class=\"btn btn-info\">\r\n                <i class=\"icon-hand-right\"></i> &nbsp Sign Up</button>\r\n              <span style=\"margin-left:8px;\">or</span>\r\n            </div>\r\n          </div>\r\n          <div style=\"border-top: 1px solid #999; padding-top:20px\" class=\"form-group\">\r\n            <div class=\"col-md-offset-3 col-md-9\">\r\n              <button id=\"btn-fbsignup\" type=\"button\" class=\"btn btn-primary\">\r\n                <i class=\"icon-facebook\"></i>   Sign Up with Facebook</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/components/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contacts works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("../../../../../src/app/components/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/credit-card/credit-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/credit-card/credit-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div clas=\"card\">\r\n      <div clas=\"card-header\">\r\n        <button class=\"btn btn-primary\">New Card</button>\r\n      </div>\r\n      <div clas=\"card-body\">\r\n        <table class=\"table table-responsive table-striped\">\r\n          <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Bank</th>\r\n                <th>Card No</th>\r\n                <th>Issuer</th>\r\n                <th>Expiry Date</th>\r\n                <th>Name On Card</th>\r\n                <th>Address</th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr>\r\n                <td>1</td>\r\n                <td>Equity Bank Kenya</td>\r\n                <td>1232112233221123</td>\r\n                <td>VISA</td>\r\n                <td>1/1/2020</td>\r\n                <td>00200 Nairobi</td>\r\n                <td><a href=\"\">Options</a></td>\r\n                <td><a  routerLink=\"/payment\" routerLinkActive=\"active\">transfer</a></td>\r\n              </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/credit-card/credit-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreditCardComponent = /** @class */ (function () {
    function CreditCardComponent() {
    }
    CreditCardComponent.prototype.ngOnInit = function () {
    };
    CreditCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-credit-card',
            template: __webpack_require__("../../../../../src/app/components/credit-card/credit-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/credit-card/credit-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreditCardComponent);
    return CreditCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/payment/newPayment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/payment/newPayment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">recipient</label>\r\n            <input type=\"tel\" class=\"form-control\" id=\"recipient\"  placeholder=\"Enter the recipient's mpessa number\">    \r\n               \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Funding source</label>\r\n            <select class=form-control name=\"fundingSource\">\r\n                <option>Visa **778</option>\r\n                <option>MasterCard **23</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">amount</label>\r\n            <input type=\"number\" [ngModel]=\"sendAmount\" (ngModelChange)=\"calc($event)\" name=\"sendAmount\" class=\"form-control\" id=\"sendAmount\" placeholder=\"amount to send in KES\">\r\n            <small>your friend will receive {{receivableAmount}}</small>   \r\n        </div>\r\n        <div class=\"form-check\">\r\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\r\n            <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\r\n        </div>\r\n        <button type=\"button\" routerLink=\"/payment\" routerLinkActive=\"active\" class=\"btn btn-primary\">send</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/payment/newPayment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewPaymentComponent = /** @class */ (function () {
    function NewPaymentComponent() {
        this.receivableAmount = 0;
        this.sendAmount = 0;
    }
    NewPaymentComponent.prototype.ngOnInit = function () {
    };
    ;
    NewPaymentComponent.prototype.calc = function (newValue) {
        this.sendAmount = newValue;
        this.receivableAmount = this.sendAmount * .93;
        console.log(this.receivableAmount);
    };
    NewPaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newPayment',
            template: __webpack_require__("../../../../../src/app/components/payment/newPayment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/payment/newPayment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewPaymentComponent);
    return NewPaymentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div clas=\"panel panel-primary\">\r\n      <div clas=\"panel-heading\">\r\n        Payments\r\n        <button class=\"btn btn-info\" routerLink='/newPayment' routerLinkActive=\"active\">New Payment</button>\r\n      </div>\r\n      <div clas=\"panel-body\">\r\n        <table class=\"table table-responsive table-striped\">\r\n          <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>Recipient</th>\r\n                <th>Amount</th>\r\n                <th>Charge</th>\r\n                <th>Time</th>\r\n                <th>Status</th>\r\n                <th></th>\r\n              </tr>\r\n          </thead>\r\n          <tbody>\r\n              <tr>\r\n                <td>1</td>\r\n                <td>Jane Doe</td>\r\n                <td>23000</td>\r\n                <td>VISA</td>\r\n                <td>1/1/2020 9:00PM</td>\r\n                <td>Complete</td>\r\n                <td><a href=\"\">Options</a></td>               \r\n              </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-payment',
            template: __webpack_require__("../../../../../src/app/components/payment/payment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-4\" style=\"padding-top:5%\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Sign Up\r\n    </div>\r\n    <div clas=\"card-body\">\r\n      <form class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n          <label for=\"emailInput\">Email address</label>\r\n          <input type=\"email\" id=\"emailInput\" name=\"emailInput\" [(ngModel)]='userRegistrationViewModel.email' class=\"form-control\" aria-describedby=\"emailHelp\"\r\n            placeholder=\"Enter email\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"passwordInput\">Password</label>\r\n          <input type=\"password\" id=\"passwordInput\" name=\"passwordInput\" [(ngModel)]=\"userRegistrationViewModel.password\" class=\"form-control\"\r\n            placeholder=\"Password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"confirmPasswordInput\">Password</label>\r\n          <input type=\"password\" id=\"confirmPasswordInput\" name=\"confirmPasswordInput\" [(ngModel)]=\"userRegistrationViewModel.password\"\r\n            class=\"form-control\" placeholder=\"Confirm Your Password\">\r\n        </div>\r\n\r\n        <button type=\"button\" (click)=\"register()\" class=\"btn btn-primary\">Register</button>\r\n        {{userRegistrationViewModel | json}}\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_service__ = __webpack_require__("../../../../../src/app/components/registration/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_registrationService) {
        this._registrationService = _registrationService;
        this.userRegistrationViewModel = {
            email: "",
            password: "",
            confirmPassword: ""
        };
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.getUser = function () {
        var _this = this;
        this._registrationService.getUser()
            .subscribe(function (user) { return _this.currentUser; }, function (error) { return _this.errorMessage = error; });
    };
    RegistrationComponent.prototype.register = function () {
        this._registrationService.register(this.userRegistrationViewModel);
        console.log('register');
        console.log('completed successfully');
        console.log('cant touch this bitches');
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/registration/registration.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__registration_service__["a" /* RegistrationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__registration_service__["a" /* RegistrationService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/registration/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_Observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationService = /** @class */ (function () {
    function RegistrationService(_httpClient) {
        this._httpClient = _httpClient;
        this._registrationApiUrl = "";
    }
    RegistrationService.prototype.getUser = function () {
        return this._httpClient.get(this._registrationApiUrl)
            .do(function (data) { return console.log(JSON.stringify(data)); })
            ._catch(this.handleError);
    };
    RegistrationService.prototype.register = function (user) {
        //this._httpClient.post(_this._registrationApiUrl,{},{ headers: })
        console.log(user.email);
    };
    RegistrationService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    RegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "../../../../../src/app/components/rlogin/rlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/rlogin/rlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Log In\r\n      </div>\r\n      <div clas=\"card-body\">\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Email address</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n          </div>      \r\n          <footer class=\"blockquote-footer\">\r\n\r\n          <button type=\"button\" routerLink=\"/cards\" routerLinkActive=\"active\" class=\"btn btn-primary\">Log In</button>\r\n          <a  routerLink=\"/register\" routerLinkActive=\"active\">Register here</a>\r\n        </footer>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/rlogin/rlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RloginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RloginComponent = /** @class */ (function () {
    function RloginComponent() {
    }
    RloginComponent.prototype.ngOnInit = function () {
    };
    RloginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rlogin',
            template: __webpack_require__("../../../../../src/app/components/rlogin/rlogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/rlogin/rlogin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RloginComponent);
    return RloginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n      <h1 class=\"display-4\">pokea mpesa</h1>\r\n      <p class=\"lead\">Use your bank issued credit/debit/visa/mastercard to send Mpesa to any registered telephone number from anywhere\r\n          in the world\r\n\r\n          <p class=\"lead\">\r\n              <a class=\"btn btn-primary btn-lg\" routerLink=\"/register\" routerLinkActive=\"active\" role=\"button\">Get Started</a>\r\n          </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map