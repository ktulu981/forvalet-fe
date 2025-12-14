"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_applications_email_email_module_ts"],{

/***/ 34332:
/*!***************************************************************!*\
  !*** ./src/app/content/applications/email/email.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComponent": () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_application_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/application-api.service */ 13780);
/* harmony import */ var _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/quill-initialize-service.service */ 47266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);












const _c0 = function (a0, a1) {
  return {
    "active": a0,
    "": a1
  };
};
function EmailComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 129)(1, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_div_12_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const email_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.showEmailMenu(email_r4.Id, ctx_r5.emailMenuList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const email_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, email_r4.isSelected === true, email_r4.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](email_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](email_r4.budgeClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](email_r4.budge);
  }
}
function EmailComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 132)(1, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_div_15_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const email_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.showEmailMenu(email_r7.Id, ctx_r8.emailLable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const email_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, email_r7.isSelected === true, email_r7.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", email_r7.bulletClass, " d-inline-block rounded-circle ");
  }
}
function EmailComponent_li_137_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 153);
  }
}
function EmailComponent_li_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 134)(2, "div", 135)(3, "div", 136)(4, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmailComponent_li_137_Template_input_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const contact_r10 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](contact_r10.isSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_li_137_Template_span_click_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const contact_r10 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.emailFavorite($event, contact_r10.emailId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 140)(9, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_li_137_Template_div_click_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.showEmail($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 144)(13, "div", 145)(14, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 147)(17, "span", 148)(18, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 150)(21, "p", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 147)(24, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, EmailComponent_li_137_i_25_Template, 1, 0, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const contact_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](contact_r10.mediaClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "checkboxsmall", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", contact_r10.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "checkboxsmall", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](contact_r10.starClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", "emailstar-icon" + contact_r10.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](contact_r10.starIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", contact_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](contact_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](contact_r10.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", contact_r10.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", contact_r10.showicon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("bullet bullet-sm ", contact_r10.bullet, " d-inline-block rounded-circle");
  }
}
function EmailComponent_div_214_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_div_214_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const email_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.showMassage($event, email_r17.emailId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 155)(2, "div", 156)(3, "div", 157)(4, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 160)(7, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_div_214_Template_span_click_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const email_r17 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.emailFavorite($event, email_r17.emailId));
    })("click", function EmailComponent_div_214_Template_span_click_17_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 67)(20, "div", 68)(21, "a", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_div_214_Template_a_click_21_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 169)(24, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Add to another project");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Create follow up task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 170)(31, "div", 20)(32, "div", 171)(33, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 174)(44, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Attached Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ul", 175)(47, "li", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "img", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "small", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "small", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const email_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", "emailThread" + email_r17.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", "headingCollapse5" + email_r17.emailId)("data-target", "collapse5" + email_r17.emailId)("aria-expanded", email_r17.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", email_r17.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](email_r17.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" <", email_r17.email, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](email_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](email_r17.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", "email-icon" + email_r17.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", false)("autoClose", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", "collapse5" + email_r17.emailId)("aria-labelledby", "headingCollapse5" + email_r17.emailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](email_r17.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r17.descrition, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r17.descrition_detail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r17.sender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r17.sender_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", email_r17.image_icon1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r17.file_name1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", email_r17.image_icon2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", email_r17.file_name2, "");
  }
}
const _c1 = function () {
  return {
    height: "80px"
  };
};
class Email {
  constructor(emailId, mediaClass, starClass, starIcon, image, time, title, message, showicon, bullet) {
    this.emailId = emailId;
    this.mediaClass = mediaClass;
    this.starClass = starClass;
    this.starIcon = starIcon;
    this.image = image;
    this.time = time;
    this.title = title;
    this.message = message;
    this.showicon = showicon;
    this.bullet = bullet;
  }
}
class EmailHistory {
  constructor(emailId, username, email, image, date, title, message, descrition, descrition_detail, sender, sender_name, iconClass, image_icon1, file_name1, image_icon2, file_name2) {
    this.emailId = emailId;
    this.username = username;
    this.email = email;
    this.image = image;
    this.date = date;
    this.title = title;
    this.message = message;
    this.descrition = descrition;
    this.descrition_detail = descrition_detail;
    this.sender = sender;
    this.sender_name = sender_name;
    this.iconClass = iconClass;
    this.image_icon1 = image_icon1;
    this.file_name1 = file_name1;
    this.image_icon2 = image_icon2;
    this.file_name2 = file_name2;
  }
}
class EmailMenu {
  constructor(Id, name, icon, budge, budgeClass, budgeIcon, isSelected) {
    this.Id = Id;
    this.name = name;
    this.icon = icon;
    this.budge = budge;
    this.budgeClass = budgeClass;
    this.budgeIcon = budgeIcon;
    this.isSelected = isSelected;
  }
}
class EmailLable {
  constructor(Id, name, isSelected, bulletClass) {
    this.Id = Id;
    this.name = name;
    this.isSelected = isSelected;
    this.bulletClass = bulletClass;
  }
}
class EmailComponent {
  /**
   * Constructor
   *
   * @param ApplicationApiService     emailApiService
   * @param Renderer2                 renderer
   */
  constructor(emailApiService, renderer, QuillInitializeServiceServicec, fb) {
    this.emailApiService = emailApiService;
    this.renderer = renderer;
    this.QuillInitializeServiceServicec = QuillInitializeServiceServicec;
    this.config = {
      wheelPropagation: true
    };
    this.isHidden = false;
    this.isShown = true;
    this.emailList = [];
    this.emailDisplayList = [];
    this.emailMenuList = [];
    this.temp = [];
    this.temp2 = this.emailList;
    this.isCollapsed = false;
    this.selectAll = false;
    this.blured = false;
    this.focused = false;
    this.hide = false;
    this.htmlText = 'Type Something';
    this.atValues = [{
      id: 1,
      value: 'Fredrik Sundqvist',
      link: 'https://google.com'
    }, {
      id: 2,
      value: 'Patrik Sjölin'
    }];
    this.hashValues = [{
      id: 3,
      value: 'Fredrik Sundqvist 2'
    }, {
      id: 4,
      value: 'Patrik Sjölin 2'
    }];
    this.quillConfig = {
      toolbar: {
        container: [['bold', 'italic', 'underline', 'strike']]
      },
      autoLink: true,
      keyboard: {
        bindings: {
          enter: {
            key: 13,
            handler: (range, context) => {
              console.log('enter');
              return true;
            }
          }
        }
      }
    };
    this.emailquillConfig = {
      toolbar: {
        container: [['bold', 'italic', 'underline', 'strike']]
      },
      autoLink: true
    };
    this.form = fb.group({
      editor: ['']
    });
  }
  /**
   * OnInit
   */
  ngOnInit() {
    this.emailApiService.getEmailData().subscribe(Response => {
      this.emailArray = Response;
      this.emailDisplayList = Response.EmailHistory;
      this.emailMenuList = Response.EmailMenu;
      this.emailLable = Response.EmailLable;
      this.email = this.emailArray.EmailHistory[1];
      this.emailList.push(new Email(1, 'media mail-read', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-1.png', '4.14 AM', 'Open source project public release 👍', 'Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary ', false, 'gradient-mint'));
      this.emailList.push(new Email(2, 'media mail-read', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-2.png', '2.15 AM', 'Ecommerce website Paypal integration 😃', ' We will start the new application development soon once this will be completed. ', false, 'gradient-danger'));
      this.emailList.push(new Email(3, 'media', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-3.png', '11.18AM', 'How To Set Intentions That Energize You', ' I will provide you more details after this Saturday. Hope that will be fine for you.. ', true, 'gradient-mint'));
      this.emailList.push(new Email(4, 'media', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-4.png', 'Yesterday', 'Harness The Power Of Words In Your Life', 'When the equation, first to ability the forwards, the a but travelling, outlines sentinels bad expand to goodness....', true, 'gradient-warning'));
      this.emailList.push(new Email(5, 'media mail-read', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-5.png', '24 Feb', 'Helen Keller A Teller And A Seller', 'Thanks for your feedback ! Here`s a new layout for a new Modern Admin theme.', true, 'gradient-warning'));
      this.emailList.push(new Email(6, 'media mail-read', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-6.png', '15 March', 'Use Your Reset Button To Change Your Vibration 🎉', 'Hey John, bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary', false, 'gradient-info'));
      this.emailList.push(new Email(7, 'media', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-7.png', '12-07-2019', 'Will connect you', 'Hi Kelly!', false, 'gradient-mint'));
      this.emailList.push(new Email(8, 'media mail-read', 'favorite', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-8.png', '03-29-2019', 'Harness The Power Of Words In Your Life', 'Hope your like it, or feel free to comment, feedback or rebound !', false, 'gradient-danger'));
      this.emailList.push(new Email(9, 'media ', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-9.png', '19 Jun', 'Hypnosis 12 Steps To Acquire Mind Power', 'Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of geared from next...', false, 'gradient-info'));
      this.emailList.push(new Email(10, 'media ', 'favorite warning', 'ficon feather ft-star', '../../../assets/images/portrait/small/avatar-s-10.png', '21 Mar', ' Know Yourself Your Inner Power ', ' Hope your like it, or feel free to comment, feedback or rebound.', false, 'gradient-warning'));
    });
    this.form.controls.editor.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)()).subscribe(data => {});
  }
  /**
  * Search email
  *
  * @param event     Convert value uppercase to lowercase;
  */
  updateFilter(event) {
    const value = event.target.value.toLowerCase();
    this.emailList = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.emailList];
    // filter our data
    const temp = this.emailList.filter(function (d) {
      return d.name.toLowerCase().indexOf(value) !== -1 || !value;
    });
    // update the rows
    this.emailList = temp;
    // Whenever the filter changes, always go back to the first page
  }
  /**
   * Overlay add/remove fuction in responsive
   *
   * @param event     Overlay click event
   */
  contentOverlay(event) {
    const toggleIcon = document.getElementById('email-app-menu');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'content-overlay show') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }
  /**
   * Add overlay when open sidebar
   *
   * @param event     Content overlay
   */
  contentRightSidebar(event) {
    const toggle = document.getElementById('content-right');
    if (event.currentTarget.className === 'media _media border-0 ng-star-inserted active') {
      this.renderer.addClass(toggle, 'show');
    }
  }
  /**
   * Remove overlay when close sidebar
   *
   * @param event     Content overlay
   */
  contentRight(event) {
    const toggle = document.getElementById('content-right');
    if (event.currentTarget.className === 'btn btn-primary go-back') {
      this.renderer.removeClass(toggle, 'show');
    }
  }
  /**
   * Open Media-body
   *
   * @param event   Mail Read
   */
  showEmail(event) {
    const toggleIcon = document.getElementById('app-details');
    if (event.currentTarget.className === 'media-body') {
      this.renderer.addClass(toggleIcon, 'show');
    } else if (event.currentTarget.className === 'ficon feather ft-chevron-left font-medium-4 align-middle') {
      this.renderer.removeClass(toggleIcon, 'show');
    }
  }
  /**
   *
   * @'param' event
   * @'param' emailId
   */
  showMassage(event, emailId) {
    for (let i = 1; i <= this.emailDisplayList.length; i++) {
      if (emailId === i) {
        const toggleIcon = document.getElementById('headingCollapse5' + emailId);
        const toggle = document.getElementById('collapse5' + emailId);
        const toggleHeader = document.getElementById('emailThread' + emailId);
        if (event.currentTarget.className === 'card collapse-header ng-star-inserted') {
          this.renderer.addClass(toggle, 'show');
          this.renderer.addClass(toggleHeader, 'open');
          this.renderer.removeClass(toggleIcon, 'collapsed');
          this.emailDisplayList[i - 1].isCollapsed = true;
        } else if (event.currentTarget.className === 'card collapse-header ng-star-inserted open') {
          this.renderer.removeClass(toggle, 'show');
          this.renderer.removeClass(toggleHeader, 'open');
          this.renderer.addClass(toggleIcon, 'collapsed');
          this.emailDisplayList[i - 1].isCollapsed = false;
        }
      }
    }
  }
  /**
  * Add overlay when open sidebar
  *
  * @param event    Content overlay
  */
  showComposeSidebar(event) {
    const toggleIcon = document.getElementById('compose-sidebar');
    const toggleSidebar = document.getElementById('sidebar-left');
    const toggleOverlay = document.getElementById('app-content-overlay');
    if (event.currentTarget.className === 'btn btn-danger btn-glow btn-block my-2 compose-btn') {
      this.renderer.addClass(toggleIcon, 'show');
      this.renderer.removeClass(toggleSidebar, 'show');
      this.renderer.addClass(toggleOverlay, 'show');
    } else if (event.currentTarget.className === 'btn btn-danger btn-glow btn-block my-2 compose-btn show') {
      this.renderer.removeClass(toggleIcon, 'show');
    }
  }
  /**
  * Remove overlay when open sidebar
  *
  * @param event    Content overlay
  */
  showCompose(event) {
    const toggleIcon = document.getElementById('compose-sidebar');
    const toggleOverlay = document.getElementById('app-content-overlay');
    if (event.currentTarget.className === 'close close-icon' || 'app-content-overlay') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggleOverlay, 'show');
    }
  }
  /**
  * Add overlay when open sidebar
  *
  * @param event     Content overlay
  */
  showSidebar(event) {
    const toggleIcon = document.getElementById('sidebar-left');
    const toggle = document.getElementById('app-content-overlay');
    if (event.currentTarget.className === 'sidebar-toggle d-block d-lg-none') {
      this.renderer.addClass(toggleIcon, 'show');
      this.renderer.addClass(toggle, 'show');
    } else if (event.currentTarget.className === 'sidebar-close-icon' || 'app-content-overlay') {
      this.renderer.removeClass(toggleIcon, 'show');
      this.renderer.removeClass(toggle, 'show');
    }
  }
  /**
   * Filter Email
   *
   * @param term    search term
   */
  search(term) {
    const searchTerm = term.currentTarget.value;
    if (searchTerm !== '') {
      this.emailList = this.emailList.filter(result => {
        if (result && searchTerm) {
          if (result.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || result.message.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    } else {
      this.emailList = this.temp2;
    }
  }
  selectAllEmails() {
    for (let i = 0; i < this.emailList.length; i++) {
      if (this.selectAll) {
        this.emailList[i].isSelected = false;
      } else {
        this.emailList[i].isSelected = true;
      }
    }
  }
  deleteCheckedRow() {
    let index = 0;
    const removedIndex = [];
    const temp = [...this.emailList];
    for (const row of temp) {
      if (row.isSelected === true) {
        removedIndex.push(index);
      }
      index++;
    }
    for (let i = removedIndex.length - 1; i >= 0; i--) {
      temp.splice(removedIndex[i], 1);
    }
    this.emailList = temp;
    this.selectAll = false;
  }
  showEmailMenu(Id, emailMenu) {
    for (let j = 0; j < emailMenu.length; j++) {
      for (let i = 0; i < this.emailMenuList.length; i++) {
        for (let k = 0; k < this.emailLable.length; k++) {
          if (emailMenu[j].name === this.emailMenuList[i].name) {
            if (Id !== this.emailMenuList[i].Id) {
              this.emailMenuList[i].isSelected = false;
            }
            if (Id === this.emailMenuList[i].Id) {
              this.emailMenuList[i].isSelected = true;
              this.emailLable[k].isSelected = false;
            }
          } else if (emailMenu[j].name === this.emailLable[k].name) {
            if (Id !== this.emailLable[k].Id) {
              this.emailLable[k].isSelected = false;
            }
            if (Id === this.emailLable[k].Id) {
              this.emailLable[k].isSelected = true;
              this.emailMenuList[i].isSelected = false;
            }
          }
        }
      }
    }
    for (const friend of this.emailMenuList) {
      if (friend.Id === Id) {
        break;
      }
    }
  }
  focus() {
    this.focused = true;
    this.blured = false;
  }
  blur() {
    this.focused = false;
    this.blured = true;
  }
  setControl() {
    this.form.setControl('editor', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('test - new Control'));
  }
  /**
  * Filter Email
  *
  * @ param event   warning Class
  * @ param emailId
  */
  emailFavorite(event, emailId) {
    for (let i = 1; i <= this.emailDisplayList.length; i++) {
      if (emailId === i) {
        const emailIcon = document.getElementById('email-icon' + emailId);
        const emailstarIcon = document.getElementById('emailstar-icon' + emailId);
        if (event.currentTarget.className === 'favorite') {
          this.renderer.addClass(emailIcon, 'warning');
          this.renderer.addClass(emailstarIcon, 'warning');
        } else if (event.currentTarget.className === 'favorite warning') {
          this.renderer.removeClass(emailIcon, 'warning');
          this.renderer.removeClass(emailstarIcon, 'warning');
        }
      }
    }
  }
}
EmailComponent.ɵfac = function EmailComponent_Factory(t) {
  return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_application_api_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_1__.QuillInitializeServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
};
EmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EmailComponent,
  selectors: [["app-email"]],
  viewQuery: function EmailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.isHidden = _t.first);
    }
  },
  decls: 229,
  vars: 23,
  consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], [1, "sidebar-content", "email-app-sidebar", "d-flex"], [1, "sidebar-close-icon", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "email-app-menu"], [1, "form-group", "form-group-compose"], ["type", "button", "id", "compose-btn", 1, "btn", "btn-danger", "btn-glow", "btn-block", "my-2", "compose-btn", 3, "click"], [1, "ficon", "feather", "ficon", "feather", "ft-plus"], ["fxFlex", "auto", 1, "sidebar-menu-list", 3, "perfectScrollbar"], ["class", "list-group list-group-messages", 4, "ngFor", "ngForOf"], [1, "sidebar-label"], ["class", "list-group list-group-labels ", 4, "ngFor", "ngForOf"], ["id", "compose-sidebar", "fxFlex", "auto", 1, "compose-new-mail-sidebar", 3, "perfectScrollbar"], [1, "card", "mb-0", "shadow-none", "quill-wrapper", "p-0"], [1, "card-header"], ["id", "emailCompose", 1, "card-title"], ["type", "button", "id", "showCompose", 1, "close", "close-icon", 3, "click"], ["action", "", "id", "compose-form"], [1, "card-content"], [1, "card-body", "pt-0"], [1, "form-group", "pb-50"], ["for", "emailfrom"], ["type", "text", "id", "emailfrom", "placeholder", "user@example.com", "disabled", "", 1, "form-control"], [1, "form-label-group", "mb-1"], ["type", "email", "id", "emailTo", "placeholder", "To", "required", "", 1, "form-control"], ["type", "text", "id", "emailSubject", "placeholder", "Subject", 1, "form-control"], ["type", "text", "id", "emailCC", "placeholder", "CC", 1, "form-control"], ["type", "text", "id", "emailBCC", "placeholder", "BCC", 1, "form-control"], [1, "snow-container", "border", "rounded", "p-50"], [1, "default-editor"], [1, "row"], [1, "col-12"], [3, "styles", "modules", "onFocus", "onBlur"], [1, "form-group", "mt-2"], [1, "custom-file"], ["type", "file", "id", "emailAttach", 1, "custom-file-input"], ["for", "emailAttach", 1, "custom-file-label"], [1, "card-footer", "border-0", "d-flex", "justify-content-end", "pt-0"], ["type", "reset", 1, "btn", "btn-secondary", "cancel-btn", "mr-1", 3, "click"], [1, "ficon", "feather", "ft-x", "mr-25"], [1, "d-sm-inline", "d-none"], ["type", "submit", 1, "btn-send", "btn", "btn-danger", "btn-glow"], [1, "ficon", "feather", "ft-play", "mr-25"], [1, "content-right"], [1, "content-header", "row"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-body"], ["id", "app-content-overlay", 1, "app-content-overlay", 3, "click"], [1, "email-app-area"], [1, "email-app-list-wrapper"], [1, "email-app-list"], [1, "email-action"], [1, "action-left", "d-flex", "align-items-center"], [1, "custom-control", "custom-checkbox", "selectAll", "mr-50"], ["type", "checkbox", "id", "selectAll", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "selectAll", 1, "custom-control-label"], [1, "list-inline", "m-0", "d-flex"], [1, "list-inline-item", "mail-delete"], ["type", "button", 1, "btn", "btn-icon", "action-icon", 3, "click"], [1, "ficon", "feather", "ft-trash-2"], [1, "list-inline-item", "mail-unread"], ["type", "button", 1, "btn", "btn-icon", "action-icon"], [1, "ficon", "feather", "ft-mail"], [1, "list-inline-item"], [1, "dropdown"], ["ngbDropdown", "", 1, "d-inline-block", 3, "open", "autoClose"], ["type", "button", "id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "dropdown-toggle", "btn", "btn-icon", "action-icon"], [1, "ficon", "feather", "ft-folder", "mr-0"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "inboxDropdown"], [1, "dropdown-item", 3, "routerLink"], [1, "ficon", "feather", "ft-edit"], [1, "ficon", "feather", "ft-info"], ["type", "button", "id", "tag", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "ropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "btn", "btn-icon", "dropdown-toggle", "action-icon"], [1, "ficon", "feather", "ft-tag", "mr-0"], ["aria-labelledby", "tag"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "tagDropdown"], [1, "dropdown-item", "align-items-center", 3, "routerLink"], [1, "bullet", "bullet-sm", "gradient-mint", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-primary", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-warning", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-danger", "d-inline-block", "rounded-circle"], [1, "bullet", "bullet-sm", "gradient-info", "d-inline-block", "rounded-circle"], [1, "action-right", "d-flex", "flex-grow-1", "align-items-center", "justify-content-around"], [1, "email-fixed-search", "flex-grow-1"], [1, "sidebar-toggle", "d-block", "d-lg-none", 3, "click"], [1, "ficon", "feather", "ft-align-justify"], [1, "form-group", "position-relative", "has-icon-left", "m-0"], ["type", "text", "id", "email-search", "placeholder", "Search email", 1, "form-control", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search"], [1, "d-none", "d-sm-block"], [1, "btn", "btn-icon", "email-pagination-prev", "d-none", "d-sm-block"], [1, "ficon", "feather", "ft-chevron-left"], [1, "btn", "btn-icon", "email-pagination-next", "d-none", "d-sm-block"], [1, "ficon", "feather", "ft-chevron-right"], [1, "email-user-list", "list-group", 3, "perfectScrollbar"], [1, "users-list-wrapper", "media-list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "no-results"], [1, "ficon", "feather", "ft-info", "font-large-2"], ["id", "app-details", 1, "email-app-details"], [1, "email-detail-header"], [1, "email-header-left", "d-flex", "align-items-center", "mb-1"], [1, "go-back", "mr-50"], [1, "ficon", "feather", "ft-chevron-left", "font-medium-4", "align-middle", 3, "click"], [1, "email-detail-title", "font-weight-normal", "mb-0"], [1, "badge", "badge-light-danger", "badge-pill", "ml-1", "bg-1"], [1, "email-header-right", "mb-1", "ml-2", "pl-1"], [1, "list-inline", "m-0"], [1, "btn", "btn-icon", "action-icon"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "listDropdown"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "taglistDropdown"], [1, "no-of-list", "d-none", "d-sm-block", "ml-1"], [1, "btn", "btn-icon", "email-pagination-prev", "action-icon"], [1, "btn", "btn-icon", "email-pagination-next", "action-icon"], ["fxFlex", "auto", 1, "email-scroll-area", 3, "perfectScrollbar"], [1, "collapsible", "email-detail-head"], ["class", "card collapse-header", "role", "tablist", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "px-2", "mb-4"], [1, "col-12", "px-0"], [1, "card", "shadow-none", "border", "rounded"], [1, "card-body", "quill-wrapper", "emailquillConfig"], [1, "snow-container"], [1, "emailtoolbar"], [1, "btn", "btn-primary", "send-btn"], [1, "d-none", "d-sm-inline"], [1, "list-group", "list-group-messages"], ["id", "inbox-menu", 1, "list-group-item", 3, "ngClass", "click"], [1, "d-inline", "mr-25"], [1, "list-group", "list-group-labels"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 3, "routerLink", "ngClass", "click"], [1, "user-action"], [1, "checkbox-con", "mr-25"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], [3, "click"], [1, "pr-50"], [1, "avatar"], ["alt", "avtar img holder", 3, "src"], [1, "media-body", 3, "click"], [1, "user-details"], [1, "mail-items"], [1, "list-group-item-text", "text-truncate"], [1, "mail-meta-item"], [1, "float-right"], [1, "mail-date"], [1, "mail-message"], [1, "list-group-item-text", "truncate", "mb-0"], ["class", "ficon feather ft-paperclip mr-50", 4, "ngIf"], [1, "ficon", "feather", "ft-paperclip", "mr-50"], ["role", "tablist", 1, "card", "collapse-header", 3, "click"], ["data-toggle", "collapse", "role", "tab", "aria-controls", "collapse5", 1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "collapse-title", "media"], [1, "pr-1"], [1, "avatar", "mr-75"], ["alt", "avtar img holder", "width", "30", "height", "30", 3, "src"], [1, "media-body", "mt-25"], [1, "text-primary"], [1, "text-muted", "d-block"], [1, "information", "d-sm-flex", "d-none", "align-items-center"], [1, "text-muted", "mr-50"], [1, "favorite", 3, "click"], [1, "ficon", "feather", "ft-star", "mr-25"], ["id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "dropdown-toggle", 3, "click"], [1, "ficon", "feather", "ft-more-vertical", "mr-0"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right"], ["role", "tabpanel", 1, "collapse"], [1, "card-body", "py-1"], [1, "text-bold-500"], [1, "mb-0"], [1, "card-footer", "pt-0", "border-top"], [1, "list-unstyled", "mb-0"], [1, "cursor-pointer", "pb-25"], ["height", "30", "alt", "psd.png", 3, "src"], [1, "text-muted", "ml-1", "attchement-text"], [1, "cursor-pointer"], ["height", "30", "alt", "sketch.png", 3, "src"]],
  template: function EmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_span_click_4_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_8_listener($event) {
        return ctx.showComposeSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Compose ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EmailComponent_div_12_Template, 7, 12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Labels");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EmailComponent_div_15_Template, 4, 8, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "New Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_21_listener($event) {
        return ctx.showCompose($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "form", 19)(24, "div", 20)(25, "div", 21)(26, "div", 22)(27, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "from");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 30)(39, "section", 31)(40, "div", 32)(41, "div", 33)(42, "div", 30)(43, "quill-editor", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFocus", function EmailComponent_Template_quill_editor_onFocus_43_listener() {
        return ctx.focus();
      })("onBlur", function EmailComponent_Template_quill_editor_onBlur_43_listener() {
        return ctx.blur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 35)(45, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Attach file");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 39)(50, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_50_listener($event) {
        return ctx.showCompose($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "div", 46)(60, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 48)(62, "div", 49)(63, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_div_click_63_listener($event) {
        return ctx.showCompose($event);
      })("click", function EmailComponent_Template_div_click_63_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 51)(65, "div", 52)(66, "div", 53)(67, "div", 54)(68, "div", 55)(69, "div", 56)(70, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_70_listener($event) {
        return ctx.selectAll = $event;
      })("click", function EmailComponent_Template_input_click_70_listener() {
        return ctx.selectAllEmails();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "label", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ul", 59)(73, "li", 60)(74, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_74_listener() {
        return ctx.deleteCheckedRow();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li", 63)(77, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "li", 66)(80, "div", 67)(81, "div", 68)(82, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 71)(85, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Draft");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Spam");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Trash");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li", 66)(95, "div", 67)(96, "div", 68)(97, "button", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 77)(100, "div", 78)(101, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "span", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Work");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "span", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Misc");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "span", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "span", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, " Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 85)(122, "div", 86)(123, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_div_click_123_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "fieldset", 89)(126, "input", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function EmailComponent_Template_input_keyup_126_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "i", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "span", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "1-10 of 653");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 98)(136, "ul", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](137, EmailComponent_li_137_Template, 27, 21, "li", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "i", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "No Items Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 103)(143, "div", 104)(144, "div", 105)(145, "span", 106)(146, "i", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_i_click_146_listener($event) {
        return ctx.showEmail($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "h5", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, " Advertising Internet Online ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "span", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "PRODUCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 110)(152, "ul", 111)(153, "li", 66)(154, "button", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li", 66)(157, "button", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "li", 66)(160, "div", 67)(161, "div", 68)(162, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "i", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 113)(165, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "i", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Draft");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "i", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Spam");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "a", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](172, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Trash");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "li", 66)(175, "div", 67)(176, "div", 68)(177, "button", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "i", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 77)(180, "div", 114)(181, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "span", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Work");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "span", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Misc");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "span", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Family");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "a", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "span", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, " Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "li", 66)(202, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "1-10 of 653");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "li", 66)(205, "button", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "i", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "li", 66)(208, "button", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](209, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 118)(211, "div", 32)(212, "div", 33)(213, "div", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](214, EmailComponent_div_214_Template, 55, 23, "div", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 121)(216, "div", 122)(217, "div", 123)(218, "div", 20)(219, "div", 124)(220, "div", 125)(221, "quill-editor", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFocus", function EmailComponent_Template_quill_editor_onFocus_221_listener() {
        return ctx.focus();
      })("onBlur", function EmailComponent_Template_quill_editor_onBlur_221_listener() {
        return ctx.blur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Reply to Lois Jimenez");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 126)(225, "button", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "span", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, " Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.emailMenuList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.emailLable);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c1))("modules", ctx.quillConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectAll);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.emailList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.emailDisplayList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c1))("modules", ctx.quillConfig);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, ngx_quill__WEBPACK_IMPORTED_MODULE_9__.QuillEditorComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
  styles: ["[_nghost-%COMP%]     .mr-50, .mx-50[_ngcontent-%COMP%] {\n  margin-right: .5rem!important;\n}\n[_nghost-%COMP%]     .mr-25, .mx-25[_ngcontent-%COMP%] {\n  margin-right: .25rem!important;\n}\n[_nghost-%COMP%]     .pr-50, .px-50[_ngcontent-%COMP%] {\n  padding-right: .5rem!important;\n}\n[_nghost-%COMP%]     .content-right .email-app-list-wrapper .email-app-list .email-user-list .users-list-wrapper li {\n  border-top: 1px solid #E4E5EC !important;\n}\n[_nghost-%COMP%]     .app-content .content-right {\n  width: calc(100% - 300px) !important;\n  background-color: #fff;\n}\n@media (max-width: 768px){\n  .app-content[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%] {\n    width: calc(100% - 0px) !important;\n    background-color: #fff;\n  }\n}\n[_nghost-%COMP%]     .ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  position: absolute;\n}\n[_nghost-%COMP%]     .content-right .email-app-details .email-scroll-area {\n   overflow-x: hidden !important;\n}\n[_nghost-%COMP%]     .d-block {\n text-align: left;\n}\n[_nghost-%COMP%]     .d-flex {\n  display: flex!important;\n}\n[_nghost-%COMP%]     .btn-link {\n  font-weight: 400;\n  color:#6b6f82 !important;\n  text-decoration: none;\n}\n[_nghost-%COMP%]     .email-detail-head .collapse-header .card-header {\n   background-color: transparent !important;\n}\n\n[_nghost-%COMP%]     .py-1 {\n  background-color: #f4f5fa;\n}\n[_nghost-%COMP%]     .ps {\n  overflow: hidden!important;\n}\n[_nghost-%COMP%]     .content.app-content {\n  overflow-y: hidden !important;\n}\n\n[_nghost-%COMP%]      .tagDropdown {\n  transform: translate3d(-118px, -16px, 0px) !important; \n  top: 8px;\n }\n @media (max-width: 768px){ \n   .tagDropdown[_ngcontent-%COMP%] {\n  transform: translate3d(-98px, -64px, 0px) !important; \n  top: 8px;\n }\n}\n[_nghost-%COMP%]      .listDropdown {\n  transform: translate3d(-123px, 30px, 0px) !important; \n  }\n @media (max-width: 768px){ \n   .listDropdown[_ngcontent-%COMP%] {\n  transform: translate3d(-88px, -65px, 0px) !important; \n  top: 8px;\n }\n}\n[_nghost-%COMP%]      .taglistDropdown {\n  transform: translate3d(-123px, -8px, 0px) !important; \n  }\n @media (max-width: 768px){ \n   .taglistDropdown[_ngcontent-%COMP%] {\n  transform: translate3d(-124px, -65px, 0px) !important; \n  top: 8px;\n }\n}\n [_nghost-%COMP%]      .dropdown .dropdown-menu .dropdown-item {\n  padding: 10px 17px !important;\n }\n[_nghost-%COMP%]     .bg-1{\n  background-color: #666ee8;\n\n}\n[_nghost-%COMP%]     .badge {\n  display: inline-block;\n  padding: .35em .4em;\n  font-size: 80%;\n  text-align: center;\n  vertical-align: baseline;\n  border-radius: .25rem;\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n[_nghost-%COMP%]     .badge-pill {\n  padding-right: .6em;\n  padding-left: .6em;\n  border-radius: 10rem;\n}\n[_nghost-%COMP%]     .show>.inboxDropdown {\n  transform: translate3d(-118px, 30px, 0px) !important;\n  }\n  @media (max-width: 768px){\n    .show[_ngcontent-%COMP%] > .inboxDropdown[_ngcontent-%COMP%] {\n      transform: translate3d(-106px, -65px, 0px) !important;\n      }\n  }\n  [_nghost-%COMP%]      .app-content .sidebar .email-app-sidebar {\n    width: 300px !important;\n  }\n[_nghost-%COMP%]      .emailtoolbar {\n  float: right;\n  margin-bottom: 12px;\n  display: initial;\n }\n [_nghost-%COMP%]      .app-content .quill-wrapper .snow-container .send-btn {\n  height: 38px;\n }\n\n [_nghost-%COMP%]     .ql-editor {\n  overflow-y: initial !important;\n  padding: 0px 0px !important;\n }\n\n [_nghost-%COMP%]      .gradient-mint {\n  background-image: linear-gradient(45deg,#28d094,#28d094)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-primary{\n  background-image: linear-gradient(45deg,#666ee8,#666ee8)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-warning {\n  background-image: linear-gradient(45deg,#ff9149,#ff9149)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-danger {\n  background-image: linear-gradient(45deg,#ff4961,#ff4961)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-info {\n  background-image: linear-gradient(45deg,#1e9ff2,#1e9ff2)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .list-group .list-group-messages :hover {\n  color: #0c84d1 !important;\n}\n[_nghost-%COMP%]     .mr-75, .mx-75[_ngcontent-%COMP%] {\n  margin-right: .75rem!important;\n}\n.list-inline-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.7rem !important; \n}\n\n@media (max-width: 768px){\n  .list-inline-item[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0.25rem !important; \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0Usa0NBQWtDO0lBQ2xDLHNCQUFzQjtFQUN4QjtBQUNGO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0dBQ0csNkJBQTZCO0FBQ2hDO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFDQTtHQUNHLHdDQUF3QztBQUMzQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsUUFBUTtDQUNUO0NBQ0E7R0FDRTtFQUNELG9EQUFvRDtFQUNwRCxRQUFRO0NBQ1Q7QUFDRDtBQUNBO0VBQ0Usb0RBQW9EO0VBQ3BEO0NBQ0Q7R0FDRTtFQUNELG9EQUFvRDtFQUNwRCxRQUFRO0NBQ1Q7QUFDRDtBQUNBO0VBQ0Usb0RBQW9EO0VBQ3BEO0NBQ0Q7R0FDRTtFQUNELHFEQUFxRDtFQUNyRCxRQUFRO0NBQ1Q7QUFDRDtDQUNDO0VBQ0MsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSx5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQiw4SEFBOEg7QUFDaEk7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQ7RUFDQTtJQUNFO01BQ0UscURBQXFEO01BQ3JEO0VBQ0o7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLDhCQUE4QjtFQUM5QiwyQkFBMkI7Q0FDNUI7O0NBRUE7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLGdDQUFnQztFQUNsQztBQUNGIiwiZmlsZSI6ImVtYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1yLTUwLCAubXgtNTAge1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubXItMjUsIC5teC0yNSB7XG4gIG1hcmdpbi1yaWdodDogLjI1cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHItNTAsIC5weC01MCB7XG4gIHBhZGRpbmctcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCAuZW1haWwtYXBwLWxpc3Qtd3JhcHBlciAuZW1haWwtYXBwLWxpc3QgLmVtYWlsLXVzZXItbGlzdCAudXNlcnMtbGlzdC13cmFwcGVyIGxpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNEU1RUMgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwIC5wc19fdGh1bWIteSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXJpZ2h0IC5lbWFpbC1hcHAtZGV0YWlscyAuZW1haWwtc2Nyb2xsLWFyZWEge1xuICAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmQtYmxvY2sge1xuIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiM2YjZmODIgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5lbWFpbC1kZXRhaWwtaGVhZCAuY29sbGFwc2UtaGVhZGVyIC5jYXJkLWhlYWRlciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnB5LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZhO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wcyB7XG4gIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LmFwcC1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLnRhZ0Ryb3Bkb3duIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTE4cHgsIC0xNnB4LCAwcHgpICFpbXBvcnRhbnQ7IFxuICB0b3A6IDhweDtcbiB9XG4gQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsgXG4gICAudGFnRHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05OHB4LCAtNjRweCwgMHB4KSAhaW1wb3J0YW50OyBcbiAgdG9wOiA4cHg7XG4gfVxufVxuOmhvc3QgOjpuZy1kZWVwICAubGlzdERyb3Bkb3duIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTIzcHgsIDMwcHgsIDBweCkgIWltcG9ydGFudDsgXG4gIH1cbiBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpeyBcbiAgIC5saXN0RHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04OHB4LCAtNjVweCwgMHB4KSAhaW1wb3J0YW50OyBcbiAgdG9wOiA4cHg7XG4gfVxufVxuOmhvc3QgOjpuZy1kZWVwICAudGFnbGlzdERyb3Bkb3duIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTIzcHgsIC04cHgsIDBweCkgIWltcG9ydGFudDsgXG4gIH1cbiBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpeyBcbiAgIC50YWdsaXN0RHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMjRweCwgLTY1cHgsIDBweCkgIWltcG9ydGFudDsgXG4gIHRvcDogOHB4O1xuIH1cbn1cbiA6aG9zdCA6Om5nLWRlZXAgIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDEwcHggMTdweCAhaW1wb3J0YW50O1xuIH1cbjpob3N0IDo6bmctZGVlcCAuYmctMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcblxufVxuOmhvc3QgOjpuZy1kZWVwIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogLjM1ZW0gLjRlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmFkZ2UtcGlsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IC42ZW07XG4gIHBhZGRpbmctbGVmdDogLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnNob3c+LmluYm94RHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMThweCwgMzBweCwgMHB4KSAhaW1wb3J0YW50O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgLnNob3c+LmluYm94RHJvcGRvd24ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTA2cHgsIC02NXB4LCAwcHgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwICAuYXBwLWNvbnRlbnQgLnNpZGViYXIgLmVtYWlsLWFwcC1zaWRlYmFyIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuOmhvc3QgOjpuZy1kZWVwICAuZW1haWx0b29sYmFyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBkaXNwbGF5OiBpbml0aWFsO1xuIH1cbiA6aG9zdCA6Om5nLWRlZXAgIC5hcHAtY29udGVudCAucXVpbGwtd3JhcHBlciAuc25vdy1jb250YWluZXIgLnNlbmQtYnRuIHtcbiAgaGVpZ2h0OiAzOHB4O1xuIH1cblxuIDpob3N0IDo6bmctZGVlcCAucWwtZWRpdG9yIHtcbiAgb3ZlcmZsb3cteTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gfVxuXG4gOmhvc3QgOjpuZy1kZWVwICAuZ3JhZGllbnQtbWludCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjMjhkMDk0LCMyOGQwOTQpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LXByaW1hcnl7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjNjY2ZWU4LCM2NjZlZTgpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2ZmOTE0OSwjZmY5MTQ5KSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuIH1cbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2ZmNDk2MSwjZmY0OTYxKSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuIH1cbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1pbmZvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMxZTlmZjIsIzFlOWZmMikhaW1wb3J0YW50O1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiB9XG4gOmhvc3QgOjpuZy1kZWVwICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1tZXNzYWdlcyA6aG92ZXIge1xuICBjb2xvcjogIzBjODRkMSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tci03NSwgLm14LTc1IHtcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW0haW1wb3J0YW50O1xufVxuLmxpc3QtaW5saW5lLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMC43cmVtICFpbXBvcnRhbnQ7IFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAubGlzdC1pbmxpbmUtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDsgXG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hcHBsaWNhdGlvbnMvZW1haWwvZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0U7SUFDRSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0VBQ3hCO0FBQ0Y7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7R0FDRyw2QkFBNkI7QUFDaEM7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2QjtBQUNBO0dBQ0csd0NBQXdDO0FBQzNDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxRQUFRO0NBQ1Q7Q0FDQTtHQUNFO0VBQ0Qsb0RBQW9EO0VBQ3BELFFBQVE7Q0FDVDtBQUNEO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQ7Q0FDRDtHQUNFO0VBQ0Qsb0RBQW9EO0VBQ3BELFFBQVE7Q0FDVDtBQUNEO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQ7Q0FDRDtHQUNFO0VBQ0QscURBQXFEO0VBQ3JELFFBQVE7Q0FDVDtBQUNEO0NBQ0M7RUFDQyw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLDhIQUE4SDtBQUNoSTtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLG9EQUFvRDtFQUNwRDtFQUNBO0lBQ0U7TUFDRSxxREFBcUQ7TUFDckQ7RUFDSjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsWUFBWTtDQUNiOztDQUVBO0VBQ0MsOEJBQThCO0VBQzlCLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0lBQ0UsZ0NBQWdDO0VBQ2xDO0FBQ0Y7O0FBRUEsZzFQQUFnMVAiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1yLTUwLCAubXgtNTAge1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubXItMjUsIC5teC0yNSB7XG4gIG1hcmdpbi1yaWdodDogLjI1cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHItNTAsIC5weC01MCB7XG4gIHBhZGRpbmctcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY29udGVudC1yaWdodCAuZW1haWwtYXBwLWxpc3Qtd3JhcHBlciAuZW1haWwtYXBwLWxpc3QgLmVtYWlsLXVzZXItbGlzdCAudXNlcnMtbGlzdC13cmFwcGVyIGxpIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNEU1RUMgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAuYXBwLWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwcHgpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwIC5wc19fdGh1bWIteSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXJpZ2h0IC5lbWFpbC1hcHAtZGV0YWlscyAuZW1haWwtc2Nyb2xsLWFyZWEge1xuICAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmQtYmxvY2sge1xuIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiM2YjZmODIgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5lbWFpbC1kZXRhaWwtaGVhZCAuY29sbGFwc2UtaGVhZGVyIC5jYXJkLWhlYWRlciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnB5LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWZhO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5wcyB7XG4gIG92ZXJmbG93OiBoaWRkZW4haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LmFwcC1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAgLnRhZ0Ryb3Bkb3duIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTE4cHgsIC0xNnB4LCAwcHgpICFpbXBvcnRhbnQ7IFxuICB0b3A6IDhweDtcbiB9XG4gQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsgXG4gICAudGFnRHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05OHB4LCAtNjRweCwgMHB4KSAhaW1wb3J0YW50OyBcbiAgdG9wOiA4cHg7XG4gfVxufVxuOmhvc3QgOjpuZy1kZWVwICAubGlzdERyb3Bkb3duIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTIzcHgsIDMwcHgsIDBweCkgIWltcG9ydGFudDsgXG4gIH1cbiBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpeyBcbiAgIC5saXN0RHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC04OHB4LCAtNjVweCwgMHB4KSAhaW1wb3J0YW50OyBcbiAgdG9wOiA4cHg7XG4gfVxufVxuOmhvc3QgOjpuZy1kZWVwICAudGFnbGlzdERyb3Bkb3duIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTIzcHgsIC04cHgsIDBweCkgIWltcG9ydGFudDsgXG4gIH1cbiBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpeyBcbiAgIC50YWdsaXN0RHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMjRweCwgLTY1cHgsIDBweCkgIWltcG9ydGFudDsgXG4gIHRvcDogOHB4O1xuIH1cbn1cbiA6aG9zdCA6Om5nLWRlZXAgIC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDEwcHggMTdweCAhaW1wb3J0YW50O1xuIH1cbjpob3N0IDo6bmctZGVlcCAuYmctMXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlODtcblxufVxuOmhvc3QgOjpuZy1kZWVwIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogLjM1ZW0gLjRlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmFkZ2UtcGlsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IC42ZW07XG4gIHBhZGRpbmctbGVmdDogLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnNob3c+LmluYm94RHJvcGRvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMThweCwgMzBweCwgMHB4KSAhaW1wb3J0YW50O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgLnNob3c+LmluYm94RHJvcGRvd24ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTA2cHgsIC02NXB4LCAwcHgpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwICAuYXBwLWNvbnRlbnQgLnNpZGViYXIgLmVtYWlsLWFwcC1zaWRlYmFyIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxuOmhvc3QgOjpuZy1kZWVwICAuZW1haWx0b29sYmFyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBkaXNwbGF5OiBpbml0aWFsO1xuIH1cbiA6aG9zdCA6Om5nLWRlZXAgIC5hcHAtY29udGVudCAucXVpbGwtd3JhcHBlciAuc25vdy1jb250YWluZXIgLnNlbmQtYnRuIHtcbiAgaGVpZ2h0OiAzOHB4O1xuIH1cblxuIDpob3N0IDo6bmctZGVlcCAucWwtZWRpdG9yIHtcbiAgb3ZlcmZsb3cteTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gfVxuXG4gOmhvc3QgOjpuZy1kZWVwICAuZ3JhZGllbnQtbWludCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjMjhkMDk0LCMyOGQwOTQpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LXByaW1hcnl7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjNjY2ZWU4LCM2NjZlZTgpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2ZmOTE0OSwjZmY5MTQ5KSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuIH1cbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2ZmNDk2MSwjZmY0OTYxKSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuIH1cbiA6aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1pbmZvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMxZTlmZjIsIzFlOWZmMikhaW1wb3J0YW50O1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiB9XG4gOmhvc3QgOjpuZy1kZWVwICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1tZXNzYWdlcyA6aG92ZXIge1xuICBjb2xvcjogIzBjODRkMSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tci03NSwgLm14LTc1IHtcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW0haW1wb3J0YW50O1xufVxuLmxpc3QtaW5saW5lLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMC43cmVtICFpbXBvcnRhbnQ7IFxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xuICAubGlzdC1pbmxpbmUtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDsgXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 900:
/*!************************************************************!*\
  !*** ./src/app/content/applications/email/email.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailModule": () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component */ 34332);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-archwizard */ 38537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);













class EmailModule {}
EmailModule.ɵfac = function EmailModule_Factory(t) {
  return new (t || EmailModule)();
};
EmailModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: EmailModule
});
EmailModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule.forRoot(), ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__.CustomFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_9__.ArchwizardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild([{
    path: '',
    component: _email_component__WEBPACK_IMPORTED_MODULE_0__.EmailComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmailModule, {
    declarations: [_email_component__WEBPACK_IMPORTED_MODULE_0__.EmailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, ngx_quill__WEBPACK_IMPORTED_MODULE_6__.QuillModule, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__.CustomFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_9__.ArchwizardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 71989:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 41944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 93945);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_content_applications_email_email_module_ts.js.map