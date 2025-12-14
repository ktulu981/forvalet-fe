"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_pages_dropzone_dropzone_module_ts"],{

/***/ 33453:
/*!**************************************************************!*\
  !*** ./src/app/content/pages/dropzone/dropzone.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropzoneComponent": () => (/* binding */ DropzoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-dropzone */ 92522);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/general/card/card.component */ 15733);








function DropzoneComponent_section_5_ngx_dropzone_preview_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-dropzone-preview", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function DropzoneComponent_section_5_ngx_dropzone_preview_18_Template_ngx_dropzone_preview_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const f_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.SinglefileonRemove(f_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r7.name, " (", f_r7.type, ")");
  }
}
function DropzoneComponent_section_5_ngx_dropzone_preview_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-dropzone-preview", 25)(1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r10.name, " (", f_r10.type, ")");
  }
}
function DropzoneComponent_section_5_ngx_dropzone_image_preview_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function DropzoneComponent_section_5_ngx_dropzone_image_preview_36_Template_ngx_dropzone_image_preview_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const f_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.SinglefileonRemove(f_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-dropzone-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("file", f_r11)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r11.name, " (", f_r11.type, ")");
  }
}
function DropzoneComponent_section_5_ngx_dropzone_preview_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-dropzone-preview", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function DropzoneComponent_section_5_ngx_dropzone_preview_50_Template_ngx_dropzone_preview_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const f_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.MultiplefilesonRemove(f_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r14.name, " (", f_r14.type, ")");
  }
}
function DropzoneComponent_section_5_ngx_dropzone_preview_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-dropzone-preview", 25)(1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r17.name, " (", f_r17.type, ")");
  }
}
function DropzoneComponent_section_5_ngx_dropzone_image_preview_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function DropzoneComponent_section_5_ngx_dropzone_image_preview_68_Template_ngx_dropzone_image_preview_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const f_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.MultiplefilesonRemove(f_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-dropzone-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("file", f_r18)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", f_r18.name, " (", f_r18.type, ")");
  }
}
function DropzoneComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 6)(1, "div", 7)(2, "div", 8)(3, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function DropzoneComponent_section_5_Template_m_card_reloadFunction_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.reloadDorpzone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Single File Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "This example uploads a single file using ngx-dropzone. User can either click on the dropzone area and select single files or just drop all selected files in the dropzone area. This example is the most basic setup for dropzone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 13)(10, "div", 14)(11, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "The default dropzone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ngx-dropzone", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DropzoneComponent_section_5_Template_ngx_dropzone_change_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.SelectSingleFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ngx-dropzone-label")(15, "div", 17)(16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Drop files here to upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DropzoneComponent_section_5_ngx_dropzone_preview_18_Template, 3, 3, "ngx-dropzone-preview", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14)(20, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "The disabled but expanding dropzone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ngx-dropzone", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DropzoneComponent_section_5_Template_ngx_dropzone_change_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.SelectSingleFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ngx-dropzone-label")(24, "div", 17)(25, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Drop files here to upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, DropzoneComponent_section_5_ngx_dropzone_preview_27_Template, 3, 2, "ngx-dropzone-preview", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14)(29, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "A custom dropzone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DropzoneComponent_section_5_Template_div_change_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.SelectSingleFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ngx-dropzone-label")(33, "div", 17)(34, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "My custome dropzone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, DropzoneComponent_section_5_ngx_dropzone_image_preview_36_Template, 3, 4, "ngx-dropzone-image-preview", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 7)(38, "div", 8)(39, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function DropzoneComponent_section_5_Template_m_card_reloadFunction_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.reloadDorpzone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](40, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Multiple File Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](42, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "This example uploads a multiple files using ngx-dropzone. By default, dropzone is a multiple file uploader. User can either click on the dropzone area and select multiple files or just drop all selected files in the dropzone area. This example is the most basic setup for dropzone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ngx-dropzone", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DropzoneComponent_section_5_Template_ngx_dropzone_change_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.SelectMultipleFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ngx-dropzone-label")(47, "div", 17)(48, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Drop files here to upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, DropzoneComponent_section_5_ngx_dropzone_preview_50_Template, 3, 3, "ngx-dropzone-preview", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14)(52, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "The disabled but expanding dropzone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "ngx-dropzone", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DropzoneComponent_section_5_Template_ngx_dropzone_change_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.SelectMultipleFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "ngx-dropzone-label")(56, "div", 17)(57, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Drop files here to upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, DropzoneComponent_section_5_ngx_dropzone_preview_59_Template, 3, 2, "ngx-dropzone-preview", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 14)(61, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "A custom dropzone.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DropzoneComponent_section_5_Template_div_change_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.SelectMultipleFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "ngx-dropzone-label")(65, "div", 17)(66, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "My custome dropzone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, DropzoneComponent_section_5_ngx_dropzone_image_preview_68_Template, 3, 4, "ngx-dropzone-image-preview", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true)("expandable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("accept", "image/*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true)("expandable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.files);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("accept", "image/*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.files);
  }
}
class DropzoneComponent {
  constructor() {
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.files = [];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Dropzone',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Page',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Dropzone',
        'isLink': false
      }]
    };
  }
  SelectMultipleFile(event) {
    this.files.push(...event.addedFiles);
  }
  SelectSingleFile(event) {
    this.file = event.addedFiles;
  }
  MultiplefilesonRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  SinglefileonRemove(event) {
    this.file.splice(this.files.indexOf(event), 1);
  }
  reloadDorpzone() {
    this.blockUIDropzone.start('Loading..');
    setTimeout(() => {
      this.blockUIDropzone.stop();
    }, 2500);
  }
}
DropzoneComponent.ɵfac = function DropzoneComponent_Factory(t) {
  return new (t || DropzoneComponent)();
};
DropzoneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DropzoneComponent,
  selectors: [["app-dropzone"]],
  decls: 6,
  vars: 3,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "dropzone-examples", 4, "blockUI", "blockUIMessage"], ["id", "dropzone-examples"], [1, "row"], [1, "col-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-text"], [1, "card-content", "collapse", "show"], [1, "card-header"], [1, "card-title"], [1, "_dropzone", 3, "change"], [1, "dz-default", "dz-message"], [1, "dz-default"], ["class", "dropzone", 3, "removable", "removed", 4, "ngFor", "ngForOf"], [1, "_dropzone", 3, "disabled", "expandable", "change"], ["class", "dropzone", 4, "ngFor", "ngForOf"], ["ngx-dropzone", "", 1, "custom-dropzone", 3, "accept", "change"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "dropzone", 3, "removable", "removed"], [1, "dropzone"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], [1, "dropzone1"]],
  template: function DropzoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DropzoneComponent_section_5_Template, 69, 14, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "dropzoneGallery")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzoneLabelDirective, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzonePreviewComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_4__.NgxDropzoneImagePreviewComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"], _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent],
  styles: ["*[_ngcontent-%COMP%] {\n    font-family: Lato;\n  }\n  \n  ngx-dropzone[_ngcontent-%COMP%], .custom-dropzone[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  \n [_nghost-%COMP%]     .dropzone {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n}\n[_nghost-%COMP%]     .dropzone1 {\n   position: unset !important; \n  overflow-wrap: break-word;\n}\n[_nghost-%COMP%]     .dz-default  { \n  font-size: 2rem;\n  color: #666ee8 !important;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     ._dropzone{\n  border: 2px dashed #666ee8;\n}\n[_nghost-%COMP%]     .custom-dropzone {\n  height: 250px;\n  background: #333;\n  color: #fff;\n  border: 5px dashed  #666ee8 !important; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3B6b25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsWUFBWTtFQUNkOztDQUVEO0lBQ0csc0NBQWlDO0lBQWpDLGlDQUFpQztBQUNyQztBQUNBO0dBQ0csMEJBQTBCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNDQUFzQztBQUN4QyIsImZpbGUiOiJkcm9wem9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gIH1cbiAgXG4gIG5neC1kcm9wem9uZSxcbiAgLmN1c3RvbS1kcm9wem9uZSB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIFxuIDpob3N0IDo6bmctZGVlcCAuZHJvcHpvbmUge1xuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZHJvcHpvbmUxIHtcbiAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50OyBcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZHotZGVmYXVsdCAgeyBcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzY2NmVlOCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuX2Ryb3B6b25le1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzY2NmVlODtcbn1cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRyb3B6b25lIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogNXB4IGRhc2hlZCAgIzY2NmVlOCAhaW1wb3J0YW50OyBcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9kcm9wem9uZS9kcm9wem9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLFlBQVk7RUFDZDs7Q0FFRDtJQUNHLHNDQUFpQztJQUFqQyxpQ0FBaUM7QUFDckM7QUFDQTtHQUNHLDBCQUEwQjtFQUMzQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQ0FBc0M7QUFDeEM7QUFFQSxnekNBQWd6QyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB9XG4gIFxuICBuZ3gtZHJvcHpvbmUsXG4gIC5jdXN0b20tZHJvcHpvbmUge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICBcbiA6aG9zdCA6Om5nLWRlZXAgLmRyb3B6b25lIHtcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRyb3B6b25lMSB7XG4gICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDsgXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmR6LWRlZmF1bHQgIHsgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICM2NjZlZTggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLl9kcm9wem9uZXtcbiAgYm9yZGVyOiAycHggZGFzaGVkICM2NjZlZTg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kcm9wem9uZSB7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDVweCBkYXNoZWQgICM2NjZlZTggIWltcG9ydGFudDsgXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('dropzoneGallery')], DropzoneComponent.prototype, "blockUIDropzone", void 0);

/***/ }),

/***/ 65352:
/*!***********************************************************!*\
  !*** ./src/app/content/pages/dropzone/dropzone.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropzoneModule": () => (/* binding */ DropzoneModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dropzone_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropzone.component */ 33453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dropzone */ 92522);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);









class DropzoneModule {}
DropzoneModule.ɵfac = function DropzoneModule_Factory(t) {
  return new (t || DropzoneModule)();
};
DropzoneModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: DropzoneModule
});
DropzoneModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUIModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__.CardModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
    path: 'dropzone',
    component: _dropzone_component__WEBPACK_IMPORTED_MODULE_0__.DropzoneComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DropzoneModule, {
    declarations: [_dropzone_component__WEBPACK_IMPORTED_MODULE_0__.DropzoneComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUIModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_2__.CardModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 92522:
/*!*************************************************************!*\
  !*** ./node_modules/ngx-dropzone/fesm2020/ngx-dropzone.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDropzoneComponent": () => (/* binding */ NgxDropzoneComponent),
/* harmony export */   "NgxDropzoneImagePreviewComponent": () => (/* binding */ NgxDropzoneImagePreviewComponent),
/* harmony export */   "NgxDropzoneLabelDirective": () => (/* binding */ NgxDropzoneLabelDirective),
/* harmony export */   "NgxDropzoneModule": () => (/* binding */ NgxDropzoneModule),
/* harmony export */   "NgxDropzonePreviewComponent": () => (/* binding */ NgxDropzonePreviewComponent),
/* harmony export */   "NgxDropzoneRemoveBadgeComponent": () => (/* binding */ NgxDropzoneRemoveBadgeComponent),
/* harmony export */   "NgxDropzoneVideoPreviewComponent": () => (/* binding */ NgxDropzoneVideoPreviewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_kutlu_Desktop_kutlu_works_oldforvalet_Forvalet_Forvalet_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 34497);






function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1._remove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = [[["ngx-dropzone-label"]]];
const _c1 = ["ngx-dropzone-label"];
const _c2 = ["fileInput"];
function NgxDropzoneComponent_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 2, ["*ngIf", "!_hasPreviews"]);
  }
}
const _c3 = [[["ngx-dropzone-preview"]], "*", [["ngx-dropzone-label"]]];
const _c4 = ["ngx-dropzone-preview", "*", "ngx-dropzone-label"];
function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1._remove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NgxDropzoneVideoPreviewComponent_video_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "video", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_video_0_Template_video_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "source", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.sanitizedVideoSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-dropzone-remove-badge", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template_ngx_dropzone_remove_badge_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3._remove($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class NgxDropzoneLabelDirective {}
NgxDropzoneLabelDirective.ɵfac = function NgxDropzoneLabelDirective_Factory(t) {
  return new (t || NgxDropzoneLabelDirective)();
};
NgxDropzoneLabelDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: NgxDropzoneLabelDirective,
  selectors: [["ngx-dropzone-label"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'ngx-dropzone-label'
    }]
  }], null, null);
})();

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/boolean-property.ts
 */
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== 'false';
}
/**
 * Whether the provided value is considered a number.
 * Taken from https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */
function coerceNumberProperty(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value)) ? Number(value) : null;
}
class NgxDropzoneRemoveBadgeComponent {}
NgxDropzoneRemoveBadgeComponent.ɵfac = function NgxDropzoneRemoveBadgeComponent_Factory(t) {
  return new (t || NgxDropzoneRemoveBadgeComponent)();
};
NgxDropzoneRemoveBadgeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneRemoveBadgeComponent,
  selectors: [["ngx-dropzone-remove-badge"]],
  decls: 3,
  vars: 0,
  consts: [["x1", "0", "y1", "0", "x2", "10", "y2", "10"], ["x1", "0", "y1", "10", "x2", "10", "y2", "0"]],
  template: function NgxDropzoneRemoveBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "line", 0)(2, "line", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  styles: ["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}[_nghost-%COMP%]:hover{background:#aeaeae}[_nghost-%COMP%] > svg[_ngcontent-%COMP%]{height:10px;width:10px}[_nghost-%COMP%] > svg[_ngcontent-%COMP%] > line[_ngcontent-%COMP%]{stroke-width:2px;stroke:#fff}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneRemoveBadgeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-remove-badge',
      template: `
    <svg>
      <line x1="0" y1="0" x2="10" y2="10" />
      <line x1="0" y1="10" x2="10" y2="0" />
    </svg>
  `,
      styles: [":host{display:flex;justify-content:center;align-items:center;height:22px;width:22px;position:absolute;top:5px;right:5px;border-radius:50%;background:#bbb;color:#333;cursor:pointer}:host:hover{background:#aeaeae}:host>svg{height:10px;width:10px}:host>svg>line{stroke-width:2px;stroke:#fff}\n"]
    }]
  }], null, null);
})();
var KEY_CODE;
(function (KEY_CODE) {
  KEY_CODE[KEY_CODE["BACKSPACE"] = 8] = "BACKSPACE";
  KEY_CODE[KEY_CODE["DELETE"] = 46] = "DELETE";
})(KEY_CODE || (KEY_CODE = {}));
class NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this._removable = false;
    /** Emitted when the element should be removed. */
    this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Make the preview item focusable using the tab key. */
    this.tabIndex = 0;
  }
  /** The file to preview. */
  set file(value) {
    this._file = value;
  }
  get file() {
    return this._file;
  }
  /** Allow the user to remove files. */
  get removable() {
    return this._removable;
  }
  set removable(value) {
    this._removable = coerceBooleanProperty(value);
  }
  keyEvent(event) {
    switch (event.keyCode) {
      case KEY_CODE.BACKSPACE:
      case KEY_CODE.DELETE:
        this.remove();
        break;
      default:
        break;
    }
  }
  /** We use the HostBinding to pass these common styles to child components. */
  get hostStyle() {
    const styles = `
			display: flex;
			height: 140px;
			min-height: 140px;
			min-width: 180px;
			max-width: 180px;
			justify-content: center;
			align-items: center;
			padding: 0 20px;
			margin: 10px;
			border-radius: 5px;
			position: relative;
		`;
    return this.sanitizer.bypassSecurityTrustStyle(styles);
  }
  /** Remove method to be used from the template. */
  _remove(event) {
    event.stopPropagation();
    this.remove();
  }
  /** Remove the preview item (use from component code). */
  remove() {
    if (this._removable) {
      this.removed.next(this.file);
    }
  }
  readFile() {
    var _this = this;
    return (0,C_Users_kutlu_Desktop_kutlu_works_oldforvalet_Forvalet_Forvalet_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
          resolve(e.target.result);
        };
        reader.onerror = e => {
          console.error(`FileReader failed on file ${_this.file.name}.`);
          reject(e);
        };
        if (!_this.file) {
          return reject('No file to read. Please provide a file using the [file] Input property.');
        }
        reader.readAsDataURL(_this.file);
      });
    })();
  }
}
NgxDropzonePreviewComponent.ɵfac = function NgxDropzonePreviewComponent_Factory(t) {
  return new (t || NgxDropzonePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
NgxDropzonePreviewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzonePreviewComponent,
  selectors: [["ngx-dropzone-preview"]],
  hostVars: 3,
  hostBindings: function NgxDropzonePreviewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function NgxDropzonePreviewComponent_keyup_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabindex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.hostStyle);
    }
  },
  inputs: {
    file: "file",
    removable: "removable"
  },
  outputs: {
    removed: "removed"
  },
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "click", 4, "ngIf"], [3, "click"]],
  template: function NgxDropzonePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxDropzonePreviewComponent_ngx_dropzone_remove_badge_1_Template, 1, 0, "ngx-dropzone-remove-badge", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}[_nghost-%COMP%]:hover, [_nghost-%COMP%]:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]     ngx-dropzone-label{overflow-wrap:break-word}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzonePreviewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-preview',
      template: `
		<ng-content select="ngx-dropzone-label"></ng-content>
		<ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
		</ngx-dropzone-remove-badge>
	`,
      styles: [":host{background-image:linear-gradient(to top,#ededed,#efefef,#f1f1f1,#f4f4f4,#f6f6f6)}:host:hover,:host:focus{background-image:linear-gradient(to top,#e3e3e3,#ebeaea,#e8e7e7,#ebeaea,#f4f4f4);outline:0}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host ::ng-deep ngx-dropzone-label{overflow-wrap:break-word}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer
    }];
  }, {
    file: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    removable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    removed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    keyEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['keyup', ['$event']]
    }],
    hostStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['style']
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['tabindex']
    }]
  });
})();

/**
 * This service contains the filtering logic to be applied to
 * any dropped or selected file. If a file matches all criteria
 * like maximum size or accept type, it will be emitted in the
 * addedFiles array, otherwise in the rejectedFiles array.
 */
class NgxDropzoneService {
  parseFileList(files, accept, maxFileSize, multiple) {
    const addedFiles = [];
    const rejectedFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (!this.isAccepted(file, accept)) {
        this.rejectFile(rejectedFiles, file, 'type');
        continue;
      }
      if (maxFileSize && file.size > maxFileSize) {
        this.rejectFile(rejectedFiles, file, 'size');
        continue;
      }
      if (!multiple && addedFiles.length >= 1) {
        this.rejectFile(rejectedFiles, file, 'no_multiple');
        continue;
      }
      addedFiles.push(file);
    }
    const result = {
      addedFiles,
      rejectedFiles
    };
    return result;
  }
  isAccepted(file, accept) {
    if (accept === '*') {
      return true;
    }
    const acceptFiletypes = accept.split(',').map(it => it.toLowerCase().trim());
    const filetype = file.type.toLowerCase();
    const filename = file.name.toLowerCase();
    const matchedFileType = acceptFiletypes.find(acceptFiletype => {
      // check for wildcard mimetype (e.g. image/*)
      if (acceptFiletype.endsWith('/*')) {
        return filetype.split('/')[0] === acceptFiletype.split('/')[0];
      }
      // check for file extension (e.g. .csv)
      if (acceptFiletype.startsWith(".")) {
        return filename.endsWith(acceptFiletype);
      }
      // check for exact mimetype match (e.g. image/jpeg)
      return acceptFiletype == filetype;
    });
    return !!matchedFileType;
  }
  rejectFile(rejectedFiles, file, reason) {
    const rejectedFile = file;
    rejectedFile.reason = reason;
    rejectedFiles.push(rejectedFile);
  }
}
NgxDropzoneService.ɵfac = function NgxDropzoneService_Factory(t) {
  return new (t || NgxDropzoneService)();
};
NgxDropzoneService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NgxDropzoneService,
  factory: NgxDropzoneService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class NgxDropzoneComponent {
  constructor(service) {
    this.service = service;
    /** Emitted when any files were added or rejected. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Set the accepted file types. Defaults to '*'. */
    this.accept = '*';
    this._disabled = false;
    this._multiple = true;
    this._maxFileSize = undefined;
    this._expandable = false;
    this._disableClick = false;
    this._processDirectoryDrop = false;
    this._isHovered = false;
  }
  get _hasPreviews() {
    return !!this._previewChildren.length;
  }
  /** Disable any user interaction with the component. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
    if (this._isHovered) {
      this._isHovered = false;
    }
  }
  /** Allow the selection of multiple files. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = coerceBooleanProperty(value);
  }
  /** Set the maximum size a single file may have. */
  get maxFileSize() {
    return this._maxFileSize;
  }
  set maxFileSize(value) {
    this._maxFileSize = coerceNumberProperty(value);
  }
  /** Allow the dropzone container to expand vertically. */
  get expandable() {
    return this._expandable;
  }
  set expandable(value) {
    this._expandable = coerceBooleanProperty(value);
  }
  /** Open the file selector on click. */
  get disableClick() {
    return this._disableClick;
  }
  set disableClick(value) {
    this._disableClick = coerceBooleanProperty(value);
  }
  /** Allow dropping directories. */
  get processDirectoryDrop() {
    return this._processDirectoryDrop;
  }
  set processDirectoryDrop(value) {
    this._processDirectoryDrop = coerceBooleanProperty(value);
  }
  /** Show the native OS file explorer to select files. */
  _onClick() {
    if (!this.disableClick) {
      this.showFileSelector();
    }
  }
  _onDragOver(event) {
    if (this.disabled) {
      return;
    }
    this.preventDefault(event);
    this._isHovered = true;
  }
  _onDragLeave() {
    this._isHovered = false;
  }
  _onDrop(event) {
    if (this.disabled) {
      return;
    }
    this.preventDefault(event);
    this._isHovered = false;
    // if processDirectoryDrop is not enabled or webkitGetAsEntry is not supported we handle the drop as usual
    if (!this.processDirectoryDrop || !DataTransferItem.prototype.webkitGetAsEntry) {
      this.handleFileDrop(event.dataTransfer.files);
      // if processDirectoryDrop is enabled and webkitGetAsEntry is supported we can extract files from a dropped directory
    } else {
      const droppedItems = event.dataTransfer.items;
      if (droppedItems.length > 0) {
        const droppedFiles = [];
        const droppedDirectories = [];
        // seperate dropped files from dropped directories for easier handling
        for (let i = 0; i < droppedItems.length; i++) {
          const entry = droppedItems[i].webkitGetAsEntry();
          if (entry.isFile) {
            droppedFiles.push(event.dataTransfer.files[i]);
          } else if (entry.isDirectory) {
            droppedDirectories.push(entry);
          }
        }
        // create a DataTransfer
        const droppedFilesList = new DataTransfer();
        droppedFiles.forEach(droppedFile => {
          droppedFilesList.items.add(droppedFile);
        });
        // if no directory is dropped we are done and can call handleFileDrop
        if (!droppedDirectories.length && droppedFilesList.items.length) {
          this.handleFileDrop(droppedFilesList.files);
        }
        // if directories are dropped we extract the files from these directories one-by-one and add it to droppedFilesList
        if (droppedDirectories.length) {
          const extractFilesFromDirectoryCalls = [];
          for (const droppedDirectory of droppedDirectories) {
            extractFilesFromDirectoryCalls.push(this.extractFilesFromDirectory(droppedDirectory));
          }
          // wait for all directories to be proccessed to add the extracted files afterwards
          Promise.all(extractFilesFromDirectoryCalls).then(allExtractedFiles => {
            allExtractedFiles.reduce((a, b) => [...a, ...b]).forEach(extractedFile => {
              droppedFilesList.items.add(extractedFile);
            });
            this.handleFileDrop(droppedFilesList.files);
          });
        }
      }
    }
  }
  extractFilesFromDirectory(directory) {
    function getFileFromFileEntry(_x) {
      return _getFileFromFileEntry.apply(this, arguments);
    }
    function _getFileFromFileEntry() {
      _getFileFromFileEntry = (0,C_Users_kutlu_Desktop_kutlu_works_oldforvalet_Forvalet_Forvalet_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fileEntry) {
        try {
          return yield new Promise((resolve, reject) => fileEntry.file(resolve, reject));
        } catch (err) {
          console.log('Error converting a fileEntry to a File: ', err);
        }
      });
      return _getFileFromFileEntry.apply(this, arguments);
    }
    return new Promise((resolve, reject) => {
      const files = [];
      const dirReader = directory.createReader();
      // we need this to be a recursion because of this issue: https://bugs.chromium.org/p/chromium/issues/detail?id=514087
      const readEntries = () => {
        dirReader.readEntries( /*#__PURE__*/function () {
          var _ref = (0,C_Users_kutlu_Desktop_kutlu_works_oldforvalet_Forvalet_Forvalet_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dirItems) {
            if (!dirItems.length) {
              resolve(files);
            } else {
              const fileEntries = dirItems.filter(dirItem => dirItem.isFile);
              for (const fileEntry of fileEntries) {
                const file = yield getFileFromFileEntry(fileEntry);
                files.push(file);
              }
              readEntries();
            }
          });
          return function (_x2) {
            return _ref.apply(this, arguments);
          };
        }());
      };
      readEntries();
    });
  }
  showFileSelector() {
    if (!this.disabled) {
      this._fileInput.nativeElement.click();
    }
  }
  _onFilesSelected(event) {
    const files = event.target.files;
    this.handleFileDrop(files);
    // Reset the native file input element to allow selecting the same file again
    this._fileInput.nativeElement.value = '';
    // fix(#32): Prevent the default event behaviour which caused the change event to emit twice.
    this.preventDefault(event);
  }
  handleFileDrop(files) {
    const result = this.service.parseFileList(files, this.accept, this.maxFileSize, this.multiple);
    this.change.next({
      addedFiles: result.addedFiles,
      rejectedFiles: result.rejectedFiles,
      source: this
    });
  }
  preventDefault(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
NgxDropzoneComponent.ɵfac = function NgxDropzoneComponent_Factory(t) {
  return new (t || NgxDropzoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxDropzoneService, 2));
};
NgxDropzoneComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneComponent,
  selectors: [["ngx-dropzone"], ["", "ngx-dropzone", ""]],
  contentQueries: function NgxDropzoneComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NgxDropzonePreviewComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._previewChildren = _t);
    }
  },
  viewQuery: function NgxDropzoneComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._fileInput = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function NgxDropzoneComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxDropzoneComponent_click_HostBindingHandler() {
        return ctx._onClick();
      })("dragover", function NgxDropzoneComponent_dragover_HostBindingHandler($event) {
        return ctx._onDragOver($event);
      })("dragleave", function NgxDropzoneComponent_dragleave_HostBindingHandler() {
        return ctx._onDragLeave();
      })("drop", function NgxDropzoneComponent_drop_HostBindingHandler($event) {
        return ctx._onDrop($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ngx-dz-disabled", ctx.disabled)("expandable", ctx.expandable)("unclickable", ctx.disableClick)("ngx-dz-hovered", ctx._isHovered);
    }
  },
  inputs: {
    accept: "accept",
    disabled: "disabled",
    multiple: "multiple",
    maxFileSize: "maxFileSize",
    expandable: "expandable",
    disableClick: "disableClick",
    processDirectoryDrop: "processDirectoryDrop",
    id: "id",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedBy: ["aria-describedby", "ariaDescribedBy"]
  },
  outputs: {
    change: "change"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NgxDropzoneService])],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 8,
  consts: [["type", "file", 3, "id", "multiple", "accept", "disabled", "change"], ["fileInput", ""], [4, "ngIf"]],
  template: function NgxDropzoneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function NgxDropzoneComponent_Template_input_change_0_listener($event) {
        return ctx._onFilesSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxDropzoneComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4, 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id)("multiple", ctx.multiple)("accept", ctx.accept)("disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._hasPreviews);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}.ngx-dz-hovered[_nghost-%COMP%]{border-style:solid}.ngx-dz-disabled[_nghost-%COMP%]{opacity:.5;cursor:no-drop;pointer-events:none}.expandable[_nghost-%COMP%]{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}.unclickable[_nghost-%COMP%]{cursor:default}[_nghost-%COMP%]     ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}[_nghost-%COMP%]   input[_ngcontent-%COMP%]{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus +   ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone, [ngx-dropzone]',
      providers: [NgxDropzoneService],
      template: "<input #fileInput type=\"file\" [id]=\"id\" [multiple]=\"multiple\" [accept]=\"accept\" [disabled]=\"disabled\"\n  (change)=\"_onFilesSelected($event)\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\"\n  [attr.aria-describedby]=\"ariaDescribedBy\">\n<ng-content select=\"ngx-dropzone-label\" *ngIf=\"!_hasPreviews\"></ng-content>\n<ng-content select=\"ngx-dropzone-preview\"></ng-content>\n<ng-content></ng-content>\n",
      styles: [":host{display:flex;align-items:center;height:180px;background:#fff;cursor:pointer;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px;overflow-x:auto}:host.ngx-dz-hovered{border-style:solid}:host.ngx-dz-disabled{opacity:.5;cursor:no-drop;pointer-events:none}:host.expandable{overflow:hidden;height:unset;min-height:180px;flex-wrap:wrap}:host.unclickable{cursor:default}:host ::ng-deep ngx-dropzone-label{text-align:center;z-index:10;margin:10px auto}:host input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}:host input:focus+::ng-deep ngx-dropzone-label{outline:1px dotted #000;outline:-webkit-focus-ring-color auto 5px}\n"]
    }]
  }], function () {
    return [{
      type: NgxDropzoneService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Self
      }]
    }];
  }, {
    _previewChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [NgxDropzonePreviewComponent, {
        descendants: true
      }]
    }],
    _fileInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fileInput', {
        static: true
      }]
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    accept: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.ngx-dz-disabled']
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    maxFileSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    expandable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.expandable']
    }],
    disableClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.unclickable']
    }],
    processDirectoryDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['aria-describedby']
    }],
    _isHovered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
      args: ['class.ngx-dz-hovered']
    }],
    _onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click']
    }],
    _onDragOver: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['dragover', ['$event']]
    }],
    _onDragLeave: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['dragleave']
    }],
    _onDrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['drop', ['$event']]
    }]
  });
})();
class NgxDropzoneImagePreviewComponent extends NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    super(sanitizer);
    /** The image data source. */
    this.defaultImgLoading = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2IoMjQxLCAyNDIsIDI0Mykgbm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIyNHB4IiBoZWlnaHQ9IjIyNHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxNCIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiM4NWEyYjYiIHN0cm9rZS1kYXNoYXJyYXk9IjIxLjk5MTE0ODU3NTEyODU1MiAyMS45OTExNDg1NzUxMjg1NTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGR1cj0iMS4xNjI3OTA2OTc2NzQ0MTg0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzEiIHZhbHVlcz0iMCA1MCA1MDszNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iI2JiY2VkZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTUuNzA3OTYzMjY3OTQ4OTY2IDE1LjcwNzk2MzI2Nzk0ODk2NiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjE1LjcwNzk2MzI2Nzk0ODk2NiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZHVyPSIxLjE2Mjc5MDY5NzY3NDQxODRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MSIgdmFsdWVzPSIwIDUwIDUwOy0zNjAgNTAgNTAiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KPC9jaXJjbGU+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==';
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(this.defaultImgLoading);
  }
  /** The file to preview. */
  set file(value) {
    this._file = value;
    this.renderImage();
  }
  get file() {
    return this._file;
  }
  ngOnInit() {
    this.renderImage();
  }
  renderImage() {
    this.readFile().then(img => setTimeout(() => this.imageSrc = img)).catch(err => console.error(err));
  }
}
NgxDropzoneImagePreviewComponent.ɵfac = function NgxDropzoneImagePreviewComponent_Factory(t) {
  return new (t || NgxDropzoneImagePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
NgxDropzoneImagePreviewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneImagePreviewComponent,
  selectors: [["ngx-dropzone-image-preview"]],
  inputs: {
    file: "file"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: NgxDropzonePreviewComponent,
    useExisting: NgxDropzoneImagePreviewComponent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[3, "src"], [3, "click", 4, "ngIf"], [3, "click"]],
  template: function NgxDropzoneImagePreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxDropzoneImagePreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   img[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   img[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;border-radius:5px;opacity:.8}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneImagePreviewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-image-preview',
      template: `
    <img [src]="imageSrc" />
		<ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
      providers: [{
        provide: NgxDropzonePreviewComponent,
        useExisting: NgxDropzoneImagePreviewComponent
      }],
      styles: [":host{min-width:unset!important;max-width:unset!important;padding:0!important}:host:hover img,:host:focus img{opacity:.7}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host img{max-height:100%;border-radius:5px;opacity:.8}:host ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer
    }];
  }, {
    file: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class NgxDropzoneVideoPreviewComponent extends NgxDropzonePreviewComponent {
  constructor(sanitizer) {
    super(sanitizer);
  }
  ngOnInit() {
    if (!this.file) {
      console.error('No file to read. Please provide a file using the [file] Input property.');
      return;
    }
    /**
     * We sanitize the URL here to enable the preview.
     * Please note that this could cause security issues!
     **/
    this.videoSrc = URL.createObjectURL(this.file);
    this.sanitizedVideoSrc = this.sanitizer.bypassSecurityTrustUrl(this.videoSrc);
  }
  ngOnDestroy() {
    URL.revokeObjectURL(this.videoSrc);
  }
}
NgxDropzoneVideoPreviewComponent.ɵfac = function NgxDropzoneVideoPreviewComponent_Factory(t) {
  return new (t || NgxDropzoneVideoPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
};
NgxDropzoneVideoPreviewComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NgxDropzoneVideoPreviewComponent,
  selectors: [["ngx-dropzone-video-preview"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
    provide: NgxDropzonePreviewComponent,
    useExisting: NgxDropzoneVideoPreviewComponent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [["controls", "", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["controls", "", 3, "click"], [3, "src"], [3, "click"]],
  template: function NgxDropzoneVideoPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxDropzoneVideoPreviewComponent_video_0_Template, 2, 1, "video", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxDropzoneVideoPreviewComponent_ngx_dropzone_remove_badge_2_Template, 1, 0, "ngx-dropzone-remove-badge", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sanitizedVideoSrc);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.removable);
    }
  },
  dependencies: [NgxDropzoneRemoveBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%]{min-width:unset!important;max-width:unset!important;padding:0!important}[_nghost-%COMP%]:hover   video[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   video[_ngcontent-%COMP%]{opacity:.7}[_nghost-%COMP%]:hover   ngx-dropzone-remove-badge[_ngcontent-%COMP%], [_nghost-%COMP%]:focus   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   ngx-dropzone-remove-badge[_ngcontent-%COMP%]{opacity:0}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{max-height:100%;border-radius:5px}[_nghost-%COMP%]     ngx-dropzone-label{position:absolute;overflow-wrap:break-word}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneVideoPreviewComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-dropzone-video-preview',
      template: `
    <video *ngIf="sanitizedVideoSrc" controls (click)="$event.stopPropagation()">
      <source [src]="sanitizedVideoSrc" />
    </video>
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
      providers: [{
        provide: NgxDropzonePreviewComponent,
        useExisting: NgxDropzoneVideoPreviewComponent
      }],
      styles: [":host{min-width:unset!important;max-width:unset!important;padding:0!important}:host:hover video,:host:focus video{opacity:.7}:host:hover ngx-dropzone-remove-badge,:host:focus ngx-dropzone-remove-badge{opacity:1}:host ngx-dropzone-remove-badge{opacity:0}:host video{max-height:100%;border-radius:5px}:host ::ng-deep ngx-dropzone-label{position:absolute;overflow-wrap:break-word}\n"]
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer
    }];
  }, null);
})();
class NgxDropzoneModule {}
NgxDropzoneModule.ɵfac = function NgxDropzoneModule_Factory(t) {
  return new (t || NgxDropzoneModule)();
};
NgxDropzoneModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: NgxDropzoneModule
});
NgxDropzoneModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDropzoneModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent],
      exports: [NgxDropzoneComponent, NgxDropzoneLabelDirective, NgxDropzonePreviewComponent, NgxDropzoneImagePreviewComponent, NgxDropzoneRemoveBadgeComponent, NgxDropzoneVideoPreviewComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-dropzone
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_content_pages_dropzone_dropzone_module_ts.js.map