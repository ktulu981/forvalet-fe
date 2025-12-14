"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_table_datatables_datatables_module_ts"],{

/***/ 18542:
/*!***************************************************************!*\
  !*** ./src/app/content/table/datatables/api/api.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiComponent": () => (/* binding */ ApiComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);












function ApiComponent_div_7_13_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.element.id);
  }
}
function ApiComponent_div_7_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_7_13_ng_template_0_Template, 2, 1, "ng-template", 35);
  }
}
function ApiComponent_div_7_15_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.element.name, " ");
  }
}
function ApiComponent_div_7_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_7_15_ng_template_0_Template, 2, 1, "ng-template", 35);
  }
}
function ApiComponent_div_7_17_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r19.element.position, " ");
  }
}
function ApiComponent_div_7_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_7_17_ng_template_0_Template, 2, 1, "ng-template", 35);
  }
}
function ApiComponent_div_7_19_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r22.element.office, " ");
  }
}
function ApiComponent_div_7_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_7_19_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_7_21_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.element.age, " ");
  }
}
function ApiComponent_div_7_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_7_21_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_7_23_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r24.element.salary, " ");
  }
}
function ApiComponent_div_7_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_7_23_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_7_25_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r25.element.startdate, " ");
  }
}
function ApiComponent_div_7_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_7_25_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "m-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function ApiComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.reloadAddRows($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Add rows ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "New rows can be added to a DataTable very easily using the (addFieldValue()) function. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApiComponent_div_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.addFieldValue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u00A0 Add new row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 30)(11, "ngx-datatable", 31)(12, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ApiComponent_div_7_13_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ngx-datatable-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ApiComponent_div_7_15_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ApiComponent_div_7_17_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ApiComponent_div_7_19_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ApiComponent_div_7_21_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ApiComponent_div_7_23_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ngx-datatable-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ApiComponent_div_7_25_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sortType", "multi")("headerHeight", 50)("limit", 7)("footerHeight", 40)("rowHeight", 40)("rows", ctx_r0.rows)("columnMode", "force")("loadingIndicator", ctx_r0.loadingIndicator)("perfectScrollbar", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
  }
}
function ApiComponent_div_10_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40)(1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ApiComponent_div_10_ng_template_13_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42);
      const allRowsSelected_r39 = restoredCtx.allRowsSelected;
      const selectFn_r40 = restoredCtx.selectFn;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](selectFn_r40(!allRowsSelected_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const allRowsSelected_r39 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", allRowsSelected_r39);
  }
}
function ApiComponent_div_10_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 40)(1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ApiComponent_div_10_ng_template_14_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);
      const onCheckboxChangeFn_r46 = restoredCtx.onCheckboxChangeFn;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](onCheckboxChangeFn_r46($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowIndex_r45 = ctx.rowIndex;
    const isSelected_r47 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "select", rowIndex_r45, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", isSelected_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("for", "select", rowIndex_r45, "");
  }
}
function ApiComponent_div_10_16_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r50.element.id);
  }
}
function ApiComponent_div_10_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_10_16_ng_template_0_Template, 2, 1, "ng-template", 35);
  }
}
function ApiComponent_div_10_18_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r52.element.name, " ");
  }
}
function ApiComponent_div_10_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_10_18_ng_template_0_Template, 2, 1, "ng-template", 35);
  }
}
function ApiComponent_div_10_20_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r54.element.position, " ");
  }
}
function ApiComponent_div_10_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_10_20_ng_template_0_Template, 2, 1, "ng-template", 35);
  }
}
function ApiComponent_div_10_22_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r57.element.office, " ");
  }
}
function ApiComponent_div_10_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_10_22_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_10_24_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r58.element.age, " ");
  }
}
function ApiComponent_div_10_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_10_24_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_10_26_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r59.element.salary, " ");
  }
}
function ApiComponent_div_10_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_10_26_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_10_28_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r60.element.startdate, " ");
  }
}
function ApiComponent_div_10_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_div_10_28_ng_template_0_Template, 1, 1, "ng-template", 35);
  }
}
function ApiComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "m-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function ApiComponent_div_10_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r61.reloadRowSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Row selection and deletion (single row) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "This example shows a modification of the multiple row selection example, where just a single can now be selected. This is done simply by checking to see if the row already has a selected class or not, and if so removing it, if not then the class is removed from any other row in the table which does have it and applied to the row to be selected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ApiComponent_div_10_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r63.deleteCheckedRow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Delete All");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 30)(11, "ngx-datatable", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("select", function ApiComponent_div_10_Template_ngx_datatable_select_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r64.onSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ngx-datatable-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ApiComponent_div_10_ng_template_13_Template, 3, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ApiComponent_div_10_ng_template_14_Template, 3, 3, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ApiComponent_div_10_16_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ngx-datatable-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ApiComponent_div_10_18_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ApiComponent_div_10_20_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ngx-datatable-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ApiComponent_div_10_22_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ApiComponent_div_10_24_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ApiComponent_div_10_26_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ngx-datatable-column", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ApiComponent_div_10_28_Template, 1, 0, null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("sortType", "multi")("headerHeight", 50)("limit", 7)("footerHeight", 40)("rowHeight", 40)("rows", ctx_r1.rows)("columnMode", "force")("loadingIndicator", ctx_r1.loadingIndicator)("selected", ctx_r1.selected)("selectionType", "checkbox")("perfectScrollbar", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("maxWidth", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
  }
}
function ApiComponent_ng_template_26_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_26_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r71);
      const rowIndex_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r70.editing[rowIndex_r65 + "-name"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r66, " ");
  }
}
function ApiComponent_ng_template_26_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ApiComponent_ng_template_26_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r76);
      const rowIndex_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r74.updateValue($event, "name", rowIndex_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", value_r66);
  }
}
function ApiComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_ng_template_26_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ApiComponent_ng_template_26_input_1_Template, 1, 1, "input", 46);
  }
  if (rf & 2) {
    const rowIndex_r65 = ctx.rowIndex;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.editing[rowIndex_r65 + "-name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.editing[rowIndex_r65 + "-name"]);
  }
}
function ApiComponent_ng_template_28_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_28_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r84);
      const rowIndex_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r83.editing[rowIndex_r78 + "-position"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r79, " ");
  }
}
function ApiComponent_ng_template_28_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ApiComponent_ng_template_28_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r89);
      const rowIndex_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r87.updateValue($event, "position", rowIndex_r78));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", value_r79);
  }
}
function ApiComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_ng_template_28_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ApiComponent_ng_template_28_input_1_Template, 1, 1, "input", 46);
  }
  if (rf & 2) {
    const rowIndex_r78 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.editing[rowIndex_r78 + "-position"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.editing[rowIndex_r78 + "-position"]);
  }
}
function ApiComponent_ng_template_30_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_30_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r97);
      const rowIndex_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r96.editing[rowIndex_r91 + "-office"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r92, " ");
  }
}
function ApiComponent_ng_template_30_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ApiComponent_ng_template_30_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r102);
      const rowIndex_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r100.updateValue($event, "office", rowIndex_r91));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", value_r92);
  }
}
function ApiComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_ng_template_30_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ApiComponent_ng_template_30_input_1_Template, 1, 1, "input", 46);
  }
  if (rf & 2) {
    const rowIndex_r91 = ctx.rowIndex;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.editing[rowIndex_r91 + "-office"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.editing[rowIndex_r91 + "-office"]);
  }
}
function ApiComponent_ng_template_32_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_32_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110);
      const rowIndex_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r109.editing[rowIndex_r104 + "-age"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r105, " ");
  }
}
function ApiComponent_ng_template_32_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ApiComponent_ng_template_32_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115);
      const rowIndex_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r113.updateValue($event, "age", rowIndex_r104));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", value_r105);
  }
}
function ApiComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_ng_template_32_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ApiComponent_ng_template_32_input_1_Template, 1, 1, "input", 46);
  }
  if (rf & 2) {
    const rowIndex_r104 = ctx.rowIndex;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.editing[rowIndex_r104 + "-age"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.editing[rowIndex_r104 + "-age"]);
  }
}
function ApiComponent_ng_template_34_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_34_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r123);
      const rowIndex_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r122.editing[rowIndex_r117 + "-salary"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r118, " ");
  }
}
function ApiComponent_ng_template_34_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ApiComponent_ng_template_34_input_1_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r128);
      const rowIndex_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r126.updateValue($event, "salary", rowIndex_r117));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", value_r118);
  }
}
function ApiComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_ng_template_34_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ApiComponent_ng_template_34_input_1_Template, 1, 1, "input", 46);
  }
  if (rf & 2) {
    const rowIndex_r117 = ctx.rowIndex;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.editing[rowIndex_r117 + "-salary"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.editing[rowIndex_r117 + "-salary"]);
  }
}
function ApiComponent_ng_template_36_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ApiComponent_ng_template_36_span_0_Template_span_dblclick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r136);
      const rowIndex_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r135.editing[rowIndex_r130 + "-gender"] = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r132, " ");
  }
}
function ApiComponent_ng_template_36_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ApiComponent_ng_template_36_select_1_Template_select_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r141);
      const rowIndex_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().rowIndex;
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r139.updateValue($event, "gender", rowIndex_r130));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const value_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", value_r132);
  }
}
function ApiComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ApiComponent_ng_template_36_span_0_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ApiComponent_ng_template_36_select_1_Template, 5, 1, "select", 49);
  }
  if (rf & 2) {
    const rowIndex_r130 = ctx.rowIndex;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.editing[rowIndex_r130 + "-gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.editing[rowIndex_r130 + "-gender"]);
  }
}
class ApiComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
    this.config = {
      wheelPropagation: true
    };
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.temp = [];
    this.selected = [];
    this.editing = {};
    // eslint-disable-next-line @typescript-eslint/member-ordering
    this.newAttribute = {
      'id': 15,
      name: 'Mark',
      position: 'Otto',
      office: '@mdo',
      age: '31',
      salary: '12000',
      startdate: '16/05/2017'
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'API DataTable',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'DataTables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'API DataTable',
        'isLink': false
      }]
    };
    this.tableApiservice.getTableApiData().subscribe(Response => {
      this.data = Response;
      this.getTabledata();
    });
  }
  getTabledata() {
    this.rows = this.data.rows;
    this.row = this.data.row;
  }
  updateFiltername(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  updateFilterposition(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.position.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  updateFilteroffice(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.office.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  updateFilterage(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.age.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  updateFiltersalary(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.salary.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  updateFilterstartdate(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.startdate.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }
  addFieldValue() {
    this.rows.push(this.newAttribute);
    this.rows = [...this.rows];
  }
  deleteFieldValue(index) {
    this.rows.splice(index, 1);
  }
  deleteRow(id) {
    let i = 0;
    for (const row of this.rows) {
      if (row.id === id) {
        break;
      }
      i++;
    }
    const temp = [...this.rows];
    temp.splice(i, 1);
    this.rows = temp;
  }
  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.row[rowIndex][cell] = event.target.value;
    const temp = [...this.row];
    this.row = temp;
  }
  reloadAddRows() {
    this.blockUIAddRows.start('Loading..');
    setTimeout(() => {
      this.blockUIAddRows.stop();
    }, 2500);
  }
  onSelect({
    selected
  }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  reloadRowSelection() {
    this.blockUIRowSelection.start('Loading..');
    setTimeout(() => {
      this.blockUIRowSelection.stop();
    }, 2500);
  }
  deleteCheckedRow() {
    let index = 0;
    const removedIndex = [];
    const temp = [...this.rows];
    for (const row of temp) {
      for (const selectedRow of this.selected) {
        if (row.id === selectedRow.id) {
          removedIndex.push(index);
        }
      }
      index++;
    }
    for (let i = removedIndex.length - 1; i >= 0; i--) {
      temp.splice(removedIndex[i], 1);
    }
    this.rows = temp;
    this.selected = [];
  }
}
ApiComponent.ɵfac = function ApiComponent_Factory(t) {
  return new (t || ApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
ApiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ApiComponent,
  selectors: [["app-api"]],
  viewQuery: function ApiComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  decls: 37,
  vars: 24,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "add-row"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "selection-n-deletion"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "table", "table-striped", "table-bordered", "selection-deletion-row"], ["fxFlex", "auto", 1, "bootstrap", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows", "perfectScrollbar"], ["name", "Name", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", ""], ["name", "Position", 3, "flexGrow", "minWidth"], ["name", "Office", 3, "flexGrow", "minWidth"], ["name", "Age", 3, "flexGrow", "minWidth"], ["name", "Salary", 3, "flexGrow", "minWidth"], ["name", "Gender", 3, "flexGrow", "minWidth"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-text"], ["id", "addRow", 1, "btn", "btn-secondary", "my-1", "mb-2", 3, "click"], [1, "feather", "ft-plus"], [1, "table", "table-striped", "table-bordered", "add-rows"], ["fxFlex", "auto", 1, "bootstrap", 3, "sortType", "headerHeight", "limit", "footerHeight", "rowHeight", "rows", "columnMode", "loadingIndicator", "perfectScrollbar"], ["name", "ID", 3, "flexGrow", "minWidth"], [4, "ngfor"], ["name", "Startdate", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", "", "let", "", "element", "", "of", "", "rows", ""], ["type", "button", 1, "btn", "btn-secondary", "my-1", "delete-all", 3, "click"], ["fxFlex", "auto", 1, "bootstrap", 3, "sortType", "headerHeight", "limit", "footerHeight", "rowHeight", "rows", "columnMode", "loadingIndicator", "selected", "selectionType", "perfectScrollbar", "select"], [3, "flexGrow", "maxWidth"], ["ngx-datatable-header-template", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "selectAll", 1, "custom-control-input", 3, "checked", "change"], ["for", "selectAll", 1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "id", "checked", "change"], [1, "custom-control-label", 3, "for"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "change", 4, "ngIf"], [3, "value", "change"], ["value", "male"], ["value", "female"]],
  template: function ApiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ApiComponent_div_7_Template, 26, 24, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 8)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ApiComponent_div_10_Template, 29, 28, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 8)(12, "div", 6)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Row Editing Content ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Double click on any content to edit that section.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15)(24, "ngx-datatable", 16)(25, "ngx-datatable-column", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ApiComponent_ng_template_26_Template, 2, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ngx-datatable-column", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ApiComponent_ng_template_28_Template, 2, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ngx-datatable-column", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ApiComponent_ng_template_30_Template, 2, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ngx-datatable-column", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ApiComponent_ng_template_32_Template, 2, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ngx-datatable-column", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ApiComponent_ng_template_34_Template, 2, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ngx-datatable-column", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ApiComponent_ng_template_36_Template, 2, 2, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "addRows")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "rowSelection")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("headerHeight", 50)("limit", 7)("columnMode", "force")("footerHeight", 50)("rowHeight", 40)("rows", ctx.row)("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.DataTableColumnCellDirective, ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n    font-family: inherit;\n    font-size: medium;\n    font-weight: bold;\n    color: #6B6F82;\n}\n[_nghost-%COMP%]     .ngx-datatable .datatable-row-center, .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-group[_ngcontent-%COMP%], .ngx-datatable[_ngcontent-%COMP%]   .datatable-row-right[_ngcontent-%COMP%] {\n    position: relative;\n    height: 50px !important;\n}\n\n[_nghost-%COMP%]     .datatable-icon-right:before {\n    font-family: 'icofont';\n    font-style: normal;\n}\n\n[_nghost-%COMP%]     .datatable-icon-skip:before {\n    font-family: 'icofont';\n    font-style: normal;\n}\n\n[_nghost-%COMP%]     .datatable-icon-left:before {\n    font-family: 'icofont';\n    font-style: normal;\n}\n\n[_nghost-%COMP%]     .datatable-icon-left:before {\n    content: \"\\2039\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .datatable-icon-prev:before {\n    content: \"\\00AB\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .datatable-icon-right:before {\n    content: \"\\203A\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .datatable-icon-skip:before {\n    content: \"\\00BB\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   ul[_ngcontent-c11][_ngcontent-%COMP%]   li[_ngcontent-c11][_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-c11][_ngcontent-%COMP%] {\n    background-color: #d4d2e7;\n    font-weight: bold;\n    font-size: larger;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n    height: 32px;\n    min-width: 34px;\n    line-height: 22px;\n    padding: 0;\n    border-radius: 3px;\n    margin: 0 3px;\n    text-align: center;\n    vertical-align: top;\n    padding-top: 3px;\n    text-decoration: none;\n    vertical-align: bottom;\n    color: #7c8091;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 9px;\n    padding: 0px 08px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n    background-color: #545454;\n    font-weight: bold;\n    color: white;\n\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-%COMP%] {\n    background-color: #545454;\n    font-weight: bold;\n    color: white;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer {\n    background: #727e8e;\n    color: #ededed;\n    margin-top: -1px;\n    overflow: inherit;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header {\n    font-weight: bold;\n    height: unset !important;\n    overflow: inherit\n}\n\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\n    flex: 0 0 0%;\n}\n\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager .pager {\n    display: flex;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .selected-count .datatable-pager {\n   flex: 0 0 0%;\n}\n\n[_nghost-%COMP%]     .ngx-datatable {\n  display: -webkit-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDtBQUNBO0dBQ0csWUFBWTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImFwaS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNkI2RjgyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlciwgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ2ljb2ZvbnQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLWxlZnQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAzOVwiO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1wcmV2OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDAwQUJcIjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAzQVwiO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDAwQkJcIjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gdWxbX25nY29udGVudC1jMTFdIGxpW19uZ2NvbnRlbnQtYzExXTpub3QoLmRpc2FibGVkKTpob3ZlciBhW19uZ2NvbnRlbnQtYzExXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGEge1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtaW4td2lkdGg6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGNvbG9yOiAjN2M4MDkxO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDlweDtcbiAgICBwYWRkaW5nOiAwcHggMDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzI3ZThlO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdFxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgZmxleDogMCAwIDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgZmxleDogMCAwIDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9kYXRhdGFibGVzL2FwaS9hcGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFDQTtHQUNHLFlBQVk7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBR0Esb3dWQUFvd1YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM2QjZGODI7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCwgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ2ljb2ZvbnQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDM5XCI7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXByZXY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMDBBQlwiO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMDNBXCI7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMDBCQlwiO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSB1bFtfbmdjb250ZW50LWMxMV0gbGlbX25nY29udGVudC1jMTFdOm5vdCguZGlzYWJsZWQpOmhvdmVyIGFbX25nY29udGVudC1jMTFdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1pbi13aWR0aDogMzRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgY29sb3I6ICM3YzgwOTE7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogOXB4O1xuICAgIHBhZGRpbmc6IDBweCAwOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICM3MjdlOGU7XG4gICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBpbmhlcml0XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICBmbGV4OiAwIDAgMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICBmbGV4OiAwIDAgMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_8__.BlockUI)('addRows')], ApiComponent.prototype, "blockUIAddRows", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_8__.BlockUI)('rowSelection')], ApiComponent.prototype, "blockUIRowSelection", void 0);

/***/ }),

/***/ 23290:
/*!***********************************************************************************************!*\
  !*** ./src/app/content/table/datatables/basicinitialisation/basicinitialisation.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicinitialisationComponent": () => (/* binding */ BasicinitialisationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);











function BasicinitialisationComponent_div_7_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r20 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r20, " ");
  }
}
function BasicinitialisationComponent_div_7_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r21 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r21, " ");
  }
}
function BasicinitialisationComponent_div_7_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r22 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r22, " ");
  }
}
function BasicinitialisationComponent_div_7_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r23 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r23, " ");
  }
}
function BasicinitialisationComponent_div_7_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r24 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r24, " ");
  }
}
function BasicinitialisationComponent_div_7_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r25 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r25, " ");
  }
}
function BasicinitialisationComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "m-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function BasicinitialisationComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r26.reloadZeroConfiguration($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Zero configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 35)(6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "DataTables has sorting and most features enabled by default.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ngx-datatable", 18)(9, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BasicinitialisationComponent_div_7_ng_template_10_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BasicinitialisationComponent_div_7_ng_template_12_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, BasicinitialisationComponent_div_7_ng_template_14_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, BasicinitialisationComponent_div_7_ng_template_16_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, BasicinitialisationComponent_div_7_ng_template_18_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, BasicinitialisationComponent_div_7_ng_template_20_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("limit", 7)("rows", ctx_r0.rows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
  }
}
function BasicinitialisationComponent_div_10_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r34 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r34, " ");
  }
}
function BasicinitialisationComponent_div_10_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r35 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r35, " ");
  }
}
function BasicinitialisationComponent_div_10_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r36 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r36, " ");
  }
}
function BasicinitialisationComponent_div_10_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r37 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r37, " ");
  }
}
function BasicinitialisationComponent_div_10_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r38 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r38, " ");
  }
}
function BasicinitialisationComponent_div_10_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r39 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r39, " ");
  }
}
function BasicinitialisationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "m-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function BasicinitialisationComponent_div_10_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.reloadDefaultOrdering($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Default ordering ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 35)(6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Lets say you want to sort column descending and ascending order. You want to search by the name column. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 36)(10, "div", 37)(11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function BasicinitialisationComponent_div_10_Template_input_keyup_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.updatedefaultFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 38)(15, "ngx-datatable", 39)(16, "ngx-datatable-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, BasicinitialisationComponent_div_10_ng_template_17_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ngx-datatable-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, BasicinitialisationComponent_div_10_ng_template_19_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ngx-datatable-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, BasicinitialisationComponent_div_10_ng_template_21_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ngx-datatable-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, BasicinitialisationComponent_div_10_ng_template_23_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, BasicinitialisationComponent_div_10_ng_template_25_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ngx-datatable-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, BasicinitialisationComponent_div_10_ng_template_27_Template, 1, 1, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("limit", 7)("rows", ctx_r1.defaultrows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
  }
}
function BasicinitialisationComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r43 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r43, " ");
  }
}
function BasicinitialisationComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r44 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r44, " ");
  }
}
function BasicinitialisationComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r45 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r45, " ");
  }
}
function BasicinitialisationComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r46 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r46, " ");
  }
}
function BasicinitialisationComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r47 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r47, " ");
  }
}
function BasicinitialisationComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r48 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r48, " ");
  }
}
function BasicinitialisationComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r49, " ");
  }
}
function BasicinitialisationComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r50 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r50, " ");
  }
}
function BasicinitialisationComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r51 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r51, " ");
  }
}
function BasicinitialisationComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r52 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r52, " ");
  }
}
function BasicinitialisationComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r53 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r53, " ");
  }
}
function BasicinitialisationComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const value_r54 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", value_r54, " ");
  }
}
class BasicinitialisationComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
    this.configScroll = {
      suppressScrollY: false,
      wheelPropagation: false
    };
    this.config = {
      suppressScrollY: true
    };
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.temp = [];
    this.rows = [];
    this.temp2 = this.rows;
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Basic DataTables',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'DataTables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Basic DataTables',
        'isLink': false
      }]
    };
    this.tableApiservice.getTableInitialisationData().subscribe(Response => {
      this.data = Response;
      this.getTabledata();
    });
  }
  getTabledata() {
    this.rows = this.data.rows;
    this.defaultrows = this.data.defaultrows;
    this.DOMrows = this.data.DOMrows;
    this.Scrollrows = this.data.Scrollrows;
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.rows];
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  updatedefaultFilter(event) {
    const val = event.target.value.toLowerCase();
    this.defaultrows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.defaultrows];
    // filter our data
    const temp = this.defaultrows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.defaultrows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  updateDOMFilter(event) {
    const val = event.target.value.toLowerCase();
    this.DOMrows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.DOMrows];
    // filter our data
    const temp = this.DOMrows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.DOMrows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  reloadZeroConfiguration() {
    this.blockUIZeroConfiguration.start('Loading..');
    setTimeout(() => {
      this.blockUIZeroConfiguration.stop();
    }, 2500);
  }
  reloadDefaultOrdering() {
    this.blockUIDefaultOrdering.start('Loading..');
    setTimeout(() => {
      this.blockUIDefaultOrdering.stop();
    }, 2500);
  }
}
BasicinitialisationComponent.ɵfac = function BasicinitialisationComponent_Factory(t) {
  return new (t || BasicinitialisationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
BasicinitialisationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BasicinitialisationComponent,
  selectors: [["app-basicinitialisation"]],
  viewQuery: function BasicinitialisationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 67,
  vars: 40,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "configuration"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "ordering"], ["id", "positioning"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body", "card-dashboard"], [1, "card-text"], [1, "dom-positioning"], ["fxFlex", "auto", 1, "bootstrap", "table-bordered", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"], ["name", "Name", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", ""], ["name", "Position", 3, "flexGrow", "minWidth"], ["name", "Office", 3, "flexGrow", "minWidth"], ["name", "Age", 3, "flexGrow", "minWidth"], ["name", "Startdate", 3, "flexGrow", "minWidth"], ["name", "Salary", 3, "flexGrow", "minWidth"], [1, "col-sm-12", "col-md-6"], [1, "col-sm-12", "col-md-6", "dataTables_filter"], ["type", "text", "placeholder", "Type to filter the name column...", 2, "padding", "4px", "margin", "0px auto", "margin-left", "8px", "width", "200px", "border-radius", ".22rem", "border", "1px solid #BABFC7", 3, "keyup"], ["id", "horizontal"], [1, "table-striped", "table-bordered"], ["columnMode", "force", "fxFlex", "auto", 1, "bootstrap", 2, "height", "300px", 3, "rows", "headerHeight", "rowHeight", "perfectScrollbar"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-dashboard"], [1, "col-sm-12", "col-md-12"], [1, "dataTables_filter"], [1, "table-bordered", "default-ordering"], ["fxFlex", "auto", 1, "bootstrap", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"]],
  template: function BasicinitialisationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BasicinitialisationComponent_div_7_Template, 21, 20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 8)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BasicinitialisationComponent_div_10_Template, 28, 20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 9)(12, "div", 6)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "DOM positioning");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "When customizing DataTables for your own usage, you might find that the default position of the feature elements (filter input etc) is not quite to your liking. To address this issue DataTables takes inspiration from the CSS 3 Advanced Layout Module and provides the dom initialization parameter which can be set to indicate where you wish particular features to appear in the DOM. You can also specify div wrapping containers (with an id and / or class) to provide complete layout flexibility.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 17)(23, "ngx-datatable", 18)(24, "ngx-datatable-column", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, BasicinitialisationComponent_ng_template_25_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ngx-datatable-column", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, BasicinitialisationComponent_ng_template_27_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ngx-datatable-column", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, BasicinitialisationComponent_ng_template_29_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ngx-datatable-column", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, BasicinitialisationComponent_ng_template_31_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ngx-datatable-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, BasicinitialisationComponent_ng_template_33_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ngx-datatable-column", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, BasicinitialisationComponent_ng_template_35_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 27)(39, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function BasicinitialisationComponent_Template_input_keyup_41_listener($event) {
        return ctx.updateDOMFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "section", 29)(43, "div", 6)(44, "div", 10)(45, "div", 11)(46, "div", 12)(47, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Scroll - horizontal and vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 14)(50, "div", 15)(51, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Scroll - horizontal and vertical DataTables has the ability to show tables with horizontal scrolling, which is very useful for when you have a wide table, but want to constrain it to a limited horizontal display area. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 30)(54, "ngx-datatable", 31)(55, "ngx-datatable-column", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BasicinitialisationComponent_ng_template_56_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "ngx-datatable-column", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BasicinitialisationComponent_ng_template_58_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ngx-datatable-column", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, BasicinitialisationComponent_ng_template_60_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "ngx-datatable-column", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, BasicinitialisationComponent_ng_template_62_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "ngx-datatable-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, BasicinitialisationComponent_ng_template_64_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "ngx-datatable-column", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, BasicinitialisationComponent_ng_template_66_Template, 1, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "zeroConfiguration")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "defaultOrdering")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("limit", 7)("rows", ctx.DOMrows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx.Scrollrows)("headerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx.configScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    }
  },
  dependencies: [_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n    font-family: inherit;\n    font-size: medium;\n    font-weight: bold;\n    color: #6B6F82;\n}\n\n[_nghost-%COMP%]     .table-bordered {\n    border: 2px solid #e3ebf3;\n}\n\n[_nghost-%COMP%]     .filter {\n    padding: 8px !important;\n}\n\n[_nghost-%COMP%]     .datatable-icon-right:before {\n    font-family: 'icofont';\n    font-style: normal;\n}\n\n[_nghost-%COMP%]     .datatable-icon-skip:before {\n    font-family: 'icofont';\n    font-style: normal;\n}\n\n[_nghost-%COMP%]     .datatable-icon-left:before {\n    font-family: 'icofont';\n    font-style: normal;\n}\n\n[_nghost-%COMP%]     .datatable-icon-left:before {\n    content: \"\\2039\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .datatable-icon-prev:before {\n    content: \"\\00AB\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .datatable-icon-right:before {\n    content: \"\\203A\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .datatable-icon-skip:before {\n    content: \"\\00BB\";\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   ul[_ngcontent-c11][_ngcontent-%COMP%]   li[_ngcontent-c11][_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-c11][_ngcontent-%COMP%] {\n    background-color: #d4d2e7;\n    font-weight: bold;\n    font-size: larger;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n    height: 32px;\n    min-width: 34px;\n    line-height: 22px;\n    padding: 0;\n    border-radius: 3px;\n    margin: 0 3px;\n    text-align: center;\n    vertical-align: top;\n    padding-top: 3px;\n    text-decoration: none;\n    vertical-align: bottom;\n    color: #7c8091;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 9px;\n    padding: 0px 08px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n    background-color: #545454;\n    font-weight: bold;\n    color: white;\n\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-%COMP%] {\n    background-color: #545454;\n    font-weight: bold;\n    color: white;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer {\n    background: #727e8e;\n    color: #ededed;\n    margin-top: -1px;\n    overflow: inherit;\n}\n\n[_nghost-%COMP%]     .dataTables_filter {\n    text-align: right;\n}\n\n[_nghost-%COMP%]     .datatable-icon-down:after {\n    content: \"\\2193\";\n    font-size: large;\n}\n\n[_nghost-%COMP%]     .span .sort-btn .sort-desc .datatable-icon-down:before {\n    font-style: normal !important;\n    font-weight: normal !important;\n    font-variant: normal !important;\n    text-transform: none !important;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n[_nghost-%COMP%]     .span .sort-btn .sort-asc .datatable-icon-up:before {\n    font-style: normal !important;\n    font-weight: normal !important;\n    font-variant: normal !important;\n    text-transform: none !important;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n[_nghost-%COMP%]     .row {\n    display: flex !important;\n    flex-wrap: wrap !important;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n\n[_nghost-%COMP%]     .ngx-datatable {\n    display: block;\n    overflow: hidden;\n    justify-content: center;\n    position: relative;\n\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap {\n    box-shadow: none;\n    font-size: 1rem;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header {\n    font-weight: bold;\n    height: unset !important;\n    overflow: inherit\n}\n\n\n\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n\n.datatable-scroll[_ngcontent-%COMP%] {\n    width: 100% !important;\n}\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager .pager {\n    display: flex;\n}\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .selected-count .datatable-pager {\n    flex: 0 0 0%;\n }\n\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\n    flex: 0 0 0%;\n}\n\n[_nghost-%COMP%]     .ngx-datatable {\n  display: -webkit-box;\n}\n\n[_nghost-%COMP%]     .empty-row {\n  padding-left: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljaW5pdGlhbGlzYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFHaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEI7QUFDSjs7O0FBR0E7O0dBRUc7O0FBRUg7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoiYmFzaWNpbml0aWFsaXNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNkI2RjgyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlYmYzO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlciB7XG4gICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ2ljb2ZvbnQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLWxlZnQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAzOVwiO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1wcmV2OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDAwQUJcIjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcmlnaHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAzQVwiO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDAwQkJcIjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gdWxbX25nY29udGVudC1jMTFdIGxpW19uZ2NvbnRlbnQtYzExXTpub3QoLmRpc2FibGVkKTpob3ZlciBhW19uZ2NvbnRlbnQtYzExXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIGEge1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtaW4td2lkdGg6IDM0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGNvbG9yOiAjN2M4MDkxO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDlweDtcbiAgICBwYWRkaW5nOiAwcHggMDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpOmhvdmVyIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzI3ZThlO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YVRhYmxlc19maWx0ZXIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLWRvd246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFwyMTkzXCI7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zcGFuIC5zb3J0LWJ0biAuc29ydC1kZXNjIC5kYXRhdGFibGUtaWNvbi1kb3duOmJlZm9yZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNwYW4gLnNvcnQtYnRuIC5zb3J0LWFzYyAuZGF0YXRhYmxlLWljb24tdXA6YmVmb3JlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBpbmhlcml0XG59XG5cblxuLyogOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufSAqL1xuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuXG4uZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgZmxleDogMCAwIDAlO1xuIH1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgIGZsZXg6IDAgMCAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZW1wdHktcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9kYXRhdGFibGVzL2Jhc2ljaW5pdGlhbGlzYXRpb24vYmFzaWNpbml0aWFsaXNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUdoQix1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QjtBQUNKOzs7QUFHQTs7R0FFRzs7QUFFSDtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFBQSxnMWFBQWcxYSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzZCNkY4Mjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2UzZWJmMztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXIge1xuICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tc2tpcDpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLWxlZnQ6YmVmb3JlIHtcbiAgICBmb250LWZhbWlseTogJ2ljb2ZvbnQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMzlcIjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcHJldjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwwMEFCXCI7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwM0FcIjtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tc2tpcDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwwMEJCXCI7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKS5hY3RpdmUgYSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIHVsW19uZ2NvbnRlbnQtYzExXSBsaVtfbmdjb250ZW50LWMxMV06bm90KC5kaXNhYmxlZCk6aG92ZXIgYVtfbmdjb250ZW50LWMxMV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWluLXdpZHRoOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogMCAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBjb2xvcjogIzdjODA5MTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgcGFkZGluZzogMHB4IDA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldixcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzcyN2U4ZTtcbiAgICBjb2xvcjogI2VkZWRlZDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGFUYWJsZXNfZmlsdGVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1kb3duOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlxcMjE5M1wiO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3BhbiAuc29ydC1idG4gLnNvcnQtZGVzYyAuZGF0YXRhYmxlLWljb24tZG93bjpiZWZvcmUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zcGFuIC5zb3J0LWJ0biAuc29ydC1hc2MgLmRhdGF0YWJsZS1pY29uLXVwOmJlZm9yZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdFxufVxuXG5cbi8qIDpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn0gKi9cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgIGZsZXg6IDAgMCAwJTtcbiB9XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICBmbGV4OiAwIDAgMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmVtcHR5LXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('zeroConfiguration')], BasicinitialisationComponent.prototype, "blockUIZeroConfiguration", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('defaultOrdering')], BasicinitialisationComponent.prototype, "blockUIDefaultOrdering", void 0);

/***/ }),

/***/ 61833:
/*!***************************************************************!*\
  !*** ./src/app/content/table/datatables/datatables.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesModule": () => (/* binding */ DatatablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicinitialisation/basicinitialisation.component */ 23290);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var _styling_styling_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styling/styling.component */ 1949);
/* harmony import */ var _api_api_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/api.component */ 18542);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-clipboard */ 11691);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_layout/blockui/block-template.component */ 86196);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);

















class DatatablesModule {}
DatatablesModule.ɵfac = function DatatablesModule_Factory(t) {
  return new (t || DatatablesModule)();
};
DatatablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: DatatablesModule
});
DatatablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_3__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__.ClipboardModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_13__.BlockUIModule.forRoot({
    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_5__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([{
    path: 'basicinitialisation',
    component: _basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_0__.BasicinitialisationComponent
  }, {
    path: 'styling',
    component: _styling_styling_component__WEBPACK_IMPORTED_MODULE_1__.StylingComponent
  }, {
    path: 'api',
    component: _api_api_component__WEBPACK_IMPORTED_MODULE_2__.ApiComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DatatablesModule, {
    declarations: [_basicinitialisation_basicinitialisation_component__WEBPACK_IMPORTED_MODULE_0__.BasicinitialisationComponent, _styling_styling_component__WEBPACK_IMPORTED_MODULE_1__.StylingComponent, _api_api_component__WEBPACK_IMPORTED_MODULE_2__.ApiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_3__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__.ClipboardModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.NgxDatatableModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_13__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 1949:
/*!***********************************************************************!*\
  !*** ./src/app/content/table/datatables/styling/styling.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylingComponent": () => (/* binding */ StylingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);











function StylingComponent_div_7_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r4.name, " ");
  }
}
function StylingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "m-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function StylingComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.reloadBaseStyle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Base style ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 26)(6, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "The DataTables default style file has a number of features which can be enabled based on the class name of the table.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "div", 13)(10, "div", 14)(11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function StylingComponent_div_7_Template_input_keyup_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.updateFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 28)(15, "ngx-datatable", 29)(16, "ngx-datatable-column", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, StylingComponent_div_7_ng_template_17_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ngx-datatable-column", 20)(19, "ngx-datatable-column", 21)(20, "ngx-datatable-column", 22)(21, "ngx-datatable-column", 23)(22, "ngx-datatable-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("limit", 6)("rows", ctx_r0.rows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
  }
}
function StylingComponent_div_10_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r9.name, " ");
  }
}
function StylingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "m-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function StylingComponent_div_10_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.reloadNoStylingClasses($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No styling classes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "This example shows the base DataTables style file being used, with none of the additional feature style classes being used.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 13)(9, "div", 14)(10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function StylingComponent_div_10_Template_input_keyup_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.updatedefaultFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 30)(14, "ngx-datatable", 31)(15, "ngx-datatable-column", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, StylingComponent_div_10_ng_template_16_Template, 1, 1, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ngx-datatable-column", 33)(18, "ngx-datatable-column", 34)(19, "ngx-datatable-column", 35)(20, "ngx-datatable-column", 36)(21, "ngx-datatable-column", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", ctx_r1.stylerows)("columnMode", "force")("perfectScrollbar", ctx_r1.config);
  }
}
function StylingComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r13.name, " ");
  }
}
class StylingComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
    this.config = {
      suppressScrollY: true
    };
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.temp = [];
    this.rows = [];
    this.temp2 = this.rows;
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Styling DataTable',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'DataTables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Styling DataTable',
        'isLink': false
      }]
    };
    this.tableApiservice.getStylingData().subscribe(Response => {
      this.data = Response;
      this.getTabledata();
    });
  }
  getTabledata() {
    this.rows = this.data.rows;
    this.stylerows = this.data.stylerows;
    this.baserows = this.data.baserows;
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    this.rows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.rows];
    // filter our data
    const temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  updatedefaultFilter(event) {
    const val = event.target.value.toLowerCase();
    this.stylerows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.stylerows];
    // filter our data
    const temp = this.stylerows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.stylerows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  updatecompactFilter(event) {
    const val = event.target.value.toLowerCase();
    this.baserows = [...this.temp2]; // and here you have to initialize it with your data
    this.temp = [...this.baserows];
    // filter our data
    const temp = this.baserows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.baserows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  reloadBaseStyle() {
    this.blockUIBaseStyle.start('Loading..');
    setTimeout(() => {
      this.blockUIBaseStyle.stop();
    }, 2500);
  }
  reloadNoStylingClasses() {
    this.blockUINoStylingClasses.start('Loading..');
    setTimeout(() => {
      this.blockUINoStylingClasses.stop();
    }, 2500);
  }
}
StylingComponent.ɵfac = function StylingComponent_Factory(t) {
  return new (t || StylingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
StylingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: StylingComponent,
  selectors: [["app-styling"]],
  viewQuery: function StylingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 35,
  vars: 24,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "base-style"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "no-style"], ["id", "compact-style"], [1, "col-12"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "col-sm-12", "col-md-12"], [1, "dataTables_filter"], ["type", "text", "placeholder", "Type to filter the name column...", 2, "padding", "4px", "margin", "0px auto", "margin-left", "8px", "width", "200px", "border-radius", ".22rem", "border", "1px solid #BABFC7", 3, "keyup"], [1, "table", "table-striped", "table-bordered", "compact"], ["fxFlex", "auto", 1, "material", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"], ["name", "Name", 3, "flexGrow", "minWidth"], ["ngx-datatable-cell-template", ""], ["name", "Position", 3, "flexGrow", "minWidth"], ["name", "Office", 3, "flexGrow", "minWidth"], ["name", "Age", 3, "flexGrow", "minWidth"], ["name", "Salary", 3, "flexGrow", "minWidth"], ["name", "Startdate", 3, "flexGrow", "minWidth"], [3, "options", "reloadFunction"], [1, "card-dashboard"], [1, "card-text"], [1, "table", "table-striped", "table-bordered", "base-style"], ["fxFlex", "auto", 1, "bootstrap", "ps", 3, "limit", "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "perfectScrollbar"], [1, "no-style-no", "no-style"], ["fxFlex", "auto", 3, "rows", "columnMode", "perfectScrollbar"], ["name", "Name"], ["name", "Position"], ["name", "Office"], ["name", "Age"], ["name", "Salary"], ["name", "Startdate"]],
  template: function StylingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, StylingComponent_div_7_Template, 23, 20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 8)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, StylingComponent_div_10_Template, 22, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 9)(12, "div", 6)(13, "div", 10)(14, "m-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Base style - compact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "The material class is used to reduce the amount of white-space the default styling for the DataTable uses, increasing the information density on screen, as shown below.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6)(21, "div", 13)(22, "div", 14)(23, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Search : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function StylingComponent_Template_input_keyup_25_listener($event) {
        return ctx.updatecompactFilter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16)(27, "ngx-datatable", 17)(28, "ngx-datatable-column", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, StylingComponent_ng_template_29_Template, 1, 1, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ngx-datatable-column", 20)(31, "ngx-datatable-column", 21)(32, "ngx-datatable-column", 22)(33, "ngx-datatable-column", 23)(34, "ngx-datatable-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "baseStyle")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "noStylingClasses")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("limit", 10)("rows", ctx.baserows)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("flexGrow", 1)("minWidth", 90);
    }
  },
  dependencies: [_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__.PerfectScrollbarDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__.DataTableColumnCellDirective, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n    font-family: inherit;\n    font-size: medium;\n    font-weight: bold;\n    color: #6B6F82;\n}\n\n[_nghost-%COMP%]     .table-bordered {\n    border: 2px solid #e3ebf3;\n}\n\n[_nghost-%COMP%]     .no-style {\n    border-top: 2px solid #e3ebf3;\n}\n[_nghost-%COMP%]     .filter {\n    margin-left: 4px;\n}\n\n[_nghost-%COMP%]     .ngx-datatable .datatable-header {\n    display: block;\n    overflow: inherit;\n    font-family: inherit;\n    font-size: medium;\n    font-weight: bold;\n    color: #6B6F82;\n}\n\n[_nghost-%COMP%]     .datatable-icon-right:before {\n    font-family: 'icofont';\n    font-style: normal;\n    content: \"\\203A\";\n}\n\n[_nghost-%COMP%]     .datatable-icon-skip:before {\n    font-family: 'icofont';\n    font-style: normal;\n    content: \"\\00BB\";\n}\n\n[_nghost-%COMP%]     .datatable-icon-left:before {\n    font-family: 'icofont';\n    font-style: normal;\n    content: \"\\2039\";\n}\n\n[_nghost-%COMP%]     .datatable-icon-prev:before {\n    font-family: 'icofont';\n    font-style: normal;\n    content: \"\\00AB\";\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-left:before {\n\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-prev:before {\n\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-right:before {\n\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-icon-skip:before {\n\n    font-size: x-large;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n    font-size: 16px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #d4d2e7;\n}\n\n[_nghost-%COMP%]     .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   ul[_ngcontent-c11][_ngcontent-%COMP%]   li[_ngcontent-c11][_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-c11][_ngcontent-%COMP%] {\n    background-color: #d4d2e7;\n    font-weight: bold;\n    font-size: small;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n    height: 32px;\n    min-width: 34px;\n    line-height: 22px;\n    padding: 0;\n    border-radius: 3px;\n    margin: 0 3px;\n    text-align: center;\n    vertical-align: top;\n    padding-top: 3px;\n    text-decoration: none;\n    vertical-align: bottom;\n    color: #7c8091;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 9px;\n    padding: 0px 08px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev, .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-right[_ngcontent-c11][_ngcontent-%COMP%], .ngx-datatable.bootstrap[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-footer[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-pager[_ngcontent-c11][_ngcontent-%COMP%]   .datatable-icon-prev[_ngcontent-c11][_ngcontent-%COMP%] {\n    font-size: 0px;\n    line-height: 22px;\n    padding: 0px 09px;\n    background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n    background-color: #545454;\n    font-weight: bold;\n    color: white;\n\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-footer[_ngcontent-%COMP%]   .datatable-pager[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.disabled):hover   a[_ngcontent-%COMP%] {\n    background-color: #545454;\n    font-weight: bold;\n    color: white;\n}\n\n[_nghost-%COMP%]     .ngx-datatable.bootstrap .datatable-footer {\n    background: #727e8e;\n    color: #ededed;\n    margin-top: -1px;\n    overflow: inherit;\n}\n\n[_nghost-%COMP%]     .datatable-footer .datatable-pager .pager li a {\n    width: 30px !important;\n}\n\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\n    flex: 1 1 97%;\n    text-align: right;\n}\n\n[_nghost-%COMP%]     .datatable-icon-down:after {\n    content: \"\\2193\";\n    font-size: large;\n}\n\n[_nghost-%COMP%]     .dataTables_filter {\n  text-align: right;\n}\n\n\n[_nghost-%COMP%]     .ngx-datatable.no-style .datatable-header {\n    font-weight: bold;\n    height: unset !important;\n    overflow: inherit;\n    margin-bottom: 10px;\n}\n\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager {\n    flex: 0 0 0%;\n}\n\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager .pager {\n    display: flex;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .ngx-datatable .datatable-footer .datatable-pager a {\n    height: 32px;\n    min-width: 34px;\n    line-height: 22px;\n    padding: 0;\n    border-radius: 3px;\n    margin: 0 3px;\n    text-align: center;\n    vertical-align: top;\n    padding-top: 3px;\n    text-decoration: none;\n    vertical-align: bottom;\n    color: #7c8091;\n}\n\n[_nghost-%COMP%]     .ngx-datatable {\n  display: -webkit-box;\n}\n\n[_nghost-%COMP%]     .empty-row {\n  padding-left: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTs7O0lBR0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7O0FBRWhCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUdJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3R5bGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNkI2RjgyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTNlYmYzO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5vLXN0eWxlIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2UzZWJmMztcbn1cbjpob3N0IDo6bmctZGVlcCAuZmlsdGVyIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNkI2RjgyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29udGVudDogXCJcXDIwM0FcIjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29udGVudDogXCJcXDAwQkJcIjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1sZWZ0OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29udGVudDogXCJcXDIwMzlcIjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1wcmV2OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdpY29mb250JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29udGVudDogXCJcXDAwQUJcIjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xuXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaWNvbi1wcmV2OmJlZm9yZSB7XG5cbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XG5cbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1pY29uLXNraXA6YmVmb3JlIHtcblxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1za2lwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSB1bFtfbmdjb250ZW50LWMxMV0gbGlbX25nY29udGVudC1jMTFdOm5vdCguZGlzYWJsZWQpOmhvdmVyIGFbX25nY29udGVudC1jMTFdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkMmU3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWluLXdpZHRoOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogMCAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBjb2xvcjogIzdjODA5MTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA5cHg7XG4gICAgcGFkZGluZzogMHB4IDA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXJpZ2h0W19uZ2NvbnRlbnQtYzExXSxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1wcmV2W19uZ2NvbnRlbnQtYzExXSB7XG4gICAgZm9udC1zaXplOiAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldixcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIGEsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB1bCBsaTpub3QoLmRpc2FibGVkKTpob3ZlciBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzcyN2U4ZTtcbiAgICBjb2xvcjogI2VkZWRlZDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDEgMSA4MCU7XG4gICAgZmxleDogMSAxIDk3JTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1kb3duOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlxcMjE5M1wiO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YVRhYmxlc19maWx0ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUubm8tc3R5bGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgZmxleDogMCAwIDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciBhIHtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWluLXdpZHRoOiAzNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogMCAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBjb2xvcjogIzdjODA5MTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZW1wdHktcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9kYXRhdGFibGVzL3N0eWxpbmcvc3R5bGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7O0lBR0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBR0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFBQSx3NlpBQXc2WiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzZCNkY4Mjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1ib3JkZXJlZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2UzZWJmMztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uby1zdHlsZSB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlM2ViZjM7XG59XG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzZCNkY4Mjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGNvbnRlbnQ6IFwiXFwyMDNBXCI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tc2tpcDpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGNvbnRlbnQ6IFwiXFwwMEJCXCI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tbGVmdDpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGNvbnRlbnQ6IFwiXFwyMDM5XCI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tcHJldjpiZWZvcmUge1xuICAgIGZvbnQtZmFtaWx5OiAnaWNvZm9udCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGNvbnRlbnQ6IFwiXFwwMEFCXCI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1pY29uLWxlZnQ6YmVmb3JlIHtcblxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWljb24tcHJldjpiZWZvcmUge1xuXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaWNvbi1yaWdodDpiZWZvcmUge1xuXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG5cbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZzogMHB4IDA5cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5kYXRhdGFibGUtaWNvbi1yaWdodCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tc2tpcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQyZTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gdWxbX25nY29udGVudC1jMTFdIGxpW19uZ2NvbnRlbnQtYzExXTpub3QoLmRpc2FibGVkKTpob3ZlciBhW19uZ2NvbnRlbnQtYzExXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDJlNztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1pbi13aWR0aDogMzRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgY29sb3I6ICM3YzgwOTE7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogOXB4O1xuICAgIHBhZGRpbmc6IDBweCAwOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tbGVmdCxcbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcFtfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1mb290ZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtcGFnZXJbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtaWNvbi1yaWdodFtfbmdjb250ZW50LWMxMV0sXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcHJldltfbmdjb250ZW50LWMxMV0ge1xuICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDBweCAwOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLmRhdGF0YWJsZS1pY29uLXByZXYsXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXBbX25nY29udGVudC1jMTFdIC5kYXRhdGFibGUtZm9vdGVyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLXBhZ2VyW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWljb24tcmlnaHRbX25nY29udGVudC1jMTFdLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwW19uZ2NvbnRlbnQtYzExXSAuZGF0YXRhYmxlLWZvb3Rlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1wYWdlcltfbmdjb250ZW50LWMxMV0gLmRhdGF0YWJsZS1pY29uLXByZXZbX25nY29udGVudC1jMTFdIHtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwcHggMDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHVsIGxpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSBhLFxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgdWwgbGk6bm90KC5kaXNhYmxlZCk6aG92ZXIgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICM3MjdlOGU7XG4gICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC1tcy1mbGV4OiAxIDEgODAlO1xuICAgIGZsZXg6IDEgMSA5NyU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGF0YXRhYmxlLWljb24tZG93bjphZnRlciB7XG4gICAgY29udGVudDogXCJcXDIxOTNcIjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhdGFUYWJsZXNfZmlsdGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlLm5vLXN0eWxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgIGZsZXg6IDAgMCAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgYSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1pbi13aWR0aDogMzRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgY29sb3I6ICM3YzgwOTE7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmVtcHR5LXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('baseStyle')], StylingComponent.prototype, "blockUIBaseStyle", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('noStylingClasses')], StylingComponent.prototype, "blockUINoStylingClasses", void 0);

/***/ })

}]);
//# sourceMappingURL=src_app_content_table_datatables_datatables_module_ts.js.map