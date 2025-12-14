"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_forms_form-elements_form-elements_module_ts"],{

/***/ 49805:
/*!*****************************************************!*\
  !*** ./src/app/_services/ng-select-data.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgSelectDataService": () => (/* binding */ NgSelectDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class NgSelectDataService {
  constructor(http) {
    this.http = http;
  }
  getPeople(term = null) {
    let items = getMockCity();
    if (term) {
      items = items.filter(x => x.item_text.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(items).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(500));
  }
}
NgSelectDataService.ɵfac = function NgSelectDataService_Factory(t) {
  return new (t || NgSelectDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
NgSelectDataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NgSelectDataService,
  factory: NgSelectDataService.ɵfac,
  providedIn: 'root'
});
function getMockCity() {
  return [{
    item_id: 1,
    item_text: 'Alaska'
  }, {
    item_id: 2,
    item_text: 'California'
  }, {
    item_id: 3,
    item_text: 'Colorado'
  }, {
    item_id: 4,
    item_text: 'New Mexico'
  }, {
    item_id: 5,
    item_text: 'Alabama'
  }, {
    item_id: 6,
    item_text: 'Connecticut'
  }, {
    item_id: 7,
    item_text: 'New York'
  }];
}

/***/ }),

/***/ 88363:
/*!**********************************************************************************************!*\
  !*** ./src/app/content/forms/form-elements/checkboxes-radios/checkboxes-radios.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesRadiosComponent": () => (/* binding */ CheckboxesRadiosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);







function CheckboxesRadiosComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "m-card", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function CheckboxesRadiosComponent_div_11_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.reloadBasicTable($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Basic Table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 127)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " I am unchecked Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 129)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " I am checked Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 131)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " I am disabled Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 131)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " I am checked & disabled Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
function CheckboxesRadiosComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "m-card", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function CheckboxesRadiosComponent_div_12_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.reloadBasicRightCheckbox($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Basic Right Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Simple Right side checkboxes with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".right-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " wrapper class.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 26)(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " I am unchecked Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 26)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " I am checked Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 32)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " I am disabled Checkbox ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 32)(23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " I am checked & disabled Checkbox ");
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
class CheckboxesRadiosComponent {
  constructor() {
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Checkboxes and Radio Buttons',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Checkboxes and Radio Buttons',
        'isLink': false
      }]
    };
  }
  reloadBasicTable() {
    this.blockUIBasicTable.start('Loading..');
    setTimeout(() => {
      this.blockUIBasicTable.stop();
    }, 2500);
  }
  reloadBasicRightCheckbox() {
    this.blockUIBasicRightCheckbox.start('Loading..');
    setTimeout(() => {
      this.blockUIBasicRightCheckbox.stop();
    }, 2500);
  }
}
CheckboxesRadiosComponent.ɵfac = function CheckboxesRadiosComponent_Factory(t) {
  return new (t || CheckboxesRadiosComponent)();
};
CheckboxesRadiosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CheckboxesRadiosComponent,
  selectors: [["app-checkboxes-radios"]],
  decls: 424,
  vars: 5,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "basic-checkbox", 1, "basic-checkbox"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], ["matchHeight", "card", 1, "row"], ["class", "col-xl-6 col-lg-12", 4, "blockUI", "blockUIMessage"], [1, "col-xl-6", "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "customCheck", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["type", "checkbox", "checked", "", "name", "customCheck", "id", "customCheck2", 1, "custom-control-input"], ["for", "customCheck2", 1, "custom-control-label"], ["type", "checkbox", "name", "customCheck", "disabled", "", "id", "customCheck3", 1, "custom-control-input"], ["for", "customCheck3", 1, "custom-control-label"], ["type", "checkbox", "checked", "", "name", "customCheck4", "id", "customCheck4", "disabled", "", 1, "custom-control-input"], ["for", "fixed-layout", 1, "custom-control-label"], [1, "right-checkbox"], [1, "custom-control", "custom-checkbox", "pl-0"], ["type", "checkbox", "name", "customCheckRight", "id", "customCheckRight1", 1, "custom-control-input"], ["for", "customCheckRight1", 1, "custom-control-label", "w-100"], ["type", "checkbox", "name", "customCheckRight", "id", "customCheckRight2", "checked", "", 1, "custom-control-input"], ["for", "customCheckRight2", 1, "custom-control-label", "w-100"], [1, "right-checkbox", "disabled"], ["type", "checkbox", "name", "customCheckRight", "id", "customCheckRight3", "disabled", "", 1, "custom-control-input"], ["for", "customCheckRight3", 1, "custom-control-label", "w-100"], ["type", "checkbox", "checked", "", "name", "customCheckRight", "id", "customCheckRight4", "disabled", "", 1, "custom-control-input"], ["for", "customCheckRight4", 1, "custom-control-label", "w-100"], ["id", "basic-radios", 1, "basic-radios"], [1, "radio"], ["type", "radio", "name", "radio", "value", ""], ["type", "radio", "name", "radio", "value", "", "checked", ""], [1, "radio", "disabled"], ["type", "radio", "name", "radio", "value", "", "disabled", ""], [1, "right-radio"], ["type", "radio", "name", "radio1", "value", ""], ["type", "radio", "name", "radio1", "value", "", "checked", ""], [1, "right-radio", "disabled"], ["type", "radio", "name", "radio1", "value", "", "disabled", ""], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "customRadio", "id", "customRadio1", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], ["type", "radio", "name", "customRadio", "id", "customRadio2", "checked", "", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], ["type", "radio", "name", "customRadio", "id", "customRadio3", "disabled", "", 1, "custom-control-input"], ["for", "customRadio3", 1, "custom-control-label"], [1, "custom-control", "custom-radio", "pl-0"], ["type", "radio", "name", "customRadioRight", "id", "customRadioRight1", 1, "custom-control-input"], ["for", "customRadioRight1", 1, "custom-control-label", "w-100"], ["type", "radio", "name", "customRadioRight", "id", "customRadioRight2", "checked", "", 1, "custom-control-input"], ["for", "customRadioRight2", 1, "custom-control-label", "w-100"], ["type", "radio", "name", "customRadioRight", "id", "customRadioRight3", "disabled", "", 1, "custom-control-input"], ["for", "customRadioRight3", 1, "custom-control-label", "w-100"], [1, "input-type-options"], [1, "d-inline-block", "custom-control", "custom-checkbox", "mr-1"], ["type", "checkbox", "name", "colorCheck", "id", "colorCheck1", 1, "custom-control-input", "bg-primary"], ["for", "colorCheck1", 1, "custom-control-label"], ["type", "checkbox", "name", "colorCheck", "id", "colorCheck2", "checked", "", 1, "custom-control-input", "bg-success"], ["for", "colorCheck2", 1, "custom-control-label"], ["type", "checkbox", "name", "colorCheck", "id", "colorCheck3", 1, "custom-control-input", "bg-danger"], ["for", "colorCheck3", 1, "custom-control-label"], ["type", "checkbox", "name", "colorCheck", "id", "colorCheck4", "checked", "", 1, "custom-control-input", "bg-info"], ["for", "colorCheck4", 1, "custom-control-label"], ["type", "checkbox", "name", "colorCheck", "id", "colorCheck5", 1, "custom-control-input", "bg-warning"], ["for", "colorCheck5", 1, "custom-control-label"], ["type", "checkbox", "name", "colorCheck", "id", "colorCheck6", 1, "custom-control-input", "bg-purple"], ["for", "colorCheck6", 1, "custom-control-label"], [1, "color-radio"], [1, "d-inline-block", "custom-control", "custom-radio", "mr-1"], ["type", "radio", "name", "colorRadio", "id", "colorRadio1", 1, "custom-control-input", "bg-primary"], ["for", "colorRadio1", 1, "custom-control-label"], ["type", "radio", "name", "colorRadio", "id", "colorRadio2", 1, "custom-control-input", "bg-success"], ["for", "colorRadio2", 1, "custom-control-label"], ["type", "radio", "name", "colorRadio", "id", "colorRadio3", 1, "custom-control-input", "bg-danger"], ["for", "colorRadio3", 1, "custom-control-label"], ["type", "radio", "name", "colorRadio", "id", "colorRadio4", 1, "custom-control-input", "bg-info"], ["for", "colorRadio4", 1, "custom-control-label"], ["type", "radio", "checked", "", "name", "colorRadio", "id", "colorRadio5", 1, "custom-control-input", "bg-warning"], ["for", "colorRadio5", 1, "custom-control-label"], ["type", "radio", "name", "colorRadio", "id", "colorRadio6", 1, "custom-control-input", "bg-pink"], ["for", "colorRadio6", 1, "custom-control-label"], [1, "inline-checkbox"], [1, "col-lg-12"], ["type", "checkbox", "name", "colorCheck", "id", "checkbox1", 1, "custom-control-input"], ["for", "checkbox1", 1, "custom-control-label"], ["type", "checkbox", "name", "colorCheck", "checked", "", "id", "checkbox2", 1, "custom-control-input"], ["for", "checkbox2", 1, "custom-control-label"], ["type", "checkbox", "name", "colorCheck", "id", "checkbox3", "disabled", "", 1, "custom-control-input"], ["for", "checkbox3", 1, "custom-control-label"], [1, "inline-radio"], ["type", "radio", "name", "colorRadio", "id", "radio1", 1, "custom-control-input"], ["for", "radio1", 1, "custom-control-label"], ["type", "radio", "name", "colorRadio", "id", "radio2", "checked", "", 1, "custom-control-input"], ["for", "radio2", "checked", "", 1, "custom-control-label"], ["type", "radio", "name", "colorRadio", "id", "radio3", "disabled", "", 1, "custom-control-input"], ["for", "radio3", "disabled", "", 1, "custom-control-label"], [1, "image-checkbox"], [1, "form-group"], [1, "btn"], ["type", "checkbox", "name", "chk1", "id", "item1", "value", "val1", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-1.png", "alt", "...", 1, "check", "img-thumbnail"], ["type", "checkbox", "name", "chk2", "id", "item2", "value", "val2", "checked", "", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-2.png", "alt", "...", 1, "img-thumbnail"], ["type", "checkbox", "name", "chk3", "id", "item3", "value", "val3", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-3.png", "alt", "...", 1, "check", "img-thumbnail"], ["type", "checkbox", "name", "chk4", "id", "item4", "value", "val4", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-4.png", "alt", "...", 1, "img-thumbnail"], ["type", "checkbox", "name", "chk5", "id", "item5", "value", "val1", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-5.png", "alt", "...", 1, "img-thumbnail"], ["type", "checkbox", "name", "chk6", "id", "item6", "value", "val2", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-6.png", "alt", "...", 1, "check", "img-thumbnail"], ["type", "checkbox", "name", "chk7", "id", "item7", "value", "val3", "checked", "", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-7.png", "alt", "...", 1, "img-thumbnail"], ["type", "checkbox", "name", "chk8", "id", "item8", "value", "val4", 1, "hidden"], ["src", "../../../assets/images/portrait/small/avatar-s-8.png", "alt", "...", 1, "img-thumbnail"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "checkboxsas"], ["type", "checkbox", "value", ""], [1, "checkbox"], ["type", "checkbox", "value", "", "checked", ""], [1, "checkbox", "disabled"], ["type", "checkbox", "value", "", "disabled", ""], ["type", "checkbox", "value", "", "disabled", "", "checked", ""]],
  template: function CheckboxesRadiosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Simple Checkboxes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CheckboxesRadiosComponent_div_11_Template, 21, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, CheckboxesRadiosComponent_div_12_Template, 26, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Custom Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, ".custom-input.custom-checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " as a single wrapper & add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "<span class=\"custom-control-indicator\"></span>");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " for better output. Also use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, ".custom-control-description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " class for checkbox description.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div")(33, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Check this custom checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div")(38, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Custom checkbox checked");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div")(43, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Custom checkbox disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div")(48, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Custom checkbox checked & disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 11)(53, "div", 12)(54, "div", 13)(55, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Custom Right Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 15)(58, "div", 16)(59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, ".custom-input.custom-checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " as a single wrapper & add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "<span class=\"custom-control-indicator\"></span>");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " for better output & wrap with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "right-checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " for right aligned checkbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 26)(71, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Custom checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 26)(76, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](77, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Custom checkbox checked");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 32)(81, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Custom checkbox disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 32)(86, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Custom checkbox checked & disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "section", 37)(91, "div", 6)(92, "div", 7)(93, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Simple Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 9)(96, "div", 11)(97, "div", 12)(98, "div", 13)(99, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Basic Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 15)(102, "div", 16)(103, "div", 38)(104, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, " I am unchecked Radio Button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 38)(108, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " I am checked Radio Button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 41)(112, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " I am disabled Radio Button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 11)(116, "div", 12)(117, "div", 13)(118, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Basic Right Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 15)(121, "div", 16)(122, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Simple Radio Button with right align using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, ".right-radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 43)(128, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, " I am unchecked Radio Button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 43)(132, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, " I am checked Radio Button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 46)(136, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, " I am disabled Radio Button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 9)(140, "div", 11)(141, "div", 12)(142, "div", 13)(143, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Custom Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 15)(146, "div", 16)(147, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, ".custom-input.custom-radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, " as a single wrapper & add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "<span class=\"custom-control-indicator\"></span>");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, " for better output. Also use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](156, ".custom-control-description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, " class for radio description. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div")(159, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Toggle this custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div")(164, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Or toggle this other custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div")(169, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Or toggle this other custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 11)(174, "div", 12)(175, "div", 13)(176, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "Custom Right Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 15)(179, "div", 16)(180, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](181, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, ".c-input.c-radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " as a single wrapper & add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "<span class=\"c-indicator\"></span>");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, " for better output & wrap with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "right-radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, " for right aligned radio.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 43)(192, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Toggle this custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 43)(197, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "Or toggle this other custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 46)(202, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](203, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](205, "Or toggle this other custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "section", 62)(207, "div", 6)(208, "div", 7)(209, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Color Checkboxes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, ".bg-COLOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, " to span to set according to theme color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 9)(217, "div", 11)(218, "div", 12)(219, "div", 13)(220, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "Template Color Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 15)(223, "div", 16)(224, "div")(225, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](226, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "label", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](228, "Primary Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "label", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Success Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "input", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Danger Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 11)(238, "div", 12)(239, "div", 13)(240, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](241, "Another Template color checkbox example");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 15)(243, "div", 16)(244, "div")(245, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](246, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "label", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "Information Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](252, "Warning Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](254, "input", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](256, "Custom color purple");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "section", 76)(258, "div", 6)(259, "div", 7)(260, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "Custom Bootstrap Color Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, ".bg-COLOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, " to span to set according to theme color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "div", 9)(268, "div", 11)(269, "div", 12)(270, "div", 13)(271, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, "Template color Radio Button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 15)(274, "div", 16)(275, "div")(276, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](277, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "label", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Primary Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](281, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "label", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Success Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](285, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "label", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, "Danger Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "div", 11)(289, "div", 12)(290, "div", 13)(291, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Another Template color Radio example");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 15)(294, "div", 16)(295, "div")(296, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](297, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Information Radiobox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](301, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "label", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "Warning Radiobox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](305, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "label", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, "Custom color pink");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "section", 90)(309, "div", 6)(310, "div", 7)(311, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, "Inline Checkboxes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](316, ".inline");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, " class to the checkbox wrapper for inline checkbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "div", 6)(319, "div", 91)(320, "div", 12)(321, "div", 13)(322, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](323, "Custom Inline Checkboxes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "div", 15)(325, "div", 16)(326, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](327, "input", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "label", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](329, "Unchecked custom checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](331, "input", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "label", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "Checked custom checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](335, "input", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](336, "label", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](337, "Disabled custom checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "section", 98)(339, "div", 6)(340, "div", 7)(341, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "Inline Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](344, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, ".inline");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, " class to the radio wrapper.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 9)(349, "div", 91)(350, "div", 12)(351, "div", 13)(352, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "Custom Inline Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "div", 15)(355, "div", 16)(356, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](357, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "label", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "Unchecked custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](361, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "label", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "Checked custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "input", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "label", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Disabled custom radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "section", 105)(369, "div", 6)(370, "div", 7)(371, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "Image Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "div", 6)(374, "div", 11)(375, "div", 12)(376, "div", 13)(377, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](378, "Default Image Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "div", 15)(380, "div", 16)(381, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, ".img-thumbnail");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](385, " class to <img> tag after input type checkbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 106)(387, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](388, "input", 108)(389, "img", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](390, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](391, "input", 110)(392, "img", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](394, "input", 112)(395, "img", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](397, "input", 114)(398, "img", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "div", 11)(400, "div", 12)(401, "div", 13)(402, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](403, "Basic Image Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "div", 15)(405, "div", 16)(406, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](407, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](409, ".btn-COLORNAME");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](410, " class to wrapper to use theme colors.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "div", 106)(412, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](413, "input", 116)(414, "img", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](416, "input", 118)(417, "img", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](418, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](419, "input", 120)(420, "img", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](421, "label", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](422, "input", 122)(423, "img", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "basicTable")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "basicRightCheckbox")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__.MatchHeightDirective, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["ɵf"]],
  styles: [".right-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%], .right-checkbox[_ngcontent-%COMP%]   .custom-control-indicator[_ngcontent-%COMP%], .right-checkbox[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   .custom-control-indicator[_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%] {\n    left: auto;\n    top: auto;\n    position: absolute;\n}\n\n.right-checkbox[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%], .right-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before, .right-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after, .right-checkbox[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%], .right-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before, .right-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after, .right-radio[_ngcontent-%COMP%]   input[type='radio'][_ngcontent-%COMP%] {\n    left: auto;\n    right: 2%;\n}\n\n.radio.right-radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    padding-left: 0;\n}\n\n\n.skin[_ngcontent-%COMP%]   [class*='icheckbox_'][_ngcontent-%COMP%], .skin[_ngcontent-%COMP%]   [class*='iradio_'][_ngcontent-%COMP%], .icheck_square[_ngcontent-%COMP%]   [class*='icheckbox_'][_ngcontent-%COMP%], .icheck_square[_ngcontent-%COMP%]   [class*='iradio_'][_ngcontent-%COMP%] {\n    margin-right: 0.6rem;\n}\n\n.skin[_ngcontent-%COMP%]   [class*='icheckbox_line'][_ngcontent-%COMP%], .skin[_ngcontent-%COMP%]   [class*='iradio_line'][_ngcontent-%COMP%] {\n    margin-bottom: 0.6rem;\n}\n\n.state[class*='icheckbox_'][_ngcontent-%COMP%]:hover, .state[class*='iradio_'][_ngcontent-%COMP%]:hover {\n    cursor: default;\n}\n\n\ninput[type='checkbox'][_ngcontent-%COMP%]:checked + img.img-thumbnail[_ngcontent-%COMP%] {\n    background-color: #666EE8;\n    color: #999966;\n    border-color: #666EE8;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n    background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94ZXMtcmFkaW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQU1JLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7OztJQVFJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLFdBQVc7QUFDWDs7OztJQUlJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRCIsImZpbGUiOiJjaGVja2JveGVzLXJhZGlvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LWNoZWNrYm94IGlucHV0W3R5cGU9J2NoZWNrYm94J10sXG4ucmlnaHQtY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWluZGljYXRvcixcbi5yaWdodC1jaGVja2JveCBpbnB1dFt0eXBlPSdyYWRpbyddLFxuLnJpZ2h0LXJhZGlvIGlucHV0W3R5cGU9J2NoZWNrYm94J10sXG4ucmlnaHQtcmFkaW8gLmN1c3RvbS1jb250cm9sLWluZGljYXRvcixcbi5yaWdodC1yYWRpbyBpbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHRvcDogYXV0bztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yaWdodC1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuLnJpZ2h0LWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLnJpZ2h0LWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIsXG4ucmlnaHQtY2hlY2tib3ggaW5wdXRbdHlwZT0ncmFkaW8nXSxcbi5yaWdodC1yYWRpbyBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuLnJpZ2h0LXJhZGlvIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLnJpZ2h0LXJhZGlvIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIsXG4ucmlnaHQtcmFkaW8gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMiU7XG59XG5cbi5yYWRpby5yaWdodC1yYWRpbyBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4vKiBpQ2hlY2sgKi9cbi5za2luIFtjbGFzcyo9J2ljaGVja2JveF8nXSxcbi5za2luIFtjbGFzcyo9J2lyYWRpb18nXSxcbi5pY2hlY2tfc3F1YXJlIFtjbGFzcyo9J2ljaGVja2JveF8nXSxcbi5pY2hlY2tfc3F1YXJlIFtjbGFzcyo9J2lyYWRpb18nXSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XG59XG5cbi5za2luIFtjbGFzcyo9J2ljaGVja2JveF9saW5lJ10sXG4uc2tpbiBbY2xhc3MqPSdpcmFkaW9fbGluZSddIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG59XG5cbi5zdGF0ZVtjbGFzcyo9J2ljaGVja2JveF8nXTpob3Zlcixcbi5zdGF0ZVtjbGFzcyo9J2lyYWRpb18nXTpob3ZlciB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKiBJbWFnZSBDaGVja2JveCBzZWxlY3RlZCovXG5pbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQraW1nLmltZy10aHVtYm5haWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjZFRTg7XG4gICAgY29sb3I6ICM5OTk5NjY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjY2RUU4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWVsZW1lbnRzL2NoZWNrYm94ZXMtcmFkaW9zL2NoZWNrYm94ZXMtcmFkaW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQU1JLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7OztJQVFJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBLFdBQVc7QUFDWDs7OztJQUlJLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQSx3NEVBQXc0RSIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1jaGVja2JveCBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuLnJpZ2h0LWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbmRpY2F0b3IsXG4ucmlnaHQtY2hlY2tib3ggaW5wdXRbdHlwZT0ncmFkaW8nXSxcbi5yaWdodC1yYWRpbyBpbnB1dFt0eXBlPSdjaGVja2JveCddLFxuLnJpZ2h0LXJhZGlvIC5jdXN0b20tY29udHJvbC1pbmRpY2F0b3IsXG4ucmlnaHQtcmFkaW8gaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gICAgbGVmdDogYXV0bztcbiAgICB0b3A6IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmlnaHQtY2hlY2tib3ggaW5wdXRbdHlwZT0nY2hlY2tib3gnXSxcbi5yaWdodC1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5yaWdodC1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyLFxuLnJpZ2h0LWNoZWNrYm94IGlucHV0W3R5cGU9J3JhZGlvJ10sXG4ucmlnaHQtcmFkaW8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSxcbi5yaWdodC1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcbi5yaWdodC1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyLFxuLnJpZ2h0LXJhZGlvIGlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDIlO1xufVxuXG4ucmFkaW8ucmlnaHQtcmFkaW8gbGFiZWwge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLyogaUNoZWNrICovXG4uc2tpbiBbY2xhc3MqPSdpY2hlY2tib3hfJ10sXG4uc2tpbiBbY2xhc3MqPSdpcmFkaW9fJ10sXG4uaWNoZWNrX3NxdWFyZSBbY2xhc3MqPSdpY2hlY2tib3hfJ10sXG4uaWNoZWNrX3NxdWFyZSBbY2xhc3MqPSdpcmFkaW9fJ10ge1xuICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xufVxuXG4uc2tpbiBbY2xhc3MqPSdpY2hlY2tib3hfbGluZSddLFxuLnNraW4gW2NsYXNzKj0naXJhZGlvX2xpbmUnXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuXG4uc3RhdGVbY2xhc3MqPSdpY2hlY2tib3hfJ106aG92ZXIsXG4uc3RhdGVbY2xhc3MqPSdpcmFkaW9fJ106aG92ZXIge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLyogSW1hZ2UgQ2hlY2tib3ggc2VsZWN0ZWQqL1xuaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkK2ltZy5pbWctdGh1bWJuYWlsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2RUU4O1xuICAgIGNvbG9yOiAjOTk5OTY2O1xuICAgIGJvcmRlci1jb2xvcjogIzY2NkVFODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('basicTable')], CheckboxesRadiosComponent.prototype, "blockUIBasicTable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('basicRightCheckbox')], CheckboxesRadiosComponent.prototype, "blockUIBasicRightCheckbox", void 0);

/***/ }),

/***/ 26257:
/*!****************************************************************************************!*\
  !*** ./src/app/content/forms/form-elements/extendedinputs/extendedinputs.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtendedinputsComponent": () => (/* binding */ ExtendedinputsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-custom-validators */ 79512);











const _c0 = ["f"];
const _c1 = ["vform"];
function ExtendedinputsComponent_div_7_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "dateISO error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "maxDate error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "minDate error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "required error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "minlength error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "required error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "rangelength error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "number error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "max error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "min error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "pattern error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "equal error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "notEqual error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "required error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "equalTo error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "required error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "notEqualTo error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "gt error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "lt error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtendedinputsComponent_div_7_small_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "url error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function () {
  return [5, 9];
};
function ExtendedinputsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function ExtendedinputsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r47.reloadInputMask($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Input Mask ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ExtendedinputsComponent_div_7_Template_form_ngSubmit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r49.onCustomFormSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 14)(9, "div", 15)(10, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17)(13, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ExtendedinputsComponent_div_7_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.popupModel = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 20)(16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExtendedinputsComponent_div_7_Template_div_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 15)(19, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "DateISO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ExtendedinputsComponent_div_7_small_23_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "MaxDate(2019-06-11)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20)(32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExtendedinputsComponent_div_7_Template_div_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r6.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ExtendedinputsComponent_div_7_small_34_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15)(36, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "MinDate(2019-06-11)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 20)(43, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExtendedinputsComponent_div_7_Template_div_click_43_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r9.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, ExtendedinputsComponent_div_7_small_45_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 15)(47, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ExtendedinputsComponent_div_7_small_51_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 15)(53, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Minlength");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ExtendedinputsComponent_div_7_small_57_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 15)(59, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Maxlength");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ExtendedinputsComponent_div_7_small_63_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 15)(65, "h5", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Rangelength");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ExtendedinputsComponent_div_7_small_69_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 15)(71, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, ExtendedinputsComponent_div_7_small_75_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 15)(77, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, ExtendedinputsComponent_div_7_small_81_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 15)(83, "h5", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](87, ExtendedinputsComponent_div_7_small_87_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 14)(89, "div", 15)(90, "h5", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, ExtendedinputsComponent_div_7_small_94_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 15)(96, "h5", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, ExtendedinputsComponent_div_7_small_100_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 15)(102, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "equal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "input", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, ExtendedinputsComponent_div_7_small_106_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 15)(108, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "notEqual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, ExtendedinputsComponent_div_7_small_112_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 15)(114, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "equalTo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, ExtendedinputsComponent_div_7_small_118_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](122, ExtendedinputsComponent_div_7_small_122_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 15)(124, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "notEqualTo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "input", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](128, ExtendedinputsComponent_div_7_small_128_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "input", 74, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, ExtendedinputsComponent_div_7_small_132_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 15)(134, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Gt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](138, ExtendedinputsComponent_div_7_small_138_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 15)(140, "h5", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Lt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](144, ExtendedinputsComponent_div_7_small_144_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 15)(146, "h5", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "input", 83, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](150, ExtendedinputsComponent_div_7_small_150_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](50);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](56);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](62);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](68);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](74);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](80);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](86);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](93);
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](99);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](105);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](111);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](117);
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](121);
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](127);
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](131);
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](137);
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](143);
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](149);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.popupModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.dateISO);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.errors == null ? null : _r5.errors.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r11.errors == null ? null : _r11.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r13.errors == null ? null : _r13.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r15.errors == null ? null : _r15.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rangeLength", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r17.errors == null ? null : _r17.errors.rangeLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r19.errors == null ? null : _r19.errors.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r21.errors == null ? null : _r21.errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r23.errors == null ? null : _r23.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r25.errors == null ? null : _r25.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r27.errors == null ? null : _r27.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r29.errors == null ? null : _r29.errors.equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r31.errors == null ? null : _r31.errors.notEqual);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r33.errors == null ? null : _r33.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("equalTo", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r35.errors == null ? null : _r35.errors.equalTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r37.errors == null ? null : _r37.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("notEqualTo", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r39.errors == null ? null : _r39.errors.notEqualTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r41.errors == null ? null : _r41.errors.gt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r43.errors == null ? null : _r43.errors.lt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r45.errors == null ? null : _r45.errors.url);
  }
}
class ExtendedinputsComponent {
  constructor() {
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
      'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(24)]),
      'textArea': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      'radioOption': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('Option one is this')
    }, {
      updateOn: 'blur'
    });
    this.breadcrumb = {
      'mainlabel': 'Extended Inputs',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Extra Components',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Extended Inputs',
        'isLink': false
      }]
    };
  }
  onCustomFormSubmit() {
    this.validationForm.reset();
  }
  reloadInputMask() {
    this.blockUIInputMask.start('Loading..');
    setTimeout(() => {
      this.blockUIInputMask.stop();
    }, 2500);
  }
}
ExtendedinputsComponent.ɵfac = function ExtendedinputsComponent_Factory(t) {
  return new (t || ExtendedinputsComponent)();
};
ExtendedinputsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ExtendedinputsComponent,
  selectors: [["app-extendedinputs"]],
  viewQuery: function ExtendedinputsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5, true);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.floatingLabelForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.validationForm = _t.first);
    }
  },
  decls: 8,
  vars: 3,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "inputmask", 1, "inputmask"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], [1, "col-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [3, "ngSubmit"], ["vform", "ngForm"], [1, "col-xl-6", "col-lg-12"], [1, "form-group"], ["for", "date"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], ["for", "dateISO"], ["type", "text", "ngModel", "", "name", "dateISO", "placeholder", "dateISO", "dateISO", "", 1, "form-control", "date-inputmask"], ["dateISO", "ngModel"], ["class", "form-text text-muted danger", 4, "ngIf"], ["for", "maxDate"], ["placeholder", "maxDate 2019-06-11", "name", "dp", "ngModel", "", "name", "maxDate", "placeholder", "maxDate 2019-06-11", "maxDate", "2019-06-11", "ngbDatepicker", "", 1, "form-control"], ["maxDate", "ngModel", "d2", "ngbDatepicker"], ["for", "minDate"], ["placeholder", "minDate 2019-06-11", "name", "dp", "ngModel", "", "name", "minDate", "placeholder", "minDate 2019-06-11", "minDate", "2019-06-11", "ngbDatepicker", "", 1, "form-control"], ["minDate", "ngModel", "d3", "ngbDatepicker"], ["for", "required"], ["type", "text", "ngModel", "", "name", "required", "required", "", "placeholder", "required", 1, "form-control", "date-inputmask"], ["required", "ngModel"], ["for", "minlength"], ["type", "text", "ngModel", "", "name", "minlength", "placeholder", "minlength 5", "minlength", "5", 1, "form-control", "date-inputmask"], ["minlength", "ngModel"], ["for", "maxlength"], ["type", "text", "ngModel", "", "name", "maxlength", "placeholder", "maxlength 5", "maxlength", "5", 1, "form-control", "date-inputmask"], ["maxlength", "ngModel"], ["for", "rangelength"], ["type", "text", "ngModel", "", "name", "rangelength", "placeholder", "rangeLength [5, 9]", 1, "form-control", "date-inputmask", 3, "rangeLength"], ["rangelength", "ngModel"], ["for", "number"], ["type", "text", "ngModel", "", "name", "number", "placeholder", "number", "number", "", 1, "form-control", "date-inputmask"], ["number", "ngModel"], ["for", "max"], ["type", "text", "ngModel", "", "name", "max", "placeholder", "max 10", "max", "10", 1, "form-control", "date-inputmask"], ["max", "ngModel"], ["for", "min"], ["type", "text", "ngModel", "", "name", "min", "placeholder", "min 10", "min", "10", 1, "form-control", "date-inputmask"], ["min", "ngModel"], ["for", "pattern"], ["type", "text", "ngModel", "", "name", "pattern", "placeholder", "[a-z]{6}", "pattern", "[a-z]{6}", 1, "form-control", "date-inputmask"], ["pattern", "ngModel"], ["for", "email"], ["type", "text", "ngModel", "", "name", "email", "placeholder", "email", "email", "", 1, "form-control", "date-inputmask"], ["email", "ngModel"], ["for", "equal"], ["type", "text", "ngModel", "", "name", "equal", "placeholder", "equal to name", "equal", "name", 1, "form-control"], ["equal", "ngModel"], ["for", "notEqual"], ["type", "text", "ngModel", "", "name", "notEqual", "placeholder", "not equal to name", "notEqual", "name", 1, "form-control"], ["notEqual", "ngModel"], ["for", "password"], ["type", "text", "ngModel", "", "name", "password", "placeholder", "password", "required", "", 1, "form-control"], ["password", "ngModel"], ["type", "text", "ngModel", "", "name", "equalTo", "placeholder", "confirm password", 1, "form-control", 3, "equalTo"], ["equalTo", "ngModel"], ["for", "oldPassword"], ["type", "text", "ngModel", "", "name", "oldPassword", "placeholder", "password", "required", "", 1, "form-control"], ["oldPassword", "ngModel"], ["type", "text", "ngModel", "", "name", "notEqualTo", "placeholder", "confirm password", 1, "form-control", 3, "notEqualTo"], ["notEqualTo", "ngModel"], ["for", "gt"], ["type", "text", "ngModel", "", "name", "gt", "placeholder", "gt 20", "gt", "20", 1, "form-control", "date-inputmask"], ["gt", "ngModel"], ["for", "lt"], ["type", "text", "ngModel", "", "name", "lt", "placeholder", "lt 10", "lt", "10", 1, "form-control", "date-inputmask"], ["lt", "ngModel"], ["for", "url"], ["type", "text", "ngModel", "", "name", "url", "placeholder", "url", "url", "", 1, "form-control", "date-inputmask"], ["url", "ngModel"], [1, "form-text", "text-muted", "danger"]],
  template: function ExtendedinputsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ExtendedinputsComponent_div_7_Template, 151, 27, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "inputMask")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbInputDatepicker, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbh"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbk"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbl"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbm"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbq"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbs"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbt"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbu"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbv"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbw"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵbx"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵca"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵcd"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_6__["ɵce"], ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVuZGVkaW5wdXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6ImV4dGVuZGVkaW5wdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xuIFxufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmdiLWRwLWRheSB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLW1vbnRoIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC13ZWVrZGF5cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtbW9udGgtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWVsZW1lbnRzL2V4dGVuZGVkaW5wdXRzL2V4dGVuZGVkaW5wdXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOzs7QUFHQSxvMUpBQW8xSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG4gXG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZ2ItZHAtZGF5IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtbW9udGgge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5uZ2ItZHAtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtIC4yNXJlbSAwIDA7XG4gIHBhZGRpbmctdG9wOiAuMjVyZW07XG59XG5cbi5uZ2ItZHAtZGF5LFxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uY3VzdG9tLWRheS5yYW5nZSxcbi5jdXN0b20tZGF5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('inputMask')], ExtendedinputsComponent.prototype, "blockUIInputMask", void 0);

/***/ }),

/***/ 30273:
/*!*********************************************************************!*\
  !*** ./src/app/content/forms/form-elements/form-elements.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementsModule": () => (/* binding */ FormElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-inputs/form-inputs.component */ 17041);
/* harmony import */ var _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-groups/input-groups.component */ 86709);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-ui-switch */ 72929);
/* harmony import */ var _input_grid_input_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-grid/input-grid.component */ 71833);
/* harmony import */ var _checkboxes_radios_checkboxes_radios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkboxes-radios/checkboxes-radios.component */ 88363);
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch/switch.component */ 88676);
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select/select.component */ 79425);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-multiselect-dropdown */ 11966);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-custom-validators */ 79512);
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_layout/blockui/block-template.component */ 86196);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _extendedinputs_extendedinputs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extendedinputs/extendedinputs.component */ 26257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
























class FormElementsModule {}
FormElementsModule.ɵfac = function FormElementsModule_Factory(t) {
  return new (t || FormElementsModule)();
};
FormElementsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: FormElementsModule
});
FormElementsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__.CardModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_14__.UiSwitchModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_9__.MatchHeightModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_18__.BlockUIModule.forRoot({
    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_8__.BlockTemplateComponent
  }), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__.NgMultiSelectDropDownModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild([{
    path: 'form-inputs',
    component: _form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_0__.FormInputsComponent
  }, {
    path: 'input-groups',
    component: _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_1__.InputGroupsComponent
  }, {
    path: 'input-grid',
    component: _input_grid_input_grid_component__WEBPACK_IMPORTED_MODULE_2__.InputGridComponent
  }, {
    path: 'checkboxes-radios',
    component: _checkboxes_radios_checkboxes_radios_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxesRadiosComponent
  }, {
    path: 'switch',
    component: _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__.SwitchComponent
  }, {
    path: 'select',
    component: _select_select_component__WEBPACK_IMPORTED_MODULE_5__.SelectComponent
  }, {
    path: 'extendedinputs',
    component: _extendedinputs_extendedinputs_component__WEBPACK_IMPORTED_MODULE_10__.ExtendedinputsComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](FormElementsModule, {
    declarations: [_form_inputs_form_inputs_component__WEBPACK_IMPORTED_MODULE_0__.FormInputsComponent, _input_groups_input_groups_component__WEBPACK_IMPORTED_MODULE_1__.InputGroupsComponent, _input_grid_input_grid_component__WEBPACK_IMPORTED_MODULE_2__.InputGridComponent, _checkboxes_radios_checkboxes_radios_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxesRadiosComponent, _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__.SwitchComponent, _select_select_component__WEBPACK_IMPORTED_MODULE_5__.SelectComponent, _extendedinputs_extendedinputs_component__WEBPACK_IMPORTED_MODULE_10__.ExtendedinputsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__.CardModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_14__.UiSwitchModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_9__.MatchHeightModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__.CustomFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_18__.BlockUIModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_19__.NgMultiSelectDropDownModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 17041:
/*!**********************************************************************************!*\
  !*** ./src/app/content/forms/form-elements/form-inputs/form-inputs.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormInputsComponent": () => (/* binding */ FormInputsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);








const _c0 = ["labelImport"];
const _c1 = function (a0) {
  return {
    "focus": a0
  };
};
const formInputData = __webpack_require__(/*! ../../../../../assets/data/forms/form-elements/form-inputs.json */ 56162);
class FormInputsComponent {
  constructor() {
    this.fileToUpload = null;
    this.multipleSelectArray = formInputData.multipleSelectArray;
    this.focucedElement = '';
    this.formImport = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      importFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
    });
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Form Basic Elements',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Basic Elements',
        'isLink': false
      }]
    };
  }
  focusElement(focucedElement) {
    this.focucedElement = focucedElement;
  }
  onFileChange(files) {
    this.labelImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(', ');
    this.fileToUpload = files.item(0);
  }
}
FormInputsComponent.ɵfac = function FormInputsComponent_Factory(t) {
  return new (t || FormInputsComponent)();
};
FormInputsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FormInputsComponent,
  selectors: [["app-form-inputs"]],
  viewQuery: function FormInputsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.labelImport = _t.first);
    }
  },
  decls: 1538,
  vars: 32,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "basic-inputs"], ["matchHeight", "card", 1, "row"], [1, "col-xl-4", "col-lg-6", "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-block"], [1, "card-body"], [1, "form-group"], ["type", "text", "id", "defaultInputText", 1, "form-control"], [1, "text-muted"], ["type", "text", "id", "helpInputTop", 1, "form-control"], ["type", "password", "id", "passwordField", 1, "form-control"], ["type", "text", "id", "disabledInput", "disabled", "", 1, "form-control"], ["type", "text", "id", "predefinedInput", "value", "http://", 1, "form-control"], ["type", "text", "id", "readonlyInput", "value", "You can't change me. ;)", "readonly", "", 1, "form-control"], ["type", "email", "id", "placeholderInput", "placeholder", "Enter Email Address", 1, "form-control"], ["type", "text", "id", "maxInput", "maxlength", "6", "placeholder", "Maximum 6 characters.", 1, "form-control"], [1, "card-title", "cursor-pointer"], ["type", "text", "id", "focusInput", "placeholder", "Field Focus On Label Click.", 1, "form-control"], ["for", "staticEmail", 1, "card-title"], ["type", "text", "readonly", "", "id", "staticEmail", "value", "email@pixinvent.com", 1, "form-control-plaintext"], ["for", "helpInput", 1, "card-title"], ["type", "text", "id", "helpInput", "required", "", "maxlength", "8", "placeholder", "With Help Text", 1, "form-control"], ["for", "autoOffInput", 1, "card-title"], ["type", "text", "id", "autoOffInput", "placeholder", "Autocomplete is off!", "autocomplete", "off", 1, "form-control", "mb-1"], ["id", "input-types", 1, "input-type-options"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], ["for", "text", 1, "card-title"], ["type", "text", "id", "text", "value", "Artisanal kale", 1, "form-control"], ["for", "password", 1, "card-title"], ["type", "password", "id", "password", "value", "hunter2", 1, "form-control"], ["for", "tel", 1, "card-title"], ["type", "tel", "id", "tel", "value", "1-(555)-555-5555", 1, "form-control"], ["for", "email", 1, "card-title"], ["type", "email", "id", "email", "value", "bootstrap@example.com", 1, "form-control"], ["for", "url", 1, "card-title"], ["type", "url", "id", "url", "value", "http://getbootstrap.com", 1, "form-control"], ["for", "search", 1, "card-title"], ["type", "search", "id", "search", "value", "How do I shoot web", 1, "form-control"], ["for", "number", 1, "card-title"], ["type", "number", "id", "number", "value", "43", 1, "form-control"], ["for", "date", 1, "card-title"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d1", "ngbDatepicker"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], [1, "fa", "fa-calendar", 2, "cursor", "pointer"], ["for", "time", 1, "card-title"], ["type", "time", "id", "time", "value", "13:45:00", 1, "form-control"], [1, "col-lg-6", "col-md-12"], ["for", "color", 1, "card-title"], ["type", "color", "id", "color", "value", "#563d7c", 1, "form-control"], ["for", "range", 1, "card-title"], ["type", "range", "id", "range", "value", "50", 1, "form-control"], [1, "basic-textarea"], ["for", "basicTextarea", 1, "cursor-pointer", "card-title"], ["id", "basicTextarea", "rows", "3", 1, "form-control"], ["for", "placeTextarea", 1, "cursor-pointer", "card-title"], ["id", "placeTextarea", "rows", "3", "placeholder", "Simple Textarea", 1, "form-control"], ["for", "descTextarea", 1, "cursor-pointer", "card-title"], ["id", "descTextarea", "rows", "3", "placeholder", "Textarea with description", 1, "form-control"], [1, "basic-select"], ["for", "basicSelect", 1, "card-title"], ["id", "basicSelect", 1, "form-control"], ["for", "customSelect", 1, "card-title"], ["id", "customSelect", 1, "custom-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "countrySelect", 1, "card-title"], ["bindLabel", "item_text", "placeholder", "Select cities", 3, "items", "multiple", "ngModel", "ngModelChange"], ["id", "input-style", 1, "basic-inputs-style"], [1, "col-xl-4", "col-lg-12"], [1, "form-group", "form-group-style", 3, "ngClass"], ["for", "textbox2"], ["type", "text", "id", "textbox2", 1, "form-control", 3, "focus"], ["for", "email1"], ["type", "email", "id", "email1", 1, "form-control", 3, "focus"], ["for", "password1"], ["type", "password", "id", "password1", 1, "form-control", 3, "focus"], ["for", "url1"], ["type", "url", "id", "url1", 1, "form-control", 3, "focus"], ["for", "number12"], ["type", "number", "id", "number12", 1, "form-control", 3, "focus"], ["for", "textarea2"], ["id", "textarea2_1", "rows", "3", 1, "form-control", 3, "focus"], ["for", "selectOpt"], ["id", "selectOpt", 1, "form-control", 3, "focus"], ["placeholder", "Date yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control"], ["d2", "ngbDatepicker"], ["for", "time12"], ["type", "time", "id", "time12", 1, "form-control", 3, "focus"], ["for", "month12"], ["type", "month", "id", "month12", 1, "form-control", 3, "focus"], [1, "file-browser"], ["for", "exampleInputFile", 1, "card-title"], ["type", "file", "id", "exampleInputFile", 1, "form-control-file"], ["novalidate", "", 1, "form-group", 3, "formGroup"], [1, "custom-file"], ["type", "file", "formControlName", "importFile", "id", "importFile", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["labelImport", ""], ["id", "font-options", 1, "font-options"], ["for", "inputText", 1, "card-title"], ["type", "text", "id", "inputText", "placeholder", "Normal Font", 1, "font-weight-normal", "form-control"], ["for", "inputText1", 1, "card-title"], ["type", "text", "id", "inputText1", "placeholder", "Bold Font", 1, "font-weight-bold", "form-control"], ["for", "inputText2", 1, "card-title"], ["type", "text", "id", "inputText2", "placeholder", "Italic Font", 1, "font-italic", "form-control"], ["for", "inputText3", 1, "card-title"], ["type", "text", "id", "inputText3", "placeholder", "Lowercase Font", 1, "text-lowercase", "form-control"], ["for", "inputText4", 1, "card-title"], ["type", "text", "id", "inputText4", "placeholder", "capitalized text", 1, "text-capitalize", "form-control"], ["for", "inputText5", 1, "card-title"], ["type", "text", "id", "inputText5", "placeholder", "Uppercased Text", 1, "text-uppercase", "form-control"], ["for", "inputText6", 1, "card-title"], ["type", "text", "id", "inputText6", "placeholder", "Left Aligned Text", 1, "text-left", "form-control"], ["for", "inputText7", 1, "card-title"], ["type", "text", "id", "inputText7", "placeholder", "Center Aligned Text", 1, "text-center", "form-control"], ["for", "inputText8", 1, "card-title"], ["type", "text", "id", "inputText8", "placeholder", "Right Aligned Text", 1, "text-right", "form-control"], ["for", "inputFont", 1, "card-title"], ["type", "text", "id", "inputFont", "placeholder", "Input With Large Font", 1, "form-control", "text-uppercase", "font-size-large"], ["for", "inputFont1", 1, "card-title"], ["type", "text", "id", "inputFont1", "placeholder", "Input With Small Font", 1, "font-size-small", "form-control"], ["for", "inputText9", 1, "card-title"], ["type", "text", "id", "inputText9", "placeholder", "Input With Extra Small Font", 1, "font-size-xsmall", "form-control"], ["id", "form-helpers", 1, "helpers"], ["type", "text", "id", "helpInput1", "placeholder", "Help Text", 1, "form-control"], [1, "text-left"], ["type", "text", "id", "helpInput2", "placeholder", "Help Text", 1, "form-control"], [1, "text-center"], ["type", "text", "id", "helpInput3", "placeholder", "Help Text", 1, "form-control"], [1, "text-right"], ["type", "text", "id", "helpInput4", "placeholder", "Help Text", 1, "form-control"], [1, "block-tag", "text-left"], [1, "badge", "badge-default", "badge-info"], ["type", "text", "id", "helpInput5", "placeholder", "Help Text", 1, "form-control"], [1, "block-tag", "text-center"], [1, "badge", "badge-default", "badge-success"], ["type", "text", "id", "helpInput6", "placeholder", "Help Text", 1, "form-control"], [1, "block-tag", "text-right"], [1, "badge", "badge-default", "badge-danger"], [1, "card-blockdy"], ["type", "text", "id", "helpInput7", "placeholder", "Help Text class .text-left", 1, "form-control"], [1, "badge-default", "badge-info", "block-tag", "text-left"], [1, "block-area", "white"], ["type", "text", "id", "helpInput8", "placeholder", "Help Text class .text-center", 1, "form-control"], [1, "badge-default", "badge-success", "block-tag", "text-center"], ["type", "text", "id", "helpInput9", "placeholder", "Help Text class .text-right", 1, "form-control"], [1, "badge-default", "badge-danger", "block-tag", "text-right"], [1, "col-md-8"], ["type", "text", "id", "helpInput10", "placeholder", "Help Text", 1, "form-control"], [1, "col-md-4", "block-tag"], [1, "text-muted", "block-area"], ["type", "text", "id", "helpInput11", "placeholder", "Help Text", 1, "form-control"], [1, "badge", "badge-warning", "block-area"], [1, "input-styling"], ["for", "roundText", 1, "card-title"], ["type", "text", "id", "roundText", "placeholder", "Rounded Input", 1, "form-control", "round"], ["for", "squareText", 1, "card-title"], ["type", "text", "id", "squareText", "placeholder", "Squared Input", 1, "form-control", "square"], ["for", "regText", 1, "card-title"], ["type", "text", "id", "regText", "placeholder", "Default Input", 1, "form-control"], [1, "column-sizing"], [1, "col-sm-12", "col-md-5"], ["for", "roundText1", 1, "card-title"], ["type", "text", "id", "roundText1", "placeholder", ".col-5", 1, "form-control"], [1, "col-sm-12", "col-md-4"], ["for", "squareText1", 1, "card-title"], ["type", "text", "id", "squareText1", "placeholder", ".col-4", 1, "form-control"], [1, "col-sm-12", "col-md-3"], ["for", "regText1", 1, "card-title"], ["type", "text", "id", "regText1", "placeholder", ".col-3", 1, "form-control"], [1, "control-sizing"], ["for", "xLarge", 1, "card-title"], [1, "form-group", "position-relative"], ["type", "text", "id", "xLarge", "placeholder", "XLarge Input", 1, "form-control", "input-xl"], ["for", "xLargeSelect", 1, "card-title"], ["id", "xLargeSelect", 1, "form-control", "input-xl"], ["for", "Large", 1, "card-title"], ["type", "text", "id", "Large", "placeholder", "Large Input", 1, "form-control", "input-lg"], ["for", "LargeSelect", 1, "card-title"], ["id", "LargeSelect", 1, "form-control", "input-lg"], ["for", "Default", 1, "card-title"], ["type", "text", "id", "Default", "placeholder", "Default Input", 1, "form-control"], ["for", "DefaultSelect", 1, "card-title"], ["id", "DefaultSelect", 1, "form-control"], ["for", "Small", 1, "card-title"], ["type", "text", "id", "Small", "placeholder", "Small Input", 1, "form-control", "input-sm"], ["for", "SmallSelect", 1, "card-title"], ["id", "SmallSelect", 1, "form-control", "input-sm"], ["for", "xSmall", 1, "card-title"], ["type", "text", "id", "xSmall", "placeholder", "XSmall Input", 1, "form-control", "input-xs"], ["for", "xSmallSelect", 1, "card-title"], ["id", "xSmallSelect", 1, "form-control", "input-xs"], ["id", "validation", 1, "validations"], ["for", "inputDanger", 1, "card-title", "danger"], [1, "form-group", "has-danger"], ["type", "text", "id", "inputDanger", 1, "form-control", "form-control-danger", "mb-1"], [1, "danger", "text-muted"], ["for", "inputSuccess", 1, "card-title", "success"], [1, "form-group", "has-success"], ["type", "text", "id", "inputSuccess", 1, "form-control", "form-control-success", "mb-1"], [1, "success", "text-muted"], ["for", "inputWarning", 1, "card-title", "warning"], [1, "form-group", "has-warning"], ["type", "text", "id", "inputWarning", 1, "form-control", "form-control-warning", "mb-1"], [1, "warning", "text-muted"], [1, "inputs-icons"], [1, "col-xl-6", "col-lg-12"], ["for", "iconLeft", 1, "card-title"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "id", "iconLeft", "placeholder", "Icon Left, Extra Large Input", 1, "form-control", "form-control-xl", "input-xl", "mb-1"], [1, "form-control-position"], [1, "icon-bulb", "success", "font-medium-4"], ["for", "iconLeft1", 1, "card-title"], ["type", "text", "id", "iconLeft1", "placeholder", "Icon Right, Extra Large Input", 1, "form-control", "form-control-xl", "input-xl", "mb-1"], [1, "icon-microphone", "danger", "font-medium-4"], ["for", "iconLeft2", 1, "card-title"], ["type", "text", "id", "iconLeft2", "placeholder", "Icon Left, Large Input", 1, "form-control", "form-control-lg", "input-lg", "mb-1"], [1, "icon-lock-open", "warning", "font-medium-4"], ["for", "iconLeft3", 1, "card-title"], ["type", "text", "id", "iconLeft3", "placeholder", "Icon Right, Large Input", 1, "form-control", "form-control-lg", "input-lg", "mb-1"], [1, "icon-pencil", "info", "font-medium-4"], ["for", "iconLeft4", 1, "card-title"], ["type", "text", "id", "iconLeft4", "placeholder", "Icon Left, Default Input", 1, "form-control"], [1, "icon-screen-smartphone", "primary"], ["for", "iconLeft5", 1, "card-title"], ["type", "text", "id", "iconLeft5", "placeholder", "Icon Right, Default Input", 1, "form-control"], [1, "icon-book-open", "warning"], ["type", "text", "id", "iconLeft6", "placeholder", "Icon Left, Small Input", 1, "form-control", "form-control-sm", "input-sm", "mb-1"], [1, "icon-magnifier", "danger", "font-small-3"], ["type", "text", "id", "iconLeft7", "placeholder", "Icon Right, Small Input", 1, "form-control", "form-control-sm", "input-sm", "mb-1"], [1, "icon-key", "success", "font-small-4"], ["type", "text", "id", "iconLeft8", "placeholder", "Icon Left, Extra Small Input", 1, "form-control", "form-control-xs", "input-xs", "mb-1"], [1, "icon-pie-chart", "info", "font-small-2"], ["type", "text", "id", "iconLeft9", "placeholder", "Icon Right, Extra Small Input", 1, "form-control", "form-control-xs", "input-xs", "mb-1"], [1, "icon-cloud-upload", "warning", "font-small-2"], ["type", "text", "id", "iconLeft10", "placeholder", "Icon Left, Default Input", 1, "form-control", "round", "mb-1"], [1, "icon-user", "warning"], ["type", "text", "id", "iconLeft11", "placeholder", "Icon Right, Default Input", 1, "form-control", "round", "mb-1"], [1, "icon-key", "primary"], ["type", "text", "id", "iconLeft12", "placeholder", "Icon Left, Default Input", 1, "form-control", "mb-1"], [1, "icon-refresh", "spinner"], ["type", "text", "id", "iconLeft13", "placeholder", "Icon Right, Default Input", 1, "form-control", "mb-1"], [1, "spinner", "icon-disc"], [1, "control-color"], ["for", "textColor", 1, "card-title"], ["type", "text", "id", "textColor", "value", "Primary colored Text", 1, "form-control", "primary"], ["for", "textColor1", 1, "card-title"], ["type", "text", "id", "textColor1", "placeholder", "Success bordered Input", 1, "form-control", "border-success"], ["for", "textColor2", 1, "card-title"], ["type", "text", "id", "textColor2", "value", "Background color Input", 1, "form-control", "bg-warning"], ["for", "selectColor", 1, "card-title"], ["id", "selectColor", 1, "form-control", "danger"], ["for", "selectColor1", 1, "card-title"], ["id", "selectColor1", 1, "form-control", "border-warning"], ["for", "selectColor2", 1, "card-title"], ["id", "selectColor2", 1, "form-control", "bg-success"], ["id", "tareaColor1", "rows", "3", 1, "form-control", "info"], ["id", "tareaColor2", "rows", "3", 1, "form-control", "border-primary"], ["id", "tareaColor3", "rows", "3", 1, "form-control", "bg-danger"]],
  template: function FormInputsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Default Input text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Default Input text with help");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11)(22, "div", 12)(23, "div", 13)(24, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "eg.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "someone@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "div", 9)(32, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 11)(35, "div", 12)(36, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 7)(39, "div", 8)(40, "div", 9)(41, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Disabled Input field");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 11)(44, "div", 12)(45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Add attribute ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " to disable input field.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 7)(53, "div", 8)(54, "div", 9)(55, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Predefined Input Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 11)(58, "div", 12)(59, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Add attribute ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "value=\"VALUE\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, " to set predefined value.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 7)(67, "div", 8)(68, "div", 9)(69, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Readonly Input field");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 11)(72, "div", 12)(73, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Add attribute ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "readonly=\"readonly\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " to set field readonly.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 7)(81, "div", 8)(82, "div", 9)(83, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Input with Placeholder");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 11)(86, "div", 12)(87, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 7)(90, "div", 8)(91, "div", 9)(92, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Maximum Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 11)(95, "div", 12)(96, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Add attribute ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "maxlength=\"NUMBER\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " to input area.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 7)(104, "div", 8)(105, "div", 9)(106, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Focus on label click");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 11)(109, "div", 12)(110, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "To set focus on label click, use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, ".cursor-pointer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 7)(118, "div", 8)(119, "div", 9)(120, "h4", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Static Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 11)(123, "div", 12)(124, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "To set static text use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, ".form-control-static");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 7)(132, "div", 8)(133, "div", 9)(134, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Input with Help text at bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 11)(137, "div", 12)(138, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, " Maximum 8 characters allowed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Muted help text using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, ".text-muted");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 7)(148, "div", 8)(149, "div", 9)(150, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Autocomplete Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 11)(153, "div", 12)(154, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Add attribute ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "autocomplete=\"off\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, " to disable Autocomplete.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "section", 31)(162, "div", 32)(163, "div", 33)(164, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "Input Type Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 6)(167, "div", 7)(168, "div", 8)(169, "div", 9)(170, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 11)(173, "div", 12)(174, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, "input type=\"text\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 7)(181, "div", 8)(182, "div", 9)(183, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 11)(186, "div", 12)(187, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "input type=\"password\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 7)(194, "div", 8)(195, "div", 9)(196, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "Telephone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 11)(199, "div", 12)(200, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "input type=\"tel\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 7)(207, "div", 8)(208, "div", 9)(209, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 11)(212, "div", 12)(213, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](216, "input type=\"email\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "div", 7)(220, "div", 8)(221, "div", 9)(222, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 11)(225, "div", 12)(226, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "input type=\"url\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 7)(233, "div", 8)(234, "div", 9)(235, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 11)(238, "div", 12)(239, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](240, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](242, "input type=\"search\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](244, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "div", 7)(246, "div", 8)(247, "div", 9)(248, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](249, "Numbers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "div", 11)(251, "div", 12)(252, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "input type=\"number\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](257, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 7)(259, "div", 8)(260, "div", 9)(261, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "div", 11)(264, "div", 12)(265, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](266, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "input type=\"date\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](270, "input", 51, 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "div", 53)(273, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormInputsComponent_Template_div_click_273_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](271);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](274, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "div", 7)(276, "div", 8)(277, "div", 9)(278, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "div", 11)(281, "div", 12)(282, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "input type=\"time\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](287, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "div", 58)(289, "div", 8)(290, "div", 9)(291, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "div", 11)(294, "div", 12)(295, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "input type=\"color\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](300, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 58)(302, "div", 8)(303, "div", 9)(304, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "Range");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "div", 11)(307, "div", 12)(308, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "Using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](311, "input type=\"range\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](313, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](314, "section", 63)(315, "div", 32)(316, "div", 33)(317, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](318, "Basic Textarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](319, "div", 6)(320, "div", 7)(321, "div", 8)(322, "div", 9)(323, "label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, "Basic Textarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "div", 11)(326, "div", 12)(327, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](328, "textarea", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "div", 7)(330, "div", 8)(331, "div", 9)(332, "label", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "Textarea with Placeholder");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 11)(335, "div", 12)(336, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](337, "textarea", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](338, "div", 7)(339, "div", 8)(340, "div", 9)(341, "label", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "Textarea with Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "div", 11)(344, "div", 12)(345, "div", 13)(346, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "Textarea description text.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](348, "textarea", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "section", 70)(350, "div", 32)(351, "div", 33)(352, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "Basic Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "div", 6)(355, "div", 7)(356, "div", 8)(357, "div", 9)(358, "label", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "Basic select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "div", 11)(361, "div", 12)(362, "div", 13)(363, "select", 72)(364, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](365, "Select Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, "Option 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "Option 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "Option 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](373, "Option 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](375, "Option 5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "div", 7)(377, "div", 8)(378, "div", 9)(379, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Custom select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "div", 11)(382, "div", 12)(383, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "To use custom select add class");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](386, ".custom-select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](387, " to select.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](388, "div", 13)(389, "select", 74)(390, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](391, "Open this select menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](393, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](394, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](395, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "div", 7)(399, "div", 8)(400, "div", 9)(401, "label", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](402, "Multiple select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "div", 11)(404, "div", 12)(405, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, "To use multiple select add an attribute");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](408, " multiple=\"multiple\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](409, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](410, "ng-select", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FormInputsComponent_Template_ng_select_ngModelChange_410_listener($event) {
        return ctx.multipleMultiSelect = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "section", 81)(412, "div", 32)(413, "div", 33)(414, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](415, "Basic Input Style 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](416, "div", 6)(417, "div", 82)(418, "div", 8)(419, "div", 11)(420, "div", 12)(421, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](422, "Another Input style using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](423, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](424, ".form-group-style");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "div", 83)(426, "label", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](427, "Input text Style 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_input_focus_428_listener() {
        return ctx.focusElement("textbox2");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "div", 83)(430, "label", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](431, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](432, "input", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_input_focus_432_listener() {
        return ctx.focusElement("email1");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "div", 83)(434, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_input_focus_436_listener() {
        return ctx.focusElement("password1");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "div", 83)(438, "label", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](439, "URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](440, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_input_focus_440_listener() {
        return ctx.focusElement("url1");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "div", 82)(442, "div", 8)(443, "div", 11)(444, "div", 12)(445, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](446, "Another Select style using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](448, ".form-group-style");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "div", 83)(450, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](451, "Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](452, "input", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_input_focus_452_listener() {
        return ctx.focusElement("number12");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "div", 83)(454, "label", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](455, "Textarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "textarea", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_textarea_focus_456_listener() {
        return ctx.focusElement("textarea2_1");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "div", 83)(458, "label", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](459, "Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](460, "select", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_select_focus_460_listener() {
        return ctx.focusElement("selectOpt");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](462, "Select Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](464, "Option 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](465, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](466, "Option 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](467, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](468, "Option 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](470, "Option 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472, "Option 5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](473, "div", 82)(474, "div", 8)(475, "div", 11)(476, "div", 12)(477, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](478, "Another types using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](479, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](480, ".form-group-style");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](481, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](482, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](483, "input", 98, 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](485, "div", 53)(486, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FormInputsComponent_Template_div_click_486_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](484);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](487, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](488, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](489, "div", 83)(490, "label", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](491, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](492, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_input_focus_492_listener() {
        return ctx.focusElement("time12");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](493, "div", 83)(494, "label", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](495, "Month");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](496, "input", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function FormInputsComponent_Template_input_focus_496_listener() {
        return ctx.focusElement("month12");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](497, "section", 104)(498, "div", 32)(499, "div", 33)(500, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](501, "Basic File Browser");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](502, "div", 6)(503, "div", 58)(504, "div", 8)(505, "div", 9)(506, "label", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](507, "File input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](508, "div", 11)(509, "div", 12)(510, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](511, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](512, "div", 58)(513, "div", 8)(514, "div", 9)(515, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](516, "Basic File Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](517, "div", 11)(518, "div", 12)(519, "div", 107)(520, "div", 108)(521, "input", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FormInputsComponent_Template_input_change_521_listener($event) {
        return ctx.onFileChange($event.target.files);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](522, "label", 110, 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](524, "Choose file");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](525, "section", 112)(526, "div", 32)(527, "div", 33)(528, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](529, "Input Font Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](530, "div", 6)(531, "div", 7)(532, "div", 8)(533, "div", 9)(534, "label", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](535, "Normal Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](536, "div", 11)(537, "div", 12)(538, "p")(539, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](540, ".font-weight-normal");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](541, " class for normal font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](542, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](543, "input", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](544, "div", 7)(545, "div", 8)(546, "div", 9)(547, "label", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](548, "Bold Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "div", 11)(550, "div", 12)(551, "p")(552, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](553, ".font-weight-bold");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](554, " class for bold font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](555, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](556, "input", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](557, "div", 7)(558, "div", 8)(559, "div", 9)(560, "label", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](561, "Italic Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](562, "div", 11)(563, "div", 12)(564, "p")(565, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](566, ".font-weight-italic");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](567, " class for italic font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](568, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](569, "input", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](570, "div", 7)(571, "div", 8)(572, "div", 9)(573, "label", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](574, "Lowercase Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](575, "div", 11)(576, "div", 12)(577, "p")(578, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](579, ".text-lowercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](580, " class for lowercase font ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](581, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](582, "input", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](583, "div", 7)(584, "div", 8)(585, "div", 9)(586, "label", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](587, "Capitalized Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](588, "div", 11)(589, "div", 12)(590, "p")(591, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](592, ".text-capitalize");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](593, " class for capitalize font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](594, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](595, "input", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](596, "div", 7)(597, "div", 8)(598, "div", 9)(599, "label", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](600, "Uppercased Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](601, "div", 11)(602, "div", 12)(603, "p")(604, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](605, ".text-uppercased");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](606, " class for uppercased font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](607, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](608, "input", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](609, "div", 7)(610, "div", 8)(611, "div", 9)(612, "label", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](613, "Left Aligned Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](614, "div", 11)(615, "div", 12)(616, "p")(617, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](618, ".text-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](619, " class for left align text in input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](620, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](621, "input", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](622, "div", 7)(623, "div", 8)(624, "div", 9)(625, "label", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](626, "Center Aligned Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](627, "div", 11)(628, "div", 12)(629, "p")(630, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](631, ".text-center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](632, " class for center align text in input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](633, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](634, "input", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](635, "div", 7)(636, "div", 8)(637, "div", 9)(638, "label", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](639, "Right Aligned Text");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](640, "div", 11)(641, "div", 12)(642, "p")(643, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](644, ".text-right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](645, " class for right align text in input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](646, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](647, "input", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](648, "div", 7)(649, "div", 8)(650, "div", 9)(651, "label", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](652, "Large Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](653, "div", 11)(654, "div", 12)(655, "p")(656, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](657, ".font-size-large");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](658, " class for large input font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](659, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](660, "input", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](661, "div", 7)(662, "div", 8)(663, "div", 9)(664, "label", 133);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](665, "Small Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](666, "div", 11)(667, "div", 12)(668, "p")(669, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, ".font-size-small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](671, " class for small input font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](672, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](673, "input", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](674, "div", 7)(675, "div", 8)(676, "div", 9)(677, "label", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](678, "Extra Small Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](679, "div", 11)(680, "div", 12)(681, "p")(682, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](683, ".font-size-xsmall");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](684, " class for XSmall input font");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](685, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](686, "input", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](687, "section", 137)(688, "div", 32)(689, "div", 33)(690, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](691, "Basic Form Helpers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](692, "div", 6)(693, "div", 7)(694, "div", 8)(695, "div", 9)(696, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](697, "Form Helper Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](698, "div", 11)(699, "div", 12)(700, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](701, "input", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](702, "p", 139)(703, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](704, "Helper aligned to left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](705, "div", 7)(706, "div", 8)(707, "div", 9)(708, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](709, "Form Helper Center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](710, "div", 11)(711, "div", 12)(712, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](713, "input", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](714, "p", 141)(715, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](716, "Helper aligned to center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](717, "div", 7)(718, "div", 8)(719, "div", 9)(720, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](721, "Form Helper Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](722, "div", 11)(723, "div", 12)(724, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](725, "input", 142);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](726, "p", 143)(727, "small", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](728, "Helper aligned to right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](729, "div", 7)(730, "div", 8)(731, "div", 9)(732, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](733, "Form Helper Left with color label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](734, "div", 11)(735, "div", 12)(736, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](737, "input", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](738, "p", 145)(739, "small", 146);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](740, "Helper aligned to left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](741, "div", 7)(742, "div", 8)(743, "div", 9)(744, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](745, "Form Helper Center with color label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](746, "div", 11)(747, "div", 12)(748, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](749, "input", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](750, "p", 148)(751, "small", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](752, "Helper aligned to center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](753, "div", 7)(754, "div", 8)(755, "div", 9)(756, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](757, "Form Helper Right with color label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](758, "div", 11)(759, "div", 12)(760, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](761, "input", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](762, "p", 151)(763, "small", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](764, "Helper aligned to right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](765, "div", 7)(766, "div", 8)(767, "div", 9)(768, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](769, "Form Helper Left with block color label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](770, "div", 153)(771, "div", 12)(772, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](773, "input", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](774, "p", 155)(775, "small", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](776, "Helper aligned to left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](777, "div", 7)(778, "div", 8)(779, "div", 9)(780, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](781, "Form Helper Center with block color label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](782, "div", 153)(783, "div", 12)(784, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](785, "input", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](786, "p", 158)(787, "small", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](788, "Helper aligned to center");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](789, "div", 7)(790, "div", 8)(791, "div", 9)(792, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](793, "Form Helper Right with block color label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](794, "div", 153)(795, "div", 12)(796, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](797, "input", 159);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](798, "p", 160)(799, "small", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](800, "Helper aligned to right");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](801, "div", 58)(802, "div", 8)(803, "div", 9)(804, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](805, "Inline Helper");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](806, "div", 11)(807, "div", 12)(808, "div", 32)(809, "div", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](810, "input", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](811, "div", 163)(812, "small", 164);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](813, "Inline helper class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](814, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](815, ".block-tag");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](816, "div", 58)(817, "div", 8)(818, "div", 9)(819, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](820, "Inline Helper with color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](821, "div", 11)(822, "div", 12)(823, "div", 32)(824, "div", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](825, "input", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](826, "div", 163)(827, "small", 166);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](828, "Inline color helper");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](829, "section", 167)(830, "div", 32)(831, "div", 33)(832, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](833, "Input Styling");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](834, "div", 6)(835, "div", 7)(836, "div", 8)(837, "div", 9)(838, "label", 168);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](839, "Rounded Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](840, "div", 11)(841, "div", 12)(842, "p")(843, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](844, ".round");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](845, " class for rounded field");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](846, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](847, "input", 169);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](848, "div", 7)(849, "div", 8)(850, "div", 9)(851, "label", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](852, "Squared Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](853, "div", 11)(854, "div", 12)(855, "p")(856, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](857, ".square");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](858, " class for squared field");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](859, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](860, "input", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](861, "div", 7)(862, "div", 8)(863, "div", 9)(864, "label", 172);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](865, "Default Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](866, "div", 11)(867, "div", 12)(868, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](869, "Default Input Field");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](870, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](871, "input", 173);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](872, "section", 174)(873, "div", 32)(874, "div", 33)(875, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](876, "Input Column Sizing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](877, "div", 6)(878, "div", 175)(879, "div", 8)(880, "div", 9)(881, "label", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](882, "Column sizing 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](883, "div", 11)(884, "div", 12)(885, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](886, "input", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](887, "div", 178)(888, "div", 8)(889, "div", 9)(890, "label", 179);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](891, "Column sizing 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](892, "div", 11)(893, "div", 12)(894, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](895, "input", 180);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](896, "div", 181)(897, "div", 8)(898, "div", 9)(899, "label", 182);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](900, "Column sizing 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](901, "div", 11)(902, "div", 12)(903, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](904, "input", 183);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](905, "section", 184)(906, "div", 32)(907, "div", 33)(908, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](909, "Control Sizing Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](910, "div", 6)(911, "div", 58)(912, "div", 8)(913, "div", 9)(914, "label", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](915, "Extra Large Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](916, "div", 11)(917, "div", 12)(918, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](919, "XLarge Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](920, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](921, ".input-xl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](922, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](923, "input", 187);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](924, "div", 58)(925, "div", 8)(926, "div", 9)(927, "label", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](928, "Extra Large Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](929, "div", 11)(930, "div", 12)(931, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](932, "XLarge Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](933, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](934, ".input-xl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](935, " for select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](936, "div", 186)(937, "select", 189)(938, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](939, "XLarge select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](940, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](941, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](942, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](943, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](944, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](945, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](946, "div", 58)(947, "div", 8)(948, "div", 9)(949, "label", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](950, "Large Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](951, "div", 11)(952, "div", 12)(953, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](954, "Large Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](955, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](956, ".input-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](957, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](958, "input", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](959, "div", 58)(960, "div", 8)(961, "div", 9)(962, "label", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](963, "Large Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](964, "div", 11)(965, "div", 12)(966, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](967, "Large Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](968, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](969, ".input-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](970, " for select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](971, "div", 186)(972, "select", 193)(973, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](974, "Large select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](975, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](976, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](977, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](978, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](979, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](980, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](981, "div", 58)(982, "div", 8)(983, "div", 9)(984, "label", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](985, "Default Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](986, "div", 11)(987, "div", 12)(988, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](989, "input", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](990, "div", 58)(991, "div", 8)(992, "div", 9)(993, "label", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](994, "Default Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](995, "div", 11)(996, "div", 12)(997, "div", 186)(998, "select", 197)(999, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1000, "Default select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1001, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1002, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1003, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1004, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1005, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1006, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1007, "div", 58)(1008, "div", 8)(1009, "div", 9)(1010, "label", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1011, "Small Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1012, "div", 11)(1013, "div", 12)(1014, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1015, "Small Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1016, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1017, ".input-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1018, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1019, "input", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1020, "div", 58)(1021, "div", 8)(1022, "div", 9)(1023, "label", 200);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1024, "Small Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1025, "div", 11)(1026, "div", 12)(1027, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1028, "Small Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1029, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1030, ".input-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1031, " for select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1032, "div", 186)(1033, "select", 201)(1034, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1035, "Small select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1036, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1037, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1038, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1039, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1040, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1041, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1042, "div", 58)(1043, "div", 8)(1044, "div", 9)(1045, "label", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1046, "Extra Small Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1047, "div", 11)(1048, "div", 12)(1049, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1050, "XSmall Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1051, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1052, ".input-xs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1053, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1054, "input", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1055, "div", 58)(1056, "div", 8)(1057, "div", 9)(1058, "label", 204);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1059, "Extra Small Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1060, "div", 11)(1061, "div", 12)(1062, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1063, "XSmall Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1064, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1065, ".input-xs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1066, " for select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1067, "div", 186)(1068, "select", 205)(1069, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1070, "XSmall select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1071, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1072, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1073, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1074, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1075, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1076, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1077, "section", 206)(1078, "div", 32)(1079, "div", 33)(1080, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1081, "Input Validation States");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1082, "div", 6)(1083, "div", 7)(1084, "div", 8)(1085, "div", 9)(1086, "label", 207)(1087, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1088, "Danger State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1089, "div", 11)(1090, "div", 12)(1091, "div", 208);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1092, "input", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1093, "p", 143)(1094, "small", 210);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1095, "Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1096, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1097, ".has-danger");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1098, " class for danger state");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1099, "div", 7)(1100, "div", 8)(1101, "div", 9)(1102, "label", 211)(1103, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1104, "Success State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1105, "div", 11)(1106, "div", 12)(1107, "div", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1108, "input", 213);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1109, "p", 143)(1110, "small", 214);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1111, "Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1113, ".has-success");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1114, " class for success state");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1115, "div", 7)(1116, "div", 8)(1117, "div", 9)(1118, "label", 215)(1119, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1120, "Warning State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1121, "div", 11)(1122, "div", 12)(1123, "div", 216);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1124, "input", 217);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1125, "p", 143)(1126, "small", 218);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1127, "Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1128, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1129, ".has-warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1130, " class for warning state");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1131, "section", 219)(1132, "div", 32)(1133, "div", 33)(1134, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1135, "Input with Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1136, "div", 6)(1137, "div", 220)(1138, "div", 8)(1139, "div", 9)(1140, "label", 221);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1141, "Extra Large Input with Left Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1142, "div", 11)(1143, "div", 12)(1144, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1145, "Icon Left class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1146, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1147, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1148, ", XLarge Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1149, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1150, ".input-xl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1151, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1152, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1153, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1154, " class for XLarge Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1155, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1156, "input", 223);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1157, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1158, "i", 225);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1159, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1160, "Icon Left class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1161, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1162, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1163, ", XLarge Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1164, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1165, ".input-xl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1166, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1167, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1168, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1169, " class for XLarge Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1170, "div", 220)(1171, "div", 8)(1172, "div", 9)(1173, "label", 226);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1174, "Extra Large Input with Right Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1175, "div", 11)(1176, "div", 12)(1177, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1178, "XLarge Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1179, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1180, ".input-xl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1181, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1182, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1183, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1184, " class for XLarge Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1185, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1186, "input", 227);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1187, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1188, "i", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1189, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1190, "XLarge Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1191, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1192, ".input-xl");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1193, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1194, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1195, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1196, " class for XLarge Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1197, "div", 220)(1198, "div", 8)(1199, "div", 9)(1200, "label", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1201, "Large Input with Left Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1202, "div", 11)(1203, "div", 12)(1204, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1205, "Icon Left class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1206, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1207, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1208, ", Large Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1209, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1210, ".input-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1211, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1212, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1213, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1214, " class for Large Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1215, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1216, "input", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1217, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1218, "i", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1219, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1220, "Icon Left class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1221, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1222, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1223, ", Large Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1224, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1225, ".input-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1226, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1227, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1228, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1229, " class for Large Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1230, "div", 220)(1231, "div", 8)(1232, "div", 9)(1233, "label", 232);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1234, "Large Input with Right Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1235, "div", 11)(1236, "div", 12)(1237, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1238, "Large Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1239, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1240, ".input-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1241, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1242, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1243, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1244, " class for Large Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1245, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1246, "input", 233);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1247, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1248, "i", 234);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1249, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1250, "Large Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1251, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1252, ".input-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1253, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1254, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1255, ".font-medium-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1256, " class for Large Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1257, "div", 220)(1258, "div", 8)(1259, "div", 9)(1260, "label", 235);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1261, "Default Input with Left Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1262, "div", 11)(1263, "div", 12)(1264, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1265, "input", 236);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1266, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1267, "i", 237);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1268, "div", 220)(1269, "div", 8)(1270, "div", 9)(1271, "label", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1272, "Default Input with Right Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1273, "div", 11)(1274, "div", 12)(1275, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1276, "input", 239);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1277, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1278, "i", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1279, "div", 220)(1280, "div", 8)(1281, "div", 9)(1282, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1283, "Small Input with Left Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1284, "div", 11)(1285, "div", 12)(1286, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1287, "input", 241);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1288, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1289, "i", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1290, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1291, "Icon Left class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1292, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1293, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1294, ", Small Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1295, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1296, ".input-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1297, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1298, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1299, ".font-small-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1300, " class for Small Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1301, "div", 220)(1302, "div", 8)(1303, "div", 9)(1304, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1305, "Small Input with Right Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1306, "div", 11)(1307, "div", 12)(1308, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1309, "input", 243);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1310, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1311, "i", 244);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1312, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1313, "Small Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1314, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1315, ".input-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1316, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1317, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1318, ".font-small-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1319, " class for Small Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1320, "div", 220)(1321, "div", 8)(1322, "div", 9)(1323, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1324, "Extra Small Input with Left Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1325, "div", 11)(1326, "div", 12)(1327, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1328, "input", 245);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1329, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1330, "i", 246);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1331, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1332, "Icon Left class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1333, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1334, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1335, ", XSmall Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1336, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1337, ".input-xs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1338, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1339, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1340, ".font-small-2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1341, " class for XSmall Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1342, "div", 220)(1343, "div", 8)(1344, "div", 9)(1345, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1346, "Extra Small Input with Right Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1347, "div", 11)(1348, "div", 12)(1349, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1350, "input", 247);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1351, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1352, "i", 248);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1353, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1354, "XSmall Input class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1355, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1356, ".input-xs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1357, "& ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1358, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1359, ".font-small-2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1360, " class for XSmall Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1361, "div", 220)(1362, "div", 8)(1363, "div", 9)(1364, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1365, "Round Input with Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1366, "div", 11)(1367, "div", 12)(1368, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1369, "input", 249);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1370, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1371, "i", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1372, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1373, "Use class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1374, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1375, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1376, " class for Left Icon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1377, "div", 220)(1378, "div", 8)(1379, "div", 9)(1380, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1381, "Round Input with Right Spin Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1382, "div", 11)(1383, "div", 12)(1384, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1385, "input", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1386, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1387, "i", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1388, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1389, "Default right icon. No classes needed.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1390, "div", 220)(1391, "div", 8)(1392, "div", 9)(1393, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1394, "Default Input with Spin Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1395, "div", 11)(1396, "div", 12)(1397, "div", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1398, "input", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1399, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1400, "i", 254);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1401, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1402, "Icon Left class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1403, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1404, ".has-icon-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1405, " & ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1406, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1407, ".spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1408, " class to spin the Icon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1409, "div", 220)(1410, "div", 8)(1411, "div", 9)(1412, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1413, "Default Input with Right Spin Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1414, "div", 11)(1415, "div", 12)(1416, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1417, "input", 255);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1418, "div", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1419, "i", 256);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1420, "p")(1421, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1422, ".spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1423, " class to spin the Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1424, "section", 257)(1425, "div", 32)(1426, "div", 33)(1427, "h4", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1428, "Control Color Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1429, "div", 6)(1430, "div", 7)(1431, "div", 8)(1432, "div", 9)(1433, "label", 258);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1434, "Input Font Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1435, "div", 11)(1436, "div", 12)(1437, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1438, "input", 259);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1439, "div", 7)(1440, "div", 8)(1441, "div", 9)(1442, "label", 260);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1443, "Input Border Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1444, "div", 11)(1445, "div", 12)(1446, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1447, "input", 261);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1448, "div", 7)(1449, "div", 8)(1450, "div", 9)(1451, "label", 262);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1452, "Input Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1453, "div", 11)(1454, "div", 12)(1455, "div", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1456, "input", 263);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1457, "div", 7)(1458, "div", 8)(1459, "div", 9)(1460, "label", 264);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1461, "Select Font Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1462, "div", 11)(1463, "div", 12)(1464, "div", 186)(1465, "select", 265)(1466, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1467, "Select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1468, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1469, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1470, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1471, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1472, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1473, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1474, "div", 7)(1475, "div", 8)(1476, "div", 9)(1477, "label", 266);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1478, "Select Border Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1479, "div", 11)(1480, "div", 12)(1481, "div", 186)(1482, "select", 267)(1483, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1484, "Select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1485, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1486, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1487, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1488, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1489, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1490, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1491, "div", 7)(1492, "div", 8)(1493, "div", 9)(1494, "label", 268);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1495, "Select Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1496, "div", 11)(1497, "div", 12)(1498, "div", 186)(1499, "select", 269)(1500, "option", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1501, "Select options");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1502, "option", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1503, "One");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1504, "option", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1505, "Two");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1506, "option", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1507, "Three");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1508, "div", 7)(1509, "div", 8)(1510, "div", 9)(1511, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1512, "Textarea Font Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1513, "div", 11)(1514, "div", 12)(1515, "div", 186)(1516, "textarea", 270);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1517, "Textarea font Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1518, "div", 7)(1519, "div", 8)(1520, "div", 9)(1521, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1522, "Textarea Border Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1523, "div", 11)(1524, "div", 12)(1525, "div", 186)(1526, "textarea", 271);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1527, "Textarea with Colored Border");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1528, "div", 7)(1529, "div", 8)(1530, "div", 9)(1531, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1532, "Textarea Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1533, "div", 11)(1534, "div", 12)(1535, "div", 186)(1536, "textarea", 272);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1537, "Textarea with Colored background");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](407);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.multipleSelectArray)("multiple", true)("ngModel", ctx.multipleMultiSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c1, ctx.focucedElement === "textbox2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c1, ctx.focucedElement === "email1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c1, ctx.focucedElement === "password1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c1, ctx.focucedElement === "url1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c1, ctx.focucedElement === "number12"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c1, ctx.focucedElement === "textarea2_1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c1, ctx.focucedElement === "selectOpt"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c1, ctx.focucedElement === "time12"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c1, ctx.focucedElement === "month12"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formImport);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_0__.MatchHeightDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__.NgSelectComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n}\n\nselect.form-control[_ngcontent-%COMP%]:not([size]):not([multiple]).input-sm {\n  padding: unset !important;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0taW5wdXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDO0FBQ2hEOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6ImZvcm0taW5wdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKS5pbnB1dC1zbSB7XG4gIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLXdlZWtkYXkge1xuICBjb2xvcjogIzE3YTJiODtcbn1cblxuLm5nYi1kcC13ZWVrLW51bWJlcixcbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5uZ2ItZHAtZGF5IHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtbW9udGgge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGFlMGU1ICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC13ZWVrZGF5cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtbW9udGgtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW0gLjI1cmVtIDAgMDtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5jdXN0b20tZGF5LnJhbmdlLFxuLmN1c3RvbS1kYXk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20tZGF5LmZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWVsZW1lbnRzL2Zvcm0taW5wdXRzL2Zvcm0taW5wdXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDO0FBQ2hEOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOzs7QUFHQSw0K0pBQTQrSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2QzZDlkZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpob3Zlcjpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodCB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAuMTg1cmVtIC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXk6YWN0aXZlIHtcbiAgY29sb3I6ICM2ZDcxODMgIWltcG9ydGFudDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG59XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2w6bm90KFtzaXplXSk6bm90KFttdWx0aXBsZV0pLmlucHV0LXNtIHtcbiAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtd2Vla2RheSB7XG4gIGNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC1tb250aCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYnRuLWxpZ2h0OmhvdmVyIHtcbiAgY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kYXRlcGlja2VyLW1vbnRoLXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1tb250aC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 71833:
/*!********************************************************************************!*\
  !*** ./src/app/content/forms/form-elements/input-grid/input-grid.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputGridComponent": () => (/* binding */ InputGridComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);








function InputGridComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "m-card", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function InputGridComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.reloadHorizontalGrid($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Horizontal Grid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form")(6, "div", 16)(7, "div", 6)(8, "div", 17)(9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 20)(12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6)(15, "div", 22)(16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 24)(19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6)(22, "div", 26)(23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 28)(26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 6)(29, "div", 30)(30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 32)(33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 6)(36, "div", 34)(37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 36)(40, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 6)(43, "div", 38)(44, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 38)(47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 40)(50, "div", 41)(51, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "i", 45);
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
function InputGridComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49)(1, "m-card", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function InputGridComponent_div_10_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.reloadGridWithRowLabel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Grid With Row Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form")(6, "div", 16)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Row Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 17)(11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 20)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Row Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6)(19, "div", 22)(20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 24)(23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Row Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 6)(28, "div", 26)(29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 28)(32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Row Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 6)(37, "div", 30)(38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 32)(41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Row Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 6)(46, "div", 34)(47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 36)(50, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Row Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 6)(55, "div", 38)(56, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 38)(59, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 40)(62, "div", 41)(63, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 45);
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
class InputGridComponent {
  constructor() {
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Input Grid',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Input Grid',
        'isLink': false
      }]
    };
  }
  reloadHorizontalGrid() {
    this.blockUIHorizontalGrid.start('Loading..');
    setTimeout(() => {
      this.blockUIHorizontalGrid.stop();
    }, 2500);
  }
  reloadGridWithRowLabel() {
    this.blockUIGridWithRowLabel.start('Loading..');
    setTimeout(() => {
      this.blockUIGridWithRowLabel.stop();
    }, 2500);
  }
}
InputGridComponent.ɵfac = function InputGridComponent_Factory(t) {
  return new (t || InputGridComponent)();
};
InputGridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: InputGridComponent,
  selectors: [["app-input-grid"]],
  decls: 616,
  vars: 5,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "horizontal-grid", 1, "horizontal-grid"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], ["id", "grid-row-label", 1, "grid-row-label"], ["id", "grid-with-label", 1, "grid-with-label"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "form-body"], [1, "col-md-1"], [1, "form-group"], ["type", "text", "placeholder", "1", 1, "form-control"], [1, "col-md-11"], ["type", "text", "placeholder", "col-md-11", 1, "form-control"], [1, "col-md-2"], ["type", "text", "placeholder", "col-md-2", 1, "form-control"], [1, "col-md-10"], ["type", "text", "placeholder", "col-md-10", 1, "form-control"], [1, "col-md-3"], ["type", "text", "placeholder", "col-md-3", 1, "form-control"], [1, "col-md-9"], ["type", "text", "placeholder", "col-md-9", 1, "form-control"], [1, "col-md-4"], ["type", "text", "placeholder", "col-md-4", 1, "form-control"], [1, "col-md-8"], ["type", "text", "placeholder", "col-md-8", 1, "form-control"], [1, "col-md-5"], ["type", "text", "placeholder", "col-md-5", 1, "form-control"], [1, "col-md-7"], ["type", "text", "placeholder", "col-md-7", 1, "form-control"], [1, "col-md-6"], ["type", "text", "placeholder", "col-md-6", 1, "form-control"], [1, "form-actions"], [1, "text-right"], ["type", "submit", 1, "btn", "btn-primary"], [1, "feather", "ft-thumbs-up", "position-right"], ["type", "reset", 1, "btn", "btn-warning"], [1, "feather", "ft-refresh-cw", "position-right"], ["id", "left-right-offset", 1, "left-right-offset"], ["matchHeight", "card", 1, "row"], [1, "col-xl-6", "col-lg-12"], [1, "col-md-12"], ["type", "text", "placeholder", "col-md-12", 1, "form-control"], [1, "text-left"], [1, "col-md-11", "ml-auto"], ["type", "text", "placeholder", "col-md-11 ml-auto", 1, "form-control"], [1, "col-md-10", "ml-auto"], ["type", "text", "placeholder", "col-md-10 ml-auto", 1, "form-control"], [1, "col-md-9", "ml-auto"], ["type", "text", "placeholder", "col-md-9 ml-auto", 1, "form-control"], [1, "col-md-8", "ml-auto"], ["type", "text", "placeholder", "col-md-8 ml-auto", 1, "form-control"], [1, "col-md-7", "ml-auto"], ["type", "text", "placeholder", "col-md-7 ml-auto", 1, "form-control"], [1, "col-md-6", "ml-auto"], ["type", "text", "placeholder", "col-md-6 ml-auto", 1, "form-control"], [1, "col-md-5", "ml-auto"], ["type", "text", "placeholder", "col-md-5 ml-auto", 1, "form-control"], [1, "col-md-4", "ml-auto"], ["type", "text", "placeholder", "col-md-4 ml-auto", 1, "form-control"], [1, "col-md-3", "ml-auto"], ["type", "text", "placeholder", "col-md-3 ml-auto", 1, "form-control"], [1, "col-md-2", "ml-auto"], ["type", "text", "placeholder", "col-md-2 ml-auto0", 1, "form-control"], [1, "col-md-1", "ml-auto"], ["type", "text", "placeholder", "11", 1, "form-control"], ["id", "checkbox-input-grid", 1, "checkbox-input-grid"], [1, "col-md-10", "m-auto"], ["type", "text", "placeholder", "col-md-10 m-auto", 1, "form-control"], [1, "col-md-8", "m-auto"], ["type", "text", "placeholder", "col-md-8 m-auto", 1, "form-control"], [1, "col-md-6", "m-auto"], ["type", "text", "placeholder", "col-md-6 m-auto", 1, "form-control"], [1, "col-md-4", "m-auto"], ["type", "text", "placeholder", "col-md-4 m-auto", 1, "form-control"], [1, "col-md-2", "m-auto"], ["type", "text", "placeholder", "col-md-2 m-auto", 1, "form-control"], [1, "col-md-4", "text-right"], [1, "col-md-3", "text-right"], [1, "col-md-2", "text-right"], [1, "col-md-1", "text-right"], [1, "text-center"], [1, "col-md-9", "m-auto"], ["id", "grid-with-inline-row-label", 1, "grid-with-inline-row-label"], [1, "col-lg-1"], [1, "col-lg-11"], ["type", "text", "placeholder", "col-md-1", 1, "form-control"], ["id", "grid-with-inline-labels", 1, "grid-with-inline-labels"], ["id", "multiple-input-with-labels", 1, "multiple-input-with-labels"], ["type", "text", "placeholder", "First Input & First Row", 1, "form-control"], ["type", "text", "placeholder", "First Input & Second Row", 1, "form-control"], ["type", "text", "placeholder", "Second Input & First Row", 1, "form-control"], ["type", "text", "placeholder", "Second Input & Second Row", 1, "form-control"], ["id", "multiple-input-with-inline-labels", 1, "multiple-input-with-inline-labels"], [1, "form-group", "row"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""]],
  template: function InputGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, InputGridComponent_div_7_Template, 57, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 8)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, InputGridComponent_div_10_Template, 69, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 9)(12, "div", 6)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Grid With Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "form")(21, "div", 16)(22, "div", 6)(23, "div", 17)(24, "div", 18)(25, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20)(29, "div", 18)(30, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 6)(34, "div", 22)(35, "div", 18)(36, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 24)(40, "div", 18)(41, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 6)(45, "div", 26)(46, "div", 18)(47, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 28)(51, "div", 18)(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 6)(56, "div", 30)(57, "div", 18)(58, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 32)(62, "div", 18)(63, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 6)(67, "div", 34)(68, "div", 18)(69, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 36)(73, "div", 18)(74, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 6)(78, "div", 38)(79, "div", 18)(80, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 38)(84, "div", 18)(85, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 40)(89, "div", 41)(90, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "section", 46)(97, "div", 47)(98, "div", 48)(99, "div", 11)(100, "div", 12)(101, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Right Offset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 14)(104, "div", 15)(105, "form")(106, "div", 16)(107, "div", 6)(108, "div", 49)(109, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 6)(112, "div", 20)(113, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 6)(116, "div", 24)(117, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 6)(120, "div", 28)(121, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 6)(124, "div", 32)(125, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 6)(128, "div", 36)(129, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 6)(132, "div", 38)(133, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 6)(136, "div", 34)(137, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 6)(140, "div", 30)(141, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 6)(144, "div", 26)(145, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 6)(148, "div", 22)(149, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 6)(152, "div", 17)(153, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](154, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 40)(156, "div", 51)(157, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](159, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 48)(164, "div", 11)(165, "div", 12)(166, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Left Offset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 14)(169, "div", 15)(170, "form")(171, "div", 16)(172, "div", 6)(173, "div", 49)(174, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 6)(177, "div", 52)(178, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 6)(181, "div", 54)(182, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 6)(185, "div", 56)(186, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](187, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 6)(189, "div", 58)(190, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "input", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 6)(193, "div", 60)(194, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](195, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 6)(197, "div", 62)(198, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 6)(201, "div", 64)(202, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](203, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 6)(205, "div", 66)(206, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 6)(209, "div", 68)(210, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](211, "input", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "div", 6)(213, "div", 70)(214, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 6)(217, "div", 72)(218, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](219, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 40)(221, "div", 41)(222, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](224, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](227, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "section", 74)(229, "div", 47)(230, "div", 48)(231, "div", 11)(232, "div", 12)(233, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](234, "Centered Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 14)(236, "div", 15)(237, "form")(238, "div", 16)(239, "div", 6)(240, "div", 49)(241, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](242, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "div", 6)(244, "div", 75)(245, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](246, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 6)(248, "div", 77)(249, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 6)(252, "div", 79)(253, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](254, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "div", 6)(256, "div", 81)(257, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](258, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "div", 6)(260, "div", 83)(261, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](262, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "div", 6)(264, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "div", 30)(267, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](268, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "div", 6)(270, "label", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](271, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "div", 38)(273, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](274, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "div", 6)(276, "label", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](277, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](278, "div", 32)(279, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](280, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "div", 6)(282, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](283, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](284, "div", 24)(285, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](286, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "div", 40)(288, "div", 89)(289, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](291, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](294, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "div", 48)(296, "div", 11)(297, "div", 12)(298, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Centered Input with Default label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "div", 14)(301, "div", 15)(302, "form")(303, "div", 16)(304, "div", 6)(305, "div", 49)(306, "div", 18)(307, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](308, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](309, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 6)(311, "div", 75)(312, "div", 18)(313, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](315, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "div", 6)(317, "div", 90)(318, "div", 18)(319, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](321, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "div", 6)(323, "div", 79)(324, "div", 18)(325, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](327, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "div", 6)(329, "div", 81)(330, "div", 18)(331, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](333, "input", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 6)(335, "div", 83)(336, "div", 18)(337, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](339, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "div", 40)(341, "div", 89)(342, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](344, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](347, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "section", 91)(349, "div", 6)(350, "div", 10)(351, "div", 11)(352, "div", 12)(353, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](354, "Grid With Row Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "div", 14)(356, "div", 15)(357, "form")(358, "div", 16)(359, "div", 18)(360, "div", 6)(361, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "div", 93)(364, "div", 6)(365, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](366, "input", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](367, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](368, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](369, "div", 18)(370, "div", 6)(371, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "div", 93)(374, "div", 6)(375, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](376, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](378, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "div", 18)(380, "div", 6)(381, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](382, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "div", 93)(384, "div", 6)(385, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](386, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](388, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "div", 18)(390, "div", 6)(391, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "div", 93)(394, "div", 6)(395, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](396, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](398, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "div", 18)(400, "div", 6)(401, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](402, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "div", 93)(404, "div", 6)(405, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](406, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](408, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "div", 18)(410, "div", 6)(411, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, "Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "div", 93)(414, "div", 6)(415, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](416, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](418, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "div", 40)(420, "div", 41)(421, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](422, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](423, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](426, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "section", 95)(428, "div", 6)(429, "div", 10)(430, "div", 11)(431, "div", 12)(432, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](433, "Grid With Inline Input Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](434, "div", 14)(435, "div", 15)(436, "form")(437, "div", 16)(438, "div", 18)(439, "div", 6)(440, "div", 22)(441, "div", 6)(442, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](443, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](444, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](445, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "div", 24)(447, "div", 6)(448, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](449, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](450, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](451, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](452, "div", 18)(453, "div", 6)(454, "div", 26)(455, "div", 6)(456, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](457, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](458, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](459, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](460, "div", 28)(461, "div", 6)(462, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](463, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](464, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](465, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "div", 18)(467, "div", 6)(468, "div", 30)(469, "div", 6)(470, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](471, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](472, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](473, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](474, "div", 32)(475, "div", 6)(476, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](477, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](478, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](479, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](480, "div", 18)(481, "div", 6)(482, "div", 34)(483, "div", 6)(484, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](485, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](486, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](487, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](488, "div", 36)(489, "div", 6)(490, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](491, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](492, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](493, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](494, "div", 18)(495, "div", 6)(496, "div", 38)(497, "div", 6)(498, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](499, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](500, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](501, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](502, "div", 38)(503, "div", 6)(504, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](505, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](506, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](507, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](508, "div", 40)(509, "div", 41)(510, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](512, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](513, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](514, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](515, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](516, "section", 96)(517, "div", 6)(518, "div", 10)(519, "div", 11)(520, "div", 12)(521, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](522, "Multiple Input With Default Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](523, "div", 14)(524, "div", 15)(525, "form")(526, "div", 16)(527, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](528, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](529, "div", 6)(530, "div", 30)(531, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](532, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](533, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](534, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](535, "div", 32)(536, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](537, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](538, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](539, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](540, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](541, "Multiple width Input Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](542, "div", 6)(543, "div", 36)(544, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](545, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](546, "div", 34)(547, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](548, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "div", 6)(550, "div", 32)(551, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](552, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](553, "div", 30)(554, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](555, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](556, "div", 40)(557, "div", 41)(558, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](559, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](560, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](562, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](563, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](564, "section", 101)(565, "div", 6)(566, "div", 10)(567, "div", 11)(568, "div", 12)(569, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](570, "Multiple Input With Inline Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](571, "div", 14)(572, "div", 15)(573, "form")(574, "div", 16)(575, "div", 102)(576, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](577, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](578, "div", 24)(579, "div", 6)(580, "div", 30)(581, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](582, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](583, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](584, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](585, "div", 32)(586, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](587, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](588, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](589, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](590, "div", 102)(591, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](592, "Multiple width Input Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](593, "div", 24)(594, "div", 6)(595, "div", 36)(596, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](597, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](598, "div", 34)(599, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](600, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](601, "div", 6)(602, "div", 32)(603, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](604, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](605, "div", 30)(606, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](607, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](608, "div", 40)(609, "div", 41)(610, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](611, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](612, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](613, "button", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](614, "Reset ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](615, "i", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "horizontalGrid")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "gridWithRowLabel")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__.MatchHeightDirective, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .btn-warning {\n  border-color: #ff7216 !important;\n  background-color: #ff9149 !important;\n  color: #FFFFFF;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWdyaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImlucHV0LWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4td2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNzIxNiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWVsZW1lbnRzL2lucHV0LWdyaWQvaW5wdXQtZ3JpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQSx3cEJBQXdwQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4td2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNzIxNiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MTQ5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('horizontalGrid')], InputGridComponent.prototype, "blockUIHorizontalGrid", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('gridWithRowLabel')], InputGridComponent.prototype, "blockUIGridWithRowLabel", void 0);

/***/ }),

/***/ 86709:
/*!************************************************************************************!*\
  !*** ./src/app/content/forms/form-elements/input-groups/input-groups.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputGroupsComponent": () => (/* binding */ InputGroupsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-switch */ 72929);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);





class InputGroupsComponent {
  constructor() {}
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Input Groups',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Input Groups',
        'isLink': false
      }]
    };
  }
}
InputGroupsComponent.ɵfac = function InputGroupsComponent_Factory(t) {
  return new (t || InputGroupsComponent)();
};
InputGroupsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: InputGroupsComponent,
  selectors: [["app-input-groups"]],
  decls: 858,
  vars: 1,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "input-groups", 1, "input-groups"], ["matchHeight", "card", 1, "row"], [1, "col-xl-4", "col-lg-6", "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-block"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Addon to Left", "aria-describedby", "basic-addon1", 1, "form-control"], ["type", "text", "placeholder", "Addon To Right", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["id", "basic-addon2", 1, "input-group-text"], [1, "input-group-text"], ["type", "text", "placeholder", "Addon On Both Side", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], ["id", "basic-addon3", 1, "input-group-text"], [1, "la", "la-envelope"], ["type", "text", "placeholder", "Addon to Left", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "text", "placeholder", "Addon To Right", "aria-describedby", "basic-addon4", 1, "form-control"], ["id", "basic-addon4", 1, "input-group-text"], [1, "la", "la-user"], [1, "la", "la-phone-square"], [1, "la", "la-mobile"], ["id", "basic-addon5", 1, "input-group-text"], [1, "la", "la-spinner", "icon-spin"], ["type", "text", "placeholder", "Addon to Left", "aria-describedby", "basic-addon5", 1, "form-control"], ["type", "text", "placeholder", "Addon To Right", "aria-describedby", "basic-addon6", 1, "form-control"], ["id", "basic-addon6", 1, "input-group-text"], [1, "la", "la-rotate-right", "icon-spin"], [1, "la", "la-circle-o-notch", "icon-spin"], [1, "icon-spin", "la", "la-share-alt-square"], ["id", "input-group-checkbox", 1, "checkbox-input-group"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["type", "text", "placeholder", "Text input with Left checkbox ", "aria-describedby", "checkbox-addon1", 1, "form-control"], ["type", "text", "placeholder", "Text input with right checkbox", "aria-describedby", "checkbox-addon2", 1, "form-control"], ["type", "checkbox", "id", "customCheck2", 1, "custom-control-input"], ["for", "customCheck2", 1, "custom-control-label"], ["type", "checkbox", "id", "customCheck3", 1, "custom-control-input"], ["for", "customCheck3", 1, "custom-control-label"], ["type", "text", "placeholder", "Addon & checkbox Both Side", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], ["id", "input-group-radio", 1, "radio-input-group"], ["id", "radio-addon1", 1, "input-group-text"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "customRadio", "id", "customRadio1", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], ["type", "text", "placeholder", "Text input with Left radio", "aria-describedby", "radio-addon1", 1, "form-control"], ["type", "text", "placeholder", "Text input with right radio", "aria-describedby", "radio-addon2", 1, "form-control"], ["id", "radio-addon2", 1, "input-group-text"], ["type", "radio", "name", "customRadio", "id", "customRadio2", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], ["type", "radio", "name", "customRadio", "id", "customRadio3", "checked", "", 1, "custom-control-input"], ["for", "customRadio3", 1, "custom-control-label"], ["type", "text", "placeholder", "Addon & radio Both Side", "aria-label", "Amount (to the nearest dollar)", 1, "form-control"], ["id", "input-group-switchery", 1, "switchery-input-group"], [1, "input-group-prepend", "input-group-height"], ["id", "radio-addon3", 1, "input-group-text"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "size", "small", "checked", "", 1, "switchery"], ["type", "text", "placeholder", "Input with Left switchery", 1, "form-control", 2, "height", "50px"], ["type", "text", "placeholder", "Input with right switchery", 1, "form-control", 2, "height", "50px"], ["id", "radio-addon4", 1, "input-group-text"], ["type", "text", "placeholder", "Switchery On Both Side", 1, "form-control", 2, "height", "50px"], ["id", "input-group-sizing", 1, "sizing-input-group"], [1, "input-group", "input-group-lg"], ["id", "sizing-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Large Addon", "aria-describedby", "sizing-addon1", 1, "form-control"], ["type", "text", "placeholder", "Default Addon", "aria-describedby", "sizing-addon2", 1, "form-control"], ["id", "sizing-addon2", 1, "input-group-text"], [1, "input-group", "input-group-sm"], ["id", "sizing-addon3", 1, "input-group-text"], ["type", "text", "placeholder", "Small Addon", "aria-describedby", "sizing-addon3", 1, "form-control"], ["id", "input-group-buttons", 1, "buttons-input-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "text", "placeholder", "Button on left", "aria-describedby", "button-addon1", 1, "form-control"], ["type", "text", "placeholder", "Button on right", "aria-describedby", "button-addon2", 1, "form-control"], ["type", "text", "placeholder", "Button on both side", "aria-label", "Amount", 1, "form-control"], [1, "la", "la-microphone"], ["type", "text", "placeholder", "Button on left", "aria-describedby", "button-addon3", 1, "form-control"], ["type", "text", "placeholder", "Button on right", "aria-describedby", "button-addon4", 1, "form-control"], [1, "la", "la-pencil"], [1, "la", "la-search"], ["id", "input-group-dropdown", 1, "buttons-with-dropdown"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "dropdown-divider"], ["type", "text", "placeholder", "Dropdown on left", 1, "form-control"], ["type", "text", "placeholder", "Dropdown on right", 1, "form-control"], ["type", "text", "placeholder", "Dropdown on both side", "aria-label", "Amount", 1, "form-control"], [1, "segmented-buttons-with-dropdown"], ["type", "button", 1, "btn", "btn-primary", "buttons-border-dropdown"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle-split"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "show"], ["type", "text", "placeholder", "Segmented Button on left", 1, "form-control"], ["type", "text", "placeholder", "Segmented Button on right", 1, "form-control"], [1, "la", "la-paper-plane"], ["type", "text", "placeholder", "Segmented Button on both side", "aria-label", "Amount", 1, "form-control"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "show", 2, "margin", "-0.1rem -7rem 0 !important"], ["id", "color-validation", 1, "color-options"], ["id", "basic-addon7", 1, "input-group-text", "bg-primary", "border-primary", "white"], ["type", "text", "placeholder", "Addon to Left", "aria-describedby", "basic-addon7", 1, "form-control"], ["type", "text", "placeholder", "Addon To Right", "aria-describedby", "basic-addon8", 1, "form-control"], ["id", "basic-addon8", 1, "input-group-text", "bg-warning", "border-warning", "white"], [1, "input-group-text", "bg-success", "bg-darken-2", "border-success", "white"], [1, "la", "la-calendar"], ["type", "text", "placeholder", "Addon On Both Side", "aria-label", "\n            Amount (to the nearest dollar)", 1, "form-control", "bg-success", "border-success"], ["type", "button", 1, "btn", "btn-primary", "bg-danger", "border-danger"], ["type", "text", "placeholder", "Button on left", "aria-describedby", "button-addon5", 1, "form-control"], ["type", "text", "placeholder", "Button on right", "aria-describedby", "button-addon6", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", "bg-info", "border-info"], [1, "la", "la-check"], ["type", "button", 1, "btn", "btn-primary", "bg-pink", "border-pink", "bg-darken-2"], [1, "la", "la-shopping-cart"], ["type", "text", "placeholder", "Button on both side", "aria-label", "Amount", 1, "form-control", "bg-pink", "border-pink"]],
  template: function InputGroupsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Default Input group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div")(24, "div", 13)(25, "div", 14)(26, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "@");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "div", 9)(32, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Input group with Right Addon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 11)(35, "div", 12)(36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 18)(49, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7)(52, "div", 8)(53, "div", 9)(54, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Input group Addon on both side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 11)(57, "div", 12)(58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " class to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "before & after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div")(68, "div", 13)(69, "div", 14)(70, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 18)(74, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 7)(77, "div", 8)(78, "div", 9)(79, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Input group addon with Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 11)(82, "div", 12)(83, "div")(84, "div", 13)(85, "div", 14)(86, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 7)(90, "div", 8)(91, "div", 9)(92, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Input group addon with Right Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 11)(95, "div", 12)(96, "div")(97, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 18)(100, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 7)(103, "div", 8)(104, "div", 9)(105, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Input group addon with icon both side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 11)(108, "div", 12)(109, "div")(110, "div", 13)(111, "div", 14)(112, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 18)(116, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 7)(119, "div", 8)(120, "div", 9)(121, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Input group addon with Spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 11)(124, "div", 12)(125, "div")(126, "div", 13)(127, "div", 14)(128, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 7)(132, "div", 8)(133, "div", 9)(134, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Input group addon with Right Spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 11)(137, "div", 12)(138, "div")(139, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 18)(142, "span", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 7)(145, "div", 8)(146, "div", 9)(147, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Input group addon with Spinner both side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 11)(150, "div", 12)(151, "div")(152, "div", 13)(153, "div", 14)(154, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 18)(158, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "section", 38)(161, "div", 39)(162, "div", 40)(163, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Input group with Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 6)(166, "div", 7)(167, "div", 8)(168, "div", 9)(169, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Input group with checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 11)(172, "div", 12)(173, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, " text and Add checkbox inside.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div")(184, "div", 13)(185, "div", 14)(186, "div", 20)(187, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "input", 43)(189, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "input", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 7)(192, "div", 8)(193, "div", 9)(194, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Input group with Right Addon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 11)(197, "div", 12)(198, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, " text and Add checkbox inside.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div")(209, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 18)(212, "div", 20)(213, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "input", 47)(215, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 7)(217, "div", 8)(218, "div", 9)(219, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "Input group Addon on both side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "div", 11)(222, "div", 12)(223, "div")(224, "div", 13)(225, "div", 14)(226, "div", 20)(227, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "input", 49)(229, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 18)(232, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "section", 52)(235, "div", 39)(236, "div", 40)(237, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Input group with Radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 6)(240, "div", 7)(241, "div", 8)(242, "div", 9)(243, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Input group with radio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 11)(246, "div", 12)(247, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, " text and Add radio inside.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "fieldset")(258, "div", 13)(259, "div", 14)(260, "span", 53)(261, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](262, "input", 55)(263, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "div", 7)(266, "div", 8)(267, "div", 9)(268, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "Input group with Right Addon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 11)(271, "div", 12)(272, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, " text and Add radio inside.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "fieldset")(283, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "div", 18)(286, "span", 59)(287, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "input", 60)(289, "label", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 7)(291, "div", 8)(292, "div", 9)(293, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Input group Addon on both side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "div", 11)(296, "div", 12)(297, "fieldset")(298, "div", 13)(299, "div", 14)(300, "span", 53)(301, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](302, "input", 62)(303, "label", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](304, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "div", 18)(306, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "section", 65)(309, "div", 39)(310, "div", 40)(311, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](312, "Input group with Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 6)(314, "div", 7)(315, "div", 8)(316, "div", 9)(317, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "Input group with Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "div", 11)(320, "div", 12)(321, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](327, "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, " text and Add switchery inside.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "div")(332, "div", 13)(333, "div", 66)(334, "span", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](335, "ui-switch", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](336, "input", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "div", 7)(338, "div", 8)(339, "div", 9)(340, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](341, "Input group with Right Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "div", 11)(343, "div", 12)(344, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](345, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](347, ".input-group-text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, " class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, " text and Add switchery inside.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "div")(355, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](356, "input", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "div", 18)(358, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](359, "ui-switch", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "div", 7)(361, "div", 8)(362, "div", 9)(363, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Input group with switchery on both side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "div", 11)(366, "div", 12)(367, "div")(368, "div", 13)(369, "div", 66)(370, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](371, "ui-switch", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](372, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](373, "div", 18)(374, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](375, "ui-switch", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "section", 73)(377, "div", 39)(378, "div", 40)(379, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](380, "Input Groups Sizing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "div", 6)(382, "div", 7)(383, "div", 8)(384, "div", 9)(385, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "Large Input group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "div", 11)(388, "div", 12)(389, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](390, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](392, ".input-group-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, " class to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395, ".input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](396, " for Large addon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "fieldset")(398, "div", 74)(399, "div", 14)(400, "span", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](401, "@");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](402, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "div", 7)(404, "div", 8)(405, "div", 9)(406, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](407, "Default Input group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "div", 11)(409, "div", 12)(410, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](411, "Default Input Group addon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "fieldset")(413, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](414, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "div", 18)(416, "span", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](417, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "div", 7)(419, "div", 8)(420, "div", 9)(421, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](422, "Small Input group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](423, "div", 11)(424, "div", 12)(425, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428, ".input-group-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](429, " class to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, ".input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](432, " for small addon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](433, "fieldset")(434, "div", 79)(435, "div", 14)(436, "span", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](437, "@example.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](438, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "section", 82)(440, "div", 39)(441, "div", 40)(442, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](443, "Input Groups Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "div", 6)(445, "div", 7)(446, "div", 8)(447, "div", 9)(448, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](449, "Input group Button On Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "div", 11)(451, "div", 12)(452, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](453, "Add button inside ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](455, "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "fieldset")(459, "div", 13)(460, "div", 14)(461, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](462, "Click Me!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](463, "input", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "div", 7)(465, "div", 8)(466, "div", 9)(467, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](468, "Input group Button On Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "div", 11)(470, "div", 12)(471, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](472, "Add button inside ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](473, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](474, "after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](475, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](476, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "fieldset")(478, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](479, "input", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "div", 18)(481, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, "Go");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "div", 7)(484, "div", 8)(485, "div", 9)(486, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](487, "Input group Button On Both Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](488, "div", 11)(489, "div", 12)(490, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](491, "Add button inside ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](492, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](493, "before & after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](494, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](495, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "fieldset")(497, "div", 13)(498, "div", 14)(499, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](500, "Love it!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](501, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "div", 18)(503, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](504, "Hate it!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](505, "div", 7)(506, "div", 8)(507, "div", 9)(508, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](509, "Input group Icon Button On Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "div", 11)(511, "div", 12)(512, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](513, "Add button inside ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](514, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](515, "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](516, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](517, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](518, "fieldset")(519, "div", 13)(520, "div", 14)(521, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](522, "i", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](523, "input", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "div", 7)(525, "div", 8)(526, "div", 9)(527, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](528, "Input group Button On Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](529, "div", 11)(530, "div", 12)(531, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](532, "Add button inside ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](533, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](534, "after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](536, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](537, "fieldset")(538, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](539, "input", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](540, "div", 18)(541, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](542, "i", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "div", 7)(544, "div", 8)(545, "div", 9)(546, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](547, "Input group Button On Both Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "div", 11)(549, "div", 12)(550, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](551, "Add button inside ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](552, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](553, "before & after");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](554, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](555, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](556, "fieldset")(557, "div", 13)(558, "div", 14)(559, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](560, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](561, "input", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](562, "div", 18)(563, "button", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](564, "Go!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](565, "section", 92)(566, "div", 39)(567, "div", 40)(568, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](569, "Buttons with Dropdown");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "div", 6)(571, "div", 7)(572, "div", 8)(573, "div", 9)(574, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](575, "Input group Dropdown On Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "div", 11)(577, "div", 12)(578, "div")(579, "div", 13)(580, "div", 14)(581, "div", 93)(582, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](583, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "div", 95)(585, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](586, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](587, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](588, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](589, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](590, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](591, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](592, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](593, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](594, "input", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](595, "div", 7)(596, "div", 8)(597, "div", 9)(598, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](599, "Input group Dropdown On Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](600, "div", 11)(601, "div", 12)(602, "div")(603, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](604, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](605, "div", 18)(606, "div", 93)(607, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](608, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](609, "div", 95)(610, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](611, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](612, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](613, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](614, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](615, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](616, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](617, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](618, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](619, "div", 7)(620, "div", 8)(621, "div", 9)(622, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](623, "Input group Dropdown On Both Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](624, "div", 11)(625, "div", 12)(626, "div")(627, "div", 13)(628, "div", 14)(629, "div", 93)(630, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](631, "i", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](632, "div", 95)(633, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](634, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](635, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](636, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](637, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](638, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](639, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](640, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](641, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](642, "input", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](643, "div", 18)(644, "div", 93)(645, "button", 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](646, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](647, "div", 95)(648, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](649, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](650, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](651, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](652, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](653, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](654, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](655, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](656, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](657, "section", 101)(658, "div", 39)(659, "div", 40)(660, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](661, "Segmented Buttons with Dropdown");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](662, "div", 6)(663, "div", 7)(664, "div", 8)(665, "div", 9)(666, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](667, "Segmented Button On Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "div", 11)(669, "div", 12)(670, "div")(671, "div", 13)(672, "div", 14)(673, "button", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](674, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](675, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](676, "button", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](677, "div", 105)(678, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](679, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](680, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](681, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](682, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](683, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](684, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](685, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](686, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](687, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](688, "div", 7)(689, "div", 8)(690, "div", 9)(691, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](692, "Segmented Button On Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](693, "div", 11)(694, "div", 12)(695, "div")(696, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](697, "input", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](698, "div", 18)(699, "button", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](700, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](701, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](702, "button", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](703, "div", 105)(704, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](705, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](706, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](707, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](708, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](709, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](710, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](711, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](712, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](713, "div", 7)(714, "div", 8)(715, "div", 9)(716, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](717, "Segmented Buttons On Both Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](718, "div", 11)(719, "div", 12)(720, "div")(721, "div", 13)(722, "div", 14)(723, "button", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](724, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](725, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](726, "button", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](727, "div", 105)(728, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](729, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](730, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](731, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](732, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](733, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](734, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](735, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](736, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](737, "input", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](738, "div", 18)(739, "button", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](740, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](741, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](742, "button", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](743, "div", 110)(744, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](745, "Action - 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](746, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](747, "Another Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](748, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](749, "Something else is here");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](750, "li", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](751, "button", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](752, "Separated link");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](753, "section", 111)(754, "div", 39)(755, "div", 40)(756, "h4", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](757, "Color options");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](758, "div", 6)(759, "div", 7)(760, "div", 8)(761, "div", 9)(762, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](763, "Default Input group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](764, "div", 11)(765, "div", 12)(766, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](767, "Add color using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](768, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](769, ".bg-COLORNAME");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](770, " class to the addon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](771, "fieldset")(772, "div", 13)(773, "div", 14)(774, "span", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](775, "@");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](776, "input", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](777, "div", 7)(778, "div", 8)(779, "div", 9)(780, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](781, "Input group with Right Addon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](782, "div", 11)(783, "div", 12)(784, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](785, "Add color using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](786, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](787, ".bg-COLORNAME");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](788, " class to the addon.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](789, "fieldset")(790, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](791, "input", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](792, "div", 18)(793, "span", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](794, "i", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](795, "div", 7)(796, "div", 8)(797, "div", 9)(798, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](799, "Input group Addon on both side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](800, "div", 11)(801, "div", 12)(802, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](803, "Add color using ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](804, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](805, ".bg-COLORNAME");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](806, " class to the addon and input with lighten/darken color. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](807, "fieldset")(808, "div", 13)(809, "div", 14)(810, "span", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](811, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](812, "input", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](813, "div", 18)(814, "span", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](815, ".00");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](816, "div", 7)(817, "div", 8)(818, "div", 9)(819, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](820, "Input group Button On Left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](821, "div", 11)(822, "div", 12)(823, "fieldset")(824, "div", 13)(825, "div", 14)(826, "button", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](827, "Click Me!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](828, "input", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](829, "div", 7)(830, "div", 8)(831, "div", 9)(832, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](833, "Input group Button On Right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](834, "div", 11)(835, "div", 12)(836, "fieldset")(837, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](838, "input", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](839, "div", 18)(840, "button", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](841, "i", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](842, "div", 7)(843, "div", 8)(844, "div", 9)(845, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](846, "Input group Button On Both Side");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](847, "div", 11)(848, "div", 12)(849, "fieldset")(850, "div", 13)(851, "div", 14)(852, "button", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](853, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](854, "input", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](855, "div", 18)(856, "button", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](857, "Shopping!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
    }
  },
  dependencies: [ngx_ui_switch__WEBPACK_IMPORTED_MODULE_3__.UiSwitchComponent, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_0__.MatchHeightDirective, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu],
  styles: [".btn[_ngcontent-%COMP%] {\n      border-radius: 0rem !important;\n}\n.buttons-border-dropdown[_ngcontent-%COMP%] {\n      border-right: none !important;\n}\n.input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\n      height: 40px;\n }\n[_nghost-%COMP%]     .dropdown .dropdown-menu {\n      margin: -0.1rem -3.7rem 0 !important;\n}\n[_nghost-%COMP%]     .custom-checkbox {\n      margin-bottom: 3px;\n      margin-left: 5px;\n  }\n[_nghost-%COMP%]     .custom-control {\n      margin-bottom: 3px;\n      min-height: auto;\n      margin-left: 5px;\n  }\n[_nghost-%COMP%]     .switch.switch-small small {\n      width: 18px;\n      height: 18px;\n      margin-right: 1px;\n      margin-top: 1px;\n}\n[_nghost-%COMP%]     .input-group-prepend {\n      height: 40px;\n  }\n[_nghost-%COMP%]     .input-group-height{\n\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWdyb3Vwcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO01BQ00sOEJBQThCO0FBQ3BDO0FBQ0E7TUFDTSw2QkFBNkI7QUFDbkM7QUFDQTtNQUNNLFlBQVk7Q0FDakI7QUFDRDtNQUNNLG9DQUFvQztBQUMxQztBQUNBO01BQ00sa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQjtBQUNGO01BQ00sa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixnQkFBZ0I7RUFDcEI7QUFDRjtNQUNNLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGVBQWU7QUFDckI7QUFDQTtNQUNNLFlBQVk7RUFDaEI7QUFDRjs7RUFFRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoiaW5wdXQtZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDByZW0gIWltcG9ydGFudDtcbn1cbi5idXR0b25zLWJvcmRlci1kcm9wZG93biB7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuIH1cbjpob3N0IDo6bmctZGVlcCAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgbWFyZ2luOiAtMC4xcmVtIC0zLjdyZW0gMCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY29udHJvbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2guc3dpdGNoLXNtYWxsIHNtYWxsIHtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmlucHV0LWdyb3VwLXByZXBlbmQge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICB9XG46aG9zdCA6Om5nLWRlZXAgLmlucHV0LWdyb3VwLWhlaWdodHtcblxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWVsZW1lbnRzL2lucHV0LWdyb3Vwcy9pbnB1dC1ncm91cHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLDhCQUE4QjtBQUNwQztBQUNBO01BQ00sNkJBQTZCO0FBQ25DO0FBQ0E7TUFDTSxZQUFZO0NBQ2pCO0FBQ0Q7TUFDTSxvQ0FBb0M7QUFDMUM7QUFDQTtNQUNNLGtCQUFrQjtNQUNsQixnQkFBZ0I7RUFDcEI7QUFDRjtNQUNNLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCO0FBQ0Y7TUFDTSxXQUFXO01BQ1gsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixlQUFlO0FBQ3JCO0FBQ0E7TUFDTSxZQUFZO0VBQ2hCO0FBQ0Y7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0Esb2tEQUFva0QiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDByZW0gIWltcG9ydGFudDtcbn1cbi5idXR0b25zLWJvcmRlci1kcm9wZG93biB7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuIH1cbjpob3N0IDo6bmctZGVlcCAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgICAgbWFyZ2luOiAtMC4xcmVtIC0zLjdyZW0gMCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY2hlY2tib3gge1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tY29udHJvbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuOmhvc3QgOjpuZy1kZWVwIC5zd2l0Y2guc3dpdGNoLXNtYWxsIHNtYWxsIHtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmlucHV0LWdyb3VwLXByZXBlbmQge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICB9XG46aG9zdCA6Om5nLWRlZXAgLmlucHV0LWdyb3VwLWhlaWdodHtcblxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 79425:
/*!************************************************************************!*\
  !*** ./src/app/content/forms/form-elements/select/select.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_ng_select_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_services/ng-select-data.service */ 49805);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);










const _c0 = ["ng-select"];
function SelectComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "m-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("reloadFunction", function SelectComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.reloadSingleSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Single Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Select can take a regular select box with search options within the Select control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 17)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Basic Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "ng-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " for basic select control.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ng-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_div_7_Template_ng_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.singlebasicSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 17)(17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Disabled Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Select will respond to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " attribute on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "<ng-select>");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " elements. You can also initialize Select with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "[disabled]: true");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " to get the same effect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ng-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_div_7_Template_ng_select_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.singleDisableMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17)(32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Hiding the search box ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Select allows you to hide the search box depending on the number of options which are displayed. In this example, we use the value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "[searchable]=\"false\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, " to tell Select to never display the search box.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ng-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_div_7_Template_ng_select_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.singleHideSearch = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r0.singleSelectArray)("searchable", true)("ngModel", ctx_r0.singlebasicSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r0.singleSelectArray)("disabled", true)("ngModel", ctx_r0.singleDisableMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r0.singleSelectArray)("searchable", false)("ngModel", ctx_r0.singleHideSearch);
  }
}
function SelectComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "m-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("reloadFunction", function SelectComponent_div_8_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.reloadMultipleSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Multiple Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Select also supports multi-value select boxes. The select below is declared with the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " attribute.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 17)(11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Basic Multi Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "ng-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " for basic select control. Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "[multiple]=\"true\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " attribute for multiple select box.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ng-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_div_8_Template_ng_select_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.multipleMultiSelect = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17)(23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Disabled Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Select will respond to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " attribute on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "<ng-select>");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " elements. You can also initialize Select with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "[disabled]: true");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " to get the same effect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ng-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_div_8_Template_ng_select_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.multipleDisableMode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 17)(38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Multi Select with Label ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Select multi-value select boxes can set restrictions regarding the maximum number of options selected. The select below is declared with the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "[multiple]=\"true\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " attribute with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "maxSelectedItems");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " in the select options.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "ng-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_div_8_Template_ng_select_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.multipleWithlabel = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r1.multipleSelectArray)("multiple", true)("ngModel", ctx_r1.multipleMultiSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r1.multipleSelectArray)("disabled", true)("multiple", true)("ngModel", ctx_r1.multipleDisableMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r1.multipleSelectArray)("multiple", true)("ngModel", ctx_r1.multipleWithlabel);
  }
}
function SelectComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r15.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r15.item_text);
  }
}
function SelectComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r16.avtar, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r16.item_text);
  }
}
const selectData = __webpack_require__(/*! ../../../../../assets/data/forms/form-elements/select.json */ 73191);
class SelectComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.matchedResultArray = [];
    this.cityLoading = false;
    this.singleSelectArray = selectData.singleSelectArray;
    this.multipleSelectArray = selectData.multipleSelectArray;
    this.eventArray = selectData.eventArray;
    this.programmaticArray = selectData.programmaticArray;
    this.loadArray = selectData.loadArray;
    this.templatingArray = selectData.templatingArray;
    this.singleSelect = selectData.singleSelect;
    this.taggingSupportArray = selectData.taggingSupportArray;
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Select',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Select',
        'isLink': false
      }]
    };
    this.singlebasicSelected = this.singleSelectArray[0].item_text;
    this.singleDisableMode = this.singleSelectArray[0].item_text;
    this.singleHideSearch = this.singleSelectArray[0].item_text;
    this.multipleMultiSelect = [{
      item_id: 1,
      item_text: 'Alaska'
    }, {
      item_id: 2,
      item_text: 'California'
    }];
    this.multipleDisableMode = [{
      item_id: 1,
      item_text: 'Alaska'
    }, {
      item_id: 2,
      item_text: 'California'
    }];
    this.multipleWithlabel = [];
    this.singleEvent = this.eventArray[0].item_text;
    this.multipleEvent = [];
    this.programmaticSingle = this.programmaticArray[0].item_text;
    this.programmaticMultiple = [];
    this.loadData = this.loadArray[2].item_text;
    this.template = this.templatingArray[0].item_text;
    this.singleSelectBackgroundColor = this.singleSelect[0].item_text;
    this.singleSelectMenuBackgroundColor = this.singleSelect[0].item_text;
    this.loadCity();
  }
  openSingleEvent() {
    window.alert('Open Event Fired.');
  }
  closeSingleEvent() {
    window.alert('Close Event Fired.');
  }
  onChange() {
    window.alert('Select Event Fired');
  }
  setCalifornia() {
    this.programmaticSingle = this.programmaticArray[1].item_text;
  }
  setCaliforniaAlabama() {
    this.programmaticMultiple = [{
      item_id: 2,
      item_text: 'California'
    }, {
      item_id: 5,
      item_text: 'Alabama'
    }];
  }
  programmaticMultipleClear() {
    this.programmaticMultiple = [];
  }
  customSearchFn(term, item) {
    term = term.toLocaleLowerCase();
    return item.item_text.toLocaleLowerCase().indexOf(term) > -1;
  }
  loadCity() {
    this.cityLoading = true;
    this.dataService.getPeople().subscribe(x => {
      this.matchedResultArray = x;
      this.cityLoading = false;
    });
  }
  reloadSingleSelect() {
    this.blockUISingleSelect.start('Loading..');
    setTimeout(() => {
      this.blockUISingleSelect.stop();
    }, 2500);
  }
  reloadMultipleSelect() {
    this.blockUIMultipleSelect.start('Loading..');
    setTimeout(() => {
      this.blockUIMultipleSelect.stop();
    }, 2500);
  }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) {
  return new (t || SelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_ng_select_data_service__WEBPACK_IMPORTED_MODULE_0__.NgSelectDataService));
};
SelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SelectComponent,
  selectors: [["app-select"]],
  viewQuery: function SelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.ngSelect = _t.first);
    }
  },
  decls: 115,
  vars: 30,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "basic-select2"], ["matchHeight", "card", 1, "row"], ["class", "col-xl-6 col-lg-12", 4, "blockUI", "blockUIMessage"], [1, "programmatic-control"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], [1, "col-xl-6", "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "form-group"], [1, "text-bold-600", "font-medium-2"], ["placeholder", "Select city", "bindLabel", "item_text", 3, "items", "ngModel", "ngModelChange", "open", "close", "change"], ["placeholder", "Select city", "bindLabel", "item_text", 3, "items", "multiple", "ngModel", "ngModelChange", "open", "close", "change"], ["bindLabel", "item_text", "placeholder", "Select city", 3, "items", "searchable", "ngModel", "ngModelChange"], ["ngSelect", ""], ["role", "toolbar", "aria-label", "Programmatic control", 1, "btn-toolbar"], ["aria-label", "Set Select option", 1, "btn-group", "btn-group-sm"], [1, "js-programmatic-set-val", "btn", "btn-outline-primary", 3, "click"], ["role", "group", "aria-label", "Open and close", 1, "btn-group", "btn-group-sm"], [1, "js-programmatic-open", "btn", "btn-outline-primary", 3, "click"], [1, "js-programmatic-close", "btn", "btn-outline-primary", 3, "click"], [1, "form-group", "mt-1"], ["bindLabel", "item_text", "placeholder", "Programmatic Events", 3, "items", "multiple", "ngModel", "ngModelChange"], ["role", "group", "aria-label", "Programmatic setting and clearing Select options", 1, "btn-group", "btn-group-sm"], ["type", "button", 1, "js-programmatic-multi-set-val", "btn", "btn-outline-primary", 3, "click"], ["type", "button", 1, "js-programmatic-multi-clear", "btn", "btn-outline-primary", 3, "click"], [1, "advance-options"], [1, "row"], ["bindLabel", "item_text", "bindValue", "item_text", "placeholder", "Select city", 3, "items", "searchable", "ngModel", "ngModelChange"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], ["bindLabel", "item_text", "bindValue", "item_id", "placeholder", "Select city or add custom tag", 3, "items", "addTag", "multiple", "ngModel", "ngModelChange"], ["bindLabel", "item_text", "placeholder", "Search by 'a'", 3, "items", "loading", "searchable", "searchFn"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], ["bindLabel", "item_text", "placeholder", "Select city", 3, "items", "disabled", "ngModel", "ngModelChange"], ["bindLabel", "item_text", "placeholder", "Select cities", 3, "items", "multiple", "ngModel", "ngModelChange"], ["bindLabel", "item_text", "placeholder", "Select cities", 3, "items", "disabled", "multiple", "ngModel", "ngModelChange"], ["bindLabel", "item_text", "placeholder", "Select cities", "maxSelectedItems", "2", 3, "items", "multiple", "ngModel", "ngModelChange"], ["height", "15", "width", "15", 3, "src"]],
  template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SelectComponent_div_7_Template, 40, 10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SelectComponent_div_8_Template, 49, 11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "section", 8)(10, "div", 9)(11, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Programmatic control");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "DOM Events");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Select will trigger some events on the original select element, allowing you to integrate it with other components.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17)(24, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " DOM Single ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ng-select", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_26_listener($event) {
        return ctx.singleEvent = $event;
      })("open", function SelectComponent_Template_ng_select_open_26_listener() {
        return ctx.openSingleEvent();
      })("close", function SelectComponent_Template_ng_select_close_26_listener() {
        return ctx.closeSingleEvent();
      })("change", function SelectComponent_Template_ng_select_change_26_listener() {
        return ctx.onChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 17)(28, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " DOM Multiple ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ng-select", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_30_listener($event) {
        return ctx.multipleEvent = $event;
      })("open", function SelectComponent_Template_ng_select_open_30_listener() {
        return ctx.openSingleEvent();
      })("close", function SelectComponent_Template_ng_select_close_30_listener() {
        return ctx.closeSingleEvent();
      })("change", function SelectComponent_Template_ng_select_change_30_listener() {
        return ctx.onChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 11)(32, "div", 12)(33, "div", 13)(34, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Programmatic access");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 15)(37, "div", 16)(38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Select supports methods that allow programmatic control of the component.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 17)(41, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Programmatic Single ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ng-select", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_43_listener($event) {
        return ctx.programmaticSingle = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 23)(46, "div", 24)(47, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_47_listener() {
        return ctx.setCalifornia();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, " Set \"California\" ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 26)(50, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_50_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " Open ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_52_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](44);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 29)(55, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " Programmatic Multiple ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ng-select", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_57_listener($event) {
        return ctx.programmaticMultiple = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 31)(59, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_59_listener() {
        return ctx.setCaliforniaAlabama();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " Set to California and Alabama ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SelectComponent_Template_button_click_61_listener() {
        return ctx.programmaticMultipleClear();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "section", 34)(64, "div", 35)(65, "div", 9)(66, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Advance Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 6)(69, "div", 11)(70, "div", 12)(71, "div", 13)(72, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Single Select Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 15)(75, "div", 16)(76, "div", 17)(77, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " Loading Array Data ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Select provides a way to load the data from a local array. You can provide initial selections with array data by providing the option tag for the selected values, similar to how it would be done for a standard select.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "ng-select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_81_listener($event) {
        return ctx.loadData = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 17)(83, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " Templating ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Various display options of the Select component can be changed: You can access the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "<ng-select >");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, " element and any attributes on those elements using .element. Templating is primarily controlled by the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " options.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "ng-select", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_93_listener($event) {
        return ctx.template = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](94, SelectComponent_ng_template_94_Template, 4, 2, "ng-template", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](95, SelectComponent_ng_template_95_Template, 4, 2, "ng-template", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 11)(97, "div", 12)(98, "div", 13)(99, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "Multiple Select Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 15)(102, "div", 16)(103, "div", 17)(104, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, " Tagging Support ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Select can be used to quickly set up fields used for tagging. That when tagging is enabled the user can select from pre-existing options or create a new tag by picking the first choice, which is what the user has typed into the search box so far.>");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "ng-select", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SelectComponent_Template_ng_select_ngModelChange_108_listener($event) {
        return ctx.selectedTag = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 17)(110, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " Customizing How Results Are Matched ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Unlike other dropdowns on this page, this one matches options only if the term appears in the beginning of the string as opposed to anywhere: This custom matcher uses a compatibility module that is only bundled in the full version of Select. You also have the option of using a more complex matcher.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](114, "ng-select", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "singleSelect")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "multipleSelect")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.eventArray)("ngModel", ctx.singleEvent);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.eventArray)("multiple", true)("ngModel", ctx.multipleEvent);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.programmaticArray)("searchable", true)("ngModel", ctx.programmaticSingle);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.multipleSelectArray)("multiple", true)("ngModel", ctx.programmaticMultiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.loadArray)("searchable", true)("ngModel", ctx.loadData);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.templatingArray)("searchable", true)("ngModel", ctx.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.taggingSupportArray)("addTag", true)("multiple", true)("ngModel", ctx.selectedTag);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.matchedResultArray)("loading", ctx.cityLoading)("searchable", true)("searchFn", ctx.customSearchFn);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_2__.MatchHeightDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgLabelTemplateDirective, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWVsZW1lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQSxvWEFBb1giLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('singleSelect')], SelectComponent.prototype, "blockUISingleSelect", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('multipleSelect')], SelectComponent.prototype, "blockUIMultipleSelect", void 0);

/***/ }),

/***/ 88676:
/*!************************************************************************!*\
  !*** ./src/app/content/forms/form-elements/switch/switch.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-switch */ 72929);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);








function SwitchComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "m-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function SwitchComponent_div_11_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.reloadBasicSwitcheryToggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Basic Switchery Toggle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "To set Switchery toggle, add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".switchery");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " class to checkbox.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 17)(11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Switchery Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 17)(16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ui-switch", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Switchery Unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 17)(21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ui-switch", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Switchery Checked & Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17)(26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "ui-switch", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Switchery Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
function SwitchComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "m-card", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function SwitchComponent_div_12_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.reloadRightSwitcheryToggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Right Switchery Toggle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " To set Switchery toggle to right, wrap checkbox with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, ".float-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " class.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 17)(11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Switchery Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 17)(16, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "ui-switch", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Switchery Unchecked");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 17)(21, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ui-switch", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Switchery Checked & Disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 17)(26, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "ui-switch", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Switchery Disabled");
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
class SwitchComponent {
  constructor() {
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Switch',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Form',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Switch',
        'isLink': false
      }]
    };
  }
  reloadBasicSwitcheryToggle() {
    this.blockUIBasicSwitcheryToggle.start('Loading..');
    setTimeout(() => {
      this.blockUIBasicSwitcheryToggle.stop();
    }, 2500);
  }
  reloadRightSwitcheryToggle() {
    this.blockUIRightSwitcheryToggle.start('Loading..');
    setTimeout(() => {
      this.blockUIRightSwitcheryToggle.stop();
    }, 2500);
  }
}
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) {
  return new (t || SwitchComponent)();
};
SwitchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SwitchComponent,
  selectors: [["app-switch"]],
  decls: 173,
  vars: 5,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "switchery-toggle", 1, "switchery-toggle"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], ["matchHeight", "card", 1, "row"], ["class", "col-lg-6 col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-lg-6", "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], [1, "form-group", "pb-1"], [1, "text-muted"], [1, "float-left"], ["switchColor", "white", "size", "large", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery"], ["for", "switcherySize", 1, "font-medium-2", "text-bold-600", "ml-1", "ls-1"], [1, "form-group", "mt-1", "pb-1"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery"], ["for", "switcherySize1", 1, "font-medium-2", "text-bold-600", "ml-1", "ds-1"], ["switchColor", "white", "size", "small", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery"], ["for", "switcherySize2", 1, "font-medium-2", "text-bold-600", "ml-1"], ["for", "switcherySize10", 1, "font-medium-2", "text-bold-600", "mr-1"], ["switchColor", "white", "size", "large", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery", "switch-large"], ["for", "switcherySize10", 1, "font-medium-2", "text-bold-600", "ml-1"], ["for", "switcherySize11", 1, "font-medium-2", "text-bold-600", "mr-1"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery", "switch-medium"], ["for", "switcherySize11", 1, "font-medium-2", "text-bold-600", "ml-1"], ["for", "switcherySize12", 1, "font-medium-2", "text-bold-600", "mr-1"], ["switchColor", "white", "size", "small", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery", "switch-small"], ["for", "switcherySize12", 1, "font-medium-2", "text-bold-600", "ml-1"], ["id", "theme-switchery", 1, "theme-switchery"], [1, "col-12"], ["switchColor", "white", "color", "rgb(150, 122, 220)", "checked", "", 1, "switchery"], ["for", "switcheryColor", 1, "card-title", "ml-1", "ds-1"], ["for", "switcheryColor4", 1, "card-title", "ml-1", "ds-1"], ["switchColor", "white", "color", "rgb(218, 68, 83)", "checked", "", 1, "switchery"], ["for", "switcheryColor3", 1, "card-title", "ml-1", "ds-1"], ["switchColor", "white", "color", "rgb(59, 175, 218)", "checked", "", 1, "switchery"], ["for", "switcheryColor2", 1, "card-title", "ml-1", "ds-1"], ["switchColor", "white", "color", "rgb(246, 187, 66)", "checked", "", 1, "switchery"], ["for", "switcheryColor1", 1, "card-title", "ml-1", "ds-1"], [1, "form-group", "row", "overflow-hidden"], [1, "col-sm-4", "col-5"], ["for", "switcheryColor10", 1, "card-title", "primary"], [1, "col-sm-4", "col-2", "text-center", "mb-1"], [1, "form-group", "row", "overflow-hidden", "mt-1"], ["for", "switcheryColor14", 1, "card-title", "success"], ["for", "switcheryColor13", 1, "card-title", "danger"], ["for", "switcheryColor12", 1, "card-title", "info"], [1, "form-group", "row", "mt-1"], ["for", "switcheryColor11", 1, "card-title", "warning"], [1, "col-sm-4", "col-2", "text-center", "overflow-hidden", "mb-1"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "font-medium-2", "text-bold-600", "ml-1", "ml-2"], ["switchColor", "white", "color", "rgb(55, 188, 155)", 1, "switchery"], [1, "font-medium-2", "text-bold-600", "ml-1"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "disabled", "", "checked", "", 1, "switchery"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "disabled", "", 1, "switchery"], [1, "float-right"], ["for", "switchery0", 1, "font-medium-2", "text-bold-600"], ["for", "switchery01", 1, "font-medium-2", "text-bold-600"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "checked", "", "disabled", "", 1, "switchery"], ["for", "switchery02", 1, "font-medium-2", "text-bold-600"], ["for", "switchery03", 1, "font-medium-2", "text-bold-600"]],
  template: function SwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Switchery Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SwitchComponent_div_11_Template, 30, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SwitchComponent_div_12_Template, 30, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Switchery Sizes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " To set Large Switchery toggle, add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "data-size=\"lg\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " to checkbox with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, ".switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "ui-switch", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Large Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 22)(35, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " To set Default Switchery toggle, add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, ".switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " class to checkbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "ui-switch", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Default Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 22)(45, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " To set Small Switchery toggle, add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "data-size=\"sm\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, " to checkbox with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, ".switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "ui-switch", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Small Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 11)(58, "div", 12)(59, "div", 13)(60, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Switchery Labels on both sides");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 15)(63, "div", 16)(64, "div", 17)(65, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Left Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "ui-switch", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Right Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 22)(71, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Left Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "ui-switch", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Right Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 22)(77, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Left Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "ui-switch", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Right Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "section", 36)(83, "div", 6)(84, "div", 37)(85, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Template Color Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 9)(89, "div", 11)(90, "div", 12)(91, "div", 13)(92, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Color Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 15)(95, "div", 16)(96, "div", 17)(97, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "ui-switch", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Primary Color Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 22)(102, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "ui-switch", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Success Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 22)(107, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "ui-switch", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Danger Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 22)(112, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "ui-switch", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Info Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 22)(117, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "ui-switch", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Warning Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 11)(122, "div", 12)(123, "div", 13)(124, "h4", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "COLOR SWITCHERY WITH LABELS ON BOTH SIDES");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 15)(127, "div", 16)(128, "div", 47)(129, "div", 48)(130, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Primary Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "ui-switch", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 48)(135, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Primary Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 51)(138, "div", 48)(139, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Success Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "ui-switch", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 48)(144, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Success Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 51)(147, "div", 48)(148, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Danger Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "ui-switch", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 48)(153, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "Danger Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 51)(156, "div", 48)(157, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Info Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "ui-switch", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 48)(162, "label", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Info Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 55)(165, "div", 48)(166, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Warning Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "ui-switch", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 48)(171, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Warning Color Label & Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "basicSwitcheryToggle")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "rightSwitcheryToggle")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_4__.UiSwitchComponent, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_1__.MatchHeightDirective, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n[_nghost-%COMP%]     .ml-2{\n  margin-top: 3px;\n}\n[_nghost-%COMP%]     .ls-1{\n  margin-top: 10px;\n}\n[_nghost-%COMP%]     .ds-1{\n  margin-top: 6px;\n}\n[_nghost-%COMP%]     .switch-medium .switch.switch-medium {\n  height: 30px;\n  border-radius: 30px;\n  top: 8px;\n}\n[_nghost-%COMP%]     .switch-large .switch.switch-large {\n  height: 40px;\n  border-radius: 40px;\n  top: 15px;\n}\n[_nghost-%COMP%]     .switch-small .switch.switch-small {\n  height: 20px;\n  border-radius: 20px;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1YiLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWwtMntcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5scy0xe1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kcy0xe1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaC1tZWRpdW0gLnN3aXRjaC5zd2l0Y2gtbWVkaXVtIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0b3A6IDhweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoLWxhcmdlIC5zd2l0Y2guc3dpdGNoLWxhcmdlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0b3A6IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaC1zbWFsbCAuc3dpdGNoLnN3aXRjaC1zbWFsbCB7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdG9wOiA0cHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mb3Jtcy9mb3JtLWVsZW1lbnRzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWO0FBQ0EsZ3ZDQUFndkMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWwtMntcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5scy0xe1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kcy0xe1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaC1tZWRpdW0gLnN3aXRjaC5zd2l0Y2gtbWVkaXVtIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0b3A6IDhweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3dpdGNoLWxhcmdlIC5zd2l0Y2guc3dpdGNoLWxhcmdlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICB0b3A6IDE1cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnN3aXRjaC1zbWFsbCAuc3dpdGNoLnN3aXRjaC1zbWFsbCB7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdG9wOiA0cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('basicSwitcheryToggle')], SwitchComponent.prototype, "blockUIBasicSwitcheryToggle", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('rightSwitcheryToggle')], SwitchComponent.prototype, "blockUIRightSwitcheryToggle", void 0);

/***/ }),

/***/ 56162:
/*!**************************************************************!*\
  !*** ./src/assets/data/forms/form-elements/form-inputs.json ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"multipleSelectArray":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}]}');

/***/ }),

/***/ 73191:
/*!*********************************************************!*\
  !*** ./src/assets/data/forms/form-elements/select.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"singleSelectArray":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}],"multipleSelectArray":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}],"eventArray":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}],"programmaticArray":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}],"loadArray":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}],"templatingArray":[{"item_id":1,"item_text":"Alaska","avtar":"../../../assets/images/flags/ak.png"},{"item_id":2,"item_text":"California","avtar":"../../../assets/images/flags/ca.png"},{"item_id":3,"item_text":"Colorado","avtar":"../../../assets/images/flags/co.png"},{"item_id":4,"item_text":"New Mexico","avtar":"../../../assets/images/flags/nm.png"},{"item_id":5,"item_text":"Alabama","avtar":"../../../assets/images/flags/al.png"},{"item_id":6,"item_text":"Connecticut","avtar":"../../../assets/images/flags/ct.png"},{"item_id":7,"item_text":"New York","avtar":"../../../assets/images/flags/ny.png"}],"singleSelect":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}],"taggingSupportArray":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}]}');

/***/ })

}]);
//# sourceMappingURL=src_app_content_forms_form-elements_form-elements_module_ts.js.map