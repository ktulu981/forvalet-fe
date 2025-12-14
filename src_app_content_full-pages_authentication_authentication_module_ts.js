"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_full-pages_authentication_authentication_module_ts"],{

/***/ 77733:
/*!****************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/authentication.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _login_simple_login_simple_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-simple/login-simple.component */ 22824);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_with_bg_login_with_bg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-with-bg/login-with-bg.component */ 38081);
/* harmony import */ var _login_with_bg_image_login_with_bg_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-with-bg-image/login-with-bg-image.component */ 59714);
/* harmony import */ var _login_with_navbar_login_with_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-with-navbar/login-with-navbar.component */ 3496);
/* harmony import */ var _login_advanced_login_advanced_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-advanced/login-advanced.component */ 70557);
/* harmony import */ var _register_simple_register_simple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-simple/register-simple.component */ 8768);
/* harmony import */ var _register_with_bg_register_with_bg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-with-bg/register-with-bg.component */ 99337);
/* harmony import */ var _register_with_bg_image_register_with_bg_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-with-bg-image/register-with-bg-image.component */ 64411);
/* harmony import */ var _register_with_navbar_register_with_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-with-navbar/register-with-navbar.component */ 43941);
/* harmony import */ var _register_advanced_register_advanced_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-advanced/register-advanced.component */ 9166);
/* harmony import */ var _unlock_user_unlock_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unlock-user/unlock-user.component */ 86251);
/* harmony import */ var _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./recover-password/recover-password.component */ 28855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
















class AuthenticationModule {}
AuthenticationModule.ɵfac = function AuthenticationModule_Factory(t) {
  return new (t || AuthenticationModule)();
};
AuthenticationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AuthenticationModule
});
AuthenticationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([{
    path: 'loginSimple',
    component: _login_simple_login_simple_component__WEBPACK_IMPORTED_MODULE_0__.LoginSimpleComponent
  }, {
    path: 'loginWithBg',
    component: _login_with_bg_login_with_bg_component__WEBPACK_IMPORTED_MODULE_1__.LoginWithBgComponent
  }, {
    path: 'loginWithBgImage',
    component: _login_with_bg_image_login_with_bg_image_component__WEBPACK_IMPORTED_MODULE_2__.LoginWithBgImageComponent
  }, {
    path: 'loginWithNavbar',
    component: _login_with_navbar_login_with_navbar_component__WEBPACK_IMPORTED_MODULE_3__.LoginWithNavbarComponent
  }, {
    path: 'loginAdvanced',
    component: _login_advanced_login_advanced_component__WEBPACK_IMPORTED_MODULE_4__.LoginAdvancedComponent
  }, {
    path: 'registerSimple',
    component: _register_simple_register_simple_component__WEBPACK_IMPORTED_MODULE_5__.RegisterSimpleComponent
  }, {
    path: 'registerWithBg',
    component: _register_with_bg_register_with_bg_component__WEBPACK_IMPORTED_MODULE_6__.RegisterWithBgComponent
  }, {
    path: 'registerWithBgImage',
    component: _register_with_bg_image_register_with_bg_image_component__WEBPACK_IMPORTED_MODULE_7__.RegisterWithBgImageComponent
  }, {
    path: 'registerWithNavbar',
    component: _register_with_navbar_register_with_navbar_component__WEBPACK_IMPORTED_MODULE_8__.RegisterWithNavbarComponent
  }, {
    path: 'registerAdvanced',
    component: _register_advanced_register_advanced_component__WEBPACK_IMPORTED_MODULE_9__.RegisterAdvancedComponent
  }, {
    path: 'unlockUser',
    component: _unlock_user_unlock_user_component__WEBPACK_IMPORTED_MODULE_10__.UnlockUserComponent
  }, {
    path: 'recoverPassword',
    component: _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_11__.RecoverPasswordComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AuthenticationModule, {
    declarations: [_login_simple_login_simple_component__WEBPACK_IMPORTED_MODULE_0__.LoginSimpleComponent, _login_with_bg_login_with_bg_component__WEBPACK_IMPORTED_MODULE_1__.LoginWithBgComponent, _login_with_bg_image_login_with_bg_image_component__WEBPACK_IMPORTED_MODULE_2__.LoginWithBgImageComponent, _login_with_navbar_login_with_navbar_component__WEBPACK_IMPORTED_MODULE_3__.LoginWithNavbarComponent, _login_advanced_login_advanced_component__WEBPACK_IMPORTED_MODULE_4__.LoginAdvancedComponent, _register_simple_register_simple_component__WEBPACK_IMPORTED_MODULE_5__.RegisterSimpleComponent, _register_with_bg_register_with_bg_component__WEBPACK_IMPORTED_MODULE_6__.RegisterWithBgComponent, _register_with_bg_image_register_with_bg_image_component__WEBPACK_IMPORTED_MODULE_7__.RegisterWithBgImageComponent, _register_with_navbar_register_with_navbar_component__WEBPACK_IMPORTED_MODULE_8__.RegisterWithNavbarComponent, _register_advanced_register_advanced_component__WEBPACK_IMPORTED_MODULE_9__.RegisterAdvancedComponent, _unlock_user_unlock_user_component__WEBPACK_IMPORTED_MODULE_10__.UnlockUserComponent, _recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_11__.RecoverPasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 70557:
/*!**********************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/login-advanced/login-advanced.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAdvancedComponent": () => (/* binding */ LoginAdvancedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/dashboard/sales"];
};
const _c2 = function () {
  return ["/authentication/registerAdvanced"];
};
class LoginAdvancedComponent {
  constructor() {}
}
LoginAdvancedComponent.ɵfac = function LoginAdvancedComponent_Factory(t) {
  return new (t || LoginAdvancedComponent)();
};
LoginAdvancedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginAdvancedComponent,
  selectors: [["app-login-advanced"]],
  decls: 46,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "row", "navbar-flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body"], [1, "form-horizontal"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "id", "user-name", "placeholder", "Your Username", "tabindex", "1", "required", "", "data-validation-required-message", "Please enter your username.", 1, "form-control", "input-lg"], [1, "form-control-position"], [1, "feather", "ft-user"], [1, "help-block", "font-small-3"], ["type", "password", "id", "password", "placeholder", "Enter Password", "tabindex", "2", "required", "", "data-validation-required-message", "Please enter valid passwords.", 1, "form-control", "input-lg"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-md-6", "col-12", "text-center", "text-md-left"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-md-6", "col-12", "text-center", "text-md-right"], [1, "card-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-danger", "btn-block", "btn-lg", 3, "routerLink"], [1, "feather", "ft-unlock"], [1, "card-footer", "border-0"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-1"], [1, "btn", "btn-info", "btn-block", "btn-lg", "mt-3", 3, "routerLink"]],
  template: function LoginAdvancedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login with Modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "form", 14)(17, "fieldset", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fieldset", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22)(28, "div", 23)(29, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27)(34, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 31)(40, "p", 32)(41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "New to Modern ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n[_nghost-%COMP%]     .navbar-flexbox-container {\n  top: -50px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWFkdmFuY2VkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImxvZ2luLWFkdmFuY2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1mbGV4Ym94LWNvbnRhaW5lciB7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLWFkdmFuY2VkL2xvZ2luLWFkdmFuY2VkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUEsZ2dCQUFnZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1mbGV4Ym94LWNvbnRhaW5lciB7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 22824:
/*!******************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/login-simple/login-simple.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginSimpleComponent": () => (/* binding */ LoginSimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/dashboard/sales"];
};
const _c2 = function () {
  return ["/authentication/registerSimple"];
};
class LoginSimpleComponent {
  constructor() {}
}
LoginSimpleComponent.ɵfac = function LoginSimpleComponent_Factory(t) {
  return new (t || LoginSimpleComponent)();
};
LoginSimpleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginSimpleComponent,
  selectors: [["app-login-simple"]],
  decls: 47,
  vars: 8,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], [1, "p-1"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body"], [1, "form-horizontal", "form-simple"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "id", "user-name", "placeholder", "Your Username", "required", "", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", "required", "", 1, "form-control"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-sm-6", "col-12", "text-center", "text-sm-left"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-sm-6", "col-12", "text-center", "text-sm-right"], [1, "card-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-info", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"], [1, "card-footer"], [1, ""], [1, "float-xl-left", "text-center", "m-0"], [1, "float-xl-right", "text-center", "m-0"]],
  template: function LoginSimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 12)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login with Modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "form", 15)(18, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23)(27, "div", 24)(28, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28)(33, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 32)(39, "div", 33)(40, "p", 34)(41, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Recover password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "New to Moden Admin? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["[_nghost-%COMP%]     .fixed-navbar {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXNpbXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6ImxvZ2luLXNpbXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5maXhlZC1uYXZiYXIge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXNpbXBsZS9sb2dpbi1zaW1wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSxvV0FBb1ciLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmZpeGVkLW5hdmJhciB7XG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 59714:
/*!********************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/login-with-bg-image/login-with-bg-image.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginWithBgImageComponent": () => (/* binding */ LoginWithBgImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/dashboard/sales"];
};
const _c2 = function () {
  return ["/authentication/registerWithBgImage"];
};
class LoginWithBgImageComponent {
  constructor() {}
}
LoginWithBgImageComponent.ɵfac = function LoginWithBgImageComponent_Factory(t) {
  return new (t || LoginWithBgImageComponent)();
};
LoginWithBgImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginWithBgImageComponent,
  selectors: [["app-login-with-bg-image"]],
  decls: 56,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-1"], [1, "card-body"], [1, "form-horizontal"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "id", "user-name", "placeholder", "Your Username", "required", "", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", "required", "", 1, "form-control"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-sm-6", "col-12", "text-center", "text-sm-left", "pr-0"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-sm-6", "col-12", "float-sm-left", "text-center", "text-sm-right"], [1, "card-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"]],
  template: function LoginWithBgImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Easily Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 22)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OR Using Account Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23)(28, "form", 24)(29, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 31)(38, "div", 32)(39, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 36)(44, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 22)(50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "New to Modern ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23)(53, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXdpdGgtYmctaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUE4QjtFQUE5Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoibG9naW4td2l0aC1iZy1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCBib2R5IHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXdpdGgtYmctaW1hZ2UvbG9naW4td2l0aC1iZy1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQThCO0VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFHQSxnZUFBZ2UiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 38081:
/*!********************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/login-with-bg/login-with-bg.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginWithBgComponent": () => (/* binding */ LoginWithBgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/dashboard/sales"];
};
const _c2 = function () {
  return ["/authentication/registerWithBg"];
};
class LoginWithBgComponent {
  constructor() {}
}
LoginWithBgComponent.ɵfac = function LoginWithBgComponent_Factory(t) {
  return new (t || LoginWithBgComponent)();
};
LoginWithBgComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginWithBgComponent,
  selectors: [["app-login-with-bg"]],
  decls: 57,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], [1, "p-1"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body", "pt-0", "text-center"], [1, "btn", "btn-social", "mb-1", "mr-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "px-1"], [1, "btn", "btn-social", "mb-1", "mr-1", "btn-outline-google", 3, "routerLink"], [1, "la", "la-google-plus", "font-medium-4"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2"], [1, "card-body", "pt-0"], [1, "form-horizontal"], [1, "form-group", "floating-label-form-group"], ["for", "user-name"], ["type", "text", "id", "user-name", "placeholder", "Your Username", 1, "form-control"], [1, "form-group", "floating-label-form-group", "mb-1"], ["for", "user-password"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", 1, "form-control"], [1, "form-group", "row"], [1, "col-sm-6", "col-12", "text-center", "text-sm-left"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-sm-6", "col-12", "float-sm-left", "text-center", "text-sm-right"], [1, "card-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-1"], [1, "card-body"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"], [1, "feather", "ft-user"]],
  template: function LoginWithBgComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 12)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Easily Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 20)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "OR Using Account Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21)(29, "form", 22)(30, "fieldset", 23)(31, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Your Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "fieldset", 26)(35, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Enter Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29)(39, "div", 30)(40, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 34)(45, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 38)(51, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "New to Modern ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 39)(54, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".content-wrapper[_ngcontent-%COMP%] {\n  padding: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXdpdGgtYmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJsb2dpbi13aXRoLWJnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMHJlbSAhaW1wb3J0YW50O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXdpdGgtYmcvbG9naW4td2l0aC1iZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLGdWQUFnViIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3496:
/*!****************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/login-with-navbar/login-with-navbar.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginWithNavbarComponent": () => (/* binding */ LoginWithNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/dashboard/sales"];
};
const _c1 = function () {
  return ["/authentication/recoverPassword"];
};
const _c2 = function () {
  return ["/authentication/registerWithNavbar"];
};
class LoginWithNavbarComponent {
  constructor() {}
}
LoginWithNavbarComponent.ɵfac = function LoginWithNavbarComponent_Factory(t) {
  return new (t || LoginWithNavbarComponent)();
};
LoginWithNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginWithNavbarComponent,
  selectors: [["app-login-with-navbar"]],
  decls: 48,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "navbar-flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-2"], [1, "card-body", "pt-0"], [1, "form-horizontal"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "id", "user-name", "placeholder", "Your Username", "required", "", 1, "form-control"], [1, "form-control-position"], [1, "la", "la-user"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", "required", "", 1, "form-control"], [1, "la", "la-key"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"], [1, "card-body"], [1, "card-link", 3, "routerLink"]],
  template: function LoginWithNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Easily Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 22)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OR Using Account Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23)(28, "form", 24)(29, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 33)(41, "p", 13)(42, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Recover password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "New to Modern Admin? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n[_nghost-%COMP%]     .navbar-flexbox-container {\n  top: -50px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXdpdGgtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImxvZ2luLXdpdGgtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdmJhci1mbGV4Ym94LWNvbnRhaW5lciB7XG4gIHRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXdpdGgtbmF2YmFyL2xvZ2luLXdpdGgtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUdBLDRnQkFBNGdCIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCBib2R5IHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItZmxleGJveC1jb250YWluZXIge1xuICB0b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 28855:
/*!**************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/recover-password/recover-password.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverPasswordComponent": () => (/* binding */ RecoverPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/loginSimple"];
};
const _c1 = function () {
  return ["/authentication/registerSimple"];
};
class RecoverPasswordComponent {
  constructor() {}
}
RecoverPasswordComponent.ɵfac = function RecoverPasswordComponent_Factory(t) {
  return new (t || RecoverPasswordComponent)();
};
RecoverPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RecoverPasswordComponent,
  selectors: [["app-recover-password"]],
  decls: 32,
  vars: 4,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-2", "py-2", "m-0"], [1, "card-header", "border-0", "pb-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body"], [1, "form-horizontal"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "email", "id", "user-email", "placeholder", "Your Email Address", "required", "", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-mail"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-lg", "btn-block"], [1, "feather", "ft-unlock"], [1, "card-footer", "border-0"], [1, "float-sm-left", "text-center"], [1, "card-link", 3, "routerLink"], [1, "float-sm-right", "text-center"]],
  template: function RecoverPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "We will send you a link to reset password.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "form", 14)(17, "fieldset", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Recover Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21)(25, "p", 22)(26, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "New to Modern ? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["[_nghost-%COMP%]     .top_space {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXItcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnRvcF9zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL3JlY292ZXItcGFzc3dvcmQvcmVjb3Zlci1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLDRXQUE0VyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudG9wX3NwYWNlIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9166:
/*!****************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/register-advanced/register-advanced.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterAdvancedComponent": () => (/* binding */ RegisterAdvancedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/loginAdvanced"];
};
class RegisterAdvancedComponent {
  constructor() {}
}
RegisterAdvancedComponent.ɵfac = function RegisterAdvancedComponent_Factory(t) {
  return new (t || RegisterAdvancedComponent)();
};
RegisterAdvancedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterAdvancedComponent,
  selectors: [["app-register-advanced"]],
  decls: 72,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "m-0"], [1, "card-header", "border-0", "pb-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body"], [1, "form-horizontal"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-6"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "name", "first_name", "id", "first_name", "placeholder", "First Name", "tabindex", "1", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["type", "text", "name", "last_name", "id", "last_name", "placeholder", "Last Name", "tabindex", "2", 1, "form-control"], ["type", "text", "name", "display_name", "id", "display_name", "placeholder", "Display Name", "tabindex", "3", "required", "", "data-validation-required-message", "Please enter display name.", 1, "form-control"], [1, "help-block", "font-small-3"], ["type", "email", "name", "email", "id", "email", "placeholder", "Email Address", "tabindex", "4", "required", "", "data-validation-required-message", "Please enter email address.", 1, "form-control"], [1, "feather", "ft-mail"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", "tabindex", "5", "required", "", 1, "form-control"], [1, "la", "la-key"], ["type", "password", "name", "password_confirmation", "id", "password_confirmation", "placeholder", "Confirm Password", "tabindex", "6", "data-validation-matches-match", "password", "data-validation-matches-message", "Password & Confirm Password must be the same.", 1, "form-control"], [1, "row", "mb-1"], [1, "col-4", "col-sm-3", "col-md-3"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-8", "col-sm-9", "col-md-9"], [1, "font-small-3"], ["data-toggle", "modal", "data-target", "#t_and_c_m", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"], [1, "btn", "btn-danger", "btn-lg", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"]],
  template: function RegisterAdvancedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "form", 14)(17, "div", 15)(18, "div", 16)(19, "fieldset", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16)(24, "fieldset", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "fieldset", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15)(39, "div", 16)(40, "fieldset", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16)(46, "fieldset", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29)(52, "div", 30)(53, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " I Agree");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34)(58, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "By clicking Register, you agree to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Terms and Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " set out by this site, including our Cookie Use.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15)(64, "div", 16)(65, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16)(69, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n\n[_nghost-%COMP%]     .top_space {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWFkdmFuY2VkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InJlZ2lzdGVyLWFkdmFuY2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudG9wX3NwYWNlIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyLWFkdmFuY2VkL3JlZ2lzdGVyLWFkdmFuY2VkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUdBLHdlQUF3ZSIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50b3Bfc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8768:
/*!************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/register-simple/register-simple.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterSimpleComponent": () => (/* binding */ RegisterSimpleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/loginSimple"];
};
class RegisterSimpleComponent {
  constructor() {}
}
RegisterSimpleComponent.ɵfac = function RegisterSimpleComponent_Factory(t) {
  return new (t || RegisterSimpleComponent)();
};
RegisterSimpleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterSimpleComponent,
  selectors: [["app-register-simple"]],
  decls: 36,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-2", "py-2", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body"], [1, "form-horizontal", "form-simple"], [1, "form-group", "position-relative", "has-icon-left", "mb-1"], ["type", "text", "id", "user-name", "placeholder", "User Name", 1, "form-control", "form-control-lg", "input-lg"], [1, "form-control-position"], [1, "feather", "ft-user"], ["type", "email", "id", "user-email", "placeholder", "Your Email Address", "required", "", 1, "form-control", "form-control-lg", "input-lg"], [1, "feather", "ft-mail"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", "required", "", 1, "form-control", "form-control-lg", "input-lg"], [1, "la", "la-key"], ["type", "submit", 1, "btn", "btn-info", "btn-lg", "btn-block"], [1, "feather", "ft-unlock"], [1, "text-center"], [1, "card-link", 3, "routerLink"]],
  template: function RegisterSimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "form", 14)(17, "fieldset", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "fieldset", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "fieldset", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Already have an account ? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["[_nghost-%COMP%]     .top_space {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXNpbXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InJlZ2lzdGVyLXNpbXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC50b3Bfc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyLXNpbXBsZS9yZWdpc3Rlci1zaW1wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSx3V0FBd1ciLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnRvcF9zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 64411:
/*!**************************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/register-with-bg-image/register-with-bg-image.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterWithBgImageComponent": () => (/* binding */ RegisterWithBgImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/authentication/loginWithBgImage"];
};
class RegisterWithBgImageComponent {
  constructor() {}
}
RegisterWithBgImageComponent.ɵfac = function RegisterWithBgImageComponent_Factory(t) {
  return new (t || RegisterWithBgImageComponent)();
};
RegisterWithBgImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterWithBgImageComponent,
  selectors: [["app-register-with-bg-image"]],
  decls: 57,
  vars: 4,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "m-0"], [1, "card-header", "border-0", "pb-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-1"], [1, "card-body"], [1, "form-horizontal"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "id", "user-name", "placeholder", "User Name", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["type", "email", "id", "user-email", "placeholder", "Your Email Address", "required", "", 1, "form-control"], [1, "feather", "ft-mail"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", "required", "", 1, "form-control"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-sm-6", "col-12", "text-center", "text-sm-left", "pr-0"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-sm-6", "col-12", "float-sm-left", "text-center", "text-sm-right"], [1, "card-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-block"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"]],
  template: function RegisterWithBgImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Easily Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 22)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OR Using Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23)(28, "form", 24)(29, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 33)(42, "div", 34)(43, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 38)(48, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23)(54, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n\n[_nghost-%COMP%]     .top_space {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXdpdGgtYmctaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUE4QjtFQUE5Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoicmVnaXN0ZXItd2l0aC1iZy1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCBib2R5IHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRvcF9zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyLXdpdGgtYmctaW1hZ2UvcmVnaXN0ZXItd2l0aC1iZy1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQThCO0VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFHQSxvZkFBb2YiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudG9wX3NwYWNlIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 99337:
/*!**************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/register-with-bg/register-with-bg.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterWithBgComponent": () => (/* binding */ RegisterWithBgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/authentication/loginWithBg"];
};
class RegisterWithBgComponent {
  constructor() {}
}
RegisterWithBgComponent.ɵfac = function RegisterWithBgComponent_Factory(t) {
  return new (t || RegisterWithBgComponent)();
};
RegisterWithBgComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterWithBgComponent,
  selectors: [["app-register-with-bg"]],
  decls: 57,
  vars: 4,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "m-0"], [1, "card-header", "border-0", "pb-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body", "text-center"], [1, "btn", "btn-social", "mb-1", "mr-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "px-1"], [1, "btn", "btn-social", "mb-1", "btn-outline-google", 3, "routerLink"], [1, "la", "la-google-plus", "font-medium-4"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-1"], [1, "card-body", "pt-0"], [1, "form-horizontal"], [1, "form-group", "floating-label-form-group"], ["for", "user-name"], ["type", "text", "id", "user-name", "placeholder", "User Name", 1, "form-control"], ["for", "user-email"], ["type", "email", "id", "user-email", "placeholder", "Your Email Address", 1, "form-control"], [1, "form-group", "floating-label-form-group", "mb-1"], ["for", "user-password"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", 1, "form-control"], [1, "form-group", "row"], [1, "col-sm-6", "col-12", "text-center", "text-sm-left", "pr-0"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-sm-6", "col-12", "float-sm-left", "text-center", "text-sm-right"], [1, "card-link", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-block"], [1, "feather", "ft-user"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"]],
  template: function RegisterWithBgComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Easily Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OR Using Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20)(28, "form", 21)(29, "fieldset", 22)(30, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "User Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset", 22)(34, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Your Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "fieldset", 27)(38, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Enter Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30)(42, "div", 31)(43, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 35)(48, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20)(54, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n\n[_nghost-%COMP%]     .top_space {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXdpdGgtYmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUE4QjtFQUE5Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoicmVnaXN0ZXItd2l0aC1iZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCBib2R5IHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRvcF9zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyLXdpdGgtYmcvcmVnaXN0ZXItd2l0aC1iZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQThCO0VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFHQSxvZUFBb2UiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudG9wX3NwYWNlIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 43941:
/*!**********************************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/register-with-navbar/register-with-navbar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterWithNavbarComponent": () => (/* binding */ RegisterWithNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/authentication/loginWithNavbar"];
};
class RegisterWithNavbarComponent {
  constructor() {}
}
RegisterWithNavbarComponent.ɵfac = function RegisterWithNavbarComponent_Factory(t) {
  return new (t || RegisterWithNavbarComponent)();
};
RegisterWithNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegisterWithNavbarComponent,
  selectors: [["app-register-with-navbar"]],
  decls: 51,
  vars: 4,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "navbar-flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-2", "py-2", "row", "mb-0"], [1, "card-header", "no-border", "pb-0"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-2"], [1, "card-body", "pt-0"], [1, "form-horizontal"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "id", "user-name", "placeholder", "User Name", 1, "form-control"], [1, "form-control-position"], [1, "la", "la-user"], ["type", "email", "id", "email", "placeholder", "Your Email Address", "required", "", 1, "form-control"], [1, "la", "la-envelope-o"], ["type", "password", "id", "user-password", "placeholder", "Enter Password", "required", "", 1, "form-control"], [1, "la", "la-key"], ["type", "submit", 1, "btn", "btn-info", "btn-block"], [1, "card-footer", "pb-0"], [1, "card-link", 3, "routerLink"]],
  template: function RegisterWithNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Easily Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 22)(25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OR Using Account Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23)(28, "form", 24)(29, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "fieldset", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34)(44, "p", 13)(45, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Recover password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Already have an account ? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n\n[_nghost-%COMP%]     .top_space {\n  padding-top: 0rem !important;\n}\n[_nghost-%COMP%]     .content-wrapper {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXdpdGgtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoicmVnaXN0ZXItd2l0aC1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50b3Bfc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyLXdpdGgtbmF2YmFyL3JlZ2lzdGVyLXdpdGgtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBOEI7RUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFFQSx3bUJBQXdtQiIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50b3Bfc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 86251:
/*!****************************************************************************************!*\
  !*** ./src/app/content/full-pages/authentication/unlock-user/unlock-user.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockUserComponent": () => (/* binding */ UnlockUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = function () {
  return ["/authentication/recoverPassword"];
};
const _c1 = function () {
  return ["/dashboard/sales"];
};
const _c2 = function () {
  return ["/authentication/loginSimple"];
};
class UnlockUserComponent {
  constructor() {}
}
UnlockUserComponent.ɵfac = function UnlockUserComponent_Factory(t) {
  return new (t || UnlockUserComponent)();
};
UnlockUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UnlockUserComponent,
  selectors: [["app-unlock-user"]],
  decls: 38,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-2", "py-2", "m-0"], [1, "card-header", "border-0", "text-center"], ["src", "../../../../../assets/images/portrait/small/avatar-s-1.png", "alt", "unlock-user", 1, "rounded-circle", "img-fluid", "center-block"], [1, "card-title", "mt-1"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2"], [1, "card-content"], [1, "card-body"], [1, "form-horizontal"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "password", "id", "password", "placeholder", "Enter Password", "required", "", 1, "form-control", "form-control-lg", "input-lg"], [1, "form-control-position"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-sm-6", "col-12", "text-center", "text-sm-left", "pr-0", "mb-1"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-sm-6", "col-12", "float-sm-left", "text-center", "text-sm-right", "mb-1"], [1, "card-link", 3, "routerLink"], [1, "feather", "ft-unlock"], [1, "btn", "btn-outline-primary", "btn-lg", "btn-block", 3, "routerLink"], [1, "la", "la-lock"], [1, "btn", "btn-outline-danger", "btn-lg", "btn-block", 3, "routerLink"], [1, "feather", "ft-power"]],
  template: function UnlockUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "John Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Unlock your account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "form", 14)(18, "fieldset", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19)(23, "div", 20)(24, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24)(29, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Unlock");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["[_nghost-%COMP%]     .top_space {\n  padding-top: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubG9jay11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoidW5sb2NrLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudG9wX3NwYWNlIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL2F1dGhlbnRpY2F0aW9uL3VubG9jay11c2VyL3VubG9jay11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEsZ1dBQWdXIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC50b3Bfc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_content_full-pages_authentication_authentication_module_ts.js.map