"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_pages_invoice_invoice_module_ts"],{

/***/ 24024:
/*!******************************************************************************!*\
  !*** ./src/app/content/pages/invoice/invoice-list/invoice-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceListComponent": () => (/* binding */ InvoiceListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






function InvoiceListComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "span", 14)(17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 36)(20, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Open Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Edit Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Complete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Assign To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Delete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const invoice_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", invoice_r5.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r5.invoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r5.orderno);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r5.customername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r5.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r5.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r5.balancedue);
  }
}
function InvoiceListComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "span", 14)(17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 36)(20, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Open Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Edit Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Complete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Assign To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Delete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const invoice_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", invoice_r7.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r7.invoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r7.orderno);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r7.customername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r7.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r7.balancedue);
  }
}
function InvoiceListComponent_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "span", 14)(17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 36)(20, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Open Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Edit Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Complete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Assign To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Delete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const invoice_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", invoice_r9.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r9.invoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r9.orderno);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r9.customername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r9.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r9.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r9.balancedue);
  }
}
function InvoiceListComponent_tr_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "span", 14)(17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 36)(20, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Open Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Edit Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Complete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Assign To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Delete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const invoice_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", invoice_r11.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r11.invoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r11.orderno);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r11.customername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r11.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r11.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r11.balancedue);
  }
}
function InvoiceListComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "span", 14)(17, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 36)(20, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Open Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Edit Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Complete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Assign To");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Delete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const invoice_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", invoice_r13.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r13.invoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r13.orderno);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r13.customername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r13.due);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r13.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](invoice_r13.balancedue);
  }
}
class InvoiceListComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
  }
  // invoices = this.INVOICE;
  // invoices1 = this.INVOICE1;
  // invoices2 = this.INVOICE2;
  // invoices3 = this.INVOICE3;
  // invoices4 = this.INVOICE4;
  getTabledata() {
    this.INVOICE = this.data['invoice'];
    this.INVOICE1 = this.data['invoice1'];
    this.INVOICE2 = this.data['invoice2'];
    this.INVOICE3 = this.data['invoice3'];
    this.INVOICE4 = this.data['invoice4'];
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Invoice List',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Invoice',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Invoice List',
        'isLink': false
      }]
    };
    this.tableApiservice.getInvoiceTableData().subscribe(Response => {
      this.data = Response;
      this.getTabledata();
    });
  }
}
InvoiceListComponent.ɵfac = function InvoiceListComponent_Factory(t) {
  return new (t || InvoiceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
InvoiceListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: InvoiceListComponent,
  selectors: [["app-invoice-list"]],
  decls: 139,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-head"], [1, "card-header"], [1, "card-title"], [1, "heading-elements"], [1, "btn", "btn-primary", "btn-sm"], [1, "feather", "ft-plus", "white"], ["ngbDropdown", "", 1, "dropdown"], ["id", "btnSearchDrop1", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", "ngbDropdownToggle", "", 1, "btn", "btn-warning", "btn-sm", "dropdown-toggle", "dropdown-menu-right"], [1, "feather", "ft-download-cloud", "white"], ["ngbDropdownMenu", "", "aria-labelledby", "btnSearchDrop1", 1, "dropdown-menu", "mt-1", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "la", "la-calendar"], [1, "la", "la-random"], [1, "la", "la-bar-chart"], [1, "la", "la-user"], [1, "btn", "btn-success", "btn-sm"], [1, "feather", "ft-settings", "white"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], ["id", "invoices-list", 1, "table", "table-white-space", "table-bordered", "row-grouping", "display", "no-wrap", "icheck", "table-middle"], [1, "group"], [1, "badge", "badge-success", "badge-lg"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-warning", "badge-lg"], [1, "badge", "badge-danger", "badge-lg"], ["id", "btnSearchDrop27", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle", "dropdown-menu-right", 3, "routerLink"], [1, "feather", "ft-settings"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "table_dropdown"], [1, "la", "la-eye"], [1, "la", "la-pencil"], [1, "la", "la-check"], [1, "feather", "ft-upload"], [1, "la", "la-trash"]],
  template: function InvoiceListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Invoices");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Create Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 14)(17, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 17)(20, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Priority ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Balance Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Assign to");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25)(35, "div", 26)(36, "div", 27)(37, "table", 28)(38, "thead")(39, "tr")(40, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Invoice #");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Order No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Balance Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tbody")(57, "tr", 29)(58, "td")(59, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Paid");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "td")(62, "td")(63, "td")(64, "td")(65, "td")(66, "td")(67, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, InvoiceListComponent_tr_68_Template, 35, 7, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "tbody")(70, "tr", 29)(71, "td")(72, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Overdue By 1-15 Days ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "td")(75, "td")(76, "td")(77, "td")(78, "td")(79, "td")(80, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, InvoiceListComponent_tr_81_Template, 35, 7, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "tbody")(83, "tr", 29)(84, "td")(85, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Overdue By 16-30 Days ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "td")(88, "td")(89, "td")(90, "td")(91, "td")(92, "td")(93, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, InvoiceListComponent_tr_94_Template, 35, 7, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tbody")(96, "tr", 29)(97, "td")(98, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Overdue By 31-45 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "td")(101, "td")(102, "td")(103, "td")(104, "td")(105, "td")(106, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](107, InvoiceListComponent_tr_107_Template, 35, 7, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "tbody")(109, "tr", 29)(110, "td")(111, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Overdue By 45+ Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "td")(114, "td")(115, "td")(116, "td")(117, "td")(118, "td")(119, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, InvoiceListComponent_tr_120_Template, 35, 7, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "tfoot")(122, "tr")(123, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Invoice #");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Order No");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Balance Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.INVOICE);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.INVOICE1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.INVOICE2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.INVOICE3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.INVOICE4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["[_nghost-%COMP%]     .group {\n    background-color: #EDEDED !important;\n\n\n}\n\n[_nghost-%COMP%]     .table tbody+tbody {\n    border-top: 0px solid #626e82;\n}\n\n[_nghost-%COMP%]     .btn-primary {\n    margin-right: 3px;\n}\n\n[_nghost-%COMP%]     .btn-warning {\n    margin-right: 3px;\n}\n\n.show[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%] {\n  transform: translate3d(-140px, 0px, 0px) !important;\n}\n\n.table_dropdown[_ngcontent-%COMP%] {\n  top: 40px !important;\n  left: 40px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DOzs7QUFHeEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6Imludm9pY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRCAhaW1wb3J0YW50O1xuXG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZSB0Ym9keSt0Ym9keSB7XG4gICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICM2MjZlODI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLXByaW1hcnkge1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi13YXJuaW5nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLnNob3c+LmRyb3Bkb3duLW1lbnUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNDBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZV9kcm9wZG93biB7XG4gIHRvcDogNDBweCAhaW1wb3J0YW50O1xuICBsZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9pbnZvaWNlL2ludm9pY2UtbGlzdC9pbnZvaWNlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQzs7O0FBR3hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQSxvZ0NBQW9nQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQgIWltcG9ydGFudDtcblxuXG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFibGUgdGJvZHkrdGJvZHkge1xuICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjNjI2ZTgyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1wcmltYXJ5IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4td2FybmluZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5zaG93Pi5kcm9wZG93bi1tZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTQwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xufVxuXG4udGFibGVfZHJvcGRvd24ge1xuICB0b3A6IDQwcHggIWltcG9ydGFudDtcbiAgbGVmdDogNDBweCAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 22034:
/*!************************************************************************************!*\
  !*** ./src/app/content/pages/invoice/invoice-summary/invoice-summary.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceSummaryComponent": () => (/* binding */ InvoiceSummaryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_services/chart.api */ 19383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);












function InvoiceSummaryComponent_div_57_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", element_r2.sales, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r2.receipts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r2.due);
  }
}
function InvoiceSummaryComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "m-card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("reloadFunction", function InvoiceSummaryComponent_div_57_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.reloadSalesRecieptsDues($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Sales, Receipts and Dues ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 34)(6, "div", 35)(7, "table", 36)(8, "thead")(9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Receipts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Due");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, InvoiceSummaryComponent_div_57_tr_18_Template, 10, 4, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.Sales);
  }
}
class InvoiceSummaryComponent {
  constructor(chartApiservice) {
    this.chartApiservice = chartApiservice;
  }
  getInvoicechart() {
    this.Sales = this.data['sales'];
    this.chartOption = {
      grid: {
        x: 40,
        x2: 40,
        y: 35,
        y2: 25
      },
      // Add tooltip
      tooltip: {
        trigger: 'axis',
        enterable: false
      },
      // Add legend
      legend: {
        data: ['Total Sales', 'Total Receipts', 'Total Expenses']
      },
      // Add custom colors
      color: ['#3BAFDA', '#37BC9B', '#F6BB42'],
      // Horizontal axis
      xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }],
      // Vertical axis
      yAxis: [{
        type: 'value'
      }],
      // Add series
      series: [{
        name: 'Total Sales',
        type: 'bar',
        data: this.data.TotalSales.TotalSales[0]
      }, {
        name: 'Total Receipts',
        type: 'bar',
        data: this.data.TotalReceipts.TotalReceipts[0]
      }, {
        name: 'Total Expenses',
        type: 'bar',
        data: this.data.TotalExpenses.TotalExpenses[0]
      }]
    };
    this.ExpenseschartOption = {
      legend: {
        orient: 'horizontal',
        x: 'center',
        data: ['Internet', 'Infrastructure', 'Party', 'Assets', 'Electricity']
      },
      // Add custom colors
      color: ['#FECEA8', '#FF847C', '#E84A5F', '#2A363B', '#99B898'],
      // Display toolbox
      toolbox: {
        show: true,
        orient: 'vertical'
      },
      // Enable drag recalculate
      // calculable: true,
      // Add series
      series: [{
        name: 'Browsers',
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['50%', '57.5%'],
        itemStyle: {
          normal: {
            label: {
              show: true
            },
            labelLine: {
              show: true
            }
          },
          emphasis: {
            label: {
              show: true,
              formatter: '{b}' + '\n\n' + '{c} ({d}%)',
              position: 'center',
              textStyle: {
                fontSize: '17',
                fontWeight: '500'
              }
            }
          }
        },
        data: [{
          value: 335,
          name: 'Internet'
        }, {
          value: 1548,
          name: 'Infrastructure'
        }, {
          value: 135,
          name: 'Party'
        }, {
          value: 234,
          name: 'Assets'
        }, {
          value: 650,
          name: 'Electricity'
        }]
      }]
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Invoice Summary',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Invoice',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Invoice Summary',
        'isLink': false
      }]
    };
    this.chartApiservice.getInvoiceData().subscribe(Response => {
      this.data = Response;
      this.getInvoicechart();
    });
  }
  reloadTotalReceivables() {
    this.blockUITotalReceivables.start('Loading..');
    setTimeout(() => {
      this.blockUITotalReceivables.stop();
    }, 2500);
  }
  reloadSalesRecieptsDues() {
    this.blockUISalesRecieptsDues.start('Loading..');
    setTimeout(() => {
      this.blockUISalesRecieptsDues.stop();
    }, 2500);
  }
}
InvoiceSummaryComponent.ɵfac = function InvoiceSummaryComponent_Factory(t) {
  return new (t || InvoiceSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_0__.ChartApiService));
};
InvoiceSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: InvoiceSummaryComponent,
  selectors: [["app-invoice-summary"]],
  decls: 58,
  vars: 5,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "heading-elements"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-secondary", "btn-sm", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "card-content"], [1, "card-body", "overflow-hidden", "row"], [1, "col-md-9", "col-sm-12", "border-right-grey", "border-right-lighten-2"], ["echarts", "", 1, "height-300", "echart-container", 3, "options"], [1, "col-md-3", "col-sm-12"], [1, "list-group"], [1, "list-group-item", "list-group-item-action", 3, "routerLink"], [1, "list-group-item-heading"], [1, "list-group-item-text", "primary"], [1, "list-group-item-text", "success"], [1, "list-group-item-text", "warning"], ["matchHeight", "card", 1, "row"], [1, "col-lg-6", "col-md-12"], ["type", "button", "id", "dropdownMenuButton2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-secondary", "btn-sm", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton2", 1, "dropdown-menu"], [1, "card-body"], ["echarts", "", 1, "height-250", "echart-container", 3, "options"], ["class", "col-lg-6 col-md-12", 4, "blockUI", "blockUIMessage"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "px-0", "py-0"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"]],
  template: function InvoiceSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sales and Expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " This Fiscal Year ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11)(14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Previous Fiscal Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Last 12 Months");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17)(23, "div", 18)(24, "a", 19)(25, "h5", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "$ 12080.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 19)(30, "h5", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "$ 8500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Total Receipts");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 19)(35, "h5", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "$ 560.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Total Expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 24)(40, "div", 25)(41, "div", 5)(42, "div", 6)(43, "h4", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Your Top Expenses");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 8)(46, "div", 9)(47, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " This Fiscal Year ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 27)(50, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Previous Fiscal Year");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Last 12 Months");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 13)(55, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, InvoiceSummaryComponent_div_57_Template, 19, 2, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.chartOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.ExpenseschartOption);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "salesRecieptsDues")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_3__.MatchHeightDirective, ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["ɵf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2Utc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLCtDQUErQztBQUNqRCIsImZpbGUiOiJpbnZvaWNlLXN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9pbnZvaWNlL2ludm9pY2Utc3VtbWFyeS9pbnZvaWNlLXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUEsZ1pBQWdaIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_8__.BlockUI)('totalReceivables')], InvoiceSummaryComponent.prototype, "blockUITotalReceivables", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_8__.BlockUI)('salesRecieptsDues')], InvoiceSummaryComponent.prototype, "blockUISalesRecieptsDues", void 0);

/***/ }),

/***/ 16406:
/*!**************************************************************************************!*\
  !*** ./src/app/content/pages/invoice/invoice-template/invoice-template.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceTemplateComponent": () => (/* binding */ InvoiceTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);


class InvoiceTemplateComponent {
  constructor() {}
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Invoice Template',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Invoice',
        'isLink': true,
        'link': ''
      }, {
        'name': 'Invoice Template',
        'isLink': false
      }]
    };
  }
}
InvoiceTemplateComponent.ɵfac = function InvoiceTemplateComponent_Factory(t) {
  return new (t || InvoiceTemplateComponent)();
};
InvoiceTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InvoiceTemplateComponent,
  selectors: [["app-invoice-template"]],
  decls: 200,
  vars: 1,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "card"], ["id", "invoice-template", 1, "card-body"], ["id", "invoice-company-details", 1, "row"], [1, "col-md-6", "col-sm-12", "text-center", "text-sm-left"], [1, "media", "row"], [1, "col-12", "col-sm-3", "col-xl-2"], ["src", "../../../assets/images/logo/logo-80x80.png", "alt", "company logo", 1, ""], [1, "col-12", "col-sm-9", "col-xl-10"], [1, "media-body"], [1, "ml-2", "px-0", "list-unstyled"], [1, "text-bold-800"], [1, "col-md-6", "col-sm-12", "text-center", "text-md-right"], [1, "pb-3"], [1, "px-0", "list-unstyled"], [1, "lead", "text-bold-800"], ["id", "invoice-customer-details", 1, "row", "pt-2"], [1, "col-sm-12", "text-center", "text-md-left"], [1, "text-muted"], [1, "col-md-6", "col-sm-12", "text-center", "text-md-left"], ["id", "invoice-items-details", 1, "pt-2"], [1, "row"], [1, "table-responsive", "col-sm-12"], [1, "table"], [1, "text-right"], ["scope", "row"], [1, "col-md-7", "col-sm-12", "text-center", "text-md-left"], [1, "lead"], [1, "col-md-8"], [1, "table-responsive"], [1, "table", "table-borderless", "table-sm"], [1, "col-md-5", "col-sm-12"], [1, "text-bold-800", "text-right"], [1, "pink", "text-right"], [1, "bg-grey", "bg-lighten-4"], [1, "text-center"], ["src", "../../../assets/images/pages/signature-scan.png", "alt", "signature", 1, "height-100"], ["id", "invoice-footer"], [1, "col-md-7", "col-sm-12"], [1, "col-md-5", "col-sm-12", "text-center"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "my-1"], [1, "la", "la-paper-plane-o"]],
  template: function InvoiceTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12)(13, "div", 13)(14, "ul", 14)(15, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Modern Creative Studio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "4025 Oak Avenue,");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Melbourne,");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Florida 32940,");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "USA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16)(26, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "INVOICE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "# INV-001001");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 18)(31, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Balance Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "$ 12,000.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20)(36, "div", 21)(37, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Bill To");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23)(40, "ul", 18)(41, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Mr. Bret Lezama");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "4879 Westfall Avenue,");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Albuquerque,");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "New Mexico-87102.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 16)(50, "p")(51, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Invoice Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " 06/05/2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p")(55, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Terms :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Due on Receipt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p")(59, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Due Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " 10/05/2017");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 24)(63, "div", 25)(64, "div", 26)(65, "table", 27)(66, "thead")(67, "tr")(68, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Item & Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tbody")(79, "tr")(80, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td")(83, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Create PSD for mobile APP");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Simply dummy text of the printing and typesetting industry.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "$ 20.00/hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "120");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "$ 2400.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "tr")(94, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td")(97, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "iOS Application Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Pellentesque maximus feugiat lorem at cursus.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "$ 25.00/hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "260");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "$ 6500.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "tr")(108, "th", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "td")(111, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "WordPress Template Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Vestibulum euismod est eu elit convallis.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "$ 20.00/hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "300");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "$ 6000.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 25)(122, "div", 30)(123, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Payment Methods:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 25)(126, "div", 32)(127, "div", 33)(128, "table", 34)(129, "tbody")(130, "tr")(131, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Bank name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "ABC Bank, USA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "tr")(136, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Acc name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "Amanda Orton");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "tr")(141, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "IBAN:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "FGS165461646546AA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "tr")(146, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "SWIFT code:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "BTNPP34");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 35)(151, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Total due");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 33)(154, "table", 27)(155, "tbody")(156, "tr")(157, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Sub Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "$ 14,900.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "tr")(162, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "TAX (12%)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "td", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "$ 1,788.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "tr")(167, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "td", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " $ 16,688.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "tr")(172, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Payment Made");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "td", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "(-) $ 4,688.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "tr", 38)(177, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Balance Due");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "$ 12,000.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 39)(182, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Authorized person");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "img", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Amanda Orton");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Managing Director");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 41)(190, "div", 25)(191, "div", 42)(192, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "Terms & Condition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "You know, being a test pilot isn't always the healthiest business in the world. We predict too much for the next year and yet far too little for the next 10.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 43)(197, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, " Send Invoice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYWdlcy9pbnZvaWNlL2ludm9pY2UtdGVtcGxhdGUvaW52b2ljZS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 74241:
/*!*********************************************************!*\
  !*** ./src/app/content/pages/invoice/invoice.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceModule": () => (/* binding */ InvoiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ 24024);
/* harmony import */ var _invoice_summary_invoice_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-summary/invoice-summary.component */ 22034);
/* harmony import */ var _invoice_template_invoice_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-template/invoice-template.component */ 16406);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ 31548);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ 86196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);

















class InvoiceModule {}
InvoiceModule.ɵfac = function InvoiceModule_Factory(t) {
  return new (t || InvoiceModule)();
};
InvoiceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: InvoiceModule
});
InvoiceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsModule.forRoot({
    echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 72750))
  }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_5__.MatchHeightModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_12__.BlockUIModule.forRoot({
    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_6__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild([{
    path: 'invoice-list',
    component: _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_0__.InvoiceListComponent
  }, {
    path: 'invoice-summary',
    component: _invoice_summary_invoice_summary_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceSummaryComponent
  }, {
    path: 'invoice-template',
    component: _invoice_template_invoice_template_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceTemplateComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](InvoiceModule, {
    declarations: [_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_0__.InvoiceListComponent, _invoice_summary_invoice_summary_component__WEBPACK_IMPORTED_MODULE_1__.InvoiceSummaryComponent, _invoice_template_invoice_template_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceTemplateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_9__.NgxEchartsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_5__.MatchHeightModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_12__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_content_pages_invoice_invoice_module_ts.js.map