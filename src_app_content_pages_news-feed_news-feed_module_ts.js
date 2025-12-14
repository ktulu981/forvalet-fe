"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_pages_news-feed_news-feed_module_ts"],{

/***/ 62132:
/*!*************************************************************!*\
  !*** ./src/app/content/pages/news-feed/news-feed.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsFeedModule": () => (/* binding */ NewsFeedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-feed/news-feed.component */ 85926);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);







class NewsFeedModule {}
NewsFeedModule.ɵfac = function NewsFeedModule_Factory(t) {
  return new (t || NewsFeedModule)();
};
NewsFeedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: NewsFeedModule
});
NewsFeedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__.MatchHeightModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
    path: 'news-feed',
    component: _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_0__.NewsFeedComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NewsFeedModule, {
    declarations: [_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_0__.NewsFeedComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_2__.MatchHeightModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 85926:
/*!**************************************************************************!*\
  !*** ./src/app/content/pages/news-feed/news-feed/news-feed.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsFeedComponent": () => (/* binding */ NewsFeedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class NewsFeedComponent {
  constructor() {}
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'News Feed',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Pages',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'News Feed',
        'isLink': false
      }]
    };
  }
}
NewsFeedComponent.ɵfac = function NewsFeedComponent_Factory(t) {
  return new (t || NewsFeedComponent)();
};
NewsFeedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NewsFeedComponent,
  selectors: [["app-news-feed"]],
  decls: 233,
  vars: 1,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "news-feed"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "card", "news-feed-card-bg", "text-white"], ["src", "../../../../../assets/images/gallery/17.jpg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "card-img-overlay"], [1, "badge", "badge-danger", "badge-sm", "float-left"], [3, "routerLink"], [1, "card-title", "mt-2", "text-white"], [1, "font-small-3", "text-left"], [1, "text-white", "float-right", "font-small-1"], [1, "col-lg-6", "col-md-6"], [1, "card"], ["src", "../../../../../assets/images/gallery/20.jpg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "news-feed-overlay"], [1, "badge", "badge-success", "badge-sm", "float-right", "news-feed-badge", "news-feed-badge-nature", "position-absolute"], [1, "card-body"], [1, "text-dark", 3, "routerLink"], [1, "card-title", "font-small-3"], [1, "float-left", "font-small-1", "text-muted"], ["src", "../../../../../assets/images/gallery/29.jpg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "badge", "badge-primary", "badge-sm", "news-feed-badge", "news-feed-badge-real-estate", "position-absolute"], [1, "col-lg-12", "col-md-12"], ["src", "../../../../../assets/images/gallery/2.jpg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "badge", "badge-sm", "badge-primary", "float-left", "news-feed-badge", "news-feed-badge-trip", "position-absolute"], [1, "card-title", "font-medium-1"], [1, "col-xl-6", "col-lg-6", "col-md-6"], ["src", "../../../../../assets/images/gallery/34.png", "alt", "", 1, "card-img-top", "img-fluid"], [1, "text-muted"], [1, "float-left", "text-muted", "font-small-1"], ["src", "../../../../../assets/images/gallery/36.png", "alt", "", 1, "card-img-top", "img-fluid"], [1, "btn", "news-feed-btn", "btn-sm", "float-right", "btn-round", "btn-float", "btn-warning"], [1, "feather", "ft-arrow-right"], [1, "row", "mt-1"], [1, "card", "bg-gradient-x-danger", "mb-1"], [1, "card-title", "font-medium-1", "text-white"], [1, "font-small-2", "text-white"], [1, "float-left", "font-small-1", "text-white"], [1, "badge", "badge-secondary", "badge-sm", "float-right"], ["src", "../../../../../assets/images/gallery/19.jpg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "badge", "badge-info", "badge-sm", "float-right", "news-feed-badge", "news-feed-badge-radio", "position-absolute"], [1, "card-title", "font-small-2"], ["href", "", 1, "text-dark"], ["src", "../../../../../assets/images/gallery/16.jpg", "alt", "", 1, "card-img-top", "img-fluid"], [1, "badge", "badge-danger", "badge-sm", "float-left", "news-feed-badge", "news-feed-badge-travel", "position-absolute"], [1, "card", "bg-gradient-x-primary"], [1, "font-small-3", "text-white"], [1, "feather", "ft-heart", "pr-1"], [1, "feather", "ft-share"], [1, "col-lg-4", "col-md-12"], [1, "card-header"], [1, "float-right"], [1, "feather", "ft-chevron-up"], [1, "card-body", "p-0"], [1, "list-group"], [1, "list-group-item", "news-feed-item-1", "pl-2"], [1, "font-small-3", "news-feed-item-text"], [1, "font-small-1", "text-muted", "float-right", "p-md-2", "p-sm-2", "news-feed-item-text-time"], [1, "list-group-item", "news-feed-item-img"], ["src", "../../../../../assets/images/gallery/18.jpg", "alt", "", 1, "img-fluid"], [1, "list-group-item", "news-feed-item-2"], [1, "list-group-item", "news-feed-item-3"], [1, "list-group-item", "news-feed-item-4"], [1, "list-group-item", "news-feed-item-5"], [1, "card-footer", "p-1"], [1, "btn", "btn-outline-success", "btn-sm", "mx-auto"], [1, "col-lg-12"], [1, "card", "tech-card-bg"], [1, "card-header", "font-medium-1"], [1, "badge", "badge-success", "badge-sm", "float-right"], [1, "font-small-3", "tech-card-text"], [1, "btn", "btn-primary", "btn-sm", "float-left"], [1, "card-body", "news-feed-food-card-bg"], [1, "badge", "badge-primary", "badge-sm", "float-right"], [1, "btn", "btn-info", "btn-sm"], [1, "font-small-1", "float-right", "p-md-2", "p-sm-2", "float-right", "text-white"], [1, "col-xl-3", "col-lg-3", "col-md-3"], [1, "card-body", "news-feed-food-card2-bg"], [1, "card-title", "font-small-3", "text-white"], [1, "btn", "btn-warning", "btn-sm"], [1, "card-body", "news-feed-food-card3-bg"], [1, "btn", "btn-primary", "btn-sm"]],
  template: function NewsFeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10)(11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Social");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 12)(14, "h2", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Social Media, Selfies, and Addiction. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Selfie-taking is more than just the taking of a photograph and can include the editing of the colour and contrast, changing backgrounds, and adding other effects. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Oct 10, 9:13am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6)(21, "div", 16)(22, "div", 17)(23, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19)(26, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Nature");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "a", 22)(30, "h6", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Why Nature beats Nurture when it comes to success ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Oct 1, 3:00pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16)(35, "div", 17)(36, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19)(39, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Real Estate ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21)(42, "a", 22)(43, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Real Estate In 2030 Will Be Radically Different");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Oct 4, 10:05am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6)(48, "div", 27)(49, "div", 17)(50, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 19)(53, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Trip");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 21)(56, "a", 12)(57, "h6", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Magical mystery tour: a road trip through Mexico ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Oct 20, 1:00pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 7)(62, "div", 6)(63, "div", 31)(64, "div", 17)(65, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 21)(68, "a", 22)(69, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "new portal shows what user data it keeps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 33)(72, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Oct 12, 10:50pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 31)(75, "div", 17)(76, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 21)(80, "a", 22)(81, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "AI On The Job:New Technologies ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 33)(84, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " Oct 14, 7:15am ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 38)(89, "div", 27)(90, "div", 39)(91, "div", 21)(92, "a", 12)(93, "h6", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Over 75 percent of Pixel users are on Android Pie ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " It speaks to the huge benefits that Google can bring to devices when it fully controls the hardware and software experience like Apple does ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Oct 15, 12:50pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Android");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 6)(102, "div", 31)(103, "div", 17)(104, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 19)(107, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 21)(110, "h6", 46)(111, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Radio, what's new... someone still loves you ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Oct 21, 8:50pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 31)(116, "div", 17)(117, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 19)(120, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Travel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 21)(123, "a", 12)(124, "h6", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " Trains And Anything But Automobiles ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Oct 25, 7:50pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 6)(129, "div", 27)(130, "div", 50)(131, "div", 21)(132, "a", 12)(133, "h6", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, " The 13 Scariest Horror Games You Should Play For Halloween ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " Genre classics like Silent Hill 2, Resident Evil Remake, and Dead Space are represented here.There's a lot of horror-related media out right now that isn't just games. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 12)(138, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "i", 52)(140, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 54)(142, "div", 6)(143, "div", 27)(144, "div", 17)(145, "div", 55)(146, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Popular");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 58)(151, "ul", 59)(152, "li", 60)(153, "a", 22)(154, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Top 10 New Rules Of Marketing With Technology To Win");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Oct 15, 11:00am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li", 63)(159, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li", 65)(162, "a", 22)(163, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Health benefits of social media: Here's all you need to know");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Oct 9, 5:00am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "li", 66)(168, "a", 22)(169, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "5 workout apps and exercises to keep you fit this whole year");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Oct 7, 4:00pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "li", 67)(174, "a", 22)(175, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "What next for photography in the new age of smartphones?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Oct 4, 11:00am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li", 68)(180, "a", 22)(181, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Photography awards capture life at its wildest");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Oct 16, 3:00am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 69)(186, "button", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Load More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 6)(189, "div", 71)(190, "div", 72)(191, "h5", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, " Hong Kong's Tech Dreams Are Becoming a Nightmare ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Tech");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 21)(196, "h6", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, " At the time, Xiaomi Corp., China\u2019s hottest startup, was shopping around for a listing venue. Founder Lei Jun was determined to retain control of the company through this ownership structure.Hong Kong had already missed out on Alibaba Group Holding Ltd.The situation was clear: Allow dual-class listings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "button", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 6)(201, "div", 31)(202, "div", 17)(203, "div", 77)(204, "a", 12)(205, "h6", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "The Best High-Fiber Foods, According to Experts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Food");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Oct15, 2:00am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 81)(214, "div", 17)(215, "div", 82)(216, "a", 12)(217, "h6", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "You're Sprinkling Plastic On Food ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "button", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Oct 14, 5:00am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 81)(224, "div", 17)(225, "div", 85)(226, "a", 12)(227, "h6", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Foods With Lowest Fat Content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "button", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Oct 14, 5:00am");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWZlZWQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9uZXdzLWZlZWQvbmV3cy1mZWVkL25ld3MtZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_content_pages_news-feed_news-feed_module_ts.js.map