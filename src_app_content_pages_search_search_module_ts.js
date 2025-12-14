"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_pages_search_search_module_ts"],{

/***/ 61913:
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/search/search-images/search-images.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchImagesComponent": () => (/* binding */ SearchImagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);





const _c0 = function () {
  return ["/search/searchWebsite"];
};
const _c1 = function () {
  return ["/search/searchImages"];
};
const _c2 = function () {
  return ["/search/searchVideos"];
};
class SearchImagesComponent {
  constructor() {
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
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Search Images',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Search',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Search Images',
        'isLink': false
      }]
    };
  }
}
SearchImagesComponent.ɵfac = function SearchImagesComponent_Factory(t) {
  return new (t || SearchImagesComponent)();
};
SearchImagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SearchImagesComponent,
  selectors: [["app-search-images"]],
  decls: 220,
  vars: 19,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "search-images", 1, "card", "overflow-hidden"], [1, "card-header"], [1, "card-title"], [1, "heading-elements"], [1, "list-inline", "mb-0"], ["data-action", "collapse"], [1, "feather", "ft-minus"], ["data-action", "reload"], [1, "feather", "ft-rotate-cw"], ["data-action", "expand"], [1, "feather", "ft-maximize"], ["data-action", "close"], [1, "feather", "ft-x"], [1, "card-content", "collapse", "show"], [1, "card-body", "pb-0"], [1, "form-group", "position-relative", "mb-0"], ["type", "text", "id", "iconLeft1", "placeholder", "Explore Modern ...", 1, "form-control", "form-control-xl", "input-xl"], [1, "form-control-position"], [1, "feather", "ft-mic", "font-medium-4"], ["id", "search-nav", 1, "card-body"], [1, "nav", "nav-inline"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "la", "la-link"], [1, "nav-link", "active", 3, "routerLink"], [1, "la", "la-file-image-o"], [1, "la", "la-file-video-o"], [1, "la", "la-map-o"], ["ngbDropdown", "", 1, "dropdown", "nav-item", "float-right"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "dropdown-toggle", 3, "routerLink"], [1, "la", "la-cog"], [1, "caret"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "dropdown-link", 3, "routerLink"], ["id", "search-results"], [1, "card-body", "my-gallery"], [1, "row"], [1, "card", "card-img-top", "border-grey", "border-lighten-2", "col-md-3"], [3, "images"], [1, "card-body", "px-0"], [1, "font-small-2", "text-muted", "float-right"], [1, "card-text"], [1, "text-center"], ["aria-label", "Page navigation"], [1, "pagination", "pagination-separate", "pagination-round", "pagination-flat"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", 3, "routerLink"], ["aria-hidden", "true"], [1, "sr-only"], [1, "page-link", 3, "routerLink"], [1, "page-item", "active"], ["aria-label", "Next", 1, "page-link", 3, "routerLink"]],
  template: function SearchImagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Images search results");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li")(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "fieldset", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 24)(30, "ul", 25)(31, "li", 26)(32, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Website");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 26)(36, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Images");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 26)(40, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 26)(44, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 33)(48, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 35)(50, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ul", 37)(52, "li", 38)(53, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Languages");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 38)(56, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Search Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li", 38)(59, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li", 38)(62, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Search Help");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 40)(65, "div", 41)(66, "div", 42)(67, "div", 43)(68, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 45)(71, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Maecenas solitudin ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "720 x 600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Nulla ac vulputate mauris. Nam tincidunt odio purus..");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 43)(78, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 45)(81, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Aliquam vel nib ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "480 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Phasellus vitae aliquam felis, et bibendum orci..");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 43)(88, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 45)(91, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Molestie accumsan ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "480 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Maecenas commodo odio sed nibh viverra vestibulum.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 43)(98, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 45)(101, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Nam eu efficitur ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "500 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Donec porttitor massa vitae leo rutrum viverra.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 42)(108, "div", 43)(109, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 45)(112, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Porttitor donec ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "560 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Sed suscipit velit vitae justo pharetra.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 43)(119, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 45)(122, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Velit et interdum ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "500 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Duis auctor velit et interdum maximus..");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 43)(129, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 45)(132, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Natoque efficitur ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "800 x 600");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Cum sociis natoque penatibus et magnis dis.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 43)(139, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 45)(142, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Pharetra enim id ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "500 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Mauris imperdiet enim id urna pharetra.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 42)(149, "div", 43)(150, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 45)(153, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Integer fermentum ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "380 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Vel lacinia cursus, est dui tincidunt sem.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 43)(160, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 45)(163, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Donec congue nec ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "500 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Morbi laoreet ultrices mi ut imperdiet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 43)(170, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 45)(173, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Vivamus eget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "500 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "This is a longer card with supporting text below.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 43)(180, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "ngxps-gallery", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 45)(183, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Aenean pharetra ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "500 x 360");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Ligula ornare velit porttitor viverra et a felis.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "ngxps-lightbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 48)(191, "nav", 49)(192, "ul", 50)(193, "li", 51)(194, "a", 52)(195, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "\u00AB Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "li", 51)(200, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "li", 51)(203, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "li", 56)(206, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "li", 51)(209, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "li", 51)(212, "a", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "li", 51)(215, "a", 57)(216, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Next \u00BB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("images", ctx.image12);
    }
  },
  dependencies: [_fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_2__["ɵc"], _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["[_nghost-%COMP%]     .my-gallery img{\n    height: 168px ;\n    margin-right: 1px;\n    margin-left: 1px;\n    max-width: 100%\n  }\n[_nghost-%COMP%]     .ngx-gallery {\n  grid-template-columns: auto !important \n  ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pbWFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCO0VBQ0Y7QUFDRjtFQUNFO0VBQ0E7QUFDRiIsImZpbGUiOiJzZWFyY2gtaW1hZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xuICAgIGhlaWdodDogMTY4cHggO1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlXG4gIH1cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIWltcG9ydGFudCBcbiAgO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9zZWFyY2gvc2VhcmNoLWltYWdlcy9zZWFyY2gtaW1hZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtFQUNGO0FBQ0Y7RUFDRTtFQUNBO0FBQ0Y7O0FBRUEsb21CQUFvbUIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xuICAgIGhlaWdodDogMTY4cHggO1xuICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlXG4gIH1cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIWltcG9ydGFudCBcbiAgO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 41025:
/*!*******************************************************************************!*\
  !*** ./src/app/content/pages/search/search-videos/search-videos.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchVideosComponent": () => (/* binding */ SearchVideosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




const _c0 = function () {
  return ["/search/searchWebsite"];
};
const _c1 = function () {
  return ["/search/searchImages"];
};
const _c2 = function () {
  return ["/search/searchVideos"];
};
class SearchVideosComponent {
  constructor() {}
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Search Videos',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Search',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Search Videos',
        'isLink': false
      }]
    };
  }
}
SearchVideosComponent.ɵfac = function SearchVideosComponent_Factory(t) {
  return new (t || SearchVideosComponent)();
};
SearchVideosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SearchVideosComponent,
  selectors: [["app-search-videos"]],
  decls: 402,
  vars: 7,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "search-videos", 1, "card", "overflow-hidden"], [1, "card-header"], [1, "card-title"], [1, "heading-elements"], [1, "list-inline", "mb-0"], ["data-action", "collapse"], [1, "feather", "ft-minus"], ["data-action", "reload"], [1, "feather", "ft-rotate-cw"], ["data-action", "expand"], [1, "feather", "ft-maximize"], ["data-action", "close"], [1, "feather", "ft-x"], [1, "card-content", "collapse", "show"], [1, "card-body", "pb-0"], [1, "form-group", "position-relative", "mb-0"], ["type", "text", "id", "iconLeft1", "placeholder", "Explore Modern ...", 1, "form-control", "form-control-xl", "input-xl"], [1, "form-control-position"], [1, "feather", "ft-mic", "font-medium-4"], ["id", "search-nav", 1, "card-body"], [1, "nav", "nav-inline"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "la", "la-link"], [1, "la", "la-file-image-o"], [1, "nav-link", "active", 3, "routerLink"], [1, "la", "la-file-video-o"], [1, "la", "la-map-o"], ["ngbDropdown", "", 1, "dropdown", "nav-item", "float-right"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "dropdown-toggle", 3, "routerLink"], [1, "la", "la-cog"], [1, "caret"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "dropdown-link", 3, "routerLink"], ["id", "search-results", 1, "card-body"], [1, "row"], [1, "col-xl-8"], [1, "text-muted", "font-small-3"], [1, "media-list"], [1, "lead", "mb-0", "col-12"], [3, "routerLink"], [1, "text-bold-600"], [1, "col-lg-3", "col-12"], ["width", "150", "height", "80", "src", "https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&controls=0&showinfo=0", 1, "border-0"], [1, "col-lg-9", "col-12"], [1, "mb-0"], [1, "teal", "darken-1", 3, "routerLink"], ["aria-hidden", "true", 1, "la", "la-angle-down"], [1, "list-inline", "list-inline-pipe", "text-muted"], ["src", "https://player.vimeo.com/video/118589137?title=0&byline=0", "width", "150", "height", "80", 1, "border-0"], ["src", "https://player.vimeo.com/video/173541384?color=ff9933&title=0&byline=0", "width", "150", "height", "80", 1, "border-0"], [1, "text-muted"], ["width", "150", "height", "80", "src", "https://player.vimeo.com/video/161753790?color=ff9933&title=0&byline=0", 1, "border-0"], ["src", "https://www.youtube.com/embed/hunYLg8I1Os?rel=0&controls=0&showinfo=0", "width", "150", "height", "80", 1, "border-0"], ["width", "150", "height", "80", "src", "https://www.youtube.com/embed/zqDxfHvZ3DU?rel=0&controls=0&showinfo=0", 1, "border-0"], ["width", "150", "height", "80", "src", "https://www.youtube.com/embed/AVWPWYYIcpk?rel=0&controls=0&showinfo=0", 1, "border-0"], ["width", "150", "height", "80", "src", "https://www.youtube.com/embed/SzCgp-FEU50?rel=0&controls=0&showinfo=0", 1, "border-0"], [1, "text-center"], ["aria-label", "Page navigation"], [1, "pagination", "pagination-separate", "pagination-round", "pagination-flat"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", 3, "routerLink"], ["aria-hidden", "true"], [1, "sr-only"], [1, "page-link", 3, "routerLink"], [1, "page-item", "active"], ["aria-label", "Next", 1, "page-link", 3, "routerLink"], [1, "col-xl-4"], [1, "card", "border-grey", "border-lighten-2"], [1, "card-body", "px-0"], [1, "card-subtitle", "text-muted"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", "https://www.youtube.com/embed/cUd8GtQvvsw?rel=0&controls=0&showinfo=0", 1, "border-0"], [1, "card-text"], [1, "list-group"], [1, "list-group-item"], [1, "py-1", "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "col-md-4"], ["src", "https://www.youtube.com/embed/tr7AcjcE0BQ?rel=0&controls=0&showinfo=0", 1, "border-0"], [1, "font-small-2", 3, "routerLink"], ["src", "https://www.youtube.com/embed/f7_4QoZwH54?rel=0&controls=0&showinfo=0", 1, "border-0"], ["src", "https://www.youtube.com/embed/szkFREXvYW4?rel=0&controls=0&showinfo=0", 1, "border-0"], ["src", "https://www.youtube.com/embed/gH-XNZRN4J8?rel=0&controls=0&showinfo=0", 1, "border-0"], ["src", "https://www.youtube.com/embed/RcrLLooXgSY?rel=0&controls=0&showinfo=0", 1, "border-0"], ["src", "https://www.youtube.com/embed/Gy8-uhr-EzE?rel=0&controls=0&showinfo=0", 1, "border-0"]],
  template: function SearchVideosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Videos search results");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li")(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "fieldset", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 24)(30, "ul", 25)(31, "li", 26)(32, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Website");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 26)(36, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Images");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 26)(40, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 26)(44, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 33)(48, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 35)(50, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ul", 37)(52, "li", 38)(53, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Languages");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 38)(56, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Search Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li", 38)(59, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li", 38)(62, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Search Help");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 40)(65, "div", 41)(66, "div", 42)(67, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "About 56,000 results (0.36 seconds) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul", 44)(70, "li", 41)(71, "p", 45)(72, "a", 46)(73, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "The Table");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " - for what do you feel you would bring to");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "iframe", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 50)(79, "p", 51)(80, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "http://youtube.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ul", 54)(87, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "By PlayStation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "5M Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "2 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p")(94, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Proceduralize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " Not the long pole in my tent. Get buy-in pixel pushing, and quick win . What's the status on the deliverables for eow? goalposts golden goose, and take five.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li", 41)(98, "p", 45)(99, "a", 46)(100, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Microdosing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " - deep v actually schlitz chia");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "iframe", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 50)(106, "p", 51)(107, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "http://themeforest.net/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "/microdosing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "ul", 54)(114, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "By Colonel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "1M Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Aug 3, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Lobortis erat rutrum dignissim. Colonel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Responsive Bootstrap Admin Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, " Ut tellus dui, rhoncus quis vulputate non, sodales ac ex. Fusce interdum efficitur purus quis viverra. Vivamus eros urna, scelerisque ac enim...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li", 41)(126, "p", 45)(127, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Aesthetic neutra ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "freegan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, ", mlkshk literally");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "iframe", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 50)(135, "p", 51)(136, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "http://envato.com/literally/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "ul", 54)(143, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "By Freegan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "20K Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "June 18, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "p")(150, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "June 30, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Humblebrag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " mixtape tumblr small batch, marfa blog mumblecore retro sustainable bitters normcore brunch whatever helvetica. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Humblebrag mumblecore ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "beard irony, XOXO craft beer kogi letterpress freegan vegan disrupt...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li", 41)(159, "p", 45)(160, "a", 46)(161, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "iCell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, " - disrupt butcher pitchfork.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "iframe", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 50)(167, "p", 51)(168, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "http://google.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "icell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "ul", 54)(175, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "By Kogi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "8K Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "March 31, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p")(182, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "March 23, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Church-key selfies bitters man bun post-ironic. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "8-bit 3 wolf moon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, " drinking vinegar, direct trade plaid cred hashtag offal. Fap XOXO chambray, intelligentsia kogi keytar flexitarian cardigan kale chips food truck.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "li", 41)(189, "p", 45)(190, "a", 46)(191, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Run it");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, " - up the flagpole, ping the boss");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "iframe", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 50)(197, "p", 51)(198, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "http://mail.example.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "run");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "ul", 54)(205, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "By Jerk");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "850 Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Feb 28, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Pixel pushing horsehead offer that jerk from finance really threw me under the bus, but best practices new economy and take five, punch the tree, and come back in here with a clear head... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "li", 41)(214, "p", 45)(215, "a", 46)(216, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Keytar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, " - jean shorts disrupt poutine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "iframe", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "div", 50)(222, "p", 51)(223, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "http://demo.keytar.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "jean");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "ul", 54)(230, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "By Chillwave");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "380 Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Feb 14, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "p")(237, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Jan 14, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Brooklyn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, " ethical sartorial gastropub shabby chic photo booth. Bushwick roof party kogi pitchfork food truck heirloom, street art occupy blog try-hard single-origin coffee chillwave.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "li", 41)(243, "p", 45)(244, "a", 46)(245, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Helicopter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, " - view drop-dead date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "iframe", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 50)(251, "p", 51)(252, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "http://demo.helicopter.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "ul", 54)(259, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "By Python");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, "150 Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "Jan 23, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "p")(266, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Sept 18, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " Sacred cow execute pig in a python. We need to socialize the comms with the wider stakeholder community collaboration through advanced technlogy three-martini lunch.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "li", 41)(270, "p", 45)(271, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Letterpress ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "freegan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, ", mlkshk literally");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "iframe", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "div", 50)(279, "p", 51)(280, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, "http://envato.com/literally/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "ul", 54)(287, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "By XOXO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "12 Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Jan 2, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "p")(294, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "June 30, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297, "Letterpress");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, " mixtape tumblr small batch, marfa blog mumblecore retro sustainable bitters normcore brunch whatever helvetica. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Humblebrag mumblecore ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "beard irony, XOXO craft beer kogi letterpress freegan vegan disrupt...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 63)(303, "nav", 64)(304, "ul", 65)(305, "li", 66)(306, "a", 67)(307, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "\u00AB Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "li", 66)(312, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "li", 66)(315, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](317, "li", 71)(318, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "li", 66)(321, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](322, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "li", 66)(324, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "li", 66)(327, "a", 72)(328, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](329, "Next \u00BB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 73)(333, "div", 74)(334, "div", 75)(335, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Fusce interdum");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "h6", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Vivamus eros urna scelerisque");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "iframe", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 75)(342, "p", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, "Wikipedia");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "ul", 80)(347, "li", 81)(348, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](349, "By :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, " Jhon doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "li", 81)(352, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "Views :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, " 11M Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "li", 81)(356, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, "Released :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, " 16 Jan, 2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 82)(360, "a", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "span", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "a", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "span", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "a", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "span", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "a", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "span", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 75)(369, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Related videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 41)(372, "div", 91)(373, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "iframe", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "a", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "Xbox One S");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 91)(378, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "iframe", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "a", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "google I/O");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div", 91)(383, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](384, "iframe", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "a", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Windows 10 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 91)(388, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "iframe", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "a", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Galaxy S7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 91)(393, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](394, "iframe", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "a", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](396, "VanMoof ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 91)(398, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "iframe", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "a", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "OnePlus 3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtdmlkZW9zLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9zZWFyY2gvc2VhcmNoLXZpZGVvcy9zZWFyY2gtdmlkZW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 66737:
/*!*********************************************************************************!*\
  !*** ./src/app/content/pages/search/search-website/search-website.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchWebsiteComponent": () => (/* binding */ SearchWebsiteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




const _c0 = function () {
  return ["/search/searchWebsite"];
};
const _c1 = function () {
  return ["/search/searchImages"];
};
const _c2 = function () {
  return ["/search/searchVideos"];
};
class SearchWebsiteComponent {
  constructor() {}
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Search Website',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Search',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Search Website',
        'isLink': false
      }]
    };
  }
}
SearchWebsiteComponent.ɵfac = function SearchWebsiteComponent_Factory(t) {
  return new (t || SearchWebsiteComponent)();
};
SearchWebsiteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SearchWebsiteComponent,
  selectors: [["app-search-website"]],
  decls: 467,
  vars: 7,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "search-website", 1, "card", "overflow-hidden"], [1, "card-header"], [1, "card-title"], [1, "heading-elements"], [1, "list-inline", "mb-0"], ["data-action", "collapse"], [1, "feather", "ft-minus"], ["data-action", "reload"], [1, "feather", "ft-rotate-cw"], ["data-action", "expand"], [1, "feather", "ft-maximize"], ["data-action", "close"], [1, "feather", "ft-x"], [1, "card-content", "collapse", "show"], [1, "card-body", "pb-0"], [1, "form-group", "position-relative", "mb-0"], ["type", "text", "id", "iconLeft1", "placeholder", "Explore Modern ...", 1, "form-control", "form-control-xl", "input-xl"], [1, "form-control-position"], [1, "feather", "ft-mic", "font-medium-4"], ["id", "search-nav", 1, "card-body"], [1, "nav", "nav-inline"], [1, "nav-item"], [1, "nav-link", "active", 3, "routerLink"], [1, "la", "la-link"], [1, "nav-link", 3, "routerLink"], [1, "la", "la-file-image-o"], [1, "la", "la-file-video-o"], [1, "la", "la-map-o"], ["ngbDropdown", "", 1, "dropdown", "nav-item", "float-right"], ["ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "dropdown-toggle", 3, "routerLink"], [1, "la", "la-cog"], [1, "caret"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item"], [1, "dropdown-link", 3, "routerLink"], ["id", "search-results", 1, "card-body"], [1, "row"], [1, "col-12", "col-md-8"], [1, "text-muted", "font-small-3"], [1, "media-list", "p-0"], [1, "media"], [1, "media-body"], [1, "lead", "mb-0"], [3, "routerLink"], [1, "text-bold-600"], [1, "mb-0"], [1, "teal", "darken-1", 3, "routerLink"], ["aria-hidden", "true", 1, "la", "la-angle-down"], [1, "list-inline", "list-inline-pipe", "text-muted"], [1, "la", "la-star", "yellow", "darken-2"], [1, "text-muted"], [1, "website-detailed-list", "mx-1", "my-1"], [1, "col-md-6"], [1, "content-group"], [1, "media-left"], ["src", "../../../../../assets/images/portfolio/width-600/portfolio-14.jpg", "alt", "Generic placeholder image", 1, "media-object", "width-150"], [1, "media-body", "media-search"], [1, "la", "la-star-half", "yellow", "darken-2"], [1, "media-left", "media-search"], ["width", "150", "height", "110", "src", "https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&controls=0&showinfo=0"], [1, "la", "la-star-outline", "yellow", "darken-2"], [1, "text-center"], ["aria-label", "Page navigation"], [1, "pagination", "pagination-separate", "pagination-round", "pagination-flat"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", 3, "routerLink"], ["aria-hidden", "true"], [1, "sr-only"], [1, "page-link", 3, "routerLink"], [1, "page-item", "active"], ["aria-label", "Next", 1, "page-link", 3, "routerLink"], [1, "col-12", "col-md-4"], [1, "card", "border-grey", "border-lighten-2"], [1, "card-body", "px-0"], [1, "card-subtitle", "text-muted"], ["src", "../../../../../assets/images/portfolio/width-600/portfolio-3.jpg", "alt", "logo", 1, "img-fluid"], [1, "card-text"], [1, "list-group"], [1, "list-group-item"], [1, "card-link", 3, "routerLink"], [1, "py-1", "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"], [1, "col-md-4"], ["src", "../../../../../assets/images/gallery/11.jpg", "alt", "Image description", 1, "img-fluid", "rounded"], [1, "font-small-2", 3, "routerLink"], ["src", "../../../../../assets/images/gallery/12.jpg", "alt", "Image description", 1, "img-fluid", "rounded"], ["src", "../../../../../assets/images/gallery/13.jpg", "alt", "Image description", 1, "img-fluid", "rounded"], ["src", "../../../../../assets/images/gallery/14.jpg", "alt", "Image description", 1, "img-fluid", "rounded"], ["src", "../../../../../assets/images/gallery/25.jpg", "alt", "Image description", 1, "img-fluid", "rounded"], ["src", "../../../../../assets/images/gallery/23.jpg", "alt", "Image description", 1, "img-fluid", "rounded"]],
  template: function SearchWebsiteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Website search results");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li")(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18)(24, "div", 19)(25, "fieldset", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 24)(30, "ul", 25)(31, "li", 26)(32, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Website");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 26)(36, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Images");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 26)(40, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 26)(44, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 33)(48, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 35)(50, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ul", 37)(52, "li", 38)(53, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Languages");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 38)(56, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Search Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li", 38)(59, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li", 38)(62, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Search Help");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 40)(65, "div", 41)(66, "div", 42)(67, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "About 68,00,000 results (0.58 seconds) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul", 44)(70, "li", 45)(71, "div", 46)(72, "p", 47)(73, "a", 48)(74, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Modern Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " - Clean Bootstrap 4 Dashboard HTML Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 50)(78, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "https://pixinvent.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ul", 53)(85, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 54)(87, "i", 54)(88, "i", 54)(89, "i", 54)(90, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " \u00A05 stars ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "590 votes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "US$ 28.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "In stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p")(99, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Feb 3, 2018 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " nec nisl lobortis erat rutrum dignissim. Colonel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Responsive Bootstrap Admin Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " Ut tellus dui, rhoncus quis vulputate non, sodales ac ex. Fusce interdum efficitur purus quis viverra. Vivamus eros urna, scelerisque ac enim a, pharetra imperdiet dolor...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 56)(108, "div", 41)(109, "div", 57)(110, "div", 58)(111, "div", 46)(112, "p", 50)(113, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Donec vitae ante ipsum. In aliquet, urna id varius mattis...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 58)(118, "div", 46)(119, "p", 50)(120, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Form Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Velit mi sodales turpis, nec consectetur leo elit.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 58)(125, "div", 46)(126, "p", 50)(127, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Charts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Vestibulum nec orci placerat, euismod turpis egestas, pretium risus.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 57)(132, "div", 58)(133, "div", 46)(134, "p", 50)(135, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "UI Components");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Nam in velit iaculis, vestibulum ex a, porta sapien...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 58)(140, "div", 46)(141, "p", 50)(142, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Donec ullamcorper est vel dui commodo dictum.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 58)(147, "div", 46)(148, "p", 50)(149, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Ut rhoncus massa diam, in commodo enim posuere quis mosito...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "li", 45)(154, "div", 59)(155, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 61)(158, "p", 47)(159, "a", 48)(160, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Attire bench");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, " - Quick win shoot me an email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "p", 50)(164, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "https://pixinvent.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "ul", 53)(171, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "i", 54)(173, "i", 54)(174, "i", 54)(175, "i", 54)(176, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " \u00A04.5 stars ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "50 votes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "US$ 40.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "In stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "p")(185, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Feb 3, 2018 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, " We need to dialog around ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Modern Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, " your choice of work attire bench mark, or win-win-win. Quick win shoot me an email. Proceduralize i don't want to drain the whole swamp, i just want to shoot some alligators yet old boys club.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li", 45)(192, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "iframe", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 46)(195, "p", 47)(196, "a", 48)(197, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "The Table");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " - for what do you feel you would bring to");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p", 50)(201, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "http://youtube.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "ul", 53)(208, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "Feb 3, 2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "1M Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Uploaded by PlayStation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "p")(215, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Proceduralize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, " Not the long pole in my tent. Get buy-in pixel pushing, and quick win . What's the status on the deliverables for eow? goalposts golden goose, and take five.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "li", 45)(219, "div", 46)(220, "p", 47)(221, "a", 48)(222, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Microdosing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, " - deep v actually schlitz chia");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "p", 50)(226, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "http://themeforest.net/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "/microdosing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Lobortis erat rutrum dignissim. Colonel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "Responsive Bootstrap Admin Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, " Ut tellus dui, rhoncus quis vulputate non, sodales ac ex. Fusce interdum efficitur purus quis viverra. Vivamus eros urna, scelerisque ac enim...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "li", 45)(238, "div", 46)(239, "p", 47)(240, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "Aesthetic neutra ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "freegan");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, ", mlkshk literally");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "p", 50)(246, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "http://envato.com/literally/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "modern");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "p")(253, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "June 30, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Humblebrag");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, " mixtape tumblr small batch, marfa blog mumblecore retro sustainable bitters normcore brunch whatever helvetica. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Humblebrag mumblecore ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "beard irony, XOXO craft beer kogi letterpress freegan vegan disrupt...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "li", 45)(262, "div", 46)(263, "p", 47)(264, "a", 48)(265, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](266, "iCell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, " - disrupt butcher pitchfork.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "p", 50)(269, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "http://google.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "icell");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "ul", 53)(276, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "i", 54)(278, "i", 54)(279, "i", 62)(280, "i", 65)(281, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, " \u00A02.5 stars ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "590 votes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "US$ 399.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "In stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "p")(290, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "March 23, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Church-key selfies bitters man bun post-ironic. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "8-bit 3 wolf moon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, " drinking vinegar, direct trade plaid cred hashtag offal. Fap XOXO chambray, intelligentsia kogi keytar flexitarian cardigan kale chips food truck.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "li", 45)(297, "div", 46)(298, "p", 47)(299, "a", 48)(300, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "Run it");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, " - up the flagpole, ping the boss");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "p", 50)(304, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "http://mail.example.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "run");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "Pixel pushing horsehead offer that jerk from finance really threw me under the bus, but best practices new economy and take five, punch the tree, and come back in here with a clear head... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "li", 45)(313, "div", 46)(314, "p", 47)(315, "a", 48)(316, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Keytar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, " - jean shorts disrupt poutine");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "p", 50)(320, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "http://demo.keytar.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "jean");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "ul", 53)(327, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "i", 54)(329, "i", 54)(330, "i", 54)(331, "i", 65)(332, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, " \u00A03 stars ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "50 votes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "US$ 4.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Out Of stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "p")(341, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Jan 14, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Brooklyn");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](345, " ethical sartorial gastropub shabby chic photo booth. Bushwick roof party kogi pitchfork food truck heirloom, street art occupy blog try-hard single-origin coffee chillwave.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "li", 45)(347, "div", 46)(348, "p", 47)(349, "a", 48)(350, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "Helicopter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](352, " - view drop-dead date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](353, "p", 50)(354, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "http://demo.helicopter.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "span", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](357, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "/ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](359, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "p")(361, "span", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "Sept 18, 2017 - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](363, " Sacred cow execute pig in a python. We need to socialize the comms with the wider stakeholder community collaboration through advanced technlogy three-martini lunch, nor bench mark, hit the ground running. Value prop collaboration through advanced technlogy. Face time out of the loop. Forcing function.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 66)(365, "nav", 67)(366, "ul", 68)(367, "li", 69)(368, "a", 70)(369, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "\u00AB Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "li", 69)(374, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](375, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "li", 69)(377, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](378, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](379, "li", 74)(380, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "li", 69)(383, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "li", 69)(386, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](387, "5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "li", 69)(389, "a", 75)(390, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Next \u00BB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](393, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](394, "div", 76)(395, "div", 77)(396, "div", 78)(397, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "Modern Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "h6", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Angular 11+ Bootstrap 5 Admin Dashboard Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](401, "img", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "div", 78)(403, "p", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](404, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](405, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "Wikipedia");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "ul", 82)(408, "li", 83)(409, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](410, "Website :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](412, "https://pixinvent.com/");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "li", 83)(414, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "Customer service :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, " 022 8888 9999");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "li", 83)(418, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Founder :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](420, " PIXINVENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](421, "li", 83)(422, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "Founded :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, " 2018");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "li", 83)(426, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "Support:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "support@pixinvent.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "div", 85)(431, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](432, "span", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "a", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "span", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "a", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "span", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "a", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "span", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 78)(440, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "People also search for");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "div", 41)(443, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "img", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "Ashoka");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](448, "img", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Materialize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "img", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](454, "HTML ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](456, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "Ashoka");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](460, "img", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Materialize");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](464, "img", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "a", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, "HTML ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtd2Vic2l0ZS5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9zZWFyY2gvc2VhcmNoLXdlYnNpdGUvc2VhcmNoLXdlYnNpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 29566:
/*!*******************************************************!*\
  !*** ./src/app/content/pages/search/search.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _search_website_search_website_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-website/search-website.component */ 66737);
/* harmony import */ var _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-images/search-images.component */ 61913);
/* harmony import */ var _search_videos_search_videos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-videos/search-videos.component */ 41025);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










class SearchModule {}
SearchModule.ɵfac = function SearchModule_Factory(t) {
  return new (t || SearchModule)();
};
SearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SearchModule
});
SearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_6__.NgxPhotoswipeModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
    path: 'searchWebsite',
    component: _search_website_search_website_component__WEBPACK_IMPORTED_MODULE_0__.SearchWebsiteComponent
  }, {
    path: 'searchImages',
    component: _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_1__.SearchImagesComponent
  }, {
    path: 'searchVideos',
    component: _search_videos_search_videos_component__WEBPACK_IMPORTED_MODULE_2__.SearchVideosComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SearchModule, {
    declarations: [_search_website_search_website_component__WEBPACK_IMPORTED_MODULE_0__.SearchWebsiteComponent, _search_images_search_images_component__WEBPACK_IMPORTED_MODULE_1__.SearchImagesComponent, _search_videos_search_videos_component__WEBPACK_IMPORTED_MODULE_2__.SearchVideosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_6__.NgxPhotoswipeModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_content_pages_search_search_module_ts.js.map