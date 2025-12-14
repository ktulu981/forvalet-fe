"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_applications_kanban_kanban_module_ts"],{

/***/ 68915:
/*!**************************************************************!*\
  !*** ./src/app/content/applications/kanban/kanban.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KanbanModule": () => (/* binding */ KanbanModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kanban/kanban.component */ 52734);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-drag-and-drop-lists */ 90876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);












class KanbanModule {}
KanbanModule.ɵfac = function KanbanModule_Factory(t) {
  return new (t || KanbanModule)();
};
KanbanModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: KanbanModule
});
KanbanModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillModule.forRoot(), ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_1__.DndListModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
    path: '',
    component: _kanban_kanban_component__WEBPACK_IMPORTED_MODULE_0__.KanbanComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](KanbanModule, {
    declarations: [_kanban_kanban_component__WEBPACK_IMPORTED_MODULE_0__.KanbanComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillModule, ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_1__.DndListModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 52734:
/*!************************************************************************!*\
  !*** ./src/app/content/applications/kanban/kanban/kanban.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KanbanComponent": () => (/* binding */ KanbanComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var quill_mention__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-mention */ 75367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/quill-initialize-service.service */ 47266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-drag-and-drop-lists */ 90876);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);











function KanbanComponent_div_96_div_18_li_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const imageUrl_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", imageUrl_r6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function (a0) {
  return {
    "ficon feather ft-clock font-size-small mr-25": a0
  };
};
const _c1 = function (a0) {
  return {
    "ficon feather ft-message-square font-size-small mr-25": a0
  };
};
const _c2 = function (a0) {
  return {
    "ficon feather ft-link font-size-small mr-25": a0
  };
};
function KanbanComponent_div_96_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_div_96_div_18_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.showSidebar($event));
    })("click", function KanbanComponent_div_96_div_18_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const kanban_r4 = restoredCtx.$implicit;
      const kanbanList_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.editItem(kanban_r4, kanbanList_r2.tickets));
    })("dndMoved", function KanbanComponent_div_96_div_18_Template_div_dndMoved_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const kanban_r4 = restoredCtx.$implicit;
      const kanbanList_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.removeItem(kanban_r4, kanbanList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 83)(5, "div", 84)(6, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 90)(20, "div", 91)(21, "ul", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, KanbanComponent_div_96_div_18_li_22_Template, 2, 1, "li", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const kanban_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dndType", "kanban")("dndObject", kanban_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", kanban_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !kanban_r4.showImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", kanban_r4.bg_image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, kanban_r4.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 12, kanban_r4.date, "MMM d"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c1, kanban_r4.comment));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](kanban_r4.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c2, kanban_r4.attachment));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](kanban_r4.attachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", kanban_r4.image);
  }
}
const _c3 = function () {
  return {
    standalone: true
  };
};
function KanbanComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63)(1, "header", 64)(2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function KanbanComponent_div_96_Template_div_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.contentNew = $event.target.textContent);
    })("click", function KanbanComponent_div_96_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.showSidebar($event));
    })("focusout", function KanbanComponent_div_96_Template_div_focusout_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const kanbanList_r2 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.validateProfile(ctx_r16.contentNew, kanbanList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_div_96_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const kanbanList_r2 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.addKanbanItem(kanbanList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "+ Add New Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 69)(8, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_div_96_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const kanbanList_r2 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.deleteKanbanList(kanbanList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "main", 73)(15, "div")(16, "div")(17, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, KanbanComponent_div_96_div_18_Template, 23, 21, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "form", 76)(21, "div", 21)(22, "textarea", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function KanbanComponent_div_96_Template_textarea_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.addTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 21)(24, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_div_96_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const kanbanList_r2 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.submitItem(kanbanList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_div_96_Template_button_click_26_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const kanbanList_r2 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.cancleKanban(kanbanList_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const kanbanList_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", kanbanList_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dndModel", kanbanList_r2.tickets);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", kanbanList_r2.tickets);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !kanbanList_r2.showNewItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.addTitle)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c3));
  }
}
const _c4 = function () {
  return {
    height: "110px",
    border: "0px solid #ccc"
  };
};
const data = __webpack_require__(/*! ../../../../../assets/data/application/kanban.json */ 49999);
class KanbanComponent {
  constructor(_renderer, formBuilder, QuillInitializeServiceServicec) {
    this._renderer = _renderer;
    this.formBuilder = formBuilder;
    this.QuillInitializeServiceServicec = QuillInitializeServiceServicec;
    this.config = {
      wheelPropagation: true
    };
    this.kanbanList = [];
    this.selectKanbanArray = [];
    this.blured = false;
    this.focused = false;
    this.atValues = [{
      id: 1,
      value: "Fredrik Sundqvist",
      link: "https://google.com"
    }, {
      id: 2,
      value: "Patrik Sjölin"
    }];
    this.hashValues = [{
      id: 3,
      value: "Fredrik Sundqvist 2"
    }, {
      id: 4,
      value: "Patrik Sjölin 2"
    }];
    this.list = [{
      id: 1,
      name: 'item1',
      children: []
    }, {
      id: 2,
      name: 'item2',
      children: []
    }, {
      id: 3,
      name: 'item3',
      children: []
    }];
    this.kanbanquillConfig = {
      toolbar: ".kanbantoolbar",
      autoLink: true,
      keyboard: {
        bindings: {
          enter: {
            key: 13,
            handler: (range, context) => {
              console.log("enter");
              return true;
            }
          }
        }
      }
    };
    this.draggable = {
      // note that data is handled with JSON.stringify/JSON.parse
      // only set simple data or POJO's as methods will be lost 
      data: "myDragData",
      effectAllowed: "all",
      disable: false,
      handle: false
    };
  }
  ngOnInit() {
    this.showNewItem = false;
    this.selectKanbanClass = "bg-primary";
    this.kanban = this.formBuilder.group({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(['']),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(['']),
      selectedLabel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(['']),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl([''])
    });
    this.kanbanList = JSON.parse(localStorage.getItem("kanban"));
    if (this.kanbanList == null || this.kanbanList.length == 0) {
      this.kanbanList = data;
    } else {}
    localStorage.setItem("kanban", JSON.stringify(this.kanbanList));
  }
  ngAfterViewInit() {
    const items = localStorage.getItem("kanban");
    if (items) {
      this.kanbanList = JSON.parse(items);
    }
  }
  onDragStart(event) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  onDragEnd(event) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  onDraggableCopied(event) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  onDraggableLinked(event) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
  onDraggableMoved(event) {
    console.log("draggable moved", JSON.stringify(event, null, 2));
  }
  onDragCanceled(event) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  onDragover(event) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  showSidebar(event) {
    const toggleIcon = document.getElementById("kanban_sidebar");
    const toggle = document.getElementById("content-overlay");
    if (event.currentTarget.className === "kanban-item") {
      this._renderer.addClass(toggleIcon, "show");
      this._renderer.addClass(toggle, "show");
    } else if (event.currentTarget.className === "ficon feather ft-x" || "kanban-overlay") {
      this._renderer.removeClass(toggleIcon, "show");
      this._renderer.removeClass(toggle, "show");
    }
  }
  editItem(value, kanban) {
    const date1 = value.date;
    const split = date1.split('/');
    let dateObj = {
      "year": Number(split[2]),
      "month": Number([split[0]]),
      "day": Number(split[1])
    };
    this.kanban.setValue({
      title: value.name,
      date: dateObj,
      selectedLabel: value.selectedLabel,
      description: value.description
    });
    this.kanbanValue = value;
    this.selectKanbanArray = kanban;
    if (value.selectedLabel == 'Primary') {
      const toggleIcon = document.getElementById('selectLable');
      this._renderer.removeClass(toggleIcon, 'bg-sucess');
      this._renderer.removeClass(toggleIcon, 'bg-danger');
      this._renderer.removeClass(toggleIcon, 'bg-info');
      this._renderer.removeClass(toggleIcon, 'bg-warning');
      this._renderer.removeClass(toggleIcon, 'bg-secondary');
      this._renderer.addClass(toggleIcon, 'bg-primary');
    } else if (value.selectedLabel == 'Danger') {
      const toggleIcon = document.getElementById('selectLable');
      this._renderer.removeClass(toggleIcon, 'bg-primary');
      this._renderer.removeClass(toggleIcon, 'bg-sucess');
      this._renderer.removeClass(toggleIcon, 'bg-info');
      this._renderer.removeClass(toggleIcon, 'bg-warning');
      this._renderer.removeClass(toggleIcon, 'bg-secondary');
      this._renderer.addClass(toggleIcon, 'bg-danger');
    } else if (value.selectedLabel == 'Success') {
      const toggleIcon = document.getElementById('selectLable');
      this._renderer.removeClass(toggleIcon, 'bg-primary');
      this._renderer.removeClass(toggleIcon, 'bg-danger');
      this._renderer.removeClass(toggleIcon, 'bg-info');
      this._renderer.removeClass(toggleIcon, 'bg-warning');
      this._renderer.removeClass(toggleIcon, 'bg-secondary');
      this._renderer.addClass(toggleIcon, 'bg-success');
    } else if (value.selectedLabel == 'Info') {
      const toggleIcon = document.getElementById('selectLable');
      this._renderer.removeClass(toggleIcon, 'bg-primary');
      this._renderer.removeClass(toggleIcon, 'bg-danger');
      this._renderer.removeClass(toggleIcon, 'bg-success');
      this._renderer.removeClass(toggleIcon, 'bg-warning');
      this._renderer.removeClass(toggleIcon, 'bg-secondary');
      this._renderer.addClass(toggleIcon, 'bg-info');
    } else if (value.selectedLabel == 'Warning') {
      const toggleIcon = document.getElementById('selectLable');
      this._renderer.removeClass(toggleIcon, 'bg-primary');
      this._renderer.removeClass(toggleIcon, 'bg-danger');
      this._renderer.removeClass(toggleIcon, 'bg-success');
      this._renderer.removeClass(toggleIcon, 'bg-info');
      this._renderer.removeClass(toggleIcon, 'bg-secondary');
      this._renderer.addClass(toggleIcon, 'bg-warning');
    } else if (value.selectedLabel == 'Secondary') {
      const toggleIcon = document.getElementById('selectLable');
      this._renderer.removeClass(toggleIcon, 'bg-primary');
      this._renderer.removeClass(toggleIcon, 'bg-danger');
      this._renderer.removeClass(toggleIcon, 'bg-success');
      this._renderer.removeClass(toggleIcon, 'bg-warning');
      this._renderer.removeClass(toggleIcon, 'bg-info');
      this._renderer.addClass(toggleIcon, 'bg-secondary');
    }
  }
  deleteKanban(event) {
    this.kanbanValue;
    for (let i = 0; i < this.kanbanList.length; i++) {
      if (this.selectKanbanArray.length == this.kanbanList[i].tickets.length) {
        for (var j = 0; j < this.selectKanbanArray.length; j++) if (JSON.stringify(this.selectKanbanArray) === JSON.stringify(this.kanbanList[i].tickets)) {
          for (var k = 0; k < this.kanbanList[i].tickets.length; k++) {
            if (this.kanbanValue.name == this.kanbanList[i].tickets[k].name) {
              this.kanbanList[i].tickets.splice(k, 1);
            }
          }
        }
      }
    }
    const toggleIcon = document.getElementById("kanban_sidebar");
    const toggle = document.getElementById("content-overlay");
    if (event.currentTarget.className === "btn btn-danger delete-kanban-item mr-1") {
      this._renderer.removeClass(toggleIcon, "show");
      this._renderer.removeClass(toggle, "show");
    }
  }
  addKanbanBoard() {
    let defaultobject = {
      name: "Default Title",
      tickets: [],
      type: "",
      kanbanId: this.kanbanList.length + 1,
      showNewItem: false
    };
    this.kanbanList.push(defaultobject);
  }
  submitItem(kanbanArray) {
    let dateObj = new Date();
    var date = dateObj.getMonth() + 1 + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
    let object = {
      'name': this.addTitle,
      'date': date,
      'selectedLabel': "Primary",
      'description': this.addTitle
    };
    for (let i = 0; i < this.kanbanList.length; i++) {
      if (kanbanArray.kanbanId == this.kanbanList[i].kanbanId && kanbanArray.tickets.length == this.kanbanList[i].tickets.length && JSON.stringify(kanbanArray.tickets) === JSON.stringify(this.kanbanList[i].tickets)) {
        this.kanbanList[i].tickets.push(object), this.kanbanList[i].showNewItem = false;
      }
    }
    this.addTitle = null;
  }
  addKanbanItem(kanabanArray) {
    this.addTitle = null;
    for (let i = 0; i < this.kanbanList.length; i++) {
      if (kanabanArray.kanbanId == this.kanbanList[i].kanbanId) {
        this.kanbanList[i].showNewItem = true;
      }
    }
  }
  updateKanbanItem(event) {
    let dateObj = this.kanban.value.date;
    var date = dateObj.month + '/' + dateObj.day + '/' + dateObj.year;
    this.kanbanValue;
    for (let i = 0; i < this.kanbanList.length; i++) {
      if (this.selectKanbanArray.length == this.kanbanList[i].tickets.length) {
        for (var j = 0; j < this.selectKanbanArray.length; j++ // assert each element equal
        ) JSON.stringify(this.selectKanbanArray) === JSON.stringify(this.kanbanList[i].kanabanArray);
        for (var k = 0; k < this.kanbanList[i].tickets.length; k++) {
          if (this.kanbanValue.name == this.kanbanList[i].tickets[k].name) {
            this.kanbanList[i].tickets[k].name = this.kanban.value.title, this.kanbanList[i].tickets[k].date = date, this.kanbanList[i].tickets[k].selectedLabel = this.kanban.value.selectedLabel, this.kanbanList[i].tickets[k].description = this.kanban.value.description;
          }
        }
        this.kanbanList[i].tickets;
      }
    }
    const toggleIcon = document.getElementById("kanban_sidebar");
    const toggle = document.getElementById("content-overlay");
    if (event.currentTarget.className === "btn btn-primary glow update-kanban-item") {
      this._renderer.removeClass(toggleIcon, "show");
      this._renderer.removeClass(toggle, "show");
    }
  }
  removeItem(kanban, kanbanList) {
    for (let i = 0; i < this.kanbanList.length; i++) {
      if (kanbanList.kanbanId == this.kanbanList[i].kanbanId) {
        for (var k = 0; k < this.kanbanList[i].tickets.length; k++) {
          if (kanban.name == this.kanbanList[i].tickets[k].name) {
            kanbanList.tickets.splice(kanbanList.tickets.indexOf(kanban), 1);
            this.kanbanList[i].tickets == kanbanList.tickets;
            break;
          }
        }
      }
    }
  }
  cancleKanban(kanbanList) {
    kanbanList.showNewItem = false;
  }
  deleteKanbanList(kanbanList) {
    for (let i = 0; i < this.kanbanList.length; i++) {
      if (JSON.stringify(kanbanList) === JSON.stringify(this.kanbanList[i])) {
        this.kanbanList.splice(i, 1);
      }
    }
  }
  updateHeader(kanbanList) {
    for (let i = 0; i < this.kanbanList.length; i++) {
      if (JSON.stringify(kanbanList) === JSON.stringify(this.kanbanList[i])) {
        this.kanbanList[i].name = this.header;
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
  validateProfile(content, kanbanList) {
    this.header = content;
    console.log(content);
    setTimeout(() => {
      this.updateHeader(kanbanList);
    }, 2500);
  }
  getSelectedKanbanText(event) {
    let temp = event.target['options'][event.target['options'].selectedIndex].className;
    const toggleIcon = document.getElementById('selectLable');
    this._renderer.removeClass(toggleIcon, this.selectKanbanClass);
    this._renderer.addClass(toggleIcon, temp);
    this.selectKanbanClass = temp;
    temp = null;
  }
}
KanbanComponent.ɵfac = function KanbanComponent_Factory(t) {
  return new (t || KanbanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_1__.QuillInitializeServiceService));
};
KanbanComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: KanbanComponent,
  selectors: [["app-kanban"]],
  decls: 97,
  vars: 6,
  consts: [[1, "app-content", "content"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], ["id", "content-overlay", 1, "kanban-overlay", 3, "click"], ["id", "kanban-wrapper"], [1, "row"], [1, "col-12"], ["type", "button", "id", "add-kanban", 1, "btn", "btn-primary", "mb-1", 3, "click"], [1, "ficon", "feather", "ft-plus-square", "mr-50"], ["id", "kanban-app"], ["id", "kanban_sidebar", 1, "kanban-sidebar"], [1, "card", "shadow-none", "quill-wrapper"], [1, "card-header", "d-flex", "justify-scontent-between", "align-items-center", "border-bottom", "px-2", "py-1"], [1, "card-title"], ["type", "button", 1, "close", "close-icon"], [1, "ficon", "feather", "ft-x", 3, "click"], [1, "edit-kanban-item", 3, "formGroup"], [1, "card-content", "position-relative", 3, "perfectScrollbar"], [1, "card-body"], [1, "form-group"], ["type", "text", "formControlName", "title", "placeholder", "kanban Title", 1, "form-control", "edit-kanban-item-title"], [1, "input-group"], [1, "input-group-text", "mr-50"], ["placeholder", "yyyy-mm-dd", "formControlName", "date", "name", "date", "ngbDatepicker", "", 1, "form-control", 3, "click"], ["d2", "ngbDatepicker"], [1, "row", "form-group"], [1, "col-6"], ["bindLabel", "name", "formControlName", "selectedLabel", "id", "selectLable", 1, "form-control", "text-white", 3, "change"], [1, "bg-primary"], [1, "bg-danger"], [1, "bg-success"], [1, "bg-info"], [1, "bg-warning"], [1, "bg-secondary"], [1, "d-flex", "align-items-center"], [1, "avatar", "m-0", "mr-1"], ["src", "../../../assets/images/portrait/small/avatar-s-20.png", "height", "36", "width", "36", "alt", "avtar img holder"], [1, "badge-circle"], [1, "ficon", "feather", "ft-plus"], [1, "custom-file"], ["type", "file", "id", "emailAttach", 1, "custom-file-input"], ["for", "emailAttach", 1, "custom-file-label"], [1, "snow-container", "border", "rounded", "p-1"], [1, "editor"], ["calss", "kanbanQuill", "formControlName", "description", "placeholder", "Write a Comment... ", 3, "styles", "modules", "onFocus", "onBlur"], [1, "d-flex", "justify-content-end"], [1, "compose-quill-toolbar", "ql-toolbar", "ql-snow", "kanbantoolbar"], [1, "ql-formats", "mr-0"], [1, "ql-bold"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-link"], [1, "ql-image"], [1, "btn", "btn-sm", "btn-primary", "btn-comment", "ml-25"], [1, "card-footer", "d-flex", "justify-content-end"], ["type", "reset", 1, "btn", "btn-danger", "delete-kanban-item", "mr-1", 3, "click"], [1, "ficon", "feather", "ft-trash-2", "mr-50"], ["type", "submit", 1, "btn", "btn-primary", "glow", "update-kanban-item", 3, "click"], [1, "ficon", "feather", "ft-play", "mr-50"], [1, "kanban-container"], ["data-id", "kanban-board-1", "data-order", "1", "class", "kanban-board", "style", "width: 250px; margin-left: 15px; margin-right: 15px;", 4, "ngFor", "ngForOf"], ["data-id", "kanban-board-1", "data-order", "1", 1, "kanban-board", 2, "width", "250px", "margin-left", "15px", "margin-right", "15px"], [1, "kanban-board-header"], ["type", "text", "contenteditable", "true", 1, "kanban-title-board", "truncate", 3, "innerHTML", "input", "click", "focusout"], [1, "kanban-title-button", "btn", "btn-default", "btn-xs", 3, "click"], ["ngbDropdown", ""], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "ficon", "feather", "ft-more-vertical"], ["ngbDropdownMenu", ""], [1, "dropdown-item", 3, "routerLink"], [1, "ficon", "feather", "ft-link", "mr-50"], [1, "dropdown-item", "kanban-delete", 3, "routerLink", "click"], [1, "kanban-drag"], [3, "dndList", "dndModel"], ["class", "kanban-item", 3, "dndType", "dndDraggable", "dndObject", "click", "dndMoved", 4, "ngFor", "ngForOf"], [1, "itemform", "not-draggable", 3, "hidden"], ["rows", "2", "autofocus", "", "required", "", 1, "form-control", "add-new-item", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "mr-50", 3, "click"], ["type", "button", "id", "CancelBtn", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "kanban-item", 3, "dndType", "dndDraggable", "dndObject", "click", "dndMoved"], [1, "kanban-image", "mb-1", 3, "hidden"], ["alt", "kanban-image", 1, "img-fluid", 3, "src"], [1, "kanban-footer", "d-flex", "justify-content-between", "mt-1"], [1, "kanban-footer-left", "d-flex"], [1, "kanban-due-date", "mr-50"], [3, "ngClass"], [1, "font-size-small"], [1, "kanban-comment", "mr-50"], [1, "kanban-attachment"], [1, "kanban-footer-right"], [1, "kanban-users"], [1, "list-unstyled", "users-list", "cursor-pointer", "m-0", "d-flex", "align-items-center"], ["class", "avatar pull-up my-0", 4, "ngFor", "ngForOf"], [1, "avatar", "pull-up", "my-0"], ["alt", "Avatar", "height", "18", "width", "18", 1, "media-object", 3, "src"]],
  template: function KanbanComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_Template_div_click_5_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 6)(7, "div", 7)(8, "div", 8)(9, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_Template_button_click_9_listener() {
        return ctx.addKanbanBoard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Add New Board ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "h3", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "UI Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 16)(19, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_Template_i_click_19_listener($event) {
        return ctx.showSidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "form", 18)(21, "div", 19)(22, "div", 20)(23, "div", 21)(24, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Card Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 21)(28, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_Template_input_click_32_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 27)(35, "div", 28)(36, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Label ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "select", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function KanbanComponent_Template_select_change_38_listener($event) {
        return ctx.getSelectedKanbanText($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Primary");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Danger");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Success");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Secondary");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 28)(52, "div", 21)(53, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 36)(56, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "img", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 21)(61, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Attach file");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 21)(68, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 44)(71, "div", 45)(72, "quill-editor", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onFocus", function KanbanComponent_Template_quill_editor_onFocus_72_listener() {
        return ctx.focus();
      })("onBlur", function KanbanComponent_Template_quill_editor_onBlur_72_listener() {
        return ctx.blur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 47)(74, "div", 48)(75, "span", 49)(76, "button", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Bold");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Italic");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Underline");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "button", 53)(83, "button", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "button", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 56)(87, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_Template_button_click_87_listener($event) {
        return ctx.deleteKanban($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "button", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function KanbanComponent_Template_button_click_91_listener($event) {
        return ctx.updateKanbanItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, KanbanComponent_div_96_Template, 29, 7, "div", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.kanban);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c4))("modules", ctx.kanbanquillConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.kanbanList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, ngx_quill__WEBPACK_IMPORTED_MODULE_7__.QuillEditorComponent, ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_2__.DndDraggable, ngx_drag_and_drop_lists__WEBPACK_IMPORTED_MODULE_2__.DndList, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: [".mr-25[_ngcontent-%COMP%], .mx-25[_ngcontent-%COMP%] {\n  margin-right: .25rem!important;\n}\n.mr-50[_ngcontent-%COMP%], .mx-50[_ngcontent-%COMP%] {\n  margin-right: .5rem!important;\n}\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] \n{\n  transform: translate3d(-130px, 24px, 0px) !important;\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container {\ncolor: #fff;\nbackground-color: #666ee8  !important;\n}\n[_nghost-%COMP%]     .ng-arrow {\ntop: -2px;\nborder-color: transparent transparent #fff !important;\n}\n[_nghost-%COMP%]     .ng-arrow-wrapper {\ntop: -2px;\nborder-color: transparent transparent #fff !important;\nborder-width: 0 5px 5px !important; \n\n}\n[_nghost-%COMP%]     .ng-select .ng-select-container {\n height: calc(1.25em + 1.5rem + 2px)!important;\n padding: .75rem 1rem;\n  font-size: 1rem;\n  line-height: 1.25;\n}\n[_nghost-%COMP%]     .ng-select {\nposition: relative;\ndisplay: block;\nbox-sizing: border-box;\n}\n[_nghost-%COMP%]     .ml-25, .mx-25[_ngcontent-%COMP%] {\nmargin-left: .25rem!important;\n}\n[_nghost-%COMP%]     .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\nbox-sizing: border-box;\ncursor: pointer;\ndisplay: block;\nwhite-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;\nwhite-space: nowrap;\nmin-height: 1.2em;\npadding: 0px 5px 1px;\n}\n[_nghost-%COMP%]     .text {\n\nheight: calc(1.25em + 1.5rem + 2px);\npadding: .75rem 1rem;\nfont-size: 1rem;\nline-height: 1.25;\n\nbackground-color: #fff;\nbackground-clip: padding-box;\nborder: 1px solid #babfc7;\nborder-radius: .25rem;\n\n}\n[_nghost-%COMP%]     .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .bg-primary {\nbackground-color: #666ee8!important;\n}\nng-reflect-ng-item-label[_ngcontent-%COMP%]{\nbackground-color: #ff4961!important;\n}\n[_nghost-%COMP%]     .bg-danger {\nbackground-color: #ff4961!important;\n}\n[_nghost-%COMP%]     .justify-scontent-between {\njustify-content: space-between!important;\n}\n\n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\ncolor: unset !important;\nbackground-color: unset !important;\nborder-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\nbackground-color: #e2e6ea !important;\nborder-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\ncolor: unset !important;\nbackground-color: unset !important;\nborder-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\nbackground-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\ncolor: #fff !important;\n\n}\n\n[_nghost-%COMP%]     .custom-day {\ntext-align: center;\npadding: .185rem .25rem;\ndisplay: inline-block;\nheight: 2rem;\nwidth: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\ncolor: #6d7183 !important;\nbackground-color: #fff !important;\nborder-block-color: rgb(2, 117, 216) !important;\n\n}\n\n.bg-light[_ngcontent-%COMP%] {\nbackground-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\ndisplay: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\ncolor: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\nline-height: 2rem;\ntext-align: center;\nfont-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\npointer-events: auto;\n}\n\n.small[_ngcontent-%COMP%] {\nfont-size: 80%;\nfont-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\ncursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\npointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\ncolor: #212529 !important;\nbackground-color: #e2e6ea !important;\nborder-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\npointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\nborder-bottom: 0;\nborder-radius: .25rem .25rem 0 0;\npadding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\nwidth: 2rem;\nheight: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\ntext-align: center;\npadding: 0.185rem 0.25rem;\ndisplay: inline-block;\nheight: 2rem;\nwidth: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\nbackground-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\nbackground-color: rgb(2, 117, 216);\ncolor: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\nbackground-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\nbackground: rgba(255, 249, 249, 0.5) !important;\n}\n\n.custom-day[_ngcontent-%COMP%] {\ntext-align: center;\npadding: 0.185rem 0.25rem;\nborder-radius: 0.25rem;\ndisplay: inline-block;\nwidth: 2rem;\n}\n.custom-day[_ngcontent-%COMP%]:hover, .custom-day.focused[_ngcontent-%COMP%] {\nbackground-color: #e6e6e6;\n}\n.weekend[_ngcontent-%COMP%] {\nbackground-color: #f0ad4e;\nborder-radius: 1rem;\ncolor: white;\n}\n.hidden[_ngcontent-%COMP%] {\ndisplay: none;\n}\n[_nghost-%COMP%]     .ft-calendar{\nfont-family: feather!important;\nspeak: none;\nfont-style: normal;\nfont-weight: 400;\nfont-size: large;\nfont-variant: normal;\ntext-transform: none;\nline-height: 1;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\n}\n[_nghost-%COMP%]     .input-group-text {\ndisplay: flex;\nalign-items: center;\npadding: unset !important;\nmargin-bottom: unset !important;\nfont-size: unset !important;\nfont-weight: unset !important;\nline-height: unset !important;\ncolor:unset !important;\ntext-align: unset !important;\nwhite-space: unset !important;\nbackground-color: unset !important;\nborder:  unset !important;\nborder-radius: unset !important;\n}\n.ml-75[_ngcontent-%COMP%], .mx-75[_ngcontent-%COMP%] {\nmargin-left: .75rem!important;\n}\n.mx-50[_ngcontent-%COMP%] {\nmargin-left: .5rem!important;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width : 270px !important;\n}\n.align-middle[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\n.mr-50[_ngcontent-%COMP%], .mx-50[_ngcontent-%COMP%] {\nmargin-right: .5rem!important;\n}\n[_nghost-%COMP%]     .ft-plus{\nmargin-right: 3px !important;\n}\ncontrol[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\nbackground-color: #ffffff;\nmargin-left: -12px;\n}\n\n\n.kanban-container[_ngcontent-%COMP%] {\n  width : 100% !important;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%] {\n  border-radius : 0.25rem;\n  padding : 1rem 0rem;\n  margin : 0 1.8rem 1rem 0 !important;\n  width : 18.67rem !important;\n  background-color : #E7EDF3;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-board-header[_ngcontent-%COMP%] {\n  \n  font-size : 1.2rem;\n  font-family : 'Quicksand', Georgia, 'Times New Roman', Times, serif;\n  color : #6B6F82;\n  padding : 0 0.93rem;\n  display :         flex;\n  justify-content : space-between;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-board-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  float : right;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-board-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after {\n  display : none;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-board-header[_ngcontent-%COMP%]   .kanban-title-board[_ngcontent-%COMP%] {\n  \n  font-weight : normal;\n  cursor : text;\n  padding : 0 0.5rem;\n  width : 200px;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-board-header[_ngcontent-%COMP%]   .kanban-title-board[_ngcontent-%COMP%]:hover, .kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-board-header[_ngcontent-%COMP%]   .kanban-title-board[_ngcontent-%COMP%]:focus {\n  background-color : #6B6F82;\n  color : #FFFFFF;\n  border-radius : 0.25rem;\n  outline : none;\n  text-overflow : clip;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-board-header[_ngcontent-%COMP%]   .kanban-title-button[_ngcontent-%COMP%] {\n  \n  position : absolute;\n  bottom : 0;\n  padding : 0.467rem 0rem;\n  display : block;\n  color : #6B6F82;\n  font-weight : 700;\n  font-size : 0.8rem;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-drag[_ngcontent-%COMP%] {\n  padding : 13px;\n  min-height : auto;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-item[_ngcontent-%COMP%] {\n  \n  padding : 0.53rem 0.8rem;\n  border-radius : 0.25rem;\n  margin-bottom : 1rem;\n  box-shadow : -4px 4px 6px 0 rgba(55, 70, 95, 0.12);\n  position : relative;\n  overflow-wrap: break-word;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-item[_ngcontent-%COMP%]:before {\n  content : '';\n  width : 3px;\n  height : 100%;\n  position : absolute;\n  left : 0;\n  top : 0;\n  border-radius : 0.5rem;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-item[_ngcontent-%COMP%]:hover {\n  cursor : default;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom : 0.5rem;\n}\n.kanban-container[_ngcontent-%COMP%]   .kanban-board[_ngcontent-%COMP%]   .kanban-item[_ngcontent-%COMP%]   .kanban-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius : 0.25rem;\n}\n\n.kanban-overlay[_ngcontent-%COMP%] {\n  \n  top : 0;\n  left : 0;\n  right : 0;\n  bottom : 0;\n  position : absolute;\n  z-index : 999;\n  visibility : hidden;\n  opacity : 0;\n}\n.kanban-overlay.show[_ngcontent-%COMP%] {\n  visibility : visible;\n  transition : all 0.3s ease;\n  opacity : 1;\n  background-color : rgba(0, 0, 0, 0.2);\n}\n\n.badge-circle[_ngcontent-%COMP%] {\n  display :         flex;\n  align-items : center;\n  justify-content : center;\n  background-color : #E6EAEE;\n  color : #475F7B;\n  border-radius : 50%;\n  height : 30px;\n  width : 30px;\n}\n\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border : 2px solid #FFFFFF;\n}\n\n.kanban-sidebar[_ngcontent-%COMP%] {\n  \n  box-shadow : -8px 0 18px 0 rgba(25, 42, 70, 0.13);\n  height : 100vh;\n  width : 23.8rem;\n  background-color : #FFFFFF;\n  position : fixed;\n  transform : translateX(110%);\n  transition : all 0.3s ease;\n  z-index : 1050;\n  right : 2rem;\n  left : auto;\n  bottom : 0;\n  top : -1px;\n  opacity : 0;\n  overflow : hidden;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  color : #6B6F82;\n  opacity : 1 !important;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]:focus {\n  outline : none;\n}\n.kanban-sidebar.show[_ngcontent-%COMP%] {\n  opacity : 1;\n  transform : translateX(9%) translateY(1px);\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .edit-kanban-item[_ngcontent-%COMP%] {\n  height : 100vh;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .edit-kanban-item[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  height : calc(100% - 9rem);\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .edit-kanban-item[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color : #BAC0C7;\n  margin-bottom : 0.67rem;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .edit-kanban-item[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-radius : 0.25rem;\n  display : block;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .edit-kanban-item[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after {\n  background-color : transparent;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .edit-kanban-item[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top : 0;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .edit-kanban-item[_ngcontent-%COMP%]   .picker[_ngcontent-%COMP%] {\n  position : relative;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .snow-container[_ngcontent-%COMP%]   .ql-snow[_ngcontent-%COMP%], .kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .snow-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%] {\n  border : none;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .snow-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width : auto;\n  line-height : 0.9;\n  padding : 0.467rem 1.2rem;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .snow-container[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  color : #FFFFFF;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .snow-container[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  left : 0 !important;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .snow-container[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width : 100px;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .ql-editor.ql-blank[_ngcontent-%COMP%]::before {\n  left : 0.3rem;\n}\n.kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%] {\n  min-height : 7.93rem;\n  padding : 0;\n}\n\n.kanban-title-button[_ngcontent-%COMP%] {\n  background-color : transparent;\n  box-shadow : none;\n}\n\n@media (max-width: 420px) {\n  .kanban-sidebar[_ngcontent-%COMP%] {\n    width : 19rem;\n    right : 1.6rem;\n  }\n  .kanban-sidebar[_ngcontent-%COMP%]   .quill-wrapper[_ngcontent-%COMP%]   .snow-container[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n    width : 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0UsV0FBVztFQUdILDBDQUEwQztBQUNwRDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJrYW5iYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tci0yNSwgLm14LTI1IHtcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW0haW1wb3J0YW50O1xufVxuLm1yLTUwLCAubXgtNTAge1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSBcbntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTMwcHgsIDI0cHgsIDBweCkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbmNvbG9yOiAjZmZmO1xuYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCAgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctYXJyb3cge1xudG9wOiAtMnB4O1xuYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5nLWFycm93LXdyYXBwZXIge1xudG9wOiAtMnB4O1xuYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICFpbXBvcnRhbnQ7XG5ib3JkZXItd2lkdGg6IDAgNXB4IDVweCAhaW1wb3J0YW50OyBcblxufVxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuIGhlaWdodDogY2FsYygxLjI1ZW0gKyAxLjVyZW0gKyAycHgpIWltcG9ydGFudDtcbiBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmRpc3BsYXk6IGJsb2NrO1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWwtMjUsIC5teC0yNSB7XG5tYXJnaW4tbGVmdDogLjI1cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ge1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbmN1cnNvcjogcG9pbnRlcjtcbmRpc3BsYXk6IGJsb2NrO1xud2hpdGUtc3BhY2U6IG5vd3JhcDtcbm92ZXJmbG93OiBoaWRkZW47XG50ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbndoaXRlLXNwYWNlOiBub3dyYXA7XG5taW4taGVpZ2h0OiAxLjJlbTtcbnBhZGRpbmc6IDBweCA1cHggMXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0IHtcbi8qIGRpc3BsYXk6IGJsb2NrO1xud2lkdGg6IDEwMCU7ICovXG5oZWlnaHQ6IGNhbGMoMS4yNWVtICsgMS41cmVtICsgMnB4KTtcbnBhZGRpbmc6IC43NXJlbSAxcmVtO1xuZm9udC1zaXplOiAxcmVtO1xubGluZS1oZWlnaHQ6IDEuMjU7XG4vKiBjb2xvcjogIzRlNTE1NDsgKi9cbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuYm9yZGVyOiAxcHggc29saWQgI2JhYmZjNztcbmJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbi8qIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgKi9cbn1cbjpob3N0IDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLmJnLXByaW1hcnkge1xuYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCFpbXBvcnRhbnQ7XG59XG5uZy1yZWZsZWN0LW5nLWl0ZW0tbGFiZWx7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmY0OTYxIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmctZGFuZ2VyIHtcbmJhY2tncm91bmQtY29sb3I6ICNmZjQ5NjEhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5qdXN0aWZ5LXNjb250ZW50LWJldHdlZW4ge1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcbn1cbi8qIGRhdGVwaWNrZXIgY3NzICovXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG5ib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xuY29sb3I6ICNmZmYgIWltcG9ydGFudDtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xudGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5oZWlnaHQ6IDJyZW07XG53aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG5jb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG5cbn1cblxuLmJnLWxpZ2h0IHtcbmJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbmNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbmxpbmUtaGVpZ2h0OiAycmVtO1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG5wb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNtYWxsIHtcbmZvbnQtc2l6ZTogODAlO1xuZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtbW9udGgge1xucG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbmJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbmJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG5wb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuYm9yZGVyLWJvdHRvbTogMDtcbmJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xucGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbndpZHRoOiAycmVtO1xuaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5wYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuaGVpZ2h0OiAycmVtO1xud2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZGF5IHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG5ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xud2lkdGg6IDJyZW07XG59XG4uY3VzdG9tLWRheTpob3ZlciwgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuLndlZWtlbmQge1xuYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbmJvcmRlci1yYWRpdXM6IDFyZW07XG5jb2xvcjogd2hpdGU7XG59XG4uaGlkZGVuIHtcbmRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmZ0LWNhbGVuZGFye1xuZm9udC1mYW1pbHk6IGZlYXRoZXIhaW1wb3J0YW50O1xuc3BlYWs6IG5vbmU7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiBsYXJnZTtcbmZvbnQtdmFyaWFudDogbm9ybWFsO1xudGV4dC10cmFuc2Zvcm06IG5vbmU7XG5saW5lLWhlaWdodDogMTtcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbnBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG5tYXJnaW4tYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuZm9udC1zaXplOiB1bnNldCAhaW1wb3J0YW50O1xuZm9udC13ZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5saW5lLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbmNvbG9yOnVuc2V0ICFpbXBvcnRhbnQ7XG50ZXh0LWFsaWduOiB1bnNldCAhaW1wb3J0YW50O1xud2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuYm9yZGVyOiAgdW5zZXQgIWltcG9ydGFudDtcbmJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4ubWwtNzUsIC5teC03NSB7XG5tYXJnaW4tbGVmdDogLjc1cmVtIWltcG9ydGFudDtcbn1cbi5teC01MCB7XG5tYXJnaW4tbGVmdDogLjVyZW0haW1wb3J0YW50O1xufVxuLnNpZGViYXIge1xuICB3aWR0aCA6IDI3MHB4ICFpbXBvcnRhbnQ7XG59XG4uYWxpZ24tbWlkZGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5tci01MCwgLm14LTUwIHtcbm1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mdC1wbHVze1xubWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcbn1cbmNvbnRyb2w6ZGlzYWJsZWQsIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5tYXJnaW4tbGVmdDogLTEycHg7XG59XG4vKiBLYW5iYW4gQm9hcmQgQXBwbGljYXRpb24gY3NzICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ua2FuYmFuLWNvbnRhaW5lciB7XG4gIHdpZHRoIDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCB7XG4gIGJvcmRlci1yYWRpdXMgOiAwLjI1cmVtO1xuICBwYWRkaW5nIDogMXJlbSAwcmVtO1xuICBtYXJnaW4gOiAwIDEuOHJlbSAxcmVtIDAgIWltcG9ydGFudDtcbiAgd2lkdGggOiAxOC42N3JlbSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogI0U3RURGMztcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIge1xuICAvKiBrYW5iYW4taGVhZGVyICovXG4gIGZvbnQtc2l6ZSA6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHkgOiAnUXVpY2tzYW5kJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgY29sb3IgOiAjNkI2RjgyO1xuICBwYWRkaW5nIDogMCAwLjkzcmVtO1xuICBkaXNwbGF5IDogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXkgOiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXkgOiAtbXMtZmxleGJveDtcbiAgZGlzcGxheSA6ICAgICAgICAgZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjayA6IGp1c3RpZnk7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50IDogc3BhY2UtYmV0d2VlbjtcbiAgLW1zLWZsZXgtcGFjayA6IGp1c3RpZnk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50IDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIgLmRyb3Bkb3duIHtcbiAgZmxvYXQgOiByaWdodDtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIgLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xuICBkaXNwbGF5IDogbm9uZTtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIgLmthbmJhbi10aXRsZS1ib2FyZCB7XG4gIC8qIGthbmJhbiB0aXRsZSAqL1xuICBmb250LXdlaWdodCA6IG5vcm1hbDtcbiAgY3Vyc29yIDogdGV4dDtcbiAgcGFkZGluZyA6IDAgMC41cmVtO1xuICB3aWR0aCA6IDIwMHB4O1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWJvYXJkLWhlYWRlciAua2FuYmFuLXRpdGxlLWJvYXJkOmhvdmVyLCAua2FuYmFuLWNvbnRhaW5lciAua2FuYmFuLWJvYXJkIC5rYW5iYW4tYm9hcmQtaGVhZGVyIC5rYW5iYW4tdGl0bGUtYm9hcmQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogIzZCNkY4MjtcbiAgY29sb3IgOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzIDogMC4yNXJlbTtcbiAgb3V0bGluZSA6IG5vbmU7XG4gIHRleHQtb3ZlcmZsb3cgOiBjbGlwO1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWJvYXJkLWhlYWRlciAua2FuYmFuLXRpdGxlLWJ1dHRvbiB7XG4gIC8qIGthbmJhbiB0aXRsZSBidXR0b24gKi9cbiAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgYm90dG9tIDogMDtcbiAgcGFkZGluZyA6IDAuNDY3cmVtIDByZW07XG4gIGRpc3BsYXkgOiBibG9jaztcbiAgY29sb3IgOiAjNkI2RjgyO1xuICBmb250LXdlaWdodCA6IDcwMDtcbiAgZm9udC1zaXplIDogMC44cmVtO1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWRyYWcge1xuICBwYWRkaW5nIDogMTNweDtcbiAgbWluLWhlaWdodCA6IGF1dG87XG59XG4ua2FuYmFuLWNvbnRhaW5lciAua2FuYmFuLWJvYXJkIC5rYW5iYW4taXRlbSB7XG4gIC8qIGthbmJhbiBpdGVtICovXG4gIHBhZGRpbmcgOiAwLjUzcmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1cyA6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b20gOiAxcmVtO1xuICBib3gtc2hhZG93IDogLTRweCA0cHggNnB4IDAgcmdiYSg1NSwgNzAsIDk1LCAwLjEyKTtcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQgOiAnJztcbiAgd2lkdGggOiAzcHg7XG4gIGhlaWdodCA6IDEwMCU7XG4gIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gIGxlZnQgOiAwO1xuICB0b3AgOiAwO1xuICBib3JkZXItcmFkaXVzIDogMC41cmVtO1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWl0ZW06aG92ZXIge1xuICBjdXJzb3IgOiBkZWZhdWx0O1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b20gOiAwLjVyZW07XG59XG4ua2FuYmFuLWNvbnRhaW5lciAua2FuYmFuLWJvYXJkIC5rYW5iYW4taXRlbSAua2FuYmFuLWltYWdlIGltZyB7XG4gIGJvcmRlci1yYWRpdXMgOiAwLjI1cmVtO1xufVxuXG4ua2FuYmFuLW92ZXJsYXkge1xuICAvKiBrYW5iYW4gb3ZlcmxheSAqL1xuICB0b3AgOiAwO1xuICBsZWZ0IDogMDtcbiAgcmlnaHQgOiAwO1xuICBib3R0b20gOiAwO1xuICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICB6LWluZGV4IDogOTk5O1xuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xuICBvcGFjaXR5IDogMDtcbn1cbi5rYW5iYW4tb3ZlcmxheS5zaG93IHtcbiAgdmlzaWJpbGl0eSA6IHZpc2libGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbiA6IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbiA6IGFsbCAwLjNzIGVhc2U7XG4gIG9wYWNpdHkgOiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYmFkZ2UtY2lyY2xlIHtcbiAgZGlzcGxheSA6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5IDogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5IDogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXkgOiAgICAgICAgIGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduIDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zIDogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbiA6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjayA6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2sgOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogI0U2RUFFRTtcbiAgY29sb3IgOiAjNDc1RjdCO1xuICBib3JkZXItcmFkaXVzIDogNTAlO1xuICBoZWlnaHQgOiAzMHB4O1xuICB3aWR0aCA6IDMwcHg7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgYm9yZGVyIDogMnB4IHNvbGlkICNGRkZGRkY7XG59XG5cbi5rYW5iYW4tc2lkZWJhciB7XG4gIC8qIGthbmJhbiBzaWRlYmFyICovXG4gIGJveC1zaGFkb3cgOiAtOHB4IDAgMThweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMyk7XG4gIGhlaWdodCA6IDEwMHZoO1xuICB3aWR0aCA6IDIzLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3IgOiAjRkZGRkZGO1xuICBwb3NpdGlvbiA6IGZpeGVkO1xuICAtd2Via2l0LXRyYW5zZm9ybSA6IHRyYW5zbGF0ZVgoMTEwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtIDogdHJhbnNsYXRlWCgxMTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVYKDExMCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb24gOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb24gOiBhbGwgMC4zcyBlYXNlO1xuICB6LWluZGV4IDogMTA1MDtcbiAgcmlnaHQgOiAycmVtO1xuICBsZWZ0IDogYXV0bztcbiAgYm90dG9tIDogMDtcbiAgdG9wIDogLTFweDtcbiAgb3BhY2l0eSA6IDA7XG4gIG92ZXJmbG93IDogaGlkZGVuO1xufVxuLmthbmJhbi1zaWRlYmFyIC5jYXJkLWhlYWRlciAuY2xvc2UtaWNvbiB7XG4gIGNvbG9yIDogIzZCNkY4MjtcbiAgb3BhY2l0eSA6IDEgIWltcG9ydGFudDtcbn1cbi5rYW5iYW4tc2lkZWJhciAuY2FyZC1oZWFkZXIgLmNsb3NlLWljb246Zm9jdXMge1xuICBvdXRsaW5lIDogbm9uZTtcbn1cbi5rYW5iYW4tc2lkZWJhci5zaG93IHtcbiAgb3BhY2l0eSA6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtIDogdHJhbnNsYXRlWCg5JSkgdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybSA6IHRyYW5zbGF0ZVgoOSUpIHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVYKDklKSB0cmFuc2xhdGVZKDFweCk7XG59XG4ua2FuYmFuLXNpZGViYXIgLmVkaXQta2FuYmFuLWl0ZW0ge1xuICBoZWlnaHQgOiAxMDB2aDtcbn1cbi5rYW5iYW4tc2lkZWJhciAuZWRpdC1rYW5iYW4taXRlbSAuY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0IDogY2FsYygxMDAlIC0gOXJlbSk7XG59XG4ua2FuYmFuLXNpZGViYXIgLmVkaXQta2FuYmFuLWl0ZW0gLmNhcmQtY29udGVudCAuZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgY29sb3IgOiAjQkFDMEM3O1xuICBtYXJnaW4tYm90dG9tIDogMC42N3JlbTtcbn1cbi5rYW5iYW4tc2lkZWJhciAuZWRpdC1rYW5iYW4taXRlbSAuY2FyZC1jb250ZW50IC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXMgOiAwLjI1cmVtO1xuICBkaXNwbGF5IDogYmxvY2s7XG59XG4ua2FuYmFuLXNpZGViYXIgLmVkaXQta2FuYmFuLWl0ZW0gLmNhcmQtY29udGVudCAuY3VzdG9tLWZpbGUgLmN1c3RvbS1maWxlLWxhYmVsOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvciA6IHRyYW5zcGFyZW50O1xufVxuLmthbmJhbi1zaWRlYmFyIC5lZGl0LWthbmJhbi1pdGVtIC5jYXJkLWZvb3RlciAuYnRuIGkge1xuICB0b3AgOiAwO1xufVxuLmthbmJhbi1zaWRlYmFyIC5lZGl0LWthbmJhbi1pdGVtIC5waWNrZXIge1xuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtc25vdywgLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtdG9vbGJhciB7XG4gIGJvcmRlciA6IG5vbmU7XG59XG4ua2FuYmFuLXNpZGViYXIgLnF1aWxsLXdyYXBwZXIgLnNub3ctY29udGFpbmVyIC5xbC10b29sYmFyIC5idG4ge1xuICB3aWR0aCA6IGF1dG87XG4gIGxpbmUtaGVpZ2h0IDogMC45O1xuICBwYWRkaW5nIDogMC40NjdyZW0gMS4ycmVtO1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtdG9vbGJhciAuYnRuOmhvdmVyIHtcbiAgY29sb3IgOiAjRkZGRkZGO1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtdG9vbHRpcCB7XG4gIGxlZnQgOiAwICFpbXBvcnRhbnQ7XG59XG4ua2FuYmFuLXNpZGViYXIgLnF1aWxsLXdyYXBwZXIgLnNub3ctY29udGFpbmVyIC5xbC10b29sdGlwIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aCA6IDEwMHB4O1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZSB7XG4gIGxlZnQgOiAwLjNyZW07XG59XG4ua2FuYmFuLXNpZGViYXIgLnF1aWxsLXdyYXBwZXIgLnFsLWVkaXRvciB7XG4gIG1pbi1oZWlnaHQgOiA3LjkzcmVtO1xuICBwYWRkaW5nIDogMDtcbn1cblxuLmthbmJhbi10aXRsZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3cgOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmthbmJhbi1zaWRlYmFyIHtcbiAgICB3aWR0aCA6IDE5cmVtO1xuICAgIHJpZ2h0IDogMS42cmVtO1xuICB9XG4gIC5rYW5iYW4tc2lkZWJhciAucXVpbGwtd3JhcHBlciAuc25vdy1jb250YWluZXIgLnFsLXRvb2x0aXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGggOiA3MHB4O1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hcHBsaWNhdGlvbnMva2FuYmFuL2thbmJhbi9rYW5iYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7O0VBRUUsb0RBQW9EO0FBQ3REO0FBQ0E7QUFDQSxXQUFXO0FBQ1gscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscURBQXFEO0FBQ3JELGtDQUFrQzs7QUFFbEM7QUFDQTtDQUNDLDZDQUE2QztDQUM3QyxvQkFBb0I7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO2NBQ2M7QUFDZCxtQ0FBbUM7QUFDbkMsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQiwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLHVCQUF1QjtBQUN2QixrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUNoQzs7QUFF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QUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFHSCwwQ0FBMEM7QUFDcEQ7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFwQkEsZzVvQkFBZzVvQiIsInNvdXJjZXNDb250ZW50IjpbIi5tci0yNSwgLm14LTI1IHtcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW0haW1wb3J0YW50O1xufVxuLm1yLTUwLCAubXgtNTAge1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtIWltcG9ydGFudDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSBcbntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTMwcHgsIDI0cHgsIDBweCkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbmNvbG9yOiAjZmZmO1xuYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCAgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctYXJyb3cge1xudG9wOiAtMnB4O1xuYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5nLWFycm93LXdyYXBwZXIge1xudG9wOiAtMnB4O1xuYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICFpbXBvcnRhbnQ7XG5ib3JkZXItd2lkdGg6IDAgNXB4IDVweCAhaW1wb3J0YW50OyBcblxufVxuOmhvc3QgOjpuZy1kZWVwIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xuIGhlaWdodDogY2FsYygxLjI1ZW0gKyAxLjVyZW0gKyAycHgpIWltcG9ydGFudDtcbiBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmRpc3BsYXk6IGJsb2NrO1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWwtMjUsIC5teC0yNSB7XG5tYXJnaW4tbGVmdDogLjI1cmVtIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ge1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbmN1cnNvcjogcG9pbnRlcjtcbmRpc3BsYXk6IGJsb2NrO1xud2hpdGUtc3BhY2U6IG5vd3JhcDtcbm92ZXJmbG93OiBoaWRkZW47XG50ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbndoaXRlLXNwYWNlOiBub3dyYXA7XG5taW4taGVpZ2h0OiAxLjJlbTtcbnBhZGRpbmc6IDBweCA1cHggMXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0IHtcbi8qIGRpc3BsYXk6IGJsb2NrO1xud2lkdGg6IDEwMCU7ICovXG5oZWlnaHQ6IGNhbGMoMS4yNWVtICsgMS41cmVtICsgMnB4KTtcbnBhZGRpbmc6IC43NXJlbSAxcmVtO1xuZm9udC1zaXplOiAxcmVtO1xubGluZS1oZWlnaHQ6IDEuMjU7XG4vKiBjb2xvcjogIzRlNTE1NDsgKi9cbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuYm9yZGVyOiAxcHggc29saWQgI2JhYmZjNztcbmJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbi8qIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDsgKi9cbn1cbjpob3N0IDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLmJnLXByaW1hcnkge1xuYmFja2dyb3VuZC1jb2xvcjogIzY2NmVlOCFpbXBvcnRhbnQ7XG59XG5uZy1yZWZsZWN0LW5nLWl0ZW0tbGFiZWx7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmY0OTYxIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmctZGFuZ2VyIHtcbmJhY2tncm91bmQtY29sb3I6ICNmZjQ5NjEhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5qdXN0aWZ5LXNjb250ZW50LWJldHdlZW4ge1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIWltcG9ydGFudDtcbn1cbi8qIGRhdGVwaWNrZXIgY3NzICovXG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuYm9yZGVyLWNvbG9yOiAjZDNkOWRmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0OmhvdmVyOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG5ib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRleHQtd2hpdGUge1xuY29sb3I6ICNmZmYgIWltcG9ydGFudDtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS1kYXkge1xudGV4dC1hbGlnbjogY2VudGVyO1xucGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5oZWlnaHQ6IDJyZW07XG53aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG5jb2xvcjogIzZkNzE4MyAhaW1wb3J0YW50O1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuYm9yZGVyLWJsb2NrLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpICFpbXBvcnRhbnQ7XG5cbn1cblxuLmJnLWxpZ2h0IHtcbmJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5oaWRkZW4ge1xuZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbmNvbG9yOiAjMTdhMmI4O1xufVxuXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbmxpbmUtaGVpZ2h0OiAycmVtO1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG5wb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLnNtYWxsIHtcbmZvbnQtc2l6ZTogODAlO1xuZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm5nYi1kcC1kYXkge1xuY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5uZ2ItZHAtbW9udGgge1xucG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuY29sb3I6ICMyMTI1MjkgIWltcG9ydGFudDtcbmJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWEgIWltcG9ydGFudDtcbmJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG5wb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm5nYi1kcC1oZWFkZXIge1xuYm9yZGVyLWJvdHRvbTogMDtcbmJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xucGFkZGluZy10b3A6IC4yNXJlbTtcbn1cblxuLm5nYi1kcC1kYXksXG4ubmdiLWRwLXdlZWstbnVtYmVyLFxuLm5nYi1kcC13ZWVrZGF5IHtcbndpZHRoOiAycmVtO1xuaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5wYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xuaGVpZ2h0OiAycmVtO1xud2lkdGg6IDJyZW07XG59XG5cbi5jdXN0b20tZGF5LmZvY3VzZWQge1xuYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xuY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWRheS5mYWRlZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZGF5IHtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG5ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xud2lkdGg6IDJyZW07XG59XG4uY3VzdG9tLWRheTpob3ZlciwgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuLndlZWtlbmQge1xuYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcbmJvcmRlci1yYWRpdXM6IDFyZW07XG5jb2xvcjogd2hpdGU7XG59XG4uaGlkZGVuIHtcbmRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgLmZ0LWNhbGVuZGFye1xuZm9udC1mYW1pbHk6IGZlYXRoZXIhaW1wb3J0YW50O1xuc3BlYWs6IG5vbmU7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiBsYXJnZTtcbmZvbnQtdmFyaWFudDogbm9ybWFsO1xudGV4dC10cmFuc2Zvcm06IG5vbmU7XG5saW5lLWhlaWdodDogMTtcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbnBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG5tYXJnaW4tYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuZm9udC1zaXplOiB1bnNldCAhaW1wb3J0YW50O1xuZm9udC13ZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5saW5lLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbmNvbG9yOnVuc2V0ICFpbXBvcnRhbnQ7XG50ZXh0LWFsaWduOiB1bnNldCAhaW1wb3J0YW50O1xud2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuYm9yZGVyOiAgdW5zZXQgIWltcG9ydGFudDtcbmJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4ubWwtNzUsIC5teC03NSB7XG5tYXJnaW4tbGVmdDogLjc1cmVtIWltcG9ydGFudDtcbn1cbi5teC01MCB7XG5tYXJnaW4tbGVmdDogLjVyZW0haW1wb3J0YW50O1xufVxuLnNpZGViYXIge1xuICB3aWR0aCA6IDI3MHB4ICFpbXBvcnRhbnQ7XG59XG4uYWxpZ24tbWlkZGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5tci01MCwgLm14LTUwIHtcbm1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mdC1wbHVze1xubWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcbn1cbmNvbnRyb2w6ZGlzYWJsZWQsIC5mb3JtLWNvbnRyb2xbcmVhZG9ubHldIHtcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5tYXJnaW4tbGVmdDogLTEycHg7XG59XG4vKiBLYW5iYW4gQm9hcmQgQXBwbGljYXRpb24gY3NzICovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ua2FuYmFuLWNvbnRhaW5lciB7XG4gIHdpZHRoIDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCB7XG4gIGJvcmRlci1yYWRpdXMgOiAwLjI1cmVtO1xuICBwYWRkaW5nIDogMXJlbSAwcmVtO1xuICBtYXJnaW4gOiAwIDEuOHJlbSAxcmVtIDAgIWltcG9ydGFudDtcbiAgd2lkdGggOiAxOC42N3JlbSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogI0U3RURGMztcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIge1xuICAvKiBrYW5iYW4taGVhZGVyICovXG4gIGZvbnQtc2l6ZSA6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHkgOiAnUXVpY2tzYW5kJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgY29sb3IgOiAjNkI2RjgyO1xuICBwYWRkaW5nIDogMCAwLjkzcmVtO1xuICBkaXNwbGF5IDogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXkgOiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXkgOiAtbXMtZmxleGJveDtcbiAgZGlzcGxheSA6ICAgICAgICAgZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjayA6IGp1c3RpZnk7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50IDogc3BhY2UtYmV0d2VlbjtcbiAgLW1zLWZsZXgtcGFjayA6IGp1c3RpZnk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50IDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIgLmRyb3Bkb3duIHtcbiAgZmxvYXQgOiByaWdodDtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIgLmRyb3Bkb3duIC5kcm9wZG93bi10b2dnbGU6YWZ0ZXIge1xuICBkaXNwbGF5IDogbm9uZTtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1ib2FyZC1oZWFkZXIgLmthbmJhbi10aXRsZS1ib2FyZCB7XG4gIC8qIGthbmJhbiB0aXRsZSAqL1xuICBmb250LXdlaWdodCA6IG5vcm1hbDtcbiAgY3Vyc29yIDogdGV4dDtcbiAgcGFkZGluZyA6IDAgMC41cmVtO1xuICB3aWR0aCA6IDIwMHB4O1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWJvYXJkLWhlYWRlciAua2FuYmFuLXRpdGxlLWJvYXJkOmhvdmVyLCAua2FuYmFuLWNvbnRhaW5lciAua2FuYmFuLWJvYXJkIC5rYW5iYW4tYm9hcmQtaGVhZGVyIC5rYW5iYW4tdGl0bGUtYm9hcmQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogIzZCNkY4MjtcbiAgY29sb3IgOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzIDogMC4yNXJlbTtcbiAgb3V0bGluZSA6IG5vbmU7XG4gIHRleHQtb3ZlcmZsb3cgOiBjbGlwO1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWJvYXJkLWhlYWRlciAua2FuYmFuLXRpdGxlLWJ1dHRvbiB7XG4gIC8qIGthbmJhbiB0aXRsZSBidXR0b24gKi9cbiAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgYm90dG9tIDogMDtcbiAgcGFkZGluZyA6IDAuNDY3cmVtIDByZW07XG4gIGRpc3BsYXkgOiBibG9jaztcbiAgY29sb3IgOiAjNkI2RjgyO1xuICBmb250LXdlaWdodCA6IDcwMDtcbiAgZm9udC1zaXplIDogMC44cmVtO1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWRyYWcge1xuICBwYWRkaW5nIDogMTNweDtcbiAgbWluLWhlaWdodCA6IGF1dG87XG59XG4ua2FuYmFuLWNvbnRhaW5lciAua2FuYmFuLWJvYXJkIC5rYW5iYW4taXRlbSB7XG4gIC8qIGthbmJhbiBpdGVtICovXG4gIHBhZGRpbmcgOiAwLjUzcmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1cyA6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b20gOiAxcmVtO1xuICBib3gtc2hhZG93IDogLTRweCA0cHggNnB4IDAgcmdiYSg1NSwgNzAsIDk1LCAwLjEyKTtcbiAgcG9zaXRpb24gOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbi5rYW5iYW4tY29udGFpbmVyIC5rYW5iYW4tYm9hcmQgLmthbmJhbi1pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQgOiAnJztcbiAgd2lkdGggOiAzcHg7XG4gIGhlaWdodCA6IDEwMCU7XG4gIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gIGxlZnQgOiAwO1xuICB0b3AgOiAwO1xuICBib3JkZXItcmFkaXVzIDogMC41cmVtO1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWl0ZW06aG92ZXIge1xuICBjdXJzb3IgOiBkZWZhdWx0O1xufVxuLmthbmJhbi1jb250YWluZXIgLmthbmJhbi1ib2FyZCAua2FuYmFuLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b20gOiAwLjVyZW07XG59XG4ua2FuYmFuLWNvbnRhaW5lciAua2FuYmFuLWJvYXJkIC5rYW5iYW4taXRlbSAua2FuYmFuLWltYWdlIGltZyB7XG4gIGJvcmRlci1yYWRpdXMgOiAwLjI1cmVtO1xufVxuXG4ua2FuYmFuLW92ZXJsYXkge1xuICAvKiBrYW5iYW4gb3ZlcmxheSAqL1xuICB0b3AgOiAwO1xuICBsZWZ0IDogMDtcbiAgcmlnaHQgOiAwO1xuICBib3R0b20gOiAwO1xuICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICB6LWluZGV4IDogOTk5O1xuICB2aXNpYmlsaXR5IDogaGlkZGVuO1xuICBvcGFjaXR5IDogMDtcbn1cbi5rYW5iYW4tb3ZlcmxheS5zaG93IHtcbiAgdmlzaWJpbGl0eSA6IHZpc2libGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbiA6IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgdHJhbnNpdGlvbiA6IGFsbCAwLjNzIGVhc2U7XG4gIG9wYWNpdHkgOiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYmFkZ2UtY2lyY2xlIHtcbiAgZGlzcGxheSA6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5IDogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5IDogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXkgOiAgICAgICAgIGZsZXg7XG4gIC13ZWJraXQtYm94LWFsaWduIDogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zIDogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbiA6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtcyA6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjayA6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XG4gIC1tcy1mbGV4LXBhY2sgOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogI0U2RUFFRTtcbiAgY29sb3IgOiAjNDc1RjdCO1xuICBib3JkZXItcmFkaXVzIDogNTAlO1xuICBoZWlnaHQgOiAzMHB4O1xuICB3aWR0aCA6IDMwcHg7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgYm9yZGVyIDogMnB4IHNvbGlkICNGRkZGRkY7XG59XG5cbi5rYW5iYW4tc2lkZWJhciB7XG4gIC8qIGthbmJhbiBzaWRlYmFyICovXG4gIGJveC1zaGFkb3cgOiAtOHB4IDAgMThweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMyk7XG4gIGhlaWdodCA6IDEwMHZoO1xuICB3aWR0aCA6IDIzLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3IgOiAjRkZGRkZGO1xuICBwb3NpdGlvbiA6IGZpeGVkO1xuICAtd2Via2l0LXRyYW5zZm9ybSA6IHRyYW5zbGF0ZVgoMTEwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtIDogdHJhbnNsYXRlWCgxMTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVYKDExMCUpO1xuICAtd2Via2l0LXRyYW5zaXRpb24gOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb24gOiBhbGwgMC4zcyBlYXNlO1xuICB6LWluZGV4IDogMTA1MDtcbiAgcmlnaHQgOiAycmVtO1xuICBsZWZ0IDogYXV0bztcbiAgYm90dG9tIDogMDtcbiAgdG9wIDogLTFweDtcbiAgb3BhY2l0eSA6IDA7XG4gIG92ZXJmbG93IDogaGlkZGVuO1xufVxuLmthbmJhbi1zaWRlYmFyIC5jYXJkLWhlYWRlciAuY2xvc2UtaWNvbiB7XG4gIGNvbG9yIDogIzZCNkY4MjtcbiAgb3BhY2l0eSA6IDEgIWltcG9ydGFudDtcbn1cbi5rYW5iYW4tc2lkZWJhciAuY2FyZC1oZWFkZXIgLmNsb3NlLWljb246Zm9jdXMge1xuICBvdXRsaW5lIDogbm9uZTtcbn1cbi5rYW5iYW4tc2lkZWJhci5zaG93IHtcbiAgb3BhY2l0eSA6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtIDogdHJhbnNsYXRlWCg5JSkgdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybSA6IHRyYW5zbGF0ZVgoOSUpIHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgICB0cmFuc2Zvcm0gOiB0cmFuc2xhdGVYKDklKSB0cmFuc2xhdGVZKDFweCk7XG59XG4ua2FuYmFuLXNpZGViYXIgLmVkaXQta2FuYmFuLWl0ZW0ge1xuICBoZWlnaHQgOiAxMDB2aDtcbn1cbi5rYW5iYW4tc2lkZWJhciAuZWRpdC1rYW5iYW4taXRlbSAuY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0IDogY2FsYygxMDAlIC0gOXJlbSk7XG59XG4ua2FuYmFuLXNpZGViYXIgLmVkaXQta2FuYmFuLWl0ZW0gLmNhcmQtY29udGVudCAuZm9ybS1ncm91cCA+IGxhYmVsIHtcbiAgY29sb3IgOiAjQkFDMEM3O1xuICBtYXJnaW4tYm90dG9tIDogMC42N3JlbTtcbn1cbi5rYW5iYW4tc2lkZWJhciAuZWRpdC1rYW5iYW4taXRlbSAuY2FyZC1jb250ZW50IC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXMgOiAwLjI1cmVtO1xuICBkaXNwbGF5IDogYmxvY2s7XG59XG4ua2FuYmFuLXNpZGViYXIgLmVkaXQta2FuYmFuLWl0ZW0gLmNhcmQtY29udGVudCAuY3VzdG9tLWZpbGUgLmN1c3RvbS1maWxlLWxhYmVsOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvciA6IHRyYW5zcGFyZW50O1xufVxuLmthbmJhbi1zaWRlYmFyIC5lZGl0LWthbmJhbi1pdGVtIC5jYXJkLWZvb3RlciAuYnRuIGkge1xuICB0b3AgOiAwO1xufVxuLmthbmJhbi1zaWRlYmFyIC5lZGl0LWthbmJhbi1pdGVtIC5waWNrZXIge1xuICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtc25vdywgLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtdG9vbGJhciB7XG4gIGJvcmRlciA6IG5vbmU7XG59XG4ua2FuYmFuLXNpZGViYXIgLnF1aWxsLXdyYXBwZXIgLnNub3ctY29udGFpbmVyIC5xbC10b29sYmFyIC5idG4ge1xuICB3aWR0aCA6IGF1dG87XG4gIGxpbmUtaGVpZ2h0IDogMC45O1xuICBwYWRkaW5nIDogMC40NjdyZW0gMS4ycmVtO1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtdG9vbGJhciAuYnRuOmhvdmVyIHtcbiAgY29sb3IgOiAjRkZGRkZGO1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5zbm93LWNvbnRhaW5lciAucWwtdG9vbHRpcCB7XG4gIGxlZnQgOiAwICFpbXBvcnRhbnQ7XG59XG4ua2FuYmFuLXNpZGViYXIgLnF1aWxsLXdyYXBwZXIgLnNub3ctY29udGFpbmVyIC5xbC10b29sdGlwIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aCA6IDEwMHB4O1xufVxuLmthbmJhbi1zaWRlYmFyIC5xdWlsbC13cmFwcGVyIC5xbC1lZGl0b3IucWwtYmxhbms6OmJlZm9yZSB7XG4gIGxlZnQgOiAwLjNyZW07XG59XG4ua2FuYmFuLXNpZGViYXIgLnF1aWxsLXdyYXBwZXIgLnFsLWVkaXRvciB7XG4gIG1pbi1oZWlnaHQgOiA3LjkzcmVtO1xuICBwYWRkaW5nIDogMDtcbn1cblxuLmthbmJhbi10aXRsZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3cgOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmthbmJhbi1zaWRlYmFyIHtcbiAgICB3aWR0aCA6IDE5cmVtO1xuICAgIHJpZ2h0IDogMS42cmVtO1xuICB9XG4gIC5rYW5iYW4tc2lkZWJhciAucXVpbGwtd3JhcHBlciAuc25vdy1jb250YWluZXIgLnFsLXRvb2x0aXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGggOiA3MHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 97345:
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/directives/dnd-draggable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndDraggable": () => (/* binding */ DndDraggable)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 56906);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ 90876);
/* harmony import */ var _dnd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd-list */ 12269);


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DndDraggable = function () {
  function DndDraggable(element, dndState) {
    this.element = element;
    this.dndState = dndState;
    this.option = {
      draggable: true
    };
    this.dndDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dndDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dndCopied = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dndLinked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dndMoved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dndCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dndSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.draggableString = 'draggable';
    this.dragState = dndState.dragState;
    this.element.nativeElement.setAttribute(this.draggableString, 'true');
    this.element.nativeElement.onselectstart = function () {
      if (this.dragDrop) this.dragDrop();
    };
  }
  Object.defineProperty(DndDraggable.prototype, "disableDrag", {
    set: function (disable) {
      if (disable !== undefined) {
        this.element.nativeElement.setAttribute(this.draggableString, (!disable).toString());
      }
    },
    enumerable: true,
    configurable: true
  });
  DndDraggable.prototype.ngOnInit = function () {
    var _this = this;
    this.dropSubscription = _dnd_list__WEBPACK_IMPORTED_MODULE_2__.dropAccepted.subscribe(function (_a) {
      var item = _a.item,
        list = _a.list;
      if (JSON.stringify(_this.dndObject) === JSON.stringify(item)) {
        var cb = {
          copy: 'dndCopied',
          link: 'dndLinked',
          move: 'dndMoved',
          none: 'dndCanceled'
        };
        if (_this.dragState) {
          _this[cb[_this.dragState.effectAllowed]].emit();
        }
        _this.dndDragEnd.emit();
      }
    });
  };
  DndDraggable.prototype.ngOnDestroy = function () {
    this.dropSubscription.unsubscribe();
  };
  DndDraggable.prototype.handleDragStart = function (event) {
    var _this = this;
    if (this.element.nativeElement.getAttribute(this.draggableString) === 'false') return;
    this.dragState.isDragging = true;
    this.dragState.itemType = this.dndType;
    this.dragState.dropEffect = 'none';
    if (!this.option) {
      this.option = {
        draggable: true
      };
    }
    this.dragState.effectAllowed = this.option.effectAllowed || _index__WEBPACK_IMPORTED_MODULE_1__.ALL_EFFECTS[0];
    event.dataTransfer.effectAllowed = this.dragState.effectAllowed;
    var mimeType = _index__WEBPACK_IMPORTED_MODULE_1__.MIME_TYPE + (this.dragState.itemType ? '-' + this.dragState.itemType : '');
    try {
      event.dataTransfer.setData(mimeType, JSON.stringify(this.dndObject));
    } catch (e) {
      var data = JSON.stringify({
        item: this.dndObject,
        type: this.dragState.itemType
      });
      try {
        event.dataTransfer.setData(_index__WEBPACK_IMPORTED_MODULE_1__.EDGE_MIME_TYPE, data);
      } catch (e) {
        var effectsAllowed = this.dndState.filterEffects(_index__WEBPACK_IMPORTED_MODULE_1__.ALL_EFFECTS, this.dragState.effectAllowed);
        event.dataTransfer.effectAllowed = effectsAllowed[0];
        event.dataTransfer.setData(_index__WEBPACK_IMPORTED_MODULE_1__.MSIE_MIME_TYPE, data);
      }
    }
    this.element.nativeElement.classList.add('dndDragging');
    setTimeout(function () {
      if (_this.dragState.effectAllowed === 'move') {
        _this.element.nativeElement.style.display = 'none';
      }
    });
    if (event._dndHandle && event.dataTransfer.setDragImage) {
      event.dataTransfer.setDragImage(this.element.nativeElement, 0, 0);
    }
    this.dndDragStart.emit();
    event.stopPropagation();
  };
  DndDraggable.prototype.handleDragEnd = function (event) {
    var _this = this;
    this.dragState.isDragging = false;
    this.element.nativeElement.classList.remove('dndDragging');
    this.element.nativeElement.style.removeProperty('display');
    event.stopPropagation();
    setTimeout(function () {
      return _this.element.nativeElement.classList.remove('dndDraggingSource');
    }, 0);
  };
  DndDraggable.prototype.handleClick = function (event) {
    if (this.element.nativeElement.hasAttribute('dndSelected')) return;
    event = event['originalEvent'] || event;
    this.dndSelected.emit();
    event.stopPropagation();
  };
  DndDraggable.prototype.findElementWithAttribute = function (element, attr) {
    if (element.hasAttribute(attr)) return element;
    if (element.parentElement === null) return;
    return this.findElementWithAttribute(element.parentElement, attr);
  };
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input)('dndDraggable'), __metadata("design:type", Object)], DndDraggable.prototype, "option", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input)('dndType'), __metadata("design:type", String)], DndDraggable.prototype, "dndType", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input)('dndObject'), __metadata("design:type", HTMLElement)], DndDraggable.prototype, "dndObject", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Input)('dndDragDisabled'), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], DndDraggable.prototype, "disableDrag", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Output)('dndDragStart'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter)], DndDraggable.prototype, "dndDragStart", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Output)('dndDragEnd'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter)], DndDraggable.prototype, "dndDragEnd", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Output)('dndCopied'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter)], DndDraggable.prototype, "dndCopied", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Output)('dndLinked'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter)], DndDraggable.prototype, "dndLinked", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Output)('dndMoved'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter)], DndDraggable.prototype, "dndMoved", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Output)('dndCanceled'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter)], DndDraggable.prototype, "dndCanceled", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Output)('dndSelected'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter)], DndDraggable.prototype, "dndSelected", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener)('dragstart', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", void 0)], DndDraggable.prototype, "handleDragStart", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener)('dragend', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", void 0)], DndDraggable.prototype, "handleDragEnd", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener)('click', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Event]), __metadata("design:returntype", void 0)], DndDraggable.prototype, "handleClick", null);
  DndDraggable = __decorate([__metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef, _services__WEBPACK_IMPORTED_MODULE_0__.DndState])], DndDraggable);
  DndDraggable.ɵfac = function DndDraggable_Factory(t) {
    return new (t || DndDraggable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DndState));
  };
  DndDraggable.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: DndDraggable,
    selectors: [["", "dndDraggable", ""]],
    hostBindings: function DndDraggable_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragstart", function DndDraggable_dragstart_HostBindingHandler($event) {
          return ctx.handleDragStart($event);
        })("dragend", function DndDraggable_dragend_HostBindingHandler($event) {
          return ctx.handleDragEnd($event);
        })("click", function DndDraggable_click_HostBindingHandler($event) {
          return ctx.handleClick($event);
        });
      }
    },
    inputs: {
      option: ["dndDraggable", "option"],
      disableDrag: ["dndDragDisabled", "disableDrag"],
      dndType: "dndType",
      dndObject: "dndObject"
    },
    outputs: {
      dndDragStart: "dndDragStart",
      dndDragEnd: "dndDragEnd",
      dndCopied: "dndCopied",
      dndLinked: "dndLinked",
      dndMoved: "dndMoved",
      dndCanceled: "dndCanceled",
      dndSelected: "dndSelected"
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DndDraggable, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
      args: [{
        selector: '[dndDraggable]'
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_0__.DndState
      }];
    }, {
      option: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['dndDraggable']
      }],
      dndDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
        args: ['dndDragStart']
      }],
      dndDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
        args: ['dndDragEnd']
      }],
      dndCopied: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
        args: ['dndCopied']
      }],
      dndLinked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
        args: ['dndLinked']
      }],
      dndMoved: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
        args: ['dndMoved']
      }],
      dndCanceled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
        args: ['dndCanceled']
      }],
      dndSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output,
        args: ['dndSelected']
      }],
      disableDrag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['dndDragDisabled']
      }],
      handleDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
        args: ['dragstart', ['$event']]
      }],
      handleDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
        args: ['dragend', ['$event']]
      }],
      handleClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
        args: ['click', ['$event']]
      }],
      dndType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['dndType']
      }],
      dndObject: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
        args: ['dndObject']
      }]
    });
  })();
  return DndDraggable;
}();


/***/ }),

/***/ 50770:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/directives/dnd-handle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndHandle": () => (/* binding */ DndHandle)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 56906);


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DndHandle = function () {
  function DndHandle(element, dndState) {
    this.element = element;
    this.dndState = dndState;
    this.draggableString = 'draggable';
    this.dragState = dndState.dragState;
    this.nativeElement = element.nativeElement;
    this.nativeElement.setAttribute(this.draggableString, 'true');
  }
  DndHandle.prototype.handleDragStart = function (event) {
    event = event['originalEvent'] || event;
    event['_dndHandle'] = true;
  };
  DndHandle.prototype.handleDragEnd = function (event) {
    event = event['originalEvent'] || event;
    if (!event['_dndHandle']) {
      event.stopPropagation();
    }
  };
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('dragstart', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", void 0)], DndHandle.prototype, "handleDragStart", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('dragend', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", void 0)], DndHandle.prototype, "handleDragEnd", null);
  DndHandle = __decorate([__metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef, _services__WEBPACK_IMPORTED_MODULE_0__.DndState])], DndHandle);
  DndHandle.ɵfac = function DndHandle_Factory(t) {
    return new (t || DndHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DndState));
  };
  DndHandle.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: DndHandle,
    selectors: [["", "dndHandle", ""]],
    hostBindings: function DndHandle_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragstart", function DndHandle_dragstart_HostBindingHandler($event) {
          return ctx.handleDragStart($event);
        })("dragend", function DndHandle_dragend_HostBindingHandler($event) {
          return ctx.handleDragEnd($event);
        });
      }
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DndHandle, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
      args: [{
        selector: '[dndHandle]'
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_0__.DndState
      }];
    }, {
      handleDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ['dragstart', ['$event']]
      }],
      handleDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ['dragend', ['$event']]
      }]
    });
  })();
  return DndHandle;
}();


/***/ }),

/***/ 12269:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/directives/dnd-list.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndList": () => (/* binding */ DndList),
/* harmony export */   "dropAccepted": () => (/* binding */ dropAccepted)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 56906);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 97063);


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var dropAccepted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
var DndList = function () {
  function DndList(element, dndState) {
    this.element = element;
    this.dndState = dndState;
    this.option = {
      disabled: false,
      effectAllowed: 'move',
      allowedTypes: undefined
    };
    this.dndDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.dndDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.dndInserted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.listSettings = {};
    this.dragState = dndState.dragState;
    this.nativeElement = element.nativeElement;
    this.placeholder = this.getPlaceholderElement();
  }
  Object.defineProperty(DndList.prototype, "dndPlaceholder", {
    set: function (placeholder) {
      this.placeholder = placeholder;
      placeholder.remove();
    },
    enumerable: true,
    configurable: true
  });
  DndList.prototype.ngOnInit = function () {};
  DndList.prototype.ngOnDestroy = function () {};
  DndList.prototype.handleDragEnter = function (event) {
    event = event['originalEvent'] || event;
    var mimeType = this.getMimeType(event.dataTransfer.types);
    if (!mimeType || !this.isDropAllowed(this.getItemType(mimeType))) {
      return true;
    }
    event.preventDefault();
    return false;
  };
  DndList.prototype.handleDragOver = function (event) {
    event = event['originalEvent'] || event;
    var mimeType = this.getMimeType(event.dataTransfer.types);
    var itemType = this.getItemType(mimeType);
    if (!mimeType || !this.isDropAllowed(itemType)) {
      return true;
    }
    if (this.placeholder.parentNode !== this.nativeElement) {
      this.nativeElement.appendChild(this.placeholder);
    }
    if (event.target !== this.nativeElement) {
      var listItemNode = event.target;
      while (listItemNode.parentNode !== this.nativeElement && listItemNode.parentNode) {
        listItemNode = listItemNode.parentNode;
      }
      if (listItemNode.parentNode === this.nativeElement && listItemNode !== this.placeholder) {
        var isFirstHalf = void 0;
        var rect = listItemNode.getBoundingClientRect();
        if (this.option && this.option.horizontal) {
          isFirstHalf = event.clientX < rect.left + rect.width / 2;
        } else {
          isFirstHalf = event.clientY < rect.top + rect.height / 2;
        }
        this.nativeElement.insertBefore(this.placeholder, isFirstHalf ? listItemNode : listItemNode.nextSibling);
      }
    }
    var ignoreDataTransfer = mimeType === _services__WEBPACK_IMPORTED_MODULE_0__.MSIE_MIME_TYPE;
    var dropEffect = this.getDropEffect(event, ignoreDataTransfer);
    if (dropEffect === 'none') return this.stopDragOver();
    event.preventDefault();
    if (!ignoreDataTransfer) {
      event.dataTransfer.dropEffect = dropEffect;
    }
    this.nativeElement.classList.add('dndDragover');
    event.stopPropagation();
    return false;
  };
  DndList.prototype.handleDrop = function (event) {
    event = event['originalEvent'] || event;
    var mimeType = this.getMimeType(event.dataTransfer.types);
    var itemType = this.getItemType(mimeType);
    if (!mimeType || !this.isDropAllowed(itemType)) return true;
    event.preventDefault();
    var data = undefined;
    try {
      data = JSON.parse(event.dataTransfer.getData(mimeType));
    } catch (e) {
      return this.stopDragOver();
    }
    if (mimeType === _services__WEBPACK_IMPORTED_MODULE_0__.MSIE_MIME_TYPE || mimeType === _services__WEBPACK_IMPORTED_MODULE_0__.EDGE_MIME_TYPE) {
      itemType = data.type || undefined;
      data = data.item;
      if (!this.isDropAllowed(itemType)) return this.stopDragOver();
    }
    var ignoreDataTransfer = mimeType === _services__WEBPACK_IMPORTED_MODULE_0__.MSIE_MIME_TYPE;
    var dropEffect = this.getDropEffect(event, ignoreDataTransfer);
    if (dropEffect === 'none') return this.stopDragOver();
    var index = this.getPlaceholderIndex();
    var offset = this.nativeElement.children.length - 1 - this.dndModel.length;
    if (this.dndDrop) {
      this.invokeCallback(this.dndDrop, event, dropEffect, itemType, index, data);
      if (!data) return this.stopDragOver();
    }
    this.dragState.dropEffect = dropEffect;
    if (!ignoreDataTransfer) {
      event.dataTransfer.dropEffect = dropEffect;
    }
    if (data !== true) {
      var insertionPoint = index - offset;
      if (insertionPoint < 0) {
        insertionPoint = 0;
      }
      this.dndModel.splice(insertionPoint, 0, data);
    }
    this.invokeCallback(this.dndInserted, event, dropEffect, itemType, index, data);
    dropAccepted.next({
      item: data,
      list: this.dndModel
    });
    this.stopDragOver();
    event.stopPropagation();
    return false;
  };
  DndList.prototype.handleDragLeave = function (event) {
    event = event['originalEvent'] || event;
    var newTarget = document.elementFromPoint(event.clientX, event.clientY);
    if (this.nativeElement.contains(newTarget) && !event['_dndPhShown']) {
      event['_dndPhShown'] = true;
    } else {
      this.stopDragOver();
    }
  };
  DndList.prototype.getPlaceholderElement = function () {
    var placeholder = undefined;
    if (this.nativeElement.children) {
      for (var i = 1; i < this.nativeElement.children.length; i++) {
        var child = this.nativeElement.children.item(i);
        if (child.classList.contains('dndPlaceholder')) {
          placeholder = child;
        }
      }
    }
    var placeholderDefault = document.createElement('li');
    placeholderDefault.classList.add('dndPlaceholder');
    return placeholder || placeholderDefault;
  };
  DndList.prototype.getMimeType = function (types) {
    if (!types) return _services__WEBPACK_IMPORTED_MODULE_0__.MSIE_MIME_TYPE;
    for (var i = 0; i < types.length; i++) {
      if (types[i] === _services__WEBPACK_IMPORTED_MODULE_0__.MSIE_MIME_TYPE || types[i] === _services__WEBPACK_IMPORTED_MODULE_0__.EDGE_MIME_TYPE || types[i].substr(0, _services__WEBPACK_IMPORTED_MODULE_0__.MIME_TYPE.length) === _services__WEBPACK_IMPORTED_MODULE_0__.MIME_TYPE) {
        return types[i];
      }
    }
    return null;
  };
  DndList.prototype.getItemType = function (mimeType) {
    if (this.dragState.isDragging) return this.dragState.itemType || undefined;
    if (mimeType === _services__WEBPACK_IMPORTED_MODULE_0__.MSIE_MIME_TYPE || mimeType === _services__WEBPACK_IMPORTED_MODULE_0__.EDGE_MIME_TYPE) return null;
    return mimeType && mimeType.substr(_services__WEBPACK_IMPORTED_MODULE_0__.MIME_TYPE.length + 1) || undefined;
  };
  DndList.prototype.isDropAllowed = function (itemType) {
    if (this.option) {
      if (this.option.disabled) return false;
      if (this.option.max && this.dndModel.length === this.option.max) return false;
      if (!this.option.externalSources && !this.dragState.isDragging) return false;
      if (!this.option.allowedTypes || itemType === null) return true;
    }
    return itemType && this.option.allowedTypes.indexOf(itemType) !== -1;
  };
  DndList.prototype.getDropEffect = function (event, ignoreDataTransfer) {
    var effects = Object.assign([], _services__WEBPACK_IMPORTED_MODULE_0__.ALL_EFFECTS);
    if (!ignoreDataTransfer) {
      effects = this.dndState.filterEffects(effects, event.dataTransfer.effectAllowed);
    }
    if (this.dragState.isDragging) {
      effects = this.dndState.filterEffects(effects, this.dragState.effectAllowed);
    }
    if (this.option && this.option.effectAllowed) {
      effects = this.dndState.filterEffects(effects, this.option.effectAllowed);
    }
    if (!effects.length) {
      return 'none';
    } else if (event.ctrlKey && effects.indexOf('copy') !== -1) {
      return 'copy';
    } else if (event.altKey && effects.indexOf('link') !== -1) {
      return 'link';
    } else {
      return effects[0];
    }
  };
  DndList.prototype.stopDragOver = function () {
    this.placeholder.remove();
    this.nativeElement.classList.remove('dndDragover');
    return true;
  };
  DndList.prototype.invokeCallback = function (eventEmitter, event, dropEffect, itemType, index, item) {
    eventEmitter.emit({
      dropEffect: dropEffect,
      event: event,
      external: !this.dragState.isDragging,
      index: index !== undefined ? index : this.getPlaceholderIndex(),
      item: item || undefined,
      type: itemType
    });
    return true;
  };
  DndList.prototype.getPlaceholderIndex = function () {
    for (var i = 0; i < this.nativeElement.children.length; i++) {
      if (this.nativeElement.children[i].classList.contains('dndDragging')) {
        this.nativeElement.children[i].remove();
        break;
      }
    }
    return Array.prototype.indexOf.call(this.nativeElement.children, this.placeholder);
  };
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('dndList'), __metadata("design:type", Object)], DndList.prototype, "option", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)('dndModel'), __metadata("design:type", Array)], DndList.prototype, "dndModel", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input)(), __metadata("design:type", Element), __metadata("design:paramtypes", [Element])], DndList.prototype, "dndPlaceholder", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)('dndDragOver'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], DndList.prototype, "dndDragOver", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)('dndDrop'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], DndList.prototype, "dndDrop", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output)('dndInserted'), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter)], DndList.prototype, "dndInserted", void 0);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('dragenter', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", Boolean)], DndList.prototype, "handleDragEnter", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('dragover', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", Boolean)], DndList.prototype, "handleDragOver", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('drop', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", Boolean)], DndList.prototype, "handleDrop", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener)('dragleave', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", void 0)], DndList.prototype, "handleDragLeave", null);
  DndList = __decorate([__metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, _services__WEBPACK_IMPORTED_MODULE_0__.DndState])], DndList);
  DndList.ɵfac = function DndList_Factory(t) {
    return new (t || DndList)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DndState));
  };
  DndList.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
    type: DndList,
    selectors: [["", "dndList", ""]],
    hostBindings: function DndList_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dragenter", function DndList_dragenter_HostBindingHandler($event) {
          return ctx.handleDragEnter($event);
        })("dragover", function DndList_dragover_HostBindingHandler($event) {
          return ctx.handleDragOver($event);
        })("drop", function DndList_drop_HostBindingHandler($event) {
          return ctx.handleDrop($event);
        })("dragleave", function DndList_dragleave_HostBindingHandler($event) {
          return ctx.handleDragLeave($event);
        });
      }
    },
    inputs: {
      option: ["dndList", "option"],
      dndPlaceholder: "dndPlaceholder",
      dndModel: "dndModel"
    },
    outputs: {
      dndDragOver: "dndDragOver",
      dndDrop: "dndDrop",
      dndInserted: "dndInserted"
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DndList, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
      args: [{
        selector: '[dndList]'
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_0__.DndState
      }];
    }, {
      option: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
        args: ['dndList']
      }],
      dndDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
        args: ['dndDragOver']
      }],
      dndDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
        args: ['dndDrop']
      }],
      dndInserted: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
        args: ['dndInserted']
      }],
      dndPlaceholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
      }],
      handleDragEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
        args: ['dragenter', ['$event']]
      }],
      handleDragOver: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
        args: ['dragover', ['$event']]
      }],
      handleDrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
        args: ['drop', ['$event']]
      }],
      handleDragLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
        args: ['dragleave', ['$event']]
      }],
      dndModel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
        args: ['dndModel']
      }]
    });
  })();
  return DndList;
}();


/***/ }),

/***/ 73423:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/directives/dnd-nodrag.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndNoDrag": () => (/* binding */ DndNoDrag)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 56906);


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DndNoDrag = function () {
  function DndNoDrag(element, dndState) {
    this.element = element;
    this.dndState = dndState;
    this.draggableString = 'draggable';
    this.dragState = dndState.dragState;
    this.nativeElement = element.nativeElement;
    this.nativeElement.setAttribute(this.draggableString, 'true');
  }
  DndNoDrag.prototype.handleDragStart = function (event) {
    event = event['originalEvent'] || event;
    if (!event['_dndHandle']) {
      if (!(event.dataTransfer.types && event.dataTransfer.types.length)) {
        event.preventDefault();
      }
      event.stopPropagation();
    }
  };
  DndNoDrag.prototype.handleDragEnd = function (event) {
    event = event['originalEvent'] || event;
    if (!event['_dndHandle']) {
      event.stopPropagation();
    }
  };
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('dragstart', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", void 0)], DndNoDrag.prototype, "handleDragStart", null);
  __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener)('dragend', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [DragEvent]), __metadata("design:returntype", void 0)], DndNoDrag.prototype, "handleDragEnd", null);
  DndNoDrag = __decorate([__metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef, _services__WEBPACK_IMPORTED_MODULE_0__.DndState])], DndNoDrag);
  DndNoDrag.ɵfac = function DndNoDrag_Factory(t) {
    return new (t || DndNoDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.DndState));
  };
  DndNoDrag.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: DndNoDrag,
    selectors: [["", "dndNoDrag", ""]],
    hostBindings: function DndNoDrag_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dragstart", function DndNoDrag_dragstart_HostBindingHandler($event) {
          return ctx.handleDragStart($event);
        })("dragend", function DndNoDrag_dragend_HostBindingHandler($event) {
          return ctx.handleDragEnd($event);
        });
      }
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DndNoDrag, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
      args: [{
        selector: '[dndNoDrag]'
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_0__.DndState
      }];
    }, {
      handleDragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ['dragstart', ['$event']]
      }],
      handleDragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ['dragend', ['$event']]
      }]
    });
  })();
  return DndNoDrag;
}();


/***/ }),

/***/ 96586:
/*!******************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/directives/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndDraggable": () => (/* reexport safe */ _dnd_draggable__WEBPACK_IMPORTED_MODULE_0__.DndDraggable),
/* harmony export */   "DndHandle": () => (/* reexport safe */ _dnd_handle__WEBPACK_IMPORTED_MODULE_3__.DndHandle),
/* harmony export */   "DndList": () => (/* reexport safe */ _dnd_list__WEBPACK_IMPORTED_MODULE_2__.DndList),
/* harmony export */   "DndNoDrag": () => (/* reexport safe */ _dnd_nodrag__WEBPACK_IMPORTED_MODULE_1__.DndNoDrag),
/* harmony export */   "dropAccepted": () => (/* reexport safe */ _dnd_list__WEBPACK_IMPORTED_MODULE_2__.dropAccepted)
/* harmony export */ });
/* harmony import */ var _dnd_draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dnd-draggable */ 97345);
/* harmony import */ var _dnd_nodrag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dnd-nodrag */ 73423);
/* harmony import */ var _dnd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnd-list */ 12269);
/* harmony import */ var _dnd_handle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dnd-handle */ 50770);





/***/ }),

/***/ 90876:
/*!*******************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_EFFECTS": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ALL_EFFECTS),
/* harmony export */   "DndDraggable": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.DndDraggable),
/* harmony export */   "DndHandle": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.DndHandle),
/* harmony export */   "DndList": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.DndList),
/* harmony export */   "DndListModule": () => (/* reexport safe */ _module_module__WEBPACK_IMPORTED_MODULE_0__.DndListModule),
/* harmony export */   "DndNoDrag": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.DndNoDrag),
/* harmony export */   "DndState": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.DndState),
/* harmony export */   "EDGE_MIME_TYPE": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.EDGE_MIME_TYPE),
/* harmony export */   "MIME_TYPE": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.MIME_TYPE),
/* harmony export */   "MSIE_MIME_TYPE": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.MSIE_MIME_TYPE),
/* harmony export */   "dropAccepted": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.dropAccepted)
/* harmony export */ });
/* harmony import */ var _module_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/module */ 30051);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ 96586);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ 56906);




/***/ }),

/***/ 30051:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/module/module.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndListModule": () => (/* binding */ DndListModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives */ 96586);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ 56906);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DndListModule = function () {
  function DndListModule() {}
  DndListModule.ɵfac = function DndListModule_Factory(t) {
    return new (t || DndListModule)();
  };
  DndListModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: DndListModule
  });
  DndListModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_services__WEBPACK_IMPORTED_MODULE_1__.DndState],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DndListModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [_directives__WEBPACK_IMPORTED_MODULE_0__.DndDraggable, _directives__WEBPACK_IMPORTED_MODULE_0__.DndHandle, _directives__WEBPACK_IMPORTED_MODULE_0__.DndList, _directives__WEBPACK_IMPORTED_MODULE_0__.DndNoDrag],
        entryComponents: [],
        declarations: [_directives__WEBPACK_IMPORTED_MODULE_0__.DndDraggable, _directives__WEBPACK_IMPORTED_MODULE_0__.DndHandle, _directives__WEBPACK_IMPORTED_MODULE_0__.DndList, _directives__WEBPACK_IMPORTED_MODULE_0__.DndNoDrag],
        providers: [_services__WEBPACK_IMPORTED_MODULE_1__.DndState]
      }]
    }], function () {
      return [];
    }, null);
  })();
  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DndListModule, {
      declarations: function () {
        return [_directives__WEBPACK_IMPORTED_MODULE_0__.DndDraggable, _directives__WEBPACK_IMPORTED_MODULE_0__.DndHandle, _directives__WEBPACK_IMPORTED_MODULE_0__.DndList, _directives__WEBPACK_IMPORTED_MODULE_0__.DndNoDrag];
      },
      imports: function () {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
      },
      exports: function () {
        return [_directives__WEBPACK_IMPORTED_MODULE_0__.DndDraggable, _directives__WEBPACK_IMPORTED_MODULE_0__.DndHandle, _directives__WEBPACK_IMPORTED_MODULE_0__.DndList, _directives__WEBPACK_IMPORTED_MODULE_0__.DndNoDrag];
      }
    });
  })();
  return DndListModule;
}();


/***/ }),

/***/ 50639:
/*!************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/Observable.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/canReportError */ 18947);
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/toSubscriber */ 11328);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/observable */ 89308);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/pipe */ 36096);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ 78917);





class Observable {
  constructor(subscribe) {
    this._isScalar = false;
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observerOrNext, error, complete) {
    const {
      operator
    } = this;
    const sink = (0,_util_toSubscriber__WEBPACK_IMPORTED_MODULE_0__.toSubscriber)(observerOrNext, error, complete);
    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || _config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }
    if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;
        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }
    return sink;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }
      if ((0,_util_canReportError__WEBPACK_IMPORTED_MODULE_2__.canReportError)(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let subscription;
      subscription = this.subscribe(value => {
        try {
          next(value);
        } catch (err) {
          reject(err);
          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  }
  _subscribe(subscriber) {
    const {
      source
    } = this;
    return source && source.subscribe(subscriber);
  }
  [_symbol_observable__WEBPACK_IMPORTED_MODULE_3__.observable]() {
    return this;
  }
  pipe(...operations) {
    if (operations.length === 0) {
      return this;
    }
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_4__.pipeFromArray)(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
  }
}
Observable.create = subscribe => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = _config__WEBPACK_IMPORTED_MODULE_1__.config.Promise || Promise;
  }
  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }
  return promiseCtor;
}

/***/ }),

/***/ 98954:
/*!**********************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/Observer.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 78917);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ 34587);


const empty = {
  closed: true,
  next(value) {},
  error(err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__.hostReportError)(err);
    }
  },
  complete() {}
};

/***/ }),

/***/ 97063:
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/Subject.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousSubject": () => (/* binding */ AnonymousSubject),
/* harmony export */   "Subject": () => (/* binding */ Subject),
/* harmony export */   "SubjectSubscriber": () => (/* binding */ SubjectSubscriber)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ 50639);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 11452);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Subscription */ 66389);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 54772);
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ 98607);
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 10740);






class SubjectSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination) {
    super(destination);
    this.destination = destination;
  }
}
class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable {
  constructor() {
    super();
    this.observers = [];
    this.closed = false;
    this.isStopped = false;
    this.hasError = false;
    this.thrownError = null;
  }
  [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber]() {
    return new SubjectSubscriber(this);
  }
  lift(operator) {
    const subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  }
  next(value) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
    }
    if (!this.isStopped) {
      const {
        observers
      } = this;
      const len = observers.length;
      const copy = observers.slice();
      for (let i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  }
  error(err) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
    }
    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    const {
      observers
    } = this;
    const len = observers.length;
    const copy = observers.slice();
    for (let i = 0; i < len; i++) {
      copy[i].error(err);
    }
    this.observers.length = 0;
  }
  complete() {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
    }
    this.isStopped = true;
    const {
      observers
    } = this;
    const len = observers.length;
    const copy = observers.slice();
    for (let i = 0; i < len; i++) {
      copy[i].complete();
    }
    this.observers.length = 0;
  }
  unsubscribe() {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  }
  _trySubscribe(subscriber) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
    } else {
      return super._trySubscribe(subscriber);
    }
  }
  _subscribe(subscriber) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_3__.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__.SubjectSubscription(this, subscriber);
    }
  }
  asObservable() {
    const observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable();
    observable.source = this;
    return observable;
  }
}
Subject.create = (destination, source) => {
  return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    const {
      destination
    } = this;
    if (destination && destination.next) {
      destination.next(value);
    }
  }
  error(err) {
    const {
      destination
    } = this;
    if (destination && destination.error) {
      this.destination.error(err);
    }
  }
  complete() {
    const {
      destination
    } = this;
    if (destination && destination.complete) {
      this.destination.complete();
    }
  }
  _subscribe(subscriber) {
    const {
      source
    } = this;
    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return _Subscription__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    }
  }
}

/***/ }),

/***/ 98607:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/SubjectSubscription.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectSubscription": () => (/* binding */ SubjectSubscription)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 66389);

class SubjectSubscription extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(subject, subscriber) {
    super();
    this.subject = subject;
    this.subscriber = subscriber;
    this.closed = false;
  }
  unsubscribe() {
    if (this.closed) {
      return;
    }
    this.closed = true;
    const subject = this.subject;
    const observers = subject.observers;
    this.subject = null;
    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }
    const subscriberIndex = observers.indexOf(this.subscriber);
    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  }
}

/***/ }),

/***/ 11452:
/*!************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/Subscriber.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeSubscriber": () => (/* binding */ SafeSubscriber),
/* harmony export */   "Subscriber": () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ 89844);
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observer */ 98954);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 66389);
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ 10740);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 78917);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hostReportError */ 34587);






class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destinationOrNext, error, complete) {
    super();
    this.syncErrorValue = null;
    this.syncErrorThrown = false;
    this.syncErrorThrowable = false;
    this.isStopped = false;
    switch (arguments.length) {
      case 0:
        this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;
        break;
      case 1:
        if (!destinationOrNext) {
          this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__.empty;
          break;
        }
        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            this.destination = destinationOrNext;
            destinationOrNext.add(this);
          } else {
            this.syncErrorThrowable = true;
            this.destination = new SafeSubscriber(this, destinationOrNext);
          }
          break;
        }
      default:
        this.syncErrorThrowable = true;
        this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
        break;
    }
  }
  [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__.rxSubscriber]() {
    return this;
  }
  static create(next, error, complete) {
    const subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  }
  next(value) {
    if (!this.isStopped) {
      this._next(value);
    }
  }
  error(err) {
    if (!this.isStopped) {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (!this.isStopped) {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (this.closed) {
      return;
    }
    this.isStopped = true;
    super.unsubscribe();
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    this.destination.error(err);
    this.unsubscribe();
  }
  _complete() {
    this.destination.complete();
    this.unsubscribe();
  }
  _unsubscribeAndRecycle() {
    const {
      _parentOrParents
    } = this;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  }
}
class SafeSubscriber extends Subscriber {
  constructor(_parentSubscriber, observerOrNext, error, complete) {
    super();
    this._parentSubscriber = _parentSubscriber;
    let next;
    let context = this;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;
      if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__.empty) {
        context = Object.create(observerOrNext);
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(context.unsubscribe)) {
          this.add(context.unsubscribe.bind(context));
        }
        context.unsubscribe = this.unsubscribe.bind(this);
      }
    }
    this._context = context;
    this._next = next;
    this._error = error;
    this._complete = complete;
  }
  next(value) {
    if (!this.isStopped && this._next) {
      const {
        _parentSubscriber
      } = this;
      if (!_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  }
  error(err) {
    if (!this.isStopped) {
      const {
        _parentSubscriber
      } = this;
      const {
        useDeprecatedSynchronousErrorHandling
      } = _config__WEBPACK_IMPORTED_MODULE_4__.config;
      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);
          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);
          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();
        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }
        (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
        }
        this.unsubscribe();
      }
    }
  }
  complete() {
    if (!this.isStopped) {
      const {
        _parentSubscriber
      } = this;
      if (this._complete) {
        const wrappedComplete = () => this._complete.call(this._context);
        if (!_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);
          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);
          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  }
  __tryOrUnsub(fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();
      if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
      }
    }
  }
  __tryOrSetError(parent, fn, value) {
    if (!_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }
    try {
      fn.call(this._context, value);
    } catch (err) {
      if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__.hostReportError)(err);
        return true;
      }
    }
    return false;
  }
  _unsubscribe() {
    const {
      _parentSubscriber
    } = this;
    this._context = null;
    this._parentSubscriber = null;
    _parentSubscriber.unsubscribe();
  }
}

/***/ }),

/***/ 66389:
/*!**************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/Subscription.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscription": () => (/* binding */ Subscription)
/* harmony export */ });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isArray */ 64289);
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isObject */ 5252);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 89844);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 34785);




class Subscription {
  constructor(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;
    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }
  unsubscribe() {
    let errors;
    if (this.closed) {
      return;
    }
    let {
      _parentOrParents,
      _unsubscribe,
      _subscriptions
    } = this;
    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;
    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (let index = 0; index < _parentOrParents.length; ++index) {
        const parent = _parentOrParents[index];
        parent.remove(this);
      }
    }
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(_unsubscribe)) {
      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }
    if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(_subscriptions)) {
      let index = -1;
      let len = _subscriptions.length;
      while (++index < len) {
        const sub = _subscriptions[index];
        if ((0,_util_isObject__WEBPACK_IMPORTED_MODULE_3__.isObject)(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];
            if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }
    if (errors) {
      throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
    }
  }
  add(teardown) {
    let subscription = teardown;
    if (!teardown) {
      return Subscription.EMPTY;
    }
    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);
      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          const tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }
        break;
      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }
    let {
      _parentOrParents
    } = subscription;
    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }
      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }
    const subscriptions = this._subscriptions;
    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }
    return subscription;
  }
  remove(subscription) {
    const subscriptions = this._subscriptions;
    if (subscriptions) {
      const subscriptionIndex = subscriptions.indexOf(subscription);
      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  }
}
Subscription.EMPTY = function (empty) {
  empty.closed = true;
  return empty;
}(new Subscription());
function flattenUnsubscriptionErrors(errors) {
  return errors.reduce((errs, err) => errs.concat(err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? err.errors : err), []);
}

/***/ }),

/***/ 78917:
/*!********************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/config.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
  Promise: undefined,
  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      const error = new Error();
      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }
    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }
};

/***/ }),

/***/ 89308:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/symbol/observable.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observable": () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 10740:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/symbol/rxSubscriber.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$rxSubscriber": () => (/* binding */ $$rxSubscriber),
/* harmony export */   "rxSubscriber": () => (/* binding */ rxSubscriber)
/* harmony export */ });
const rxSubscriber = (() => typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random())();
const $$rxSubscriber = rxSubscriber;

/***/ }),

/***/ 54772:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/ObjectUnsubscribedError.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectUnsubscribedError": () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
const ObjectUnsubscribedErrorImpl = (() => {
  function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
  }
  ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
  return ObjectUnsubscribedErrorImpl;
})();
const ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/***/ }),

/***/ 34785:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscriptionError": () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
const UnsubscriptionErrorImpl = (() => {
  function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }
  UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
  return UnsubscriptionErrorImpl;
})();
const UnsubscriptionError = UnsubscriptionErrorImpl;

/***/ }),

/***/ 18947:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/canReportError.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canReportError": () => (/* binding */ canReportError)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 11452);

function canReportError(observer) {
  while (observer) {
    const {
      closed,
      destination,
      isStopped
    } = observer;
    if (closed || isStopped) {
      return false;
    } else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }
  return true;
}

/***/ }),

/***/ 34587:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/hostReportError.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hostReportError": () => (/* binding */ hostReportError)
/* harmony export */ });
function hostReportError(err) {
  setTimeout(() => {
    throw err;
  }, 0);
}

/***/ }),

/***/ 64289:
/*!**************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/isArray.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": () => (/* binding */ isArray)
/* harmony export */ });
const isArray = (() => Array.isArray || (x => x && typeof x.length === 'number'))();

/***/ }),

/***/ 89844:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/isFunction.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(x) {
  return typeof x === 'function';
}

/***/ }),

/***/ 5252:
/*!***************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/isObject.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObject": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(x) {
  return x !== null && typeof x === 'object';
}

/***/ }),

/***/ 94811:
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/noop.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 36096:
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/pipe.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "pipeFromArray": () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ 94811);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (!fns) {
    return _noop__WEBPACK_IMPORTED_MODULE_0__.noop;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 11328:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/node_modules/rxjs/_esm2015/internal/util/toSubscriber.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSubscriber": () => (/* binding */ toSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 11452);
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ 10740);
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ 98954);



function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) {
      return nextOrObserver;
    }
    if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]) {
      return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__.rxSubscriber]();
    }
  }
  if (!nextOrObserver && !error && !complete) {
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(_Observer__WEBPACK_IMPORTED_MODULE_2__.empty);
  }
  return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber(nextOrObserver, error, complete);
}

/***/ }),

/***/ 21025:
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/services/DndState.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndState": () => (/* binding */ DndState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ 90876);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DndState = function () {
  function DndState() {
    this.dragState = {
      isDragging: false,
      itemType: undefined,
      dropEffect: 'none',
      effectAllowed: _index__WEBPACK_IMPORTED_MODULE_0__.ALL_EFFECTS[0]
    };
  }
  DndState.prototype.filterEffects = function (effects, effectAllowed) {
    if (effectAllowed === 'all') return effects;
    return effects.filter(function (effect) {
      return effectAllowed.toLowerCase().indexOf(effect) !== -1;
    });
  };
  DndState.ɵfac = function DndState_Factory(t) {
    return new (t || DndState)();
  };
  DndState.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DndState,
    factory: function (t) {
      return DndState.ɵfac(t);
    }
  });
  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DndState, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () {
      return [];
    }, null);
  })();
  return DndState;
}();


/***/ }),

/***/ 53800:
/*!********************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/services/constants.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_EFFECTS": () => (/* binding */ ALL_EFFECTS),
/* harmony export */   "EDGE_MIME_TYPE": () => (/* binding */ EDGE_MIME_TYPE),
/* harmony export */   "MIME_TYPE": () => (/* binding */ MIME_TYPE),
/* harmony export */   "MSIE_MIME_TYPE": () => (/* binding */ MSIE_MIME_TYPE)
/* harmony export */ });
var MIME_TYPE = 'application/x-dnd';
var EDGE_MIME_TYPE = 'application/json';
var MSIE_MIME_TYPE = 'Text';
var ALL_EFFECTS = ['move', 'copy', 'link'];

/***/ }),

/***/ 56906:
/*!****************************************************************!*\
  !*** ./node_modules/ngx-drag-and-drop-lists/services/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_EFFECTS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.ALL_EFFECTS),
/* harmony export */   "DndState": () => (/* reexport safe */ _DndState__WEBPACK_IMPORTED_MODULE_1__.DndState),
/* harmony export */   "EDGE_MIME_TYPE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.EDGE_MIME_TYPE),
/* harmony export */   "MIME_TYPE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MIME_TYPE),
/* harmony export */   "MSIE_MIME_TYPE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MSIE_MIME_TYPE)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 53800);
/* harmony import */ var _DndState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DndState */ 21025);



/***/ }),

/***/ 49999:
/*!*************************************************!*\
  !*** ./src/assets/data/application/kanban.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Marketing","showNewItem":false,"kanbanId":1,"tickets":[{"name":"Facebook Campaign 😎","date":"02/06/2021","comment":"1","attachment":"3","image":["../../../assets/images/portrait/small/avatar-s-11.png","../../../assets/images/portrait/small/avatar-s-12.png"],"description":"Campaign","selectedLabel":"Primary"},{"name":"Type Something","date":"10/02/2021","showImage":true,"comment":"","attachment":"","bg_image":" ../../../assets/images/banner/banner-21.jpg","description":"","selectedLabel":"Primary"},{"name":" Social Media Graphics","date":"03/01/2021","comment":"23","attachment":"4","image":["../../../assets/images/portrait/small/avatar-s-1.png","../../../assets/images/portrait/small/avatar-s-2.png"],"description":"Social Media Graphics","selectedLabel":"Primary"},{"name":" Book newspaper ads online in popular newspapers","date":"","comment":"56","attachment":"2","image":["../../../assets/images/portrait/small/avatar-s-3.png","../../../assets/images/portrait/small/avatar-s-4.png"],"description":"Book newspaper ads online in popular newspapers","selectedLabel":"Danger"},{"name":"Twitter Marketing","date":"","comment":"","attachment":"","description":"Twitter Marketing","selectedLabel":"Primary"}]},{"name":"UI Desiging","showNewItem":false,"kanbanId":2,"tickets":[{"name":"Flat UI Kit Design","date":"","comment":"","attachment":"","description":"Flat UI Kit Design","selectedLabel":"Primary"},{"name":"Drag people onto a card to indicate that.","date":"01/01/2021","comment":"8","attachment":"","image":["../../../assets/images/portrait/small/avatar-s-5.png","../../../assets/images/portrait/small/avatar-s-6.png"],"description":"Drag people onto a card to indicate that","selectedLabel":"Primary"},{"name":"Application Design","date":"","comment":"","attachment":"","description":"Application Design","selectedLabel":"Info"},{"name":"BBQ Logo Design 😱","date":"06/01/2021","comment":"56","attachment":"2","description":"Application Design","selectedLabel":"Primary"}]},{"name":"Develpoing","showNewItem":false,"kanbanId":3,"tickets":[{"name":"Database Management System (DBMS) is a collection of programs","date":"01/03/2021","comment":"10","image":["../../../assets/images/portrait/small/avatar-s-7.png","../../../assets/images/portrait/small/avatar-s-8.png","../../../assets/images/portrait/small/avatar-s-9.png"],"description":"Application Design","selectedLabel":"Primary"},{"name":"Admin Dashboard 🙂","date":"06/03/2021","comment":"7","description":"Application Design","selectedLabel":"Danger"},{"name":"Fix bootstrap progess bar with & issue","date":"09/03/2021","image":["../../../assets/images/portrait/small/avatar-s-10.png","../../../assets/images/portrait/small/avatar-s-11.png"],"description":"Application Design","selectedLabel":"Success"}]}]');

/***/ })

}]);
//# sourceMappingURL=src_app_content_applications_kanban_kanban_module_ts.js.map