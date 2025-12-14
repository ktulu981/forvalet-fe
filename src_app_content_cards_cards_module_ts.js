"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_cards_cards_module_ts"],{

/***/ 24300:
/*!****************************************************************!*\
  !*** ./src/app/content/cards/bootstrap/bootstrap.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapComponent": () => (/* binding */ BootstrapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/general/card/card.component */ 15733);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);












function BootstrapComponent_ngb_carousel_135_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 152);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.carouselOne[0], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function BootstrapComponent_ngb_carousel_135_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 152);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.carouselOne[1], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function BootstrapComponent_ngb_carousel_135_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 152);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r6.carouselOne[2], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function BootstrapComponent_ngb_carousel_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BootstrapComponent_ngb_carousel_135_ng_template_1_Template, 1, 1, "ng-template", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BootstrapComponent_ngb_carousel_135_ng_template_2_Template, 1, 1, "ng-template", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BootstrapComponent_ngb_carousel_135_ng_template_3_Template, 1, 1, "ng-template", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BootstrapComponent_div_174_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", interest_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](interest_r9);
  }
}
function BootstrapComponent_div_174_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", range_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](range_r10);
  }
}
function BootstrapComponent_div_174_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 153)(1, "m-card", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function BootstrapComponent_div_174_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16)(6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "With supporting text below as a natural lead-in to additional content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 42)(9, "div", 43)(10, "h4", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "div", 153)(15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 153)(18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6)(21, "div", 153)(22, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 153)(25, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h4", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 6)(33, "div", 153)(34, "div", 44)(35, "select", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, BootstrapComponent_div_174_option_36_Template, 2, 2, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 153)(38, "div", 44)(39, "select", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, BootstrapComponent_div_174_option_40_Template, 2, 2, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "textarea", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 169)(44, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.budget);
  }
}
function BootstrapComponent_div_175_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 153)(1, "m-card", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function BootstrapComponent_div_175_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.reloadUserProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " User Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16)(6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "With supporting text below as a natural lead-in to additional content.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 42)(9, "div", 43)(10, "h4", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " About User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "div", 153)(15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 153)(18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6)(21, "div", 153)(22, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 153)(25, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h4", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Contact Info & Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "textarea", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 184)(37, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "i", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r2.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.userProfile);
  }
}
function BootstrapComponent_ngb_carousel_263_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 152);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r15.carouselTwo[0], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function BootstrapComponent_ngb_carousel_263_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 152);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r16.carouselTwo[1], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function BootstrapComponent_ngb_carousel_263_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 152);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r17.carouselTwo[2], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function BootstrapComponent_ngb_carousel_263_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BootstrapComponent_ngb_carousel_263_ng_template_1_Template, 1, 1, "ng-template", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BootstrapComponent_ngb_carousel_263_ng_template_2_Template, 1, 1, "ng-template", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, BootstrapComponent_ngb_carousel_263_ng_template_3_Template, 1, 1, "ng-template", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class BootstrapComponent {
  constructor(formBuilder, config) {
    this.formBuilder = formBuilder;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 500$', '500$ - 1000$', '1000$ - 2000$', 'more than 20000$'];
    this.carouselOne = ['../../../assets/images/carousel/02.jpg', '../../../assets/images/carousel/03.jpg', '../../../assets/images/carousel/01.jpg'];
    this.carouselTwo = ['../../../assets/images/carousel/08.jpg', '../../../assets/images/carousel/03.jpg', '../../../assets/images/carousel/01.jpg'];
    config.interval = 3000;
    config.keyboard = false;
  }
  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Bootstrap Cards',
      links: [{
        name: 'Home',
        isLink: true,
        link: '/dashboard/sales'
      }, {
        name: 'Cards',
        isLink: true,
        link: '#'
      }]
    };
    this.contactForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.userProfile = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      nickName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');
    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }
  reloadUserProfile() {
    this.blockUIUserProfile.start('Loading..');
    setTimeout(() => {
      this.blockUIUserProfile.stop();
    }, 2500);
  }
}
BootstrapComponent.ɵfac = function BootstrapComponent_Factory(t) {
  return new (t || BootstrapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCarouselConfig));
};
BootstrapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BootstrapComponent,
  selectors: [["app-bootstrap"]],
  decls: 779,
  vars: 8,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "basic-examples"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], ["matchHeight", "card", 1, "row"], [1, "col-xl-3", "col-md-6", "col-sm-12"], [1, "card"], [1, "card-content"], ["src", "../../../assets/images/carousel/06.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-outline-amber", 3, "routerLink"], ["src", "../../../assets/images/carousel/08.jpg", "alt", "Card image cap", 1, "card-img", "img-fluid", "mb-1"], [1, "btn", "btn-outline-teal", 3, "routerLink"], [1, "card-subtitle", "text-muted"], ["src", "../../../assets/images/carousel/10.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "card-link", "pink", 3, "routerLink"], ["src", "../../../assets/images/carousel/09.jpg", "alt", "Card image cap", 1, "img-fluid", "my-1"], [1, "card-link", "blue", "darken-2", 3, "routerLink"], ["id", "content-types"], [1, "col-xl-4", "col-md-6", "col-sm-12"], ["src", "../../../assets/images/carousel/05.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "btn", "btn-outline-pink", 3, "routerLink"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "badge", "badge-default", "badge-pill", "bg-primary", "float-right"], [1, "badge", "badge-default", "badge-pill", "bg-info", "float-right"], [1, "badge", "badge-default", "badge-pill", "bg-warning", "float-right"], [1, "badge", "badge-default", "badge-pill", "bg-success", "float-right"], [1, "badge", "badge-default", "badge-pill", "bg-danger", "float-right"], [1, "card-link", "info", 3, "routerLink"], [1, "col-xl-4", "col-md-12", "col-sm-12"], ["id", "carousel-example-generic", "data-ride", "carousel", 1, "carousel", "slide"], ["role", "listbox", 1, "carousel-inner"], [4, "ngIf"], [1, "col-xl-12", "col-md-12", "col-sm-12"], [1, "form", 3, "formGroup"], [1, "form-body"], [1, "form-group"], ["for", "donationinput1", 1, "sr-only"], ["type", "text", "id", "donationinput1", "formControlName", "name", "placeholder", "name", "name", "name", 1, "form-control"], ["for", "donationinput2", 1, "sr-only"], ["type", "email", "id", "donationinput2", "formControlName", "email", "placeholder", "email", "name", "email", 1, "form-control"], ["for", "donationinput7", 1, "sr-only"], ["id", "donationinput7", "rows", "5", "name", "message", "formControlName", "message", "placeholder", "message", 1, "form-control", "square"], [1, "form-actions", "center"], ["type", "submit", 1, "btn", "btn-outline-primary"], ["id", "sizing"], ["class", "col-md-6", 4, "blockUI", "blockUIMessage"], ["id", "text-alignment"], [1, "col-lg-4", "col-md-12"], [1, "card-title", "info"], [1, "btn", "btn-outline-info", 3, "routerLink"], [1, "card", "text-center"], [1, "card-title", "success"], [1, "btn", "btn-outline-success", 3, "routerLink"], [1, "card", "text-right"], [1, "card-title", "danger"], [1, "btn", "btn-outline-danger", 3, "routerLink"], ["id", "header-footer"], [1, "col-xl-6", "col-md-6"], [1, "card-header"], ["src", "../../../assets/images/carousel/02.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "card-footer", "border-top-blue-grey", "border-top-lighten-5", "text-muted"], [1, "float-left"], [1, "float-right"], [1, "la", "la-angle-right"], ["id", "carousel-example", "data-ride", "carousel", 1, "carousel", "slide"], [1, "tags", "float-right"], [1, "badge", "badge-pill", "badge-primary"], [1, "badge", "badge-pill", "badge-danger"], ["id", "card-overlay"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["src", "../../../assets/images/carousel/09.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], [1, "text-muted"], [1, "card", "border-0", "box-shadow-0"], [1, "card-text", "mt-1"], ["src", "../../../assets/images/carousel/15.jpg", "alt", "Card image cap", 1, "card-img-bottom", "img-fluid"], [1, "col-xl-3", "col-lg-6", "col-sm-12"], ["src", "../../../assets/images/carousel/06.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "overlay-yellow"], ["src", "../../../assets/images/carousel/05.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "overlay-danger", "overlay-lighten-2"], [1, "card", "text-white", "border-0", "box-shadow-0"], [1, "card-img-overlay", "overlay-warning"], ["src", "../../../assets/images/carousel/09.jpg", "alt", "Card image", 1, "card-img", "img-fluid"], [1, "card-img-overlay", "overlay-blue"], ["id", "bg-variants"], [1, "col-md-6", "col-sm-12"], [1, "card", "text-white", "bg-primary", "text-center"], [1, "card-body", "pt-3"], ["src", "../../../assets/images/elements/01.png", "alt", "element 01", "width", "190", 1, "float-left"], [1, "card-title", "mt-3", "text-white"], [1, "btn", "btn-primary", "btn-darken-3"], [1, "card", "text-white", "bg-success", "text-center"], ["src", "../../../assets/images/elements/06.png", "alt", "element 02", "width", "225", 1, "mb-1"], [1, "card-title", "text-white"], [1, "card", "text-white", "bg-danger", "text-center"], ["src", "../../../assets/images/elements/14.png", "alt", "element 03", "width", "170", 1, "float-right"], [1, "btn", "btn-danger", "btn-darken-3"], [1, "card", "text-white", "bg-info", "text-center"], ["src", "../../../assets/images/elements/07.png", "alt", "element 04", "width", "210", 1, "float-left", "mt-3"], [1, "btn", "btn-info", "btn-darken-3"], [1, "card", "text-white", "bg-warning", "text-center"], ["src", "../../../assets/images/elements/04.png", "alt", "element 05", "width", "250", 1, "mb-1"], [1, "card", "text-white", "bg-blue", "text-center"], ["src", "../../../assets/images/elements/11.png", "alt", "element 06", "width", "190", 1, "float-right"], [1, "btn", "btn-blue", "btn-darken-3", "white"], ["id", "outline-variants"], [1, "card", "border-primary", "text-center", "bg-transparent"], [1, "btn", "btn-primary"], [1, "card", "border-success", "text-center", "bg-transparent"], [1, "card", "border-danger", "text-center", "bg-transparent"], ["src", "../../../assets/images/elements/01.png", "alt", "element 03", "width", "190", 1, "float-right"], [1, "card-title", "mt-3"], [1, "btn", "btn-danger"], [1, "card", "border-info", "text-center", "bg-transparent"], [1, "btn", "btn-info"], [1, "card", "border-warning", "text-center", "bg-transparent"], [1, "card", "border-blue", "text-center", "bg-transparent"], [1, "btn", "btn-blue"], ["id", "groups"], [1, "col-12"], [1, "card-group"], ["src", "../../../assets/images/carousel/04.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["src", "../../../assets/images/carousel/01.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["src", "../../../assets/images/carousel/02.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["id", "decks"], [1, "card-deck-wrapper"], [1, "card-deck"], ["src", "../../../assets/images/carousel/03.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["id", "columns"], [1, "col-md-12", "mt-1"], [1, "card-columns"], [1, "btn", "btn-outline-primary", 3, "routerLink"], ["src", "../../../assets/images/elements/01.png", "alt", "element 01", "width", "190", 1, "float-left", "img-fluid"], [1, "card", "text-white", "bg-warning", "text-center", "border-0", "box-shadow-0"], ["src", "../../../assets/images/elements/04.png", "alt", "element 05", "width", "250", 1, "mb-1", "img-fluid"], [1, "card", "text-white", "bg-success", "text-center", "border-0", "box-shadow-0"], ["src", "../../../assets/images/elements/06.png", "alt", "element 02", "width", "225", 1, "mb-1", "img-fluid"], [1, "card-img-overlay", "overlay-cyan"], [1, "card-img-overlay", "overlay-blue-grey"], [1, "card", "border-info", "text-center", "box-shadow-0", "bg-transparent"], ["src", "../../../assets/images/elements/07.png", "alt", "element 04", "width", "210", 1, "float-left", "mt-3", "img-fluid"], ["src", "../../../assets/images/carousel/02.jpg", "alt", "Card image cap", 1, "card-img", "img-fluid"], ["ngbSlide", ""], [1, "d-block", "w-100", 3, "src"], [1, "col-md-6"], [2, "height", "764.5px", 3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "form-section"], [1, "feather", "ft-user"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "la", "la-paperclip"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-outline-warning", "mr-1"], [1, "feather", "ft-x"], [1, "feather", "ft-check"], [3, "value"], [3, "options", "reloadFunction"], [1, "la", "la-eye"], ["type", "text", "id", "userinput1", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control"], ["type", "text", "id", "userinput2", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control"], ["type", "text", "id", "userinput3", "placeholder", "Username", "formControlName", "userName", 1, "form-control"], ["type", "text", "id", "userinput4", "placeholder", "Nick Name", "formControlName", "nickName", 1, "form-control"], [1, "feather", "ft-mail"], ["type", "email", "placeholder", "email", "id", "userinput5", "formControlName", "email", 1, "form-control"], ["type", "url", "placeholder", "http://", "id", "userinput6", "formControlName", "website", 1, "form-control"], ["id", "userinput8", "rows", "5", "formControlName", "bio", "placeholder", "Bio", 1, "form-control"], [1, "form-actions", "right"]],
  template: function BootstrapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Basic Examples");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease. For example, if your card has no flush content like images, feel free to put the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, ".card-body");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " class on the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, ".card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " element to consolidate your markup.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "div", 11)(21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14)(24, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Icing powder caramels macaroon. Toffee sugar plum brownie pastry gummies jelly. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 10)(31, "div", 11)(32, "div", 12)(33, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Sweet halvah drag\u00E9e jelly-o halvah carrot cake oat cake. Donut jujubes jelly chocolate cake marzipan chocolate chocolate bar.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 10)(42, "div", 11)(43, "div", 12)(44, "div", 14)(45, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Support card subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 14)(51, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Bear claw sesame snaps gummies chocolate.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Card link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Another link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 10)(58, "div", 11)(59, "div", 12)(60, "div", 14)(61, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Support card subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Topping dessert marshmallow gummi bears chupa chups marzipan.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Card link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Another link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "section", 25)(73, "div", 6)(74, "div", 7)(75, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Content Types");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 9)(80, "div", 26)(81, "div", 11)(82, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 14)(85, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Basic");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 26)(92, "div", 11)(93, "div", 12)(94, "div", 14)(95, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "List Group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "ul", 29)(100, "li", 30)(101, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " Cras justo odio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "li", 30)(105, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, " Dapibus ac facilisis in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "li", 30)(109, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, " Morbi leo risus ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "li", 30)(113, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, " Porta ac consectetur ac ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "li", 30)(117, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "8");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, " Vestibulum at eros ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 14)(121, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Card link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Another link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 37)(126, "div", 11)(127, "div", 12)(128, "div", 14)(129, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Support card subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 38)(134, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](135, BootstrapComponent_ngb_carousel_135_Template, 4, 0, "ngb-carousel", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 14)(137, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 6)(140, "div", 41)(141, "div", 11)(142, "div", 12)(143, "div", 14)(144, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Contact Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Support card subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 14)(149, "form", 42)(150, "div", 43)(151, "div", 44)(152, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 44)(156, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](158, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 44)(160, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "textarea", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 51)(164, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "section", 53)(167, "div", 6)(168, "div", 7)(169, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Sizing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Constrain the width of cards via custom CSS, our predefined grid classes, or with custom styles using our grid mixins.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](174, BootstrapComponent_div_174_Template, 50, 4, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](175, BootstrapComponent_div_175_Template, 43, 2, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "section", 55)(177, "div", 6)(178, "div", 7)(179, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Text alignment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "You can quickly change the text alignment of any card\u2014in its entirety or specific parts\u2014with our text align classes.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 6)(184, "div", 56)(185, "div", 11)(186, "div", 12)(187, "div", 14)(188, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Text Align Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "a", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 56)(197, "div", 59)(198, "div", 12)(199, "div", 14)(200, "h4", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Text Align Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 56)(209, "div", 62)(210, "div", 12)(211, "div", 14)(212, "h4", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "Text Align Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "a", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "section", 65)(221, "div", 6)(222, "div", 7)(223, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "Header and footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Add an optional header and/or footer within a card.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 9)(228, "div", 66)(229, "div", 11)(230, "div", 67)(231, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Basic Card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 12)(234, "div", 14)(235, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Basic Card With Header & Footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "img", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 14)(239, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Card link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](244, "Another link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 69)(246, "span", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](247, "3 hours ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "span", 71)(249, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "i", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 66)(253, "div", 11)(254, "div", 67)(255, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "div", 12)(258, "div", 14)(259, "h5", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](260, "Carousel Card With Header & Footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 73)(262, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](263, BootstrapComponent_ngb_carousel_263_Template, 4, 0, "ngb-carousel", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 14)(265, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Card link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, "Another link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "div", 69)(272, "span", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](273, "2 days ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "span", 74)(275, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "Branding");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "section", 77)(280, "div", 6)(281, "div", 7)(282, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Image caps, overlays & Inverted text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "Similar to headers and footers, cards include top and bottom image caps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, "Turn an image into a card background and overlay your card\u2019s text. Depending on the image, you may or may not need ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, ".text-white");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 9)(291, "div", 78)(292, "div", 11)(293, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](294, "img", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 14)(296, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, "Top Image Cap");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate bar muffin. Dessert bonbon caramels brownie chocolate bar chocolate tart drag\u00E9e. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, "Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate bar muffin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "p", 16)(303, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 78)(306, "div", 81)(307, "div", 12)(308, "div", 14)(309, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](310, "Bottom Image Cap");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, "Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate bar muffin. Dessert bonbon caramels brownie chocolate bar chocolate tart drag\u00E9e. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate bar muffin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "p", 82)(316, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](318, "img", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "div", 9)(320, "div", 84)(321, "div", 81)(322, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](323, "img", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "div", 86)(325, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "Card Image Overlay");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy chupa chups.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "p", 16)(330, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "div", 84)(333, "div", 81)(334, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](335, "img", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "div", 88)(337, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "Card Image Overlay");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy chupa chups.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "p", 16)(342, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "div", 84)(345, "div", 89)(346, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](347, "img", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 90)(349, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](350, "Inverse Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](352, "Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy chupa chups.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "p", 16)(354, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "div", 84)(357, "div", 89)(358, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](359, "img", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "div", 92)(361, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, "Inverse Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](364, "Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy chupa chups.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "p", 16)(366, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "section", 93)(369, "div", 6)(370, "div", 7)(371, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "Background variants");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "Cards include their own variant classes for quickly changing the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, "background-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](377, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](379, "border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, " of a card. Darker colors require the use of ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, ".text-white");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](383, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](384, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](385, "Cards include a class for quickly toggling the text color. By default, cards use dark text and assume a light background. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, ".text-white");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388, " for white text and specify the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, "background-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](393, "border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](394, " to go with it. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](395, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](396, "You can also use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, ".text-white");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399, " with the contextual backgrounds variants. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "div", 9)(401, "div", 94)(402, "div", 95)(403, "div", 12)(404, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](405, "img", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](406, "h4", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](407, "Brand Minute");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](409, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "button", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "div", 94)(413, "div", 100)(414, "div", 12)(415, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](416, "img", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "h3", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, "Ceramic Bottle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420, "456 items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](421, "div", 94)(422, "div", 103)(423, "div", 12)(424, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](425, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "h4", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](427, "Brand Minute");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](429, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](430, "button", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](431, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](432, "div", 94)(433, "div", 106)(434, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](435, "img", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "div", 96)(437, "h4", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, "New Arriaval");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](440, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "button", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "div", 94)(444, "div", 109)(445, "div", 12)(446, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](447, "img", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](448, "h4", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](449, "Storage Device");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](450, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](451, "945 items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](452, "div", 94)(453, "div", 111)(454, "div", 12)(455, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](456, "img", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "h4", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](458, "New Arriaval");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](460, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "button", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](462, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "section", 114)(464, "div", 6)(465, "div", 7)(466, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](467, "Outline variants");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](468, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](469, "In need of a colored card, but not the hefty background colors they bring? Replace the default modifier classes with the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](470, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](471, ".border-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472, " ones to style just the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](473, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](474, "border-color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475, " of a card.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](476, "div", 9)(477, "div", 94)(478, "div", 115)(479, "div", 12)(480, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](481, "img", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](482, "h4", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](483, "Brand Minute");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](484, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](485, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](486, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](487, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](488, "div", 94)(489, "div", 117)(490, "div", 12)(491, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](492, "img", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](493, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, "Ceramic Bottle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](496, "456 items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](497, "div", 94)(498, "div", 118)(499, "div", 12)(500, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](501, "img", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](502, "h4", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](503, "Brand Minute");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](504, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](505, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](506, "button", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](507, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](508, "div", 94)(509, "div", 122)(510, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](511, "img", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](512, "div", 96)(513, "h4", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](514, "New Arriaval");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](515, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](516, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](517, "button", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](518, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](519, "div", 94)(520, "div", 124)(521, "div", 12)(522, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](523, "img", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](524, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](525, "Storage Device");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](526, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](527, "945 items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](528, "div", 94)(529, "div", 125)(530, "div", 12)(531, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](532, "img", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](533, "h4", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](534, "New Arriaval");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](535, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](536, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](537, "button", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](538, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](539, "section", 127)(540, "div", 6)(541, "div", 7)(542, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](543, "Groups");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](544, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](545, "Use card groups to render cards as a single, attached element with equal width and height columns. By default, card groups use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](546, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](547, "display: table;");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](548, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](550, "table-layout: fixed;");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](551, " to achieve their uniform sizing. However, enabling flexbox mode can switch that to use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](552, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](553, "display: flex;");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](554, " and provide the same effect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](555, "div", 6)(556, "div", 128)(557, "div", 129)(558, "div", 11)(559, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](560, "img", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "div", 14)(562, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](563, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](564, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](565, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](566, "p", 16)(567, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](568, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](569, "div", 11)(570, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](571, "img", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](572, "div", 14)(573, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](574, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](575, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](576, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](577, "p", 16)(578, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](579, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](580, "div", 11)(581, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](582, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](583, "div", 14)(584, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](585, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](586, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](587, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](588, "p", 16)(589, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](590, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](591, "div", 11)(592, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](593, "img", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](594, "div", 14)(595, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](596, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](597, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](598, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](599, "p", 16)(600, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](601, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](602, "section", 133)(603, "div", 6)(604, "div", 7)(605, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](606, "Decks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](607, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](608, "Need a set of equal width and height cards that aren\u2019t attached to one another? Use card decks. By default, card decks require two wrapping elements: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](609, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](610, ".card-deck-wrapper");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](611, " and a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](612, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](613, ".card-deck");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](614, ". We use table styles for the sizing and the gutters on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](615, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](616, ".card-deck");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](617, ". The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](618, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](619, ".card-deck-wrapper");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](620, " is used to negative margin out the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](621, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](622, "border-spacing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](623, " on the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](624, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](625, ".card-deck");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](626, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](627, "div", 6)(628, "div", 128)(629, "div", 134)(630, "div", 135)(631, "div", 11)(632, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](633, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](634, "div", 14)(635, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](636, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](637, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](638, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](639, "p", 16)(640, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](641, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](642, "div", 11)(643, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](644, "img", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](645, "div", 14)(646, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](647, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](648, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](649, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](650, "p", 16)(651, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](652, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](653, "div", 11)(654, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](655, "img", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](656, "div", 14)(657, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](658, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](659, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](660, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](661, "p", 16)(662, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](663, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](664, "div", 11)(665, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](666, "img", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](667, "div", 14)(668, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](669, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](670, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](671, "This card has supporting text below as a natural lead-in to additional content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](672, "p", 16)(673, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](674, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](675, "section", 137)(676, "div", 6)(677, "div", 7)(678, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](679, "Columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](680, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](681, "Cards can be organized into Masonry-like columns with just CSS by wrapping them in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](682, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](683, ".card-columns");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](684, ". Only applies to small devices and above. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](685, "p")(686, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](687, "Heads up!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](688, " This is ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](689, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](690, "not available in IE9");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](691, " and below as they have no support for the column-* CSS properties.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](692, "div", 6)(693, "div", 138)(694, "div", 139)(695, "div", 11)(696, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](697, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](698, "div", 14)(699, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](700, "Card title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](701, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](702, "Some quick example text to build on the card title and make up the bulk of the card's content.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](703, "a", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](704, "Go somewhere");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](705, "div", 95)(706, "div", 12)(707, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](708, "img", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](709, "h4", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](710, "Brand Minute");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](711, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](712, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](713, "button", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](714, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](715, "div", 142)(716, "div", 12)(717, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](718, "img", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](719, "h4", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](720, "Storage Device");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](721, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](722, "945 items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](723, "div", 144)(724, "div", 12)(725, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](726, "img", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](727, "h3", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](728, "Ceramic Bottle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](729, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](730, "456 items");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](731, "div", 81)(732, "div", 12)(733, "div", 14)(734, "h4", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](735, "Bottom Image Cap");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](736, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](737, "Jelly-o sesame snaps cheesecake topping. Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate bar muffin. Dessert bonbon caramels brownie chocolate bar chocolate tart drag\u00E9e.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](738, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](739, "Cupcake fruitcake macaroon donut pastry gummies tiramisu chocolate bar muffin. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](740, "p", 82)(741, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](742, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](743, "img", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](744, "div", 89)(745, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](746, "img", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](747, "div", 146)(748, "h4", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](749, "Inverse Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](750, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](751, "Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy chupa chups carrot cake topping chupa chups.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](752, "p", 16)(753, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](754, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](755, "div", 89)(756, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](757, "img", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](758, "div", 147)(759, "h4", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](760, "Inverse Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](761, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](762, "Sugar plum tiramisu sweet. Cake jelly marshmallow cotton candy chupa chups carrot cake topping chupa chups.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](763, "p", 16)(764, "small", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](765, "Last updated 3 mins ago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](766, "div", 148)(767, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](768, "img", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](769, "div", 96)(770, "h4", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](771, "New Arriaval");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](772, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](773, "Donut toffee candy brownie souffl\u00E9 macaroon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](774, "button", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](775, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](776, "div", 81)(777, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](778, "img", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.carouselOne);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.contactForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "userProfile")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.carouselTwo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbSlide, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__.MatchHeightDirective, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n[_nghost-%COMP%]     .list-group-item {\n  border: 1px solid #E4E7ED !important;\n}\n\n[_nghost-%COMP%]     .carousel-item-next:not(.carousel-item-left){\n  transform: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImJvb3RzdHJhcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGlzdC1ncm91cC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U0RTdFRCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNhcm91c2VsLWl0ZW0tbmV4dDpub3QoLmNhcm91c2VsLWl0ZW0tbGVmdCl7XG4gIHRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9jYXJkcy9ib290c3RyYXAvYm9vdHN0cmFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQSw0cUJBQTRxQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNEU3RUQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1pdGVtLW5leHQ6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpe1xuICB0cmFuc2Zvcm06IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('projectInfo')], BootstrapComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('userProfile')], BootstrapComponent.prototype, "blockUIUserProfile", void 0);

/***/ }),

/***/ 84106:
/*!***********************************************!*\
  !*** ./src/app/content/cards/cards.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsModule": () => (/* binding */ CardsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/bootstrap.component */ 24300);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ 86196);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);













class CardsModule {}
CardsModule.ɵfac = function CardsModule_Factory(t) {
  return new (t || CardsModule)();
};
CardsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: CardsModule
});
CardsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_4__.MatchHeightModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_9__.BlockUIModule.forRoot({
    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
    path: 'bootstrap',
    component: _bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_0__.BootstrapComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CardsModule, {
    declarations: [_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_0__.BootstrapComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_4__.MatchHeightModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_9__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_content_cards_cards_module_ts.js.map