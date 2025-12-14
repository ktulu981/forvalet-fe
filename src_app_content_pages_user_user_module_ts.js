"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_pages_user_user_module_ts"],{

/***/ 24121:
/*!***********************************************************************!*\
  !*** ./src/app/content/pages/user/user-cards/user-cards.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserCardsComponent": () => (/* binding */ UserCardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class UserCardsComponent {
  constructor() {}
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'User Cards',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Users',
        'isLink': true,
        'link': ''
      }, {
        'name': 'User Cards',
        'isLink': false
      }]
    };
  }
}
UserCardsComponent.ɵfac = function UserCardsComponent_Factory(t) {
  return new (t || UserCardsComponent)();
};
UserCardsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: UserCardsComponent,
  selectors: [["app-user-cards"]],
  decls: 584,
  vars: 1,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "simple-user-cards", 1, "row"], [1, "col-12"], [1, "text-uppercase"], [1, "col-xl-3", "col-md-6", "col-12"], [1, "card"], [1, "text-center"], [1, "card-body"], ["src", "../../../assets/images/portrait/medium/avatar-m-4.png", "alt", "Card image", 1, "rounded-circle", "height-150"], [1, "card-title"], [1, "card-subtitle", "text-muted"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], ["src", "../../../assets/images/portrait/medium/avatar-m-1.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["src", "../../../assets/images/portrait/medium/avatar-m-6.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["src", "../../../assets/images/portrait/medium/avatar-m-5.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["id", "simple-user-cards-with-border", 1, "row", "mt-2"], [1, "card", "border-teal", "border-lighten-2"], [1, "card", "border-pink", "border-lighten-2"], [1, "card", "border-blue", "border-lighten-2"], [1, "card", "border-amber", "border-lighten-2"], ["id", "user-cards-with-square-thumbnail", 1, "row", "mt-2"], [1, "card", "box-shadow-1"], [1, "card", "box-shadow-2"], [1, "card", "box-shadow-3"], [1, "card", "box-shadow-4"], ["id", "user-profile-cards", 1, "row", "mt-2"], [1, "col-xl-4", "col-md-6", "col-12"], ["type", "button", 1, "btn", "btn-danger", "mr-1"], [1, "la", "la-plus"], ["type", "button", 1, "btn", "btn-primary", "mr-1"], [1, "feather", "ft-user"], [1, "list-group", "list-group-flush"], [1, "list-group-item", 3, "routerLink"], [1, "la", "la-briefcase"], [1, "feather", "ft-mail"], [1, "feather", "ft-check-square"], [1, "feather", "ft-message-square"], [1, "card", "card", "border-teal", "border-lighten-2"], ["id", "user-profile-cards-with-stats", 1, "row", "mt-2"], [1, "card", "profile-card-with-stats"], ["src", "../../../assets/images/portrait/medium/avatar-m-8.png", "alt", "Card image", 1, "rounded-circle", "height-150"], [1, "list-inline", "list-inline-pipe"], ["role", "group", "aria-label", "Profile example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-float", "box-shadow-0", "btn-outline-info"], [1, "ladda-label"], [1, "la", "la-bell-o"], [1, "ladda-spinner"], [1, "la", "la-heart-o"], [1, "la", "la-dashcube"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-md", "mr-1"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-md", "mr-1"], [1, "card", "profile-card-with-stats", "border-teal", "border-lighten-2"], ["src", "../../../assets/images/portrait/medium/avatar-m-7.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["type", "button", 1, "btn", "btn-float", "box-shadow-0", "btn-outline-info", "btn-round"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-md", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-md", "btn-round", "mr-1"], [1, "card", "profile-card-with-stats", "box-shadow-2"], ["src", "../../../assets/images/portrait/medium/avatar-m-10.png", "alt", "Card image", 1, "rounded-circle", "height-150"], ["type", "button", 1, "btn", "btn-float", "box-shadow-0", "btn-outline-info", "btn-square"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-md", "btn-square", "mr-1"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-md", "btn-square", "mr-1"], ["id", "user-profile-cards-with-cover-image", 1, "row", "mt-2"], [1, "card", "profile-card-with-cover"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../assets/images/carousel/18.jpg')"], [1, "card-profile-image"], ["src", "../../../assets/images/portrait/small/avatar-s-4.png", "alt", "Card image", 1, "rounded-circle", "img-border", "box-shadow-1"], [1, "profile-card-with-cover-content", "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "btn", "btn-social-icon", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "card", "profile-card-with-cover", "border-teal", "border-lighten-2"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../assets/images/carousel/16.jpg')"], ["src", "../../../assets/images/portrait/small/avatar-s-9.png", "alt", "Card image", 1, "rounded-circle", "img-border"], [1, "card", "profile-card-with-cover", "box-shadow-2"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../assets/images/carousel/17.jpg')"], ["src", "../../../assets/images/portrait/small/avatar-s-8.png", "alt", "Card image", 1, "rounded-circle", "img-border", "box-shadow-4"]],
  template: function UserCardsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Simple User Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "A very basic simple user cards.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Michelle Howard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10)(22, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8)(29, "div", 9)(30, "div", 10)(31, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11)(34, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Joseph Ryan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Marketing Head");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10)(39, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 8)(46, "div", 9)(47, "div", 10)(48, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 11)(51, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Frances Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Technical Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 10)(56, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 8)(63, "div", 9)(64, "div", 10)(65, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 11)(68, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Andrew Davis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "UI/UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 10)(73, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "section", 24)(80, "div", 6)(81, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Simple User Cards with Border");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Use color palette border class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "border-lighten-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 8)(92, "div", 25)(93, "div", 10)(94, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 11)(97, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Michelle Howard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 10)(102, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 8)(109, "div", 26)(110, "div", 10)(111, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 11)(114, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Joseph Ryan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Marketing Head");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 10)(119, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 8)(126, "div", 27)(127, "div", 10)(128, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 11)(131, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Frances Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Technical Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 10)(136, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 8)(143, "div", 28)(144, "div", 10)(145, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 11)(148, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Andrew Davis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "UI/UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 10)(153, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "section", 29)(160, "div", 6)(161, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Simple User Cards with Square Thumbnail");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Use shadow helper class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "box-shadow-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, " to add show in cards.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 8)(169, "div", 30)(170, "div", 10)(171, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 11)(174, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Michelle Howard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 10)(179, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 8)(186, "div", 31)(187, "div", 10)(188, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 11)(191, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Joseph Ryan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Marketing Head");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 10)(196, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 8)(203, "div", 32)(204, "div", 10)(205, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 11)(208, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Frances Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Technical Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 10)(213, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 8)(220, "div", 33)(221, "div", 10)(222, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 11)(225, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Andrew Davis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "UI/UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 10)(230, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "section", 34)(237, "div", 6)(238, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "User Profile Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "User profile cards with border & shadow variant.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 35)(243, "div", 9)(244, "div", 10)(245, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 11)(248, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Frances Butler");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Technical Lead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 11)(253, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, " Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 40)(260, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, " Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, " Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, " Calender");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 35)(273, "div", 46)(274, "div", 10)(275, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 11)(278, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Andrew Davis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "UI/UX Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "div", 11)(283, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, " Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 40)(290, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, " Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, " Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, " Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, " Calender");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 35)(303, "div", 31)(304, "div", 10)(305, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 11)(308, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Michelle Howard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 11)(313, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](314, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, " Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 40)(320, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, " Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, " Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, " Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, " Calender");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "section", 47)(333, "div", 6)(334, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "User Profile Cards with Stats");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "User profile cards with Stats in border & shadow variant.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 35)(339, "div", 48)(340, "div", 10)(341, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](342, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 11)(344, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Linda Holland");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "ul", 50)(347, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](348, "@lindah");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "domain.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "div", 51)(354, "button", 52)(355, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](356, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "12+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](359, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "button", 52)(361, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "i", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "button", 52)(367, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "button", 52)(373, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "75+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](377, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "button", 52)(379, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](380, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](382, "125");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 11)(385, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores id quo, sed ei.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "button", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](388, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "button", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](391, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, " Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 35)(394, "div", 60)(395, "div", 10)(396, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](397, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 11)(399, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Philip Garrett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "ul", 50)(402, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "@philipg");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "domain.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "div", 51)(409, "button", 62)(410, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "12+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "button", 62)(416, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](417, "i", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](420, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "button", 62)(422, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](426, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "button", 62)(428, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](429, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "75+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](432, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "button", 62)(434, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](437, "125");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 11)(440, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores id quo, sed ei.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "button", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](446, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, " Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "div", 35)(449, "div", 65)(450, "div", 10)(451, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "img", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 11)(454, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Christine Wood");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "ul", 50)(457, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "@christine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "domain.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 51)(464, "button", 67)(465, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](466, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](468, "12+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](469, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "button", 67)(471, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](472, "i", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](474, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](475, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "button", 67)(477, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](478, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](481, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](482, "button", 67)(483, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](484, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](486, "75+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](487, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "button", 67)(489, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](490, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "125");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](493, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "div", 11)(495, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Lorem ipsum dolor sit amet, autem imperdiet et nam. Nullam labores id quo, sed ei.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](498, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](501, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, " Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "section", 70)(504, "div", 6)(505, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](506, "User Profile Cards with Cover Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, "User profile cards with Cover Image in border & shadow variant.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "div", 35)(510, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](511, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](513, "img", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 75)(515, "div", 11)(516, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, "Linda Holland");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "ul", 50)(519, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "@lindah");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "domain.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 10)(526, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](527, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](529, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](531, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](533, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div", 35)(535, "div", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](536, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](538, "img", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "div", 75)(540, "div", 11)(541, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "Philip Garrett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "ul", 50)(544, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, "@philip");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](547, "domain.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](549, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "div", 10)(551, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](552, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](554, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](556, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](558, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "div", 35)(560, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](563, "img", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 75)(565, "div", 11)(566, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](567, "Christine Wood");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "ul", 50)(569, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "@christine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "domain.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "h6", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](575, "div", 10)(576, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](577, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](579, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](581, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](583, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["[_nghost-%COMP%]     .btn.btn-social-icon {\n    padding: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2FyZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJ1c2VyLWNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJ0bi5idG4tc29jaWFsLWljb24ge1xuICAgIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy91c2VyL3VzZXItY2FyZHMvdXNlci1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0Esb1dBQW9XIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5idG4uYnRuLXNvY2lhbC1pY29uIHtcbiAgICBwYWRkaW5nOiB1bnNldCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7413:
/*!***************************************************************************!*\
  !*** ./src/app/content/pages/user/user-profile/user-profile.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_services/chart.api */ 19383);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










function UserProfileComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56)(1, "m-card", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function UserProfileComponent_div_72_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.reloadProjectWorkOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 78)(6, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 99)(14, "li", 100)(15, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 100)(19, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li")(23, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](26, 119)(27, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 92)(29, "div", 120)(30, "a", 77)(31, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 96)(34, "p", 105)(35, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ul", 123)(40, "li", 100)(41, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li", 100)(45, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 92)(49, "div", 120)(50, "a", 77)(51, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 96)(54, "p", 105)(55, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ul", 123)(60, "li", 100)(61, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li", 100)(65, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "fieldset", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
function UserProfileComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56)(1, "m-card", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function UserProfileComponent_div_77_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.reloadSofiaOrav($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Sofia Orav ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 78)(6, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "iframe", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 99)(17, "li", 100)(18, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 100)(22, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li")(26, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](29, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "fieldset", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
  }
}
function UserProfileComponent_div_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 56)(1, "m-card", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function UserProfileComponent_div_125_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.reloadSofiaOravTwo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Sofia Orav ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 78)(6, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "18 June, 2016 at 4.50 P.M");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 126)(12, "li", 127)(13, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Cras justo odio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 127)(18, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Dapibus ac facilisis in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 127)(23, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Morbi leo risus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 127)(28, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Porta ac consectetur ac");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li", 127)(33, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Vestibulum at eros");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "fieldset", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.options);
  }
}
const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];
const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
class UserProfileComponent {
  constructor(chartApiservice) {
    this.chartApiservice = chartApiservice;
    this.image1 = [{
      img: '../../../../../assets/images/gallery/1.jpg',
      thumb: '../../../../../assets/images/gallery/1.jpg',
      description: 'Image 1'
    }];
    this.image2 = [{
      img: '../../../../../assets/images/gallery/2.jpg',
      thumb: '../../../../../assets/images/gallery/2.jpg',
      description: 'Image 2'
    }];
    this.image3 = [{
      img: '../../../../../assets/images/gallery/3.jpg',
      thumb: '../../../../../assets/images/gallery/3.jpg',
      description: 'Image 3'
    }];
    this.image4 = [{
      img: '../../../../../assets/images/gallery/4.jpg',
      thumb: '../../../../../assets/images/gallery/4.jpg',
      description: 'Image 4'
    }];
    this.image5 = [{
      img: '../../../../../assets/images/gallery/5.jpg',
      thumb: '../../../../../assets/images/gallery/5.jpg',
      description: 'Image 5'
    }];
    this.image6 = [{
      img: '../../../../../assets/images/gallery/6.jpg',
      thumb: '../../../../../assets/images/gallery/6.jpg',
      description: 'Image 6'
    }];
    this.image7 = [{
      img: '../../../../../assets/images/gallery/7.jpg',
      thumb: '../../../../../assets/images/gallery/7.jpg',
      description: 'Image 7'
    }];
    this.image8 = [{
      img: '../../../../../assets/images/gallery/8.jpg',
      thumb: '../../../../../assets/images/gallery/8.jpg',
      description: 'Image 8'
    }];
    this.image9 = [{
      img: '../../../../../assets/images/gallery/9.jpg',
      thumb: '../../../../../assets/images/gallery/9.jpg',
      description: 'Image 9'
    }];
    this.image10 = [{
      img: '../../../../../assets/images/gallery/10.jpg',
      thumb: '../../../../../assets/images/gallery/10.jpg',
      description: 'Image 10'
    }];
    this.image11 = [{
      img: '../../../../../assets/images/gallery/11.jpg',
      thumb: '../../../../../assets/images/gallery/11.jpg',
      description: 'Image 11'
    }];
    this.image12 = [{
      img: '../../../../../assets/images/gallery/12.jpg',
      thumb: '../../../../../assets/images/gallery/12.jpg',
      description: 'Image 12'
    }];
    this.zoom = 15;
    this.lat = 40.650002;
    this.lng = -73.949997;
    this.options = {
      close: false,
      expand: true,
      minimize: false,
      reload: true
    };
    this.markers = [{
      lat: this.lat,
      lng: this.lng,
      label: ''
    }];
    this.chartOption = {
      // grid: {
      //   x: 40,
      //   x2: 40,
      //   y: 45,
      //   y2: 25
      // },
      // Add tooltip
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow' // The default is a straight line, optionally: 'line' | 'shadow'
        }
      },

      // Add legend
      legend: {
        data: ['Direct access', 'Email marketing', 'Advertising alliance', 'Video ads', 'Search engine', 'Google', 'Safari', 'Opera', 'Firefox']
      },
      // Add custom colors
      color: ['#666EE8', '#FF9149', '#FF9966', '#FA8E57', '#FF637b', '#5175E0', '#A147F0', '#28D094', '#BABFC7'],
      // // Enable drag recalculate
      // calculable: true,
      xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }],
      yAxis: [{
        type: 'value'
      }],
      series: [{
        name: 'Direct access',
        type: 'bar',
        data: [320, 332, 301, 334, 390, 330, 320]
      }, {
        name: 'Email marketing',
        type: 'bar',
        stack: 'advertising',
        data: [120, 132, 101, 134, 90, 230, 210]
      }, {
        name: 'Advertising alliance',
        type: 'bar',
        stack: 'advertising',
        data: [220, 182, 191, 234, 290, 330, 310]
      }, {
        name: 'Video ads',
        type: 'bar',
        stack: 'advertising',
        data: [150, 232, 201, 154, 190, 330, 410]
      }, {
        name: 'Search Engine',
        type: 'bar',
        stack: 'Total',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570]
      }, {
        name: 'Google',
        type: 'bar',
        barWidth: 12,
        stack: 'search engine',
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      }, {
        name: 'Safari',
        type: 'bar',
        stack: 'search engine',
        data: [120, 132, 101, 134, 290, 230, 220]
      }, {
        name: 'Opera',
        type: 'bar',
        stack: 'search engine',
        data: [60, 72, 71, 74, 190, 130, 110]
      }, {
        name: 'Firefox',
        type: 'bar',
        stack: 'search engine',
        data: [62, 82, 91, 84, 109, 110, 120]
      }]
    };
  }
  getChordchart() {
    this.option = {
      title: {
        text: 'Punch Card of Github',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
      },
      legend: {
        data: ['Punch Card'],
        left: 'right'
      },
      polar: {},
      tooltip: {
        formatter: function (params) {
          return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
        }
      },
      angleAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            color: '#999',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false
        }
      },
      radiusAxis: {
        type: 'category',
        data: days,
        axisLine: {
          show: false
        },
        axisLabel: {
          rotate: 45
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: function (val) {
          return val[2] * 2;
        },
        data: this.data['punchdata'].data,
        animationDelay: function (idx) {
          return idx * 5;
        }
      }]
    };
  }
  ngOnInit() {
    this.zoom = 15;
    this.chartApiservice.getTimelineData().subscribe(Response => {
      this.data = Response;
      this.getChordchart();
    });
  }
  reloadProjectWorkOne() {
    this.blockUIProjectWorkOne.start('Loading..');
    setTimeout(() => {
      this.blockUIProjectWorkOne.stop();
    }, 2500);
  }
  reloadSofiaOrav() {
    this.blockUISofiaOrav.start('Loading..');
    setTimeout(() => {
      this.blockUISofiaOrav.stop();
    }, 2500);
  }
  reloadSofiaOravTwo() {
    this.blockUISofiaOravTwo.start('Loading..');
    setTimeout(() => {
      this.blockUISofiaOravTwo.stop();
    }, 2500);
  }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
  return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_0__.ChartApiService));
};
UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UserProfileComponent,
  selectors: [["app-user-profile"]],
  decls: 303,
  vars: 20,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "user-profile"], [1, "row"], [1, "col-12"], [1, "card", "profile-with-cover"], [1, "card-img-top", "img-fluid", "bg-cover", "height-300", 2, "background", "url('../../../assets/images/carousel/22.jpg') 50%"], [1, "media", "profil-cover-details", "w-100"], [1, "media-left", "pl-2", "pt-2"], [1, "profile-image", 3, "routerLink"], ["src", "../../../../../assets/images/portrait/small/avatar-s-8.png", "alt", "Card image", 1, "rounded-circle", "img-border", "height-100"], [1, "media-body", "pt-3", "px-2"], [1, "col"], [1, "card-title"], [1, "col", "text-right"], ["type", "button", 1, "btn", "btn-primary", "d-"], [1, "la", "la-plus"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "d-none", "d-md-block", "float-right", "ml-2"], ["type", "button", 1, "btn", "btn-success"], [1, "la", "la-dashcube"], [1, "la", "la-cog"], [1, "navbar", "navbar-light", "navbar-profile", "align-self-end"], ["type", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-sm-none"], [1, "navbar", "navbar-expand-lg"], [1, "navbar-nav", "mr-auto"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], [1, "nav-link"], [1, "la", "la-line-chart"], [1, "sr-only"], [1, "nav-item"], [1, "la", "la-user"], [1, "la", "la-briefcase"], [1, "la", "la-heart-o"], [1, "la", "la-bell-o"], ["id", "timeline", 1, "timeline-center", "timeline-wrapper"], [1, "page-title", "text-center"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "la", "la-calendar-o"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-red", "bg-lighten-1"], [1, "la", "la-plane"], ["class", "timeline-card card border-grey border-lighten-2", 4, "blockUI", "blockUIMessage"], [1, "timeline-item", "mt-3"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-14.png", "alt", "avatar"], [1, "timeline-item", "block"], ["title", "", "data-context", "inverse", "data-container", "body", "data-original-title", "block highlight", 1, "border-silc", 3, "routerLink"], [1, "timeline-card", "card", "border-grey", "border-lighten-2"], [1, "card-header"], [1, "text-center"], [1, "la", "la-bar-chart", "font-medium-4"], [1, "timeline-date"], [1, "card-content"], [1, "card-body"], [1, "chart-container"], ["id", "stacked-column", 1, "height-400", "overflow-hidden", "echart-container"], ["echarts", "", 3, "options"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-5.png", "alt", "avatar"], [1, "timeline-card", "card", "text-white"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "bg-overlay"], [1, "card-title", "white"], [1, "card-text"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Nullam facilisis fermentum", 1, "bg-teal", "bg-lighten-1"], [1, "la", "la-check-square-o"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Nullam facilisis fermentum", 1, "bg-purple", "bg-lighten-1"], [1, "la", "la-area-chart"], [3, "routerLink"], [1, "card-subtitle", "text-muted", "mb-0", "pt-1"], [1, "font-small-3"], ["echarts", "", 1, "height-400", "overflow-hidden", "echart-container", 3, "options"], [1, "card-footer", "px-0", "py-0"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "placeholder", "Write comments...", 1, "form-control"], [1, "form-control-position"], [1, "mt-1"], [1, "la", "la-file-image-o", "font-medium-4"], [1, "card-body", "my-gallery"], [1, "col-md-3", "col-sm-6", "col-12"], [3, "images"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Application API Support", 1, "bg-warning", "bg-darken-1"], [1, "la", "la-life-ring"], [1, "media"], [1, "media-left", "mr-1"], [1, "avatar", "avatar-md", "avatar-busy"], ["src", "../../../../../assets/images/portrait/small/avatar-s-18.png", "alt", "avatar"], [1, "media-body"], [1, "badge", "badge-pill", "badge-warning", "float-right"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "list-inline"], [1, "pr-1"], [1, "", 3, "routerLink"], [1, "la", "la-commenting-o"], [1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-4.png", "alt", "avatar"], [1, "text-bold-600", "mb-0"], ["src", "../../../../../assets/images/portrait/small/avatar-s-6.png", "alt", "avatar"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Quote of the day", 1, "bg-amber", "bg-darken-1"], [1, "la", "la-smile-o"], ["src", "../../../../../assets/images/portfolio/width-600/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "card-bodyquote"], ["title", "Source Title"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardContent", ""], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-1.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["mCardBody", ""], [1, "la", "la-thumbs-o-up"], [1, "la", "la-share-alt"], ["mCardFooter", ""], [1, "media-left", "pr-1"], ["src", "../../../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"], [1, "m-0"], [1, "list-inline", "mb-1"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", "https://player.vimeo.com/video/118589137?title=0&byline=0"], [1, "list-group"], [1, "list-group-item"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "input-1", 1, "custom-control-input"], ["for", "input-1", 1, "custom-control-label"], ["type", "checkbox", "id", "input-2", "checked", "", 1, "custom-control-input"], ["for", "input-2", "checked", "checked", 1, "custom-control-label"], ["type", "checkbox", "id", "input-3", 1, "custom-control-input"], ["for", "input-3", 1, "custom-control-label"], ["type", "checkbox", "id", "input-4", "disabled", "", "checked", "", 1, "custom-control-input"], ["for", "input-4", 1, "custom-control-label"], ["type", "checkbox", "id", "input-5", 1, "custom-control-input"], ["for", "input-5", 1, "custom-control-label"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13)(14, "div", 5)(15, "div", 14)(16, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Jose Diaz");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19)(23, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nav", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "nav", 25)(31, "ul", 26)(32, "nav", 27)(33, "div", 28)(34, "ul", 29)(35, "li", 30)(36, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Timeline ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "(current)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li", 34)(42, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li", 34)(46, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li", 34)(50, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Favourites");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li", 34)(54, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Notifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "section", 39)(58, "h3", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li", 43)(63, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "li", 46)(69, "div", 47)(70, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, UserProfileComponent_div_72_Template, 72, 1, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li", 51)(74, "div", 47)(75, "span", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "img", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, UserProfileComponent_div_77_Template, 34, 1, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li", 54)(79, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 56)(82, "div", 57)(83, "div", 58)(84, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Campaign Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "18 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 61)(93, "div", 62)(94, "div", 63)(95, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "div", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "li", 43)(100, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " 2016");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "li", 46)(106, "div", 47)(107, "span", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "img", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "img", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 70)(112, "h4", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Good Morning");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "p", 72)(115, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "26 Aug, 2016 at 2.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "p", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "li", 51)(122, "div", 47)(123, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, UserProfileComponent_div_125_Template, 42, 1, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "li", 46)(127, "div", 47)(128, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 56)(131, "div", 57)(132, "h4", 15)(133, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Punch Card Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "p", 78)(136, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "6 Feb, 2016 at 6.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 61)(139, "div", 61)(140, "div", 62)(141, "p", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 81)(146, "div", 62)(147, "fieldset", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "li", 43)(154, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, " 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "li", 54)(160, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 56)(163, "div", 57)(164, "div", 58)(165, "p", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "i", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Media Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "July 1, 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 61)(174, "div", 87)(175, "div", 5)(176, "div", 88)(177, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 88)(180, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 88)(183, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 88)(186, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 5)(189, "div", 88)(190, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 88)(193, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 88)(196, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 88)(199, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 5)(202, "div", 88)(203, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 88)(206, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 88)(209, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 88)(212, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "ngxps-gallery", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "ngxps-lightbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "li", 46)(216, "div", 47)(217, "span", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](218, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "div", 56)(220, "div", 57)(221, "div", 92)(222, "div", 93)(223, "a", 77)(224, "span", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "img", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 96)(228, "h4", 15)(229, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Application API Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "p", 78)(232, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "15 Oct, 2015 at 8.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "span", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "High");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "img", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 61)(239, "div", 62)(240, "p", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "ul", 99)(243, "li", 100)(244, "a", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](245, "span", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, " Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 81)(248, "div", 62)(249, "div", 92)(250, "div", 93)(251, "a", 77)(252, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "div", 96)(255, "p", 105)(256, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](257, "Crystal Lawson");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 92)(261, "div", 93)(262, "a", 77)(263, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "img", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "div", 96)(266, "p", 105)(267, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "Rafila G\u0103itan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "fieldset", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "li", 51)(276, "div", 47)(277, "span", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 56)(280, "div", 57)(281, "h4", 15)(282, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "Quote of the day");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "p", 78)(285, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "03 March, 2015 at 5 P.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "img", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "div", 62)(290, "blockquote", 110)(291, "p", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](293, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Someone famous in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "cite", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, " - Source Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "ul", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](298, "li", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "li", 43)(300, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](301, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "Founded in 2012");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "projectWorkOne")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "sofiaOrav")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.chartOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "sofiaOravTwo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.option);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("images", ctx.image12);
    }
  },
  dependencies: [_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, ngx_echarts__WEBPACK_IMPORTED_MODULE_3__.NgxEchartsDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__["ɵc"], _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__.GalleryComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .my-gallery img{\n  max-width: 100% !important;\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n}\n[_nghost-%COMP%]     .ngx-gallery {\n  grid-template-columns: auto !important \n  ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtFQUNBO0FBQ0YiLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIWltcG9ydGFudCBcbiAgO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy91c2VyL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7RUFDQTtBQUNGO0FBQ0EsNHVDQUE0dUMiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIWltcG9ydGFudCBcbiAgO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectWorkOne')], UserProfileComponent.prototype, "blockUIProjectWorkOne", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('sofiaOrav')], UserProfileComponent.prototype, "blockUISofiaOrav", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('sofiaOravTwo')], UserProfileComponent.prototype, "blockUISofiaOravTwo", void 0);

/***/ }),

/***/ 82971:
/*!***************************************************!*\
  !*** ./src/app/content/pages/user/user.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-cards/user-cards.component */ 24121);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile/user-profile.component */ 7413);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ 86196);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
















class UserModule {}
UserModule.ɵfac = function UserModule_Factory(t) {
  return new (t || UserModule)();
};
UserModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: UserModule
});
UserModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsModule.forRoot({
    echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 72750))
  }), ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_10__.NgxPhotoswipeModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_11__.BlockUIModule.forRoot({
    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([{
    path: 'user-profile',
    component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent
  }, {
    path: 'user-cards',
    component: _user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_0__.UserCardsComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_user_cards_user_cards_component__WEBPACK_IMPORTED_MODULE_0__.UserCardsComponent, _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__.UserProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_7__.NgxEchartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_10__.NgxPhotoswipeModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_11__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_content_pages_user_user_module_ts.js.map