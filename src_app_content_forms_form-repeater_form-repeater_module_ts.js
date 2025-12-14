"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_forms_form-repeater_form-repeater_module_ts"],{

/***/ 22851:
/*!************************************************************************!*\
  !*** ./src/app/content/forms/form-repeater/form-repeater.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormRepeaterComponent": () => (/* binding */ FormRepeaterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ 74986);









function FormRepeaterComponent_div_7_div_8_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prof_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", prof_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](prof_r7);
  }
}
function FormRepeaterComponent_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 38)(2, "div", 39)(3, "div", 40)(4, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br")(7, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 40)(9, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br")(12, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 40)(14, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br")(17, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 47)(19, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br")(22, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 40)(24, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Profession");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, FormRepeaterComponent_div_7_div_8_option_28_Template, 2, 2, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 53)(30, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormRepeaterComponent_div_7_div_8_Template_button_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const i_r5 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.removeRepeat(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.professions);
  }
}
function FormRepeaterComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "m-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function FormRepeaterComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.reloadRepeatingForms($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Repeating Forms ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 33)(6, "div", 34)(7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FormRepeaterComponent_div_7_div_8_Template, 33, 2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 36)(11, "div", 29)(12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormRepeaterComponent_div_7_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.addRepeat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.repeatForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.repeatFormGroup.controls);
  }
}
function FormRepeaterComponent_div_10_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", interest_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](interest_r16);
  }
}
function FormRepeaterComponent_div_10_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", range_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](range_r17);
  }
}
function FormRepeaterComponent_div_10_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 38)(2, "div", 64)(3, "div", 65)(4, "div", 66)(5, "label", 67)(6, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FormRepeaterComponent_div_10_div_23_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.onFileChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 70)(9, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormRepeaterComponent_div_10_div_23_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.removeFile(i_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r19);
  }
}
function FormRepeaterComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "m-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function FormRepeaterComponent_div_10_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 57)(6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 17)(15, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FormRepeaterComponent_div_10_option_16_Template, 2, 2, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 17)(18, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, FormRepeaterComponent_div_10_option_19_Template, 2, 2, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 61)(21, "div", 62)(22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FormRepeaterComponent_div_10_div_23_Template, 11, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormRepeaterComponent_div_10_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.addFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Add new file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "textarea", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.projectInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.hobby);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.projectFormGroup.controls);
  }
}
function FormRepeaterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72)(1, "div", 64)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormRepeaterComponent_div_27_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const i_r27 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.removePhone(i_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r27);
  }
}
class FormRepeaterComponent {
  constructor(formBuilder, cd) {
    this.formBuilder = formBuilder;
    this.cd = cd;
    this.options = {
      minimize: true,
      reload: true,
      expand: true,
      close: true
    };
    this.professions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
    this.hobby = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['Budget', 'less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  }
  get repeatFormGroup() {
    return this.repeatForm.get('repeatArray');
  }
  get projectFormGroup() {
    return this.projectInfoForm.get('projectArray');
  }
  get userFormGroup() {
    return this.userProfileForm.get('userArray');
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Form Repeater',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Repeater',
        'isLink': true,
        'link': '#'
      }]
    };
    this.repeatForm = this.formBuilder.group({
      repeatArray: this.formBuilder.array([this.createRepeat()])
    });
    this.repeatList = this.repeatForm.get('repeatArray');
    this.projectInfoForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      hobby: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      projectArray: this.formBuilder.array([this.createFile()]),
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.projectList = this.projectInfoForm.get('projectArray');
    this.userProfileForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      userArray: this.formBuilder.array([this.createPhone()]),
      occuption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.userList = this.userProfileForm.get('userArray');
  }
  createRepeat() {
    return this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      profession: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  createFile() {
    return this.formBuilder.group({
      file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  createPhone() {
    return this.formBuilder.group({
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  addRepeat() {
    this.repeatList.push(this.createRepeat());
  }
  addFile() {
    this.projectList.push(this.createFile());
  }
  addPhone() {
    this.userList.push(this.createPhone());
  }
  removeRepeat(index) {
    this.repeatList.removeAt(index);
  }
  removeFile(index) {
    this.projectList.removeAt(index);
  }
  removePhone(index) {
    this.userList.removeAt(index);
  }
  getRepeatFormGroup(index) {
    const formGroup = this.repeatList.controls[index];
    return formGroup;
  }
  getProjectFormGroup(index) {
    const formGroup = this.projectList.controls[index];
    return formGroup;
  }
  getUserFormGroup(index) {
    const formGroup = this.userList.controls[index];
    return formGroup;
  }
  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.projectInfoForm.patchValue({
          file: reader.result
        });
        this.cd.markForCheck();
      };
    }
  }
  reloadRepeatingForms() {
    this.blockUIRepeatingForms.start('Loading..');
    setTimeout(() => {
      this.blockUIRepeatingForms.stop();
    }, 2500);
  }
  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');
    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }
}
FormRepeaterComponent.ɵfac = function FormRepeaterComponent_Factory(t) {
  return new (t || FormRepeaterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
FormRepeaterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FormRepeaterComponent,
  selectors: [["app-form-repeater"]],
  decls: 35,
  vars: 7,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "form-repeater"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "form-control-repeater"], ["class", "col-md-6", 4, "blockUI", "blockUIMessage"], [1, "col-md-6"], [1, "card"], [1, "card-header"], ["id", "tel-repeater", 1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "row", 3, "formGroup"], [1, "form-group", "col-md-6", "mb-2"], ["type", "text", "formControlName", "name", "placeholder", "Name", "name", "name", 1, "form-control"], ["type", "text", "formControlName", "company", "placeholder", "Company", "name", "company", 1, "form-control"], [1, "form-group", "col-12", "mb-2"], ["type", "text", "formControlName", "email", "placeholder", "E-mail", "name", "email", 1, "form-control"], [1, "form-group", "col-12", "mb-2", "contact-repeater"], ["formArrayName", "userArray", 1, ""], ["class", "", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "feather", "ft-plus"], ["type", "text", "formControlName", "occuption", "placeholder", "Occuption", "name", "occuption", 1, "form-control"], ["rows", "5", "formControlName", "bio", "name", "bio", "placeholder", "Bio", 1, "form-control"], [1, "col-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [3, "formGroup"], ["formArrayName", "repeatArray", 1, "card-body"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "form-group", "overflow-hidden"], ["data-repeater-create", "", 1, "btn", "btn-primary", 3, "click"], [1, "repeater-default"], [1, "row", 3, "formGroupName"], [1, "form-group", "mb-1", "col-sm-12", "col-md-2"], ["for", "email-addr"], ["type", "email", "formControlName", "email", "id", "email-addr", "placeholder", "Enter email", 1, "form-control"], ["for", "pass"], ["type", "password", "formControlName", "password", "id", "pass", "placeholder", "Password", 1, "form-control"], ["for", "bio", 1, "cursor-pointer"], ["formControlName", "bio", "id", "bio", "rows", "2", 1, "form-control"], [1, "skin", "skin-flat", "form-group", "mb-1", "col-sm-12", "col-md-2"], ["for", "tel-input"], ["formControlName", "phone", "type", "tel", "value", "1-(555)-555-5555", "id", "tel-input", 1, "form-control"], ["for", "profession"], ["id", "profession", "formControlName", "profession", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-sm-12", "col-md-2", "text-center", "mt-2"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "feather", "ft-x"], [3, "value"], [1, "form", "row", 3, "formGroup"], ["type", "text", "formControlName", "phone", "placeholder", "Phone", "name", "phone", 1, "form-control"], ["name", "interested", "formControlName", "hobby", 1, "form-control"], ["name", "budget", "formControlName", "budget", 1, "form-control"], [1, "form-group", "col-12", "mb-2", "file-repeater"], ["formArrayName", "projectArray", 1, ""], ["rows", "5", "formControlName", "comment", "name", "comment", "placeholder", "About Project", 1, "form-control"], [1, "", 3, "formGroupName"], [1, "row", "mb-1"], [1, "col-9", "col-xl-10"], [1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "file", 3, "change"], [1, "file-custom"], [1, "col-2", "col-xl-2"], ["type", "button", 1, "btn", "btn-icon", "btn-danger", "mr-1", 3, "click"], [1, ""], [1, "input-group", "mb-1"], ["type", "tel", "placeholder", "Telephone", "formControlName", "phone", "id", "example-tel-input", 1, "form-control"]],
  template: function FormRepeaterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FormRepeaterComponent_div_7_Template, 15, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section", 8)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FormRepeaterComponent_div_10_Template, 29, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "User Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "form", 16)(19, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 22)(26, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, FormRepeaterComponent_div_27_Template, 6, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormRepeaterComponent_Template_button_click_28_listener() {
        return ctx.addPhone();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Add new telephone number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "textarea", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "repeatingForms")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userProfileForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.userFormGroup.controls);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tcmVwZWF0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRCIsImZpbGUiOiJmb3JtLXJlcGVhdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLXJlcGVhdGVyL2Zvcm0tcmVwZWF0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQSx3WUFBd1kiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('repeatingForms')], FormRepeaterComponent.prototype, "blockUIRepeatingForms", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('projectInfo')], FormRepeaterComponent.prototype, "blockUIProjectInfo", void 0);

/***/ }),

/***/ 31015:
/*!*********************************************************************!*\
  !*** ./src/app/content/forms/form-repeater/form-repeater.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormRepeaterModule": () => (/* binding */ FormRepeaterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _form_repeater_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-repeater.component */ 22851);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_layout/blockui/block-template.component */ 86196);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);












class FormRepeaterModule {}
FormRepeaterModule.ɵfac = function FormRepeaterModule_Factory(t) {
  return new (t || FormRepeaterModule)();
};
FormRepeaterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FormRepeaterModule
});
FormRepeaterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_4__.MatchHeightModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_8__.BlockUIModule.forRoot({
    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
    path: '',
    component: _form_repeater_component__WEBPACK_IMPORTED_MODULE_0__.FormRepeaterComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormRepeaterModule, {
    declarations: [_form_repeater_component__WEBPACK_IMPORTED_MODULE_0__.FormRepeaterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_4__.MatchHeightModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_8__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_content_forms_form-repeater_form-repeater_module_ts.js.map