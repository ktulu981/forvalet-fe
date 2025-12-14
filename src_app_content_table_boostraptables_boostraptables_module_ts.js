"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_table_boostraptables_boostraptables_module_ts"],{

/***/ 35231:
/*!***************************************************!*\
  !*** ./src/app/_directives/sortable.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdSortableHeader": () => (/* binding */ NgbdSortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


const rotate = {
  asc: 'desc',
  desc: '',
  '': 'asc'
};
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-class-suffix */
class NgbdSortableHeader {
  constructor() {
    this.direction = '';
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({
      column: this.sortable,
      direction: this.direction
    });
  }
}
NgbdSortableHeader.ɵfac = function NgbdSortableHeader_Factory(t) {
  return new (t || NgbdSortableHeader)();
};
NgbdSortableHeader.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgbdSortableHeader,
  selectors: [["th", "sortable", ""]],
  hostVars: 4,
  hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler() {
        return ctx.rotate();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    }
  },
  inputs: {
    sortable: "sortable",
    direction: "direction"
  },
  outputs: {
    sort: "sort"
  }
});

/***/ }),

/***/ 33646:
/*!**********************************************!*\
  !*** ./src/app/_services/country.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _content_table_boostraptables_ngxboostraptables_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/table/boostraptables/ngxboostraptables/countries */ 94366);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);





function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(countries, column, direction) {
  if (direction === '') {
    return countries;
  } else {
    return [...countries].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}
function matches(country, term, pipe) {
  return country.firstname.toLowerCase().includes(term.toLowerCase()) || country.lastname.toLowerCase().includes(term.toLowerCase()) || country.username.toLowerCase().includes(term.toLowerCase());
}
class CountryService {
  constructor(pipe) {
    this.pipe = pipe;
    this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
    this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._countries$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 4,
      searchTerm: '',
      sortColumn: '',
      sortDirection: ''
    };
    this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._loading$.next(false))).subscribe(result => {
      this._countries$.next(result.countries);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get countries$() {
    return this._countries$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  set page(page) {
    this._set({
      page
    });
  }
  set pageSize(pageSize) {
    this._set({
      pageSize
    });
  }
  set searchTerm(searchTerm) {
    this._set({
      searchTerm
    });
  }
  set sortColumn(sortColumn) {
    this._set({
      sortColumn
    });
  }
  set sortDirection(sortDirection) {
    this._set({
      sortDirection
    });
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  _search() {
    const {
      sortColumn,
      sortDirection,
      pageSize,
      page,
      searchTerm
    } = this._state;
    // 1. sort
    let countries = sort(_content_table_boostraptables_ngxboostraptables_countries__WEBPACK_IMPORTED_MODULE_0__.COUNTRIES, sortColumn, sortDirection);
    // 2. filter
    countries = countries.filter(country => matches(country, searchTerm, this.pipe));
    const total = countries.length;
    // 3. paginate
    countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      countries,
      total
    });
  }
}
CountryService.ɵfac = function CountryService_Factory(t) {
  return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe));
};
CountryService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: CountryService,
  factory: CountryService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 84219:
/*!*********************************************************************************!*\
  !*** ./src/app/content/table/boostraptables/basictable/basictable.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasictableComponent": () => (/* binding */ BasictableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);







function BasictableComponent_div_6_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r15.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r15.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r15.username);
  }
}
function BasictableComponent_div_6_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r17.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r17.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r17.username);
  }
}
function BasictableComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Basic table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Using the most basic table markup, here\u2019s how ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "-based tables look in Bootstrap. You can use any example of below table for your table and it can be use with any type of ng-bootstrap tables. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p")(12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Example 1:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Table with outer spacing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 33)(16, "table", 18)(17, "thead")(18, "tr")(19, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, BasictableComponent_div_6_tr_28_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 34)(30, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Example 2:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Minimal Table with no outer spacing.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 13)(34, "table", 35)(35, "thead")(36, "tr")(37, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, BasictableComponent_div_6_tr_46_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
  }
}
function BasictableComponent_div_8_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r20.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r20.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r20.username);
  }
}
function BasictableComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Inverse table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".table-inverse.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13)(11, "table", 37)(12, "thead")(13, "tr")(14, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BasictableComponent_div_8_tr_23_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
  }
}
function BasictableComponent_tr_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r22.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r22.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r22.username);
  }
}
function BasictableComponent_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r25 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r24.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r24.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r24.username);
  }
}
function BasictableComponent_tr_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r27 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r26.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r26.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r26.username);
  }
}
function BasictableComponent_tr_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r29 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r28.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r28.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r28.username);
  }
}
function BasictableComponent_tr_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r31 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r30.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r30.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r30.username);
  }
}
function BasictableComponent_tr_184_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r33 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r32.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r32.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r32.username);
  }
}
function BasictableComponent_tr_221_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r35 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r34.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r34.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r34.username);
  }
}
function BasictableComponent_tr_249_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r36.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r36.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r36.username);
  }
}
function BasictableComponent_tr_283_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r39 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r38.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r38.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r38.username);
  }
}
function BasictableComponent_tr_317_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r40 = ctx.$implicit;
    const i_r41 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r41 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r40.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r40.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r40.username);
  }
}
function BasictableComponent_tr_348_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r43 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r42.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r42.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r42.username);
  }
}
class BasictableComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Basic Tables',
      links: [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Tables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Basic Tables',
        'isLink': false
      }]
    };
    this.tableApiservice.getBasicTableData().subscribe(Response => {
      this.BasictableData = Response;
      this.getTabledata();
    });
  }
  getTabledata() {
    this.countries = this.BasictableData.rows;
  }
  reloadBasicTables() {
    this.blockUIBasicTables.start('Loading..');
    setTimeout(() => {
      this.blockUIBasicTables.stop();
    }, 2500);
  }
  reloadInverseTable() {
    this.blockUIInverseTable.start('Loading..');
    setTimeout(() => {
      this.blockUIInverseTable.stop();
    }, 2500);
  }
}
BasictableComponent.ɵfac = function BasictableComponent_Factory(t) {
  return new (t || BasictableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
BasictableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BasictableComponent,
  selectors: [["app-basictable"]],
  decls: 349,
  vars: 16,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-sm-12", 3, "breadcrumb"], [1, "content-body"], [1, "row"], ["class", "col-sm-12", 4, "blockUI", "blockUIMessage"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "table-responsive"], [1, "table", "table-striped", "bg-info", "mb-0", "white"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "highlighter-rouge"], [1, "table"], [1, "thead-dark"], [1, "thead-light"], [1, "bg-primary", "white"], [1, "lighten-4"], [1, "bg-teal", "bg-lighten-4"], [1, "card-content", "collapse", "show"], [1, "table", "table-striped"], [1, "card", "table-bottom-space"], [1, "table", "table-inverse", "table-striped", "mb-0"], [1, "table", "table-bordered", "mb-0"], [1, "table", "table-bordered", "table-striped"], [1, "table", "table-bordered", "table-inverse", "mb-0"], [1, "table", "table-hover", "mb-0"], [1, "text-bold-600"], [1, "table-responsive", "card-body"], [1, "px-1"], [1, "table", "mb-0"], ["scope", "row"], [1, "table", "table-inverse", "mb-0"]],
  template: function BasictableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, BasictableComponent_div_6_Template, 47, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BasictableComponent_div_8_Template, 24, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Inverse table with info background");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, ".bg-info ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " .bg-success ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, ".bg-warning");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, ".bg-danger");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " classes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br")(31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "To set the light background color use");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " .bg-[color] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "class where [color] is the value of your selected color from modern color palette. So for teal color background class will be .bg-teal. Refer HTML markup line no 1. Background color class is a optional if you don't it will take white background default. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br")(37, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "To set the selected background color lighten use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, ".bg-lighten-[*]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " class where [*] is the value between '1-5' of your selected lighten color from modern color palette. So for color lighten 4 background class will be ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, ".bg-lighten-4.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Refer HTML markup line no 1. Background lighten color class is a optional if you don't it will take white background default.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 13)(46, "table", 14)(47, "thead")(48, "tr")(49, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, BasictableComponent_tr_58_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 5)(60, "div", 7)(61, "div", 8)(62, "div", 9)(63, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Table head options");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 11)(66, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Similar to default and inverse tables, use one of two modifier classes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, ".thead-default");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, ".thead-inverse");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " to make ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "<thead>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "s appear light or dark gray.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 13)(78, "table", 18)(79, "thead", 19)(80, "tr")(81, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, BasictableComponent_tr_90_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 13)(92, "table", 18)(93, "thead", 20)(94, "tr")(95, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, BasictableComponent_tr_104_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 5)(106, "div", 7)(107, "div", 8)(108, "div", 9)(109, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Table head options with primary background");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 11)(112, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Use background classes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "bg-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " to make custom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, " background. You can also use Modern Admin color palette classes for background.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 18)(121, "div", 13)(122, "table", 18)(123, "thead", 21)(124, "tr")(125, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](134, BasictableComponent_tr_134_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 22)(136, "div", 18)(137, "div", 13)(138, "table", 18)(139, "thead", 23)(140, "tr")(141, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](150, BasictableComponent_tr_150_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 5)(152, "div", 7)(153, "div", 8)(154, "div", 9)(155, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "Striped rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 24)(158, "div", 11)(159, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, ".table-striped");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " to add zebra-striping to any table row within the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, ". This styling doesn't work in IE8 and below as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, ":nth-child");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " CSS selector isn't supported.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 18)(171, "div", 13)(172, "table", 25)(173, "thead")(174, "tr")(175, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](184, BasictableComponent_tr_184_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 5)(186, "div", 7)(187, "div", 26)(188, "div", 9)(189, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Striped rows with inverse table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 24)(192, "div", 11)(193, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, ".table-inverse");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, ".table-striped");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, " to add zebra-striping to any inverse table row within the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, ". This styling doesn't work in IE8 and below as ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, ":nth-child");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, " CSS selector isn't supported.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 18)(208, "div", 13)(209, "table", 27)(210, "thead")(211, "tr")(212, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](221, BasictableComponent_tr_221_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 5)(223, "div", 7)(224, "div", 26)(225, "div", 9)(226, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "Bordered table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 24)(229, "div", 11)(230, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, ".table-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, " for borders on all sides of the table and cells. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 18)(236, "div", 13)(237, "table", 28)(238, "thead")(239, "tr")(240, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](249, BasictableComponent_tr_249_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "div", 5)(251, "div", 7)(252, "div", 26)(253, "div", 9)(254, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "Bordered striped");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 24)(257, "div", 11)(258, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](261, ".table-striped");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, ".table-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, " to add zebra-striping to any table row within the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "div", 18)(270, "div", 13)(271, "table", 29)(272, "thead")(273, "tr")(274, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](277, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](283, BasictableComponent_tr_283_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "div", 5)(285, "div", 7)(286, "div", 26)(287, "div", 9)(288, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Bordered Table Inverse");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 24)(291, "div", 11)(292, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, ".table-inverse");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, ".table-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, " to add zebra-striping to any table row within the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "div", 18)(304, "div", 13)(305, "table", 30)(306, "thead")(307, "tr")(308, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](315, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](317, BasictableComponent_tr_317_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "div", 5)(319, "div", 7)(320, "div", 26)(321, "div", 9)(322, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "Hoverable rows");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 24)(325, "div", 11)(326, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](327, "Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, ".table-hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, " to enable a hover state on table rows within a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "code", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "<tbody>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "div", 18)(335, "div", 13)(336, "table", 31)(337, "thead")(338, "tr")(339, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](348, BasictableComponent_tr_348_Template, 9, 4, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "basicTables")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "inverseTable")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .table-striped tbody tr:nth-of-type(odd) {\n     background-color: #ffffff !important;\n}\n[_nghost-%COMP%]     .table-hover tbody tr:hover, .table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n    background-color: rgba(245,247,250,.5) !important;\n}\n[_nghost-%COMP%]     .px-1 {\n    padding-left: 1.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7S0FDSyxvQ0FBb0M7QUFDekM7QUFDQTtJQUNJLGlEQUFpRDtBQUNyRDtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6ImJhc2ljdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyLCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwyNDcsMjUwLC41KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5weC0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9ib29zdHJhcHRhYmxlcy9iYXNpY3RhYmxlL2Jhc2ljdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7S0FDSyxvQ0FBb0M7QUFDekM7QUFDQTtJQUNJLGlEQUFpRDtBQUNyRDtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0EsZ3ZCQUFndkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS1ob3ZlciB0Ym9keSB0cjpob3ZlciwgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsMjQ3LDI1MCwuNSkgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAucHgtMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('basicTables')], BasictableComponent.prototype, "blockUIBasicTables", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('inverseTable')], BasictableComponent.prototype, "blockUIInverseTable", void 0);

/***/ }),

/***/ 47601:
/*!***********************************************************************!*\
  !*** ./src/app/content/table/boostraptables/boostraptables.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoostraptablesModule": () => (/* binding */ BoostraptablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _basictable_basictable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basictable/basictable.component */ 84219);
/* harmony import */ var _tableborder_tableborder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableborder/tableborder.component */ 2380);
/* harmony import */ var _tablesizing_tablesizing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablesizing/tablesizing.component */ 70449);
/* harmony import */ var _tablestyling_tablestyling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablestyling/tablestyling.component */ 72645);
/* harmony import */ var _tablecomponents_tablecomponents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tablecomponents/tablecomponents.component */ 59157);
/* harmony import */ var _ngxboostraptables_ngxboostraptables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngxboostraptables/ngxboostraptables.component */ 51441);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 77070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ 11966);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ui-switch */ 72929);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_layout/blockui/block-template.component */ 86196);
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_directives/sortable.directive */ 35231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);






















class BoostraptablesModule {}
BoostraptablesModule.ɵfac = function BoostraptablesModule_Factory(t) {
  return new (t || BoostraptablesModule)();
};
BoostraptablesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: BoostraptablesModule
});
BoostraptablesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.NgxDatatableModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_13__.UiSwitchModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_15__.BlockUIModule.forRoot({
    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_8__.BlockTemplateComponent
  }), ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__.NgMultiSelectDropDownModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild([{
    path: 'basictable',
    component: _basictable_basictable_component__WEBPACK_IMPORTED_MODULE_0__.BasictableComponent
  }, {
    path: 'tableborder',
    component: _tableborder_tableborder_component__WEBPACK_IMPORTED_MODULE_1__.TableborderComponent
  }, {
    path: 'tablesizing',
    component: _tablesizing_tablesizing_component__WEBPACK_IMPORTED_MODULE_2__.TablesizingComponent
  }, {
    path: 'tablestyling',
    component: _tablestyling_tablestyling_component__WEBPACK_IMPORTED_MODULE_3__.TablestylingComponent
  }, {
    path: 'tablecomponents',
    component: _tablecomponents_tablecomponents_component__WEBPACK_IMPORTED_MODULE_4__.TablecomponentsComponent
  }, {
    path: 'ngxboostraptables',
    component: _ngxboostraptables_ngxboostraptables_component__WEBPACK_IMPORTED_MODULE_5__.NgxboostraptablesComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](BoostraptablesModule, {
    declarations: [_basictable_basictable_component__WEBPACK_IMPORTED_MODULE_0__.BasictableComponent, _tableborder_tableborder_component__WEBPACK_IMPORTED_MODULE_1__.TableborderComponent, _tablesizing_tablesizing_component__WEBPACK_IMPORTED_MODULE_2__.TablesizingComponent, _tablestyling_tablestyling_component__WEBPACK_IMPORTED_MODULE_3__.TablestylingComponent, _tablecomponents_tablecomponents_component__WEBPACK_IMPORTED_MODULE_4__.TablecomponentsComponent, _ngxboostraptables_ngxboostraptables_component__WEBPACK_IMPORTED_MODULE_5__.NgxboostraptablesComponent, _ngxboostraptables_ngxboostraptables_component__WEBPACK_IMPORTED_MODULE_5__.NgbSortable, _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_9__.NgbdSortableHeader],
    imports: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.NgxDatatableModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_6__.CardModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_13__.UiSwitchModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_15__.BlockUIModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__.NgMultiSelectDropDownModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 94366:
/*!*****************************************************************************!*\
  !*** ./src/app/content/table/boostraptables/ngxboostraptables/countries.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COUNTRIES": () => (/* binding */ COUNTRIES)
/* harmony export */ });
const COUNTRIES = [{
  'id': 1,
  'firstname': 'Mark',
  'lastname': 'Otto',
  'username': '@mdo'
}, {
  'id': 2,
  'firstname': 'Jacob',
  'lastname': 'Thornton',
  'username': '@fat'
}, {
  'id': 3,
  'firstname': 'Larry',
  'lastname': 'the Bird',
  'username': '@twitter'
}, {
  'id': 4,
  'firstname': 'Fensy',
  'lastname': 'loir',
  'username': '@kort'
}, {
  'id': 5,
  'firstname': 'Piter',
  'lastname': 'Pan',
  'username': '@google'
}, {
  'id': 6,
  'firstname': 'July',
  'lastname': 'Dooley',
  'username': '@bat'
}, {
  'id': 7,
  'firstname': 'Jon',
  'lastname': 'Snow',
  'username': '@hest'
}, {
  'id': 8,
  'firstname': 'Alexandra',
  'lastname': 'Blake',
  'username': '@foe'
}, {
  'id': 9,
  'firstname': 'Alonso',
  'lastname': 'Lanier',
  'username': '@phe'
}, {
  'id': 10,
  'firstname': 'Claire',
  'lastname': 'Burgess',
  'username': '@yaker'
}];

/***/ }),

/***/ 51441:
/*!***********************************************************************************************!*\
  !*** ./src/app/content/table/boostraptables/ngxboostraptables/ngxboostraptables.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbSortable": () => (/* binding */ NgbSortable),
/* harmony export */   "NgxboostraptablesComponent": () => (/* binding */ NgxboostraptablesComponent),
/* harmony export */   "compare": () => (/* binding */ compare)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../_services/country.service */ 33646);
/* harmony import */ var _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_directives/sortable.directive */ 35231);
/* harmony import */ var _services_table_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/table-api.service */ 68597);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);















function NgxboostraptablesComponent_div_6_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r6.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r6.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r6.username);
  }
}
function NgxboostraptablesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Basic table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Using the most basic table markup, here\u2019s how ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, ".table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "-based tables look in Bootstrap. You can use any example of below table for your table and it can be use with any type of ng-bootstrap tables. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 13)(12, "table", 14)(13, "thead")(14, "tr")(15, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, NgxboostraptablesComponent_div_6_tr_24_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.PERSON);
  }
}
function NgxboostraptablesComponent_div_9_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r9.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r9.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r9.username);
  }
}
function NgxboostraptablesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pagination table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Using the most basic table markup, here\u2019s how ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, ".table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "-based tables look in Bootstrap. You can bind our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "NgbPagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " component with slicing the data list.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13)(15, "table", 14)(16, "thead")(17, "tr")(18, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, NgxboostraptablesComponent_div_9_tr_27_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18)(29, "ngb-pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function NgxboostraptablesComponent_div_9_Template_ngb_pagination_pageChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NgxboostraptablesComponent_div_9_Template_select_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.pageSize = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "2 items per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "4 items per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "6 items per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.PaginationData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", ctx_r1.collectionSize)("page", ctx_r1.page)("pageSize", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 6);
  }
}
function NgxboostraptablesComponent_div_11_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ngb-highlight", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ngb-highlight", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngb-highlight", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", element_r14.firstname)("term", ctx_r13.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", element_r14.lastname)("term", ctx_r13.filter.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", element_r14.username)("term", ctx_r13.filter.value);
  }
}
function NgxboostraptablesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Serch and Filtering table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "You can do filter table data, in this case with observables and our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "NgbHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " component used in Typeahead. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 13)(12, "form")(13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Full text search: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "table", 14)(17, "thead")(18, "tr")(19, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, NgxboostraptablesComponent_div_11_tr_28_Template, 9, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r2.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 2, ctx_r2.employeeSearch));
  }
}
function NgxboostraptablesComponent_div_13_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r17.firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r17.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r17.username);
  }
}
function NgxboostraptablesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Sortable table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "You can introduce custom directives for table headers to sort columns.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13)(9, "table", 14)(10, "thead")(11, "tr")(12, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function NgxboostraptablesComponent_div_13_Template_th_sort_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.onSort$($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function NgxboostraptablesComponent_div_13_Template_th_sort_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.onSort$($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function NgxboostraptablesComponent_div_13_Template_th_sort_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.onSort$($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, NgxboostraptablesComponent_div_13_tr_21_Template, 9, 4, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.employeeSortable);
  }
}
function NgxboostraptablesComponent_div_15_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function NgxboostraptablesComponent_div_15_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ngb-highlight", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ngb-highlight", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngb-highlight", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", element_r24.firstname)("term", ctx_r23.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", element_r24.lastname)("term", ctx_r23.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("result", element_r24.username)("term", ctx_r23.service.searchTerm);
  }
}
function NgxboostraptablesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Complate table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 11)(6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Table example with sorting,pagination and filtering.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13)(9, "form")(10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Full text search: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NgxboostraptablesComponent_div_15_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.service.searchTerm = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NgxboostraptablesComponent_div_15_span_13_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "table", 14)(16, "thead")(17, "tr")(18, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function NgxboostraptablesComponent_div_15_Template_th_sort_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.onSort($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function NgxboostraptablesComponent_div_15_Template_th_sort_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.onSort($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sort", function NgxboostraptablesComponent_div_15_Template_th_sort_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.onSort($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "username");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, NgxboostraptablesComponent_div_15_tr_27_Template, 9, 7, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 18)(30, "ngb-pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function NgxboostraptablesComponent_div_15_Template_ngb_pagination_pageChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.service.page = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NgxboostraptablesComponent_div_15_Template_select_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.service.pageSize = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "2 items per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "4 items per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "6 items per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.service.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 10, ctx_r4.service.loading$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 12, ctx_r4.countries$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 14, ctx_r4.total$))("page", ctx_r4.service.page)("pageSize", ctx_r4.service.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.service.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 6);
  }
}
const rotate = {
  'asc': 'desc',
  'desc': '',
  '': 'asc'
};
const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/directive-class-suffix */
class NgbSortable {
  constructor() {
    this.direction = '';
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({
      column: this.sortable,
      direction: this.direction
    });
  }
}
NgbSortable.ɵfac = function NgbSortable_Factory(t) {
  return new (t || NgbSortable)();
};
NgbSortable.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
  type: NgbSortable,
  selectors: [["th", "sortable", ""]],
  hostVars: 4,
  hostBindings: function NgbSortable_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NgbSortable_click_HostBindingHandler() {
        return ctx.rotate();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
    }
  },
  inputs: {
    sortable: "sortable",
    direction: "direction"
  },
  outputs: {
    sort: "sort"
  }
});
class NgxboostraptablesComponent {
  constructor(tableApiservice, service, pipe) {
    this.tableApiservice = tableApiservice;
    this.service = service;
    this.page = 1;
    this.pageSize = 4;
    this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.countries$ = service.countries$, this.total$ = service.total$;
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Ngxboostraptable',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Tables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Ngxboostraptable',
        'isLink': false,
        'link': '#'
      }]
    };
    this.tableApiservice.getTableNgxData().subscribe(Response => {
      this.TableData = Response;
      this.getTabledata();
      this.searchData(this.pipe);
      this.employeeSortable = this.PERSON;
    });
  }
  getTabledata() {
    this.PERSON = this.TableData['EmployeeDetail'];
    this.collectionSize = this.PERSON.length;
  }
  /**
   * Pagination table
   */
  get PaginationData() {
    if (this.PERSON) {
      return this.PERSON.map((person, i) => Object.assign({
        id: i + 1
      }, person)).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
    }
  }
  /**
   * Search table
   * '@param' text
   * '@param' pipe
   */
  search(text, pipe) {
    return this.PERSON.filter(response => {
      const term = text.toLowerCase();
      return response.firstname.toLowerCase().includes(term) || response.lastname.toLowerCase().includes(term) || response.username.toLowerCase().includes(term);
    });
  }
  /**
   *
   * '@param' pipe
   */
  searchData(pipe) {
    this.employeeSearch = this.filter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(text => this.search(text, pipe)));
  }
  /**
   *Sortable Table
   * '@param' param0
   */
  onSort$({
    column,
    direction
  }) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    // sorting employeeSortable
    if (direction === '') {
      this.employeeSortable = this.PERSON;
    } else {
      this.employeeSortable = [...this.PERSON].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
  onSort({
    column,
    direction
  }) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
NgxboostraptablesComponent.ɵfac = function NgxboostraptablesComponent_Factory(t) {
  return new (t || NgxboostraptablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_table_api_service__WEBPACK_IMPORTED_MODULE_2__.TableApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_country_service__WEBPACK_IMPORTED_MODULE_0__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe));
};
NgxboostraptablesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: NgxboostraptablesComponent,
  selectors: [["app-ngxboostraptables"]],
  viewQuery: function NgxboostraptablesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](NgbSortable, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers1 = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.headers = _t);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _services_country_service__WEBPACK_IMPORTED_MODULE_0__.CountryService])],
  decls: 16,
  vars: 11,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-sm-12", 3, "breadcrumb"], [1, "content-body"], [1, "row"], ["class", "col-sm-12", 4, "blockUI", "blockUIMessage"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "table-responsive", "card-body"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], [1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [1, "form-group", "form-inline"], ["type", "text", 1, "form-control", "ml-2", 3, "formControl"], [3, "result", "term"], ["scope", "col", "sortable", "firstname", 3, "sort"], ["scope", "col", "sortable", "lastname", 3, "sort"], ["scope", "col", "sortable", "username", 3, "sort"], ["type", "text", "name", "searchTerm", 1, "form-control", "ml-2", 3, "ngModel", "ngModelChange"], ["class", "ml-3", 4, "ngIf"], ["name", "pageSize", 1, "custom-select", 2, "width", "auto", 3, "ngModel", "ngModelChange"], [1, "ml-3"]],
  template: function NgxboostraptablesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NgxboostraptablesComponent_div_6_Template, 25, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NgxboostraptablesComponent_div_9_Template, 37, 8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NgxboostraptablesComponent_div_11_Template, 30, 4, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NgxboostraptablesComponent_div_13_Template, 22, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NgxboostraptablesComponent_div_15_Template, 39, 16, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "basicTables")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "basicTables")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "basicTables")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "basicTables")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("blockUI", "basicTables")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, ng_block_ui__WEBPACK_IMPORTED_MODULE_9__["ɵf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbHighlight, NgbSortable, _directives_sortable_directive__WEBPACK_IMPORTED_MODULE_1__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["th[sortable].asc[_ngcontent-%COMP%]:before {\n    content: '\\2191';\n    display: block;\n     width: 22px;\n    height: 22px;\n    float: left;\n    margin-left: -22px;\n}\nth[sortable].desc[_ngcontent-%COMP%]:before {\n    content: '\\2193';\n    display: block;\n    width: 22px;\n    height: 22px;\n    float: left;\n    margin-left: -22px;\n}\n.table[_ngcontent-%COMP%] {\n    --bs-table-striped-bg: rgba(0, 0, 0, 0) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5neGJvb3N0cmFwdGFibGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztLQUNiLFdBQVc7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtEQUFrRDtBQUN0RCIsImZpbGUiOiJuZ3hib29zdHJhcHRhYmxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhbc29ydGFibGVdLmFzYzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdcXDIxOTEnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xufVxudGhbc29ydGFibGVdLmRlc2M6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFwyMTkzJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xufVxuLnRhYmxlIHtcbiAgICAtLWJzLXRhYmxlLXN0cmlwZWQtYmc6IHJnYmEoMCwgMCwgMCwgMCkgIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9ib29zdHJhcHRhYmxlcy9uZ3hib29zdHJhcHRhYmxlcy9uZ3hib29zdHJhcHRhYmxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7S0FDYixXQUFXO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrREFBa0Q7QUFDdEQ7QUFDQSw0OUJBQTQ5QiIsInNvdXJjZXNDb250ZW50IjpbInRoW3NvcnRhYmxlXS5hc2M6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFwyMTkxJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjJweDtcbn1cbnRoW3NvcnRhYmxlXS5kZXNjOmJlZm9yZSB7XG4gICAgY29udGVudDogJ1xcMjE5Myc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjJweDtcbn1cbi50YWJsZSB7XG4gICAgLS1icy10YWJsZS1zdHJpcGVkLWJnOiByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2380:
/*!***********************************************************************************!*\
  !*** ./src/app/content/table/boostraptables/tableborder/tableborder.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableborderComponent": () => (/* binding */ TableborderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);







function TableborderComponent_div_6_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r8.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r8.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r8.username);
  }
}
function TableborderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Table Row borders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "div", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of table row borders. This is a default table border style by bootstrap and attached to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".table class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 14)(13, "table", 18)(14, "thead")(15, "tr")(16, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TableborderComponent_div_6_tr_25_Template, 9, 4, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
  }
}
function TableborderComponent_div_8_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r11.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r11.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r11.username);
  }
}
function TableborderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Table column borders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "div", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of vertical table borders. This custom table border layout displays vertical borders only. However border between table head and table body is also visible for better visual separation. To use this layout add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".table-columned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "class to the table with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".table class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Example of table column borders. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, ".table-column");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " class with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, ".table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " for table with column border.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 22)(24, "div", 14)(25, "table", 23)(26, "thead")(27, "tr")(28, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TableborderComponent_div_8_tr_37_Template, 9, 4, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
  }
}
function TableborderComponent_div_10_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r14.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r14.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r14.username);
  }
}
function TableborderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Both borders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "div", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of table having both column & row borders. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".table-bordered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " class with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " .table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "for both borders table.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14)(16, "table", 24)(17, "thead")(18, "tr")(19, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TableborderComponent_div_10_tr_28_Template, 9, 4, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.countries);
  }
}
function TableborderComponent_div_12_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r17.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r17.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r17.username);
  }
}
function TableborderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Borderless Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "div", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of borderless table, all border are hidden, except border ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".thead ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, ". Add .table-borderless class with .table for borderless table.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14)(16, "table", 25)(17, "thead")(18, "tr")(19, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TableborderComponent_div_12_tr_28_Template, 9, 4, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.countries);
  }
}
function TableborderComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r20 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r19.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r19.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r19.username);
  }
}
function TableborderComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r21.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r21.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r21.username);
  }
}
function TableborderComponent_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 21);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r24 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r23.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r23.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r23.username);
  }
}
class TableborderComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Table border',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Tables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Table border',
        'isLink': false
      }]
    };
    this.tableApiservice.getTableBorderData().subscribe(Response => {
      this.TableborderData = Response;
      this.getTabledata();
    });
  }
  getTabledata() {
    this.countries = this.TableborderData.rows;
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
  reloadTableRowBorders() {
    this.blockUITableRowBorders.start('Loading..');
    setTimeout(() => {
      this.blockUITableRowBorders.stop();
    }, 2500);
  }
  reloadBorderlessTable() {
    this.blockUIBorderlessTable.start('Loading..');
    setTimeout(() => {
      this.blockUIBorderlessTable.stop();
    }, 2500);
  }
}
TableborderComponent.ɵfac = function TableborderComponent_Factory(t) {
  return new (t || TableborderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
TableborderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TableborderComponent,
  selectors: [["app-tableborder"]],
  decls: 94,
  vars: 12,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body", "card-dashboard"], [1, "card-text"], [1, "table-responsive"], [1, "table", "mb-0", "back_ground", "default_borders"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "table", "mb-0"], [1, "border-solid"], [1, "bouble-border"], ["scope", "row"], [1, "table", "table-bordered", "mb-0", "back_ground"], [1, "table", "table-column"], [1, "table", "table-bordered", "mb-0"], [1, "table", "table-borderless", "mb-0"]],
  template: function TableborderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TableborderComponent_div_6_Template, 26, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TableborderComponent_div_8_Template, 38, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TableborderComponent_div_10_Template, 29, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TableborderComponent_div_12_Template, 29, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Default borders");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Example of a default border table. This is bootstrap default table having only ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " class.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14)(27, "table", 15)(28, "thead")(29, "tr")(30, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, TableborderComponent_tr_39_Template, 9, 4, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5)(41, "div", 7)(42, "div", 8)(43, "div", 9)(44, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Solid border");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 11)(47, "div", 12)(48, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Example of a solid bordered table row. This border inherits all styling options from the default border style, the only difference is it has 2px width. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, ".border-solid");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " to the table body row. This border style works only with row borders.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 14)(54, "table", 18)(55, "thead", 19)(56, "tr")(57, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, TableborderComponent_tr_66_Template, 9, 4, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 5)(68, "div", 7)(69, "div", 8)(70, "div", 9)(71, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Double border");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 11)(74, "div", 12)(75, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Example of double bordered table row. This has 4px width and double style. Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, ".border-double");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " to the table body row. This border style works only with row borders.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 14)(81, "table", 18)(82, "thead", 20)(83, "tr")(84, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, TableborderComponent_tr_93_Template, 9, 4, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "tableRowBorders")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "tableRowBorders")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "borderlessTable")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "borderlessTable")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .bouble-border{\n  border-bottom-style: double;\n  border-bottom-color: #e3ebf3;\n}\n[_nghost-%COMP%]     .table-striped tbody tr:nth-of-type(odd) {\n  border-bottom-color:red !important;\n}\n[_nghost-%COMP%]     .border-solid {\n  border-bottom-style: solid;\n  border-bottom-color: #e3ebf3;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlYm9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCOztBQUU5QiIsImZpbGUiOiJ0YWJsZWJvcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCA6Om5nLWRlZXAgLmJvdWJsZS1ib3JkZXJ7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGRvdWJsZTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UzZWJmMztcbn1cbjpob3N0IDo6bmctZGVlcCAudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjpyZWQgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYm9yZGVyLXNvbGlkIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlM2ViZjM7XG4gIFxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9ib29zdHJhcHRhYmxlcy90YWJsZWJvcmRlci90YWJsZWJvcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLDRCQUE0Qjs7QUFFOUI7QUFDQSxvd0JBQW93QiIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3QgOjpuZy1kZWVwIC5ib3VibGUtYm9yZGVye1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBkb3VibGU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlM2ViZjM7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6cmVkICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJvcmRlci1zb2xpZCB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTNlYmYzO1xuICBcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('tableRowBorders')], TableborderComponent.prototype, "blockUITableRowBorders", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('borderlessTable')], TableborderComponent.prototype, "blockUIBorderlessTable", void 0);

/***/ }),

/***/ 59157:
/*!*******************************************************************************************!*\
  !*** ./src/app/content/table/boostraptables/tablecomponents/tablecomponents.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablecomponentsComponent": () => (/* binding */ TablecomponentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-switch */ 72929);
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ 11966);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);












function TablecomponentsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "m-card", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function TablecomponentsComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.reloadComponents($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " UI components ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "table", 15)(7, "tbody")(8, "tr")(9, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 17)(12, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Default Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Bootstrap includes six predefined button styles, each serving its own semantic purpose.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tr")(17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Round Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td")(20, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Default Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, ".btn-round");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " class to button for Round Buttons.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tr")(28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Button dropdowns");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td")(31, "div", 103)(32, "div", 104)(33, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 106)(36, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Action - 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Another Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Something else is here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "li", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Separated link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Turn a button into a dropdown toggle with some basic markup changes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Basic Button group");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td")(51, "div", 109)(52, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Group a series of buttons together on a single line with the button group. Wrap a series of buttons with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, ".btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, ".btn-group.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "tr")(66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Buttons with Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td")(69, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Bootstrap includes six predefined button styles, each serving its own semantic purpose.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "tr")(75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Icon Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td")(78, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Simple Icon Button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "tr")(83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Floating Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "td")(86, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Floating action buttons are used for a special type of promoted action. They are distinguished by a circled icon floating above the UI and have special motion behaviors related to morphing, launching, and the transferring anchor point. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Use the class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, ".btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " along with class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, ".btn-floating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " . ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "tr")(101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Loading Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "td")(104, "button", 119)(105, "span", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Expand UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Expand Animation Buttons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
function TablecomponentsComponent_div_8_ngb_alert_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 125)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Good Morning!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "your day");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " with some alerts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "primary")("dismissible", false);
  }
}
function TablecomponentsComponent_div_8_ngb_alert_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function TablecomponentsComponent_div_8_ngb_alert_35_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.isPrimaryClosed2 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Good Morning!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "your day");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " with some alerts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", true)("type", "primary");
  }
}
function TablecomponentsComponent_div_8_ngb_alert_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function TablecomponentsComponent_div_8_ngb_alert_60_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.isPrimaryClosed3 = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Good Morning!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "your day");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " with some alerts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", true)("type", "primary");
  }
}
function TablecomponentsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "m-card", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function TablecomponentsComponent_div_8_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.reloadAlerts($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Alerts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14)(6, "table", 15)(7, "tbody")(8, "tr")(9, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Basic Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 17)(12, "ngb-alert", 121)(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Good Morning!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Start your day with some alerts. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Alerts are available for any length of text, as well as an optional dismiss button. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, ".alert.alert-COLOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " classes for alert with all theme colors. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr")(22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Alerts with Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TablecomponentsComponent_div_8_ngb_alert_25_Template, 7, 2, "ngb-alert", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, ".alert-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " class to add links to alerts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr")(32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Dismissible Alerts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, TablecomponentsComponent_div_8_ngb_alert_35_Template, 7, 2, "ngb-alert", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Add a dismiss button and the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, ".alert-dismissible");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " class, which adds extra padding to the right of the alert and positions the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, ".close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " button. On the dismiss button, add the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "data-dismiss=\"alert\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " attribute, which triggers the JavaScript functionality. Be sure to use the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "<button>");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " element with it for proper behavior across all devices. To animate alerts when dismissing them, be sure to add the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, ".fade");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, ".in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " classes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr")(57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Alerts with icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, TablecomponentsComponent_div_8_ngb_alert_60_Template, 9, 2, "ngb-alert", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " To add left/right icons to the alert, use class ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, ".alert-icon-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "alert-icon-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " as required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false)("type", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isPrimaryClosed1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isPrimaryClosed2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isPrimaryClosed3);
  }
}
const data = __webpack_require__(/*! ../../../../../assets/data/datatables/tablecomponent/tablecomponent.json */ 69636);
class TablecomponentsComponent {
  constructor() {
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    this.disabled = false;
    this.singleCities = [];
    this.basicSelectedItem = [];
    this.singleDropdownSettings = {};
    this.hideSearchBoxdropdownSettings = {};
    this.closeDropdownSelection = false;
    this.isPrimaryClosed1 = false;
    this.isPrimaryClosed2 = false;
    this.isPrimaryClosed3 = false;
    this.singleSelectedItem = [];
    this.responsiveSelectedItem = [];
    this.singlePlaceholderSelectedItem = [];
    this.disableSelectedItem = [];
    this.hideSearchBox = [];
    this.ShowFilter = false;
    this.limitSelection = false;
    this.multipleCities = [];
    this.multipleSelectedItems = [];
    this.multipleDropdownSettings = {};
    this.multipleLimitDropdownSettings = {};
    this.basicMultiSelect = [];
    this.singleProgrammaticCities = [];
    this.singleProgrammaticSelectedItem = [];
    this.singleProgrammaticDropdownSettings = {};
    this.multipleProgrammaticSelectedItem = [];
    this.multipleProgrammaticDropdownSettings = {};
    this.singleCitiesEvents = [];
    this.singleEventsSelectedItem = [];
    this.singleEventsDropdownSettings = {};
    this.multipleCitiesEvents = [];
    this.multipleEventsSelectedItem = [];
    this.multipleEventsDropdownSettings = {};
    this.loadingArray = [];
    this.loadingArraySelectedItem = [];
    this.loadingArrayDropdownSettings = {};
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Table components',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Tables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Table components',
        'isLink': false
      }]
    };
    this.singleCities = data['Cities'];
    this.singleDropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.hideSearchBoxdropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: false,
      closeDropDownOnSelection: true
    };
    this.multipleCities = data['Cities'];
    this.basicMultiSelect = data['Select'];
    this.multipleDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.multipleLimitDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      limitSelection: 2,
      allowSearchFilter: true
    };
    this.singleProgrammaticCities = data['Cities'];
    this.singleProgrammaticSelectedItem = [{
      item_id: 1,
      item_text: 'Alaska'
    }];
    this.singleProgrammaticDropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.multipleProgrammaticDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      clearSearchFilter: true
    };
    this.singleCitiesEvents = data['Cities'];
    this.singleEventsSelectedItem = [{
      item_id: 2,
      item_text: 'California'
    }];
    this.singleEventsDropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.multipleCitiesEvents = data['Cities'];
    this.multipleEventsSelectedItem = [{
      item_id: 2,
      item_text: 'California'
    }, {
      item_id: 3,
      item_text: 'Colorado'
    }];
    this.multipleEventsDropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
    this.loadingArray = data['Select'];
    this.loadingArraySelectedItem = this.loadingArray;
    this.loadingArrayDropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }
  onItemSelect(item) {
    console.log('onItemSelect', item);
  }
  onSelectAll(items) {
    console.log('onSelectAll', items);
  }
  onSingleEventsItemSelect(item) {
    console.log('onSingleEventsItemSelect', item);
    window.alert('Select Event fired.');
    window.alert('Change Event fired.');
  }
  onSingleEventsItemsClose() {
    console.log('onSingleEventsItemClose');
    window.alert('Close Event fired.');
  }
  onMultipleEventsItemsClose() {
    console.log('onMultipleEventsItemsClose');
    window.alert('Close Event fired.');
  }
  reloadComponents() {
    this.blockUIComponents.start('Loading..');
    setTimeout(() => {
      this.blockUIComponents.stop();
    }, 2500);
  }
  reloadAlerts() {
    this.blockUIAlerts.start('Loading..');
    setTimeout(() => {
      this.blockUIAlerts.stop();
    }, 2500);
  }
}
TablecomponentsComponent.ɵfac = function TablecomponentsComponent_Factory(t) {
  return new (t || TablecomponentsComponent)();
};
TablecomponentsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TablecomponentsComponent,
  selectors: [["app-tablecomponents"]],
  decls: 579,
  vars: 20,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "ui", 1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "alerts", 1, "row"], ["id", "callouts", 1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "table-responsive"], [1, "table", "table-bordered", "mb-0"], [1, "width-200"], [1, "width-350"], [1, "bs-callout-info", "callout-border-left", "p-1"], [1, "bs-callout-danger", "callout-bordered", "callout-border-right", "p-1"], [1, "bs-callout-pink", "callout-transparent", "callout-border-left", "p-1"], [1, "pink"], [1, "bs-callout-success", "mt-1"], [1, "media", "align-items-stretch"], [1, "media-left", "media-middle", "bg-success", "p-2", "pt-3"], [1, "feather", "ft-eye", "white"], [1, "media-body", "p-1"], [1, "bs-callout-danger", "callout-round", "callout-bordered", "callout-transparent", "p-1", "px-2"], ["id", "progress", 1, "row"], ["id", "example-caption-2", 1, "text-center"], ["height", "18px", "width", "100px", "type", "primary", 3, "value"], ["height", "18px", "width", "100px", "type", "danger", 3, "striped", "value"], ["id", "checkbox", 1, "row"], [1, "card-body"], [1, "checkbox"], ["type", "checkbox", "value", "", "checked", ""], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "name", "customCheckbox", "id", "customCheckbox1", "checked", "", 1, "custom-control-input"], ["for", "customCheckbox1", 1, "custom-control-label"], ["id", "radio", 1, "row"], [1, "radio"], ["type", "radio", "name", "radio", "value", "", "checked", ""], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "customRadio", "id", "customRadio1", "checked", "", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], ["id", "select", 1, "row"], [1, "form-group"], ["name", "city", 1, "text", 3, "data", "ngModel", "settings", "ngModelChange", "onSelect"], ["name", "city", 3, "data", "ngModel", "settings", "disabled", "ngModelChange", "onSelect"], ["id", "input", 1, "row"], ["type", "text", "id", "basicInput", 1, "form-control"], ["type", "text", "id", "textColor", "value", "Primary colored Text", 1, "form-control", "primary"], ["type", "text", "id", "textColor1", "placeholder", "Success bordered Input", 1, "form-control", "border-success"], ["type", "text", "id", "textColor2", "value", "Background color Input", 1, "form-control", "bg-warning"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "id", "iconLeft", "placeholder", "Icon Left, Default Input", 1, "form-control"], [1, "form-control-position"], [1, "feather", "ft-phone-call", "primary"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], ["type", "text", "placeholder", "Addon to Left", "aria-describedby", "basic-addon1", 1, "form-control"], ["id", "radio-addon1", 1, "input-group-prepend"], [1, "input-group-text"], ["size", "small", "switchColor", "white", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery"], ["type", "text", "placeholder", "Input with Left switchery", "aria-describedby", "radio-addon1", 1, "form-control"], ["id", "badges", 1, "row"], [1, "table", "table-bordered", "mb-0", "pills"], [1, "text-center", "width-350"], [1, "justify-content-start", "nav", "nav-pills"], [1, "nav-item"], [1, "badge", "badge-pill", "badge-primary", "nav-badge"], [1, "text-center", "pillsbackground"], [1, "badge", "badge-pill", "badge-warning", "nav-badge"], [1, "text-center"], [1, "font-medium-2", "icon-line-height", "feather", "ft-droplet"], [1, "text-center", "pillsborder"], [1, "badge", "badge-pill", "badge-primary", "nav-badge", "nav-badge-pillsborder"], ["id", "tooltip", 1, "row"], ["type", "button", "triggers", "hover:click:hover", "ngbTooltip", "Hover Triggered", 1, "btn", "btn-info", 3, "autoClose"], ["type", "button", "triggers", "click", "ngbTooltip", "Click Triggered", 1, "btn", "btn-success", 3, "autoClose"], ["type", "button", "triggers", "click", "ngbTooltip", "Focus Triggered", 1, "btn", "btn-warning", 3, "autoClose"], ["type", "button", "ngbTooltip", "Manual Tooltip", "triggers", "manual", 1, "btn", "btn-danger", 3, "autoClose", "click"], ["t", "ngbTooltip"], ["id", "tags", 1, "row"], [1, "badge", "badge-info"], [1, "badge", "badge-primary", "label-square"], [1, "la", "la-paperclip", "font-medium-2"], [1, "badge", "badge-success", "round"], [1, "font-medium-2", "icon-line-height", "feather", "ft-upload"], [1, "badge", "border-danger", "danger", "badge-border"], ["id", "switch", 1, "row"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "checked", "", 1, "switchery"], ["for", "switcheryColor4", 1, "card-title", "ml-1"], ["switchColor", "white", "color", "rgb(55, 188, 155)", "size", "small", "checked", "", 1, "switchery"], ["for", "switcherySize2", 1, "font-medium-2", "text-bold-600", "ml-1"], ["switchColor", "white", "color", "rgb(218, 68, 83)", "checked", "", 1, "switchery"], ["for", "switcheryColor3", 1, "card-title", "ml-1"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], ["type", "button", 1, "btn", "btn-success", "mr-1", "mb-1"], ["type", "button", 1, "btn", "btn-danger", "btn-round", "mr-1", "mb-1"], [1, "btn-group", "mr-1", "mb-1"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-info", "btn-min-width", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "dropdown-divider"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-info", "mr-1", "mb-1"], [1, "feather", "ft-info"], ["type", "button", 1, "btn", "btn-icon", "btn-success", "mr-1"], [1, "feather", "ft-camera"], ["type", "button", 1, "btn", "btn-float", "btn-info"], [1, "feather", "ft-search"], ["data-style", "expand-up", 1, "btn", "btn-primary", "mr-1", "mb-1", "ladda-button"], [1, "ladda-label"], ["role", "alert", 3, "dismissible", "type"], ["role", "alert", 3, "type", "dismissible", 4, "ngIf"], ["role", "alert", 3, "dismissible", "type", "close", 4, "ngIf"], ["class", "alert-icon-left", "role", "alert", 3, "dismissible", "type", "close", 4, "ngIf"], ["role", "alert", 3, "type", "dismissible"], [1, "alert-link", 3, "routerLink"], ["role", "alert", 3, "dismissible", "type", "close"], ["role", "alert", 1, "alert-icon-left", 3, "dismissible", "type", "close"], [1, "alert-icon"], [1, "la", "la-heart"]],
  template: function TablecomponentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TablecomponentsComponent_div_6_Template, 109, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TablecomponentsComponent_div_8_Template, 69, 6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Callouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "table", 15)(18, "tbody")(19, "tr")(20, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Basic Callout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td", 17)(23, "div", 18)(24, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Great Job!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Biscuit macaroon tootsie roll croissant. Dessert candy canes halvah cookie liquorice.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, ".bs-callout-COLOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " for color callout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr")(34, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Right Bordered Callouts");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td")(37, "div", 19)(38, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Not Bad!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Croissant carrot cake sesame snaps dessert wafer dessert wafer icing jelly.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, ".callout-border-right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " for right bordered callout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Callout with transparent Background");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "td")(51, "div", 20)(52, "h4", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Super cool!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Cupcake macaroon chupa chups fruitcake. Candy canes cotton candy dessert.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, ".callout-transparent");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " for callout with white background. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr")(62, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Callout With Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td")(65, "div", 22)(66, "div", 23)(67, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 26)(70, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Congratulations!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Cake chupa chups tootsie roll brownie pastry marzipan lollipop sweet.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Use class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, ".callout-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " to use icon with callout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "tr")(80, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Round Callout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "td")(83, "div", 27)(84, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Not Bad!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Croissant carrot cake sesame snaps dessert wafer dessert wafer icing jelly.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Use class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, ".callout-round");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " for round callout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 28)(94, "div", 9)(95, "div", 10)(96, "div", 11)(97, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 13)(100, "div", 14)(101, "table", 15)(102, "tbody")(103, "tr")(104, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Default Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "td", 17)(107, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Reticulating splines\u2026 25%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "ngb-progressbar", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "To caption a progress bar, simply add a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "<div>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " with your caption text, align the text using a utility class, and associate the caption with the progress element using the aria-describedby attribute.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "tr")(116, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Striped Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "ngb-progressbar", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Uses a gradient to create a striped effect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "tr")(123, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Progress Sizes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "ngb-progressbar", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Different sized progress. For Default progress, No size class needed. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 32)(130, "div", 9)(131, "div", 10)(132, "div", 11)(133, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Checkboxes");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 13)(136, "div", 14)(137, "table", 15)(138, "tbody")(139, "tr")(140, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Basic Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "td", 17)(143, "div", 33)(144, "fieldset", 34)(145, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " I am checked Checkbox ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Basic Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "tr")(151, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Custom Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "td", 17)(154, "div", 33)(155, "span", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Checkbox Checked");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Custom Checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 39)(162, "div", 9)(163, "div", 10)(164, "div", 11)(165, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 13)(168, "div", 14)(169, "table", 15)(170, "tbody")(171, "tr")(172, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Basic Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "td", 17)(175, "div", 33)(176, "fieldset", 40)(177, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](178, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " I am checked Radio Button ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Basic Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "tr")(183, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "Basic Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "td", 17)(186, "div", 33)(187, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Checkbox Checked");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Custom Radio Buttons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 45)(194, "div", 9)(195, "div", 10)(196, "div", 11)(197, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 13)(200, "div", 14)(201, "table", 15)(202, "tbody")(203, "tr")(204, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Single Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "td", 17)(207, "div", 33)(208, "div", 46)(209, "ng-multiselect-dropdown", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TablecomponentsComponent_Template_ng_multiselect_dropdown_ngModelChange_209_listener($event) {
        return ctx.basicSelectedItem = $event;
      })("onSelect", function TablecomponentsComponent_Template_ng_multiselect_dropdown_onSelect_209_listener($event) {
        return ctx.onItemSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "ng-multiselect-dropdown");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, " for basic select control.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "tr")(216, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "Disabled Mode");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "td")(219, "div", 33)(220, "div", 46)(221, "ng-multiselect-dropdown", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TablecomponentsComponent_Template_ng_multiselect_dropdown_ngModelChange_221_listener($event) {
        return ctx.disableSelectedItem = $event;
      })("onSelect", function TablecomponentsComponent_Template_ng_multiselect_dropdown_onSelect_221_listener($event) {
        return ctx.onItemSelect($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Select will respond to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, " attribute on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "<select>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, " elements. You can also initialize Select with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "disabled: true");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, " to get the same effect. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "div", 49)(234, "div", 9)(235, "div", 10)(236, "div", 11)(237, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 13)(240, "div", 14)(241, "table", 15)(242, "tbody")(243, "tr")(244, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Default Input text");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "td", 17)(247, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "Standard form controls supported in all example form elements. Form controls automatically receives global styling. The .form-group class is the easiest way to add some structure to form elements like ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, " <input>, <textarea>, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "and");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "<select>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "tr")(257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Input Font Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "td")(260, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Input Primary colored Font");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "tr")(265, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "Input Border Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "td")(268, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](269, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](271, "Input Success Border Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "tr")(273, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](274, "Input Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "td")(276, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](277, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "Background Warning Color Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "tr")(281, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, "Default Input with Left Icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "td")(284, "div", 33)(285, "fieldset", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](286, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](288, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "Left Icon Default Input");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "tr")(292, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "Default Input group");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "td")(295, "div", 33)(296, "div", 58)(297, "div", 59)(298, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](299, "@");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](300, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, ".input-group-prepend");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](305, " class before ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "tr")(309, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "Input group with Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "td")(312, "div", 33)(313, "div", 58)(314, "span", 62)(315, "span", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](316, "ui-switch", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](317, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "Add span with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, ".input-group-prepend");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, " class before ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "<input>");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, " text and Add switchery inside. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "div", 66)(327, "div", 9)(328, "div", 10)(329, "div", 11)(330, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "Badges");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "div", 13)(333, "div", 14)(334, "table", 67)(335, "tbody")(336, "tr")(337, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "Basic Pills");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "td", 68)(340, "ul", 69)(341, "li", 70)(342, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](343, "59");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](345, "Use the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](347, ".badge ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "class, followed by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, ".badge-pill");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, ".badge-secondary");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](354, " class within element to create default pill.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](355, "tr")(356, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "Pills With Glow effect");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "td", 72)(359, "ul", 69)(360, "li", 70)(361, "span", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](362, "68");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Use the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](366, ".badge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](367, " class, followed by .badge-pill with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, ".badge-glow");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](370, " class within element to create ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](372, "glow");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, " styled pill. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "tr")(375, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](376, "Pills with Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "td", 74)(378, "ul", 69)(379, "li", 70)(380, "span", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "i", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "I dont have text to put hear");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "tr")(385, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "Bordered Badges (Pills)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "td", 76)(388, "ul", 69)(389, "li", 70)(390, "span", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "25");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, "Use the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395, ".badge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](396, " class, followed by");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, ".badge-border");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, " with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](400, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](401, ".badge-success");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](402, " class within element to create success pill. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "div", 78)(404, "div", 9)(405, "div", 10)(406, "div", 11)(407, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](408, "Tooltip Triggers");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "div", 13)(410, "div", 14)(411, "table", 15)(412, "tbody")(413, "tr")(414, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](415, "Hover");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "td", 17)(417, "div", 74)(418, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](419, " On Hover Trigger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](423, "triggers=\"hover\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, " for hover trigger. This is a default trigger.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "tr")(426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](427, "Click");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "td")(429, "div", 74)(430, "button", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](431, " On Click Trigger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](433, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "triggers=\"click\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](436, " for click trigger.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "tr")(438, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](439, "Focus");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](440, "td")(441, "div", 74)(442, "button", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](443, " On Focus Trigger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](445, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](447, "triggers=\"focus\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](448, " for focus trigger.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "tr")(450, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](451, "Manual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "td")(453, "div", 74)(454, "button", 82, 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TablecomponentsComponent_Template_button_click_454_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](455);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.open());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](456, " On Manual Trigger ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](458, "Use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](460, "triggers=\"manual\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, " for manual trigger. You can do show/hide using js");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "div", 84)(463, "div", 9)(464, "div", 10)(465, "div", 11)(466, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](467, "Tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "div", 13)(469, "div", 14)(470, "table", 15)(471, "tbody")(472, "tr")(473, "td", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](474, "Info Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](475, "td", 68)(476, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](477, "Info Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](479, "Use the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](481, ".badge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, " class, followed by");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](484, ".badge-info");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](485, " class within element to create info label.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "tr")(487, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](488, "Tags with Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "td", 74)(490, "div", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](491, "i", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](492, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](493, "Primary Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](494, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](495, "Use the .badge class, followed by");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](497, ".badge-square");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](498, " class for square bordered label.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "tr")(500, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](501, "Tags with Only Icons");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "td", 74)(503, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](504, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](505, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](506, "Use the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](508, ".badge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](509, " class, followed by");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](511, ".round");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](512, " class for round warning label.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "tr")(514, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](515, "Bordered Tags");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](516, "td", 74)(517, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](518, "Danger Label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](519, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](520, "Use the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](521, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](522, ".badge-bordered");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](523, " with class ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](525, ".badge");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](526, ". Also use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](527, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](528, ".border-COLOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](529, " class to add border and use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](530, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](531, ".COLOR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](532, " for text color");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](533, "div", 91)(534, "div", 9)(535, "div", 10)(536, "div", 11)(537, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](538, "Switch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "div", 13)(540, "div", 14)(541, "table", 15)(542, "tbody")(543, "tr")(544, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](545, "Basic Switchery Toggle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](546, "td", 74)(547, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](548, "ui-switch", 92)(549, "label", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](550, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](551, "To set Switchery toggle, add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](552, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](553, ".switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](554, " class to checkbox. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](555, "tr")(556, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](557, "Small Switchery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](558, "td", 74)(559, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](560, "ui-switch", 94)(561, "label", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](562, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](563, "To set Small Switchery toggle, add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](564, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](565, ".switchery-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](566, " class to checkbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](567, "tr")(568, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](569, "Color Switchery (Danger Switchery)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "td", 74)(571, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](572, "ui-switch", 96)(573, "label", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](574, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](575, "To get Danger Switchery, add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](577, ".switchery-danger");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](578, " class to checkbox.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "components")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "alerts")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](101);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("striped", true)("value", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.singleCities)("ngModel", ctx.basicSelectedItem)("settings", ctx.singleDropdownSettings);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.singleCities)("ngModel", ctx.disableSelectedItem)("settings", ctx.singleDropdownSettings)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](197);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoClose", "inside");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoClose", "inside");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoClose", "false");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoClose", "outside");
    }
  },
  dependencies: [_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_ui_switch__WEBPACK_IMPORTED_MODULE_5__.UiSwitchComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__.MultiSelectComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbProgressbar, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
  styles: ["[_nghost-%COMP%]     .bg-primary {\n    background-color: #666EE8 !important;\n}\n\n[_nghost-%COMP%]     .pills .nav .nav-item .nav-link {\n    border-radius: 10rem;\n    display: inline-block;\n    padding: 0.35em 0.4em;\n    font-size: 95%;\n    line-height: 1;\n    white-space: nowrap;\n    vertical-align: baseline;\n     margin-top: 10px;\n}\n\n[_nghost-%COMP%]     .justify-content-start {\n    justify-content: center !important;\n}\n\n[_nghost-%COMP%]     .pillsbackground .nav-pills .nav-link.active, .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    background-color: #ff9149;\n}\n\n[_nghost-%COMP%]     .pillsborder .nav-pills .nav-link.active, .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\n    color: #28d094;\n    border: 2px solid #28D094 !important;\n    background-color: #FFFFFF;\n    font: #28d094;\n}\n\n[_nghost-%COMP%]     .notifications .nav-pills .nav-link.active {\n    color: #7c7f90;\n    background-color: #FFFFFF;\n}\n[_nghost-%COMP%]     .table-responsive {\n   overflow-y: hidden;\n}\n[_nghost-%COMP%]     .text .dropdown-list .item2 {\n    max-height: 87px !important;\n}\n[_nghost-%COMP%]     .nav-badge {\n    border-radius: 10rem;\n    display: inline-block;\n    padding: 0.35em 0.4em;\n    font-size: 95%;\n    line-height: 1;\n    white-space: nowrap;\n    vertical-align: baseline;\n    margin-top: 10px;\n}\n\n[_nghost-%COMP%]     .nav-badge-pillsborder {\n    color: #28d094;\n    border: 2px solid #28D094 !important;\n    background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlY29tcG9uZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsd0JBQXdCO0tBQ3ZCLGdCQUFnQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMseUJBQXlCO0FBQzdCIiwiZmlsZSI6InRhYmxlY29tcG9uZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5iZy1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2RUU4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucGlsbHMgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC4zNWVtIDAuNGVtO1xuICAgIGZvbnQtc2l6ZTogOTUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmp1c3RpZnktY29udGVudC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5waWxsc2JhY2tncm91bmQgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxuLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjkxNDk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAucGlsbHNib3JkZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxuLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjMjhkMDk0O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyOEQwOTQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQ6ICMyOGQwOTQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubm90aWZpY2F0aW9ucyAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiAjN2M3ZjkwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuOmhvc3QgOjpuZy1kZWVwIC50ZXh0IC5kcm9wZG93bi1saXN0IC5pdGVtMiB7XG4gICAgbWF4LWhlaWdodDogODdweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5uYXYtYmFkZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC40ZW07XG4gICAgZm9udC1zaXplOiA5NSU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uYXYtYmFkZ2UtcGlsbHNib3JkZXIge1xuICAgIGNvbG9yOiAjMjhkMDk0O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyOEQwOTQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9ib29zdHJhcHRhYmxlcy90YWJsZWNvbXBvbmVudHMvdGFibGVjb21wb25lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix3QkFBd0I7S0FDdkIsZ0JBQWdCO0FBQ3JCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksY0FBYztJQUNkLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtHQUNHLGtCQUFrQjtBQUNyQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9DQUFvQztJQUNwQyx5QkFBeUI7QUFDN0I7O0FBRUEsb3ZGQUFvdkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjZFRTggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5waWxscyAubmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC40ZW07XG4gICAgZm9udC1zaXplOiA5NSU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBpbGxzYmFja2dyb3VuZCAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4ubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTE0OTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5waWxsc2JvcmRlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4ubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XG4gICAgY29sb3I6ICMyOGQwOTQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzI4RDA5NCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udDogIzI4ZDA5NDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ub3RpZmljYXRpb25zIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICM3YzdmOTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbjpob3N0IDo6bmctZGVlcCAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG46aG9zdCA6Om5nLWRlZXAgLnRleHQgLmRyb3Bkb3duLWxpc3QgLml0ZW0yIHtcbiAgICBtYXgtaGVpZ2h0OiA4N3B4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5hdi1iYWRnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjRlbTtcbiAgICBmb250LXNpemU6IDk1JTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5hdi1iYWRnZS1waWxsc2JvcmRlciB7XG4gICAgY29sb3I6ICMyOGQwOTQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzI4RDA5NCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('components')], TablecomponentsComponent.prototype, "blockUIComponents", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('alerts')], TablecomponentsComponent.prototype, "blockUIAlerts", void 0);

/***/ }),

/***/ 70449:
/*!***********************************************************************************!*\
  !*** ./src/app/content/table/boostraptables/tablesizing/tablesizing.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesizingComponent": () => (/* binding */ TablesizingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);







function TablesizingComponent_div_6_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r7 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r6.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r6.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r6.username);
  }
}
function TablesizingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Extra Large table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "div", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of Extra large table, Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".table-xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " class to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " to create a table with extra large spacing. Extra larger table all rows have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "1.25rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " height.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 22)(19, "div", 14)(20, "table", 23)(21, "thead", 16)(22, "tr")(23, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TablesizingComponent_div_6_tr_32_Template, 9, 4, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
  }
}
function TablesizingComponent_div_8_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r9.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r9.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r9.username);
  }
}
function TablesizingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Large table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11)(6, "div", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of large table, Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".table-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " class to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " to create a table with large spacing. Larger table all rows have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "0.9rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " height.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14)(19, "table", 25)(20, "thead", 16)(21, "tr")(22, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, TablesizingComponent_div_8_tr_31_Template, 9, 4, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
  }
}
function TablesizingComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r11.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r11.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r11.username);
  }
}
function TablesizingComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r13.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r13.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r13.username);
  }
}
function TablesizingComponent_tr_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r15.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r15.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r15.username);
  }
}
class TablesizingComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Tables Sizing',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Tables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Tables Sizing',
        'isLink': false
      }]
    };
    this.tableApiservice.getTableBorderData().subscribe(Response => {
      this.TablesizingData = Response;
      this.getTabledata();
    });
  }
  getTabledata() {
    this.countries = this.TablesizingData.rows;
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
  reloadExtraLargeTable() {
    this.blockUIExtraLargeTable.start('Loading..');
    setTimeout(() => {
      this.blockUIExtraLargeTable.stop();
    }, 2500);
  }
  reloadLargeTable() {
    this.blockUILargeTable.start('Loading..');
    setTimeout(() => {
      this.blockUILargeTable.stop();
    }, 2500);
  }
}
TablesizingComponent.ɵfac = function TablesizingComponent_Factory(t) {
  return new (t || TablesizingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
TablesizingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TablesizingComponent,
  selectors: [["app-tablesizing"]],
  decls: 109,
  vars: 8,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body", "card-dashboard"], [1, "card-text"], [1, "table-responsive"], [1, "table", "table-de", "mb-0"], [1, "bouble-border"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "table", "table-sm", "mb-0", "back_ground"], [1, "table", "table-sm", "mb-0"], [1, "table", "table-xs"], [1, ""], [1, "table", "table-xl", "mb-0"], ["scope", "row"], [1, "table", "table-lg", "mb-0"]],
  template: function TablesizingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TablesizingComponent_div_6_Template, 33, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TablesizingComponent_div_8_Template, 32, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Default table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Example of large table, Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, ".table-lg");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " class to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " to create a table with large spacing. Larger table all rows have ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "0.9rem");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " height.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 14)(29, "table", 15)(30, "thead", 16)(31, "tr")(32, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, TablesizingComponent_tr_41_Template, 9, 4, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 5)(43, "div", 7)(44, "div", 8)(45, "div", 9)(46, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Small table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 11)(49, "div", 12)(50, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Example of small table, Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, ".table-sm");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " class to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " to create a table with small spacing. Small table all rows have ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "0.6rem");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " height.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 19)(62, "div", 14)(63, "table", 20)(64, "thead")(65, "tr")(66, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, TablesizingComponent_tr_75_Template, 9, 4, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 5)(77, "div", 7)(78, "div", 8)(79, "div", 9)(80, "h4", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Extra Small table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 11)(83, "div", 12)(84, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Example of extra small table, Add ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, ".table-xs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " class to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, ".table");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " to create a table with extra small spacing. Extra small table all rows have ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "0.4rem");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " height.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 14)(96, "table", 21)(97, "thead")(98, "tr")(99, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "#");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, TablesizingComponent_tr_108_Template, 9, 4, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "extraLargeTable")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "largeTable")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXNpemluZy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9ib29zdHJhcHRhYmxlcy90YWJsZXNpemluZy90YWJsZXNpemluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('extraLargeTable')], TablesizingComponent.prototype, "blockUIExtraLargeTable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('largeTable')], TablesizingComponent.prototype, "blockUILargeTable", void 0);

/***/ }),

/***/ 72645:
/*!*************************************************************************************!*\
  !*** ./src/app/content/table/boostraptables/tablestyling/tablestyling.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablestylingComponent": () => (/* binding */ TablestylingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/table-api.service */ 68597);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);







const _c0 = ["myTable"];
function TablestylingComponent_div_6_tr_28_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r10.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r10.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r10.password);
  }
}
function TablestylingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Default styling");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13)(6, "div", 14)(7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of a table with bootstrap default styling. By default any table with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " class has ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " background color.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 16)(16, "table", 25)(17, "thead", 26)(18, "tr")(19, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TablestylingComponent_div_6_tr_28_Template, 9, 4, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.countries);
  }
}
function TablestylingComponent_div_8_tr_28_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r14.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r14.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r14.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r14.password);
  }
}
function TablestylingComponent_div_8_tr_63_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r16.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r16.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r16.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r16.password);
  }
}
function TablestylingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Table header styling");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13)(6, "div", 14)(7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of a custom table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " styling. Table header supports default contextual and custom background colors change to use bootstrap class. Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".bg-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " class to the header row. All border and text colors will be automatically adjusted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 16)(16, "table", 25)(17, "thead", 27)(18, "tr")(19, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TablestylingComponent_div_8_tr_28_Template, 9, 4, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14)(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Apart form bootstrap color options you can also use Modern Admin color palette options, To set the selected bg color lighten use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, ".bg-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " where ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " is the value of your selected color from palette, and with that use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, ".bg-lighten-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, ".bg-darken-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " class where ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " is the value between '1-5' of your selected lighten/darken color from modern color palette. So for color lighten 4 bg class will be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, ".bg-lighten-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 16)(51, "table", 25)(52, "thead", 28)(53, "tr")(54, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, TablestylingComponent_div_8_tr_63_Template, 9, 4, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.countries);
  }
}
function TablestylingComponent_div_10_tr_18_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r20.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r20.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r20.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r20.password);
  }
}
function TablestylingComponent_div_10_tr_53_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r22.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r22.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r22.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r22.password);
  }
}
function TablestylingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Table footer styling");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 13)(6, "div", 14)(7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Example of a custom table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " styling. Table footer supports default contextual and custom background colors to use bootstrap class . Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".bg-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " class to the header row. All border and text colors will be automatically adjusted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 16)(16, "table", 25)(17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TablestylingComponent_div_10_tr_18_Template, 9, 4, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tfoot", 27)(20, "tr")(21, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14)(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Apart form bootstrap color options you can also use Modern Admin color palette options, To set the selected bg color lighten use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, ".bg-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " where ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " is the value of your selected color from palette, and with that use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, ".bg-lighten-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, ".bg-darken-*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " class where ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " is the value between '1-5' of your selected lighten/darken color from modern color palette. So for color lighten 4 bg class will be ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, ".bg-lighten-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 16)(51, "table", 25)(52, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, TablestylingComponent_div_10_tr_53_Template, 9, 4, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tfoot", 28)(55, "tr")(56, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.countries);
  }
}
function TablestylingComponent_tr_37_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r24.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r24.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r24.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r24.password);
  }
}
function TablestylingComponent_tr_53_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r26.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r26.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r26.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r26.password);
  }
}
function TablestylingComponent_tr_99_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r28.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r28.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r28.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r28.password);
  }
}
function TablestylingComponent_tr_115_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r30.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r30.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r30.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r30.password);
  }
}
function TablestylingComponent_tr_149_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r32.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r32.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r32.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r32.password);
  }
}
function TablestylingComponent_tr_184_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const country_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", country_r34.firstname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r34.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r34.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](country_r34.password);
  }
}
class TablestylingComponent {
  constructor(tableApiservice) {
    this.tableApiservice = tableApiservice;
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'Tables styling',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'Tables',
        'isLink': true,
        'link': '#'
      }, {
        'name': 'Tables styling',
        'isLink': false
      }]
    };
    this.tableApiservice.getTableStylingData().subscribe(Response => {
      this.TableStylingData = Response;
      this.getTabledata();
    });
  }
  getTabledata() {
    this.countries = this.TableStylingData.rows;
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }
  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
  reloadDefaultStyling() {
    this.blockUIDefaultStyling.start('Loading..');
    setTimeout(() => {
      this.blockUIDefaultStyling.stop();
    }, 2500);
  }
  reloadTableHeaderStyling() {
    this.blockUITableHeaderStyling.start('Loading..');
    setTimeout(() => {
      this.blockUITableHeaderStyling.stop();
    }, 2500);
  }
}
TablestylingComponent.ɵfac = function TablestylingComponent_Factory(t) {
  return new (t || TablestylingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_table_api_service__WEBPACK_IMPORTED_MODULE_0__.TableApiService));
};
TablestylingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TablestylingComponent,
  selectors: [["app-tablestyling"]],
  viewQuery: function TablestylingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 185,
  vars: 13,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "default", 1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "header-styling", 1, "row"], ["id", "table-formatting", 1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content", "collapse", "show"], [1, "card-body", "card-dashboard"], [1, "card-text"], [1, "table-responsive"], [1, "table", "table-inverse", "bg-primary"], [1, ""], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "text-bold-600", "px-1"], [1, "table", "table-inverse", "bg-purple", "bg-lighten-2"], [1, "table", "bg-warning", "table-bordered", "table-striped", "table-hover", "white"], [1, "table", "bg-red", "bg-lighten-1", "table-inverse", "table-bordered", "table-striped", "table-hover"], [1, "table", "mb-0"], [1, "bouble-border"], [1, "bg-success", "white"], [1, "bg-yellow", "bg-lighten-4"]],
  template: function TablestylingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TablestylingComponent_div_6_Template, 29, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TablestylingComponent_div_8_Template, 64, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TablestylingComponent_div_10_Template, 64, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Custom table formatting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Example of a table with custom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "formatting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16)(25, "table", 17)(26, "thead", 18)(27, "tr")(28, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, TablestylingComponent_tr_37_Template, 9, 4, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Header and footer formatting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16)(41, "table", 17)(42, "thead", 18)(43, "tr")(44, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, TablestylingComponent_tr_53_Template, 9, 4, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "tfoot", 17)(55, "tr")(56, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 14)(65, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Modern Admin color palette options can be use also for the custom table formatting, To set the selected bg color lighten use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, ".bg-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " where ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " is the value of your selected color from palette, and with that use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, ".bg-lighten-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, ".bg-darken-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " class where ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " is the value between '1-5' of your selected lighten/darken color from modern color palette. So for color lighten 4 bg class will be ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, ".bg-lighten-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 13)(86, "div", 16)(87, "table", 22)(88, "thead")(89, "tr")(90, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, TablestylingComponent_tr_99_Template, 9, 4, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Header and footer formatting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 16)(103, "table", 22)(104, "thead")(105, "tr")(106, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, TablestylingComponent_tr_115_Template, 9, 4, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "tfoot", 22)(117, "tr")(118, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 8)(127, "div", 9)(128, "div", 10)(129, "div", 11)(130, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Table formatting options");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 13)(133, "div", 14)(134, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Table with custom formatting color supports all default table layouts and options. In this example our table displays all possible borders, striped rows and changes background color on row hover. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 16)(137, "table", 23)(138, "thead")(139, "tr")(140, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](149, TablestylingComponent_tr_149_Template, 9, 4, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 14)(151, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Modern Admin color palette options can be use also for the custom table formatting, To set the selected bg color lighten use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, ".bg-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " where ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " is the value of your selected color from palette, and with that use ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, ".bg-lighten-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " or ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, ".bg-darken-*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, " class where ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, " is the value between '1-5' of your selected lighten/darken color from modern color palette. So for color lighten 4 bg class will be ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, ".bg-lighten-4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 16)(172, "table", 24)(173, "thead")(174, "tr")(175, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Firstname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Lastname");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](184, TablestylingComponent_tr_184_Template, 9, 4, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "defaultStyling")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "tableHeaderStyling")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "tableHeaderStyling")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.countries);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZXN0eWxpbmcuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC90YWJsZS9ib29zdHJhcHRhYmxlcy90YWJsZXN0eWxpbmcvdGFibGVzdHlsaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('defaultStyling')], TablestylingComponent.prototype, "blockUIDefaultStyling", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_4__.BlockUI)('tableHeaderStyling')], TablestylingComponent.prototype, "blockUITableHeaderStyling", void 0);

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

/***/ }),

/***/ 69636:
/*!***********************************************************************!*\
  !*** ./src/assets/data/datatables/tablecomponent/tablecomponent.json ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Cities":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}],"Select":[{"item_id":1,"item_text":"Alaska"},{"item_id":2,"item_text":"California"},{"item_id":3,"item_text":"Colorado"},{"item_id":4,"item_text":"New Mexico"},{"item_id":5,"item_text":"Alabama"},{"item_id":6,"item_text":"Connecticut"},{"item_id":7,"item_text":"New York"}]}');

/***/ })

}]);
//# sourceMappingURL=src_app_content_table_boostraptables_boostraptables_module_ts.js.map