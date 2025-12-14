"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_pages_timelines_timelines_module_ts"],{

/***/ 49489:
/*!****************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-center/timelines-center.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelinesCenterComponent": () => (/* binding */ TimelinesCenterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_services/chart.api */ 19383);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










function TimelinesCenterComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "m-card", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function TimelinesCenterComponent_div_21_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.reloadProjectWorkOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 45)(6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 68)(14, "li", 69)(15, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 69)(19, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li")(23, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](26, 88)(27, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 61)(29, "div", 89)(30, "a", 44)(31, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 65)(34, "p", 74)(35, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ul", 92)(40, "li", 69)(41, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "li", 69)(45, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 61)(49, "div", 89)(50, "a", 44)(51, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 65)(54, "p", 74)(55, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ul", 92)(60, "li", 69)(61, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "li", 69)(65, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
function TimelinesCenterComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "m-card", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function TimelinesCenterComponent_div_26_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.reloadSofiaOrav($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Sofia Orav ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 45)(6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "iframe", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ul", 68)(17, "li", 69)(18, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 69)(22, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li")(26, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](29, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
  }
}
function TimelinesCenterComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23)(1, "m-card", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function TimelinesCenterComponent_div_71_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.reloadSofiaOravTwo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Sofia Orav ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 45)(6, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "18 June, 2016 at 4.50 P.M");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 95)(12, "li", 96)(13, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Cras justo odio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 96)(18, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Dapibus ac facilisis in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 96)(23, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Morbi leo risus");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 96)(28, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Porta ac consectetur ac");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li", 96)(33, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Vestibulum at eros");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "fieldset", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r2.options);
  }
}
const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];
const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
class TimelinesCenterComponent {
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
    this.options = {
      close: false,
      expand: true,
      minimize: false,
      reload: true
    };
    this.lat = 40.650002;
    this.lng = -73.949997;
    this.markers = [{
      lat: this.lat,
      lng: this.lng,
      label: ''
    }];
  }
  getChordchart() {
    this.chartOption = {
      grid: {
        x: 40,
        x2: 40,
        y: 45,
        y2: 25
      },
      // Add tooltip
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow' // The default is a straight line, optionally: 'line' | 'shadow'
        }
      },

      // Add legend
      legend: {
        data: this.data['report'].data
      },
      // Add custom colors
      color: ['#666EE8', '#FF9149', '#FF9966', '#FA8E57', '#FF637b', '#5175E0', '#A147F0', '#28D094', '#BABFC7'],
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
    this.option = {
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
    this.breadcrumb = {
      'mainlabel': 'Timeline Center',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Timelines',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Timelines Center',
        'isLink': false
      }]
    };
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
TimelinesCenterComponent.ɵfac = function TimelinesCenterComponent_Factory(t) {
  return new (t || TimelinesCenterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_0__.ChartApiService));
};
TimelinesCenterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TimelinesCenterComponent,
  selectors: [["app-timelines-center"]],
  decls: 251,
  vars: 21,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "user-profile"], ["id", "timeline", 1, "timeline-center", "timeline-wrapper"], [1, "page-title", "text-center"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "la", "la-calendar-o"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-red", "bg-lighten-1"], [1, "la", "la-plane"], ["class", "timeline-card card border-grey border-lighten-2", 4, "blockUI", "blockUIMessage"], [1, "timeline-item", "mt-3"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-14.png", "alt", "avatar"], [1, "timeline-item", "block"], ["title", "", "data-context", "inverse", "data-container", "body", "data-original-title", "block highlight", 1, "border-silc", 3, "routerLink"], [1, "timeline-card", "card", "border-grey", "border-lighten-2"], [1, "card-header"], [1, "text-center"], [1, "la", "la-bar-chart", "font-medium-4"], [1, "timeline-date"], [1, "card-content"], [1, "card-body"], [1, "chart-container"], ["echarts", "", 3, "options"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-5.png", "alt", "avatar"], [1, "timeline-card", "card", "text-white"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "bg-overlay"], [1, "card-title", "white"], [1, "card-text"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Nullam facilisis fermentum", 1, "bg-teal", "bg-lighten-1"], [1, "la", "la-check-square-o"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Nullam facilisis fermentum", 1, "bg-purple", "bg-lighten-1"], [1, "la", "la-area-chart"], [1, "card-title"], [3, "routerLink"], [1, "card-subtitle", "text-muted", "mb-0", "pt-1"], [1, "font-small-3"], ["echarts", "", 1, "height-400", "overflow-hidden", "echart-container", 3, "options"], [1, "card-footer", "px-0", "py-0"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "placeholder", "Write comments...", 1, "form-control"], [1, "form-control-position"], [1, "la", "la-dashcube"], [1, "mt-1"], [1, "la", "la-file-image-o", "font-medium-4"], [1, "card-body", "my-gallery"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-12"], [3, "images"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Application API Support", 1, "bg-warning", "bg-darken-1"], [1, "la", "la-life-ring"], [1, "media"], [1, "media-left", "mr-1"], [1, "avatar", "avatar-md", "avatar-busy"], ["src", "../../../../../assets/images/portrait/small/avatar-s-18.png", "alt", "avatar"], [1, "media-body"], [1, "badge", "badge-pill", "badge-warning", "float-right"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "list-inline"], [1, "pr-1"], [1, "", 3, "routerLink"], [1, "la", "la-commenting-o"], [1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-4.png", "alt", "avatar"], [1, "text-bold-600", "mb-0"], ["src", "../../../../../assets/images/portrait/small/avatar-s-6.png", "alt", "avatar"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Quote of the day", 1, "bg-amber", "bg-darken-1"], [1, "la", "la-smile-o"], ["src", "../../../../../assets/images/portfolio/width-600/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "card-bodyquote"], ["title", "Source Title"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardContent", ""], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-1.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["mCardBody", ""], [1, "la", "la-thumbs-o-up"], [1, "la", "la-share-alt"], ["mCardFooter", ""], [1, "media-left", "pr-1"], ["src", "../../../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"], [1, "m-0"], [1, "list-inline", "mb-1"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", "https://player.vimeo.com/video/118589137?title=0&byline=0", "SameSite", "Secure"], [1, "list-group"], [1, "list-group-item"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "input-1", 1, "custom-control-input"], ["for", "input-1", 1, "custom-control-label"], ["type", "checkbox", "id", "input-2", "checked", "", 1, "custom-control-input"], ["for", "input-2", "checked", "checked", 1, "custom-control-label"], ["type", "checkbox", "id", "input-3", 1, "custom-control-input"], ["for", "input-3", 1, "custom-control-label"], ["type", "checkbox", "id", "input-4", "disabled", "", "checked", "", 1, "custom-control-input"], ["for", "input-4", 1, "custom-control-label"], ["type", "checkbox", "id", "input-5", 1, "custom-control-input"], ["for", "input-5", 1, "custom-control-label"]],
  template: function TimelinesCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "section", 6)(7, "h3", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 10)(12, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 13)(18, "div", 14)(19, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, TimelinesCenterComponent_div_21_Template, 72, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 18)(23, "div", 14)(24, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, TimelinesCenterComponent_div_26_Template, 34, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 21)(28, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 23)(31, "div", 24)(32, "div", 25)(33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Campaign Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "18 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 28)(42, "div", 29)(43, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "li", 10)(48, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " 2016");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "li", 13)(54, "div", 14)(55, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 36)(60, "h4", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Good Morning");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p", 38)(63, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "26 Aug, 2016 at 2.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 18)(68, "div", 14)(69, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, TimelinesCenterComponent_div_71_Template, 42, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "li", 13)(73, "div", 14)(74, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 23)(77, "div", 24)(78, "h4", 43)(79, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Non-ribbon Chord Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "p", 45)(82, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "6 Feb, 2016 at 6.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 28)(85, "div", 28)(86, "div", 29)(87, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 48)(92, "div", 29)(93, "fieldset", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "li", 10)(100, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "li", 21)(106, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 23)(109, "div", 24)(110, "div", 25)(111, "p", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](112, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Media Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "p", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "July 1, 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 28)(120, "div", 55)(121, "div", 56)(122, "div", 57)(123, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 57)(126, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 57)(129, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 57)(132, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 56)(135, "div", 57)(136, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 57)(139, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 57)(142, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 57)(145, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 56)(148, "div", 57)(149, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 57)(152, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 57)(155, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 57)(158, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "ngxps-gallery", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "ngxps-lightbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "li", 13)(162, "div", 14)(163, "span", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 23)(166, "div", 24)(167, "div", 61)(168, "div", 62)(169, "a", 44)(170, "span", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 65)(174, "h4", 43)(175, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Application API Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "p", 45)(178, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "15 Oct, 2015 at 8.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "span", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "High");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "img", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 28)(185, "div", 29)(186, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "ul", 68)(189, "li", 69)(190, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, " Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 48)(194, "div", 29)(195, "div", 61)(196, "div", 62)(197, "a", 44)(198, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "img", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 65)(201, "p", 74)(202, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Crystal Lawson");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 61)(207, "div", 62)(208, "a", 44)(209, "span", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](210, "img", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 65)(212, "p", 74)(213, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Rafila G\u0103itan");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "fieldset", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](220, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "li", 18)(222, "div", 14)(223, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "i", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 23)(226, "div", 24)(227, "h4", 43)(228, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Quote of the day");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "p", 45)(231, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "03 March, 2015 at 5 P.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "img", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 29)(236, "blockquote", 79)(237, "p", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Someone famous in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "cite", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, " - Source Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "li", 10)(246, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, " Founded in 2012");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectWorkOne")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "sofiaOrav")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "sofiaOravTwo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.option);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image12);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__["ɵc"], _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__.GalleryComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n [_nghost-%COMP%]     .my-gallery img{\n\n  max-width: 100% !important;\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n  margin-bottom: 15px;\n  } \n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n}\n[_nghost-%COMP%]     .ngx-gallery {\n  grid-template-columns: auto !important \n  ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lcy1jZW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtDQUNDOztFQUVDLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CO0FBQ0Y7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFO0VBQ0E7QUFDRiIsImZpbGUiOiJ0aW1lbGluZXMtY2VudGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG4gOmhvc3QgOjpuZy1kZWVwIC5teS1nYWxsZXJ5IGltZ3tcblxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH0gXG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIWltcG9ydGFudCBcbiAgO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy90aW1lbGluZXMvdGltZWxpbmVzLWNlbnRlci90aW1lbGluZXMtY2VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7Q0FDQzs7RUFFQywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQjtBQUNGO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtFQUNBO0FBQ0Y7QUFDQSxnd0NBQWd3QyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xuXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfSBcbjpob3N0IDo6bmctZGVlcCAubXktZ2FsbGVyeSAuaW1nLXRodW1ibmFpbCB7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGQTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNkU4MjtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAhaW1wb3J0YW50IFxuICA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectWorkOne')], TimelinesCenterComponent.prototype, "blockUIProjectWorkOne", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('sofiaOrav')], TimelinesCenterComponent.prototype, "blockUISofiaOrav", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('sofiaOravTwo')], TimelinesCenterComponent.prototype, "blockUISofiaOravTwo", void 0);

/***/ }),

/***/ 22676:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-horizontal/horizontal-timeline-page/horizontal-timeline-page.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalTimelinePageComponent": () => (/* binding */ HorizontalTimelinePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);





const _c0 = ["eventsWrapper"];
const _c1 = ["fillingLine"];
const _c2 = ["timelineEvents"];
const _c3 = function (a0, a1) {
  return {
    "selected": a0,
    "older-event": a1
  };
};
function HorizontalTimelinePageComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelinePageComponent_li_6_Template_a_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onEventClick($event, item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, item_r4.selected, index_r5 < ctx_r1.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, item_r4.date, ctx_r1.dateFormatTop));
  }
}
function HorizontalTimelinePageComponent_div_16_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 16)(4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const index_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@contentState", item_r10.selected ? "active" : index_r11 < ctx_r9.selectedIndex ? "left" : "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, item_r10.date, ctx_r9.longDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.content);
  }
}
function HorizontalTimelinePageComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalTimelinePageComponent_div_16_li_2_Template, 9, 7, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.timelineElements);
  }
}
const _c4 = function (a0) {
  return {
    "loaded": a0
  };
};
const _c5 = function (a0) {
  return {
    "inactive": a0
  };
};
class HorizontalTimelinePageComponent {
  constructor(_cdr) {
    this._cdr = _cdr;
    this.prevLinkInactive = true;
    this.nextLinkInactive = false;
    this.loaded = false;
    this.selectedIndex = 0;
    this.eventsWrapperWidth = 0;
    this._viewInitialized = false;
    this._timelineWrapperWidth = 720;
    this._eventsMinDistance = 80;
    this._dateFormat = 'dd.MM.yyyy';
    this._dateFormatTop = 'dd MMM';
    this._disabled = false;
    this._showContent = false;
  }
  set timelineWrapperWidth(value) {
    this._timelineWrapperWidth = value;
    this._cdr.detectChanges();
  }
  set eventsMinDistance(value) {
    this._eventsMinDistance = value;
    this.initView();
  }
  get timelineElements() {
    return this._timelineElements;
  }
  set timelineElements(value) {
    this._timelineElements = value;
    this.initView();
  }
  get dateFormat() {
    return this._dateFormat;
  }
  get dateFormatTop() {
    return this._dateFormatTop;
  }
  set dateFormat(value) {
    this._dateFormat = value;
    this.initView();
  }
  set dateFormatTop(value) {
    this._dateFormatTop = value;
    this.initView();
  }
  set disabled(value) {
    this._disabled = value;
  }
  get showContent() {
    return this._showContent;
  }
  set showContent(value) {
    this._showContent = value;
    this._cdr.detectChanges();
  }
  static pxToNumber(val) {
    return Number(val.replace('px', ''));
  }
  static getElementWidth(element) {
    const computedStyle = window.getComputedStyle(element);
    if (!computedStyle.width) {
      return 0;
    }
    return HorizontalTimelinePageComponent.pxToNumber(computedStyle.width);
  }
  static parentElement(element, tagName) {
    if (!element || !element.parentNode) {
      return null;
    }
    let parent = element.parentNode;
    while (true) {
      if (parent.tagName.toLowerCase() === tagName) {
        return parent;
      }
      parent = parent.parentNode;
      if (!parent) {
        return null;
      }
    }
  }
  static getTranslateValue(timeline) {
    const timelineStyle = window.getComputedStyle(timeline);
    const timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') || timelineStyle.getPropertyValue('-moz-transform') || timelineStyle.getPropertyValue('-ms-transform') || timelineStyle.getPropertyValue('-o-transform') || timelineStyle.getPropertyValue('transform');
    let translateValue = 0;
    if (timelineTranslate.indexOf('(') >= 0) {
      const timelineTranslateStr = timelineTranslate.split('(')[1].split(')')[0].split(',')[4];
      translateValue = Number(timelineTranslateStr);
    }
    return translateValue;
  }
  static setTransformValue(element, property, value) {
    element.style['-webkit-transform'] = property + '(' + value + ')';
    element.style['-moz-transform'] = property + '(' + value + ')';
    element.style['-ms-transform'] = property + '(' + value + ')';
    element.style['-o-transform'] = property + '(' + value + ')';
    element.style['transform'] = property + '(' + value + ')';
  }
  static dayDiff(first, second) {
    return Math.round(second.getTime() - first.getTime());
  }
  static minLapse(elements) {
    if (elements && elements.length && elements.length === 1) {
      return 0;
    }
    let result = 0;
    for (let i = 1; i < elements.length; i++) {
      const distance = HorizontalTimelinePageComponent.dayDiff(elements[i - 1].date, elements[i].date);
      result = result ? Math.min(result, distance) : distance;
    }
    return result;
  }
  ngAfterViewInit() {
    this._cdr.detach();
    this._viewInitialized = true;
    this.initView();
  }
  onScrollClick(event, forward) {
    event.preventDefault();
    this.updateSlide(this.eventsWrapperWidth, forward);
    this._cdr.detectChanges();
  }
  onEventClick(event, selectedItem) {
    event.preventDefault();
    if (this._disabled) {
      return;
    }
    const element = event.target;
    // detect click on the a single event - show new event content
    let visibleItem = this._timelineElements[0];
    this._timelineElements.forEach(function (item) {
      if (item.selected && item !== selectedItem) {
        visibleItem = item;
        item.selected = false;
      }
    });
    this.selectedIndex = this._timelineElements.indexOf(selectedItem);
    selectedItem.selected = true;
    this.updateFilling(element);
    this._cdr.detectChanges();
  }
  initTimeline(timeLines) {
    const eventsMinLapse = HorizontalTimelinePageComponent.minLapse(timeLines);
    // assign a left position to the single events along the timeline
    this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse);
    // assign a width to the timeline
    this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse);
    // the timeline has been initialize - show it
    this.loaded = true;
  }
  updateSlide(timelineTotWidth, forward) {
    const translateValue = HorizontalTimelinePageComponent.getTranslateValue(this.eventsWrapper.nativeElement);
    if (forward) {
      this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth);
    } else {
      this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
    }
  }
  updateTimelinePosition(element) {
    const eventStyle = window.getComputedStyle(element);
    const eventLeft = HorizontalTimelinePageComponent.pxToNumber(eventStyle.getPropertyValue('left'));
    const translateValue = HorizontalTimelinePageComponent.getTranslateValue(this.eventsWrapper.nativeElement);
    if (eventLeft > this._timelineWrapperWidth - translateValue) {
      this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
    }
  }
  translateTimeline(value, totWidth) {
    // only negative translate value
    value = value > 0 ? 0 : value;
    // do not translate more than timeline width
    value = !(totWidth === null) && value < totWidth ? totWidth : value;
    HorizontalTimelinePageComponent.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
    // update navigation arrows visibility
    this.prevLinkInactive = value === 0;
    this.nextLinkInactive = value === totWidth;
  }
  setTimelineWidth(elements, width, eventsMinLapse) {
    let timeSpan = 100;
    if (elements.length > 1) {
      timeSpan = HorizontalTimelinePageComponent.dayDiff(elements[0].date, elements[elements.length - 1].date);
    }
    let timeSpanNorm = timeSpan / eventsMinLapse;
    timeSpanNorm = Math.round(timeSpanNorm) + 4;
    this.eventsWrapperWidth = timeSpanNorm * width;
    const aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
    this.updateFilling(aHref);
    this.updateTimelinePosition(aHref);
    return this.eventsWrapperWidth;
  }
  updateFilling(element) {
    // change .filling-line length according to the selected event
    const eventStyle = window.getComputedStyle(element);
    const eventLeft = eventStyle.getPropertyValue('left');
    const eventWidth = eventStyle.getPropertyValue('width');
    const eventLeftNum = HorizontalTimelinePageComponent.pxToNumber(eventLeft) + HorizontalTimelinePageComponent.pxToNumber(eventWidth) / 2;
    const scaleValue = eventLeftNum / this.eventsWrapperWidth;
    HorizontalTimelinePageComponent.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
  }
  initView() {
    if (!this._viewInitialized) {
      return;
    }
    if (this._timelineElements && this._timelineElements.length) {
      for (let i = 0; i < this._timelineElements.length; i++) {
        if (this._timelineElements[i].selected) {
          this.selectedIndex = i;
          break;
        }
      }
      this.initTimeline(this._timelineElements);
    }
    this._cdr.detectChanges();
  }
  setDatePosition(elements, min, eventsMinLapse) {
    const timelineEventsArray = this.timelineEvents.toArray();
    let i = 0;
    for (const component of elements) {
      const distance = HorizontalTimelinePageComponent.dayDiff(elements[0].date, component.date);
      const distanceNorm = Math.round(distance / eventsMinLapse);
      timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
      // span
      const span = timelineEventsArray[i].nativeElement.parentElement.children[1];
      const spanWidth = HorizontalTimelinePageComponent.getElementWidth(span);
      span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
      i++;
    }
  }
}
HorizontalTimelinePageComponent.ɵfac = function HorizontalTimelinePageComponent_Factory(t) {
  return new (t || HorizontalTimelinePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
HorizontalTimelinePageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HorizontalTimelinePageComponent,
  selectors: [["app-horizontal-timeline-page"]],
  viewQuery: function HorizontalTimelinePageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eventsWrapper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fillingLine = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timelineEvents = _t);
    }
  },
  inputs: {
    timelineWrapperWidth: "timelineWrapperWidth",
    eventsMinDistance: "eventsMinDistance",
    timelineElements: "timelineElements",
    dateFormat: "dateFormat",
    dateFormatTop: "dateFormatTop",
    disabled: "disabled",
    showContent: "showContent"
  },
  decls: 17,
  vars: 13,
  consts: [[1, "cd-horizontal-timeline", 3, "ngClass"], [1, "timeline"], [1, "events-wrapper"], [1, "events"], ["eventsWrapper", ""], [4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "filling-line"], ["fillingLine", ""], [1, "cd-timeline-navigation"], [1, "prev", 3, "routerLink", "ngClass", "click"], [1, "next", 3, "routerLink", "ngClass", "click"], ["class", "events-content", 4, "ngIf"], [3, "routerLink", "ngClass", "click"], ["timelineEvents", ""], [1, "events-content"], [1, "text-bold-500"], [1, "text-muted", "mb-1"], [1, "lead"]],
  template: function HorizontalTimelinePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3, 4)(5, "ol");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HorizontalTimelinePageComponent_li_6_Template, 6, 8, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8)(10, "li")(11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelinePageComponent_Template_a_click_11_listener($event) {
        return ctx.onScrollClick($event, false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalTimelinePageComponent_Template_a_click_14_listener($event) {
        return ctx.onScrollClick($event, true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HorizontalTimelinePageComponent_div_16_Template, 3, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, ctx.loaded));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.eventsWrapperWidth, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timelineElements);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c5, ctx.prevLinkInactive));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, ctx.nextLinkInactive));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContent);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLXRpbWVsaW5lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy90aW1lbGluZXMvdGltZWxpbmVzLWhvcml6b250YWwvaG9yaXpvbnRhbC10aW1lbGluZS1wYWdlL2hvcml6b250YWwtdGltZWxpbmUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3TEFBd0wiLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('contentState', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      position: 'relative',
      'z-index': 2,
      opacity: 1,
      'left': '100%'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('right => active', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      transform: 'translateX(100%)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0,
      transform: 'translateX(100%)',
      offset: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1,
      transform: 'translateX(0%)',
      offset: 1.0
    })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('active => right', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      transform: 'translateX(-100%)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1,
      transform: 'translateX(0%)',
      offset: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0,
      transform: 'translateX(100%)',
      offset: 1.0
    })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('active => left', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      transform: 'translateX(-100%)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1,
      transform: 'translateX(0%)',
      offset: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0,
      transform: 'translateX(-100%)',
      offset: 1.0
    })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('left => active', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      transform: 'translateX(100%)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0,
      transform: 'translateX(-100%)',
      offset: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1,
      transform: 'translateX(0%)',
      offset: 1.0
    })]))])])]
  },
  changeDetection: 0
});

/***/ }),

/***/ 31338:
/*!************************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-horizontal/timelines-horizontal.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelinesHorizontalComponent": () => (/* binding */ TimelinesHorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-timeline-page/horizontal-timeline-page.component */ 22676);



class TimelinesHorizontalComponent {
  constructor() {
    this.content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae
    ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae,
    ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam
    quisquam, quae, temporibus dolores porro doloribus.`;
    this.timeline = [{
      date: new Date(2014, 1, 16),
      selected: true,
      title: 'Horizontal Timeline',
      content: this.content
    }, {
      date: new Date(2014, 2, 28),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2014, 3, 20),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2014, 5, 20),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2014, 7, 9),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2014, 8, 30),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2014, 9, 15),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2014, 11, 1),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2014, 12, 10),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2015, 1, 19),
      title: 'Event title here',
      content: this.content
    }, {
      date: new Date(2015, 3, 3),
      title: 'Event title here',
      content: this.content
    }];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Horizontal Timeline',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Timelines',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Timelines Horizontal',
        'isLink': false
      }]
    };
  }
}
TimelinesHorizontalComponent.ɵfac = function TimelinesHorizontalComponent_Factory(t) {
  return new (t || TimelinesHorizontalComponent)();
};
TimelinesHorizontalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TimelinesHorizontalComponent,
  selectors: [["app-timelines-horizontal"]],
  decls: 15,
  vars: 3,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-text"], [3, "timelineElements", "showContent"]],
  template: function TimelinesHorizontalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Basic Horizontal Timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "This horizontal time line contain just date based post timeline.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-horizontal-timeline-page", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("timelineElements", ctx.timeline)("showContent", true);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_1__.HorizontalTimelinePageComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lbGluZXMtaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy90aW1lbGluZXMvdGltZWxpbmVzLWhvcml6b250YWwvdGltZWxpbmVzLWhvcml6b250YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 45547:
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-left/timelines-left.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelinesLeftComponent": () => (/* binding */ TimelinesLeftComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_services/chart.api */ 19383);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










function TimelinesLeftComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "m-card", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function TimelinesLeftComponent_div_20_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.reloadProjectWorkOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 90)(6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "5 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 84)(10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 34)(15, "li", 35)(16, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 35)(20, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li")(24, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 93)(28, "div", 94)(29, "a", 24)(30, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 97)(33, "p", 98)(34, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ul", 34)(39, "li", 35)(40, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li", 35)(44, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 93)(48, "div", 94)(49, "a", 24)(50, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 97)(53, "p", 98)(54, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "ul", 34)(59, "li", 35)(60, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li", 35)(64, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 49)(68, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "ul", 34)(77, "li", 35)(78, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "li", 35)(82, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "li")(86, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 93)(90, "div", 94)(91, "a", 24)(92, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 97)(95, "p", 98)(96, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "ul", 34)(101, "li", 35)(102, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "li", 35)(106, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 93)(110, "div", 94)(111, "a", 24)(112, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 97)(115, "p", 98)(116, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "ul", 34)(121, "li", 35)(122, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "li", 35)(126, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 49)(130, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
function TimelinesLeftComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "m-card", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function TimelinesLeftComponent_div_25_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.reloadProjectWorkTwo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 90)(6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "5 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 84)(10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 34)(15, "li", 35)(16, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 35)(20, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li")(24, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 29)(28, "div", 93)(29, "div", 94)(30, "a", 24)(31, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 97)(34, "p", 98)(35, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ul", 34)(40, "li", 35)(41, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "li", 35)(45, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 93)(49, "div", 94)(50, "a", 24)(51, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 97)(54, "p", 98)(55, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ul", 34)(60, "li", 35)(61, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "li", 35)(65, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 49)(69, "fieldset", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
  }
}
const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];
const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
class TimelinesLeftComponent {
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
    this.options = {
      close: false,
      expand: true,
      minimize: false,
      reload: true
    };
    this.zoom = 15;
    this.lat = 40.650002;
    this.lng = -73.949997;
    this.markers = [{
      lat: this.lat,
      lng: this.lng,
      label: ''
    }];
  }
  /**
   *
   */
  getChordchart() {
    this.chartOption = {
      grid: {
        x: 40,
        x2: 40,
        y: 45,
        y2: 25
      },
      // Add tooltip
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow' // The default is a straight line, optionally: 'line' | 'shadow'
        }
      },

      // Add legend
      legend: {
        data: this.data['report'].data
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
    this.option = {
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
    this.breadcrumb = {
      'mainlabel': 'Timeline Left',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Timelines',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Timelines Left',
        'isLink': false
      }]
    };
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
  reloadProjectWorkTwo() {
    this.blockUIProjectWorkTwo.start('Loading..');
    setTimeout(() => {
      this.blockUIProjectWorkTwo.stop();
    }, 2500);
  }
}
TimelinesLeftComponent.ɵfac = function TimelinesLeftComponent_Factory(t) {
  return new (t || TimelinesLeftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_0__.ChartApiService));
};
TimelinesLeftComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TimelinesLeftComponent,
  selectors: [["app-timelines-left"]],
  decls: 260,
  vars: 19,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "timeline", 1, "timeline-left", "timeline-wrapper"], [1, "page-title", "text-center", "text-lg-left"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "la", "la-calendar"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-red", "bg-lighten-1"], [1, "la", "la-plane"], ["class", "timeline-card card border-grey border-lighten-2", 4, "blockUI", "blockUIMessage"], [1, "la", "la-plus-square-o"], [1, "timeline-item", "mt-3"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-14.png", "alt", "avatar"], [1, "timeline-card", "card", "border-grey", "border-lighten-2"], [1, "card-header"], [1, "card-title"], [3, "routerLink"], [1, "card-subtitle", "text-muted", "pt-1"], [1, "font-small-3"], [1, "card-content"], [1, "card-body", "row"], [1, "col-lg-6", "col-12"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", "https://player.vimeo.com/video/118589137?title=0&byline=0"], [1, "card-text", "m-0"], [1, "card-text"], [1, "list-inline", "mb-1"], [1, "pr-1"], [1, "text-muted", 3, "routerLink"], [1, "la", "la-heart-o"], [1, "la", "la-comments-o"], [1, "la", "la-share-alt"], [1, "card-footer", "px-0", "py-0"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "placeholder", "Write comments...", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-message-square"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-success", "bg-lighten-1"], [1, "la", "la-bar-chart-o"], [1, "text-center", "pt-1"], [1, "timeline-date"], [1, "card-body"], [1, "chart-container"], ["echarts", "", 3, "options"], [1, "feather", "ft-calendar"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-5.png", "alt", "avatar"], ["matchHeight", "card", 1, "row"], [1, "col-lg-8", "col-12"], [1, "timeline-card", "card", "bg-dark", "text-white"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "bg-overlay"], [1, "card-title", "white"], [1, "col-lg-4", "col-12"], [1, "card"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "badge", "badge-pill", "bg-primary", "float-right"], [1, "badge", "badge-pill", "bg-info", "float-right"], [1, "badge", "badge-pill", "bg-warning", "float-right"], [1, "badge", "badge-pill", "bg-success", "float-right"], [1, "badge", "badge-pill", "bg-danger", "float-right"], [1, "card-link", 3, "routerLink"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Nullam facilisis fermentum", 1, "bg-teal", "bg-lighten-1"], [1, "la", "la-check"], [1, "row", "card-body"], [1, "list-group", "icheck-task"], ["type", "checkbox", "id", "input-1"], ["type", "checkbox", "id", "input-2", "checked", ""], ["type", "checkbox", "id", "input-3"], ["type", "checkbox", "id", "input-4", "disabled", "", "checked", ""], ["type", "checkbox", "id", "input-5"], ["type", "checkbox", "id", "input-6", "disabled", "", "checked", ""], ["echarts", "", 1, "height-400", "overflow-hidden", "echart-container", 3, "options"], [1, "la", "la-image"], [1, "card-body", "my-gallery"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-12"], [3, "images"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "", 3, "routerLink"], [1, "card-subtitle", "text-muted", "mb-0", "pt-1"], ["mCardBody", ""], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "media"], [1, "media-left", "pr-1"], [1, "avatar", "avatar-online"], ["src", "../../../../../assets/images/portrait/small/avatar-s-2.png", "alt", "avatar"], [1, "media-body"], [1, "text-bold-600", "mb-0"], [1, "m-0"], ["src", "../../../../../assets/images/portrait/small/avatar-s-18.png", "alt", "avatar"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../../../assets/images/portrait/small/avatar-s-3.png", "alt", "avatar"], ["src", "../../../../../assets/images/portfolio/width-1200/portfolio-1.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"]],
  template: function TimelinesLeftComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 12)(17, "div", 13)(18, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, TimelinesLeftComponent_div_20_Template, 134, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 12)(22, "div", 13)(23, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, TimelinesLeftComponent_div_25_Template, 73, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 18)(27, "div", 13)(28, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 21)(31, "div", 22)(32, "h4", 23)(33, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Sofia Orav");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p", 25)(36, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "8 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 27)(39, "div", 28)(40, "div", 29)(41, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "iframe", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 29)(44, "div", 27)(45, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt! Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "ul", 34)(50, "li", 35)(51, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Like");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "li", 35)(55, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "li")(59, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Share");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 40)(63, "fieldset", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "li", 12)(68, "div", 13)(69, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 21)(72, "div", 22)(73, "div", 47)(74, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Campaign Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "p", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "18 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 27)(81, "div", 49)(82, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "li", 9)(87, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " 2016");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "li", 12)(93, "div", 13)(94, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "img", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 55)(97, "div", 56)(98, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "img", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 59)(101, "h4", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Good Morning");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "p", 33)(104, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "26 Aug, 2016 at 2.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 61)(109, "div", 62)(110, "div", 49)(111, "div", 49)(112, "h4", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "List Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "ul", 63)(117, "li", 64)(118, "span", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, " Cras justo odio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "li", 64)(122, "span", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, " Dapibus ac facilisis in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "li", 64)(126, "span", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " Morbi leo risus ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "li", 64)(130, "span", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " Porta ac consectetur ac ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "li", 64)(134, "span", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "8");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, " Vestibulum at eros ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 49)(138, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Card link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Another link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "li", 18)(143, "div", 13)(144, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "i", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 21)(147, "div", 22)(148, "h4", 23)(149, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Sofia Orav");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "p", 25)(152, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "18 June, 2016 at 4.50 P.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 27)(155, "div", 73)(156, "div", 29)(157, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "ul", 74)(160, "li", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, " Cras justo odio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "li", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, " Dapibus ac facilisis in");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "li", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, " Morbi leo risus");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "li", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, " Porta ac consectetur ac");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "li", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](173, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, " Vestibulum at eros");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "li", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, " Porta ac consectetur ac");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 29)(179, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](182, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 40)(184, "div", 49)(185, "fieldset", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "li", 9)(192, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, " 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "li", 12)(198, "div", 13)(199, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](200, "i", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 21)(202, "div", 22)(203, "div", 47)(204, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "Media Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "p", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "July 1, 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 27)(211, "div", 83)(212, "div", 84)(213, "div", 85)(214, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 85)(217, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 85)(220, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](221, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 85)(223, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 84)(226, "div", 85)(227, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 85)(230, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 85)(233, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 85)(236, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 84)(239, "div", 85)(240, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 85)(243, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 85)(246, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 85)(249, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "ngxps-gallery", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "ngxps-lightbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](253, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "li", 9)(255, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](256, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "Founded in 2012");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectWorkOne")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectWorkTwo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.option);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image12);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__["ɵc"], _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__.GalleryComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .my-gallery img{\n  max-width: 100% !important;\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n}\n[_nghost-%COMP%]     .ngx-gallery {\n  grid-template-columns: auto !important \n  ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lcy1sZWZ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFO0VBQ0E7QUFDRiIsImZpbGUiOiJ0aW1lbGluZXMtbGVmdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogNDUwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5teS1nYWxsZXJ5IGltZ3tcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGQTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNkU4MjtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5teS1nYWxsZXJ5IC5pbWctdGh1bWJuYWlsIHtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvICFpbXBvcnRhbnQgXG4gIDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy90aW1lbGluZXMvdGltZWxpbmVzLWxlZnQvdGltZWxpbmVzLWxlZnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7RUFDQTtBQUNGO0FBQ0EsZ3ZDQUFndkMiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIWltcG9ydGFudCBcbiAgO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectWorkOne')], TimelinesLeftComponent.prototype, "blockUIProjectWorkOne", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectWorkTwo')], TimelinesLeftComponent.prototype, "blockUIProjectWorkTwo", void 0);

/***/ }),

/***/ 69114:
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines-right/timelines-right.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelinesRightComponent": () => (/* binding */ TimelinesRightComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_services/chart.api */ 19383);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);










function TimelinesRightComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "m-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function TimelinesRightComponent_div_36_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.reloadProjectWorkOne($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 99)(6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 93)(10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 43)(15, "li", 44)(16, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 44)(20, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li")(24, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 102)(28, "div", 103)(29, "a", 33)(30, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 106)(33, "p", 107)(34, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ul", 43)(39, "li", 44)(40, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "li", 44)(44, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 102)(48, "div", 103)(49, "a", 33)(50, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 106)(53, "p", 107)(54, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "ul", 43)(59, "li", 44)(60, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li", 44)(64, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 58)(68, "fieldset", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "ul", 43)(77, "li", 44)(78, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "li", 44)(82, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "li")(86, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 102)(90, "div", 103)(91, "a", 33)(92, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 106)(95, "p", 107)(96, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "ul", 43)(101, "li", 44)(102, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "li", 44)(106, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 102)(110, "div", 103)(111, "a", 33)(112, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 106)(115, "p", 107)(116, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "ul", 43)(121, "li", 44)(122, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "li", 44)(126, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 58)(130, "fieldset", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
function TimelinesRightComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "m-card", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function TimelinesRightComponent_div_41_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.reloadProjectWorkTwo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Portfolio project work ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 99)(6, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "8 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 93)(10, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 43)(15, "li", 44)(16, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 44)(20, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li")(24, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 38)(28, "div", 102)(29, "div", 103)(30, "a", 33)(31, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 106)(34, "p", 107)(35, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Jason Ansley");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ul", 43)(40, "li", 44)(41, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "li", 44)(45, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 102)(49, "div", 103)(50, "a", 33)(51, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 106)(54, "p", 107)(55, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Janice Johnston");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ul", 43)(60, "li", 44)(61, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "li", 44)(65, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Replay");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 58)(69, "fieldset", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
  }
}
const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'];
const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
class TimelinesRightComponent {
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
    this.options = {
      close: false,
      expand: true,
      minimize: false,
      reload: true
    };
    this.lat = 40.650002;
    this.lng = -73.949997;
    this.markers = [{
      lat: this.lat,
      lng: this.lng,
      label: ''
    }];
  }
  getChordchart() {
    this.chartOption = {
      grid: {
        x: 40,
        x2: 40,
        y: 45,
        y2: 25
      },
      // Add tooltip
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      // Add legend
      legend: {
        data: this.data['report'].data
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
    this.option = {
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
    this.breadcrumb = {
      'mainlabel': 'Timeline Right',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Timelines',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Timelines Right',
        'isLink': false
      }]
    };
    this.data = this.chartApiservice.getTimelineData().subscribe(Response => {
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
  reloadProjectWorkTwo() {
    this.blockUIProjectWorkTwo.start('Loading..');
    setTimeout(() => {
      this.blockUIProjectWorkTwo.stop();
    }, 2500);
  }
}
TimelinesRightComponent.ɵfac = function TimelinesRightComponent_Factory(t) {
  return new (t || TimelinesRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_0__.ChartApiService));
};
TimelinesRightComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TimelinesRightComponent,
  selectors: [["app-timelines-right"]],
  decls: 274,
  vars: 19,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-header-right", "col-md-6", "col-12"], [1, "btn-group", "float-md-right"], [1, "dropdown-menu", "arrow"], [1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-calendar-check", "mr-1"], [1, "fa", "fa-cart-plus", "mr-1"], [1, "fa", "fa-life-ring", "mr-1"], [1, "dropdown-divider"], [1, "fa", "fa-cog", "mr-1"], [1, "content-body"], ["id", "timeline", 1, "timeline-right", "timeline-wrapper"], [1, "page-title", "text-center", "text-lg-right"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-group"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "la", "la-calendar"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-red", "bg-lighten-1"], [1, "la", "la-plane"], ["class", "timeline-card card border-grey border-lighten-2", 4, "blockUI", "blockUIMessage"], [1, "la", "la-plus-square-o"], [1, "timeline-item", "mt-3"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../assets/images/portrait/small/avatar-s-14.png", "alt", "avatar"], [1, "timeline-card", "card", "border-grey", "border-lighten-2"], [1, "card-header"], [1, "card-title"], [3, "routerLink"], [1, "card-subtitle", "text-muted", "pt-1"], [1, "font-small-3"], [1, "card-content"], [1, "card-body", "row"], [1, "col-lg-6", "col-12"], [1, "embed-responsive", "embed-responsive-4by3"], ["src", "https://player.vimeo.com/video/118589137?title=0&byline=0"], [1, "card-text", "m-0"], [1, "card-text"], [1, "list-inline", "mb-1"], [1, "pr-1"], [1, "text-muted", 3, "routerLink"], [1, "la", "la-heart-o"], [1, "la", "la-comments-o"], [1, "la", "la-share-alt"], [1, "card-footer", "px-0", "py-0"], [1, "form-group", "position-relative", "has-icon-left", "mb-0"], ["type", "text", "placeholder", "Write comments...", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-message-square"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-success", "bg-lighten-1"], [1, "la", "la-bar-chart-o"], [1, "text-center", "pt-1"], [1, "timeline-date"], [1, "card-body"], [1, "chart-container"], ["echarts", "", 3, "options"], [1, "feather", "ft-calendar"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Eu pid nunc urna integer", 1, "avatar", "avatar-online"], ["src", "../../../assets/images/portrait/small/avatar-s-5.png", "alt", "avatar"], ["matchHeight", "card", 1, "row"], [1, "col-lg-8", "col-12"], [1, "timeline-card", "card", "bg-dark", "text-white"], ["src", "../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "bg-overlay"], [1, "card-title", "white"], [1, "col-lg-4", "col-12"], [1, "card"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "badge", "badge-pill", "bg-primary", "float-right"], [1, "badge", "badge-pill", "bg-info", "float-right"], [1, "badge", "badge-pill", "bg-warning", "float-right"], [1, "badge", "badge-pill", "bg-success", "float-right"], [1, "badge", "badge-pill", "bg-danger", "float-right"], [1, "card-link", 3, "routerLink"], ["data-toggle", "tooltip", "data-placement", "left", "title", "Nullam facilisis fermentum", 1, "bg-teal", "bg-lighten-1"], [1, "la", "la-check"], [1, "row", "card-body"], [1, "list-group", "icheck-task"], ["type", "checkbox", "id", "input-1"], ["type", "checkbox", "id", "input-2", "checked", ""], ["type", "checkbox", "id", "input-3"], ["type", "checkbox", "id", "input-4", "disabled", "", "checked", ""], ["type", "checkbox", "id", "input-5"], ["type", "checkbox", "id", "input-6", "disabled", "", "checked", ""], ["echarts", "", 1, "height-400", "overflow-hidden", "echart-container", 3, "options"], [1, "la", "la-image"], [1, "card-body", "my-gallery"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-12"], [3, "images"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "", 3, "routerLink"], [1, "card-subtitle", "text-muted", "mb-0", "pt-1"], ["mCardBody", ""], ["src", "../../../assets/images/portfolio/width-1200/portfolio-2.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], [1, "media"], [1, "media-left", "pr-1"], [1, "avatar", "avatar-online"], ["src", "../../../assets/images/portrait/small/avatar-s-2.png", "alt", "avatar"], [1, "media-body"], [1, "text-bold-600", "mb-0"], [1, "m-0"], ["src", "../../../assets/images/portrait/small/avatar-s-18.png", "alt", "avatar"], ["src", "../../../assets/images/portfolio/width-1200/portfolio-3.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../assets/images/portrait/small/avatar-s-3.png", "alt", "avatar"], ["src", "../../../assets/images/portfolio/width-1200/portfolio-1.jpg", "alt", "Timeline Image 1", 1, "img-fluid"], ["src", "../../../assets/images/portrait/small/avatar-s-1.png", "alt", "avatar"]],
  template: function TimelinesRightComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Calender");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 13)(21, "section", 14)(22, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Timeline");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 18)(27, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "li", 21)(33, "div", 22)(34, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, TimelinesRightComponent_div_36_Template, 134, 1, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li", 21)(38, "div", 22)(39, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, TimelinesRightComponent_div_41_Template, 73, 1, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "li", 27)(43, "div", 22)(44, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "img", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 30)(47, "div", 31)(48, "h4", 32)(49, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Sofia Orav");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p", 34)(52, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "8 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 36)(55, "div", 37)(56, "div", 38)(57, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "iframe", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 38)(60, "div", 36)(61, "p", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et? Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt! Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "ul", 43)(66, "li", 44)(67, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Like");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li", 44)(71, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "li")(75, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Share");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 49)(79, "fieldset", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "li", 21)(84, "div", 22)(85, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 30)(88, "div", 31)(89, "div", 56)(90, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Campaign Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "p", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "18 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Rhoncus, vel dignissim in scelerisque. Dolor lacus pulvinar adipiscing adipiscing montes! Elementum risus adipiscing non, cras scelerisque risus penatibus? Massa vut, habitasse, tincidunt!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 36)(97, "div", 58)(98, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "li", 18)(103, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, " 2016");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "li", 21)(109, "div", 22)(110, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 64)(113, "div", 65)(114, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "img", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 68)(117, "h4", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Good Morning");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "p", 42)(120, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "26 Aug, 2016 at 2.00 A.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 70)(125, "div", 71)(126, "div", 58)(127, "div", 58)(128, "h4", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "List Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "ul", 72)(133, "li", 73)(134, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, " Cras justo odio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "li", 73)(138, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, " Dapibus ac facilisis in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "li", 73)(142, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " Morbi leo risus ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "li", 73)(146, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, " Porta ac consectetur ac ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "li", 73)(150, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "8");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Vestibulum at eros ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 58)(154, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Card link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Another link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "li", 27)(159, "div", 22)(160, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](161, "i", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 30)(163, "div", 31)(164, "h4", 32)(165, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Sofia Orav");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "p", 34)(168, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "18 June, 2016 at 4.50 P.M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 36)(171, "div", 82)(172, "div", 38)(173, "p", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "ul", 83)(176, "li", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](177, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, " Cras justo odio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "li", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, " Dapibus ac facilisis in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "li", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " Morbi leo risus ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "li", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, " Porta ac consectetur ac ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "li", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](189, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, " Vestibulum at eros ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "li", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, " Porta ac consectetur ac ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 38)(195, "p", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum nisi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 49)(200, "div", 58)(201, "fieldset", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](202, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](204, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](206, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "li", 18)(208, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, " 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](212, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "li", 21)(214, "div", 22)(215, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 30)(218, "div", 31)(219, "div", 56)(220, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "Media Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "p", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "July 1, 2015");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar, rhoncus sagittis ut nunc elit! Sociis in et?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 36)(227, "div", 92)(228, "div", 93)(229, "div", 94)(230, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 94)(233, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 94)(236, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 94)(239, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "div", 93)(242, "div", 94)(243, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 94)(246, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 94)(249, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 94)(252, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](253, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 93)(255, "div", 94)(256, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](257, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 94)(259, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](260, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 94)(262, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](263, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 94)(265, "a2p-gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](266, "ngxps-gallery", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](267, "ngxps-lightbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "ul", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "li", 18)(271, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](272, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, " Founded in 2012");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectWorkOne")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectWorkTwo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.chartOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.option);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx.image12);
    }
  },
  dependencies: [ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsDirective, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__["ɵc"], _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_5__.GalleryComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 450px;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .my-gallery img{\n   max-width: 100% !important;\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n  margin-bottom: 15px;\n}\n[_nghost-%COMP%]     .my-gallery .img-thumbnail {\n  padding: .25rem;\n  background-color: #F4F5FA;\n  border: 1px solid #626E82;\n  border-radius: .25rem;\n}\n[_nghost-%COMP%]     .ngx-gallery {\n  grid-template-columns: auto !important \n  ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVsaW5lcy1yaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7R0FDRywwQkFBMEI7RUFDM0IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtFQUNBO0FBQ0YiLCJmaWxlIjoidGltZWxpbmVzLXJpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgaW1ne1xuICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGQTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzYyNkU4MjtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5teS1nYWxsZXJ5IC5pbWctdGh1bWJuYWlsIHtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvICFpbXBvcnRhbnQgXG4gIDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy90aW1lbGluZXMvdGltZWxpbmVzLXJpZ2h0L3RpbWVsaW5lcy1yaWdodC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7R0FDRywwQkFBMEI7RUFDM0IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtFQUNBO0FBQ0Y7QUFDQSxvdkNBQW92QyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubXktZ2FsbGVyeSBpbWd7XG4gICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNUZBO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjI2RTgyO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm15LWdhbGxlcnkgLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY1RkE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MjZFODI7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWdhbGxlcnkge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIWltcG9ydGFudCBcbiAgO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectWorkOne')], TimelinesRightComponent.prototype, "blockUIProjectWorkOne", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectWorkTwo')], TimelinesRightComponent.prototype, "blockUIProjectWorkTwo", void 0);

/***/ }),

/***/ 38738:
/*!*************************************************************!*\
  !*** ./src/app/content/pages/timelines/timelines.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelinesModule": () => (/* binding */ TimelinesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timelines-left/timelines-left.component */ 45547);
/* harmony import */ var _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timelines-right/timelines-right.component */ 69114);
/* harmony import */ var _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timelines-horizontal/timelines-horizontal.component */ 31338);
/* harmony import */ var _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timelines-center/timelines-center.component */ 49489);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fnxone/ngx-photoswipe */ 43432);
/* harmony import */ var _timelines_horizontal_horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timelines-horizontal/horizontal-timeline-page/horizontal-timeline-page.component */ 22676);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ 86196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);



















class TimelinesModule {}
TimelinesModule.ɵfac = function TimelinesModule_Factory(t) {
  return new (t || TimelinesModule)();
};
TimelinesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: TimelinesModule
});
TimelinesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsModule.forRoot({
    echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 72750))
  }), _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbModule, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_13__.NgxPhotoswipeModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_14__.BlockUIModule.forRoot({
    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_7__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild([{
    path: 'timelines-center',
    component: _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_3__.TimelinesCenterComponent
  }, {
    path: 'timelines-left',
    component: _timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_0__.TimelinesLeftComponent
  }, {
    path: 'timelines-right',
    component: _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_1__.TimelinesRightComponent
  }, {
    path: 'timelines-horizontal',
    component: _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_2__.TimelinesHorizontalComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TimelinesModule, {
    declarations: [_timelines_left_timelines_left_component__WEBPACK_IMPORTED_MODULE_0__.TimelinesLeftComponent, _timelines_right_timelines_right_component__WEBPACK_IMPORTED_MODULE_1__.TimelinesRightComponent, _timelines_horizontal_timelines_horizontal_component__WEBPACK_IMPORTED_MODULE_2__.TimelinesHorizontalComponent, _timelines_center_timelines_center_component__WEBPACK_IMPORTED_MODULE_3__.TimelinesCenterComponent, _timelines_horizontal_horizontal_timeline_page_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalTimelinePageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_10__.NgxEchartsModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_11__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbModule, _fnxone_ngx_photoswipe__WEBPACK_IMPORTED_MODULE_13__.NgxPhotoswipeModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_14__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_content_pages_timelines_timelines_module_ts.js.map