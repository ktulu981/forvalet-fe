"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_forms_form-layouts_form-layouts_module_ts"],{

/***/ 63591:
/*!*********************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/basic-forms/basic-forms.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFormsComponent": () => (/* binding */ BasicFormsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);











const _c0 = ["f"];
function BasicFormsComponent_div_7_small_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_22_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.f.firstName.errors.required);
  }
}
function BasicFormsComponent_div_7_small_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_28_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.f.lastName.errors.required);
  }
}
function BasicFormsComponent_div_7_small_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_35_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BasicFormsComponent_div_7_small_35_div_2_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.f.email.errors.email);
  }
}
function BasicFormsComponent_div_7_small_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_41_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.f.phone.errors.required);
  }
}
function BasicFormsComponent_div_7_small_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Company is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_49_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.f.company.errors.required);
  }
}
function BasicFormsComponent_div_7_option_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", interest_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](interest_r25);
  }
}
function BasicFormsComponent_div_7_small_57_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Interest is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_57_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.f.interestedIn.errors.required);
  }
}
function BasicFormsComponent_div_7_option_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", range_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](range_r27);
  }
}
function BasicFormsComponent_div_7_small_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Budget is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_64_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.f.budget.errors.required);
  }
}
function BasicFormsComponent_div_7_small_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "File is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_71_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.f.selectFile.errors.required);
  }
}
function BasicFormsComponent_div_7_small_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Project Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_7_small_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasicFormsComponent_div_7_small_76_div_1_Template, 2, 0, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.f.aboutProject.errors.required);
  }
}
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function BasicFormsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function BasicFormsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Project Info (Reactive Forms Validation) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "This is the most basic and default form having form sections. To add form section use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, ".form-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " class with any heading tags. This form has the buttons on the bottom left corner which is the default position.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BasicFormsComponent_div_7_Template_form_ngSubmit_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.onProjectInfoSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 16)(13, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 22)(17, "div", 8)(18, "div", 17)(19, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "First Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, BasicFormsComponent_div_7_small_22_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8)(24, "div", 17)(25, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Last Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, BasicFormsComponent_div_7_small_28_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 22)(30, "div", 8)(31, "div", 17)(32, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "E-mail *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, BasicFormsComponent_div_7_small_35_Template, 3, 2, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8)(37, "div", 17)(38, "label", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Contact Number *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function BasicFormsComponent_div_7_Template_input_keypress_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.keyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, BasicFormsComponent_div_7_small_41_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 17)(46, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Company *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, BasicFormsComponent_div_7_small_49_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 22)(51, "div", 8)(52, "div", 17)(53, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Interested in *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "select", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BasicFormsComponent_div_7_option_56_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, BasicFormsComponent_div_7_small_57_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 8)(59, "div", 17)(60, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Budget *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "select", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, BasicFormsComponent_div_7_option_63_Template, 2, 2, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BasicFormsComponent_div_7_small_64_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 17)(66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 141)(70, "span", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, BasicFormsComponent_div_7_small_71_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 17)(73, "label", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "About Project *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "textarea", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, BasicFormsComponent_div_7_small_76_Template, 2, 1, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 39)(78, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c1, ctx_r0.submitted && ctx_r0.f.firstName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.firstName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c1, ctx_r0.submitted && ctx_r0.f.lastName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.lastName.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c1, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c1, ctx_r0.submitted && ctx_r0.f.phone.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.phone.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c1, ctx_r0.submitted && ctx_r0.f.company.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.company.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c1, ctx_r0.submitted && ctx_r0.f.interestedIn.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.interestedIn.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c1, ctx_r0.submitted && ctx_r0.f.budget.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.budget.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](36, _c1, ctx_r0.submitted && ctx_r0.f.selectFile.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.selectFile.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c1, ctx_r0.submitted && ctx_r0.f.aboutProject.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.aboutProject.errors);
  }
}
function BasicFormsComponent_div_8_small_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_small_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_small_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "User Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_small_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nick Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_small_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please enter a valid email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_small_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "url error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_small_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " contact Number required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_small_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Bio is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasicFormsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function BasicFormsComponent_div_8_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.reloadUserProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " User Profile (Template-Driven Forms Validation) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "You can always change the border color of the form controls using ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "border-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " class. In this example we have user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "border-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " class for form controls. Form action buttons are on the bottom right position.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "form", 148, 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function BasicFormsComponent_div_8_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r35.form.valid);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16)(17, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " About User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 22)(21, "div", 8)(22, "div", 17)(23, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "First Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 152, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BasicFormsComponent_div_8_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r55.model.firstName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, BasicFormsComponent_div_8_small_27_Template, 2, 0, "small", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8)(29, "div", 17)(30, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Last Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 156, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BasicFormsComponent_div_8_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.model.lastName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, BasicFormsComponent_div_8_small_34_Template, 2, 0, "small", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 22)(36, "div", 8)(37, "div", 17)(38, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Username *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 159, 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BasicFormsComponent_div_8_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r57.model.userName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, BasicFormsComponent_div_8_small_42_Template, 2, 0, "small", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 8)(44, "div", 17)(45, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Nick Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 162, 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BasicFormsComponent_div_8_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r58.model.nickName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, BasicFormsComponent_div_8_small_49_Template, 2, 0, "small", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "h4", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Contact Info & Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 17)(54, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "input", 166, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BasicFormsComponent_div_8_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r59.model.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BasicFormsComponent_div_8_small_58_Template, 2, 0, "small", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 17)(60, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 169, 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BasicFormsComponent_div_8_small_64_Template, 2, 0, "small", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 17)(66, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "input", 171, 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BasicFormsComponent_div_8_Template_input_ngModelChange_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r60.model.phone = $event);
    })("keypress", function BasicFormsComponent_div_8_Template_input_keypress_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r61.keyPress($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, BasicFormsComponent_div_8_small_70_Template, 2, 0, "small", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 17)(72, "label", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Bio *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "textarea", 174, 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BasicFormsComponent_div_8_Template_textarea_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r62.model.bio = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, BasicFormsComponent_div_8_small_76_Template, 2, 0, "small", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 176)(78, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](48);
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](57);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](63);
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](69);
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](75);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.model.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r36.valid && _r35.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.model.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r38.valid && _r35.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.model.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r40.valid && _r35.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.model.nickName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r42.valid && _r35.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.model.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r44.valid && _r35.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (_r46.errors == null ? null : _r46.errors.url) && _r35.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.model.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r48.valid && _r35.submitted);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.model.bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r50.valid && _r35.submitted);
  }
}
function BasicFormsComponent_option_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prio_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", prio_r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prio_r63);
  }
}
function BasicFormsComponent_option_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", stat_r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r64);
  }
}
class BasicFormsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.model = {};
    this.options = {
      minimize: true,
      reload: true,
      expand: true,
      close: true
    };
    this.submitted = false;
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
    this.priority = ['Low', 'Medium', 'High'];
    this.status = ['Not Started', 'Started', 'Fixed'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Basic Forms',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Basic Forms',
        'isLink': false
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      selectFile: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.issueTracking = this.formBuilder.group({
      issueTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      openedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateOpened: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateFixed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.complaintForm = this.formBuilder.group({
      companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      complaintDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      supervisorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      complaintDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      signature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.donation = this.formBuilder.group({
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      donationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.eventRegistration1 = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      customer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.eventRegistration2 = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      customer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
  }
  get f() {
    return this.projectInfo.controls;
  }
  onProjectInfoSubmit() {
    this.submitted = true;
    if (this.projectInfo.invalid) {
      return;
    }
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
  keyPress(event) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
BasicFormsComponent.ɵfac = function BasicFormsComponent_Factory(t) {
  return new (t || BasicFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};
BasicFormsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BasicFormsComponent,
  selectors: [["app-basic-forms"]],
  viewQuery: function BasicFormsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, true);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.userProfileForm = _t.first);
    }
  },
  decls: 392,
  vars: 13,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "basic-form-layouts"], ["matchHeight", "card", 1, "row"], ["class", "col-md-6", 4, "blockUI", "blockUIMessage"], [1, "col-md-6"], [1, "card"], [1, "card-header"], ["id", "basic-layout-tooltip", 1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-text"], [3, "formGroup"], [1, "form-body"], [1, "form-group"], ["for", "issueinput1"], ["type", "text", "id", "issueinput1", "placeholder", "issue title", "ngbTooltip", "Issue Title", "placement", "top", "formControlName", "issueTitle", 1, "form-control"], ["for", "issueinput2"], ["type", "text", "id", "issueinput2", "placeholder", "opened by", "ngbTooltip", "Opened By", "placement", "top", "formControlName", "openedBy", 1, "form-control"], [1, "row"], ["for", "issueinput3"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], ["for", "issueinput4"], ["d2", "ngbDatepicker"], ["for", "issueinput5"], ["id", "issueinput5", "ngbTooltip", "Priority", "placement", "top", "formControlName", "priority", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "issueinput6"], ["id", "issueinput6", "ngbTooltip", "Status", "placement", "top", "formControlName", "status", 1, "form-control"], ["for", "issueinput8"], ["id", "issueinput8", "rows", "5", "placeholder", "comments", "ngbTooltip", "Comments", "placement", "top", "formControlName", "comment", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], ["id", "basic-layout-icons", 1, "card-title"], ["for", "timesheetinput1"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["for", "timesheetinput2"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["for", "timesheetinput3"], ["d3", "ngbDatepicker"], [1, "feather", "ft-message-square"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["for", "timesheetinput5"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["for", "timesheetinput6"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], ["for", "timesheetinput7"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "right"], ["id", "basic-layout-round-controls", 1, "card-title"], ["for", "complaintinput1"], ["type", "text", "id", "complaintinput1", "placeholder", "company name", "formControlName", "companyName", 1, "form-control", "round"], ["for", "complaintinput2"], ["type", "text", "id", "complaintinput2", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control", "round"], ["for", "complaintinput3"], ["d4", "ngbDatepicker"], ["for", "complaintinput4"], ["type", "text", "id", "complaintinput4", "placeholder", "supervisor name", "formControlName", "supervisorName", 1, "form-control", "round"], ["for", "complaintinput5"], ["id", "complaintinput5", "rows", "5", "formControlName", "complaintDetails", "placeholder", "details", 1, "form-control", "round"], ["for", "complaintinput6"], ["type", "text", "id", "complaintinput6", "placeholder", "signature", "formControlName", "signature", 1, "form-control", "round"], ["id", "basic-layout-square-controls", 1, "card-title"], ["for", "donationinput1"], ["type", "text", "id", "donationinput1", "placeholder", "name", "formControlName", "fullName", 1, "form-control", "square"], ["for", "donationinput2"], ["type", "email", "id", "donationinput2", "placeholder", "email", "formControlName", "email", 1, "form-control", "square"], ["for", "donationinput3"], ["type", "tel", "id", "donationinput3", "formControlName", "contact", 1, "form-control", "square"], ["for", "donationinput4"], ["type", "text", "id", "donationinput4", "placeholder", "type of donation", "formControlName", "donationType", 1, "form-control", "square"], ["type", "text", "placeholder", "amount", "aria-label", "Amount (to the nearest dollar)", "formControlName", "amount", 1, "form-control", "square"], ["for", "donationinput7"], ["id", "donationinput7", "rows", "5", "formControlName", "comment", "placeholder", "comments", 1, "form-control", "square"], [1, "col-md-12"], ["id", "basic-layout-form-center", 1, "card-title"], [1, "row", "justify-content-md-center"], ["for", "eventInput1"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventInput2"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventInput3"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventInput4"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventInput5"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "value", "yes", "id", "yes", "formControlName", "customer", 1, "custom-control-input"], ["for", "yes", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "value", "no", "id", "no", "formControlName", "customer", 1, "custom-control-input"], ["for", "no", 1, "custom-control-label"], [1, "form-actions", "text-center"], ["id", "basic-layout-card-center", 1, "card-title"], ["type", "radio", "value", "yes2", "id", "yes2", "formControlName", "customer2", 1, "custom-control-input"], ["for", "yes2", 1, "custom-control-label"], ["type", "radio", "value", "no2", "id", "no2", "formControlName", "customer2", 1, "custom-control-input"], ["for", "no2", 1, "custom-control-label"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [3, "formGroup", "ngSubmit"], [1, "form-section"], ["for", "projectinput1"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control", 3, "ngClass"], ["class", "form-text text-muted danger", "class", "invalid-feedback", 4, "ngIf"], ["for", "projectinput2"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control", 3, "ngClass"], ["for", "projectinput3"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control", 3, "ngClass"], ["for", "projectinput4"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control", 3, "ngClass", "keypress"], [1, "la", "la-paperclip"], ["for", "companyName"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control", 3, "ngClass"], ["for", "projectinput5"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control", 3, "ngClass"], ["for", "projectinput6"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control", 3, "ngClass"], ["id", "projectinput7", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile", 2, "margin-left", "3px", 3, "ngClass"], [1, "file-custom"], ["for", "projectinput8"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], [3, "value"], [3, "ngSubmit"], ["f", "ngForm"], [1, "la", "la-eye"], ["for", "userinput1"], ["type", "text", "id", "userinput1", "placeholder", "First Name", "name", "firstname", "required", "", 1, "form-control", "border-primary", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "form-text text-muted danger", 4, "ngIf"], ["for", "userinput2"], ["type", "text", "id", "userinput2", "placeholder", "Last Name", "name", "lastname", "required", "", 1, "form-control", "border-primary", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["for", "userinput3"], ["type", "text", "id", "userinput3", "placeholder", "Username", "name", "username", "required", "", 1, "form-control", "border-primary", 3, "ngModel", "ngModelChange"], ["userName", "ngModel"], ["for", "userinput4"], ["type", "text", "id", "userinput4", "placeholder", "Nick Name", "name", "nickname", "required", "", 1, "form-control", "border-primary", 3, "ngModel", "ngModelChange"], ["nickName", "ngModel"], [1, "feather", "ft-mail"], ["for", "userinput5"], ["type", "email", "placeholder", "email", "id", "userinput5", "name", "email", "required", "", "email", "", 1, "form-control", "border-primary", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "userinput6"], ["type", "text", "placeholder", "http://", "id", "userinput6", "ngModel", "", "name", "url", "url", "", 1, "form-control", "border-primary"], ["url", "ngModel"], ["id", "userinput7", "type", "tel", "name", "phone", "required", "", 1, "form-control", "border-primary", 3, "ngModel", "ngModelChange", "keypress"], ["phone", "ngModel"], ["for", "userinput8"], ["type", "text", "id", "userinput8", "rows", "5", "placeholder", "Bio", "name", "bio", "required", "", 1, "form-control", "border-primary", 3, "ngModel", "ngModelChange"], ["bio", "ngModel"], [1, "form-actions", "text-right"], [1, "form-text", "text-muted", "danger"]],
  template: function BasicFormsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BasicFormsComponent_div_7_Template, 84, 40, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BasicFormsComponent_div_8_Template, 84, 16, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Issue Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "This form shows tooltips on hover to provide useful information while user is filling the form. Use data attributes like toggle ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "data-toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, ", trigger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "data-trigger");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, ", placement ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "data-placement");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, ", title ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "data-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " to show tooltips on form controls.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "form", 15)(33, "div", 16)(34, "div", 17)(35, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Issue Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 17)(39, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Opened By");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 22)(43, "div", 8)(44, "div", 17)(45, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Date Opened");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 27)(51, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicFormsComponent_Template_div_click_51_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 8)(54, "div", 17)(55, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Date Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "input", 25, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 27)(61, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicFormsComponent_Template_div_click_61_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](59);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 17)(64, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "select", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, BasicFormsComponent_option_67_Template, 2, 2, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 17)(69, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "select", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, BasicFormsComponent_option_72_Template, 2, 2, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 17)(74, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "textarea", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 39)(78, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 8)(85, "div", 9)(86, "div", 10)(87, "h4", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 12)(90, "div", 13)(91, "div", 14)(92, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "This form shows the use of icons with form controls. Define the position of the icon using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "has-icon-right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " class. Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "icon-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " class to define the icon for the form control. See Icons sections for the list of icons you can use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "form", 15)(104, "div", 16)(105, "div", 17)(106, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Employee Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "i", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 17)(113, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 17)(120, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 46)(123, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "input", 25, 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 27)(127, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicFormsComponent_Template_div_click_127_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](125);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r6.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 17)(132, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Rate Per Hour");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 56)(135, "div", 57)(136, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "input", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 27)(140, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 22)(143, "div", 8)(144, "div", 17)(145, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Start Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 8)(152, "div", 17)(153, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "End Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](156, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](157, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](158, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 17)(160, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "textarea", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 68)(167, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](168, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 6)(174, "div", 8)(175, "div", 9)(176, "div", 10)(177, "h4", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "Complaint Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 12)(180, "div", 13)(181, "div", 14)(182, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "This is a variation to the default form control styling. In this example all the form controls has round styling. To apply round style add class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, " to any form control.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "form", 15)(188, "div", 16)(189, "div", 17)(190, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "Company Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 17)(194, "label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Employee Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 17)(198, "label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](199, "Date of Complaint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "input", 25, 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "div", 27)(204, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasicFormsComponent_Template_div_click_204_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](202);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r7.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 17)(207, "label", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Supervisor's Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](209, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 17)(211, "label", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Complaint Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "textarea", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "div", 17)(215, "label", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "Signature");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "div", 39)(219, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](220, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 8)(226, "div", 9)(227, "div", 10)(228, "h4", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Donation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 12)(231, "div", 13)(232, "div", 14)(233, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, "This is another variation to the default form control styling. In this example all the form controls has square styling. To apply square style add class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "square");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, " to any form control.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "form", 15)(239, "div", 16)(240, "div", 17)(241, "label", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](243, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "div", 17)(245, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 17)(249, "label", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](250, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 17)(253, "label", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](254, "Dontaion Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](255, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 17)(257, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "div", 56)(260, "div", 57)(261, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](263, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 27)(265, "span", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "div", 17)(268, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](270, "textarea", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "div", 68)(272, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](273, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](274, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](276, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "div", 6)(279, "div", 94)(280, "div", 9)(281, "div", 10)(282, "h4", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "div", 12)(285, "div", 13)(286, "div", 14)(287, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "This example shows a way to center your form in the card. Here we have used ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "col-md-6 ml-auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](291, " classes to center the form in a full width card. User can always change those classes according to width and offset requirements. This example also uses form action buttons in the center bottom position of the card.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "form", 15)(293, "div", 96)(294, "div", 8)(295, "div", 16)(296, "div", 17)(297, "label", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](299, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 17)(301, "label", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](302, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](303, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "div", 17)(305, "label", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](307, "input", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "div", 17)(309, "label", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](310, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](311, "input", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 17)(313, "label", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](315, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "div", 17)(317, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "div", 24)(320, "div", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](321, "input", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "label", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](325, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "label", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "div", 113)(329, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](330, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](331, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](333, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "div", 96)(336, "div", 8)(337, "div", 9)(338, "div", 10)(339, "h4", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "div", 12)(342, "div", 13)(343, "div", 14)(344, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345, "This example shows a ways to center your card with form. Here we have used ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "col-md-6 ml-auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, " classes to center the card as its not full width. User can always change those classes according to width and offset requirements. This example also uses form action buttons in the center bottom position of the card.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "form", 15)(350, "div", 96)(351, "div", 94)(352, "div", 16)(353, "div", 17)(354, "label", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](356, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](357, "div", 17)(358, "label", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](360, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "div", 17)(362, "label", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](364, "input", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "div", 17)(366, "label", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](368, "input", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](369, "div", 17)(370, "label", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](372, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "div", 17)(374, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](375, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 24)(377, "div", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](378, "input", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "label", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](382, "input", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "label", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "div", 113)(386, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](387, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](390, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "userProfile")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.issueTracking);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.priority);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.timeSheet);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.complaintForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.donation);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventRegistration1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventRegistration2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__.MatchHeightDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: [".form-control.is-invalid[_ngcontent-%COMP%] {\n    border-color: #CACFE7;\n    background-image: none !important;\n}\n\n.div.basicInfoCard[_ngcontent-%COMP%] {\n    height: 700px;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n  }\n  [_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n    color: unset !important;\n    background-color: unset !important;\n    border-color: #d3d9df !important;\n  }\n  \n  [_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n    background-color: #e2e6ea !important;\n    border-color: #dae0e5 !important;\n  }\n  \n  [_nghost-%COMP%]     .btn-light {\n    color: unset !important;\n    background-color: unset !important;\n    border-color: unset !important;\n  }\n  \n  [_nghost-%COMP%]     .bg-primary {\n    background-color: #007bff !important;\n  }\n  \n  [_nghost-%COMP%]     .text-white {\n    color: #fff !important;\n  }\n  \n  [_nghost-%COMP%]     .custom-day {\n    text-align: center;\n    padding: .185rem .25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n  }\n  \n  [_nghost-%COMP%]     .custom-day:active {\n    color: #6d7183 !important;\n   background-color: #fff !important;\n   border-block-color: rgb(2, 117, 216) !important;\n   \n  }\n  \n  .bg-light[_ngcontent-%COMP%] {\n    background-color: #f8f9fa !important;\n  }\n  \n  [_nghost-%COMP%]     .hidden {\n    display: block !important;\n  }\n  \n  .ngb-dp-weekday[_ngcontent-%COMP%] {\n    color: #17a2b8;\n  }\n  \n  .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n    line-height: 2rem;\n    text-align: center;\n    font-style: italic;\n  }\n  \n  .ngb-datepicker-month-view[_ngcontent-%COMP%] {\n    pointer-events: auto;\n  }\n  \n  .small[_ngcontent-%COMP%] {\n    font-size: 80%;\n    font-weight: 400;\n  }\n  \n  .ngb-dp-day[_ngcontent-%COMP%] {\n    cursor: pointer !important;\n  }\n  \n  .ngb-dp-month[_ngcontent-%COMP%] {\n    pointer-events: none;\n  }\n  \n  .btn-light[_ngcontent-%COMP%]:hover {\n    color: #212529 !important;\n    background-color: #e2e6ea !important;\n    border-color: #dae0e5 !important;\n  }\n  \n  .ngb-datepicker-month-view[_ngcontent-%COMP%] {\n    pointer-events: auto;\n  }\n\n  [_nghost-%COMP%]     .ngb-dp-header {\n    background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n    background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n    background-color: var(--light);\n}\n  \n  .ngb-dp-header[_ngcontent-%COMP%] {\n    border-bottom: 0;\n    border-radius: .25rem .25rem 0 0;\n    padding-top: .25rem;\n  }\n  \n  .ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n  }\n  \n  .custom-day[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.185rem 0.25rem;\n    display: inline-block;\n    height: 2rem;\n    width: 2rem;\n  }\n  \n  .custom-day.focused[_ngcontent-%COMP%] {\n    background-color: #e6e6e6;\n  }\n  \n  .custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n    background-color: rgb(2, 117, 216);\n    color: white;\n  }\n  \n  .custom-day.faded[_ngcontent-%COMP%] {\n    background-color: rgba(2, 117, 216, 0.5);\n  }\n  \n  [_nghost-%COMP%]     .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksK0NBQStDO0VBQ2pEO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsa0NBQWtDO0lBQ2xDLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7R0FDMUIsaUNBQWlDO0dBQ2pDLCtDQUErQzs7RUFFaEQ7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztFQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxtQkFBbUI7RUFDckI7O0VBRUE7OztJQUdFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBOztJQUVFLGtDQUFrQztJQUNsQyxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSwrQ0FBK0M7RUFDakQiLCJmaWxlIjoiYmFzaWMtZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjQ0FDRkU3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRpdi5iYXNpY0luZm9DYXJkIHtcbiAgICBoZWlnaHQ6IDcwMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICAgIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gICAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xuICAgIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcbiAgIFxuICB9XG4gIFxuICAuYmctbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5uZ2ItZHAtd2Vla2RheSB7XG4gICAgY29sb3I6ICMxN2EyYjg7XG4gIH1cbiAgXG4gIC5uZ2ItZHAtd2Vlay1udW1iZXIsXG4gIC5uZ2ItZHAtd2Vla2RheSB7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICBcbiAgLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG4gIFxuICAuc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgXG4gIC5uZ2ItZHAtZGF5IHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm5nYi1kcC1tb250aCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIC5idG4tbGlnaHQ6aG92ZXIge1xuICAgIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICA6aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC13ZWVrZGF5cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG4gIFxuICAubmdiLWRwLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICB9XG4gIFxuICAubmdiLWRwLWRheSxcbiAgLm5nYi1kcC13ZWVrLW51bWJlcixcbiAgLm5nYi1kcC13ZWVrZGF5IHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gIH1cbiAgXG4gIC5jdXN0b20tZGF5IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICB9XG4gIFxuICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICB9XG4gIFxuICAuY3VzdG9tLWRheS5yYW5nZSxcbiAgLmN1c3RvbS1kYXk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuY3VzdG9tLWRheS5mYWRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbiAgfVxuICBcbiAgOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvYmFzaWMtZm9ybXMvYmFzaWMtZm9ybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSwrQ0FBK0M7RUFDakQ7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtHQUMxQixpQ0FBaUM7R0FDakMsK0NBQStDOztFQUVoRDs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0VBRUU7SUFDRSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtFQUNyQjs7RUFFQTs7O0lBR0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7O0lBRUUsa0NBQWtDO0lBQ2xDLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHdDQUF3QztFQUMxQzs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7O0FBR0YsZ21MQUFnbUwiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmlzLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogI0NBQ0ZFNztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYuYmFzaWNJbmZvQ2FyZCB7XG4gICAgaGVpZ2h0OiA3MDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICAgIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xuICB9XG4gIFxuICA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gICBcbiAgfVxuICBcbiAgLmJnLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubmdiLWRwLXdlZWtkYXkge1xuICAgIGNvbG9yOiAjMTdhMmI4O1xuICB9XG4gIFxuICAubmdiLWRwLXdlZWstbnVtYmVyLFxuICAubmdiLWRwLXdlZWtkYXkge1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgXG4gIC5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICBcbiAgLnNtYWxsIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAubmdiLWRwLWRheSB7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5uZ2ItZHAtbW9udGgge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICAuYnRuLWxpZ2h0OmhvdmVyIHtcbiAgICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG5cbiAgOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtd2Vla2RheXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtbW9udGgtbmFtZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuICBcbiAgLm5nYi1kcC1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtIC4yNXJlbSAwIDA7XG4gICAgcGFkZGluZy10b3A6IC4yNXJlbTtcbiAgfVxuICBcbiAgLm5nYi1kcC1kYXksXG4gIC5uZ2ItZHAtd2Vlay1udW1iZXIsXG4gIC5uZ2ItZHAtd2Vla2RheSB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICB9XG4gIFxuICAuY3VzdG9tLWRheSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgfVxuICBcbiAgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgfVxuICBcbiAgLmN1c3RvbS1kYXkucmFuZ2UsXG4gIC5jdXN0b20tZGF5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmN1c3RvbS1kYXkuZmFkZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG4gIH1cbiAgXG4gIDpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('projectInfo')], BasicFormsComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('userProfile')], BasicFormsComponent.prototype, "blockUIUserProfile", void 0);

/***/ }),

/***/ 74514:
/*!***************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/bordered/bordered.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BorderedComponent": () => (/* binding */ BorderedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);










function BorderedComponent_div_7_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", interest_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](interest_r5);
  }
}
function BorderedComponent_div_7_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", range_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](range_r6);
  }
}
function BorderedComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function BorderedComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".form-bordered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add border to a form-group. In this example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " is used to show the bordered form functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 15)(15, "div", 16)(16, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17)(20, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 45)(35, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17)(43, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 17)(48, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Interested in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 19)(51, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, BorderedComponent_div_7_option_52_Template, 2, 2, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 17)(54, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 19)(57, "select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, BorderedComponent_div_7_option_58_Template, 2, 2, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 17)(60, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 19)(63, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 96)(65, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 98)(67, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "About Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "textarea", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 101)(72, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
  }
}
function BorderedComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function BorderedComponent_div_9_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.reloadUserProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " User Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".form-bordered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add border to a form-group. In this example 2-column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " is used with primary color bordered form controls to show the bordered form functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 15)(15, "div", 16)(16, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " About User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6)(20, "div", 55)(21, "div", 17)(22, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Fist Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 55)(27, "div", 17)(28, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "div", 55)(34, "div", 98)(35, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 55)(40, "div", 98)(41, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Nick Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Contact Info & Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 6)(49, "div", 55)(50, "div", 17)(51, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 17)(56, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 45)(61, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 55)(66, "div", 45)(67, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "textarea", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 49)(72, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.userProfile);
  }
}
class BorderedComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Bordered Forms',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Bordered Forms',
        'isLink': true
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      selectFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.userProfile = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nickName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.eventRegistration = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      customer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
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
BorderedComponent.ɵfac = function BorderedComponent_Factory(t) {
  return new (t || BorderedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
BorderedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BorderedComponent,
  selectors: [["app-bordered"]],
  decls: 159,
  vars: 7,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "basic-form-layouts"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [1, "card"], [1, "card-header"], ["id", "bordered-layout-icons", 1, "card-title"], [1, "card-content", "collpase", "show"], [1, "card-body"], [1, "card-text"], [1, "form", "form-horizontal", "form-bordered", 3, "formGroup"], [1, "form-body"], [1, "form-group", "row", "mx-auto"], ["for", "timesheetinput1", 1, "col-md-3", "label-control"], [1, "col-md-9"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["for", "timesheetinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["for", "timesheetinput3", 1, "col-md-3", "label-control"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], [1, "feather", "ft-message-square"], [1, "col-md-3", "label-control"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["for", "timesheetinput5", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["for", "timesheetinput6", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], [1, "form-group", "row", "mx-auto", "last"], ["for", "timesheetinput7", 1, "col-md-3", "label-control"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "text-right"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], [1, "row", "justify-content-md-center"], [1, "col-md-6"], ["id", "bordered-layout-card-center", 1, "card-title"], ["for", "eventRegInput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventRegInput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventRegInput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventRegInput4", 1, "col-md-3", "label-control"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventRegInput5", 1, "col-md-3", "label-control"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "input-group", "col-md-9"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "value", "yes", "id", "yes", "formControlName", "customer1", 1, "custom-control-input"], ["for", "yes", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "value", "no", "id", "no", "formControlName", "customer1", 1, "custom-control-input"], ["for", "no", 1, "custom-control-label"], [1, "form-actions", "text-center"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "form-section"], ["for", "projectinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["for", "projectinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["for", "projectinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["for", "projectinput4", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "feather", "ft-clipboard"], ["for", "projectinput5", 1, "col-md-3", "label-control"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["for", "projectinput6", 1, "col-md-3", "label-control"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "projectinput7", 1, "col-md-3", "label-control"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput8", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile"], [1, "file-custom"], [1, "form-group", "row", "last", "mx-auto"], ["for", "projectinput9", 1, "col-md-3", "label-control"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], [1, "form-actions"], [3, "value"], [1, "la", "la-eye"], ["for", "userinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput1", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", "border-primary"], ["for", "userinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput2", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", "border-primary"], ["for", "userinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput3", "placeholder", "Username", "formControlName", "userName", 1, "form-control", "border-primary"], ["for", "userinput4", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput4", "placeholder", "Nick Name", "formControlName", "nickName", 1, "form-control", "border-primary"], [1, "feather", "ft-mail"], ["for", "userinput5", 1, "col-md-3", "label-control"], ["type", "email", "placeholder", "email", "id", "userinput5", "formControlName", "email", 1, "form-control", "border-primary"], ["for", "userinput6", 1, "col-md-3", "label-control"], ["type", "url", "placeholder", "http://", "id", "userinput6", "formControlName", "website", 1, "form-control", "border-primary"], ["id", "userinput7", "type", "tel", "formControlName", "phone", "placeholder", "Contact Number", 1, "form-control", "border-primary"], ["for", "userinput8", 1, "col-md-3", "label-control"], ["id", "userinput8", "rows", "6", "formControlName", "bio", "placeholder", "Bio", 1, "form-control", "border-primary"]],
  template: function BorderedComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BorderedComponent_div_7_Template, 78, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BorderedComponent_div_9_Template, 78, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, ".form-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " to form tag to add border to a form-group. In this example icons are used with form controls to show the bordered form functionality.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "form", 15)(25, "div", 16)(26, "div", 17)(27, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Employee Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17)(35, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19)(38, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17)(43, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19)(46, "div", 20)(47, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 31)(51, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BorderedComponent_Template_div_click_51_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 17)(56, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Rate Per Hour");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 19)(59, "div", 36)(60, "div", 37)(61, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 31)(65, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 17)(68, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Start Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 19)(71, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 17)(76, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "End Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 19)(79, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 45)(84, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 19)(87, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "textarea", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 49)(92, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 54)(99, "div", 55)(100, "div", 9)(101, "div", 10)(102, "h4", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 12)(105, "div", 13)(106, "div", 14)(107, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, ".form-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " to form tag to add border to a form-group. In this example centered card is used to show the bordered form functionality.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "form", 15)(113, "div", 16)(114, "div", 17)(115, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 17)(120, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 17)(125, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 17)(130, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 17)(135, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 45)(140, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 19)(143, "div", 67)(144, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "input", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 74)(153, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "userProfile")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.timeSheet);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.eventRegistration);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbInputDatepicker, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcmRlcmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsaUNBQWlDO0NBQ2pDLCtDQUErQzs7QUFFaEQ7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQiLCJmaWxlIjoiYm9yZGVyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0IHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xuICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcbiBcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtd2Vla2RheXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLW1vbnRoLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmdiLWRwLWRheSB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLW1vbnRoIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvYm9yZGVyZWQvYm9yZGVyZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7O0FBR0EsNDBKQUE0MEoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectInfo')], BorderedComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('userProfile')], BorderedComponent.prototype, "blockUIUserProfile", void 0);

/***/ }),

/***/ 74601:
/*!***********************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/form-actions/form-actions.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormActionsComponent": () => (/* binding */ FormActionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);











function FormActionsComponent_div_7_ngb_alert_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_div_7_ngb_alert_6_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.isFormActionInfo1 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Form Actions On Top Left.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
function FormActionsComponent_div_7_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", interest_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](interest_r19);
  }
}
function FormActionsComponent_div_7_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", range_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](range_r20);
  }
}
function FormActionsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function FormActionsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FormActionsComponent_div_7_ngb_alert_6_Template, 5, 2, "ngb-alert", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "To add form actions on top of the form add a div with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ".form-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " class to begin the form. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, ".top");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " class to add border below form actions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 16)(16, "div", 17)(17, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 22)(24, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 28)(28, "div", 8)(29, "div", 23)(30, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 8)(34, "div", 23)(35, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 28)(39, "div", 8)(40, "div", 23)(41, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 8)(45, "div", 23)(46, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 23)(53, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 28)(57, "div", 8)(58, "div", 23)(59, "label", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Interested in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "select", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, FormActionsComponent_div_7_option_62_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 8)(64, "div", 23)(65, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "select", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, FormActionsComponent_div_7_option_68_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 23)(70, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 173)(74, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 23)(76, "label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "About Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "textarea", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isFormActionInfo1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
  }
}
function FormActionsComponent_div_8_ngb_alert_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_div_8_ngb_alert_6_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.isFormActionInfo2 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Form Actions On Bottom Right.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
function FormActionsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function FormActionsComponent_div_8_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.reloadUserProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " User Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FormActionsComponent_div_8_ngb_alert_6_Template, 5, 2, "ngb-alert", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "To add form actions on bottom of the form add a div with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ".form-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " class to end the form. This is the default position for form actions. We have added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, ".right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " class to move buttons on the right side.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 16)(16, "div", 22)(17, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " About User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 28)(21, "div", 8)(22, "div", 23)(23, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Fist Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 8)(27, "div", 23)(28, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 28)(32, "div", 8)(33, "div", 23)(34, "label", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 8)(38, "div", 23)(39, "label", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Nick Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "h4", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Contact Info & Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 23)(46, "label", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 23)(50, "label", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 23)(54, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 23)(58, "label", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "textarea", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 198)(62, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isFormActionInfo2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.userProfile);
  }
}
function FormActionsComponent_ngb_alert_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_ngb_alert_18_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.isFormActionInfo3 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Form Actions On Top And Bottom Left.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
function FormActionsComponent_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prio_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", prio_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prio_r30);
  }
}
function FormActionsComponent_option_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", stat_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r31);
  }
}
function FormActionsComponent_ngb_alert_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_ngb_alert_91_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.isFormActionInfo4 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Form Actions On Top And Bottom Right.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
function FormActionsComponent_ngb_alert_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_ngb_alert_202_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.isFormActionInfo5 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Form Actions On Center With Dropdown Form Action.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
function FormActionsComponent_ngb_alert_259_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_ngb_alert_259_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.isFormActionInfo6 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Form Actions On Center With Search Form Action.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
function FormActionsComponent_ngb_alert_317_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_ngb_alert_317_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.isFormActionInfo6 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Multiple Form Actions On Top And Bottom.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
function FormActionsComponent_ngb_alert_410_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-alert", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function FormActionsComponent_ngb_alert_410_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.isFormActionInfo7 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Multiple Form Actions On Top And Bottom.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dismissible", true)("type", "info");
  }
}
class FormActionsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.isFormActionInfo1 = false;
    this.isFormActionInfo2 = false;
    this.isFormActionInfo3 = false;
    this.isFormActionInfo4 = false;
    this.isFormActionInfo5 = false;
    this.isFormActionInfo6 = false;
    this.isFormActionInfo7 = false;
    this.isFormActionInfo8 = false;
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
    this.priority = ['Low', 'Medium', 'High'];
    this.status = ['Not Started', 'Started', 'Fixed'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Form Actions',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Form Actions',
        'isLink': true
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      selectFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.userProfile = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      nickName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.issueTracking = this.formBuilder.group({
      issueTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      openedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateOpened: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateFixed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.complaintForm = this.formBuilder.group({
      companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      complaintDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      supervisorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      complaintDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      signature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.donation = this.formBuilder.group({
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      donationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.eventRegistration1 = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      customer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.eventRegistration2 = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      customer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
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
FormActionsComponent.ɵfac = function FormActionsComponent_Factory(t) {
  return new (t || FormActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};
FormActionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FormActionsComponent,
  selectors: [["app-form-actions"]],
  decls: 472,
  vars: 19,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "form-action-layouts"], ["matchHeight", "card", 1, "row"], ["class", "col-md-6", 4, "blockUI", "blockUIMessage"], [1, "col-md-6"], [1, "card"], [1, "card-header"], ["id", "from-actions-top-bottom-left", 1, "card-title"], [1, "card-content", "collpase", "show"], [1, "card-body"], [1, "card-text"], ["class", "alert-icon-right", "role", "alert", 3, "dismissible", "type", "close", 4, "ngIf"], [3, "formGroup"], [1, "form-actions", "top"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], [1, "form-body"], [1, "form-group"], ["for", "issueinput1"], ["type", "text", "id", "issueinput1", "placeholder", "issue title", "ngbTooltip", "Issue Title", "placement", "top", "formControlName", "issueTitle", 1, "form-control"], ["for", "issueinput2"], ["type", "text", "id", "issueinput2", "placeholder", "opened by", "ngbTooltip", "Opened By", "placement", "top", "formControlName", "openedBy", 1, "form-control"], [1, "row"], ["for", "issueinput3"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], ["for", "issueinput4"], ["d2", "ngbDatepicker"], ["for", "issueinput5"], ["id", "issueinput5", "ngbTooltip", "Priority", "placement", "top", "formControlName", "priority", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "issueinput6"], ["id", "issueinput6", "ngbTooltip", "Status", "placement", "top", "formControlName", "status", 1, "form-control"], ["for", "issueinput8"], ["id", "issueinput8", "rows", "5", "placeholder", "comments", "ngbTooltip", "Comments", "placement", "top", "formControlName", "comment", 1, "form-control"], [1, "form-actions"], ["id", "from-actions-top-bottom-right", 1, "card-title"], [1, "form-actions", "top", "text-right"], ["for", "timesheetinput1"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["for", "timesheetinput2"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["for", "timesheetinput3"], ["d4", "ngbDatepicker"], [1, "feather", "ft-message-square"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["for", "timesheetinput5"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["for", "timesheetinput6"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], ["for", "timesheetinput7"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "right"], ["id", "from-actions-center-dropdown", 1, "card-title"], [1, "heading-elements"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-danger"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-danger", "dropdown-toggle-split"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "show"], [1, "dropdown-item"], [1, "dropdown-divider"], [1, "card-content"], ["for", "complaintinput1"], ["type", "text", "id", "complaintinput1", "placeholder", "company name", "formControlName", "companyName", 1, "form-control", "round"], ["for", "complaintinput2"], ["type", "text", "id", "complaintinput2", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control", "round"], ["for", "complaintinput3"], ["d3", "ngbDatepicker"], ["for", "complaintinput4"], ["type", "text", "id", "complaintinput4", "placeholder", "supervisor name", "formControlName", "supervisorName", 1, "form-control", "round"], ["for", "complaintinput5"], ["id", "complaintinput5", "rows", "5", "formControlName", "complaintDetails", "placeholder", "details", 1, "form-control", "round"], ["for", "complaintinput6"], ["type", "text", "id", "complaintinput6", "placeholder", "signature", "formControlName", "signature", 1, "form-control", "round"], [1, "form-actions", "text-center"], ["id", "from-actions-center-search", 1, "card-title"], ["type", "text", "placeholder", "search", "name", "form-search", 1, "form-control", "round"], ["for", "donationinput1"], ["type", "text", "id", "donationinput1", "placeholder", "name", "formControlName", "fullName", 1, "form-control", "square"], ["for", "donationinput2"], ["type", "email", "id", "donationinput2", "placeholder", "email", "formControlName", "email", 1, "form-control", "square"], ["for", "donationinput3"], ["type", "tel", "id", "donationinput3", "formControlName", "contact", 1, "form-control", "square"], ["for", "donationinput4"], ["type", "text", "id", "donationinput4", "placeholder", "type of donation", "formControlName", "donationType", 1, "form-control", "square"], ["type", "text", "placeholder", "amount", "aria-label", "Amount (to the nearest dollar)", "formControlName", "amount", 1, "form-control", "square"], ["for", "donationinput7"], ["id", "donationinput7", "rows", "5", "formControlName", "comment", "placeholder", "comments", 1, "form-control", "square"], [1, "col-md-12"], ["id", "from-actions-multiple", 1, "card-title"], [1, "form", 3, "formGroup"], [1, "form-actions", "top", "clearfix"], [1, "buttons-group", "float-left", "mb-1"], ["type", "submit", 1, "btn", "btn-primary", "mr-1"], [1, "buttons-group", "float-right"], ["type", "button", 1, "btn", "btn-info", "mr-1"], ["type", "submit", 1, "btn", "btn-danger", "mr-1"], ["type", "submit", 1, "btn", "btn-success"], [1, "row", "justify-content-md-center"], [1, "form-group", "col-12", "mb-2"], ["for", "eventRegInput1"], ["type", "text", "id", "eventRegInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventRegInput2"], ["type", "text", "id", "eventRegInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventRegInput3"], ["type", "text", "id", "eventRegInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventRegInput4"], ["type", "email", "id", "eventRegInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventRegInput5"], ["type", "tel", "id", "eventRegInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "formControlName", "customer1", "value", "yes1", "id", "yes1", 1, "custom-control-input"], ["for", "yes1", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "formControlName", "customer1", "value", "no1", "id", "no1", 1, "custom-control-input"], ["for", "no1", 1, "custom-control-label"], [1, "form-actions", "clearfix"], [1, "form-actions", "top", "text-center"], ["for", "eventInput1"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventInput2"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventInput3"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventInput4"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventInput5"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], ["type", "radio", "value", "yes2", "id", "yes2", "formControlName", "customer2", 1, "custom-control-input"], ["for", "yes2", 1, "custom-control-label"], ["type", "radio", "value", "no2", "id", "no2", "formControlName", "customer2", 1, "custom-control-input"], ["for", "no2", 1, "custom-control-label"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], ["class", "alert-icon-right mb-2", "role", "alert", 3, "dismissible", "type", "close", 4, "ngIf"], [1, "form-section"], ["for", "projectinput1"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["for", "projectinput2"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["for", "projectinput3"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["for", "projectinput4"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "la", "la-paperclip"], ["for", "companyName"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["for", "projectinput5"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], ["for", "projectinput6"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput7", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile"], [1, "file-custom"], ["for", "projectinput8"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], ["role", "alert", 1, "alert-icon-right", "mb-2", 3, "dismissible", "type", "close"], [1, "alert-icon"], [1, "la", "la-info"], [3, "value"], [1, "la", "la-eye"], ["for", "userinput1"], ["type", "text", "id", "userinput1", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", "border-primary"], ["for", "userinput2"], ["type", "text", "id", "userinput2", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", "border-primary"], ["for", "userinput3"], ["type", "text", "id", "userinput3", "placeholder", "Username", "formControlName", "userName", 1, "form-control", "border-primary"], ["for", "userinput4"], ["type", "text", "id", "userinput4", "placeholder", "Nick Name", "formControlName", "nickName", 1, "form-control", "border-primary"], [1, "feather", "ft-mail"], ["for", "userinput5"], ["type", "email", "placeholder", "email", "id", "userinput5", "formControlName", "email", 1, "form-control", "border-primary"], ["for", "userinput6"], ["type", "url", "placeholder", "http://", "id", "userinput6", "formControlName", "website", 1, "form-control", "border-primary"], ["id", "userinput7", "type", "tel", "formControlName", "phone", "placeholder", "Contact Number", 1, "form-control", "border-primary"], ["for", "userinput8"], ["id", "userinput8", "rows", "5", "formControlName", "bio", "placeholder", "Bio", 1, "form-control", "border-primary"], [1, "form-actions", "text-right"], ["role", "alert", 1, "alert-icon-right", 3, "dismissible", "type", "close"]],
  template: function FormActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FormActionsComponent_div_7_Template, 79, 5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, FormActionsComponent_div_8_Template, 68, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Issue Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, FormActionsComponent_ngb_alert_18_Template, 5, 2, "ngb-alert", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "To add form actions on top and bottom of the form add a div with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, ".form-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " class to start and end the form.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "form", 16)(25, "div", 17)(26, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Issue Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 23)(38, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Opened By");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 28)(42, "div", 8)(43, "div", 23)(44, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Date Opened");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 31, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 33)(50, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormActionsComponent_Template_div_click_50_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](48);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 8)(53, "div", 23)(54, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Date Fixed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 31, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 33)(60, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormActionsComponent_Template_div_click_60_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](58);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r4.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 23)(63, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "select", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, FormActionsComponent_option_66_Template, 2, 2, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 23)(68, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "select", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, FormActionsComponent_option_71_Template, 2, 2, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 23)(73, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "textarea", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 45)(77, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 8)(84, "div", 9)(85, "div", 10)(86, "h4", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 12)(89, "div", 13)(90, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, FormActionsComponent_ngb_alert_91_Template, 5, 2, "ngb-alert", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "To add form actions on top and bottom of the form add a div with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, ".form-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " class to start and end the form. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, ".right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " class to align the form action buttons to right.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "form", 16)(101, "div", 47)(102, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 22)(109, "div", 23)(110, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Employee Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 23)(117, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 23)(124, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 49)(127, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "input", 31, 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 33)(131, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormActionsComponent_Template_div_click_131_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](129);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r8.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 23)(136, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Rate Per Hour");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 59)(139, "div", 60)(140, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 33)(144, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 28)(147, "div", 8)(148, "div", 23)(149, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Start Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 8)(156, "div", 23)(157, "label", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "End Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 23)(164, "label", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "textarea", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "i", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 71)(171, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 6)(178, "div", 8)(179, "div", 9)(180, "div", 10)(181, "h4", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Complaint Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 73)(184, "div", 74)(185, "button", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Default");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](188, "button", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 78)(190, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "li", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 81)(200, "div", 13)(201, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](202, FormActionsComponent_ngb_alert_202_Template, 5, 2, "ngb-alert", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "To add form actions on bottom of the form add a div with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, ".form-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, " class to end the form. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, ".center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, " class to align the form action buttons to center. We can also add more form action using dropdown button to the top right corner of the form.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "form", 16)(212, "div", 22)(213, "div", 23)(214, "label", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "Company Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 23)(218, "label", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Employee Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](220, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 23)(222, "label", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Date of Complaint");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](225, "input", 31, 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 33)(228, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormActionsComponent_Template_div_click_228_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](226);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r10.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](229, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 23)(231, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Supervisor's Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](233, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 23)(235, "label", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Complaint Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](237, "textarea", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 23)(239, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Signature");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "input", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 94)(243, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 8)(250, "div", 9)(251, "div", 10)(252, "h4", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Donation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](255, "input", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 81)(257, "div", 13)(258, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](259, FormActionsComponent_ngb_alert_259_Template, 5, 2, "ngb-alert", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "To add form actions on bottom of the form add a div with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, ".form-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](264, " class to end the form. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](265, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, ".center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, " class to align the form action buttons to center. We can also search bar action of the form.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "form", 16)(269, "div", 22)(270, "div", 23)(271, "label", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](273, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "div", 23)(275, "label", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](277, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "div", 23)(279, "label", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](281, "input", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 23)(283, "label", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "Dontaion Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](285, "input", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "div", 23)(287, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "div", 59)(290, "div", 60)(291, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](293, "input", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 33)(295, "span", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 23)(298, "label", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "textarea", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 94)(302, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](303, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](306, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "div", 28)(309, "div", 108)(310, "div", 9)(311, "div", 10)(312, "h4", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](313, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](314, "div", 12)(315, "div", 13)(316, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](317, FormActionsComponent_ngb_alert_317_Template, 5, 2, "ngb-alert", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](319, "To add form actions on top and bottom of the form add a div with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](321, ".form-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, " class to start and end the form. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, ".buttons-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](325, " class along with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, ".float-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, " class to pull the buttons group to either left or right.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "form", 110)(330, "div", 111)(331, "div", 112)(332, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](333, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "button", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](336, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](337, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "div", 114)(339, "button", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "Action 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "Action 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "button", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](344, "Action 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "div", 118)(346, "div", 8)(347, "div", 22)(348, "div", 28)(349, "div", 119)(350, "label", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](351, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](352, "input", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "div", 28)(354, "div", 119)(355, "label", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](356, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](357, "input", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "div", 28)(359, "div", 119)(360, "label", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](362, "input", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "div", 28)(364, "div", 119)(365, "label", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](366, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](367, "input", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "div", 28)(369, "div", 119)(370, "label", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](372, "input", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "div", 28)(374, "div", 119)(375, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "div", 30)(378, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](379, "input", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](380, "label", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](381, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](382, "div", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](383, "input", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](384, "label", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](385, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 136)(387, "div", 112)(388, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](389, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "button", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](392, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](393, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](394, "div", 114)(395, "button", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](396, "Action 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](398, "Action 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "button", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](400, "Action 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "div", 118)(402, "div", 8)(403, "div", 9)(404, "div", 10)(405, "h4", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "div", 12)(408, "div", 13)(409, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](410, FormActionsComponent_ngb_alert_410_Template, 5, 2, "ngb-alert", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, "To add form actions on top and bottom of the form add a div with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](414, ".form-actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](415, " class to start and end the form. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](416, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](417, ".buttons-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](418, " class along with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](420, ".float-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](421, " class to pull the buttons group to either left or right.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "form", 16)(423, "div", 137)(424, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](425, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](426, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](428, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](429, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](430, "div", 118)(431, "div", 108)(432, "div", 22)(433, "div", 23)(434, "label", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](436, "input", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "div", 23)(438, "label", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](439, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](440, "input", 141);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "div", 23)(442, "label", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](443, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](444, "input", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](445, "div", 23)(446, "label", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](448, "input", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "div", 23)(450, "label", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](451, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](452, "input", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "div", 23)(454, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](455, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "div", 30)(457, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](458, "input", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "label", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](460, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "div", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](462, "input", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "label", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](464, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](465, "div", 94)(466, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](467, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](470, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](471, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "userProfile")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFormActionInfo3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.issueTracking);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.priority);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFormActionInfo4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.timeSheet);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFormActionInfo5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.complaintForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFormActionInfo6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.donation);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFormActionInfo7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventRegistration1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isFormActionInfo8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventRegistration2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__.MatchHeightDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .form-actions.top {\n  border-top: 0 !important;\n  border-bottom: 1px solid #D1D5EA;\n  margin-top: 0 !important;\n  margin-bottom: 20px !important;\n}\n[_nghost-%COMP%]     .form-actions {\n  padding: 20px 0;\n  margin-top: 20px;\n}\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRCIsImZpbGUiOiJmb3JtLWFjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mb3JtLWFjdGlvbnMudG9wIHtcbiAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QxRDVFQTtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmZvcm0tYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0IHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xuICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcbiBcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtd2Vla2RheXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLW1vbnRoLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmdiLWRwLWRheSB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLW1vbnRoIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvZm9ybS1hY3Rpb25zL2Zvcm0tYWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7O0FBR0EsdzdLQUF3N0siLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZm9ybS1hY3Rpb25zLnRvcCB7XG4gIGJvcmRlci10b3A6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEMUQ1RUE7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mb3JtLWFjdGlvbnMge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('projectInfo')], FormActionsComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('userProfile')], FormActionsComponent.prototype, "blockUIUserProfile", void 0);

/***/ }),

/***/ 60022:
/*!*******************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/form-layouts.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormLayoutsModule": () => (/* binding */ FormLayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _basic_forms_basic_forms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-forms/basic-forms.component */ 63591);
/* harmony import */ var _horizontal_forms_horizontal_forms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-forms/horizontal-forms.component */ 24625);
/* harmony import */ var _hidden_labels_hidden_labels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hidden-labels/hidden-labels.component */ 59640);
/* harmony import */ var _form_actions_form_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-actions/form-actions.component */ 74601);
/* harmony import */ var _row_separator_row_separator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row-separator/row-separator.component */ 31382);
/* harmony import */ var _bordered_bordered_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bordered/bordered.component */ 74514);
/* harmony import */ var _striped_labels_striped_labels_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./striped-labels/striped-labels.component */ 69094);
/* harmony import */ var _striped_rows_striped_rows_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./striped-rows/striped-rows.component */ 9437);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../_layout/blockui/block-template.component */ 86196);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);




















class FormLayoutsModule {}
FormLayoutsModule.ɵfac = function FormLayoutsModule_Factory(t) {
  return new (t || FormLayoutsModule)();
};
FormLayoutsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: FormLayoutsModule
});
FormLayoutsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_11__.MatchHeightModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_16__.BlockUIModule.forRoot({
    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_10__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild([{
    path: 'basic-forms',
    component: _basic_forms_basic_forms_component__WEBPACK_IMPORTED_MODULE_0__.BasicFormsComponent
  }, {
    path: 'horizontal-forms',
    component: _horizontal_forms_horizontal_forms_component__WEBPACK_IMPORTED_MODULE_1__.HorizontalFormsComponent
  }, {
    path: 'hidden-labels',
    component: _hidden_labels_hidden_labels_component__WEBPACK_IMPORTED_MODULE_2__.HiddenLabelsComponent
  }, {
    path: 'form-actions',
    component: _form_actions_form_actions_component__WEBPACK_IMPORTED_MODULE_3__.FormActionsComponent
  }, {
    path: 'row-separator',
    component: _row_separator_row_separator_component__WEBPACK_IMPORTED_MODULE_4__.RowSeparatorComponent
  }, {
    path: 'bordered',
    component: _bordered_bordered_component__WEBPACK_IMPORTED_MODULE_5__.BorderedComponent
  }, {
    path: 'striped-rows',
    component: _striped_rows_striped_rows_component__WEBPACK_IMPORTED_MODULE_7__.StripedRowsComponent
  }, {
    path: 'striped-labels',
    component: _striped_labels_striped_labels_component__WEBPACK_IMPORTED_MODULE_6__.StripedLabelsComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FormLayoutsModule, {
    declarations: [_basic_forms_basic_forms_component__WEBPACK_IMPORTED_MODULE_0__.BasicFormsComponent, _horizontal_forms_horizontal_forms_component__WEBPACK_IMPORTED_MODULE_1__.HorizontalFormsComponent, _hidden_labels_hidden_labels_component__WEBPACK_IMPORTED_MODULE_2__.HiddenLabelsComponent, _form_actions_form_actions_component__WEBPACK_IMPORTED_MODULE_3__.FormActionsComponent, _row_separator_row_separator_component__WEBPACK_IMPORTED_MODULE_4__.RowSeparatorComponent, _bordered_bordered_component__WEBPACK_IMPORTED_MODULE_5__.BorderedComponent, _striped_labels_striped_labels_component__WEBPACK_IMPORTED_MODULE_6__.StripedLabelsComponent, _striped_rows_striped_rows_component__WEBPACK_IMPORTED_MODULE_7__.StripedRowsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_8__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_11__.MatchHeightModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_16__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 59640:
/*!*************************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/hidden-labels/hidden-labels.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiddenLabelsComponent": () => (/* binding */ HiddenLabelsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);











function HiddenLabelsComponent_div_7_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", interest_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](interest_r10);
  }
}
function HiddenLabelsComponent_div_7_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", range_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](range_r11);
  }
}
function HiddenLabelsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function HiddenLabelsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "This is the most basic and default form having form sections.To add form section user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, ".form-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " class with any heading tags. This form has the buttons on the bottom left corner which is the default position.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 15)(12, "div", 16)(13, "h4", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 20)(17, "div", 8)(18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8)(21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 20)(24, "div", 8)(25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 8)(28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h4", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 20)(36, "div", 8)(37, "div", 17)(38, "select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, HiddenLabelsComponent_div_7_option_39_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8)(41, "div", 17)(42, "select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, HiddenLabelsComponent_div_7_option_43_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 17)(45, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "input", 103)(47, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "textarea", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 32)(51, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
  }
}
function HiddenLabelsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function HiddenLabelsComponent_div_8_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.reloadUserProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " User Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "You can always change the border color of the form controls using ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "border-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " class. In this example we have user ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "border-primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " class for form controls. Form action buttons are on the bottom right position.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "form", 15)(15, "div", 16)(16, "h4", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " About User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 20)(20, "div", 8)(21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8)(24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20)(27, "div", 8)(28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 8)(31, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h4", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Contact Info & Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "textarea", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 117)(45, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r1.userProfile);
  }
}
function HiddenLabelsComponent_option_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const prio_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", prio_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](prio_r16);
  }
}
function HiddenLabelsComponent_option_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", stat_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](stat_r17);
  }
}
class HiddenLabelsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
    this.priority = ['Low', 'Medium', 'High'];
    this.status = ['Not Started', 'Started', 'Fixed'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Hidden Label Forms',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Hidden Label Forms',
        'isLink': true
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      selectFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.userProfile = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      nickName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.issueTracking = this.formBuilder.group({
      issueTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      openedBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateOpened: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      dateFixed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.complaintForm = this.formBuilder.group({
      companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      complaintDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      supervisorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      complaintDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      signature: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.donation = this.formBuilder.group({
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      donationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.eventRegistration1 = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      customer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.eventRegistration2 = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      customer2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
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
HiddenLabelsComponent.ɵfac = function HiddenLabelsComponent_Factory(t) {
  return new (t || HiddenLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};
HiddenLabelsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HiddenLabelsComponent,
  selectors: [["app-hidden-labels"]],
  decls: 316,
  vars: 13,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "hidden-label-form-layouts"], ["matchHeight", "card", 1, "row"], ["class", "col-md-6", 4, "blockUI", "blockUIMessage"], [1, "col-md-6"], [1, "card"], [1, "card-header"], ["id", "hidden-label-tooltips", 1, "card-title"], [1, "card-content", "collpase", "show"], [1, "card-body"], [1, "card-text"], [3, "formGroup"], [1, "form-body"], [1, "form-group"], ["type", "text", "id", "issueinput1", "placeholder", "issue title", "ngbTooltip", "Issue Title", "placement", "top", "formControlName", "issueTitle", 1, "form-control"], ["type", "text", "id", "issueinput2", "placeholder", "opened by", "ngbTooltip", "Opened By", "placement", "top", "formControlName", "openedBy", 1, "form-control"], [1, "row"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], ["d2", "ngbDatepicker"], ["id", "issueinput5", "ngbTooltip", "Priority", "placement", "top", "formControlName", "priority", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "issueinput6", "ngbTooltip", "Status", "placement", "top", "formControlName", "status", 1, "form-control"], ["id", "issueinput8", "rows", "5", "placeholder", "comments", "ngbTooltip", "Comments", "placement", "top", "formControlName", "comment", 1, "form-control"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], ["id", "hidden-label-icons", 1, "card-title"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["d4", "ngbDatepicker"], [1, "feather", "ft-message-square"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "right"], ["id", "hidden-label-round-controls", 1, "card-title"], ["type", "text", "id", "complaintinput1", "placeholder", "company name", "formControlName", "companyName", 1, "form-control", "round"], ["type", "text", "id", "complaintinput2", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control", "round"], ["d3", "ngbDatepicker"], ["type", "text", "id", "complaintinput4", "placeholder", "supervisor name", "formControlName", "supervisorName", 1, "form-control", "round"], ["id", "complaintinput5", "rows", "5", "formControlName", "complaintDetails", "placeholder", "details", 1, "form-control", "round"], ["type", "text", "id", "complaintinput6", "placeholder", "signature", "formControlName", "signature", 1, "form-control", "round"], ["id", "hidden-label-square-controls", 1, "card-title"], ["type", "text", "id", "donationinput1", "placeholder", "name", "formControlName", "fullName", 1, "form-control", "square"], ["type", "email", "id", "donationinput2", "placeholder", "email", "formControlName", "email", 1, "form-control", "square"], ["type", "tel", "id", "donationinput3", "formControlName", "contact", 1, "form-control", "square"], ["type", "text", "id", "donationinput4", "placeholder", "type of donation", "formControlName", "donationType", 1, "form-control", "square"], ["type", "text", "placeholder", "amount", "aria-label", "Amount (to the nearest dollar)", "formControlName", "amount", 1, "form-control", "square"], ["id", "donationinput7", "rows", "5", "formControlName", "comment", "placeholder", "comments", 1, "form-control", "square"], [1, "col-md-12"], ["id", "hidden-label-form-center", 1, "card-title"], [1, "row", "justify-content-md-center"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "value", "yes", "id", "yes", "formControlName", "customer1", 1, "custom-control-input"], ["for", "yes", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "value", "no", "id", "no", "formControlName", "customer1", 1, "custom-control-input"], ["for", "no", 1, "custom-control-label"], [1, "form-actions", "text-center"], ["id", "hidden-label-card-center", 1, "card-title"], ["type", "radio", "value", "yes2", "id", "yes2", "formControlName", "customer2", 1, "custom-control-input"], ["for", "yes2", 1, "custom-control-label"], ["type", "radio", "value", "no2", "id", "no2", "formControlName", "customer2", 1, "custom-control-input"], ["for", "no2", 1, "custom-control-label"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "form-section"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "la", "la-paperclip"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput7", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile"], [1, "file-custom"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], [3, "value"], [1, "la", "la-eye"], ["type", "text", "id", "userinput1", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", "border-primary"], ["type", "text", "id", "userinput2", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", "border-primary"], ["type", "text", "id", "userinput3", "placeholder", "Username", "formControlName", "userName", 1, "form-control", "border-primary"], ["type", "text", "id", "userinput4", "placeholder", "Nick Name", "formControlName", "nickName", 1, "form-control", "border-primary"], [1, "feather", "ft-mail"], ["type", "email", "placeholder", "email", "id", "userinput5", "formControlName", "email", 1, "form-control", "border-primary"], ["type", "url", "placeholder", "http://", "id", "userinput6", "formControlName", "website", 1, "form-control", "border-primary"], ["id", "userinput7", "type", "tel", "formControlName", "phone", "placeholder", "Contact Number", 1, "form-control", "border-primary"], ["id", "userinput8", "rows", "5", "formControlName", "bio", "placeholder", "Bio", 1, "form-control", "border-primary"], [1, "form-actions", "text-right"]],
  template: function HiddenLabelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HiddenLabelsComponent_div_7_Template, 57, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HiddenLabelsComponent_div_8_Template, 51, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Issue Tracking");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "This form shows tooltips on hover to provide useful information while user is filling the form. Use data attributes like toggle ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "data-toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, ", trigger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "data-trigger");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, ", placement ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "data-placement");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, ", title ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "data-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " to show tooltips on form controls.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "form", 15)(33, "div", 16)(34, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20)(39, "div", 8)(40, "div", 17)(41, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 24)(45, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HiddenLabelsComponent_Template_div_click_45_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](43);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r2.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 8)(48, "div", 17)(49, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 22, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 24)(53, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HiddenLabelsComponent_Template_div_click_53_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 17)(56, "select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, HiddenLabelsComponent_option_57_Template, 2, 2, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 17)(59, "select", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, HiddenLabelsComponent_option_60_Template, 2, 2, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "textarea", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 32)(64, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 8)(71, "div", 9)(72, "div", 10)(73, "h4", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 12)(76, "div", 13)(77, "div", 14)(78, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "This form shows the use of icons with form controls. Define the position of the icon using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "has-icon-right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " class. Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "icon-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, " class to define the icon for the form control. See Icons sections for the list of icons you can use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "form", 15)(90, "div", 16)(91, "div", 17)(92, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 17)(97, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 17)(102, "div", 38)(103, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "input", 22, 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 24)(107, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HiddenLabelsComponent_Template_div_click_107_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](105);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r6.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 17)(112, "div", 46)(113, "div", 47)(114, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 24)(118, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 20)(121, "div", 8)(122, "div", 17)(123, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 8)(128, "div", 17)(129, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 17)(134, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](135, "textarea", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 55)(139, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 6)(146, "div", 8)(147, "div", 9)(148, "div", 10)(149, "h4", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Complaint Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 12)(152, "div", 13)(153, "div", 14)(154, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "This is a variation to the default form control styling. In this example all the form controls has round styling. To apply round style add class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "round");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, " to any form control.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "form", 15)(160, "div", 16)(161, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 17)(166, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "input", 22, 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 24)(170, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HiddenLabelsComponent_Template_div_click_170_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](168);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r7.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](171, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](173, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "textarea", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](177, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 32)(179, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](180, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 8)(186, "div", 9)(187, "div", 10)(188, "h4", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Donation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "div", 12)(191, "div", 13)(192, "div", 14)(193, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "This is another variation to the default form control styling. In this example all the form controls has square styling. To apply square style add class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "square");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, " to any form control.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "form", 15)(199, "div", 16)(200, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](201, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](203, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 17)(209, "div", 46)(210, "div", 47)(211, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "div", 24)(215, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "textarea", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 55)(220, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](221, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 20)(227, "div", 70)(228, "div", 9)(229, "div", 10)(230, "h4", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 12)(233, "div", 13)(234, "div", 14)(235, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "This example shows a way to center your form in the card. Here we have used ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "col-md-6 ml-auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, " classes to center the form in a full width card. User can always change those classes according to width and offset requirements. This example also uses form action buttons in the center bottom position of the card.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "form", 15)(241, "div", 72)(242, "div", 8)(243, "div", 16)(244, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](245, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](249, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](251, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](253, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 17)(255, "div", 21)(256, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](257, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "label", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](259, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](261, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "label", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 84)(265, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](266, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](269, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](270, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "div", 72)(272, "div", 8)(273, "div", 9)(274, "div", 10)(275, "h4", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "div", 12)(278, "div", 13)(279, "div", 14)(280, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "This example shows a ways to center your card with form. Here we have used ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "col-md-6 ml-auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, " classes to center the card as its not full width. User can always change those classes according to width and offset requirements. This example also uses form action buttons in the center bottom position of the card.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](285, "form", 15)(286, "div", 72)(287, "div", 70)(288, "div", 16)(289, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](290, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](292, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](294, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](296, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](298, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "div", 17)(300, "div", 21)(301, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](302, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](303, "label", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](306, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "label", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](309, "div", 84)(310, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](311, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](314, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "userProfile")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.issueTracking);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.priority);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.timeSheet);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.complaintForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.donation);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventRegistration1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.eventRegistration2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__.MatchHeightDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZGRlbi1sYWJlbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRCIsImZpbGUiOiJoaWRkZW4tbGFiZWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvaGlkZGVuLWxhYmVscy9oaWRkZW4tbGFiZWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsaUNBQWlDO0NBQ2pDLCtDQUErQzs7QUFFaEQ7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7OztBQUdBLDQxSkFBNDFKIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xuIFxufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC13ZWVrZGF5cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtbW9udGgtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZ2ItZHAtZGF5IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtbW9udGgge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5uZ2ItZHAtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtIC4yNXJlbSAwIDA7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG59XG5cbi5uZ2ItZHAtZGF5LFxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('projectInfo')], HiddenLabelsComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('userProfile')], HiddenLabelsComponent.prototype, "blockUIUserProfile", void 0);

/***/ }),

/***/ 24625:
/*!*******************************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/horizontal-forms/horizontal-forms.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalFormsComponent": () => (/* binding */ HorizontalFormsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);










function HorizontalFormsComponent_div_7_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", interest_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](interest_r5);
  }
}
function HorizontalFormsComponent_div_7_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", range_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](range_r6);
  }
}
function HorizontalFormsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function HorizontalFormsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "This is the basic horizontal form with labels on left and form controls on right in one line. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " class to the form tag to have horizontal form styling. To define form sections use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "form-section");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " class with any heading tags.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 15)(15, "div", 16)(16, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17)(20, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 45)(35, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17)(43, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 17)(48, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Interested in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 19)(51, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, HorizontalFormsComponent_div_7_option_52_Template, 2, 2, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 17)(54, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 19)(57, "select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, HorizontalFormsComponent_div_7_option_58_Template, 2, 2, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 17)(60, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 19)(63, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 96)(65, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 98)(67, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "About Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "textarea", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 101)(72, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
  }
}
function HorizontalFormsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function HorizontalFormsComponent_div_9_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.reloadUserProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " User Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "This is 2-columns horizontal form with labels on left and form controls on right in one line. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " class to the form tag to have horizontal form styling. User can also change the border color and background color of the form control. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "border-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " class to change border color and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "bg-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " class to change background color of the form control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 15)(18, "div", 16)(19, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " About User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6)(23, "div", 55)(24, "div", 17)(25, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Fist Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 55)(30, "div", 17)(31, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 6)(36, "div", 55)(37, "div", 98)(38, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 55)(43, "div", 98)(44, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Nick Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h4", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Contact Info & Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 6)(52, "div", 55)(53, "div", 17)(54, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 17)(59, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 45)(64, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 55)(69, "div", 45)(70, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "textarea", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 49)(75, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.userProfile);
  }
}
class HorizontalFormsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Horizontal Forms',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Horizontal Forms',
        'isLink': true
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      selectFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.userProfile = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nickName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.eventRegistration = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      customer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
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
HorizontalFormsComponent.ɵfac = function HorizontalFormsComponent_Factory(t) {
  return new (t || HorizontalFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
HorizontalFormsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HorizontalFormsComponent,
  selectors: [["app-horizontal-forms"]],
  decls: 171,
  vars: 7,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "horizontal-form-layouts"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [1, "card"], [1, "card-header"], ["id", "horz-layout-icons", 1, "card-title"], [1, "card-content", "collpase", "show"], [1, "card-body"], [1, "card-text"], [1, "form", "form-horizontal", 3, "formGroup"], [1, "form-body"], [1, "form-group", "row", "mx-auto"], ["for", "timesheetinput1", 1, "col-md-3", "label-control"], [1, "col-md-9"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["for", "timesheetinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["for", "timesheetinput3", 1, "col-md-3", "label-control"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], [1, "feather", "ft-message-square"], [1, "col-md-3", "label-control"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["for", "timesheetinput5", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["for", "timesheetinput6", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], [1, "form-group", "row", "mx-auto", "last"], ["for", "timesheetinput7", 1, "col-md-3", "label-control"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "text-right"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], [1, "row", "justify-content-md-center"], [1, "col-md-6"], ["id", "horz-layout-card-center", 1, "card-title"], ["for", "eventRegInput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventRegInput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventRegInput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventRegInput4", 1, "col-md-3", "label-control"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventRegInput5", 1, "col-md-3", "label-control"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "input-group", "col-md-9"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "value", "yes", "id", "yes", "formControlName", "customer1", 1, "custom-control-input"], ["for", "yes", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "value", "no", "id", "no", "formControlName", "customer1", 1, "custom-control-input"], ["for", "no", 1, "custom-control-label"], [1, "form-actions", "text-center"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "form-section"], ["for", "projectinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["for", "projectinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["for", "projectinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["for", "projectinput4", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "feather", "ft-clipboard"], ["for", "projectinput5", 1, "col-md-3", "label-control"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["for", "projectinput6", 1, "col-md-3", "label-control"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "projectinput7", 1, "col-md-3", "label-control"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput8", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile"], [1, "file-custom"], [1, "form-group", "row", "last", "mx-auto"], ["for", "projectinput9", 1, "col-md-3", "label-control"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], [1, "form-actions"], [3, "value"], [1, "la", "la-eye"], ["for", "userinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput1", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", "border-primary"], ["for", "userinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput2", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", "border-primary"], ["for", "userinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput3", "placeholder", "Username", "formControlName", "userName", 1, "form-control", "border-primary"], ["for", "userinput4", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput4", "placeholder", "Nick Name", "formControlName", "nickName", 1, "form-control", "border-primary"], [1, "feather", "ft-mail"], ["for", "userinput5", 1, "col-md-3", "label-control"], ["type", "email", "placeholder", "email", "id", "userinput5", "formControlName", "email", 1, "form-control", "border-primary"], ["for", "userinput6", 1, "col-md-3", "label-control"], ["type", "url", "placeholder", "http://", "id", "userinput6", "formControlName", "website", 1, "form-control", "border-primary"], ["id", "userinput7", "type", "tel", "formControlName", "phone", "placeholder", "Contact Number", 1, "form-control", "border-primary"], ["for", "userinput8", 1, "col-md-3", "label-control"], ["id", "userinput8", "rows", "6", "formControlName", "bio", "placeholder", "Bio", 1, "form-control", "border-primary"]],
  template: function HorizontalFormsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HorizontalFormsComponent_div_7_Template, 78, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HorizontalFormsComponent_div_9_Template, 81, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, ".form-horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " class to the form tag to have horizontal form styling. This horizontal form shows the use of icons with form controls. Define the position of the icon using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "has-icon-right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " class. Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "icon-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " class to define the icon for the form control. See Icons sections for the list of icons you can use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "form", 15)(34, "div", 16)(35, "div", 17)(36, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Employee Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19)(39, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 17)(44, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 19)(47, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 17)(52, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 19)(55, "div", 20)(56, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 31)(60, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontalFormsComponent_Template_div_click_60_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 17)(65, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Rate Per Hour");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 19)(68, "div", 36)(69, "div", 37)(70, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 31)(74, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 17)(77, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Start Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 19)(80, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 17)(85, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "End Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 19)(88, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 45)(93, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 19)(96, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "textarea", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 49)(101, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 54)(108, "div", 55)(109, "div", 9)(110, "div", 10)(111, "h4", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 12)(114, "div", 13)(115, "div", 14)(116, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, ".form-horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, " class to the form tag to have horizontal form styling. This is horizontal form demo with centered card. Here we have used ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "col-md-6 ml-auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " classes to center the card as its not full width. User can always change those classes according to width and offset requirements.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "form", 15)(125, "div", 16)(126, "div", 17)(127, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 17)(132, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 17)(137, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 17)(142, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 17)(147, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 45)(152, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 19)(155, "div", 67)(156, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "input", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 74)(165, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "userProfile")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.timeSheet);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.eventRegistration);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbInputDatepicker, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtZm9ybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0NBQzFCLGlDQUFpQztDQUNqQywrQ0FBK0M7O0FBRWhEOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6Imhvcml6b250YWwtZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvaG9yaXpvbnRhbC1mb3Jtcy9ob3Jpem9udGFsLWZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7O0FBR0EsZzJKQUFnMkoiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xuIFxufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC13ZWVrZGF5cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtbW9udGgtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZ2ItZHAtZGF5IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtbW9udGgge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5uZ2ItZHAtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtIC4yNXJlbSAwIDA7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG59XG5cbi5uZ2ItZHAtZGF5LFxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectInfo')], HorizontalFormsComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('userProfile')], HorizontalFormsComponent.prototype, "blockUIUserProfile", void 0);

/***/ }),

/***/ 31382:
/*!*************************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/row-separator/row-separator.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RowSeparatorComponent": () => (/* binding */ RowSeparatorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);










function RowSeparatorComponent_div_7_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", interest_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](interest_r5);
  }
}
function RowSeparatorComponent_div_7_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", range_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](range_r6);
  }
}
function RowSeparatorComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function RowSeparatorComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".row-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add border bottom to a form-group. In this example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " is used to show the row separator functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 15)(15, "div", 16)(16, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17)(20, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 45)(35, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17)(43, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 17)(48, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Interested in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 19)(51, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, RowSeparatorComponent_div_7_option_52_Template, 2, 2, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 17)(54, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 19)(57, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, RowSeparatorComponent_div_7_option_58_Template, 2, 2, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 17)(60, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 19)(63, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 95)(65, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 97)(67, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "About Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "textarea", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 100)(72, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
  }
}
function RowSeparatorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function RowSeparatorComponent_div_9_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.reloadUserProfile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " User Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".row-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add border bottom to a form-group. In this example 2-column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " is used with primary color bordered form controls to show the row separator functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 15)(15, "div", 16)(16, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " About User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6)(20, "div", 103)(21, "div", 17)(22, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Fist Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 103)(27, "div", 17)(28, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6)(33, "div", 103)(34, "div", 97)(35, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 103)(40, "div", 97)(41, "label", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Nick Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Contact Info & Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 6)(49, "div", 103)(50, "div", 17)(51, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 17)(56, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 45)(61, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 103)(66, "div", 45)(67, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Bio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "textarea", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 49)(72, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.userProfile);
  }
}
class RowSeparatorComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Row Reparator Forms',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Row Reparator Forms',
        'isLink': true
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      selectFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.userProfile = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      nickName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      website: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      bio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.eventRegistration = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      customer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
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
RowSeparatorComponent.ɵfac = function RowSeparatorComponent_Factory(t) {
  return new (t || RowSeparatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
RowSeparatorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RowSeparatorComponent,
  selectors: [["app-row-separator"]],
  decls: 159,
  vars: 7,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "row-separator-form-layouts"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [1, "card"], [1, "card-header"], ["id", "row-separator-icons", 1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-text"], [1, "form", "form-horizontal", "row-separator", 3, "formGroup"], [1, "form-body"], [1, "form-group", "row", "mx-auto"], ["for", "timesheetinput1", 1, "col-md-3", "label-control"], [1, "col-md-9"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-user"], ["for", "timesheetinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["for", "timesheetinput3", 1, "col-md-3", "label-control"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], [1, "feather", "ft-message-square"], [1, "col-md-3", "label-control"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["for", "timesheetinput5", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["for", "timesheetinput6", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], [1, "form-group", "row", "mx-auto", "last"], ["for", "timesheetinput7", 1, "col-md-3", "label-control"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "text-right"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], [1, "col-md-6", "offset-md-3"], ["id", "row-separator-card-center", 1, "card-title"], ["for", "eventRegInput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventRegInput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventRegInput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventRegInput4", 1, "col-md-3", "label-control"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventRegInput5", 1, "col-md-3", "label-control"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "input-group", "col-md-9"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "value", "yes", "id", "yes", "formControlName", "customer1", 1, "custom-control-input"], ["for", "yes", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "value", "no", "id", "no", "formControlName", "customer1", 1, "custom-control-input"], ["for", "no", 1, "custom-control-label"], [1, "form-actions", "text-center"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "form-section"], ["for", "projectinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["for", "projectinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["for", "projectinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["for", "projectinput4", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "feather", "ft-clipboard"], ["for", "projectinput5", 1, "col-md-3", "label-control"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["for", "projectinput6", 1, "col-md-3", "label-control"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "projectinput7", 1, "col-md-3", "label-control"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput8", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile"], [1, "file-custom"], [1, "form-group", "row", "last", "mx-auto"], ["for", "projectinput9", 1, "col-md-3", "label-control"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], [1, "form-actions"], [3, "value"], [1, "la", "la-eye"], [1, "col-md-6"], ["for", "userinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput1", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", "border-primary"], ["for", "userinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput2", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", "border-primary"], ["for", "userinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput3", "placeholder", "Username", "formControlName", "userName", 1, "form-control", "border-primary"], ["for", "userinput4", 1, "col-md-3", "label-control"], ["type", "text", "id", "userinput4", "placeholder", "Nick Name", "formControlName", "nickName", 1, "form-control", "border-primary"], [1, "feather", "ft-mail"], ["for", "userinput5", 1, "col-md-3", "label-control"], ["type", "email", "placeholder", "email", "id", "userinput5", "formControlName", "email", 1, "form-control", "border-primary"], ["for", "userinput6", 1, "col-md-3", "label-control"], ["type", "url", "placeholder", "http://", "id", "userinput6", "formControlName", "website", 1, "form-control", "border-primary"], ["id", "userinput7", "type", "tel", "formControlName", "phone", "placeholder", "Contact Number", 1, "form-control", "border-primary"], ["for", "userinput8", 1, "col-md-3", "label-control"], ["id", "userinput8", "rows", "6", "formControlName", "bio", "placeholder", "Bio", 1, "form-control", "border-primary"]],
  template: function RowSeparatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RowSeparatorComponent_div_7_Template, 78, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RowSeparatorComponent_div_9_Template, 78, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Timesheet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, ".row-separator");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " to form tag to add border bottom to a form-group. In this example icons are used with form controls to show the row separator functionality.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "form", 15)(25, "div", 16)(26, "div", 17)(27, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Employee Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17)(35, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 19)(38, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17)(43, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19)(46, "div", 20)(47, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 31)(51, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RowSeparatorComponent_Template_div_click_51_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 17)(56, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Rate Per Hour");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 19)(59, "div", 36)(60, "div", 37)(61, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 31)(65, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 17)(68, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Start Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 19)(71, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 17)(76, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "End Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 19)(79, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 45)(84, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Notes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 19)(87, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "textarea", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 49)(92, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 6)(99, "div", 54)(100, "div", 9)(101, "div", 10)(102, "h4", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 12)(105, "div", 13)(106, "div", 14)(107, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, ".row-separator");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " to form tag to add border bottom to a form-group. In this example centered card is used to show the row separator functionality.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "form", 15)(113, "div", 16)(114, "div", 17)(115, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 17)(120, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "input", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 17)(125, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 17)(130, "label", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 17)(135, "label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 45)(140, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 19)(143, "div", 66)(144, "div", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 73)(153, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "userProfile")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.timeSheet);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.eventRegistration);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbInputDatepicker, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdy1zZXBhcmF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsaUNBQWlDO0NBQ2pDLCtDQUErQzs7QUFFaEQ7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQiLCJmaWxlIjoicm93LXNlcGFyYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvcm93LXNlcGFyYXRvci9yb3ctc2VwYXJhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0NBQzFCLGlDQUFpQztDQUNqQywrQ0FBK0M7O0FBRWhEOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOzs7QUFHQSxnMkpBQWcySiIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xuIFxufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC13ZWVrZGF5cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtbW9udGgtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZ2ItZHAtZGF5IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtbW9udGgge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5uZ2ItZHAtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtIC4yNXJlbSAwIDA7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG59XG5cbi5uZ2ItZHAtZGF5LFxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectInfo')], RowSeparatorComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('userProfile')], RowSeparatorComponent.prototype, "blockUIUserProfile", void 0);

/***/ }),

/***/ 69094:
/*!***************************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/striped-labels/striped-labels.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripedLabelsComponent": () => (/* binding */ StripedLabelsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);










function StripedLabelsComponent_div_7_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", interest_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](interest_r4);
  }
}
function StripedLabelsComponent_div_7_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", range_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](range_r5);
  }
}
function StripedLabelsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "m-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function StripedLabelsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".striped-labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add striped labels. In this example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, ".form-bordered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " is used to show the striped labels functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 47)(18, "div", 16)(19, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17)(23, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17)(28, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 17)(33, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 29)(38, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h4", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17)(46, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 17)(51, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Interested in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19)(54, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, StripedLabelsComponent_div_7_option_55_Template, 2, 2, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 17)(57, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 19)(60, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, StripedLabelsComponent_div_7_option_61_Template, 2, 2, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 17)(63, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 19)(66, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 69)(68, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 71)(70, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "About Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "textarea", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 74)(75, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
  }
}
function StripedLabelsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "m-card", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function StripedLabelsComponent_div_9_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.reloadTimesheet($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Timesheet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".striped-labels");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add striped labels. In this example icons are used with form controls to show the striped labels functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 47)(12, "div", 16)(13, "div", 17)(14, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Employee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 19)(17, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17)(22, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19)(25, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19)(33, "div", 77)(34, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 87)(38, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StripedLabelsComponent_div_9_Template_div_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r8.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17)(43, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Rate Per Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19)(46, "div", 91)(47, "div", 92)(48, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 87)(52, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 17)(55, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 19)(58, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 17)(63, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 19)(66, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 29)(71, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 58)(74, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "textarea", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 103)(79, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.timeSheet);
  }
}
class StripedLabelsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.customer1 = 'yes';
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Striped Label Forms',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Striped Label Forms',
        'isLink': true
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      selectFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.eventRegistration = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      customer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');
    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }
  reloadTimesheet() {
    this.blockUITimesheet.start('Loading..');
    setTimeout(() => {
      this.blockUITimesheet.stop();
    }, 2500);
  }
}
StripedLabelsComponent.ɵfac = function StripedLabelsComponent_Factory(t) {
  return new (t || StripedLabelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
StripedLabelsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: StripedLabelsComponent,
  selectors: [["app-striped-labels"]],
  decls: 71,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "striped-label-form-layouts"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-6", "offset-md-3"], [1, "card"], [1, "card-header"], ["id", "striped-label-layout-card-center", 1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "card-text"], [1, "form", "form-horizontal", "striped-labels", 3, "formGroup"], [1, "form-body"], [1, "form-group", "row", "mx-auto"], ["for", "eventRegInput1", 1, "col-md-3", "label-control"], [1, "col-md-9"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventRegInput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventRegInput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventRegInput4", 1, "col-md-3", "label-control"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventRegInput5", 1, "col-md-3", "label-control"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "form-group", "row", "mx-auto", "last"], [1, "col-md-3", "label-control"], [1, "input-group", "col-md-9"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "value", "yes", "id", "yes", "formControlName", "customer1", 1, "custom-control-input"], ["for", "yes", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "value", "no", "id", "no", "formControlName", "customer1", 1, "custom-control-input"], ["for", "no", 1, "custom-control-label"], [1, "form-actions", "text-center"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "form", "form-horizontal", "striped-labels", "form-bordered", 3, "formGroup"], [1, "form-section"], [1, "feather", "ft-user"], ["for", "projectinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["for", "projectinput2", 1, "col-md-3", "label-control"], [1, "col-md-9", "timesheetinput5"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["for", "projectinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["for", "projectinput4", 1, "col-md-3", "label-control"], [1, "col-md-9mr-1"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "feather", "ft-clipboard"], ["for", "projectinput5", 1, "col-md-3", "label-control"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["for", "projectinput6", 1, "col-md-3", "label-control"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "projectinput7", 1, "col-md-3", "label-control"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput8", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile"], [1, "file-custom"], [1, "form-group", "row", "last", "mx-auto"], ["for", "projectinput9", 1, "col-md-3", "label-control"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], [1, "form-actions"], [3, "value"], ["for", "timesheetinput1", 1, "col-md-3", "label-control"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], ["for", "timesheetinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["for", "timesheetinput3", 1, "col-md-3", "label-control"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], [1, "feather", "ft-message-square"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["for", "timesheetinput5", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["for", "timesheetinput6", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], ["for", "timesheetinput7", 1, "col-md-3", "label-control"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "text-right"]],
  template: function StripedLabelsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, StripedLabelsComponent_div_7_Template, 81, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, StripedLabelsComponent_div_9_Template, 85, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "h4", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Event Registration");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, ".striped-labels");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " to form tag to add striped labels. In this example centered card is used to show the striped labels functionality.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "form", 15)(25, "div", 16)(26, "div", 17)(27, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 17)(32, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 17)(37, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 17)(42, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 17)(47, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 29)(52, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 19)(55, "div", 31)(56, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 38)(65, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "timesheet")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.eventRegistration);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbInputDatepicker, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\nform.striped-labels[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-bordered[_ngcontent-%COMP%] {\n  border-left: 1px solid #E9EBF5 !important;\n  border-bottom: 1px solid #E9EBF5 !important;\n}\nform.striped-labels[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-borderedmr-1[_ngcontent-%COMP%] {\n  border-left: 1px solid #E9EBF5 !important;\n}\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmlwZWQtbGFiZWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRCIsImZpbGUiOiJzdHJpcGVkLWxhYmVscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbmZvcm0uc3RyaXBlZC1sYWJlbHMgLmZvcm0tZ3JvdXAgLmZvcm0tYm9yZGVyZWQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFOUVCRjUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOUVCRjUgIWltcG9ydGFudDtcbn1cbmZvcm0uc3RyaXBlZC1sYWJlbHMgLmZvcm0tZ3JvdXAgLmZvcm0tYm9yZGVyZWRtci0xIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTlFQkY1ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0IHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xuICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcbiBcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtd2Vla2RheXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLW1vbnRoLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmdiLWRwLWRheSB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLW1vbnRoIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvc3RyaXBlZC1sYWJlbHMvc3RyaXBlZC1sYWJlbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0NBQzFCLGlDQUFpQztDQUNqQywrQ0FBK0M7O0FBRWhEOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOzs7QUFHQSx3dktBQXd2SyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG5mb3JtLnN0cmlwZWQtbGFiZWxzIC5mb3JtLWdyb3VwIC5mb3JtLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTlFQkY1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTlFQkY1ICFpbXBvcnRhbnQ7XG59XG5mb3JtLnN0cmlwZWQtbGFiZWxzIC5mb3JtLWdyb3VwIC5mb3JtLWJvcmRlcmVkbXItMSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0U5RUJGNSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectInfo')], StripedLabelsComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('timesheet')], StripedLabelsComponent.prototype, "blockUITimesheet", void 0);

/***/ }),

/***/ 9437:
/*!***********************************************************************************!*\
  !*** ./src/app/content/forms/form-layouts/striped-rows/striped-rows.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripedRowsComponent": () => (/* binding */ StripedRowsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);










function StripedRowsComponent_div_7_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const interest_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", interest_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](interest_r4);
  }
}
function StripedRowsComponent_div_7_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const range_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", range_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](range_r5);
  }
}
function StripedRowsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "m-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function StripedRowsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.reloadProjectInfo($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Project Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".striped-rows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add striped rows. In this example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, ".form-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, ".form-bordered");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " is used to show the striped rows functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 13)(18, "div", 14)(19, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Personal Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15)(28, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15)(33, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 27)(38, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 15)(46, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 15)(51, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Interested in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 17)(54, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, StripedRowsComponent_div_7_option_55_Template, 2, 2, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 15)(57, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 17)(60, "select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, StripedRowsComponent_div_7_option_61_Template, 2, 2, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 15)(63, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Select File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 17)(66, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 62)(68, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 64)(70, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "About Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "textarea", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 67)(75, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.projectInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.interestedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.budget);
  }
}
function StripedRowsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "m-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function StripedRowsComponent_div_9_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.reloadTimesheet($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Timesheet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 12)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".striped-rows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " to form tag to add striped rows. In this example icons are used with form controls to show the striped rows functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "form", 13)(12, "div", 14)(13, "div", 15)(14, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Employee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 17)(17, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15)(22, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Project Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 15)(30, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 17)(33, "div", 70)(34, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 80)(38, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StripedRowsComponent_div_9_Template_div_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r8.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 15)(43, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Rate Per Hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 17)(46, "div", 84)(47, "div", 85)(48, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 80)(52, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 15)(55, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 17)(58, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 15)(63, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 17)(66, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 27)(71, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 17)(74, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "textarea", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 96)(79, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.timeSheet);
  }
}
class StripedRowsComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.interestedIn = ['design', 'development', 'illustration', 'branding', 'video'];
    this.budget = ['less than 5000$', '5000$ - 10000$', '10000$ - 20000$', 'more than 20000$'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Striped Row Forms',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form Layouts',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Striped Row Forms',
        'isLink': true
      }]
    };
    this.projectInfo = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      interestedIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      selectFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      aboutProject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.timeSheet = this.formBuilder.group({
      employeeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      projectname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      ratePerHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      startTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      endTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.eventRegistration = this.formBuilder.group({
      fullname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      customer1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  reloadProjectInfo() {
    this.blockUIProjectInfo.start('Loading..');
    setTimeout(() => {
      this.blockUIProjectInfo.stop();
    }, 2500);
  }
  reloadTimesheet() {
    this.blockUITimesheet.start('Loading..');
    setTimeout(() => {
      this.blockUITimesheet.stop();
    }, 2500);
  }
}
StripedRowsComponent.ɵfac = function StripedRowsComponent_Factory(t) {
  return new (t || StripedRowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
StripedRowsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: StripedRowsComponent,
  selectors: [["app-striped-rows"]],
  decls: 69,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "striped-row-form-layouts"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "row", "justify-content-md-center"], [1, "col-md-6"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-text"], [1, "form", "form-horizontal", "striped-rows", "form-bordered", 3, "formGroup"], [1, "form-body"], [1, "form-group", "row", "mx-auto"], ["for", "eventRegInput1", 1, "col-md-3", "label-control"], [1, "col-md-9"], ["type", "text", "id", "eventInput1", "placeholder", "name", "formControlName", "fullname", 1, "form-control"], ["for", "eventRegInput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput2", "placeholder", "title", "formControlName", "title", 1, "form-control"], ["for", "eventRegInput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "eventInput3", "placeholder", "company", "formControlName", "company", 1, "form-control"], ["for", "eventRegInput4", 1, "col-md-3", "label-control"], ["type", "email", "id", "eventInput4", "placeholder", "email", "formControlName", "email", 1, "form-control"], ["for", "eventRegInput5", 1, "col-md-3", "label-control"], ["type", "tel", "id", "eventInput5", "formControlName", "phone", "placeholder", "contact number", 1, "form-control"], [1, "form-group", "row", "mx-auto", "last"], [1, "col-md-3", "label-control"], [1, "input-group", "col-md-9"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "value", "yes", "id", "yes", "formControlName", "customer1", 1, "custom-control-input"], ["for", "yes", 1, "custom-control-label"], [1, "d-inline-block", "custom-control", "custom-radio"], ["type", "radio", "value", "no", "id", "no", "formControlName", "customer1", 1, "custom-control-input"], ["for", "no", 1, "custom-control-label"], [1, "form-actions", "text-center"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], [1, "feather", "ft-x"], ["type", "submit", 1, "btn", "btn-primary"], [1, "la", "la-check"], [1, "col-md-12"], [3, "options", "reloadFunction"], [1, "form-section"], [1, "feather", "ft-user"], ["for", "projectinput1", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput1", "formControlName", "firstName", "placeholder", "First Name", 1, "form-control"], ["for", "projectinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput2", "formControlName", "lastName", "placeholder", "Last Name", 1, "form-control"], ["for", "projectinput3", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput3", "formControlName", "email", "placeholder", "E-mail", 1, "form-control"], ["for", "projectinput4", 1, "col-md-3", "label-control"], ["type", "text", "id", "projectinput4", "formControlName", "phone", "placeholder", "Phone", 1, "form-control"], [1, "feather", "ft-clipboard"], ["for", "projectinput5", 1, "col-md-3", "label-control"], ["type", "text", "id", "companyName", "formControlName", "company", "placeholder", "Company Name", 1, "form-control"], ["for", "projectinput6", 1, "col-md-3", "label-control"], ["id", "projectinput5", "formControlName", "interestedIn", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "projectinput7", 1, "col-md-3", "label-control"], ["id", "projectinput6", "formControlName", "budget", 1, "form-control"], ["id", "projectinput8", 1, "file", "center-block"], ["type", "file", "id", "file", "formControlName", "selectFile"], [1, "file-custom"], [1, "form-group", "row", "last", "mx-auto"], ["for", "projectinput9", 1, "col-md-3", "label-control"], ["id", "projectinput8", "rows", "5", "formControlName", "aboutProject", "placeholder", "About Project", 1, "form-control"], [1, "form-actions"], [3, "value"], ["for", "timesheetinput1", 1, "col-md-3", "label-control"], [1, "position-relative", "has-icon-left"], ["type", "text", "id", "timesheetinput1", "placeholder", "employee name", "formControlName", "employeeName", 1, "form-control"], [1, "form-control-position"], ["for", "timesheetinput2", 1, "col-md-3", "label-control"], ["type", "text", "id", "timesheetinput2", "placeholder", "project name", "formControlName", "projectname", 1, "form-control"], [1, "la", "la-briefcase"], ["for", "timesheetinput3", 1, "col-md-3", "label-control"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], [1, "feather", "ft-message-square"], [1, "input-group", "mt-0"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "placeholder", "Rate Per Hour", "formControlName", "ratePerHour", 1, "form-control"], ["for", "timesheetinput5", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput5", "formControlName", "startTime", 1, "form-control"], [1, "feather", "ft-clock"], ["for", "timesheetinput6", 1, "col-md-3", "label-control"], ["type", "time", "id", "timesheetinput6", "formControlName", "endTime", 1, "form-control"], ["for", "timesheetinput7", 1, "col-md-3", "label-control"], ["id", "timesheetinput7", "rows", "5", "formControlName", "notes", "placeholder", "notes", 1, "form-control"], [1, "feather", "ft-file"], [1, "form-actions", "text-right"]],
  template: function StripedRowsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, StripedRowsComponent_div_7_Template, 81, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, StripedRowsComponent_div_9_Template, 85, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "m-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Event Registration ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, ".striped-rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " to form tag to add striped rows. In this example centered card is used to show the striped rows functionality.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "form", 13)(23, "div", 14)(24, "div", 15)(25, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Full Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 15)(30, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15)(35, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 15)(40, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15)(45, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Contact Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 27)(50, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Existing Customer");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 17)(53, "div", 29)(54, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Yes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 36)(63, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "projectInfo")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "timesheet")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.eventRegistration);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbInputDatepicker, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmlwZWQtcm93cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0NBQzFCLGlDQUFpQztDQUNqQywrQ0FBK0M7O0FBRWhEOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6InN0cmlwZWQtcm93cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0IHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IC4xODVyZW0gLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheTphY3RpdmUge1xuICBjb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiBib3JkZXItYmxvY2stY29sb3I6IHJnYigyLCAxMTcsIDIxNikgIWltcG9ydGFudDtcbiBcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtd2Vla2RheXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLW1vbnRoLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmdiLWRwLWRheSB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLW1vbnRoIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWxheW91dHMvc3RyaXBlZC1yb3dzL3N0cmlwZWQtcm93cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0NBQzFCLGlDQUFpQztDQUNqQywrQ0FBK0M7O0FBRWhEOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOzs7QUFHQSxvL0pBQW8vSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('projectInfo')], StripedRowsComponent.prototype, "blockUIProjectInfo", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('timesheet')], StripedRowsComponent.prototype, "blockUITimesheet", void 0);

/***/ })

}]);
//# sourceMappingURL=src_app_content_forms_form-layouts_form-layouts_module_ts.js.map