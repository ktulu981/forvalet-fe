"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_pages_social-feed_social-feed_module_ts"],{

/***/ 71367:
/*!*****************************************************************!*\
  !*** ./src/app/content/pages/social-feed/social-feed.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialFeedModule": () => (/* binding */ SocialFeedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _social_feed_social_feed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-feed/social-feed.component */ 56281);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);








class SocialFeedModule {}
SocialFeedModule.ɵfac = function SocialFeedModule_Factory(t) {
  return new (t || SocialFeedModule)();
};
SocialFeedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SocialFeedModule
});
SocialFeedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__.MatchHeightModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
    path: 'social-feed',
    component: _social_feed_social_feed_component__WEBPACK_IMPORTED_MODULE_0__.SocialFeedComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SocialFeedModule, {
    declarations: [_social_feed_social_feed_component__WEBPACK_IMPORTED_MODULE_0__.SocialFeedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__.MatchHeightModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 56281:
/*!********************************************************************************!*\
  !*** ./src/app/content/pages/social-feed/social-feed/social-feed.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialFeedComponent": () => (/* binding */ SocialFeedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class SocialFeedComponent {
  constructor() {
    this.currentOrientation = 'horizontal';
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Social Feed',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Pages',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Social Feed',
        'isLink': false
      }]
    };
  }
}
SocialFeedComponent.ɵfac = function SocialFeedComponent_Factory(t) {
  return new (t || SocialFeedComponent)();
};
SocialFeedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SocialFeedComponent,
  selectors: [["app-social-feed"]],
  decls: 437,
  vars: 5,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "user-feed"], [1, "row"], [1, "col-12"], ["src", "../../../../../assets/images/gallery/timeline.jpg", "alt", "timeline image", 1, "img-fluid", "rounded"], [1, "user-data", "text-center", "bg-white", "rounded", "pb-2", "mb-md-2"], ["src", "../../../../../assets/images/portrait/large/avatar-l-1.png", "alt", "timeline image", 1, "img-fluid", "rounded-circle", "width-150", "profile-image", "shadow-lg", "border", "border-3"], [1, "mt-1", "mb-0"], [1, "m-0"], [1, "navbar", "navbar-expand-lg", "nav-margin"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "px-2", "active"], [1, "nav-link", 3, "routerLink"], [1, "nav-item", "px-2"], [1, "navbar-text"], [1, "navbar-nav"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "card", "shadow-none"], [1, "card-body"], [1, "card-title"], [1, "about-me", "mt-2"], [1, "card-title", "mb-1"], [1, "font-small-3"], [1, "favourite-show", "mt-2"], [1, "favourite-band", "mt-2"], [1, "favourite-food", "mt-2"], [1, "card", "shadow-none", "mt-2"], [1, "friends-list"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-1.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-2.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-3.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-4.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-5.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-6.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-7.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-8.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-30", "mrb-5px"], [1, "spotify-playlist"], [1, "row", "mt-2"], [1, "col-3"], ["src", "../../../../../assets/images/gallery/1.jpg", "alt", "", 1, "img-fluid", "width-30"], [1, "col-6", "font-small-3", "pl-0"], [1, "col-3", "p-0"], ["src", "../../../../../assets/images/gallery/2.jpg", "alt", "", 1, "img-fluid", "width-30"], ["src", "../../../../../assets/images/gallery/3.jpg", "alt", "", 1, "img-fluid", "width-30"], ["src", "../../../../../assets/images/gallery/4.jpg", "alt", "", 1, "img-fluid", "width-30"], ["src", "../../../../../assets/images/gallery/5.jpg", "alt", "", 1, "img-fluid", "width-30"], [1, "twitter-feed"], [1, "row", "mt-3"], ["src", "../../../../../assets/images/icons/twitter-avatar1.png", "alt", "", 1, "img-fluid"], [1, "col-9", "font-small-3", "pl-0"], [1, "col-12", "font-small-3", "mt-1"], [1, "primary", "m-0"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "catd-body"], [1, "feed-tabs"], ["ngbNav", "", 1, "justify-content-start", "nav", "nav-tabs"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "feather", "ft-activity"], [1, "feather", "ft-camera"], [1, "feather", "ft-edit-2"], [3, "ngbNavOutlet"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["id", "contact", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade"], [1, "write-post"], [1, "form-group"], ["id", "exampleFormControlTextarea1", "rows", "5", 1, "form-control", "border-0"], [1, "row", "px-1"], [1, "col-6", "pt-2"], [1, "feather", "ft-image", "ml-1", "mr-2", "mr-sm-0", "h3"], [1, "feather", "ft-monitor", "mr-2", "mr-sm-0", "h3"], [1, "feather", "ft-map-pin", "h3"], [1, "col-6", "pt-1"], ["type", "button", 1, "btn", "btn-primary", "btn-min-width", "btn-glow", "mr-1", "mb-1", "pull-right"], [1, "row", "p-2"], [1, "col-sm-6"], [1, "col-lg-4", "col-3"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-8.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-50"], [1, "col-lg-8", "col-7", "p-0"], [1, "feather", "ft-more-vertical", "pull-right"], [1, "col-sm-12", "px-2"], [1, "row", "p-1"], [1, "col-6"], [1, "col-4", "pr-0"], [1, "feather", "ft-heart", "h4", "align-middle", "danger"], [1, "col-8", "pl-0"], [1, "list-unstyled", "users-list", "m-0"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-original-title", "John Doe", 1, "avatar", "avatar-sm", "pull-up"], ["src", "../../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "Avatar", 1, "media-object", "rounded-circle"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-original-title", "Katherine Nichols", 1, "avatar", "avatar-sm", "pull-up"], ["src", "../../../../../assets/images/portrait/small/avatar-s-18.png", "alt", "Avatar", 1, "media-object", "rounded-circle"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "data-original-title", "Joseph Weaver", 1, "avatar", "avatar-sm", "pull-up"], ["src", "../../../../../assets/images/portrait/small/avatar-s-17.png", "alt", "Avatar", 1, "media-object", "rounded-circle"], [1, "avatar", "avatar-sm"], [1, "badge", "badge-info"], [1, "pull-right"], [1, "pr-1"], [1, "feather", "ft-message-square", "h4", "align-middle"], [1, "feather", "ft-corner-up-right", "h4", "align-middle"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-9.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-50"], [1, "col-sm-4", "col-3", "pr-0"], [1, "col-sm-8", "col-7", "pl-0"], [1, "col-sm-12", "px-2", "pb-2"], ["src", "../../../../../assets/images/gallery/party-flyer.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-4", "col-3", "pr-0"], [1, "col-lg-8", "col-7", "pl-0"], [1, "col-lg-3", "col-md-12", "col-sm-12"], [1, "card", "text-white", "bg-primary", "mb-3"], [1, "card-header"], [1, "feather", "ft-award", "white"], [1, "feather", "ft-more-horizontal", "white", "pull-right"], [1, "card-body", "pt-0"], ["src", "../../../../../assets/images/portrait/medium/avatar-m-4.png", "alt", "", 1, "img-fluid", "rounded-circle", "width-50"], [1, "white"], [1, "card-text"], [1, "last-photos"], [1, "col-4"], ["src", "../../../../../assets/images/backgrounds/bg-1.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-2.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-3.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-4.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-5.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-6.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-7.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-8.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], ["src", "../../../../../assets/images/backgrounds/bg-9.jpg", "alt", "", 1, "img-fluid", "mb-2", "rounded"], [1, "last-blog"], [1, "col-sm-12"], [1, "mt-1"], [1, "mt-3"], [1, "last-video"], [1, "embed-responsive", "embed-responsive-16by9"], ["src", "https://www.youtube.com/embed/fRh_vgS2dFE", "SameSite", "Secure", "allow", "autoplay; encrypted-media", "allowfullscreen", ""], ["width", "1280", "height", "720", "src", "https://www.youtube.com/embed/cBVGlBWQzuc", "SameSite", "Secure", "allow", "autoplay; encrypted-media", "allowfullscreen", ""]],
  template: function SocialFeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Elaine Dreyfuss");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "San Francisco, CA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nav", 13)(16, "ul", 14)(17, "li", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 17)(21, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Friends");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 17)(24, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18)(27, "ul", 19)(28, "li", 17)(29, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Photos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 17)(32, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 17)(35, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6)(38, "div", 20)(39, "div", 21)(40, "div", 22)(41, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Profile Intro");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 24)(45, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "About Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Hi, I\u2019m Elaine Dreyfuss, I\u2019m 26 & I work as a Digital Designer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27)(50, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Favourite TV Shows");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28)(55, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Favourite Music Bands");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Arctic Monkeys, Bloc Party, People of Interest, The Running Dead, Found, American Guy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 29)(60, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Favourite Food");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Pizza, burger, Guacamole, Tomato Salsa, Enchiladas, Guilt-Free Chilli");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 30)(65, "div", 22)(66, "div", 31)(67, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Friends List");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 32)(72, "img", 33)(73, "img", 34)(74, "img", 35)(75, "img", 36)(76, "img", 37)(77, "img", 38)(78, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 30)(80, "div", 22)(81, "div", 40)(82, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "My Spotify Playlist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 41)(85, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 44)(88, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "All Around");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "justin bieber");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 45)(93, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "4:56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 41)(96, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "img", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 44)(99, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "All I Want");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "justin bieber");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 45)(104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "4:56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 41)(107, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 44)(110, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "All Matters");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "justin bieber");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 45)(115, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "4:56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 41)(118, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 44)(121, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "As Long");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "justin bieber");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 45)(126, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "4:56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 41)(129, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 44)(132, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Beauty Beat");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "justin bieber");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 45)(137, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "4:56");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 30)(140, "div", 22)(141, "div", 50)(142, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Twitter Feed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 51)(146, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "img", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 53)(149, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "I just submitted this instagram Redesign concept");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "@james_spiegelOK");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 54)(154, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "#Dowboy #profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "2 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 51)(160, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "img", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 53)(163, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "I just submitted this instagram Redesign concept");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "@james_spiegelOK");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 54)(168, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "#Dowboy #profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "2 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 51)(174, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "img", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 53)(177, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "I just submitted this instagram Redesign concept");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "@james_spiegelOK");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 54)(182, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "#Dowboy #profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "2 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 56)(187, "div", 21)(188, "div", 57)(189, "div", 58)(190, "ul", 59, 60)(192, "li", 61)(193, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "li", 61)(197, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Multimedia");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "li", 61)(201, "a", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Blog Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "div", 68)(207, "div", 69)(208, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 71)(210, "div", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "textarea", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 74)(214, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "i", 76)(216, "i", 77)(217, "i", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 79)(219, "button", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Post Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 21)(222, "div", 57)(223, "div", 81)(224, "div", 82)(225, "div", 6)(226, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "img", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 85)(229, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Elaine Dreyfuss");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "2 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "i", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 71)(236, "div", 87)(237, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "When searching for videos of a different singer, Scooter Braun, a former marketing executive of So So Def Recordings, clicked on one of Bieber's 2007 videos by");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 88)(241, "div", 89)(242, "div", 6)(243, "div", 90)(244, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " 120");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 92)(248, "ul", 93)(249, "li", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "img", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "li", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "img", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "li", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "li", 100)(256, "span", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "+4 more");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 89)(259, "div", 102)(260, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, " 44");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "i", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, " 23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 21)(267, "div", 57)(268, "div", 81)(269, "div", 89)(270, "div", 6)(271, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "img", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 85)(274, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Elaine Dreyfuss");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "4 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "i", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 71)(281, "div", 87)(282, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "When searching for videos of a different singer, Scooter Braun, a former marketing executive of So So Def Recordings, clicked on one of Bieber's 2007 videos by");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 88)(286, "div", 89)(287, "div", 6)(288, "div", 107)(289, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, " 120");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 108)(293, "ul", 93)(294, "li", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "img", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "li", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "img", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "li", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "li", 100)(301, "span", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "+4 more");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 89)(304, "div", 102)(305, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, " 44");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "i", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, " 23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 21)(312, "div", 57)(313, "div", 81)(314, "div", 89)(315, "div", 6)(316, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "img", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 85)(319, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "Elaine Dreyfuss");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "2 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "i", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 71)(326, "div", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "img", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "hr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 88)(330, "div", 89)(331, "div", 6)(332, "div", 111)(333, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, " 120");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 112)(337, "ul", 93)(338, "li", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "img", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "li", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "img", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "li", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "li", 100)(345, "span", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "+4 more");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 89)(348, "div", 102)(349, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](350, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, " 44");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "i", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, " 23");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "div", 113)(356, "div", 114)(357, "div", 115)(358, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](359, "i", 116)(360, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "img", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "Today is");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "h3", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "Marina Valentine\u2019s Birthday!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "p", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "Some quick example text to build on the card.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "div", 30)(370, "div", 22)(371, "div", 122)(372, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "Last Photos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 6)(376, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](377, "img", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "img", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "img", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "img", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "img", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](387, "img", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "img", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](391, "img", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](393, "img", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 30)(395, "div", 22)(396, "div", 133)(397, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "Last Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 6)(401, "div", 134)(402, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "The emergence and growth of blogs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "p", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "Many blogs provide commentary on a particular subject or topic digital images.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "p", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "5 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "div", 134)(410, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "On 16 February 2011");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "p", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "Many blogs provide commentary on a particular subject or topic digital images.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "p", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "10 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](416, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "div", 134)(418, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "With posts written by large numbers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "p", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "Many blogs provide commentary on a particular subject or topic digital images.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "p", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "23 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "div", 30)(425, "div", 22)(426, "div", 137)(427, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Last Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](429, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "div", 6)(431, "div", 134)(432, "div", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](433, "iframe", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "iframe", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](191);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](189);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["[_nghost-%COMP%]     .nav.nav-tabs .nav-item .nav-link {\n    padding: 1.5rem 0.7rem !important;\n    display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNvY2lhbC1mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm5hdi5uYXYtdGFicyAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9zb2NpYWwtZmVlZC9zb2NpYWwtZmVlZC9zb2NpYWwtZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLG9CQUFvQjtBQUN4QjtBQUNBLHdiQUF3YiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwLjdyZW0gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_content_pages_social-feed_social-feed_module_ts.js.map