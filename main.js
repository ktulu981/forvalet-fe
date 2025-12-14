"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["main"],{

/***/ 15496:
/*!*******************************************!*\
  !*** ./src/app/_api/user/user.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);



class UserService {
  constructor(firestore) {
    this.firestore = firestore;
    this.ref = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('users');
  }
  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
  getCurrentUser(userId) {
    return this.firestore.collection('users', ref => ref.where('uid', '==', userId)).snapshotChanges();
  }
  createUser(user) {
    return this.ref.add(user);
  }
}
UserService.ɵfac = function UserService_Factory(t) {
  return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
};
UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserService,
  factory: UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 48632:
/*!***********************************************!*\
  !*** ./src/app/_directives/card.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDirective": () => (/* binding */ CardDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CardDirective {
  constructor(el) {
    this.el = el;
    this.class = this.el.nativeElement.classList;
  }
}
CardDirective.ɵfac = function CardDirective_Factory(t) {
  return new (t || CardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
CardDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CardDirective,
  selectors: [["", "mCard", ""]],
  hostVars: 2,
  hostBindings: function CardDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
    }
  },
  inputs: {
    options: "options"
  }
});

/***/ }),

/***/ 83688:
/*!*******************************************************!*\
  !*** ./src/app/_directives/match-height.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchHeightDirective": () => (/* binding */ MatchHeightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/* eslint-disable @angular-eslint/directive-selector */
class MatchHeightDirective {
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
    // call our matchHeight function here
    setTimeout(() => {
      this.matchHeights(this.el.nativeElement, this.matchHeight);
    }, 700);
  }
  matchHeights(parent, className) {
    if (!parent) {
      return;
    }
    // step 1: find all the child elements with the selected class name
    const children = parent.getElementsByClassName(className);
    if (!children) {
      return;
    }
    // Match hight - fix --- comment below code
    Array.from(children).forEach(x => {
      x.style.height = 'initial';
    });
    // step 2a: get all the child elements heights
    const itemHeights = Array.from(children).map(x => x.getBoundingClientRect().height);
    // step 2b: find out the tallest
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);
    // step 3: update all the child elements to the tallest height
    if (window.innerWidth > 1200) {
      Array.from(children).forEach(x => x.style.height = `${maxHeight}px`);
    } else if (window.innerWidth < 1199) {
      Array.from(children).forEach(x => x.style.height = `initial`);
    }
  }
  onResize() {
    // call our matchHeight function here
    this.matchHeights(this.el.nativeElement, this.matchHeight);
  }
}
MatchHeightDirective.ɵfac = function MatchHeightDirective_Factory(t) {
  return new (t || MatchHeightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
MatchHeightDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatchHeightDirective,
  selectors: [["", "matchHeight", ""]],
  hostBindings: function MatchHeightDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MatchHeightDirective_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    matchHeight: "matchHeight"
  }
});

/***/ }),

/***/ 71094:
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class AuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate(route, state) {
    if (localStorage.getItem('currentUser')) {
      // Logged in so return true
      return true;
    }
    // Not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac
});

/***/ }),

/***/ 30243:
/*!*********************************************!*\
  !*** ./src/app/_helpers/alert.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/alert.service */ 61585);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);



const _c0 = function (a0, a1, a2) {
  return {
    "alert": a0,
    "alert-success": a1,
    "alert-danger": a2
  };
};
function AlertComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, ctx_r0.message, ctx_r0.message.type === "success", ctx_r0.message.type === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message.text, "\n");
  }
}
class AlertComponent {
  constructor(alertService) {
    this.alertService = alertService;
  }
  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) {
  return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService));
};
AlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AlertComponent,
  selectors: [["app-alert"]],
  decls: 1,
  vars: 0,
  consts: [["!", "message", 3, "ngClass", 4, "ngIf"], ["!", "message", 3, "ngClass"]],
  template: function AlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 6, "div", 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

/***/ }),

/***/ 39126:
/*!*******************************************!*\
  !*** ./src/app/_helpers/app.constants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": () => (/* binding */ AppConstants)
/* harmony export */ });
class AppConstants {}
AppConstants.MOBILE_RESPONSIVE_WIDTH = 992;
AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL = 768;
AppConstants.NAVIGATION_TYPE_COLLAPSIBLE = 'menu-collapsible';
AppConstants.NAVIGATION_TYPE_ACCORDATION = 'menu-accordation';
AppConstants.LAYOUT_STYLE_HORIZONTAL = 'horizontal';
AppConstants.LAYOUT_STYLE_VERTICAL = 'vertical';
AppConstants.fireRefreshEventOnWindow = function () {
  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('resize', true, false);
  window.dispatchEvent(evt);
};

/***/ }),

/***/ 86196:
/*!*************************************************************!*\
  !*** ./src/app/_layout/blockui/block-template.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockTemplateComponent": () => (/* binding */ BlockTemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class BlockTemplateComponent {}
BlockTemplateComponent.ɵfac = function BlockTemplateComponent_Factory(t) {
  return new (t || BlockTemplateComponent)();
};
BlockTemplateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlockTemplateComponent,
  selectors: [["app-block-temp"]],
  decls: 5,
  vars: 1,
  consts: [[1, "block-ui-template"], ["aria-hidden", "true", 1, "feather", "ft-refresh-cw", "icon-spin", "font-medium-2"]],
  template: function BlockTemplateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div")(3, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  styles: ["[_nghost-%COMP%] {\n      text-align: center;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxrQkFBa0I7SUFDcEIiLCJmaWxlIjoiYmxvY2stdGVtcGxhdGUuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3Qge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9ibG9ja3VpL2Jsb2NrLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxrQkFBa0I7SUFDcEI7O0FBRUosZ1ZBQWdWIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3Qge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 74986:
/*!************************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




function BreadcrumbComponent_div_1_li_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", link_r2.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.name);
  }
}
function BreadcrumbComponent_div_1_li_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r2.name);
  }
}
function BreadcrumbComponent_div_1_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_li_6_a_1_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_1_li_6_span_2_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r2.isLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !link_r2.isLink);
  }
}
function BreadcrumbComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10)(4, "div", 11)(5, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreadcrumbComponent_div_1_li_6_Template, 3, 2, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.breadcrumb.mainlabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.breadcrumb.links);
  }
}
class BreadcrumbComponent {
  constructor() {}
  ngOnInit() {
    this.processBreadCrumbLinks();
  }
  processBreadCrumbLinks() {}
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
  return new (t || BreadcrumbComponent)();
};
BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BreadcrumbComponent,
  selectors: [["app-breadcrumb"]],
  inputs: {
    breadcrumb: "breadcrumb"
  },
  decls: 16,
  vars: 1,
  consts: [[1, "row"], ["class", "content-header-left col-md-6 col-12 mb-2 breadcrumb-new", 4, "ngIf"], [1, "content-header-right", "col-md-6", "col-12"], ["ngbDropdown", "", 1, "d-inline-block", "float-md-right"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-info"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1", 1, "arrow", "_dropdown_mob", "dropdown-menu-right"], [1, "dropdown-item"], [1, "dropdown-divider"], [1, "content-header-left", "col-md-6", "col-12", "mb-2", "breadcrumb-new"], [1, "content-header-title", "mb-0", "d-inline-block"], [1, "row", "breadcrumbs-top", "d-inline-block"], [1, "breadcrumb-wrapper", "col-12"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [4, "ngIf"], [3, "routerLink"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 7, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Calender");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cart");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breadcrumb);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".dropdown-menu-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto !important;\n}\n\n.dropdown-menu.arrow[_ngcontent-%COMP%]:before {\n    left: 70px !important;\n    border-bottom-color: #ffffff;\n}\n\n.dropdown-menu.arrow[_ngcontent-%COMP%]:after {\n    top: 0px;\n}\n\n@media only screen and (max-width:767px) {\n  ._dropdown_mob[_ngcontent-%COMP%] {\n      margin-left: 150px !important;\n      transform: translate(40px, 40px) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0VBQ0U7TUFDSSw2QkFBNkI7TUFDN0IsMkNBQTJDO0VBQy9DO0FBQ0YiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUtcmlnaHQge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uZHJvcGRvd24tbWVudS5hcnJvdzpiZWZvcmUge1xuICAgIGxlZnQ6IDcwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZHJvcGRvd24tbWVudS5hcnJvdzphZnRlciB7XG4gICAgdG9wOiAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAuX2Ryb3Bkb3duX21vYiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTUwcHggIWltcG9ydGFudDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsIDQwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0VBQ0U7TUFDSSw2QkFBNkI7TUFDN0IsMkNBQTJDO0VBQy9DO0FBQ0Y7O0FBRUEsdzVCQUF3NUIiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudS1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51LmFycm93OmJlZm9yZSB7XG4gICAgbGVmdDogNzBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kcm9wZG93bi1tZW51LmFycm93OmFmdGVyIHtcbiAgICB0b3A6IDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gIC5fZHJvcGRvd25fbW9iIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNTBweCAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCwgNDBweCkgIWltcG9ydGFudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61180:
/*!*********************************************************!*\
  !*** ./src/app/_layout/breadcrumb/breadcrumb.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbModule": () => (/* binding */ BreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/content/partials/general/card/card.module */ 9651);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumb.component */ 74986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);







class BreadcrumbModule {}
BreadcrumbModule.ɵfac = function BreadcrumbModule_Factory(t) {
  return new (t || BreadcrumbModule)();
};
BreadcrumbModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: BreadcrumbModule
});
BreadcrumbModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_0__.CardModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BreadcrumbModule, {
    declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, src_app_content_partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_0__.CardModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent]
  });
})();

/***/ }),

/***/ 80842:
/*!************************************************************!*\
  !*** ./src/app/_layout/customizer/customizer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerComponent": () => (/* binding */ CustomizerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/navbar.service */ 9392);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/theme-settings.service */ 43024);
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings/menu-settings.service */ 63844);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);












function CustomizerComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_ng_template_30_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.toggleFixMenu($event));
    })("ngModelChange", function CustomizerComponent_ng_template_30_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.isCollapsedMenu = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Collapsed Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 33)(6, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_30_Template_input_ngModelChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.toggleLayout("fixed"));
    })("ngModelChange", function CustomizerComponent_ng_template_30_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.isfixChecked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Fixed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 33)(10, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_30_Template_input_ngModelChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.toggleLayout("boxed"));
    })("ngModelChange", function CustomizerComponent_ng_template_30_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.isboxChecked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Boxed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 33)(14, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CustomizerComponent_ng_template_30_Template_input_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.setLayout("static", $event));
    })("ngModelChange", function CustomizerComponent_ng_template_30_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.isStaticLayout = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Static Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r1._themeSettingsConfig.menu === "collapse")("ngModel", ctx_r1.isCollapsedMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.isfixChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.isboxChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.isStaticLayout);
  }
}
function CustomizerComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "div", 33)(2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_34_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.isRightSideIcons = $event);
    })("change", function CustomizerComponent_ng_template_34_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.setNavigation("menu-icon-right", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Right Side Icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 33)(6, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_34_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.isBorderedNavigation = $event);
    })("change", function CustomizerComponent_ng_template_34_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.setNavigation("menu-bordered", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Bordered Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 33)(10, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_34_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.isFlippedNavigation = $event);
    })("change", function CustomizerComponent_ng_template_34_Template_input_change_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.setNavigation("menu-flipped", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Flipped Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 33)(14, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_34_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.isCollapsibleNavigation = $event);
    })("change", function CustomizerComponent_ng_template_34_Template_input_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.setNavigation("menu-collapsible", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Collapsible Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 33)(18, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_34_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.isStaticNavigation = $event);
    })("change", function CustomizerComponent_ng_template_34_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.setNavigation("menu-static", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Static Navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.isRightSideIcons);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.isBorderedNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.isFlippedNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.isCollapsibleNavigation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.isStaticNavigation);
  }
}
function CustomizerComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "div", 33)(2, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_ng_template_38_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.isStaticTop = $event);
    })("change", function CustomizerComponent_ng_template_38_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.setNavbar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Static Top");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.isStaticTop);
  }
}
function CustomizerComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_input_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.setColor("bg-default"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_label_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.setColor("bg-default"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 58)(7, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_input_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_label_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 58)(11, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_input_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_label_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 58)(15, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_input_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_label_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 58)(19, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_input_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_label_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r42.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 58)(23, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_input_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_label_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 58)(27, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_input_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r45.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_52_Template_label_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function CustomizerComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Solid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 58)(5, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r47.setColor("bg-blue-grey"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.setColor("bg-blue-grey"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 58)(9, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r50.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r51.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 58)(13, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r52.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r53.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 58)(17, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r55.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 58)(21, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r56.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r57.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 58)(25, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r58.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r59.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 58)(29, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r60.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r61.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 57)(33, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Gradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 58)(36, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r62.setColor("bg-gradient-x-grey-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r63.setColor("bg-gradient-x-grey-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 58)(40, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r64.setColor("bg-gradient-x-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r65.setColor("bg-gradient-x-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 58)(44, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r66.setColor("bg-gradient-x-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r67.setColor("bg-gradient-x-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 58)(48, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r68.setColor("bg-gradient-x-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r69.setColor("bg-gradient-x-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 58)(52, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r70.setColor("bg-gradient-x-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r71.setColor("bg-gradient-x-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 58)(56, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r72.setColor("bg-gradient-x-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r73.setColor("bg-gradient-x-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 58)(60, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_input_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r74.setColor("bg-gradient-x-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_56_Template_label_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r75.setColor("bg-gradient-x-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function CustomizerComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Solid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 58)(5, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r76.setColor("bg-blue-grey"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r78.setColor("bg-blue-grey"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 58)(9, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r79.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r80.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 58)(13, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r81.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r82.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 58)(17, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r83.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r84.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 58)(21, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r85.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r86.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 58)(25, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r87.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r88.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 58)(29, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r89.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r90.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 57)(33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Gradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 58)(36, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r91.setColor("bg-gradient-x-grey-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r92.setColor("bg-gradient-x-grey-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 58)(40, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r93.setColor("bg-gradient-x-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r94.setColor("bg-gradient-x-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 58)(44, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r95.setColor("bg-gradient-x-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r96.setColor("bg-gradient-x-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 58)(48, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r97.setColor("bg-gradient-x-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r98.setColor("bg-gradient-x-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 58)(52, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r99.setColor("bg-gradient-x-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r100.setColor("bg-gradient-x-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 58)(56, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r101.setColor("bg-gradient-x-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r102.setColor("bg-gradient-x-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 58)(60, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_input_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r103.setColor("bg-gradient-x-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_60_Template_label_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r77);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r104.setColor("bg-gradient-x-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function CustomizerComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 101)(1, "div", 58)(2, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_input_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r105.setColor("bg-blue-grey bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_label_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r107.setColor("bg-blue-grey bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 58)(6, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r108.setColor("bg-primary bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_label_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r109.setColor("bg-primary bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 58)(10, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r110.setColor("bg-danger bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_label_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r111.setColor("bg-danger bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 58)(14, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_input_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r112.setColor("bg-success bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_label_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r113.setColor("bg-success bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 58)(18, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_input_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r114.setColor("bg-blue bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_label_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r115.setColor("bg-blue bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 58)(22, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_input_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r116.setColor("bg-cyan bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_label_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r117.setColor("bg-cyan bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 58)(26, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_input_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r118.setColor("bg-pink bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_64_Template_label_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r106);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r119.setColor("bg-pink bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
const colors = __webpack_require__(/*! ../../../assets/data/customizer/customizerColor.json */ 45447);
class CustomizerComponent {
  constructor(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
    this._renderer = _renderer;
    this.document = document;
    this.navbarService = navbarService;
    this._themeSettingsService = _themeSettingsService;
    this._menuSettingsService = _menuSettingsService;
    this.isCollapsedMenu = false;
    this.isfixChecked = false;
    this.isboxChecked = false;
    this.isStaticLayout = false;
    this.isRightSideIcons = false;
    this.isBorderedNavigation = false;
    this.isFlippedNavigation = false;
    this.isCollapsibleNavigation = false;
    this.isStaticNavigation = false;
    this.isStaticTop = false;
    this.config = {
      wheelPropagation: false
    };
    this.collapsed = true;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeCustomizerConfig = config;
    });
    this._menuSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAllMenu)).subscribe(config => {
      this._menuCustomizerConfig = config;
    });
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
    });
  }
  toggleCustomizer(event) {
    const element = document.getElementById('customizer');
    if (element && element.classList.contains('open')) {
      this._renderer.removeClass(element, 'open');
    } else {
      this._renderer.addClass(element, 'open');
    }
  }
  setLayout(layout, e) {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    const mainMenu = document.getElementsByClassName('main-menu');
    if (layout === 'static' && e.currentTarget.checked === true) {
      this.staticLayout(e);
    } else if (layout === 'static' && e.currentTarget.checked === false) {
      this._themeSettingsConfig.layout.pattern = '';
      this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
      this._renderer.removeClass(footer, 'footer-static');
      this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
      this._renderer.addClass(document.body, 'fixed-navbar');
      this._renderer.addClass(mainMenu.item(0), 'menu-fixed');
      this.isStaticLayout = false;
    }
  }
  toggleFixMenu(e) {
    const toggleIcon = document.getElementsByClassName('toggle-icon');
    if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
      this._themeCustomizerConfig.navbar = 'collapse';
      // show the left aside menu
      this.navbarService.setFixedMenu(false);
      this.document.body.classList.remove('menu-expanded');
      this.document.body.classList.add('menu-collapsed');
      // Change switch icon
      this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-right');
      this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-left');
      this.isCollapsedMenu = true;
    } else {
      this._themeCustomizerConfig.navbar = 'expand';
      this.navbarService.setFixedMenu(true);
      this.document.body.classList.remove('menu-collapsed');
      this.document.body.classList.add('menu-expanded');
      // Change switch icon
      this._renderer.removeClass(toggleIcon.item(0), 'ft-toggle-left');
      this._renderer.addClass(toggleIcon.item(0), 'ft-toggle-right');
      this.isCollapsedMenu = false;
    }
    setTimeout(() => {
      src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
    }, 300);
    this.resetOpenMenu();
  }
  resetOpenMenu() {
    for (let i = 0; i < this._menuCustomizerConfig.vertical_menu.items.length; i++) {
      const menu = this._menuCustomizerConfig.vertical_menu.items[i];
      if (!menu.submenu) {
        menu['isOpen'] = false;
        menu['isActive'] = false;
        menu['hover'] = false;
      } else if (menu.submenu) {
        for (let j = 0; j < menu.submenu.items.length; j++) {
          menu['isOpen'] = false;
          menu['isActive'] = false;
          menu['hover'] = false;
          menu.submenu.items[j]['isOpen'] = false;
        }
      }
    }
  }
  changeNavbarFontColor($event) {
    const headerElement = document.getElementsByClassName('header-navbar');
    if ($event.nextId === 1) {
      console.log('hgdfh');
      this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
      this._renderer.removeClass(headerElement.item(0), 'navbar-light');
      this._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
      this._themeCustomizerConfig.colorTheme = 'semi-dark';
    } else if ($event.nextId === 2) {
      this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-light');
      this._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
      this._themeCustomizerConfig.colorTheme = 'semi-light';
    } else if ($event.nextId === 3) {
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-light');
      this._renderer.addClass(headerElement.item(0), 'navbar-dark');
      this._themeCustomizerConfig.colorTheme = 'dark';
    } else if ($event.nextId === 4) {
      this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
      this._renderer.addClass(headerElement.item(0), 'navbar-light');
      this._themeCustomizerConfig.colorTheme = 'light';
    }
    this._themeSettingsService.config = {
      color: ''
    };
  }
  setMenuColor(colorClass, event) {
    const darkMenuButton = document.getElementById('dark-menu');
    const lightMenuButton = document.getElementById('light-menu');
    if (event.currentTarget.className === 'btn btn-outline-info _dark') {
      this._renderer.removeClass(lightMenuButton, 'active');
      this._renderer.addClass(darkMenuButton, 'active');
    } else if (event.currentTarget.className === 'btn btn-outline-info _light') {
      this._renderer.removeClass(darkMenuButton, 'active');
      this._renderer.addClass(lightMenuButton, 'active');
    }
    this._themeSettingsService.config = {
      menuColor: colorClass // light-menu, dark-menu
    };
  }

  setNavigation(navigationClass, event) {
    const navigationElement = document.getElementById('main-menu');
    const element = document.getElementById('customizer');
    if (event.target.checked === true && navigationClass !== 'menu-collapsible') {
      this._themeSettingsService.config = {
        navigation: navigationClass
      };
      if (navigationClass === 'menu-flipped') {
        this._renderer.removeClass(element, 'open');
      } else if (navigationClass === 'menu-static') {
        this._renderer.removeClass(navigationElement, 'menu-fixed');
      }
    } else if (event.target.checked === false && navigationClass !== 'menu-collapsible') {
      this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NAVIGATION_TYPE_ACCORDATION;
      this._renderer.removeClass(navigationElement, navigationClass);
      this._renderer.removeClass(document.body, navigationClass);
      if (navigationClass === 'menu-static') {
        this._renderer.addClass(navigationElement, 'menu-fixed');
      }
    }
    if (event.target.checked === true && navigationClass === 'menu-collapsible') {
      this._themeSettingsConfig.navigation = src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.NAVIGATION_TYPE_ACCORDATION;
      this._renderer.removeClass(navigationElement, navigationClass);
    } else if (event.target.checked === false && navigationClass === 'menu-collapsible') {
      this._themeSettingsService.config = {
        navigation: navigationClass
      };
    }
    if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
      this.isRightSideIcons = true;
    } else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
      this.isRightSideIcons = false;
    }
    if (navigationClass === 'menu-bordered' && event.currentTarget.checked === true) {
      this.isBorderedNavigation = true;
    } else if (navigationClass === 'menu-bordered' && event.currentTarget.checked === false) {
      this.isBorderedNavigation = false;
    }
    if (navigationClass === 'menu-flipped' && event.currentTarget.checked === true) {
      this.isFlippedNavigation = true;
    } else if (navigationClass === 'menu-flipped' && event.currentTarget.checked === false) {
      this.isFlippedNavigation = false;
    }
    if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === true) {
      this.isCollapsibleNavigation = true;
    } else if (navigationClass === 'menu-collapsible' && event.currentTarget.checked === false) {
      this.isCollapsibleNavigation = false;
    }
    if (navigationClass === 'menu-static' && event.currentTarget.checked === true) {
      this.isStaticNavigation = true;
    } else if (navigationClass === 'menu-static' && event.currentTarget.checked === false) {
      this.isStaticNavigation = false;
    }
  }
  setNavbar(event) {
    const navbarElement = document.getElementsByClassName('header-navbar');
    const navigationElement = document.getElementById('main-menu');
    if (event.target.checked === true) {
      this._renderer.removeClass(document.body, 'fixed-navbar');
      this._renderer.removeClass(navbarElement.item(0), 'fixed-top');
      this._renderer.removeClass(navigationElement, 'menu-fixed');
      this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
      this._renderer.addClass(navigationElement, 'menu-static');
      this.isStaticTop = true;
    } else if (event.target.checked === false) {
      this._renderer.removeClass(navbarElement.item(0), 'navbar-static-top');
      this._renderer.removeClass(navigationElement, 'menu-static');
      this._renderer.addClass(document.body, 'fixed-navbar');
      this._renderer.addClass(navbarElement.item(0), 'fixed-top');
      this._renderer.addClass(navigationElement, 'menu-fixed');
      this.isStaticTop = false;
    }
  }
  setColor(colorClass) {
    for (let i = 0; i <= colors.colorArray.length; i++) {
      if (colorClass === colors.colorArray[i].cssClass) {
        this.selectColorClass = colorClass;
        break;
      }
    }
    this._themeSettingsService.config = {
      color: this.selectColorClass
    };
  }
  toggleLayout(layout) {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    if (layout === 'boxed' && this.isboxChecked === false) {
      this.boxedLayout();
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
    } else if (layout === 'boxed' && this.isboxChecked === true) {
      this._renderer.removeClass(headerNavbar.item(0), 'container');
      this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
      this._renderer.removeClass(document.body, 'boxed-layout');
      this._renderer.removeClass(document.body, 'container');
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
      this._themeSettingsConfig.layout.pattern = '';
    } else if (layout === 'fixed' && this.isfixChecked === false) {
      this.fixedLayout();
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
    } else if (layout === 'fixed' && this.isfixChecked === true) {
      this._renderer.removeClass(footer, 'fixed-bottom');
      this._themeSettingsConfig.layout.pattern = '';
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
    }
  }
  fixedLayout() {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    this._renderer.removeClass(headerNavbar.item(0), 'container');
    this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
    this._renderer.removeClass(document.body, 'boxed-layout');
    this._renderer.removeClass(document.body, 'container');
    this._renderer.addClass(footer, 'fixed-bottom');
    if (this.isStaticLayout === true) {
      this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
      this._renderer.addClass(document.body, 'fixed-navbar');
      this._renderer.removeClass(footer, 'fixed-bottom');
    }
    this.isfixChecked = true;
    this.isboxChecked = false;
    this._themeSettingsConfig.layout.pattern = 'fixed';
  }
  boxedLayout() {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    this._renderer.removeClass(footer, 'fixed-bottom');
    this._renderer.addClass(headerNavbar.item(0), 'container');
    this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
    this._renderer.addClass(headerNavbar.item(0), 'fixed-top');
    this._renderer.addClass(document.body, 'boxed-layout');
    this._renderer.addClass(document.body, 'container');
    if (this.isStaticLayout === true) {
      this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
      this._renderer.removeClass(document.body, 'fixed-navbar');
    }
    this.isboxChecked = true;
    this.isfixChecked = false;
    this._themeSettingsConfig.layout.pattern = 'boxed';
  }
  staticLayout(e) {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    const mainMenu = document.getElementsByClassName('main-menu');
    this._renderer.removeClass(document.body, 'fixed-navbar');
    this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
    this._renderer.removeClass(mainMenu.item(0), 'menu-fixed');
    this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
    this._renderer.addClass(footer, 'footer-static');
    this._renderer.removeClass(footer, 'fixed-bottom');
    this.isStaticLayout = true;
    this._themeSettingsConfig.layout.pattern = 'static';
  }
  onResize() {
    if (this.document.body.classList.contains('menu-expanded')) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
  }
}
CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) {
  return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__.MenuSettingsService));
};
CustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CustomizerComponent,
  selectors: [["app-customizer"]],
  viewQuery: function CustomizerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  hostBindings: function CustomizerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function CustomizerComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 66,
  vars: 8,
  consts: [["id", "customizer", 1, "customizer", "border-left-blue-grey", "border-left-lighten-4", "d-none", "d-xl-block"], [1, "customizer-close", 3, "click"], [1, "feather", "ft-x", "font-medium-3"], [1, "customizer-toggle", "bg-danger", "box-shadow-3", 3, "click"], [1, "feather", "ft-settings", "font-medium-3", "spinner", "white"], ["fxFlex", "auto", 1, "customizer-content", "p-2", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-0"], [1, "mt-1", "mb-1", "text-bold-500"], [1, "form-group"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "customizer-sidebar-options"], ["type", "button", "data-sidebar", "menu-light", "id", "light-menu", 1, "btn", "btn-outline-info", "_light", 3, "click"], ["type", "button", "data-sidebar", "menu-dark", "id", "dark-menu", 1, "btn", "btn-outline-info", "_dark", "active", 3, "click"], [1, "mt-1", "text-bold-500"], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "layout-options", "tabsborder"], [1, "col-lg-12", "layout_space"], [1, "ngtab"], ["ngbNav", "", 1, "nav-pills"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "color-options", "tabsborder"], [1, "mt-2", 3, "ngbNavOutlet"], ["ngbNav", "", 1, "nav-pills", 3, "navChange"], ["navColor", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", "id", "semi-dark"], ["ngbNavContent", "", "class", "px-1"], ["ngbNavLink", "", "id", "semi-light"], ["ngbNavLink", "", "id", "dark"], ["ngbNavLink", "", "id", "light"], ["role", "tabpanel", "id", "tabIcon21", "aria-expanded", "true", "aria-labelledby", "baseIcon-tab21", 1, "tab-panel", "active", "px-1", "pt-1"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "collapsed-sidebar", "id", "collapsed-sidebar", 1, "custom-control-input", 3, "checked", "ngModel", "change", "ngModelChange"], ["for", "collapsed-sidebar", 1, "custom-control-label"], ["type", "checkbox", "name", "fixed-layout", "id", "fixed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "fixed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "static-layout", "id", "static-layout", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["for", "static-layout", 1, "custom-control-label"], ["id", "tabIcon22", "aria-labelledby", "baseIcon-tab22", 1, "tab-panel", "px-1", "pt-1"], ["type", "checkbox", "name", "right-side-icons", "id", "right-side-icons", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "right-side-icons", 1, "custom-control-label"], ["type", "checkbox", "name", "bordered-navigation", "id", "bordered-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "bordered-navigation", 1, "custom-control-label"], ["type", "checkbox", "name", "flipped-navigation", "id", "flipped-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "flipped-navigation", 1, "custom-control-label"], ["type", "checkbox", "name", "collapsible-navigation", "id", "collapsible-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "collapsible-navigation", 1, "custom-control-label"], ["type", "checkbox", "name", "static-navigation", "id", "static-navigation", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "static-navigation", 1, "custom-control-label"], ["id", "tabIcon23", "aria-labelledby", "baseIcon-tab23", 1, "tab-panel", "px-1", "pt-1"], ["type", "checkbox", "name", "navbar-static-top", "id", "navbar-static-top", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "navbar-static-top", 1, "custom-control-label"], [1, "row"], [1, "col-6"], [1, "custom-control", "custom-radio", "mb-1"], ["type", "radio", "name", "nav-sdark-clr", "checked", "", "id", "opt-default", 1, "custom-control-input", "bg-default", 3, "click"], ["for", "opt-default", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "opt-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "opt-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "opt-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "opt-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "opt-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-sdark-clr", "id", "opt-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "opt-pink", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "default", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "default", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "pink", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-grey-blue", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "bg-gradient-x-grey-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "bg-gradient-x-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "bg-gradient-x-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "bg-gradient-x-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "bg-gradient-x-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "bg-gradient-x-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "bg-gradient-x-pink", 1, "custom-control-label", 3, "click"], ["id", "clrOpt4", "aria-labelledby", "color-opt-4", 1, "tab-pane"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue-grey", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "light-blue-grey", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "light-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "light-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "light-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "light-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "light-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "light-pink", 1, "custom-control-label", 3, "click"]],
  template: function CustomizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_1_listener($event) {
        return ctx.toggleCustomizer($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_3_listener($event) {
        return ctx.toggleCustomizer($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Theme Customizer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Customize & Preview in Real Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Menu Color Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_15_listener($event) {
        return ctx.setMenuColor("menu-light", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Light Menu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_17_listener($event) {
        return ctx.setMenuColor("menu-dark", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Dark Menu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Layout Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ul", 13)(23, "div", 14)(24, "div", 15)(25, "ul", 16, 17)(27, "li", 18)(28, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, CustomizerComponent_ng_template_30_Template, 17, 5, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li", 18)(32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, CustomizerComponent_ng_template_34_Template, 21, 5, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li", 18)(36, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, CustomizerComponent_ng_template_38_Template, 5, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Navigation Color Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ul", 22)(44, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 15)(47, "ul", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("navChange", function CustomizerComponent_Template_ul_navChange_47_listener($event) {
        return ctx.changeNavbarFontColor($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "li", 26)(50, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Semi Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, CustomizerComponent_ng_template_52_Template, 30, 0, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li", 26)(54, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Semi Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, CustomizerComponent_ng_template_56_Template, 63, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "li", 26)(58, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, CustomizerComponent_ng_template_60_Template, 63, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "li", 26)(62, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, CustomizerComponent_ng_template_64_Template, 29, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r4);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective],
  styles: [".tabsborder[_ngcontent-%COMP%]{\n    border-bottom: none !important;\n  }\n\n.h6[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n[_nghost-%COMP%]     .tab-content{\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]     .layout_space{\n  padding: 0%;\n}\n\n[_nghost-%COMP%]     .nav.nav-tabs.nav-underline .nav-item a.nav-link {\n  padding: 0.5rem 0rem;\n}\n[_nghost-%COMP%]     .btn-outline-info .active {\n  background: rgba(0, 0, 0, .05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFic2JvcmRlcntcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuLmg2LCBoNiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWItY29udGVudHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5sYXlvdXRfc3BhY2V7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5hdi5uYXYtdGFicy5uYXYtdW5kZXJsaW5lIC5uYXYtaXRlbSBhLm5hdi1saW5rIHtcbiAgcGFkZGluZzogMC41cmVtIDByZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0bi1vdXRsaW5lLWluZm8gLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxvNUJBQW81QiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4uaDYsIGg2IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1jb250ZW50e1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxheW91dF9zcGFjZXtcbiAgcGFkZGluZzogMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzLm5hdi11bmRlcmxpbmUgLm5hdi1pdGVtIGEubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmUtaW5mbyAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 40818:
/*!*********************************************************************************************!*\
  !*** ./src/app/_layout/customizer/horizontal-customizer/horizontal-customizer.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalCustomizerComponent": () => (/* binding */ HorizontalCustomizerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/navbar.service */ 9392);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/theme-settings.service */ 43024);
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/menu-settings.service */ 63844);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);













function HorizontalCustomizerComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function HorizontalCustomizerComponent_ng_template_30_Template_input_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.toggleFixMenu($event));
    })("ngModelChange", function HorizontalCustomizerComponent_ng_template_30_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.isCollapsedMenu = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Collapsed Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 30)(6, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HorizontalCustomizerComponent_ng_template_30_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.isfixChecked = $event);
    })("ngModelChange", function HorizontalCustomizerComponent_ng_template_30_Template_input_ngModelChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.toggleLayout("fixed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Fixed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 30)(10, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HorizontalCustomizerComponent_ng_template_30_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.isboxChecked = $event);
    })("ngModelChange", function HorizontalCustomizerComponent_ng_template_30_Template_input_ngModelChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.toggleLayout("boxed"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Boxed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 30)(14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function HorizontalCustomizerComponent_ng_template_30_Template_input_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.setLayout("static", $event));
    })("ngModelChange", function HorizontalCustomizerComponent_ng_template_30_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.isStaticLayout = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Static Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.isCollapsedMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.isfixChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.isboxChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.isStaticLayout);
  }
}
function HorizontalCustomizerComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "div", 30)(2, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HorizontalCustomizerComponent_ng_template_34_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.isRightSideIcons = $event);
    })("click", function HorizontalCustomizerComponent_ng_template_34_Template_input_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.setNavigation("navbar-icon-right", $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Right Side Icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.isRightSideIcons);
  }
}
function HorizontalCustomizerComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Solid");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 44)(5, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.setColor("bg-blue-grey"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.setColor("bg-blue-grey"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 44)(9, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.setColor("bg-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 44)(13, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.setColor("bg-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 44)(17, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.setColor("bg-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 44)(21, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.setColor("bg-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 44)(25, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r30.setColor("bg-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 44)(29, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.setColor("bg-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 43)(33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Gradient");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 44)(36, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.setColor("bg-gradient-x-grey-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.setColor("bg-gradient-x-grey-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 44)(40, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.setColor("bg-gradient-x-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.setColor("bg-gradient-x-primary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 44)(44, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.setColor("bg-gradient-x-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.setColor("bg-gradient-x-danger"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 44)(48, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.setColor("bg-gradient-x-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.setColor("bg-gradient-x-success"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 44)(52, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.setColor("bg-gradient-x-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r42.setColor("bg-gradient-x-blue"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 44)(56, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.setColor("bg-gradient-x-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.setColor("bg-gradient-x-cyan"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 44)(60, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_input_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r45.setColor("bg-gradient-x-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_47_Template_label_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.setColor("bg-gradient-x-pink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function HorizontalCustomizerComponent_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 73)(1, "div", 44)(2, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_input_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r47.setColor("bg-blue-grey bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_label_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.setColor("bg-blue-grey bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 44)(6, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_input_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r50.setColor("bg-primary bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_label_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r51.setColor("bg-primary bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 44)(10, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_input_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r52.setColor("bg-danger bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_label_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r53.setColor("bg-danger bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 44)(14, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_input_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r54.setColor("bg-success bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_label_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r55.setColor("bg-success bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 44)(18, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_input_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r56.setColor("bg-blue bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_label_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r57.setColor("bg-blue bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 44)(22, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_input_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r58.setColor("bg-cyan bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_label_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r59.setColor("bg-cyan bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Cyan");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 44)(26, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_input_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r60.setColor("bg-pink bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_ng_template_51_Template_label_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r61.setColor("bg-pink bg-lighten-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Pink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
const colors = __webpack_require__(/*! ../../../../assets/data/customizer/customizerColor.json */ 45447);
class HorizontalCustomizerComponent {
  constructor(_renderer, document, navbarService, _themeSettingsService, _menuSettingsService) {
    this._renderer = _renderer;
    this.document = document;
    this.navbarService = navbarService;
    this._themeSettingsService = _themeSettingsService;
    this._menuSettingsService = _menuSettingsService;
    this.isCollapsedMenu = false;
    this.isfixChecked = false;
    this.isboxChecked = false;
    this.isStaticLayout = false;
    this.isRightSideIcons = false;
    this.activeIdString = 'light';
    this.config = {
      wheelPropagation: false
    };
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeCustomizerConfig = config;
    });
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
    });
  }
  toggleCustomizer(event) {
    const element = document.getElementById('customizer');
    if (element && element.classList.contains('open')) {
      this._renderer.removeClass(element, 'open');
    } else {
      this._renderer.addClass(element, 'open');
    }
  }
  changeNavbarFontColor($event) {
    const headerElement = document.getElementsByClassName('top-header');
    if ($event.nextId === 1) {
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-light');
      this._renderer.removeClass(headerElement.item(0), 'navbar-shadow');
      this._renderer.addClass(headerElement.item(0), 'navbar-dark');
    } else if ($event.nextId === 2) {
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
      this._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
      this._renderer.removeClass(headerElement.item(0), 'navbar-dark');
      this._renderer.addClass(headerElement.item(0), 'navbar-light');
      this._renderer.addClass(headerElement.item(0), 'navbar-shadow');
    }
    this._themeSettingsService.config = {
      color: ''
    };
  }
  setColor(colorClass) {
    for (let i = 0; i <= colors.colorArray.length; i++) {
      if (colorClass === colors.colorArray[i].cssClass) {
        this.selectColorClass = colorClass;
        break;
      }
    }
    this._themeSettingsService.config = {
      color: this.selectColorClass
    };
  }
  setMenuColor(e) {
    const darkMenuButton = document.getElementById('dark-menu');
    const lightMenuButton = document.getElementById('light-menu');
    const menuHeaderElement = document.getElementById('menu-header');
    if (e.currentTarget.className === 'btn btn-outline-info _dark') {
      this._renderer.removeClass(lightMenuButton, 'active');
      this._renderer.removeClass(menuHeaderElement, 'navbar-light');
      this._renderer.addClass(darkMenuButton, 'active');
      this._renderer.addClass(menuHeaderElement, 'navbar-dark');
    } else if (e.currentTarget.className === 'btn btn-outline-info _light') {
      this._renderer.removeClass(menuHeaderElement, 'navbar-dark');
      this._renderer.removeClass(darkMenuButton, 'active');
      this._renderer.addClass(lightMenuButton, 'active');
      this._renderer.addClass(menuHeaderElement, 'navbar-light');
    }
    // this._themeSettingsService.config = {
    //   menuColor: colorClass, // menu-dark, menu-light
    // };
  }

  toggleFixMenu(e) {
    if (this.document.body.classList.contains('menu-expanded') && e.currentTarget.checked === true) {
      // show the left aside menu
      this.navbarService.setFixedMenu(false);
      this.document.body.classList.remove('menu-expanded');
      this.document.body.classList.add('menu-collapsed');
      // Change switch icon
      e.srcElement.classList.remove('ft-toggle-right');
      e.srcElement.classList.add('ft-toggle-left');
      this.isCollapsedMenu = true;
    } else {
      this.navbarService.setFixedMenu(true);
      this.document.body.classList.remove('menu-collapsed');
      this.document.body.classList.add('menu-expanded');
      // Change switch icon
      e.srcElement.classList.remove('ft-toggle-left');
      e.srcElement.classList.add('ft-toggle-right');
      this.isCollapsedMenu = false;
    }
  }
  setLayout(layout, e) {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    const menuHeader = document.getElementById('menu-header');
    const isSticky = document.getElementsByClassName('sticky-wrapper');
    const element = document.getElementById('sticky-wrapper');
    if (e.currentTarget.checked === true && layout === 'static') {
      // this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
      this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
      this._renderer.addClass(menuHeader, 'navbar-static');
      this._renderer.addClass(footer, 'footer-static');
      this.isStaticLayout = true;
      this._themeSettingsConfig.layout.pattern = 'static';
      element.classList.add('is-static');
      if (this.isboxChecked === false) {
        this._renderer.removeClass(footer, 'fixed-bottom');
      }
    } else {
      this._themeSettingsConfig.layout.pattern = '';
      this._renderer.removeClass(headerNavbar.item(0), 'navbar-static-top');
      this._renderer.removeClass(footer, 'footer-static');
      this._renderer.removeClass(menuHeader, 'navbar-static');
      this._renderer.removeClass(isSticky.item(0), 'is-static');
      this.isStaticLayout = false;
      if (this.isboxChecked === true) {
        this.boxedLayout();
      }
      if (this.isfixChecked === true) {
        this.fixedLayout();
      }
    }
  }
  setNavigation(navigationClass, event) {
    const navigationElement = document.getElementById('menu-header');
    if (event.target.checked === true) {
      this._themeSettingsService.config = {
        navigation: navigationClass
      };
    } else if (event.target.checked === false) {
      this._renderer.removeClass(navigationElement, navigationClass);
      this._renderer.removeClass(document.body, navigationClass);
    }
    if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === true) {
      this.isRightSideIcons = true;
    } else if (navigationClass === 'menu-icon-right' && event.currentTarget.checked === false) {
      this.isRightSideIcons = false;
    }
  }
  toggleLayout(layout) {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    const element = document.getElementById('sticky-wrapper');
    if (layout === 'boxed' && this.isboxChecked === true) {
      this.boxedLayout();
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
    } else if (layout === 'boxed' && this.isboxChecked === false) {
      this._renderer.removeClass(headerNavbar.item(0), 'container');
      this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
      this._renderer.removeClass(document.body, 'boxed-layout');
      this._renderer.removeClass(document.body, 'container');
      element.classList.remove('container');
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
      this._themeSettingsConfig.layout.pattern = '';
    } else if (layout === 'fixed' && this.isfixChecked === true) {
      this.fixedLayout();
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
    } else if (layout === 'fixed' && this.isfixChecked === false) {
      this._renderer.removeClass(footer, 'fixed-bottom');
      setTimeout(() => {
        src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
      }, 300);
      this._themeSettingsConfig.layout.pattern = '';
    }
  }
  fixedLayout() {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    const menuHeader = document.getElementById('menu-header');
    const element = document.getElementById('sticky-wrapper');
    this._renderer.addClass(footer, 'fixed-bottom');
    this._renderer.removeClass(document.body, 'boxed-layout');
    this._renderer.removeClass(headerNavbar.item(0), 'boxed-layout');
    this._renderer.removeClass(headerNavbar.item(0), 'container');
    this._renderer.removeClass(document.body, 'container');
    element.classList.remove('container');
    if (this.isStaticLayout === true) {
      this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
      this._renderer.removeClass(footer, 'fixed-bottom');
      this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
      this._renderer.addClass(menuHeader, 'navbar-static');
      this._renderer.addClass(footer, 'footer-static');
    }
    this.isfixChecked = true;
    this.isboxChecked = false;
    this._themeSettingsConfig.layout.pattern = 'fixed';
  }
  boxedLayout() {
    const footer = document.getElementById('footer');
    const headerNavbar = document.getElementsByClassName('header-navbar');
    const menuHeader = document.getElementById('menu-header');
    const element = document.getElementById('sticky-wrapper');
    this._renderer.removeClass(footer, 'fixed-bottom');
    this._renderer.addClass(headerNavbar.item(0), 'container');
    this._renderer.addClass(headerNavbar.item(0), 'boxed-layout');
    this._renderer.addClass(document.body, 'boxed-layout');
    this._renderer.addClass(document.body, 'container');
    element.classList.add('container');
    if (this.isStaticLayout === true) {
      this._renderer.removeClass(headerNavbar.item(0), 'fixed-top');
      this._renderer.addClass(headerNavbar.item(0), 'navbar-static-top');
      this._renderer.addClass(menuHeader, 'navbar-static');
      this._renderer.addClass(footer, 'footer-static');
    }
    this.isboxChecked = true;
    this.isfixChecked = false;
    this._themeSettingsConfig.layout.pattern = 'boxed';
  }
}
HorizontalCustomizerComponent.ɵfac = function HorizontalCustomizerComponent_Factory(t) {
  return new (t || HorizontalCustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__.MenuSettingsService));
};
HorizontalCustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HorizontalCustomizerComponent,
  selectors: [["app-horizontal-customizer"]],
  viewQuery: function HorizontalCustomizerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  decls: 53,
  vars: 5,
  consts: [["id", "customizer", 1, "customizer", "border-left-blue-grey", "border-left-lighten-4", "d-none", "d-xl-block"], [1, "customizer-close", 3, "routerLink", "click"], [1, "feather", "ft-x", "font-medium-3"], [1, "customizer-toggle", "bg-danger", "box-shadow-3", 3, "routerLink", "click"], [1, "feather", "ft-settings", "font-medium-3", "spinner", "white"], ["fxFlex", "auto", 1, "customizer-content", "p-2", 3, "perfectScrollbar"], [1, "text-uppercase", "mb-0"], [1, "mt-1", "mb-1", "text-bold-500"], [1, "form-group"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "customizer-sidebar-options"], ["type", "button", "data-sidebar", "navbar-light", "id", "light-menu", 1, "btn", "btn-outline-info", "_light", "active", 3, "click"], ["type", "button", "data-sidebar", "navbar-dark", "id", "dark-menu", 1, "btn", "btn-outline-info", "_dark", 3, "click"], [1, "mt-1", "text-bold-500"], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "layout-options", "tabsborder"], [1, "col-lg-12", "layout_space"], [1, "ngtab"], ["ngbNav", "", 1, "nav-pills"], ["nav", "ngbNav"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavOutlet"], [1, "nav", "nav-tabs", "nav-underline", "nav-justified", "color-options", "tabsborder"], ["ngbNav", "", 1, "nav-pills", 3, "navChange"], ["navColor", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", "id", "dark"], ["ngbNavContent", "", "class", "px-1"], ["ngbNavLink", "", "id", "light"], ["role", "tabpanel", "id", "tabIcon21", "aria-expanded", "true", "aria-labelledby", "baseIcon-tab21", 1, "tab-panel", "active", "px-1", "pt-1"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "collapsed-sidebar", "id", "collapsed-sidebar", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["for", "collapsed-sidebar", 1, "custom-control-label"], ["type", "checkbox", "name", "fixed-layout", "id", "fixed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "fixed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "boxed-layout", "id", "boxed-layout", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "boxed-layout", 1, "custom-control-label"], ["type", "checkbox", "name", "static-layout", "id", "static-layout", 1, "custom-control-input", 3, "ngModel", "change", "ngModelChange"], ["for", "static-layout", 1, "custom-control-label"], ["id", "tabIcon22", "aria-labelledby", "baseIcon-tab22", 1, "tab-panel", "px-1", "pt-1"], ["type", "checkbox", "name", "right-side-icons", "id", "right-side-icons", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "click"], ["for", "right-side-icons", 1, "custom-control-label"], [1, "row"], [1, "col-6"], [1, "custom-control", "custom-radio", "mb-1"], ["type", "radio", "name", "nav-slight-clr", "id", "default", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "default", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "pink", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-grey-blue", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "bg-gradient-x-grey-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "bg-gradient-x-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "bg-gradient-x-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "bg-gradient-x-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "bg-gradient-x-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "bg-gradient-x-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-slight-clr", "id", "bg-gradient-x-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "bg-gradient-x-pink", 1, "custom-control-label", 3, "click"], ["id", "clrOpt4", "aria-labelledby", "color-opt-4", 1, "tab-pane"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue-grey", 1, "custom-control-input", "bg-blue-grey", 3, "click"], ["for", "light-blue-grey", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-primary", 1, "custom-control-input", "bg-primary", 3, "click"], ["for", "light-primary", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-danger", 1, "custom-control-input", "bg-danger", 3, "click"], ["for", "light-danger", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-success", 1, "custom-control-input", "bg-success", 3, "click"], ["for", "light-success", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-blue", 1, "custom-control-input", "bg-blue", 3, "click"], ["for", "light-blue", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-cyan", 1, "custom-control-input", "bg-cyan", 3, "click"], ["for", "light-cyan", 1, "custom-control-label", 3, "click"], ["type", "radio", "name", "nav-light-clr", "id", "light-pink", 1, "custom-control-input", "bg-pink", 3, "click"], ["for", "light-pink", 1, "custom-control-label", 3, "click"]],
  template: function HorizontalCustomizerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_a_click_1_listener($event) {
        return ctx.toggleCustomizer($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_a_click_3_listener($event) {
        return ctx.toggleCustomizer($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Theme Customizer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Customize & Preview in Real Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Menu Color Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_button_click_15_listener($event) {
        return ctx.setMenuColor($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Light Menu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalCustomizerComponent_Template_button_click_17_listener($event) {
        return ctx.setMenuColor($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Dark Menu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Layout Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ul", 13)(23, "div", 14)(24, "div", 15)(25, "ul", 16, 17)(27, "li", 18)(28, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, HorizontalCustomizerComponent_ng_template_30_Template, 17, 4, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li", 18)(32, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, HorizontalCustomizerComponent_ng_template_34_Template, 5, 1, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "h5", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Navigation Color Options");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ul", 22)(40, "div", 14)(41, "div", 15)(42, "ul", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("navChange", function HorizontalCustomizerComponent_Template_ul_navChange_42_listener($event) {
        return ctx.changeNavbarFontColor($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li", 25)(45, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, HorizontalCustomizerComponent_ng_template_47_Template, 63, 0, "ng-template", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "li", 25)(49, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, HorizontalCustomizerComponent_ng_template_51_Template, 29, 0, "ng-template", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](26);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r3);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarDirective],
  styles: [".tabsborder[_ngcontent-%COMP%]{\n    border-bottom: none !important;\n  }\n\n.h6[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n[_nghost-%COMP%]     .tab-content{\n  padding: 1rem;\n}\n\n[_nghost-%COMP%]     .layout_space{\n  padding: 0%;\n}\n\n[_nghost-%COMP%]     .nav.nav-tabs.nav-underline .nav-item a.nav-link {\n  padding: 0.5rem 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwtY3VzdG9taXplci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0VBQ2hDOztBQUVGO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJob3Jpem9udGFsLWN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4uaDYsIGg2IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1jb250ZW50e1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxheW91dF9zcGFjZXtcbiAgcGFkZGluZzogMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmF2Lm5hdi10YWJzLm5hdi11bmRlcmxpbmUgLm5hdi1pdGVtIGEubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9jdXN0b21pemVyL2hvcml6b250YWwtY3VzdG9taXplci9ob3Jpem9udGFsLWN1c3RvbWl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtFQUNoQzs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUEsb3lCQUFveUIiLCJzb3VyY2VzQ29udGVudCI6WyIudGFic2JvcmRlcntcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuLmg2LCBoNiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50YWItY29udGVudHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5sYXlvdXRfc3BhY2V7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm5hdi5uYXYtdGFicy5uYXYtdW5kZXJsaW5lIC5uYXYtaXRlbSBhLm5hdi1saW5rIHtcbiAgcGFkZGluZzogMC41cmVtIDByZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 79007:
/*!****************************************************!*\
  !*** ./src/app/_layout/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../full-layout/full-layout.component */ 27240);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/theme-settings.service */ 43024);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);









function FooterComponent_footer_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FooterComponent_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 3)(1, "p", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Copyright \u00A9 2025 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "FORVALET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FooterComponent_footer_0_span_6_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.hideMadeWithLove);
  }
}
function FooterComponent_footer_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FooterComponent_footer_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 10)(1, "p", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Copyright \u00A9 2025 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "FORVALET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FooterComponent_footer_1_span_6_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.hideMadeWithLove);
  }
}
function FooterComponent_footer_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FooterComponent_footer_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 11)(1, "p", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Copyright \u00A9 2025 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "FORVALET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FooterComponent_footer_2_span_6_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.hideMadeWithLove);
  }
}
class FooterComponent {
  constructor(renderer, _renderer, router, _themeSettingsService) {
    this.renderer = renderer;
    this._renderer = _renderer;
    this.router = router;
    this._themeSettingsService = _themeSettingsService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.router.events.subscribe(event => {
      const footerElement = document.getElementsByClassName('footer');
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
        // Show loading indicator
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        if (this.router.url === '/email' && footerElement.item(0)) {
          this._renderer.removeClass(footerElement.item(0), 'footer-static');
          this.renderer.addClass(footerElement.item(0), 'fixed-bottom');
        } else if (footerElement.item(0)) {
          this._renderer.removeClass(footerElement.item(0), 'fixed-bottom');
          this.renderer.addClass(footerElement.item(0), 'footer-static');
        }
      }
    });
  }
  ngOnInit() {
    const isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.MOBILE_RESPONSIVE_WIDTH;
    if (this.router.url.indexOf('WithNavbar') >= 0 || this.router.url.indexOf('Advanced') >= 0 || this.router.url.indexOf('searchPage') >= 0) {
      this.showFooter = false;
      this.darkFooter = true;
      this.fixedFooter = false;
    } else if (this.router.url.indexOf('email') >= 0) {
      this.showFooter = false;
      this.darkFooter = false;
      this.fixedFooter = true;
    } else if (_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_0__.FullLayoutComponent) {
      this.showFooter = true;
      this.darkFooter = false;
      this.fixedFooter = false;
    } else {
      this.showFooter = true;
      this.darkFooter = false;
      this.fixedFooter = false;
    }
    if (isMobile) {
      this.hideMadeWithLove = true;
    }
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
    });
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSettingsService));
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 3,
  vars: 3,
  consts: [["id", "footer", "class", "footer footer-static footer-light navbar-border navbar-shadow", 4, "ngIf"], ["id", "footer", "class", "footer fixed-bottom footer-light navbar-border navbar-shadow", 4, "ngIf"], ["id", "footer", "class", "footer fixed-bottom footer-dark navbar-border navbar-shadow", 4, "ngIf"], ["id", "footer", 1, "footer", "footer-static", "footer-light", "navbar-border", "navbar-shadow"], [1, "clearfix", "blue-grey", "lighten-2", "text-sm-center", "mb-0", "px-2"], [1, "float-md-left", "d-block", "d-md-inline-block"], ["href", "", "target", "_blank", 1, "text-bold-800", "grey", "darken-2", 3, "routerLink"], ["class", "float-md-right d-block d-md-inline-block d-none d-lg-block", 4, "ngIf"], [1, "float-md-right", "d-block", "d-md-inline-block", "d-none", "d-lg-block"], ["id", "scroll-top"], ["id", "footer", 1, "footer", "fixed-bottom", "footer-light", "navbar-border", "navbar-shadow"], ["id", "footer", 1, "footer", "fixed-bottom", "footer-dark", "navbar-border", "navbar-shadow"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FooterComponent_footer_0_Template, 7, 1, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FooterComponent_footer_1_Template, 7, 1, "footer", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FooterComponent_footer_2_Template, 7, 1, "footer", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fixedFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.darkFooter);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 27240:
/*!**************************************************************!*\
  !*** ./src/app/_layout/full-layout/full-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutComponent": () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



function FullLayoutComponent_app_full_layout_navbar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-full-layout-navbar");
  }
}
function FullLayoutComponent_app_footer_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
  }
}
class FullLayoutComponent {
  constructor(renderer, router, document) {
    this.renderer = renderer;
    this.router = router;
    this.document = document;
    this.showFooter = true;
    this.showNavbar = true;
  }
  ngOnInit() {
    this.renderer.removeClass(document.body, 'vertical-overlay-menu');
    this.renderer.removeClass(document.body, 'bg-full-screen-image');
    this.renderer.removeClass(document.body, 'vertical-menu-modern');
    this.renderer.addClass(document.body, 'blank-page');
    this.renderer.addClass(document.body, 'pace-done');
    if (this.router.url.indexOf('WithNavbar') >= 0 || this.router.url.indexOf('Advanced') >= 0) {
      this.showFooter = true;
      this.showNavbar = true;
      this.renderer.addClass(document.body, 'bg-cyan');
      this.renderer.addClass(document.body, 'bg-lighten-2');
      this.renderer.addClass(document.body, 'fixed-navbar');
      this.renderer.removeClass(document.body, 'blank-page');
    } else if (this.router.url.indexOf('WithBgImage') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.addClass(document.body, 'bg-full-screen-image');
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('WithBg') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.addClass(document.body, 'bg-cyan');
      this.renderer.addClass(document.body, 'bg-lighten-2');
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('Simple') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('searchPage') >= 0) {
      this.showFooter = true;
      this.showNavbar = true;
      this.renderer.addClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('flat') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonFlat');
    } else if (this.router.url === '/others/bgImage') {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonOne');
    } else if (this.router.url.indexOf('bgVideo') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonVideo');
    } else if (this.router.url.indexOf('flat') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonFlat');
    } else if (this.router.url.indexOf('error400') >= 0 && this.router.url.indexOf('error400Withnavbar') <= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error401') >= 0 && this.router.url.indexOf('error401Withnavbar') <= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error403') >= 0 && this.router.url.indexOf('error403Withnavbar') <= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error404') >= 0 && this.router.url.indexOf('error404Withnavbar') <= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error500') >= 0 && this.router.url.indexOf('error500Withnavbar') <= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('maintenance') >= 0 || this.router.url.indexOf('recoverPassword') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('unlockUser') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'bg-cyan');
      this.renderer.removeClass(document.body, 'bg-lighten-2');
    }
  }
  rightbar(event) {
    const toggle = document.getElementById('sidenav-overlay');
    if (event.currentTarget.className === 'sidenav-overlay d-block') {
      this.renderer.removeClass(toggle, 'd-block');
      this.document.body.classList.remove('menu-open');
      this.document.body.classList.add('menu-close');
      this.renderer.addClass(toggle, 'd-none');
    } else if (event.currentTarget.className === 'sidenav-overlay d-none') {
      this.renderer.removeClass(toggle, 'd-none');
      this.document.body.classList.remove('menu-close');
      this.document.body.classList.add('menu-open');
      this.renderer.addClass(toggle, 'd-block');
    }
  }
}
FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
  return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
FullLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FullLayoutComponent,
  selectors: [["app-full-layout"]],
  decls: 4,
  vars: 2,
  consts: [[4, "ngIf"], ["id", "sidenav-overlay", 1, "sidenav-overlay", "d-none", 3, "click"]],
  template: function FullLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FullLayoutComponent_app_full_layout_navbar_0_Template, 1, 0, "app-full-layout-navbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_2_listener($event) {
        return ctx.rightbar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullLayoutComponent_app_footer_3_Template, 1, 0, "app-footer", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWxheW91dC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9mdWxsLWxheW91dC9mdWxsLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 70039:
/*!***********************************************************************************!*\
  !*** ./src/app/_layout/header/full-layout-navbar/full-layout-navbar.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullLayoutNavbarComponent": () => (/* binding */ FullLayoutNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




const _c0 = function () {
  return ["/dashboard/sales"];
};
class FullLayoutNavbarComponent {
  constructor(document) {
    this.document = document;
  }
  toggleNavbar(e) {
    const navbar = this.document.getElementById('navbar-mobile');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    } else {
      navbar.classList.add('show');
    }
  }
}
FullLayoutNavbarComponent.ɵfac = function FullLayoutNavbarComponent_Factory(t) {
  return new (t || FullLayoutNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
FullLayoutNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FullLayoutNavbarComponent,
  selectors: [["app-full-layout-navbar"]],
  decls: 24,
  vars: 4,
  consts: [[1, "header-navbar", "navbar-expand-md", "navbar", "navbar-with-menu", "navbar-without-dd-arrow", "fixed-top", "navbar-dark", "navbar-shadow"], [1, "navbar-wrapper"], [1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mobile-menu", "d-md-none", "mr-auto"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs", 3, "routerLink"], [1, "feather", "ft-menu", "font-large-1"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], ["alt", "modern admin logo", "src", "../../../../assets/images/logo/logo.png", 1, "brand-logo"], [1, "brand-text"], [1, "nav-item", "d-md-none"], ["data-toggle", "collapse", "data-target", "#navbar-mobile", 1, "nav-link", "open-navbar-container", 3, "click"], [1, "la", "la-ellipsis-v"], [1, "navbar-container"], ["id", "navbar-mobile", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "nav", "navbar-nav"], [1, "nav-link", "mr-2", "nav-link-label", 3, "routerLink"], [1, "ficon", "feather", "ft-arrow-left"], [1, "dropdown", "nav-item"], ["data-toggle", "dropdown", 1, "nav-link", "mr-2", "nav-link-label", 3, "routerLink"], [1, "ficon", "feather", "ft-settings"]],
  template: function FullLayoutNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Modern ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11)(13, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutNavbarComponent_Template_a_click_13_listener($event) {
        return ctx.toggleNavbar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14)(16, "div", 15)(17, "ul", 16)(18, "li", 7)(19, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 19)(22, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["@media (min-width: 767.98px) {\n    .collapse[_ngcontent-%COMP%]:not(.show) {\n        display: flex !important;\n    }\n}\n\n@media (min-width: 767.98px) {\n    .justify-content-end[_ngcontent-%COMP%] {\n        display: flex !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwtbGF5b3V0LW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoiZnVsbC1sYXlvdXQtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9oZWFkZXIvZnVsbC1sYXlvdXQtbmF2YmFyL2Z1bGwtbGF5b3V0LW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUEsZ25CQUFnbkIiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY3Ljk4cHgpIHtcbiAgICAuY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjcuOThweCkge1xuICAgIC5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 56075:
/*!****************************************************!*\
  !*** ./src/app/_layout/header/header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/app.constants */ 39126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/theme-settings.service */ 43024);
/* harmony import */ var _services_device_detector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/device-detector.service */ 57104);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 71376);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical/vertical.component */ 18283);










function HeaderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header-vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function HeaderComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function HeaderComponent_ng_container_1_Template_ng_container_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onResize($event));
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
class HeaderComponent {
  constructor(_renderer, document, _themeSettingsService, deviceService) {
    this._renderer = _renderer;
    this.document = document;
    this._themeSettingsService = _themeSettingsService;
    this.deviceService = deviceService;
    this.isMobile = false;
    this.selectedColorClass = '';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    const self = this;
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
      if (config.layout && config.layout.style && config.layout.style === 'vertical') {
        self.layout = 'vertical';
      } else {
        self.layout = 'horizontal';
      }
      this.refreshView();
    });
  }
  refreshView() {
    const self = this;
    const headerElement = document.getElementsByClassName('header-navbar');
    if (headerElement.item(0)) {
      let currentHeaderClassList = [];
      const navbar = this.document.getElementById('navbar-mobile');
      // Layout
      if (self._themeSettingsConfig.layout.style === 'horizontal') {
        currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu', 'navbar-without-dd-arrow', 'navbar-static-top'];
        const topHeaderElement = document.getElementById('top-header');
        if (window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
          currentHeaderClassList.push('fixed-top');
          this._renderer.removeClass(topHeaderElement, 'navbar-brand-center');
          navbar.classList.remove('show');
        } else {
          currentHeaderClassList.push('navbar-brand-center');
          this._renderer.removeClass(topHeaderElement, 'fixed-top');
          navbar.classList.add('show');
        }
      } else {
        currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu', 'navbar-without-dd-arrow', 'fixed-top', 'navbar-shadow'];
        if (self._themeSettingsConfig.colorTheme === 'semi-light' && self._themeSettingsConfig.layout.style === 'vertical') {
          if (self._themeSettingsConfig.layout.style === 'vertical') {
            // currentHeaderClassList.push('bg-info');
          }
          self._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-light');
        } else if (self._themeSettingsConfig.colorTheme === 'semi-dark' && self._themeSettingsConfig.layout.style === 'vertical') {
          self._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
          // self._renderer.removeClass(headerElement.item(0), 'bg-info');
        } else if (self._themeSettingsConfig.colorTheme === 'dark' && self._themeSettingsConfig.layout.style === 'vertical') {
          self._renderer.addClass(headerElement.item(0), 'navbar-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
          // self._renderer.removeClass(headerElement.item(0), 'bg-info');
        } else if (self._themeSettingsConfig.colorTheme === 'light' && self._themeSettingsConfig.layout.style === 'vertical') {
          self._renderer.addClass(headerElement.item(0), 'navbar-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
          // self._renderer.removeClass(headerElement.item(0), 'bg-info');
        }
      }

      currentHeaderClassList.forEach(function (c) {
        self._renderer.addClass(headerElement.item(0), c);
      });
    }
  }
  ngAfterViewInit() {
    this.refreshView();
  }
  onResize(event) {
    if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.refreshView();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_device_detector_service__WEBPACK_IMPORTED_MODULE_2__.DeviceDetectorService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    }
  },
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "resize", 4, "ngIf"], [3, "resize"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HeaderComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HeaderComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.layout === "vertical");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_4__.VerticalComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 71376:
/*!*******************************************************************!*\
  !*** ./src/app/_layout/header/horizontal/horizontal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalComponent": () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/navbar.service */ 9392);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ 88368);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/menu-settings.service */ 63844);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/theme-settings.service */ 43024);
/* harmony import */ var _services_device_detector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/device-detector.service */ 57104);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);















function HorizontalComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontalComponent_a_22_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.toggleFullScreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HorizontalComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontalComponent_a_24_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.clickSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HorizontalComponent_li_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 48)(1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 50)(3, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 52)(5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " French ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Chinese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " German ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function HorizontalComponent_li_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 56)(1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 60)(6, "li", 61)(7, "h6", 62)(8, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "5 New");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 65)(13, "a", 66)(14, "div", 67)(15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 70)(18, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "You have new order!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Lorem ipsum dolor sit amet, consectetuer elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "small")(23, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "30 minutes ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 66)(26, "div", 67)(27, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 70)(30, "h6", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "99% Server load");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Aliquam tincidunt mauris eu risus.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "small")(35, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Five hour ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 66)(38, "div", 67)(39, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 70)(42, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Warning notifixation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Vestibulum auctor dapibus neque.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "small")(47, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "a", 66)(50, "div", 67)(51, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 70)(54, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Complete the task");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "small")(57, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Last week");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "a", 66)(60, "div", 67)(61, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 70)(64, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Generate monthly report");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "small")(67, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Last month");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "li", 80)(70, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Read all notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("perfectScrollbar", ctx_r3.config);
  }
}
function HorizontalComponent_li_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 82)(1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ul", 60)(4, "li", 61)(5, "h6", 62)(6, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "4 New");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "li", 65)(11, "a", 66)(12, "div", 67)(13, "div", 85)(14, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 87)(16, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 70)(18, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Margaret Govan");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "I like your portfolio, let's start.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "small")(23, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 66)(26, "div", 67)(27, "div", 85)(28, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "img", 89)(30, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 70)(32, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Bret Lezama");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "I have seen your work, there is");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "small")(37, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Tuesday");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "a", 66)(40, "div", 67)(41, "div", 85)(42, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "img", 90)(44, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 70)(46, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Carie Berra");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Can we have call in this week ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "small")(51, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Friday");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "a", 66)(54, "div", 91)(55, "div", 85)(56, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 93)(58, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 70)(60, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Eric Alsobrook");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "We have project party this saturday.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "small")(65, "time", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "last month");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "li", 80)(68, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Read all messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("perfectScrollbar", ctx_r4.config);
  }
}
function HorizontalComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.currentUser.displayName);
  }
}
function HorizontalComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "John Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HorizontalComponent_img_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 95);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r7.currentUser.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function HorizontalComponent_img_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 87);
  }
}
const _c0 = function () {
  return ["/dashboard/sales"];
};
const _c1 = function (a0) {
  return {
    "open": a0
  };
};
const _c2 = function () {
  return ["/user/user-profile"];
};
const _c3 = function () {
  return ["/email"];
};
const _c4 = function () {
  return ["/todos"];
};
const _c5 = function () {
  return ["/chats"];
};
const docElmWithBrowsersFullScreenFunctions = document.documentElement;
const docWithBrowsersExitFunctions = document;
class HorizontalComponent {
  constructor(document, _renderer, renderer, navbarService, authService, router, _menuSettingsService, _themeSettingsService, deviceService) {
    this.document = document;
    this._renderer = _renderer;
    this.renderer = renderer;
    this.navbarService = navbarService;
    this.authService = authService;
    this.router = router;
    this._menuSettingsService = _menuSettingsService;
    this._themeSettingsService = _themeSettingsService;
    this.deviceService = deviceService;
    this.placement = 'bottom-right';
    this.config = {
      wheelPropagation: false
    };
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  ngOnInit() {
    const _self = this;
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
      this.refreshView();
    });
    this._menuSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._menuSettingsConfig = config;
    });
    const isMobile = this.deviceService.isMobile();
    this.handleBody(isMobile);
    this.maximize = this._themeSettingsConfig.headerIcons.maximize;
    this.search = this._themeSettingsConfig.headerIcons.search;
    this.internationalization = this._themeSettingsConfig.headerIcons.internationalization;
    this.notification = this._themeSettingsConfig.headerIcons.notification;
    this.email = this._themeSettingsConfig.headerIcons.email;
  }
  ngAfterViewInit() {
    this.refreshView();
  }
  handleBody(isMobile) {
    const _self = this;
    let currentBodyClassList = [];
    if (window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL && this._themeSettingsConfig.layout.style === 'horizontal') {
      currentBodyClassList = ['horizontal-layout', '2-columns', 'vertical-overlay-menu', 'menu-hide'];
      currentBodyClassList.push('fixed-navbar');
    }
    currentBodyClassList.forEach(function (c) {
      _self.renderer.addClass(document.body, c);
    });
  }
  logout() {
    if (localStorage.getItem('currentUser')) {
      this.authService.doLogout().then(res => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
      });
    }
  }
  refreshView() {
    const topHeaderElement = document.getElementsByClassName('top-header');
    const menuColorElement = document.getElementsByClassName('menu-header');
    const navigationElement = document.getElementsByClassName('menu-header');
    if (topHeaderElement) {
      if (this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(topHeaderElement.item(0), 'navbar-dark');
        this._renderer.addClass(topHeaderElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.addClass(topHeaderElement.item(0), 'navbar-dark');
        this._renderer.removeClass(topHeaderElement.item(0), 'navbar-light');
      }
    }
    if (this._themeSettingsConfig.layout.style === 'horizontal') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
    } else if (this._themeSettingsConfig.layout.style === 'horizontal') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
    }
    if (navigationElement) {
      if (this._themeSettingsConfig.navigation === 'navbar-icon-right') {
        this._renderer.addClass(navigationElement.item(0), 'navbar-icon-right');
      }
    }
    if (menuColorElement) {
      if (this._themeSettingsConfig.menuColor === 'navbar-dark') {
        this._renderer.removeClass(menuColorElement.item(0), 'navbar-light');
        this._renderer.addClass(menuColorElement.item(0), 'navbar-dark');
      } else if (this._themeSettingsConfig.menuColor === 'navbar-light') {
        this._renderer.removeClass(menuColorElement.item(0), 'navbar-dark');
        this._renderer.addClass(menuColorElement.item(0), 'navbar-light');
      }
    }
  }
  toggleFixMenu(e) {
    if (this.document.body.classList.contains('menu-expanded')) {
      // show the left aside menu
      this.document.body.classList.remove('menu-expanded');
      this.document.body.classList.add('menu-collapsed');
    } else {
      this.document.body.classList.remove('menu-collapsed');
      this.document.body.classList.add('menu-expanded');
    }
  }
  toggleNavbar(e) {
    const navbar = this.document.getElementById('navbar-mobile');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    } else {
      navbar.classList.add('show');
    }
  }
  toggleNavigation(e) {
    const sidenav = document.getElementById('sidenav-overlay');
    const sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') || document.getElementById('sidebar-todo');
    const contentOverlay = document.getElementById('content-overlay');
    const navbar = this.document.getElementById('navbar-mobile');
    if (this.document.body.classList.contains('menu-hide')) {
      this.document.body.classList.remove('menu-hide');
      this._renderer.removeClass(sidenav, 'd-none');
      this._renderer.addClass(sidenav, 'd-block');
      this.document.body.classList.remove('menu-close');
      this.document.body.classList.add('menu-open');
      this.document.body.classList.add('menu-expanded');
      navbar.classList.remove('show');
    } else if (!this.document.body.classList.contains('menu-hide') && !this.document.body.classList.contains('menu-open')) {
      this.document.body.classList.add('menu-open');
      this._renderer.addClass(sidenav, 'd-block');
      this._renderer.removeClass(sidenav, 'd-none');
    } else {
      this._renderer.removeClass(sidenav, 'd-block');
      this.document.body.classList.remove('menu-open');
      this.document.body.classList.add('menu-hide');
      this._renderer.addClass(sidenav, 'd-none');
      navbar.classList.remove('show');
    }
    if (sidebarLeft) {
      this._renderer.removeClass(sidebarLeft, 'show');
      this._renderer.removeClass(contentOverlay, 'show');
    }
  }
  toggleFullScreen() {
    const toggleIcon = document.getElementsByClassName('ficon');
    if (toggleIcon.item(0).classList.contains('ft-maximize')) {
      this.openfullscreen();
      this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
      this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
    } else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
      this.closefullscreen();
      this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
      this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
    }
  }
  openfullscreen() {
    // Trigger fullscreen
    // eslint-disable-next-line no-shadow,@typescript-eslint/no-shadow
    const docElmWithBrowsersFullScreenFunctions = document.documentElement;
    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) {
      /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) {
      /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
  }
  closefullscreen() {
    // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
    const docWithBrowsersExitFunctions = document;
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
      /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) {
      /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
  }
  onResize(event) {
    const sidenav = document.getElementById('sidenav-overlay');
    if (event.target.innerWidth <= 767) {
      this.document.body.classList.add('vertical-overlay-menu');
      this._renderer.removeClass(sidenav, 'd-block');
      this._renderer.addClass(sidenav, 'd-none');
    }
  }
  clickSearch() {
    if (this.isHeaderSearchOpen) {
      this.isHeaderSearchOpen = false;
    } else {
      this.isHeaderSearchOpen = true;
    }
  }
}
HorizontalComponent.ɵfac = function HorizontalComponent_Factory(t) {
  return new (t || HorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__.MenuSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_4__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_device_detector_service__WEBPACK_IMPORTED_MODULE_5__.DeviceDetectorService));
};
HorizontalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HorizontalComponent,
  selectors: [["app-header-horizontal"]],
  viewQuery: function HorizontalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  hostBindings: function HorizontalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function HorizontalComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    }
  },
  decls: 56,
  vars: 24,
  consts: [["id", "top-header", 1, "top-header", "header-navbar", "navbar-expand-md", "navbar", "navbar-with-menu", "navbar-without-dd-arrow", "navbar-static-top", "navbar-light", "navbar-brand-center", 3, "ngClass"], [1, "navbar-wrapper"], ["id", "navbar-header", 1, "navbar-header"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mobile-menu", "d-md-none", "mr-auto"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs11", 3, "click"], [1, "feather", "ft-menu", "font-large-1"], [1, "nav-item"], [1, "navbar-brand", 3, "routerLink"], ["alt", "modern admin logo", "src", "../../../../assets/images/logo/logo.png", 1, "brand-logo"], [1, "brand-text"], [1, "nav-item", "d-md-none"], ["data-toggle", "collapse", "data-target", "#navbar-mobile", 1, "nav-link", "open-navbar-container", 3, "click"], [1, "la", "la-ellipsis-v"], [1, "navbar-container", "content"], ["id", "navbar-mobile", 1, "collapse", "navbar-collapse", "show"], [1, "nav", "navbar-nav", "mr-auto", "float-left"], [1, "nav-item", "d-none", "d-md-block"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs", 3, "routerLink", "click"], [1, "feather", "ft-menu"], ["class", "nav-link nav-link-expand", 3, "routerLink", "click", 4, "ngIf"], [1, "nav-item", "nav-search"], ["class", "nav-link nav-link-search", 3, "routerLink", "click", 4, "ngIf"], [1, "search-input", 3, "ngClass"], ["type", "text", "placeholder", "Explore Modern...", 1, "input"], [1, "nav", "navbar-nav", "float-right"], ["class", "dropdown-language nav-item", "ngbDropdown", "", 4, "ngIf"], ["class", "dropdown-notification nav-item dropdown", "ngbDropdown", "", 4, "ngIf"], ["class", "dropdown-notification nav-item", "ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown-user", "nav-item"], ["ngbDropdownToggle", "", 1, "nav-link", "dropdown-user-link"], ["class", "mr-1 user-name text-bold-700", 4, "ngIf"], [1, "avatar", "avatar-online"], ["alt", "avatar", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar", 4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownProfileMenu", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "feather", "ft-user"], [1, "feather", "ft-mail"], [1, "feather", "ft-check-square"], [1, "feather", "ft-message-square"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "feather", "ft-power"], [1, "nav-link", "nav-link-expand", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-maximize"], [1, "nav-link", "nav-link-search", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-search"], ["ngbDropdown", "", 1, "dropdown-language", "nav-item"], ["ngbDropdownToggle", "", "id", "dropdown-flag", 1, "dropdown-toggle", "nav-link", 3, "routerLink"], [1, "flag-icon", "flag-icon-gb"], [1, "selected-language"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownLangMenu", 1, "dropdown-menu"], [1, "flag-icon", "flag-icon-fr"], [1, "flag-icon", "flag-icon-cn"], [1, "flag-icon", "flag-icon-de"], ["ngbDropdown", "", 1, "dropdown-notification", "nav-item", "dropdown"], ["ngbDropdownToggle", "", 1, "nav-link", "nav-link-label"], [1, "ficon", "feather", "ft-bell"], [1, "badge", "badge-pill", "badge-danger", "badge-up", "badge-glow"], ["ngbDropdownMenu", "", 1, "dropdown-menu-media", "dropdown-menu-right"], [1, "dropdown-menu-header"], [1, "dropdown-header", "m-0"], [1, "grey", "darken-2"], [1, "notification-tag", "badge", "badge-default", "badge-danger", "float-right", "m-0"], ["fxFlex", "auto", 1, "scrollable-container", "media-list", "w-100", "ps-container", "ps-theme-dark", "ps-active-y", 3, "perfectScrollbar"], ["href", "javascript:void(0)"], [1, "media"], [1, "media-left", "align-self-center"], [1, "feather", "ft-plus-square", "icon-bg-circle", "bg-cyan"], [1, "media-body"], [1, "media-heading"], [1, "notification-text", "font-small-3", "text-muted"], ["datetime", "2015-06-11T18:29:20+08:00", 1, "media-meta", "text-muted"], [1, "feather", "ft-download-cloud", "icon-bg-circle", "bg-red", "bg-darken-1"], [1, "media-heading", "red", "darken-1"], [1, "feather", "ft-alert-triangle", "icon-bg-circle", "bg-yellow", "bg-darken-3"], [1, "media-heading", "yellow", "darken-3"], [1, "feather", "ft-check-circle", "icon-bg-circle", "bg-cyan"], [1, "feather", "ft-file", "icon-bg-circle", "bg-teal"], [1, "dropdown-menu-footer"], ["href", "javascript:void(0)", 1, "dropdown-item", "text-muted", "text-center"], ["ngbDropdown", "", 1, "dropdown-notification", "nav-item"], [1, "ficon", "feather", "ft-mail"], [1, "notification-tag", "badge", "badge-default", "badge-warning", "float-right", "m-0"], [1, "media-left"], [1, "avatar", "avatar-sm", "avatar-online", "rounded-circle"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "alt", "avatar"], [1, "avatar", "avatar-sm", "avatar-busy", "rounded-circle"], ["src", "../../../../assets/images/portrait/small/avatar-s-2.png", "alt", "avatar"], ["src", "../../../../assets/images/portrait/small/avatar-s-3.png", "alt", "avatar"], [1, "media", "border_bottom"], [1, "avatar", "avatar-sm", "avatar-away", "rounded-circle"], ["src", "../../../../assets/images/portrait/small/avatar-s-6.png", "alt", "avatar"], [1, "mr-1", "user-name", "text-bold-700"], ["alt", "avatar", 3, "src"]],
  template: function HorizontalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3)(4, "li", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_5_listener($event) {
        return ctx.toggleNavigation($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li", 11)(13, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_13_listener($event) {
        return ctx.toggleNavbar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 14)(16, "div", 15)(17, "ul", 16)(18, "li", 17)(19, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_19_listener($event) {
        return ctx.toggleFixMenu($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, HorizontalComponent_a_22_Template, 2, 0, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, HorizontalComponent_a_24_Template, 2, 0, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ul", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, HorizontalComponent_li_28_Template, 17, 0, "li", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, HorizontalComponent_li_29_Template, 72, 1, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, HorizontalComponent_li_30_Template, 70, 1, "li", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "li", 29)(32, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, HorizontalComponent_span_33_Template, 2, 1, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, HorizontalComponent_span_34_Template, 2, 0, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, HorizontalComponent_img_36_Template, 1, 1, "img", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, HorizontalComponent_img_37_Template, 1, 0, "img", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 35)(40, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Edit Profile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " My Inbox ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, " Task ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, " Chats ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontalComponent_Template_a_click_53_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](54, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, " Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.selectedHeaderNavBarClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](17, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx._themeSettingsConfig.brand.brand_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.maximize === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.search === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](18, _c1, ctx.isHeaderSearchOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.internationalization === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.notification === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.email === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentUser.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.currentUser.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentUser.photoURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.currentUser.photoURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c5));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective],
  styles: ["@media (max-width: 767.98px) {\n    .header-navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n        width: 100% !important;\n        top: 3px;\n    }\n}\n\n.dropdown-menu-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto !important;\n  top: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFFBQVE7SUFDWjtBQUNKOztBQUVBO0VBQ0UsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoiaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmhlYWRlci1uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDNweDtcbiAgICB9XG59XG5cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9oZWFkZXIvaG9yaXpvbnRhbC9ob3Jpem9udGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixRQUFRO0lBQ1o7QUFDSjs7QUFFQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBLHdvQkFBd29CIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgLmhlYWRlci1uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDNweDtcbiAgICB9XG59XG5cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 18283:
/*!***************************************************************!*\
  !*** ./src/app/_layout/header/vertical/vertical.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalComponent": () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/navbar.service */ 9392);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/theme-settings.service */ 43024);
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/menu-settings.service */ 63844);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ 88368);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);













function VerticalComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalComponent_a_22_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.toggleFullScreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function VerticalComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalComponent_a_24_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.clickSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function VerticalComponent_li_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 40)(1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 42)(3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 44)(5, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " French ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Chinese ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " German ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function VerticalComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "ADM\u0130N");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function VerticalComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "ADM\u0130N");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/dashboard"];
};
const _c1 = function (a0, a1) {
  return {
    "ft-toggle-left": a0,
    "ft-toggle-right": a1
  };
};
const _c2 = function (a0) {
  return {
    "open": a0
  };
};
const docElmWithBrowsersFullScreenFunctions = document.documentElement;
const docWithBrowsersExitFunctions = document;
class VerticalComponent {
  constructor(document, _renderer, navbarService, _themeSettingsService, _menuSettingsService, authService, router, elementRef) {
    this.document = document;
    this._renderer = _renderer;
    this.navbarService = navbarService;
    this._themeSettingsService = _themeSettingsService;
    this._menuSettingsService = _menuSettingsService;
    this.authService = authService;
    this.router = router;
    this.elementRef = elementRef;
    this.isMobile = false;
    this.showNavbar = false;
    this.config = {
      wheelPropagation: false
    };
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  logout() {
    if (localStorage.getItem('currentUser')) {
      this.authService.doLogout().then(res => {
        window.location.href = '/login';
      }, err => {
        console.log(err);
      });
    }
  }
  ngOnInit() {
    this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH;
    if (!this.isMobile) {
      this.showNavbar = true;
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
      this.refreshView();
    });
    this._menuSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._menuSettingsConfig = config;
    });
    this.maximize = this._themeSettingsConfig.headerIcons.maximize;
    this.search = this._themeSettingsConfig.headerIcons.search;
    this.internationalization = this._themeSettingsConfig.headerIcons.internationalization;
    this.notification = this._themeSettingsConfig.headerIcons.notification;
    this.email = this._themeSettingsConfig.headerIcons.email;
  }
  ngAfterViewInit() {
    this.refreshView();
  }
  refreshView() {
    const iconElement = document.getElementsByClassName('toggle-icon');
    const menuColorElement = document.getElementsByClassName('main-menu');
    const navigationElement = document.getElementsByClassName('main-menu');
    const navbarElement = document.getElementsByClassName('header-navbar');
    const themeColorElement = document.getElementsByClassName('header-navbar');
    const element = document.getElementsByClassName('navbar-header');
    const boxelement = document.getElementById('customizer');
    if (iconElement) {
      if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(iconElement.item(0), 'white');
        this._renderer.addClass(iconElement.item(0), 'blue-grey');
        this._renderer.addClass(iconElement.item(0), 'darken-3');
      } else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.addClass(iconElement.item(0), 'white');
        this._renderer.removeClass(iconElement.item(0), 'blue-grey');
        this._renderer.removeClass(iconElement.item(0), 'darken-3');
      }
    }
    if (this._themeSettingsConfig.colorTheme === 'semi-light') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
      this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
      this.selectedHeaderNavBarClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'dark') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'light') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
    }
    if (menuColorElement) {
      if (this._themeSettingsConfig.menuColor === 'menu-dark') {
        this._renderer.removeClass(menuColorElement.item(0), 'menu-light');
        this._renderer.addClass(menuColorElement.item(0), 'menu-dark');
      } else if (this._themeSettingsConfig.menuColor === 'menu-light') {
        this._renderer.removeClass(menuColorElement.item(0), 'menu-dark');
        this._renderer.addClass(menuColorElement.item(0), 'menu-light');
      }
    }
    if (themeColorElement) {
      if (this._themeSettingsConfig.colorTheme === 'semi-light') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-semi-light');
      }
    }
    if (navigationElement) {
      if (this._themeSettingsConfig.navigation === 'menu-native-scroll') {
        this._renderer.addClass(navigationElement.item(0), 'menu-native-scroll');
      } else if (this._themeSettingsConfig.navigation === 'menu-icon-right') {
        this._renderer.addClass(navigationElement.item(0), 'menu-icon-right');
      } else if (this._themeSettingsConfig.navigation === 'menu-bordered') {
        this._renderer.addClass(navigationElement.item(0), 'menu-bordered');
      } else if (this._themeSettingsConfig.navigation === 'menu-flipped') {
        this._renderer.addClass(document.body, 'menu-flipped');
      } else if (this._themeSettingsConfig.navigation === 'menu-collapsible') {
        this._renderer.addClass(navigationElement.item(0), 'menu-collapsible');
      } else if (this._themeSettingsConfig.navigation === 'menu-static') {
        this._renderer.addClass(navigationElement.item(0), 'menu-static');
      }
    }
    if (navbarElement) {
      if (this._themeSettingsConfig.menu === 'navbar-static-top') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
        this._renderer.addClass(navigationElement.item(0), 'menu-static');
      }
    }
    if (navbarElement) {
      if (this._themeSettingsConfig.menu === 'semi-light') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-semi-light bg-gradient-x-grey-blue');
      } else if (this._themeSettingsConfig.menu === 'semi-dark') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-semi-dark');
      } else if (this._themeSettingsConfig.menu === 'dark') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-dark');
      } else if (this._themeSettingsConfig.menu === 'light') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-light');
      }
    }
  }
  resetOpenMenu() {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      const menu = this._menuSettingsConfig.vertical_menu.items[i];
      if (!menu.submenu) {
        menu['isOpen'] = false;
        menu['isActive'] = false;
        menu['hover'] = false;
      } else if (menu.submenu) {
        for (let j = 0; j < menu.submenu.items.length; j++) {
          menu['isOpen'] = false;
          menu['isActive'] = false;
          menu['hover'] = false;
          menu.submenu.items[j]['isOpen'] = false;
        }
      }
    }
  }
  setOpenInNavbar(value) {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      const menu = this._menuSettingsConfig.vertical_menu.items[i];
      if (!menu.submenu && menu.page === this.router.url) {
        menu['isOpen'] = value;
        menu['isActive'] = value;
      } else if (menu.submenu) {
        for (let j = 0; j < menu.submenu.items.length; j++) {
          if (menu.submenu.items[j].page === this.router.url) {
            menu['isOpen'] = value;
            menu['isActive'] = value;
            menu.submenu.items[j]['isOpen'] = value;
            menu.submenu.items[j]['isActive'] = value;
            break;
          }
        }
      }
    }
  }
  /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
  mouseEnter(e) {
    if (this.navbarService.isFixedMenu()) {
      return;
    }
    this.navbarService.setMouseInRegion(true);
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');
    // check if the left aside menu is fixed
    if (!navBar.classList.contains('expanded')) {
      this._renderer.addClass(navBar, 'expanded');
      this._renderer.addClass(mainMenu, 'expanded');
      this.resetOpenMenu();
      this.setOpenInNavbar(true);
    }
  }
  /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
  mouseLeave(event) {
    if (this.navbarService.isFixedMenu()) {
      return;
    }
    const _self = this;
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');
    if (navBar && navBar.classList.contains('expanded')) {
      this.insideTm = setTimeout(() => {
        if (!_self.navbarService.isMouseInRegion()) {
          this._renderer.removeClass(navBar, 'expanded');
          this._renderer.removeClass(mainMenu, 'expanded');
          this.resetOpenMenu();
          this.setOpenInNavbar(false);
        }
      }, 100);
    }
    this.navbarService.setMouseInRegion(false);
  }
  // example to update badge value dynamically from another component
  updateMenuBadgeValue() {
    for (let i = 0; i < this._menuSettingsConfig.items.length; i++) {
      if (this._menuSettingsConfig.items[i].badge) {
        this._menuSettingsConfig.items[i].badge.value = 19;
      }
    }
    this._menuSettingsService.config = this._menuSettingsConfig;
  }
  handleCollapseOfMenu(element) {
    if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
      element.classList.remove('open');
      element.classList.remove('hover');
      element.classList.add('menu-collapsed-open');
    }
  }
  handleExpandOfMenu(element) {
    if (element.classList && element.classList.contains('has-sub') && element.classList.contains('menu-collapsed-open')) {
      element.classList.remove('menu-collapsed-open');
      element.classList.add('open');
      element.classList.add('hover');
    }
  }
  toggleMenu(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const parent = target.parentElement;
    if (parent && parent.classList.contains('has-sub')) {
      this.openSubMenuUsingParent(parent);
    } else {
      const parentOfParent = parent.parentElement;
      this.openSubMenuUsingParent(parentOfParent);
    }
  }
  openSubMenuUsingParent(parent) {
    if (parent.classList && parent.classList.contains('has-sub') && !parent.classList.contains('open')) {
      parent.classList.add('open');
    } else if (parent.classList && parent.classList.contains('has-sub') && parent.classList.contains('open')) {
      parent.classList.remove('open');
    }
  }
  toggleFullScreen() {
    const toggleIcon = document.getElementsByClassName('ficon');
    if (toggleIcon.item(0).classList.contains('ft-maximize')) {
      this.openfullscreen();
      this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
      this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
    } else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
      this.closefullscreen();
      this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
      this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
    }
  }
  openfullscreen() {
    // Trigger fullscreen
    // eslint-disable-next-line no-shadow,@typescript-eslint/no-shadow
    const docElmWithBrowsersFullScreenFunctions = document.documentElement;
    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) {
      /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) {
      /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
  }
  closefullscreen() {
    // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
    const docWithBrowsersExitFunctions = document;
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
      /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) {
      /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
  }
  toggleFixMenu(e) {
    if (this.document.body.classList.contains('menu-expanded')) {
      // show the left aside menu
      this.navbarService.setFixedMenu(false);
      this.document.body.classList.remove('menu-expanded');
      this.document.body.classList.add('menu-collapsed');
      // Change switch icon
      this._themeSettingsConfig.menu = 'collapse';
    } else {
      this.navbarService.setFixedMenu(true);
      this.document.body.classList.remove('menu-collapsed');
      this.document.body.classList.add('menu-expanded');
      // Change switch icon
      this._themeSettingsConfig.menu = 'expand';
    }
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');
    this._renderer.addClass(navBar, 'expanded');
    this._renderer.addClass(mainMenu, 'expanded');
    setTimeout(() => {
      src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
    }, 300);
  }
  toggleNavigation(e) {
    const sidenav = document.getElementById('sidenav-overlay');
    const sidebarLeft = document.getElementById('sidebar-left') || document.getElementById('email-app-menu') || document.getElementById('sidebar-todo');
    const contentOverlay = document.getElementById('content-overlay');
    if (this.document.body.classList.contains('menu-open') && (this.router.url === '/todos' || this.router.url === '/contacts' || this.router.url === '/email' || this.router.url === '/chats' || this.router.url === '/chats/static-chat')) {
      this.document.body.classList.remove('menu-open');
      this._renderer.removeClass(sidenav, 'd-block');
      this._renderer.removeClass(contentOverlay, 'show');
      this.document.body.classList.add('menu-close');
      this._renderer.addClass(sidenav, 'd-none');
      this.showNavbar = false;
    } else if (this.document.body.classList.contains('menu-open')) {
      this.document.body.classList.remove('menu-open');
      this._renderer.removeClass(sidenav, 'd-block');
      this.document.body.classList.add('menu-close');
      this._renderer.addClass(sidenav, 'd-none');
      this.showNavbar = false;
    } else {
      this._renderer.removeClass(sidenav, 'd-none');
      this.document.body.classList.remove('menu-close');
      this.document.body.classList.add('menu-open');
      this._renderer.addClass(sidenav, 'd-block');
      this.showNavbar = false;
    }
    if (sidebarLeft) {
      this._renderer.removeClass(sidebarLeft, 'show');
    }
    if (contentOverlay) {
      this._renderer.removeClass(contentOverlay, 'show');
    }
  }
  toggleNavbar(e) {
    if (this.showNavbar) {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
  }
  clickSearch() {
    if (this.isHeaderSearchOpen) {
      this.isHeaderSearchOpen = false;
    } else {
      this.isHeaderSearchOpen = true;
    }
  }
  onResize(event) {
    if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.isMobile = true;
      this.showNavbar = false;
    } else {
      this.isMobile = false;
      this.showNavbar = true;
    }
  }
}
VerticalComponent.ɵfac = function VerticalComponent_Factory(t) {
  return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__.MenuSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef));
};
VerticalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: VerticalComponent,
  selectors: [["app-header-vertical"]],
  viewQuery: function VerticalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  hostBindings: function VerticalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function VerticalComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    }
  },
  decls: 40,
  vars: 17,
  consts: [[1, "header-navbar", "navbar-expand-md", "navbar", "navbar-with-menu", "navbar-without-dd-arrow", "fixed-top", "navbar-shadow", 3, "ngClass"], [1, "navbar-wrapper"], ["id", "navbar-header", 1, "navbar-header", 3, "ngClass", "mouseenter", "mouseleave"], [1, "nav", "navbar-nav", "flex-row"], [1, "nav-item", "mobile-menu", "d-lg-none", "mr-auto"], [1, "nav-link", "nav-menu-main", "menu-toggle", "hidden-xs11", 3, "click"], [1, "feather", "ft-menu", "font-large-1"], [1, "nav-item", "mr-auto"], ["routerLink", "/dashboard", 1, "navbar-brand", 3, "routerLink"], ["alt", "modern admin logo", "src", "../../../assets/images/1.png", 1, "brand-logo"], [1, "brand-text"], [1, "nav-item", "d-none", "d-md-block", "nav-toggle"], ["data-toggle", "collapse", 1, "nav-link", "modern-nav-toggle", "pr-0", 3, "routerLink", "click"], [1, "feather", "toggle-icon", "font-medium-3", "white", 3, "ngClass"], [1, "nav-item", "d-lg-none"], ["data-toggle", "collapse", "data-target", "#navbar-mobile", 1, "nav-link", "open-navbar-container", 3, "click"], [1, "la", "la-ellipsis-v"], [1, "navbar-container", "content", 3, "hidden"], ["id", "navbar-mobile", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "mr-auto", "float-left"], [1, "nav-item", "d-none", "d-md-block"], ["class", "nav-link nav-link-expand", 3, "routerLink", "click", 4, "ngIf"], [1, "nav-item", "nav-search"], ["class", "nav-link nav-link-search", 3, "routerLink", "click", 4, "ngIf"], [1, "search-input", 3, "ngClass"], ["type", "text", "placeholder", "Explore Modern...", 1, "input"], [1, "nav", "navbar-nav", "float-right"], ["class", "dropdown-language nav-item", "ngbDropdown", "", 4, "ngIf"], ["ngbDropdown", "", 1, "dropdown-user", "nav-item"], ["ngbDropdownToggle", "", 1, "nav-link", "dropdown-user-link"], ["class", "mr-1 user-name text-bold-700", 4, "ngIf"], [1, "avatar", "avatar-online"], ["src", "../../../assets/images/portrait/small/default.png", "alt", "avatar"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownProfileMenu", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "feather", "ft-power"], [1, "nav-link", "nav-link-expand", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-maximize"], [1, "nav-link", "nav-link-search", 3, "routerLink", "click"], [1, "ficon", "feather", "ft-search"], ["ngbDropdown", "", 1, "dropdown-language", "nav-item"], ["ngbDropdownToggle", "", "id", "dropdown-flag", 1, "dropdown-toggle", "nav-link", 3, "routerLink"], [1, "flag-icon", "flag-icon-gb"], [1, "selected-language"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownLangMenu", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "flag-icon", "flag-icon-fr"], [1, "flag-icon", "flag-icon-cn"], [1, "flag-icon", "flag-icon-de"], [1, "mr-1", "user-name", "text-bold-700"]],
  template: function VerticalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function VerticalComponent_Template_div_mouseenter_2_listener($event) {
        return ctx.mouseEnter($event);
      })("mouseleave", function VerticalComponent_Template_div_mouseleave_2_listener($event) {
        return ctx.mouseLeave($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul", 3)(4, "li", 4)(5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_5_listener($event) {
        return ctx.toggleNavigation($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 7)(8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "FORVALET");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li", 11)(13, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_13_listener($event) {
        return ctx.toggleFixMenu($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li", 14)(16, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_16_listener($event) {
        return ctx.toggleNavbar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 17)(19, "div", 18)(20, "ul", 19)(21, "li", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, VerticalComponent_a_22_Template, 2, 0, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "li", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, VerticalComponent_a_24_Template, 2, 0, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "ul", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, VerticalComponent_li_28_Template, 17, 0, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "li", 28)(30, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, VerticalComponent_span_31_Template, 2, 0, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, VerticalComponent_span_32_Template, 2, 0, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "img", 32)(35, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 33)(37, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalComponent_Template_a_click_37_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " \u00C7IKI\u015E");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.selectedHeaderNavBarClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.selectedNavBarHeaderClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](12, _c1, ctx._themeSettingsConfig.menu === "collapse", ctx._themeSettingsConfig.menu === "expand"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.isMobile && !ctx.showNavbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.maximize === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.search === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c2, ctx.isHeaderSearchOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.internationalization === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentUser.displayName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.currentUser.displayName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
  styles: [".dropdown-menu-right[_ngcontent-%COMP%] {\n    right: 0;\n    left: auto !important;\n    top: auto !important;\n}\n\n.header-navbar[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.dropdown-user-link[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    margin-left: 0rem !important;\n}\n\n.border_bottom[_ngcontent-%COMP%] {\n    border-bottom: none !important;\n}\n\n[_nghost-%COMP%]     .dropdown-item:active {\n    color: #fff !important;\n}\n\n@media only screen and (max-width: 991.98px) {\n  .ft-toggle-right[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .ft-toggle-left[_ngcontent-%COMP%] {\n        display: none !important;\n  }\n\n  .collapse[_ngcontent-%COMP%]:not(.show) {\n    display: unset !important;\n  }\n}\n\n.header-navbar[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  padding-left: 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO1FBQ00sd0JBQXdCO0VBQzlCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoidmVydGljYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItY29udGFpbmVyIHVsLm5hdiBsaSBhLmRyb3Bkb3duLXVzZXItbGluayAudXNlci1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyX2JvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5mdC10b2dnbGUtcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mdC10b2dnbGUtbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgLmJyYW5kLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDExcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9oZWFkZXIvdmVydGljYWwvdmVydGljYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7UUFDTSx3QkFBd0I7RUFDOUI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQSxnNkNBQWc2QyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItY29udGFpbmVyIHVsLm5hdiBsaSBhLmRyb3Bkb3duLXVzZXItbGluayAudXNlci1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyX2JvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5mdC10b2dnbGUtcmlnaHQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5mdC10b2dnbGUtbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQgLmJyYW5kLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDExcHggIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 45463:
/*!*****************************************************************************!*\
  !*** ./src/app/_layout/navigation/horizontalnav/horizontalnav.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalnavComponent": () => (/* binding */ HorizontalnavComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ 50074);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../settings/theme-settings.service */ 43024);
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/menu-settings.service */ 63844);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);











const _c0 = function (a0) {
  return {
    "dropdown-item dropdown-toggle active": a0
  };
};
function HorizontalnavComponent_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.toggleMenu($event, child_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", child_r1.page !== "null" ? child_r1.page : ctx_r2.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, child_r1.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-toggle", child_r1.submenu ? "dropdown" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](child_r1.title);
  }
}
function HorizontalnavComponent_li_4_ul_2_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.toggleMenu($event, subchild_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", subchild_r9.page !== "null" ? subchild_r9.page : ctx_r10.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", subchild_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subchild_r9.title);
  }
}
function HorizontalnavComponent_li_4_ul_2_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.toggleMenu($event, subchild_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", subchild_r9.page !== "null" ? subchild_r9.page : ctx_r11.router.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", subchild_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subchild_r9.title);
  }
}
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const subchild_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.toggleMenu($event, subchild_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subchild_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", subchild_r22.page !== "null" ? subchild_r22.page : ctx_r23.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subchild_r22.title);
  }
}
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34);
      const subchild_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.toggleMenu($event, subchild_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subchild_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", subchild_r30.page !== "null" ? subchild_r30.page : ctx_r31.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](subchild_r30.title);
  }
}
const _c1 = function (a0) {
  return {
    "active": a0
  };
};
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_a_1_Template, 3, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, subchild_r30.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !subchild_r30.event);
  }
}
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", subchild_r22.submenu.items);
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    "dropdown dropdown-submenu": a0,
    "dropdown-divider": a1,
    "active": a2
  };
};
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template_li_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.mouseEnter($event));
    })("mouseleave", function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template_li_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.mouseLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_a_1_Template, 3, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_ul_2_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](4, _c2, subchild_r22.submenu, subchild_r22.title === "horizontal-divider", subchild_r22.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-menu", subchild_r22.submenu ? "dropdown-submenu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !subchild_r22.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", subchild_r22.submenu);
  }
}
function HorizontalnavComponent_li_4_ul_2_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_li_1_Template, 3, 8, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", subchild_r9.submenu.items);
  }
}
function HorizontalnavComponent_li_4_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function HorizontalnavComponent_li_4_ul_2_li_1_Template_li_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.mouseEnter($event));
    })("mouseleave", function HorizontalnavComponent_li_4_ul_2_li_1_Template_li_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.mouseLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_a_1_Template, 4, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HorizontalnavComponent_li_4_ul_2_li_1_a_2_Template, 4, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HorizontalnavComponent_li_4_ul_2_li_1_ul_3_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](5, _c2, subchild_r9.submenu, subchild_r9.title === "horizontal-divider", subchild_r9.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-menu", subchild_r9.submenu ? "dropdown-submenu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !subchild_r9.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", subchild_r9.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", subchild_r9.submenu);
  }
}
function HorizontalnavComponent_li_4_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_ul_2_li_1_Template, 4, 9, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", child_r1.submenu.items);
  }
}
const _c3 = function (a0, a2, a3) {
  return {
    "dropdown nav-item ": a0,
    "nav-item": true,
    "open": a2,
    "active": a3
  };
};
function HorizontalnavComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function HorizontalnavComponent_li_4_Template_li_mouseenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r45.mouseEnter($event));
    })("mouseleave", function HorizontalnavComponent_li_4_Template_li_mouseleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r47.mouseLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HorizontalnavComponent_li_4_a_1_Template, 4, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HorizontalnavComponent_li_4_ul_2_Template, 2, 1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](4, _c3, child_r1.title && child_r1.submenu, child_r1.isOpen, child_r1.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-menu", child_r1.submenu ? "dropdown" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !child_r1.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", child_r1.submenu);
  }
}
class HorizontalnavComponent {
  constructor(_themeSettingsService, _menuSettingsService, _renderer, router) {
    this._themeSettingsService = _themeSettingsService;
    this._menuSettingsService = _menuSettingsService;
    this._renderer = _renderer;
    this.router = router;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngAfterViewInit() {
    this.refreshView();
  }
  ngOnInit() {
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
      this.refreshView();
    });
    this._menuSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAllMenu)).subscribe(config => {
      this._menuSettingsConfig = config;
    });
    this.setActiveRouteInNavbar();
  }
  setTheme(theme) {
    this._themeSettingsService.config = {
      colorTheme: theme // semi-light, semi-dark
    };
  }

  setLayout(layout) {
    this._themeSettingsService.config = {
      layout: {
        pattern: layout
      }
    };
  }
  fixComponent(component, value) {
    if (component === 'header') {
      this._themeSettingsService.config = {
        header: value
      };
    } else if (component === 'footer') {
      this._themeSettingsService.config = {
        footer: value
      };
    } else {
      this._themeSettingsService.config = {
        header: value,
        footer: value
      };
    }
  }
  callFunction(event) {
    const methodName = event.methodName;
    if (this[methodName]) {
      // method exists on the component
      const param = event.methodParam;
      if (!(0,util__WEBPACK_IMPORTED_MODULE_0__.isArray)(param)) {
        this[methodName](param); // call it
      } else {
        this[methodName](param[0], param[1]); // call it
      }
    }
  }

  refreshView() {
    const menuHeaderElement = document.getElementsByClassName('menu-header');
    // Theme
    if (menuHeaderElement && menuHeaderElement.length > 0) {
      if (this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-dark');
        this._renderer.addClass(menuHeaderElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.addClass(menuHeaderElement.item(0), 'navbar-dark');
        this._renderer.removeClass(menuHeaderElement.item(0), 'navbar-light');
      }
      if (this._themeSettingsConfig.layout.pattern === 'static') {
        this._renderer.addClass(menuHeaderElement.item(0), 'menu-static');
      } else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
        this._renderer.removeClass(menuHeaderElement.item(0), 'menu-static');
      }
    }
  }
  setActiveRouteInNavbar() {
    for (let i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
      if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu && this._menuSettingsConfig.horizontal_menu.items[i].page === this.router.url) {
        this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
        break;
      } else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu) {
        // Level 1 menu
        for (let j = 0; j < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items.length; j++) {
          if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu && this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].page === this.router.url) {
            this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
            this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
            this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
            break;
          } else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu) {
            // Level 2 menu
            for (let k = 0; k < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items.length; k++) {
              if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = true;
                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                this._menuSettingsConfig.horizontal_menu.items[i].isOpen = true;
                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j]['isSelected'] = true;
                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].isOpen = true;
              }
            }
          }
        }
      }
    }
  }
  toggleMenu(event, child, isSubmenuOfSubmenu) {
    const toggle = document.getElementById('sidenav-overlay');
    this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    child['isSelected'] = true;
    if (this.router.url !== '') {
      this._renderer.addClass(toggle, 'd-none');
      this._renderer.removeClass(toggle, 'd-block');
    }
    if (child.page === '/chats' && this.loggedInUser.email === 'john@pixinvent.com') {
      this.router.navigate(['/chats/static-chat']);
    } else if (child.page === '/chats' && this.loggedInUser.email !== 'john@pixinvent.com') {
      this.router.navigate(['/chats']);
    }
  }
  resetOtherActiveMenu(selectedChild, isSubmenuOfSubmenu) {
    for (let i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
      if (selectedChild.page !== 'null') {
        this._menuSettingsConfig.horizontal_menu.items[i]['isSelected'] = false;
      }
      this.handleSubmenuItems(this._menuSettingsConfig.horizontal_menu.items[i], selectedChild, isSubmenuOfSubmenu);
    }
  }
  handleSubmenuItems(parentItem, selectedChild, isSubmenuOfSubmenu) {
    let isSelectedChildExist = false;
    if (selectedChild['title'] === 'Horizontal') {
      localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.LAYOUT_STYLE_HORIZONTAL);
      window.location.reload();
    } else if (selectedChild['title'] === 'Vertical') {
      localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.LAYOUT_STYLE_VERTICAL);
      window.location.reload();
    } else if (parentItem['submenu'] && parentItem['submenu']['items'] && parentItem['submenu']['items'].length > 0) {
      for (let j = 0; j < parentItem['submenu']['items'].length; j++) {
        if (selectedChild.title === parentItem['submenu']['items'][j].title) {
          isSelectedChildExist = true;
        }
        this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
        if (parentItem['submenu']['items'][j]['isSelected'] === true) {
          isSelectedChildExist = true;
        }
      }
      if (!isSelectedChildExist) {
        parentItem['isSelected'] = false;
      } else {
        parentItem['isSelected'] = true;
      }
    } else if (parentItem.title !== selectedChild.title && !isSubmenuOfSubmenu) {
      parentItem['isSelected'] = false;
    }
  }
  onWindowScroll(e) {
    const element = document.getElementById('sticky-wrapper');
    if (this._themeSettingsConfig.layout.style === 'horizontal') {
      if (this._themeSettingsConfig.layout.pattern === 'fixed' || this._themeSettingsConfig.layout.pattern === '') {
        if (window.pageYOffset > 70) {
          // 70 is the height of the horizontal header
          element.classList.add('is-sticky');
          element.classList.remove('container');
        } else {
          element.classList.remove('is-sticky');
        }
      } else if (this._themeSettingsConfig.layout.pattern === 'boxed') {
        if (window.pageYOffset > 70) {
          // 70 is the height of the horizontal header
          element.classList.add('is-sticky');
          element.classList.add('container');
        } else {
          element.classList.remove('is-sticky');
          element.classList.remove('container');
        }
      } else if (this._themeSettingsConfig.layout.pattern === 'static') {
        element.classList.remove('is-sticky');
        element.classList.remove('container');
        element.classList.add('is-static');
      }
    }
  }
  mouseEnter(e) {
    const _event = e;
    _event.srcElement.classList.add('show');
  }
  /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
  mouseLeave(event) {
    const _event = event;
    _event.srcElement.classList.remove('show');
  }
}
HorizontalnavComponent.ɵfac = function HorizontalnavComponent_Factory(t) {
  return new (t || HorizontalnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_3__.MenuSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
HorizontalnavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: HorizontalnavComponent,
  selectors: [["app-horizontalnav"]],
  hostBindings: function HorizontalnavComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function HorizontalnavComponent_scroll_HostBindingHandler($event) {
        return ctx.onWindowScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 5,
  vars: 1,
  consts: [["id", "sticky-wrapper", 1, "sticky-wrapper"], ["role", "navigation", "data-menu", "menu-wrapper", "id", "menu-header", 1, "menu-header", "header-navbar", "navbar-expand-sm", "navbar", "navbar-horizontal", "navbar-fixed", "navbar-dark", "navbar-without-dd-arrow", "navbar-shadow", 3, "scroll"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content"], ["id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "nav", "navbar-nav"], ["class", "nav-item", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "nav-link ", 3, "ngClass", "routerLink", "click", 4, "ngIf"], ["class", "dropdown-menu", 4, "ngIf"], [1, "nav-link", 3, "ngClass", "routerLink", "click"], [1, "la", 3, "ngClass"], ["data-i18n", "nav.dash.main"], [1, "dropdown-menu"], ["class", "", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "dropdown-item", "data-toggle", "dropdown", 3, "routerLink", "click", 4, "ngIf"], ["class", "dropdown-item", "target", "_blank", "data-toggle", "dropdown", 3, "href", "click", 4, "ngIf"], ["data-toggle", "dropdown", 1, "dropdown-item", 3, "routerLink", "click"], ["target", "_blank", "data-toggle", "dropdown", 1, "dropdown-item", 3, "href", "click"], [3, "ngClass", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "ngClass", "mouseenter", "mouseleave"], ["data-menu", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["data-menu", "", 3, "ngClass"]],
  template: function HorizontalnavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function HorizontalnavComponent_Template_div_scroll_1_listener($event) {
        return ctx.onWindowScroll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HorizontalnavComponent_li_4_Template, 3, 8, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._menuSettingsConfig.horizontal_menu.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: [".is-sticky[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  z-index: 999;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.is-static[_ngcontent-%COMP%] {\n  width: 100%;\n  position: sticky;\n  top: 0px;\n  z-index: 999;\n}\n\n[_nghost-%COMP%]     .navbar-dark .navbar-nav .nav-link {\n  color: white !important;\n}\n\n[_nghost-%COMP%]     .navbar-light .navbar-nav .nav-link {\n  color: #6b6f82 !important;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   .dropdown-submenu[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after {\n  top: 14px;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 13rem !important;\n}\n\n.navbar-horizontal[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-submenu[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:after, .navbar-horizontal[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-submenu[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:after {\n  right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWxuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmIiwiZmlsZSI6Imhvcml6b250YWxuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1zdGlja3kge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pcy1zdGF0aWMge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6ICM2YjZmODIgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnU+YTphZnRlciB7XG4gIHRvcDogMTRweDtcbn1cblxuLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiAxM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnU+YTphZnRlcixcbi5uYXZiYXItaG9yaXpvbnRhbCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tc3VibWVudT5idXR0b246YWZ0ZXIge1xuICByaWdodDogMC41cmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9uYXZpZ2F0aW9uL2hvcml6b250YWxuYXYvaG9yaXpvbnRhbG5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUEsdy9DQUF3L0MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtc3RpY2t5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXMtc3RhdGljIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjNmI2ZjgyICFpbXBvcnRhbnQ7XG59XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51PmE6YWZ0ZXIge1xuICB0b3A6IDE0cHg7XG59XG5cbi5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gIG1pbi13aWR0aDogMTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1ob3Jpem9udGFsIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1zdWJtZW51PmE6YWZ0ZXIsXG4ubmF2YmFyLWhvcml6b250YWwgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLXN1Ym1lbnU+YnV0dG9uOmFmdGVyIHtcbiAgcmlnaHQ6IDAuNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('fade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(300)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(500)])])]
  }
});

/***/ }),

/***/ 49622:
/*!************************************************************!*\
  !*** ./src/app/_layout/navigation/navigation.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/theme-settings.service */ 43024);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 56075);
/* harmony import */ var _verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verticalnav/verticalnav.component */ 53200);
/* harmony import */ var _horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./horizontalnav/horizontalnav.component */ 45463);









function NavigationComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-verticalnav");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function NavigationComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-horizontalnav");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
class NavigationComponent {
  constructor(_themeSettingsService) {
    this._themeSettingsService = _themeSettingsService;
    this.isMobile = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    const self = this;
    this.isMobile = window.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL;
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
      if (config.layout && config.layout.style && config.layout.style === 'vertical') {
        self.layout = 'vertical';
      } else {
        self.layout = 'horizontal';
      }
    });
  }
  onResize(event) {
    if (event.target.innerWidth < src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
  return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_1__.ThemeSettingsService));
};
NavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NavigationComponent,
  selectors: [["app-navigation"]],
  hostBindings: function NavigationComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function NavigationComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    }
  },
  decls: 4,
  vars: 2,
  consts: [[3, "resize"], [4, "ngIf"]],
  template: function NavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function NavigationComponent_Template_div_resize_0_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NavigationComponent_ng_container_2_Template, 2, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NavigationComponent_ng_container_3_Template, 2, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.layout === "vertical" || ctx.isMobile === true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal" && ctx.isMobile === false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_3__.VerticalnavComponent, _horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_4__.HorizontalnavComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 53200:
/*!*************************************************************************!*\
  !*** ./src/app/_layout/navigation/verticalnav/verticalnav.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalnavComponent": () => (/* binding */ VerticalnavComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ 50074);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/navbar.service */ 9392);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/theme-settings.service */ 43024);
/* harmony import */ var _settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/menu-settings.service */ 63844);















function VerticalnavComponent_li_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](child_r1.section);
  }
}
function VerticalnavComponent_li_4_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 11);
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", child_r1.icon);
  }
}
const _c0 = function (a0, a1) {
  return {
    "badge-info mr-2": a0,
    "badge-danger": a1
  };
};
function VerticalnavComponent_li_4_a_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, child_r1.badge.type === "badge-info", child_r1.badge.type === "badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", child_r1.badge.value, " ");
  }
}
function VerticalnavComponent_li_4_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.toggleMenu($event, child_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, VerticalnavComponent_li_4_a_3_span_4_Template, 2, 5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", child_r1.page !== "null" ? child_r1.page : ctx_r4.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](child_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.badge);
  }
}
function VerticalnavComponent_li_4_a_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, child_r1.badge.type === "badge-info", child_r1.badge.type === "badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", child_r1.badge.value, " ");
  }
}
function VerticalnavComponent_li_4_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.toggleMenu($event, child_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, VerticalnavComponent_li_4_a_4_span_4_Template, 2, 5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", child_r1.page, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](child_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.badge);
  }
}
function VerticalnavComponent_li_4_a_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, child_r1.badge.type === "badge-info", child_r1.badge.type === "badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", child_r1.badge.value, " ");
  }
}
function VerticalnavComponent_li_4_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.toggleMenu($event, child_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, VerticalnavComponent_li_4_a_5_span_4_Template, 2, 5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", child_r1.page, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](child_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.badge);
  }
}
function VerticalnavComponent_li_4_a_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](2, _c0, child_r1.badge.type === "badge-info", child_r1.badge.type === "badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", child_r1.badge.value, " ");
  }
}
function VerticalnavComponent_li_4_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_a_6_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.toggleMenu($event, child_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, VerticalnavComponent_li_4_a_6_span_4_Template, 2, 5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", child_r1.page !== "null" ? child_r1.page : ctx_r7.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", child_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](child_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.badge);
  }
}
function VerticalnavComponent_li_4_ul_7_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const subchild_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r40.toggleMenu($event, subchild_r36, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", subchild_r36.page !== "null" ? subchild_r36.page : ctx_r37.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](subchild_r36.title);
  }
}
function VerticalnavComponent_li_4_ul_7_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const subchild_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r44.toggleMenu($event, subchild_r36, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", subchild_r36.page !== "null" ? subchild_r36.page : ctx_r38.router.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](subchild_r36.title);
  }
}
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54);
      const subchild_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r52.toggleMenu($event, subchild_r49, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", subchild_r49.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](subchild_r49.title);
  }
}
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58);
      const subchild_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r56.callFunction(subchild_r49.event, subchild_r49));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](subchild_r49.title);
  }
}
const _c1 = function (a0) {
  return {
    "active": a0
  };
};
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_1_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_a_2_Template, 2, 1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c1, subchild_r49.isSelected && !subchild_r49.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !subchild_r49.event);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subchild_r49.event);
  }
}
function VerticalnavComponent_li_4_ul_7_li_1_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_ul_3_li_1_Template, 3, 5, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", subchild_r36.submenu.items);
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    "has-sub": a0,
    "active": a1,
    "open": a2
  };
};
function VerticalnavComponent_li_4_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_a_1_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, VerticalnavComponent_li_4_ul_7_li_1_a_2_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, VerticalnavComponent_li_4_ul_7_li_1_ul_3_Template, 2, 1, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subchild_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](4, _c2, subchild_r36.submenu, subchild_r36.isSelected && !subchild_r36.submenu, subchild_r36.isOpen && subchild_r36.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !subchild_r36.submenu && !subchild_r36.excludeInVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subchild_r36.submenu && !subchild_r36.excludeInVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", subchild_r36.submenu && !subchild_r36.excludeInVertical);
  }
}
function VerticalnavComponent_li_4_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VerticalnavComponent_li_4_ul_7_li_1_Template, 4, 8, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@popOverState", child_r1.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", child_r1.submenu.items);
  }
}
const _c3 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    "has-sub": a0,
    "open": a1,
    "nav-item": a2,
    "navigation-header": a3,
    "active": a4,
    "menu-collapsed-open": a5,
    "hover": a6
  };
};
function VerticalnavComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, VerticalnavComponent_li_4_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, VerticalnavComponent_li_4_i_2_Template, 1, 1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, VerticalnavComponent_li_4_a_3_Template, 5, 4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, VerticalnavComponent_li_4_a_4_Template, 5, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, VerticalnavComponent_li_4_a_5_Template, 5, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, VerticalnavComponent_li_4_a_6_Template, 5, 4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, VerticalnavComponent_li_4_ul_7_Template, 2, 2, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction7"](8, _c3, child_r1.submenu, child_r1.isOpen && child_r1.submenu, child_r1.title, child_r1.section, child_r1.isSelected && !child_r1.submenu, child_r1.isSelected && child_r1.submenu, child_r1.hover));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.section);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.title && !child_r1.submenu && !child_r1.excludeInVertical && !child_r1.isExternalLink && !child_r1.issupportExternalLink && !child_r1.isStarterkitExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.title && !child_r1.submenu && !child_r1.excludeInVertical && child_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.title && !child_r1.submenu && !child_r1.excludeInVertical && child_r1.isStarterkitExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.title && child_r1.submenu && !child_r1.excludeInVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", child_r1.submenu);
  }
}
class VerticalnavComponent {
  constructor(document, navbarService, _themeSettingsService, _menuSettingsService, _renderer, router) {
    this.document = document;
    this.navbarService = navbarService;
    this._themeSettingsService = _themeSettingsService;
    this._menuSettingsService = _menuSettingsService;
    this._renderer = _renderer;
    this.router = router;
    this.config = {
      wheelPropagation: false
    };
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
        this.resetMainMenu();
        this.setActiveRouteInNavbar();
      }
    });
  }
  ngOnInit() {
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
      this.refreshView();
    });
    this._menuSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAllMenu)).subscribe(config => {
      this._menuSettingsConfig = config;
    });
    // TODO Patch to reset menu after login
    this.resetMainMenu();
    this.setActiveRouteInNavbar();
  }
  resetMainMenu() {
    const nodes = this.document.getElementById('main-menu-navigation').childNodes;
    for (let i = 0; i < nodes.length; i++) {
      this.resetCollapseMenu(nodes[i]);
    }
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
      this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
      this._menuSettingsConfig.vertical_menu.items[i]['isOpen'] = false;
      this.resetSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i]);
    }
  }
  resetCollapseMenu(element) {
    if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
      element.classList.remove('hover');
      element.classList.remove('menu-collapsed-open');
    }
  }
  resetSubmenuItems(parentItem) {
    if (parentItem['submenu'] && parentItem['submenu']['items'] && parentItem['submenu']['items'].length > 0) {
      parentItem['isOpen'] = false;
      for (let j = 0; j < parentItem['submenu']['items'].length; j++) {
        parentItem['submenu']['items'][j]['isSelected'] = false;
        this.resetSubmenuItems(parentItem['submenu']['items'][j]);
      }
    }
  }
  refreshView() {
    const mainMenuElement = document.getElementsByClassName('main-menu');
    if (mainMenuElement && mainMenuElement.length > 0) {
      if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-dark');
        this._renderer.addClass(mainMenuElement.item(0), 'menu-light');
      } else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.addClass(mainMenuElement.item(0), 'menu-dark');
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-light');
      }
      if (this._themeSettingsConfig.layout.pattern === 'static') {
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-fixed');
        this._renderer.addClass(mainMenuElement.item(0), 'menu-static');
      } else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-static');
        this._renderer.addClass(mainMenuElement.item(0), 'menu-fixed');
      }
    }
  }
  setActiveRouteInNavbar() {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      if (!this._menuSettingsConfig.vertical_menu.items[i].submenu && this._menuSettingsConfig.vertical_menu.items[i].page === this.router.url) {
        this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
        break;
      } else if (this._menuSettingsConfig.vertical_menu.items[i].submenu) {
        // Level 1 menu
        for (let j = 0; j < this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
          if (!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu && this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === this.router.url) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
            this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
            this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
            break;
          } else if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
            // Level 2 menu
            for (let k = 0; k < this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
              if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].isOpen = true;
              }
            }
          } else if (!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
            let a, b;
            let URL = localStorage.getItem('creatorurl');
            let SurveyUrl = localStorage.getItem('surveyurl');
            if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === '/creator' && this.router.url === URL) {
              a = j;
              this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].submenu.items[a]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
              // this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = false;
            } else if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === '/survey' && this.router.url === SurveyUrl) {
              b = j;
              this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].submenu.items[b]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
              if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[a]) {
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[a]['isSelected'] = false;
              }
            }
          }
        }
      }
    }
  }
  resetOpenMenu() {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      const menu = this._menuSettingsConfig.vertical_menu.items[i];
      if (!menu.submenu) {
        menu['isOpen'] = false;
        menu['isActive'] = false;
        menu['hover'] = false;
      } else if (menu.submenu) {
        for (let j = 0; j < menu.submenu.items.length; j++) {
          menu['isOpen'] = false;
          menu['isActive'] = false;
          menu['hover'] = false;
          menu.submenu.items[j]['isOpen'] = false;
        }
      }
    }
  }
  setOpenInNavbar(value) {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      const menu = this._menuSettingsConfig.vertical_menu.items[i];
      if (!menu.submenu && menu.page === this.router.url) {
        menu['isOpen'] = value;
        menu['isActive'] = value;
      } else if (menu.submenu) {
        for (let j = 0; j < menu.submenu.items.length; j++) {
          if (menu.submenu.items[j].page === this.router.url) {
            menu['isOpen'] = value;
            menu['isActive'] = value;
            menu.submenu.items[j]['isOpen'] = value;
            menu.submenu.items[j]['isActive'] = value;
            break;
          }
        }
      }
    }
  }
  callFunction(event, child, isSubmenuOfSubmenu) {
    const methodName = event.methodName;
    if (this[methodName]) {
      // method exists on the component
      const param = event.methodParam;
      if (!(0,util__WEBPACK_IMPORTED_MODULE_0__.isArray)(param)) {
        this[methodName](param); // call it
      } else {
        this[methodName](param[0], param[1]); // call it
      }
    }

    this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
    child['isSelected'] = true;
  }
  setTheme(theme) {
    this._themeSettingsService.config = {
      colorTheme: theme // semi-light, semi-dark
    };
  }

  setLayout(layout) {
    this._themeSettingsService.config = {
      layout: {
        pattern: layout
      }
    };
  }
  fixComponent(component, value) {
    if (component === 'header') {
      this._themeSettingsService.config = {
        header: value
      };
    } else if (component === 'footer') {
      this._themeSettingsService.config = {
        footer: value
      };
    } else {
      this._themeSettingsService.config = {
        header: value,
        footer: value
      };
    }
  }
  /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
  mouseEnter(e) {
    if (this.navbarService.isFixedMenu()) {
      return;
    }
    this.navbarService.setMouseInRegion(true);
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');
    // check if the left aside menu is fixed
    if (!navBar.classList.contains('expanded')) {
      this._renderer.addClass(navBar, 'expanded');
      this._renderer.addClass(mainMenu, 'expanded');
      this.resetOpenMenu();
      this.setOpenInNavbar(true);
    }
  }
  /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
  mouseLeave(event) {
    if (this.navbarService.isFixedMenu()) {
      return;
    }
    const _self = this;
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');
    if (navBar && navBar.classList.contains('expanded')) {
      this.insideTm = setTimeout(() => {
        if (!_self.navbarService.isMouseInRegion()) {
          this._renderer.removeClass(navBar, 'expanded');
          this._renderer.removeClass(mainMenu, 'expanded');
          this.resetOpenMenu();
          this.setOpenInNavbar(false);
        }
      }, 100);
    }
    this.navbarService.setMouseInRegion(false);
  }
  resetOtherActiveMenu(selectedChild, isSubmenuOfSubmenu) {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
      this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
      this.handleSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i], selectedChild, isSubmenuOfSubmenu);
    }
  }
  handleSubmenuItems(parentItem, selectedChild, isSubmenuOfSubmenu) {
    if (selectedChild['title'] === 'Horizontal') {
      localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.LAYOUT_STYLE_HORIZONTAL);
      window.location.reload();
    } else if (selectedChild['title'] === 'Vertical') {
      localStorage.setItem('currentLayoutStyle', src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.LAYOUT_STYLE_VERTICAL);
      window.location.reload();
    } else if (parentItem['submenu'] && parentItem['submenu']['items'] && parentItem['submenu']['items'].length > 0) {
      if (parentItem.title !== selectedChild.title && parentItem['isOpen'] === true && !isSubmenuOfSubmenu && this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.NAVIGATION_TYPE_COLLAPSIBLE) {
        parentItem['isOpen'] = false;
      }
      for (let j = 0; j < parentItem['submenu']['items'].length; j++) {
        if (selectedChild.page !== 'null') {
          parentItem['submenu']['items'][j]['isSelected'] = false;
        }
        this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
      }
    } else if (parentItem.title !== selectedChild.title && !selectedChild.submenu && this._themeSettingsConfig.navigation === src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.NAVIGATION_TYPE_COLLAPSIBLE && parentItem['isOpen'] === true) {
      parentItem['isOpen'] = false;
    }
  }
  toggleMenu(event, child, isSubmenuOfSubmenu) {
    const toggle = document.getElementById('sidenav-overlay');
    this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    if (child['isSelected'] === true) {
      child['isSelected'] = false;
    } else {
      child['isSelected'] = true;
    }
    if (child['hover'] === true) {
      child['hover'] = false;
    } else {
      child['hover'] = true;
    }
    if (child['isOpen'] === true) {
      child['isOpen'] = false;
    } else {
      child['isOpen'] = true;
    }
    if (this.router.url !== '') {
      this._renderer.addClass(toggle, 'd-none');
      this._renderer.removeClass(toggle, 'd-block');
    }
    if (child.page === '/chats' && this.loggedInUser.email === 'john@pixinvent.com') {
      this.router.navigate(['/chats/static-chat']);
    } else if (child.page === '/chats' && this.loggedInUser.email !== 'john@pixinvent.com') {
      this.router.navigate(['/chats']);
    }
  }
}
VerticalnavComponent.ɵfac = function VerticalnavComponent_Factory(t) {
  return new (t || VerticalnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_4__.MenuSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
VerticalnavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: VerticalnavComponent,
  selectors: [["app-verticalnav"]],
  viewQuery: function VerticalnavComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
    }
  },
  decls: 5,
  vars: 3,
  consts: [["id", "main-menu", "data-scroll-to-active", "true", 1, "main-menu", "menu-fixed", "menu-dark", "menu-accordion", "menu-shadow", 3, "mouseenter", "mouseleave"], ["id", "main-menu-content", "fxFlex", "auto", 1, "main-menu-content", "ps-container", "ps-theme-light", 3, "perfectScrollbar"], ["id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation", "navigation-main"], ["class", "", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "", 3, "ngClass"], ["class", "menu-title", 4, "ngIf"], ["class", "la", "data-toggle", "tooltip", "data-placement", "right", "data-original-title", "Support", 3, "ngClass", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["target", "_blank", 3, "href", "click", 4, "ngIf"], ["class", "menu-content", 4, "ngIf"], [1, "menu-title"], ["data-toggle", "tooltip", "data-placement", "right", "data-original-title", "Support", 1, "la", 3, "ngClass"], [3, "routerLink", "click"], [1, "la", 3, "ngClass"], ["data-i18n", "", 1, "menu-title"], ["class", "badge badge-pill float-right", 3, "ngClass", 4, "ngIf"], [1, "badge", "badge-pill", "float-right", 3, "ngClass"], ["target", "_blank", 3, "href", "click"], [1, "menu-content"], ["class", "isShown", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "isShown", 3, "ngClass"], ["class", "menu-item", 3, "routerLink", "click", 4, "ngIf"], [1, "menu-item", 3, "routerLink", "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "menu-item", 3, "click", 4, "ngIf"], [1, "menu-item", 3, "click"]],
  template: function VerticalnavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function VerticalnavComponent_Template_div_mouseenter_0_listener($event) {
        return ctx.mouseEnter($event);
      })("mouseleave", function VerticalnavComponent_Template_div_mouseleave_0_listener($event) {
        return ctx.mouseLeave($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, VerticalnavComponent_li_4_Template, 8, 16, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.child ? ctx.child.title : "", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx._menuSettingsConfig.vertical_menu.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__.PerfectScrollbarDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbG5hdi5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9uYXZpZ2F0aW9uL3ZlcnRpY2FsbmF2L3ZlcnRpY2FsbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('popOverState', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      opacity: '1'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
      opacity: '0',
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('show => hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('200ms ease-in-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('hide => show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('200ms ease-in-out'))])]
  }
});

/***/ }),

/***/ 8915:
/*!********************************************************************!*\
  !*** ./src/app/_layout/private-layout/private-layout.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateLayoutComponent": () => (/* binding */ PrivateLayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_helpers/app.constants */ 39126);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/navbar.service */ 9392);
/* harmony import */ var _settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/theme-settings.service */ 43024);
/* harmony import */ var _services_device_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/device-detector.service */ 57104);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 79007);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.component */ 49622);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customizer/customizer.component */ 80842);
/* harmony import */ var _customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customizer/horizontal-customizer/horizontal-customizer.component */ 40818);















function PrivateLayoutComponent_div_5_app_customizer_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-customizer");
  }
}
function PrivateLayoutComponent_div_5_app_horizontal_customizer_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-horizontal-customizer");
  }
}
function PrivateLayoutComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PrivateLayoutComponent_div_5_app_customizer_1_Template, 1, 0, "app-customizer", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, PrivateLayoutComponent_div_5_app_horizontal_customizer_2_Template, 1, 0, "app-horizontal-customizer", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.layout === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.layout === "horizontal");
  }
}
function PrivateLayoutComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
class PrivateLayoutComponent {
  constructor(renderer, document, router, navbarService, _themeSettingsService, deviceService) {
    this.renderer = renderer;
    this.document = document;
    this.router = router;
    this.navbarService = navbarService;
    this._themeSettingsService = _themeSettingsService;
    this.deviceService = deviceService;
    this.deviceInfo = null;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationStart) {
        // Show loading indicator
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd) {
        // Hide loading indicator
        if (this.router.url === '/chats' || this.router.url === '/chats/static-chat') {
          this.renderer.addClass(document.body, 'chat-application');
        } else {
          this.renderer.removeClass(document.body, 'chat-application');
        }
        if (this.router.url === '/email') {
          this.renderer.addClass(document.body, 'email-application');
        } else {
          this.renderer.removeClass(document.body, 'email-application');
        }
        if (this.router.url === '/contacts') {
          this.renderer.addClass(document.body, 'app-contacts');
        } else {
          this.renderer.removeClass(document.body, 'app-contacts');
        }
        if (this.router.url === '/todos') {
          this.renderer.addClass(document.body, 'todo');
        } else {
          this.renderer.removeClass(document.body, 'todo');
        }
        if (this.router.url === '/todo-app') {
          this.renderer.addClass(document.body, 'todo-application');
        } else {
          this.renderer.removeClass(document.body, 'todo-application');
        }
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationError) {
        // Hide loading indicator
      }
    });
  }
  ngOnInit() {
    this.renderer.removeClass(document.body, 'bg-full-screen-image');
    // Subscribe to config changes
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
      if (localStorage.getItem('currentLayoutStyle')) {
        this._themeSettingsConfig.layout.style = localStorage.getItem('currentLayoutStyle');
      }
    });
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    this.handleBody(isMobile);
    this.handleCollapsibleMenu();
  }
  handleBody(isMobile) {
    const _self = this;
    if (this._themeSettingsConfig.layout.style === 'vertical') {
      _self.renderer.setAttribute(document.body, 'data-menu', 'vertical-menu-modern');
    } else {
      _self.renderer.setAttribute(document.body, 'data-menu', 'horizontal-menu-modern');
    }
    let currentBodyClassList = [];
    this.layout = this._themeSettingsConfig.layout.style;
    this.customizer = this._themeSettingsConfig.customizer;
    this.buybutton = this._themeSettingsConfig.buybutton;
    // Vertical resposive view
    if (this._themeSettingsConfig.layout.style === 'vertical' && window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      const previosBodyClassList = [].slice.call(document.body.classList);
      previosBodyClassList.forEach(function (c) {
        _self.renderer.removeClass(document.body, c);
      });
      if (this._themeSettingsConfig.layout.style === 'vertical') {
        currentBodyClassList = ['vertical-layout', 'vertical-overlay-menu', '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
        if (this._themeSettingsConfig.layout.pattern === 'fixed') {
          currentBodyClassList.push('fixed-navbar');
        }
      } else {
        currentBodyClassList = ['vertical-layout', '2-columns', 'vertical-overlay-menu', 'pace-done', 'menu-hide'];
      }
      if (this._themeSettingsConfig.layout.pattern === 'fixed') {
        currentBodyClassList.push('fixed-navbar');
      }
      if (this._themeSettingsConfig.layout.pattern === '') {
        currentBodyClassList.push('fixed-navbar');
      }
      if (this._themeSettingsConfig.layout.pattern === 'boxed') {
        this.renderer.addClass(document.body, 'boxed-layout');
        this.renderer.addClass(document.body, 'container');
        this.renderer.addClass(document.body, 'fixed-navbar');
      }
      // Horizontal resposive view
    } else if (this._themeSettingsConfig.layout.style === 'horizontal' && window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
      const previosBodyClassList = [].slice.call(document.body.classList);
      previosBodyClassList.forEach(function (c) {
        _self.renderer.removeClass(document.body, c);
      });
      currentBodyClassList = ['horizontal-layout', 'horizontal-menu', '2-columns', 'pace-done', 'fixed-navbar', 'menu-hide'];
      if (this._themeSettingsConfig.layout.pattern === 'fixed') {
        currentBodyClassList.push('fixed-navbar');
      }
      if (this._themeSettingsConfig.layout.pattern === '') {
        currentBodyClassList.push('fixed-navbar');
      }
      if (this._themeSettingsConfig.layout.pattern === 'boxed') {
        this.renderer.addClass(document.body, 'boxed-layout');
        this.renderer.addClass(document.body, 'container');
        this.renderer.addClass(document.body, 'fixed-navbar');
      }
      // Normal view
    } else {
      const previosBodyClassList = [].slice.call(document.body.classList);
      let callapseOrExpanded = '';
      previosBodyClassList.forEach(function (c) {
        if (c === 'menu-collapsed') {
          callapseOrExpanded = 'menu-collapsed';
        } else if (c === 'menu-expanded') {
          callapseOrExpanded = 'menu-expanded';
        }
        _self.renderer.removeClass(document.body, c);
      });
      if (this._themeSettingsConfig.layout.style === 'vertical') {
        if (callapseOrExpanded === '') {
          const toggleIcon = document.getElementsByClassName('toggle-icon');
          if (toggleIcon.item && toggleIcon.item(0) && toggleIcon.item(0).classList.contains('ft-toggle-right')) {
            callapseOrExpanded = 'menu-expanded';
          } else {
            callapseOrExpanded = 'menu-collapsed';
          }
        }
        // callapseOrExpanded = callapseOrExpanded !== '' ? callapseOrExpanded : 'menu-collapsed';
        currentBodyClassList = ['vertical-layout', 'vertical-menu-modern', '2-columns', 'pace-done', 'menu-close', callapseOrExpanded];
        if (this._themeSettingsConfig.layout.pattern === 'fixed') {
          currentBodyClassList.push('fixed-navbar');
        }
        if (this._themeSettingsConfig.layout.pattern === '') {
          currentBodyClassList.push('fixed-navbar');
        }
        if (this._themeSettingsConfig.layout.pattern === 'boxed') {
          this.renderer.addClass(document.body, 'boxed-layout');
          this.renderer.addClass(document.body, 'container');
          this.renderer.addClass(document.body, 'fixed-navbar');
        }
      } else {
        currentBodyClassList = ['horizontal-layout', '2-columns', 'horizontal-menu'];
        if (window.innerWidth >= _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
          currentBodyClassList.push('menu-expanded');
        } else {
          currentBodyClassList.push('menu-collapsed');
        }
        if (this._themeSettingsConfig.layout.pattern === 'boxed') {
          this.renderer.addClass(document.body, 'boxed-layout');
          this.renderer.addClass(document.body, 'container');
        }
      }
    }
    const footer = document.getElementById('footer');
    // if (this.router.url == '/chats') {
    // const footer = document.getElementById('footer');
    if (this.router.url === '/chats' || this.router.url === '/chats/static-chat') {
      currentBodyClassList.push('chat-application');
      // footer.classList.add('fixed-bottom');
    } else if (currentBodyClassList.includes('fixed-bottom')) {
      currentBodyClassList.push('chat-application');
      currentBodyClassList = currentBodyClassList.filter(item => item !== 'fixed-bottom');
      footer.classList.remove('fixed-bottom');
    }
    if (this.router.url === '/email') {
      currentBodyClassList.push('email-application');
      // footer.classList.add('fixed-bottom');
    } else if (currentBodyClassList.includes('fixed-bottom')) {
      currentBodyClassList.push('email-application');
      currentBodyClassList = currentBodyClassList.filter(item => item !== 'fixed-bottom');
      footer.classList.remove('fixed-bottom');
    }
    if (this.router.url === '/contacts') {
      currentBodyClassList.push('app-contacts');
    }
    if (this.router.url === '/todos') {
      currentBodyClassList.push('todo');
    }
    if (this.router.url === '/todo-app') {
      currentBodyClassList.push('todo-application');
    }
    currentBodyClassList.forEach(function (c) {
      _self.renderer.addClass(document.body, c);
    });
    this.handleFullScreen();
  }
  handleFullScreen() {
    const toggleIcon = document.getElementsByClassName('ficon');
    if (window.innerWidth === screen.width && window.innerHeight === screen.height && toggleIcon.item(0)) {
      this.renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
      this.renderer.addClass(toggleIcon.item(0), 'ft-minimize');
    } else if (toggleIcon.item(0)) {
      this.renderer.addClass(toggleIcon.item(0), 'ft-maximize');
      this.renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
    }
  }
  handleCollapsibleMenu() {
    if (this._themeSettingsConfig.menu === 'collapse') {
      // show the left aside menu
      this.navbarService.setFixedMenu(false);
      this.document.body.classList.remove('menu-expanded');
      this.document.body.classList.add('menu-collapsed');
    } else {
      this.navbarService.setFixedMenu(true);
      this.document.body.classList.remove('menu-collapsed');
      this.document.body.classList.add('menu-expanded');
    }
  }
  onResize(event) {
    const menuClose = document.body.getElementsByClassName('menu-close');
    const toggle = document.getElementsByClassName('content-overlay');
    const sidenavOverlay = document.getElementsByClassName('sidenav-overlay');
    const emailMenu = document.getElementsByClassName('email-app-menu');
    const toggleIcon = document.getElementById('sidebar-left');
    if (event.target.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.handleBody(true);
      if (menuClose) {
        this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
        this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
      }
    } else {
      this.handleBody(false);
    }
    if (toggle && (this.router.url === '/chats' || this.router.url === '/static-chat' || this.router.url === '/todos' || this.router.url === '/contacts') && event.target.innerWidth > _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.renderer.removeClass(toggle.item(0), 'show');
      this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
      this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
      this.renderer.removeClass(toggleIcon, 'show');
    }
    if ((toggle || sidenavOverlay) && this.router.url === '/email' && event.target.innerWidth > 767) {
      this.renderer.removeClass(toggle.item(0), 'show');
      this.renderer.removeClass(emailMenu.item(0), 'show');
      this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
      this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
    }
  }
  rightbar(event) {
    const toggle = document.getElementById('sidenav-overlay');
    if (event.currentTarget.className === 'sidenav-overlay d-block') {
      this.renderer.removeClass(toggle, 'd-block');
      this.document.body.classList.remove('menu-open');
      this.document.body.classList.add('menu-close');
      this.renderer.addClass(toggle, 'd-none');
    } else if (event.currentTarget.className === 'sidenav-overlay d-none') {
      this.renderer.removeClass(toggle, 'd-none');
      this.document.body.classList.remove('menu-close');
      this.document.body.classList.add('menu-open');
      this.renderer.addClass(toggle, 'd-block');
    }
  }
}
PrivateLayoutComponent.ɵfac = function PrivateLayoutComponent_Factory(t) {
  return new (t || PrivateLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_1__.NavbarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_2__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_device_detector_service__WEBPACK_IMPORTED_MODULE_3__.DeviceDetectorService));
};
PrivateLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: PrivateLayoutComponent,
  selectors: [["app-private-layout"]],
  hostBindings: function PrivateLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function PrivateLayoutComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
    }
  },
  decls: 7,
  vars: 2,
  consts: [[3, "resize"], ["id", "sidenav-overlay", 1, "sidenav-overlay", "d-none", 3, "click"], [4, "ngIf"], [1, "buy-now"], ["href", "https://1.envato.market/modern_admin_angular", "target", "_blank", 1, "btn", "bg-gradient-directional-purple", "round", "white", "btn-purple", "btn-glow", "px-2"]],
  template: function PrivateLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function PrivateLayoutComponent_Template_div_resize_0_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-navigation")(2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PrivateLayoutComponent_Template_div_click_3_listener($event) {
        return ctx.rightbar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, PrivateLayoutComponent_div_5_Template, 3, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, PrivateLayoutComponent_div_6_Template, 4, 0, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.customizer === "on");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.buybutton === "on");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__.NavigationComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_6__.CustomizerComponent, _customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalCustomizerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YXRlLWxheW91dC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9wcml2YXRlLWxheW91dC9wcml2YXRlLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5175:
/*!******************************************************************!*\
  !*** ./src/app/_layout/public-layout/public-layout.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicLayoutComponent": () => (/* binding */ PublicLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);



class PublicLayoutComponent {
  constructor(renderer, router, document) {
    this.renderer = renderer;
    this.router = router;
    this.document = document;
  }
  ngOnInit() {
    this.setBodyClass();
  }
  rightbar(event) {
    const toggle = document.getElementById('sidenav-overlay');
    if (event.currentTarget.className === 'sidenav-overlay d-block') {
      this.renderer.removeClass(toggle, 'd-block');
      this.document.body.classList.remove('menu-open');
      this.document.body.classList.add('menu-close');
      this.renderer.addClass(toggle, 'd-none');
    } else if (event.currentTarget.className === 'sidenav-overlay d-none') {
      this.renderer.removeClass(toggle, 'd-none');
      this.document.body.classList.remove('menu-close');
      this.document.body.classList.add('menu-open');
      this.renderer.addClass(toggle, 'd-block');
    }
  }
  setBodyClass() {
    const previosBodyClassList = [].slice.call(document.body.classList);
    const self = this;
    previosBodyClassList.forEach(function (c) {
      self.renderer.removeClass(document.body, c);
    });
    const currentBodyClassList = ['vertical-layout', 'bg-full-screen-image', 'vertical-overlay-menu', '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
    currentBodyClassList.forEach(function (c) {
      self.renderer.addClass(document.body, c);
    });
    // if (this.router.url === '/login' || (this.router.url === '')) {
    //   this.renderer.removeClass(document.body, 'fixed-navbar');
    // } else {
    //   this.renderer.addClass(document.body, 'fixed-navbar');
    // }
  }
}

PublicLayoutComponent.ɵfac = function PublicLayoutComponent_Factory(t) {
  return new (t || PublicLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
PublicLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PublicLayoutComponent,
  selectors: [["app-public-layout"]],
  decls: 2,
  vars: 0,
  consts: [["id", "sidenav-overlay", 1, "sidenav-overlay", "d-none", 3, "click"]],
  template: function PublicLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicLayoutComponent_Template_div_click_1_listener($event) {
        return ctx.rightbar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWMtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX2xheW91dC9wdWJsaWMtbGF5b3V0L3B1YmxpYy1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2141:
/*!**********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.config.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuSettingsConfig": () => (/* binding */ MenuSettingsConfig)
/* harmony export */ });
// Default menu settings configurations
const MenuSettingsConfig = {
  horizontal_menu: {
    items: [{
      title: 'Dashboard',
      icon: 'la-home',
      page: 'null',
      badge: {
        type: 'badge-info',
        value: '3'
      },
      submenu: {
        items: [{
          title: 'Sales',
          icon: 'la-dollar',
          page: '/dashboard/sales'
        }, {
          title: 'Ecommerce',
          icon: 'la-cart-plus',
          page: '/dashboard/ecommerce'
        }, {
          title: 'Hospital',
          icon: 'la-h-square',
          page: '/dashboard/hospital'
        }]
      }
    }, {
      title: 'Templates',
      icon: 'la-television',
      page: 'null',
      submenu: {
        items: [{
          title: 'Horizontal',
          page: 'null'
        }, {
          title: 'Vertical',
          page: 'null'
        }]
      }
    }, {
      title: 'APPS',
      icon: 'la-mobile',
      page: 'null',
      submenu: {
        items: [{
          title: 'To Do',
          icon: 'la-edit',
          page: '/todo-app'
        }, {
          title: 'Contacts',
          icon: 'la-users',
          page: '/contacts'
        }, {
          title: 'Email Application',
          icon: 'la-envelope',
          page: '/email'
        }, {
          title: 'Chat Application',
          icon: 'la-comments',
          page: '/chats'
        }, {
          title: 'Calenders',
          icon: 'la-calendar',
          page: 'null',
          submenu: {
            items: [{
              title: 'Basic',
              page: '/calender/basic'
            }, {
              title: 'Events',
              page: '/calender/events'
            }, {
              title: 'Add Event',
              page: '/calender/addevent'
            }]
          }
        }, {
          title: 'KanBan',
          icon: 'la-comments',
          page: '/kanban'
        }]
      }
    }, {
      title: 'Pages',
      icon: 'la-file-text',
      page: 'null',
      submenu: {
        items: [{
          title: 'News Feed',
          icon: 'la-newspaper-o',
          page: '/news-feed/news-feed'
        }, {
          title: 'Social Feed',
          icon: 'la-share-alt',
          page: '/social-feed/social-feed'
        }, {
          title: 'Invoice',
          icon: 'la-clipboard',
          page: 'null',
          submenu: {
            items: [{
              title: 'Invoice Summary',
              page: '/invoice/invoice-summary'
            }, {
              title: 'Invoice Template',
              page: '/invoice/invoice-template'
            }, {
              title: 'Invoice List',
              page: '/invoice/invoice-list'
            }]
          }
        }, {
          title: 'Timelines',
          icon: 'la-film',
          page: 'null',
          submenu: {
            items: [{
              title: 'Timelines Center',
              page: '/timelines/timelines-center'
            }, {
              title: 'Timelines Left ',
              page: '/timelines/timelines-left'
            }, {
              title: 'Timelines Right ',
              page: '/timelines/timelines-right'
            }, {
              title: 'Timelines Horizontal',
              page: '/timelines/timelines-horizontal'
            }]
          }
        }, {
          title: 'User',
          icon: 'la-user',
          page: 'null',
          submenu: {
            items: [{
              title: 'User Profile',
              page: '/user/user-profile'
            }, {
              title: 'User Cards',
              page: '/user/user-cards'
            }]
          }
        }, {
          title: 'File Uploader',
          icon: 'la la-cloud-upload',
          page: 'null',
          submenu: {
            items: [{
              title: 'Dropzone',
              page: '/dropzone/dropzone'
            }]
          }
        }, {
          title: 'Gallery',
          icon: 'la-image',
          page: 'null',
          submenu: {
            items: [{
              title: 'Gallery Grid',
              page: '/gallery/gallery-grid'
            }, {
              title: 'Gallery Grid with Desc',
              page: '/gallery/gallery-grid-desc'
            }, {
              title: 'Masonry Gallery',
              page: '/gallery/masonry-gallery'
            }, {
              title: 'Hover Effect',
              page: '/gallery/hover-effect'
            }]
          }
        }, {
          title: 'Authentication',
          icon: 'la-unlock',
          page: 'null',
          submenu: {
            items: [{
              title: 'Login Simple',
              page: '/authentication/loginSimple'
            }, {
              title: 'Login With Bg',
              page: '/authentication/loginWithBg'
            }, {
              title: 'Login With Bg Image',
              page: '/authentication/loginWithBgImage'
            }, {
              title: 'Login With Navbar',
              page: '/authentication/loginWithNavbar'
            }, {
              title: 'Login Advanced',
              page: '/authentication/loginAdvanced'
            }, {
              title: 'Register Simple',
              page: '/authentication/registerSimple'
            }, {
              title: 'Register With Bg',
              page: '/authentication/registerWithBg'
            }, {
              title: 'Register With Bg Image',
              page: '/authentication/registerWithBgImage'
            }, {
              title: 'Register With Navbar',
              page: '/authentication/registerWithNavbar'
            }, {
              title: 'Register Advanced',
              page: '/authentication/registerAdvanced'
            }, {
              title: 'Unlock User',
              page: '/authentication/unlockUser'
            }, {
              title: 'recover-password',
              page: '/authentication/recoverPassword'
            }]
          }
        }, {
          title: 'Error',
          icon: 'la-warning',
          page: 'null',
          submenu: {
            items: [{
              title: 'Error 400',
              page: '/error/error400'
            }, {
              title: 'Error 400 with Navbar',
              page: '/error/error400WithNavbar'
            }, {
              title: 'Error 401',
              page: '/error/error401'
            }, {
              title: 'Error 401 with Navbar',
              page: '/error/error401WithNavbar'
            }, {
              title: 'Error 403',
              page: '/error/error403'
            }, {
              title: 'Error 403 with Navbar',
              page: '/error/error403WithNavbar'
            }, {
              title: 'Error 404',
              page: '/error/error404'
            }, {
              title: 'Error 404 with Navbar',
              page: '/error/error404WithNavbar'
            }, {
              title: 'Error 500',
              page: '/error/error500'
            }, {
              title: 'Error 500 with Navbar',
              page: '/error/error500WithNavbar'
            }]
          }
        }, {
          title: 'Search',
          icon: 'la-search',
          page: 'null',
          submenu: {
            items: [{
              title: 'Search Page',
              page: '/others/searchPage'
            }, {
              title: 'Search Website',
              page: '/search/searchWebsite'
            }, {
              title: 'Search Images',
              page: '/search/searchImages'
            }, {
              title: 'Search Videos',
              page: '/search/searchVideos'
            }]
          }
        }, {
          title: 'Others',
          icon: 'la-file-text',
          page: 'null',
          submenu: {
            items: [{
              title: 'Coming Soon',
              page: 'null',
              submenu: {
                items: [{
                  title: 'Flat',
                  page: '/others/flat'
                }, {
                  title: 'Bg image',
                  page: '/others/bgImage'
                }
                // {
                //   title: 'Bg video',
                //   page: '/others/bgVideo'
                // },
                ]
              }
            }, {
              title: 'Maintenance',
              page: '/others/maintenance'
            }]
          }
        }]
      }
    }, {
      title: ' UI',
      icon: 'la-pencil',
      page: 'null',
      submenu: {
        items: [{
          title: 'Components',
          icon: 'la-server',
          page: 'null',
          submenu: {
            items: [{
              title: 'Alerts',
              page: '/components/alerts'
            }, {
              title: 'Callout',
              page: '/components/callout'
            }, {
              title: 'Buttons',
              page: 'null',
              submenu: {
                items: [{
                  title: 'Basic Buttons',
                  page: '/components/basic-buttons'
                }, {
                  title: 'Extended Buttons',
                  page: '/components/extended-buttons'
                }]
              }
            }, {
              title: 'Tooltips',
              page: '/components/tooltips'
            }, {
              title: 'Dropdowns',
              page: '/components/dropdowns'
            }, {
              title: 'List Group',
              page: '/components/list-group'
            }, {
              title: 'Popovers',
              page: '/components/popovers'
            }, {
              title: 'Carousel',
              page: '/components/carousel'
            }, {
              title: 'Collapse',
              page: '/components/collapse'
            }, {
              title: 'Modals',
              page: '/components/modals'
            }, {
              title: 'Progress',
              page: '/components/progress'
            }, {
              title: 'Pill Badges',
              page: '/components/pill-badges'
            }, {
              title: 'Scrollable',
              page: '/components/scrollable'
            }, {
              title: 'Navs Component',
              page: '/components/navs'
            }, {
              title: 'Badges',
              page: '/components/badges'
            }, {
              title: 'Media Objects',
              page: '/components/mediaobjects'
            }, {
              title: 'Spinners',
              page: '/components/spinners'
            }, {
              title: 'Pagination',
              page: '/components/pagination'
            }, {
              title: 'Pills Component',
              page: '/components/pills'
            }]
          }
        }, {
          title: 'Cards',
          icon: 'la-tablet',
          page: 'null',
          submenu: {
            items: [{
              title: 'Bootstrap',
              page: '/cards/bootstrap'
            }]
          }
        }, {
          title: 'Advance Cards',
          icon: 'la-fire',
          page: 'null',
          submenu: {
            items: [{
              title: 'Statistics',
              page: '/advanceCards/statistics'
            }, {
              title: 'Social',
              page: '/advanceCards/social'
            }, {
              title: 'Charts',
              page: '/advanceCards/charts'
            }]
          }
        }, {
          title: 'Extra Components',
          icon: 'la-diamond',
          page: 'null',
          submenu: {
            items: [{
              title: 'Date Time Picker',
              page: '/extraComponents/dateTimePicker'
            }, {
              title: 'TypeAhead',
              page: '/extraComponents/typeAhead'
            }, {
              title: 'Text Editer',
              page: '/extraComponents/text-editor'
            }]
          }
        }, {
          title: 'Icons',
          icon: 'la-eye',
          page: 'null',
          submenu: {
            items: [{
              title: 'Feather',
              page: '/icons/feather'
            }, {
              title: 'Line Awesome',
              page: '/icons/line-awesome'
            }, {
              title: 'Meteocons',
              page: '/icons/meteocons'
            }, {
              title: 'Simple Line Icons',
              page: '/icons/simple-line-icons'
            }]
          }
        }]
      }
    }, {
      section: 'Forms',
      icon: 'la-ellipsis-h'
    }, {
      title: 'Form ',
      icon: 'la-th-list',
      page: 'null',
      submenu: {
        items: [{
          title: 'Form Elements',
          icon: 'la-terminal',
          page: 'null',
          submenu: {
            items: [{
              title: 'Form Inputs',
              page: '/form-elements/form-inputs'
            }, {
              title: 'Input Groups',
              page: '/form-elements/input-groups'
            }, {
              title: 'Input Grid',
              page: '/form-elements/input-grid'
            }, {
              title: 'Checkboxes & Radios',
              page: '/form-elements/checkboxes-radios'
            }, {
              title: 'Switch',
              page: '/form-elements/switch'
            }, {
              title: 'Select',
              page: '/form-elements/select'
            }, {
              title: 'Extended Inputs',
              page: '/form-elements/extendedinputs'
            }]
          }
        }, {
          title: 'Form Layouts',
          icon: 'la-file-text',
          page: 'null',
          submenu: {
            items: [{
              title: 'Basic Forms',
              page: '/form-layouts/basic-forms'
            }, {
              title: 'Horizontal Forms',
              page: '/form-layouts/horizontal-forms'
            }, {
              title: 'Hidden Labels',
              page: '/form-layouts/hidden-labels'
            }, {
              title: 'Form Actions',
              page: '/form-layouts/form-actions'
            }, {
              title: 'Row Separator',
              page: '/form-layouts/row-separator'
            }, {
              title: 'Bordered',
              page: '/form-layouts/bordered'
            }, {
              title: 'Striped Rows',
              page: '/form-layouts/striped-rows'
            }, {
              title: 'Striped Labels',
              page: '/form-layouts/striped-labels'
            }]
          }
        }, {
          title: 'Form Wizard',
          icon: 'la-paste',
          page: '/form-wizard'
        }, {
          title: 'Form Repeater',
          icon: 'la-repeat',
          page: '/form-repeater'
        }]
      }
    }, {
      section: 'Charts',
      icon: 'la-ellipsis-h'
    }, {
      title: 'Charts',
      icon: 'la-line-chart',
      page: 'null',
      submenu: {
        items: [{
          title: 'ChartJs',
          icon: 'la-area-chart',
          page: '/chartjs/charts'
        }, {
          title: 'Chartist',
          icon: 'la-pie-chart',
          page: '/ngchartist/linecharts'
        }]
      }
    }, {
      section: 'Table',
      icon: 'la-ellipsis-h'
    }, {
      title: 'Tables',
      icon: 'la-table',
      page: 'null',
      submenu: {
        items: [{
          title: 'Boostrap Tables',
          icon: 'la-table',
          page: 'null',
          submenu: {
            items: [{
              title: 'Basic Table',
              page: '/boostraptables/basictable'
            }, {
              title: 'Table Border',
              page: '/boostraptables/tableborder'
            }, {
              title: 'Table Sizing',
              page: '/boostraptables/tablesizing'
            }, {
              title: 'Table Styling',
              page: '/boostraptables/tablestyling'
            }, {
              title: 'Table Components',
              page: '/boostraptables/tablecomponents'
            }, {
              title: 'Ngx BoostrapTables',
              page: '/boostraptables/ngxboostraptables'
            }]
          }
        }, {
          title: 'Data Tables',
          icon: 'la-th',
          page: 'null',
          submenu: {
            items: [{
              title: 'Basic Installation',
              page: '/datatables/basicinitialisation'
            }, {
              title: 'Styling',
              page: '/datatables/styling'
            }, {
              title: 'API',
              page: '/datatables/api'
            }]
          }
        }, {
          title: 'DataTables Ext',
          icon: 'la-th-large',
          page: 'null',
          submenu: {
            items: [{
              title: 'Buttons',
              page: '/datatablesext/buttons'
            }, {
              title: 'HTML5 Data Export',
              page: '/datatablesext/html5dataexport'
            }, {
              title: 'Hidden On load',
              page: '/datatablesext/hiddentable'
            }]
          }
        }]
      }
    }, {
      section: 'SUPPORT',
      icon: 'la-ellipsis-h'
    }, {
      title: 'Support',
      icon: 'la-support',
      page: 'null',
      submenu: {
        items: [{
          title: 'Starter Kit',
          icon: 'la-puzzle-piece',
          page: 'https://modern-admin-8453e.firebaseapp.com/changelog',
          isExternalLink: true
        }, {
          title: 'Changelog',
          icon: 'la-file',
          page: '/changelog',
          badge: {
            type: 'badge-danger',
            value: '3.5'
          }
        }, {
          title: 'Raise Support',
          icon: 'la-support',
          page: 'https://pixinvent.ticksy.com/',
          isExternalLink: true
        }, {
          title: 'Documentaion',
          icon: 'la-text-height',
          page: 'https://modern-admin-docs.web.app/html/ltr/documentation/index.html',
          isExternalLink: true
        }]
      }
    }]
  },
  vertical_menu: {
    items: [{
      title: 'Ana Sayfa',
      icon: 'la-home',
      page: '/dashboard'
    }, {
      title: 'Şoförler',
      icon: 'la-user',
      page: '/drivers'
    }, {
      title: 'Müşteriler',
      icon: 'la-user',
      page: '/customers'
    }, {
      title: 'Rezervasyonlar',
      icon: 'la-cart-plus',
      page: '/reservations'
    }, {
      section: 'Tanımlar',
      icon: 'la-ellipsis-h'
    }, {
      title: 'Dökümanlar',
      icon: 'la-edit',
      page: '/documents'
    }, {
      title: 'Belgeler',
      icon: 'la-users',
      page: '/licences'
    }, {
      title: 'Rezervasyon Tipleri',
      icon: 'la-cog',
      page: '/reservationtypes'
    }, {
      title: 'Ayarlar',
      icon: 'la-cog',
      page: '/settings'
    }]
  }
};

/***/ }),

/***/ 63844:
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/menu-settings.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU_SETTINGS_CONFIG": () => (/* binding */ MENU_SETTINGS_CONFIG),
/* harmony export */   "MenuSettingsService": () => (/* binding */ MenuSettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);







const MENU_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('menuCustomConfig');
class MenuSettingsService {
  constructor(_router, _config) {
    this._router = _router;
    this._config = _config;
    // Set the default config from the user provided config (from forRoot)
    this._defaultConfig = _config;
    // Initialize the service
    this._init();
  }
  _init() {
    // Set the config from the default config
    this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this._defaultConfig));
    // Reload the default layout config on every RoutesRecognized event
    // if the current layout config is different from the default one
    this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.RoutesRecognized)).subscribe(() => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual(this._configSubject.getValue().layout, this._defaultConfig.layout)) {
        // Clone the current config
        const config = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this._configSubject.getValue());
        // Set the config
        this._configSubject.next(config);
      }
    });
  }
  set config(value) {
    // Get the value from the behavior subject
    let config = this._configSubject.getValue();
    // Merge the new config
    config = lodash__WEBPACK_IMPORTED_MODULE_0__.merge({}, config, value);
    // Notify the observers
    this._configSubject.next(config);
  }
  get config() {
    return this._configSubject.asObservable();
  }
}
MenuSettingsService.ɵfac = function MenuSettingsService_Factory(t) {
  return new (t || MenuSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MENU_SETTINGS_CONFIG));
};
MenuSettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: MenuSettingsService,
  factory: MenuSettingsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 56270:
/*!*****************************************************!*\
  !*** ./src/app/_layout/settings/settings.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _theme_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-settings.service */ 43024);
/* harmony import */ var _menu_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-settings.service */ 63844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class SettingsModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('SettingsModule is already loaded. Import it in the AppModule only!');
    }
  }
  static forRoot(themeConfig, menuConfig) {
    return {
      ngModule: SettingsModule,
      providers: [{
        provide: _theme_settings_service__WEBPACK_IMPORTED_MODULE_0__.THEME_SETTINGS_CONFIG,
        useValue: themeConfig
      }, {
        provide: _menu_settings_service__WEBPACK_IMPORTED_MODULE_1__.MENU_SETTINGS_CONFIG,
        useValue: menuConfig
      }]
    };
  }
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) {
  return new (t || SettingsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](SettingsModule, 12));
};
SettingsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SettingsModule
});
SettingsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});

/***/ }),

/***/ 49734:
/*!***********************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.config.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeSettingsConfig": () => (/* binding */ ThemeSettingsConfig)
/* harmony export */ });
// Default theme settings configurations
const ThemeSettingsConfig = {
  colorTheme: 'semi-dark',
  layout: {
    style: 'vertical',
    pattern: 'fixed' // fixed, boxed, static
  },

  menuColor: 'menu-dark',
  navigation: 'menu-collapsible',
  menu: 'expand',
  header: 'fix',
  footer: 'static',
  customizer: 'off',
  buybutton: 'off',
  headerIcons: {
    maximize: 'off',
    search: 'off',
    internationalization: 'off',
    notification: 'on',
    email: 'on' // on, off
  },

  brand: {
    brand_name: 'Forvalet ',
    logo: {
      type: 'internal',
      value: 'assets/custom/images/logo.png' // recommended location for custom images
      // type:'url',
      // value:'http://evolvision.com/wp-content/uploads/2018/01/envelope4-green.png'
    }
  },

  defaultTitleSuffix: 'Forvalet saatlik sürücü bulma'
};

/***/ }),

/***/ 43024:
/*!************************************************************!*\
  !*** ./src/app/_layout/settings/theme-settings.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "THEME_SETTINGS_CONFIG": () => (/* binding */ THEME_SETTINGS_CONFIG),
/* harmony export */   "ThemeSettingsService": () => (/* binding */ ThemeSettingsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);







const THEME_SETTINGS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('themeCustomConfig');
class ThemeSettingsService {
  constructor(_router, _config) {
    this._router = _router;
    this._config = _config;
    // Set the default config from the user provided config (from forRoot)
    this._defaultConfig = _config;
    // Initialize the service
    this._init();
  }
  _init() {
    // Set the config from the default config
    this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this._defaultConfig));
    // Reload the default layout config on every RoutesRecognized event
    // if the current layout config is different from the default one
    this._router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.RoutesRecognized)).subscribe(() => {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual(this._configSubject.getValue().layout, this._defaultConfig.layout)) {
        // Clone the current config
        const config = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this._configSubject.getValue());
        // Reset the layout from the default config
        // config.layout = _.cloneDeep(this._defaultConfig.layout);
        // Set the config
        this._configSubject.next(config);
      }
    });
  }
  set config(value) {
    // Get the value from the behavior subject
    let config = this._configSubject.getValue();
    // Merge the new config
    config = lodash__WEBPACK_IMPORTED_MODULE_0__.merge({}, config, value);
    // Notify the observers
    this._configSubject.next(config);
  }
  get config() {
    return this._configSubject.asObservable();
  }
}
ThemeSettingsService.ɵfac = function ThemeSettingsService_Factory(t) {
  return new (t || ThemeSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](THEME_SETTINGS_CONFIG));
};
ThemeSettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ThemeSettingsService,
  factory: ThemeSettingsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 61585:
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class AlertService {
  constructor(router) {
    this.router = router;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.keepAfterNavigationChange = false;
    // Clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // Only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // Clear alert
          this.subject.next({});
        }
      }
    });
  }
  success(message, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({
      type: 'success',
      text: message
    });
  }
  error(message, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({
      type: 'error',
      text: message
    });
  }
  getMessage() {
    return this.subject.asObservable();
  }
}
AlertService.ɵfac = function AlertService_Factory(t) {
  return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AlertService,
  factory: AlertService.ɵfac
});

/***/ }),

/***/ 13780:
/*!******************************************************!*\
  !*** ./src/app/_services/application-api.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationApiService": () => (/* binding */ ApplicationApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
class ApplicationApiService {
  constructor(http) {
    this.http = http;
    this.apiBaseURL = 'assets/data';
    this.loadChatsDataURL = null;
    this.loadEmailDataURL = null;
    this.loadChatContactDataURL = null;
    this.loadChatsDataURL = `${this.apiBaseURL}/application/chats.json`;
    this.loadChatContactDataURL = `${this.apiBaseURL}/application/chatcontact.json`;
    this.loadEmailDataURL = `${this.apiBaseURL}/application/email.json`;
  }
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // Error
      console.error('error:', error.error.message);
    } else {
      // Error
      console.error(`Api server returned ${error.status}, ` + `error body: ${error.error}`);
    }
    // throwError is observable
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Error has happened');
  }
  extractData(res) {
    const body = res;
    return body || {};
  }
  getChatsData() {
    return this.http.get(this.loadChatsDataURL, httpOptions);
  }
  getChatContactData() {
    return this.http.get(this.loadChatContactDataURL, httpOptions);
  }
  getEmailData() {
    return this.http.get(this.loadEmailDataURL, httpOptions);
  }
}
ApplicationApiService.ɵfac = function ApplicationApiService_Factory(t) {
  return new (t || ApplicationApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
ApplicationApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ApplicationApiService,
  factory: ApplicationApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 88368:
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);



class AuthService {
  constructor(afAuth) {
    this.afAuth = afAuth;
  }
  // Facebook login
  doFacebookLogin() {
    return new Promise((resolve, reject) => {
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.FacebookAuthProvider();
      this.afAuth.signInWithPopup(provider).then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }
  // Github login
  doGitHubLogin() {
    return new Promise((resolve, reject) => {
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GithubAuthProvider();
      this.afAuth.signInWithPopup(provider).then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }
  // Twitter login
  doTwitterLogin() {
    return new Promise((resolve, reject) => {
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.TwitterAuthProvider();
      this.afAuth.signInWithPopup(provider).then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }
  // Google login
  doGoogleLogin() {
    return new Promise((resolve, reject) => {
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.signInWithPopup(provider).then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }
  // Register
  doRegister(value) {
    return new Promise((resolve, reject) => {
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(value.email, value.password).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
  // Login
  doLogin(value) {
    return new Promise((resolve, reject) => {
      firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(value.email, value.password).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
  // Logout
  doLogout() {
    return new Promise((resolve, reject) => {
      if (firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('remember');
        this.afAuth.signOut();
        resolve();
      } else {
        localStorage.removeItem('currentUser');
        resolve();
      }
    });
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac
});

/***/ }),

/***/ 19383:
/*!****************************************!*\
  !*** ./src/app/_services/chart.api.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartApiService": () => (/* binding */ ChartApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
class ChartApiService {
  constructor(http) {
    this.http = http;
    this.apiBaseURL = 'assets/data';
    this.loadDataURL = null;
    this.loadSalesDataURL = null;
    this.loadEcommerceDataURL = null;
    this.loadStatisticsDataURL = null;
    this.loadTimelineDataURL = null;
    this.loadInvoiceDataURL = null;
    this.loadDataURL = `${this.apiBaseURL}/chartist/charts/chartist.json`;
    this.loadSalesDataURL = `${this.apiBaseURL}/dashboard/sales/chartist.json`;
    this.loadEcommerceDataURL = `${this.apiBaseURL}/dashboard/ecommerce/chartist.json`;
    this.loadStatisticsDataURL = `${this.apiBaseURL}/advancecard/statistics/chartist.json`;
    this.loadStatisticsDataURL = `${this.apiBaseURL}/advancecard/statistics/chartist.json`;
    this.loadTimelineDataURL = `${this.apiBaseURL}/user-profile/user-profile.json`;
    this.loadInvoiceDataURL = `${this.apiBaseURL}/invoice-summary/invoice-summary.json`;
  }
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // Error
      console.error('error:', error.error.message);
    } else {
      // Error
      console.error(`Api server returned ${error.status}, ` + `error body: ${error.error}`);
    }
    // throwError is observable
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Error has happened');
  }
  extractData(res) {
    const body = res;
    return body || {};
  }
  getChartistData() {
    return this.http.get(this.loadDataURL, httpOptions);
  }
  getSalesData() {
    return this.http.get(this.loadSalesDataURL, httpOptions);
  }
  getEcommerceData() {
    return this.http.get(this.loadEcommerceDataURL, httpOptions);
  }
  getStatisticsData() {
    return this.http.get(this.loadStatisticsDataURL, httpOptions);
  }
  getTimelineData() {
    return this.http.get(this.loadTimelineDataURL, httpOptions);
  }
  getInvoiceData() {
    return this.http.get(this.loadInvoiceDataURL, httpOptions);
  }
}
ChartApiService.ɵfac = function ChartApiService_Factory(t) {
  return new (t || ChartApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
ChartApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ChartApiService,
  factory: ChartApiService.ɵfac
});

/***/ }),

/***/ 17130:
/*!************************************************!*\
  !*** ./src/app/_services/customers.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersService": () => (/* binding */ CustomersService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class CustomersService {
  constructor(http) {
    this.http = http;
  }
  getCustomers() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "customers");
  }
}
CustomersService.ɵfac = function CustomersService_Factory(t) {
  return new (t || CustomersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
CustomersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CustomersService,
  factory: CustomersService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 67448:
/*!*************************************************!*\
  !*** ./src/app/_services/definition.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefinitionService": () => (/* binding */ DefinitionService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DefinitionService {
  constructor(http) {
    this.http = http;
  }
  getDocuments() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/documenttypes");
  }
  getLicences() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/licencetypes");
  }
  getReservationTypes() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/reservationtypes");
  }
  addCompounds(model) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/reservationtypes", model);
  }
  editCompounds(model, id) {
    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/reservationtypes/" + id, model);
  }
  deleteCompounds(id) {
    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/reservationtypes/" + id);
  }
  addDocuments(model) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/documenttypes", model);
  }
  editDocuments(model, id) {
    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/documenttypes/" + id, model);
  }
  deleteDocuments(id) {
    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/documenttypes/" + id);
  }
  addLicenceType(model) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/licencetypes", model);
  }
  editLicenceType(model, id) {
    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/licencetypes/" + id, model);
  }
  deleteLicenceType(id) {
    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "definitions/licencetypes/" + id);
  }
}
DefinitionService.ɵfac = function DefinitionService_Factory(t) {
  return new (t || DefinitionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DefinitionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DefinitionService,
  factory: DefinitionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 57104:
/*!******************************************************!*\
  !*** ./src/app/_services/device-detector.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceDetectorService": () => (/* binding */ DeviceDetectorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _device_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device-detector */ 68498);




class DeviceDetectorService {
  constructor(platformId) {
    this.platformId = platformId;
    this.userAgent = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId) ? window.navigator.userAgent.toLowerCase() : '';
  }
  find(match) {
    return this.userAgent.indexOf(match) !== -1;
  }
  findMatch(type) {
    return Object.entries(type).find(([key, val]) => !!val) || [];
  }
  deviceOS() {
    const isWindows = this.find('windows');
    const isIos = this.deviceShared()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.Iphone] || this.deviceShared()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.Ipad];
    return {
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Windows]: isWindows,
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Macos]: !isIos && this.find('mac'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Android]: !isWindows && this.find('android'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Ios]: isIos,
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Blackberry]: this.find('blackberry') || this.find('bb10'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Fxos]: (this.find('(mobile') || this.find('(tablet')) && this.find(' rv:')
    };
  }
  deviceShared() {
    return {
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.Iphone]: !this.find('windows') && this.find('iphone'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.Ipad]: this.find('ipad') || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
    };
  }
  deviceMobile() {
    return {
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.Iphone]: this.deviceShared()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.Iphone],
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.AndroidPhone]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Android] && this.find('mobile'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.WindowsPhone]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Windows] && this.find('phone'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.BlackberryPhone]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Blackberry] && !this.find('tablet'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.Meego]: this.find('meego'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.FxosPhone]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Fxos] && this.find('mobile')
    };
  }
  deviceTablet() {
    return {
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.Ipad]: this.deviceShared()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.Ipad],
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.AndroidTablet]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Android] && !this.find('mobile'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.BlackberryTablet]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Blackberry] && this.find('tablet'),
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.WindowsTablet]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Windows] && this.find('touch') && !this.deviceMobile()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceMobile.WindowsPhone],
      [_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceTablet.FxosTablet]: this.deviceOS()[_device_detector__WEBPACK_IMPORTED_MODULE_0__.DeviceOs.Fxos] && this.find('tablet')
    };
  }
  isMobile() {
    return this.findMatch(this.deviceMobile()).length > 0;
  }
  isTablet() {
    return this.findMatch(this.deviceTablet()).length > 0;
  }
  isDesktop() {
    return !this.isTablet() && !this.isMobile();
  }
  getDeviceInfo() {
    const touchDevices = this.findMatch(Object.assign(Object.assign({}, this.deviceMobile()), this.deviceTablet()));
    return {
      platform: this.isDesktop() ? _device_detector__WEBPACK_IMPORTED_MODULE_0__.DevicePlatform.Desktop : this.isMobile() ? _device_detector__WEBPACK_IMPORTED_MODULE_0__.DevicePlatform.Mobile : _device_detector__WEBPACK_IMPORTED_MODULE_0__.DevicePlatform.Tablet,
      os: this.findMatch(this.deviceOS())[0],
      device: touchDevices.length ? touchDevices[0] : _device_detector__WEBPACK_IMPORTED_MODULE_0__.DevicePlatform.Desktop
    };
  }
}
DeviceDetectorService.ɵfac = function DeviceDetectorService_Factory(t) {
  return new (t || DeviceDetectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID));
};
DeviceDetectorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: DeviceDetectorService,
  factory: DeviceDetectorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 68498:
/*!**********************************************!*\
  !*** ./src/app/_services/device-detector.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceMobile": () => (/* binding */ DeviceMobile),
/* harmony export */   "DeviceOs": () => (/* binding */ DeviceOs),
/* harmony export */   "DevicePlatform": () => (/* binding */ DevicePlatform),
/* harmony export */   "DeviceTablet": () => (/* binding */ DeviceTablet)
/* harmony export */ });
var DevicePlatform;
(function (DevicePlatform) {
  DevicePlatform["Mobile"] = "mobile";
  DevicePlatform["Tablet"] = "tablet";
  DevicePlatform["Desktop"] = "desktop";
})(DevicePlatform || (DevicePlatform = {}));
var DeviceOs;
(function (DeviceOs) {
  DeviceOs["Ios"] = "ios";
  DeviceOs["Android"] = "android";
  DeviceOs["Macos"] = "macos";
  DeviceOs["Windows"] = "windows";
  DeviceOs["Blackberry"] = "blackberry";
  DeviceOs["Fxos"] = "fxos";
})(DeviceOs || (DeviceOs = {}));
var DeviceMobile;
(function (DeviceMobile) {
  DeviceMobile["AndroidPhone"] = "androidPhone";
  DeviceMobile["Iphone"] = "iphone";
  DeviceMobile["WindowsPhone"] = "windowsPhone";
  DeviceMobile["BlackberryPhone"] = "blackberryPhone";
  DeviceMobile["Meego"] = "meego";
  DeviceMobile["FxosPhone"] = "fxosPhone";
})(DeviceMobile || (DeviceMobile = {}));
var DeviceTablet;
(function (DeviceTablet) {
  DeviceTablet["Ipad"] = "ipad";
  DeviceTablet["AndroidTablet"] = "androidTablet";
  DeviceTablet["BlackberryTablet"] = "blackberryTablet";
  DeviceTablet["WindowsTablet"] = "windowsTablet";
  DeviceTablet["FxosTablet"] = "fxosTablet";
})(DeviceTablet || (DeviceTablet = {}));

/***/ }),

/***/ 12075:
/*!*********************************************!*\
  !*** ./src/app/_services/driver.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverService": () => (/* binding */ DriverService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DriverService {
  constructor(http) {
    this.http = http;
  }
  getDrivers() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "drivers");
  }
  get(id) {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "drivers/" + id);
  }
  acceptDriver(id) {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "drivers/accept/" + id);
  }
}
DriverService.ɵfac = function DriverService_Factory(t) {
  return new (t || DriverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DriverService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DriverService,
  factory: DriverService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 25073:
/*!***********************************************!*\
  !*** ./src/app/_services/identity.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityService": () => (/* binding */ IdentityService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class IdentityService {
  constructor(http) {
    this.http = http;
  }
  dologin(value) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}auth`, value);
  }
  doLogout() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('currentUser');
      resolve();
    });
  }
  forgetPassword(value) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}identity/reset`, value);
  }
  changePassword(value) {
    return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}identity/changepassword`, value);
  }
}
IdentityService.ɵfac = function IdentityService_Factory(t) {
  return new (t || IdentityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
IdentityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: IdentityService,
  factory: IdentityService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9392:
/*!*********************************************!*\
  !*** ./src/app/_services/navbar.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarService": () => (/* binding */ NavbarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class NavbarService {
  constructor() {
    this.mouseInMenuRegion = false;
    this.fixedMenu = false;
  }
  isMouseInRegion() {
    return this.mouseInMenuRegion;
  }
  setMouseInRegion(flag) {
    this.mouseInMenuRegion = flag;
  }
  isFixedMenu() {
    return this.fixedMenu;
  }
  setFixedMenu(flag) {
    this.fixedMenu = flag;
  }
}
NavbarService.ɵfac = function NavbarService_Factory(t) {
  return new (t || NavbarService)();
};
NavbarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NavbarService,
  factory: NavbarService.ɵfac
});

/***/ }),

/***/ 47266:
/*!***************************************************************!*\
  !*** ./src/app/_services/quill-initialize-service.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuillInitializeServiceService": () => (/* binding */ QuillInitializeServiceService)
/* harmony export */ });
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill */ 63786);
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_applications_quill_quillAutolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/applications/quill/quillAutolinks */ 12852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class QuillInitializeServiceService {
  constructor() {
    var Link = quill__WEBPACK_IMPORTED_MODULE_0___default()["import"]('formats/link');
    Link.sanitize = url => {
      if (url.indexOf("http") <= -1) {
        url = "https://" + url;
      }
      return url;
    };
    quill__WEBPACK_IMPORTED_MODULE_0___default().register('modules/autoLink', _content_applications_quill_quillAutolinks__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
}
QuillInitializeServiceService.ɵfac = function QuillInitializeServiceService_Factory(t) {
  return new (t || QuillInitializeServiceService)();
};
QuillInitializeServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: QuillInitializeServiceService,
  factory: QuillInitializeServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 35032:
/*!**************************************************!*\
  !*** ./src/app/_services/reservation.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationService": () => (/* binding */ ReservationService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class ReservationService {
  constructor(http) {
    this.http = http;
  }
  getDocuments() {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "reservations");
  }
  getDocument(id) {
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "reservations/" + id);
  }
}
ReservationService.ɵfac = function ReservationService_Factory(t) {
  return new (t || ReservationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ReservationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ReservationService,
  factory: ReservationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 68597:
/*!************************************************!*\
  !*** ./src/app/_services/table-api.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableApiService": () => (/* binding */ TableApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




const httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
class TableApiService {
  constructor(http) {
    this.http = http;
    this.apiBaseURL = 'assets/data';
    this.loadEcommerceTableDataURL = null;
    this.loadInvoiceTableDataURL = null;
    this.loadBasicTableDataURL = null;
    this.loadTableBorderDataURL = null;
    this.loadTableStylingDataURL = null;
    this.loadTableApiDataURL = null;
    this.loadTableInitialisationDataURL = null;
    this.loadStylingDataURL = null;
    this.loadTableButtonDataURL = null;
    this.loadTableExportDataURL = null;
    this.loadTableHiddenDataURL = null;
    this.loadTableNgxDataURL = null;
    this.loadEcommerceTableDataURL = `${this.apiBaseURL}/dashboard/ecommerce/datatable.json`;
    this.loadInvoiceTableDataURL = `${this.apiBaseURL}/invoice/invoicelist/invoicetable.json`;
    this.loadBasicTableDataURL = `${this.apiBaseURL}/boostraptable/basictable.json`;
    this.loadTableBorderDataURL = `${this.apiBaseURL}/boostraptable/tableborder.json`;
    this.loadTableStylingDataURL = `${this.apiBaseURL}/boostraptable/tablestyling.json`;
    this.loadTableApiDataURL = `${this.apiBaseURL}/datatables/tableapi/tableapi.json`;
    this.loadTableInitialisationDataURL = `${this.apiBaseURL}/datatables/tableinitialisation/tableinitialisation.json`;
    this.loadStylingDataURL = `${this.apiBaseURL}/datatables/tablestyling/tablestyling.json`;
    this.loadTableButtonDataURL = `${this.apiBaseURL}/datatables/buttons/tablebuttons.json`;
    this.loadTableExportDataURL = `${this.apiBaseURL}/datatables/html5dataexport/html5dataexport.json`;
    this.loadTableHiddenDataURL = `${this.apiBaseURL}/datatables/hiddentable/hiddentable.json`;
    this.loadTableNgxDataURL = `${this.apiBaseURL}/boostraptable/ngxboostraptables.json`;
  }
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // Error
      console.error('error:', error.error.message);
    } else {
      // Error
      console.error(`Api server returned ${error.status}, ` + `error body: ${error.error}`);
    }
    // throwError is observable
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Error has happened');
  }
  extractData(res) {
    const body = res;
    return body || {};
  }
  getEcommerceTableData() {
    return this.http.get(this.loadEcommerceTableDataURL, httpOptions);
  }
  getInvoiceTableData() {
    return this.http.get(this.loadInvoiceTableDataURL, httpOptions);
  }
  getBasicTableData() {
    return this.http.get(this.loadBasicTableDataURL, httpOptions);
  }
  getTableBorderData() {
    return this.http.get(this.loadTableBorderDataURL, httpOptions);
  }
  getTableStylingData() {
    return this.http.get(this.loadTableStylingDataURL, httpOptions);
  }
  getTableApiData() {
    return this.http.get(this.loadTableApiDataURL, httpOptions);
  }
  getTableInitialisationData() {
    return this.http.get(this.loadTableInitialisationDataURL, httpOptions);
  }
  getStylingData() {
    return this.http.get(this.loadStylingDataURL, httpOptions);
  }
  getTableButtonData() {
    return this.http.get(this.loadTableButtonDataURL, httpOptions);
  }
  getTableExportData() {
    return this.http.get(this.loadTableExportDataURL, httpOptions);
  }
  getTableHiddenData() {
    return this.http.get(this.loadTableHiddenDataURL, httpOptions);
  }
  getTableNgxData() {
    return this.http.get(this.loadTableNgxDataURL, httpOptions);
  }
}
TableApiService.ɵfac = function TableApiService_Factory(t) {
  return new (t || TableApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
};
TableApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TableApiService,
  factory: TableApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_helpers/app.constants */ 39126);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-loading-bar/core */ 30574);
/* harmony import */ var _services_device_detector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/device-detector.service */ 57104);
/* harmony import */ var _layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/settings/menu-settings.service */ 63844);
/* harmony import */ var _layout_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layout/settings/theme-settings.service */ 43024);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _helpers_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_helpers/alert.component */ 30243);















function AppComponent_router_outlet_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
  }
}
class AppComponent {
  constructor(spinner, document, router, loader, deviceService, _menuSettingsService, _themeSettingsService, titleService) {
    this.spinner = spinner;
    this.document = document;
    this.router = router;
    this.loader = loader;
    this.deviceService = deviceService;
    this._menuSettingsService = _menuSettingsService;
    this._themeSettingsService = _themeSettingsService;
    this.titleService = titleService;
    this.showContent = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this._unsubscribeAllMenu = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.setTitle();
  }
  ngOnInit() {
    this._menuSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAllMenu)).subscribe(config => {
      this._menuSettingsConfig = config;
    });
    this._themeSettingsService.config.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(config => {
      this._themeSettingsConfig = config;
    });
    // page progress bar percentage
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationStart) {
        // set page progress bar loading to start on NavigationStart event router
        this.loader.start();
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteConfigLoadStart) {
        this.loader.increment(35);
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteConfigLoadEnd) {
        this.loader.increment(75);
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationCancel) {
        // set page progress bar loading to end on NavigationEnd event router
        this.loader.complete();
        this.showContent = true;
        // close menu for mobile view
        if (this.deviceService.isMobile() || window.innerWidth < _helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.MOBILE_RESPONSIVE_WIDTH) {
          if (document.body.classList.contains('menu-open')) {
            document.body.classList.remove('menu-open');
            document.body.classList.add('menu-close');
          }
        }
        if (this.title && this.router.url !== '/') {
          this.titleService.setTitle(this.title + ' - ' + this._themeSettingsConfig.defaultTitleSuffix);
        } else {
          if ((this.router.url === '/' || this.router.url === '/login' || this.router.url === '/register') && !localStorage.getItem('remember')) {
            this.title = 'Login with Background Image';
            this.titleService.setTitle(this.title + '' + this._themeSettingsConfig.defaultTitleSuffix);
            this.title = '';
          }
        }
      }
    });
  }
  setTitle() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
        if (this._themeSettingsConfig.layout.style === 'vertical') {
          for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
            if (!this._menuSettingsConfig.vertical_menu.items[i].submenu && this._menuSettingsConfig.vertical_menu.items[i].page === this.router.url) {
              this.title = this._menuSettingsConfig.vertical_menu.items[i].title;
              break;
            } else if (this._menuSettingsConfig.vertical_menu.items[i].submenu) {
              // Level 1 menu
              for (let j = 0; j < this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
                if (!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu && this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === this.router.url) {
                  this.title = this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].title;
                  break;
                } else if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
                  // Level 2 menu
                  for (let k = 0; k < this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                    if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                      this.title = this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].title;
                    }
                  }
                }
              }
            }
          }
        } else if (this._themeSettingsConfig.layout.style === 'horizontal') {
          for (let i = 0; i < this._menuSettingsConfig.horizontal_menu.items.length; i++) {
            if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu && this._menuSettingsConfig.horizontal_menu.items[i].page === this.router.url) {
              this.title = this._menuSettingsConfig.horizontal_menu.items[i].title;
              break;
            } else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu) {
              // Level 1 menu
              for (let j = 0; j < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items.length; j++) {
                if (!this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu && this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].page === this.router.url) {
                  this.title = this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].title;
                  break;
                } else if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu) {
                  // Level 2 menu
                  for (let k = 0; k < this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items.length; k++) {
                    if (this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                      this.title = this._menuSettingsConfig.horizontal_menu.items[i].submenu.items[j].submenu.items[k].title;
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_device_detector_service__WEBPACK_IMPORTED_MODULE_1__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_layout_settings_menu_settings_service__WEBPACK_IMPORTED_MODULE_2__.MenuSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_layout_settings_theme_settings_service__WEBPACK_IMPORTED_MODULE_3__.ThemeSettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Title));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-main"]],
  decls: 3,
  vars: 2,
  consts: [["height", "3px", "color", "#FF4961", 3, "includeSpinner"], [4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ngx-loading-bar", 0)(1, "app-alert");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_router_outlet_2_Template, 1, 0, "router-outlet", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("includeSpinner", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showContent);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__.LoadingBarComponent, _helpers_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_guards/auth.guard */ 71094);
/* harmony import */ var _helpers_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers/alert.component */ 30243);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/alert.service */ 61585);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/auth.service */ 88368);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/chart.api */ 19383);
/* harmony import */ var _services_table_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/table-api.service */ 68597);
/* harmony import */ var _services_application_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/application-api.service */ 13780);
/* harmony import */ var _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/quill-initialize-service.service */ 47266);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_layout/settings/settings.module */ 56270);
/* harmony import */ var _layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_layout/settings/theme-settings.config */ 49734);
/* harmony import */ var _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_layout/settings/menu-settings.config */ 2141);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_layout/header/header.component */ 56075);
/* harmony import */ var _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_layout/header/vertical/vertical.component */ 18283);
/* harmony import */ var _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_layout/header/horizontal/horizontal.component */ 71376);
/* harmony import */ var _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_layout/header/full-layout-navbar/full-layout-navbar.component */ 70039);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_layout/footer/footer.component */ 79007);
/* harmony import */ var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_layout/navigation/navigation.component */ 49622);
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ 5175);
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ 8915);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./register */ 54193);
/* harmony import */ var _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./social-signin/social-signin.component */ 81459);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login */ 60625);
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./changelog/changelog.component */ 29479);
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_services/navbar.service */ 9392);
/* harmony import */ var _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_layout/navigation/verticalnav/verticalnav.component */ 53200);
/* harmony import */ var _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_layout/navigation/horizontalnav/horizontalnav.component */ 45463);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ngx-spinner */ 17217);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @ngx-loading-bar/router */ 41108);
/* harmony import */ var _services_device_detector_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_services/device-detector.service */ 57104);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./_layout/customizer/customizer.component */ 80842);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./content/partials/partials.module */ 99532);
/* harmony import */ var _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_layout/customizer/horizontal-customizer/horizontal-customizer.component */ 40818);
/* harmony import */ var _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_layout/blockui/block-template.component */ 86196);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./content/partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./_layout/full-layout/full-layout.component */ 27240);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_api/user/user.service */ 15496);
/* harmony import */ var _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./login/privacy-policy/privacy-policy.component */ 62199);
/* harmony import */ var _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./login/terms-condition/terms-condition.component */ 76922);
/* harmony import */ var _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./drivers/drivers.component */ 85943);
/* harmony import */ var _drivers_driver_detail_driver_detail_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./drivers/driver-detail/driver-detail.component */ 59382);
/* harmony import */ var _document_type_document_type_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./document-type/document-type.component */ 57631);
/* harmony import */ var _licence_type_licence_type_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./licence-type/licence-type.component */ 69527);
/* harmony import */ var _ride_settings_ride_settings_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ride-settings/ride-settings.component */ 73235);
/* harmony import */ var _reservation_types_reservation_types_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./reservation-types/reservation-types.component */ 70946);
/* harmony import */ var _reservation_types_add_reservationtype_add_reservationtype_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./reservation-types/add-reservationtype/add-reservationtype.component */ 36010);
/* harmony import */ var _document_type_add_documnettype_add_documnettype_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./document-type/add-documnettype/add-documnettype.component */ 92169);
/* harmony import */ var _licence_type_add_licencetype_add_licencetype_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./licence-type/add-licencetype/add-licencetype.component */ 96395);
/* harmony import */ var _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./reservations/reservations.component */ 74452);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./customers/customers.component */ 14643);
/* harmony import */ var _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./customers/customer-detail/customer-detail.component */ 50441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/common */ 94666);


















// Routing

// Components



















// perfect scroll bar

// spinner





































;
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineInjector"]({
  providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, _services_chart_api__WEBPACK_IMPORTED_MODULE_5__.ChartApiService, _services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService, _services_navbar_service__WEBPACK_IMPORTED_MODULE_26__.NavbarService, _services_table_api_service__WEBPACK_IMPORTED_MODULE_6__.TableApiService, _services_application_api_service__WEBPACK_IMPORTED_MODULE_7__.ApplicationApiService, _services_device_detector_service__WEBPACK_IMPORTED_MODULE_29__.DeviceDetectorService, _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_8__.QuillInitializeServiceService, _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService, _api_user_user_service__WEBPACK_IMPORTED_MODULE_37__.UserService, {
    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.HAMMER_GESTURE_CONFIG,
    useClass: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.HammerGestureConfig
  }, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_55__.NgbCarouselConfig, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_55__.NgbModalConfig],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.BrowserModule, _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_31__.PartialsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_57__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_58__.NgChartsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_59__.BrowserAnimationsModule, _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_35__.MatchHeightModule, _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_32__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_55__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_60__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_61__.AngularFirestoreModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_62__.AngularFireAuthModule, _app_routing__WEBPACK_IMPORTED_MODULE_9__.routing,
  // Settings modules
  _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_11__.SettingsModule.forRoot(_layout_settings_theme_settings_config__WEBPACK_IMPORTED_MODULE_12__.ThemeSettingsConfig, _layout_settings_menu_settings_config__WEBPACK_IMPORTED_MODULE_13__.MenuSettingsConfig), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_63__.PerfectScrollbarModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_64__.ToastrModule.forRoot(), ngx_spinner__WEBPACK_IMPORTED_MODULE_65__.NgxSpinnerModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_66__.LoadingBarRouterModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_67__.BlockUIModule.forRoot({
    template: _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_34__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_68__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__.AppComponent, _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_20__.PublicLayoutComponent, _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_21__.PrivateLayoutComponent, _layout_header_header_component__WEBPACK_IMPORTED_MODULE_14__.HeaderComponent, _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_17__.FullLayoutNavbarComponent, _layout_header_horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_16__.HorizontalComponent, _layout_header_vertical_vertical_component__WEBPACK_IMPORTED_MODULE_15__.VerticalComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__.FooterComponent, _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_19__.NavigationComponent, _helpers_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent, _register__WEBPACK_IMPORTED_MODULE_22__.RegisterComponent, _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_23__.SocialSigninComponent, _login__WEBPACK_IMPORTED_MODULE_24__.LoginComponent, _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_25__.ChangelogComponent, _layout_navigation_verticalnav_verticalnav_component__WEBPACK_IMPORTED_MODULE_27__.VerticalnavComponent, _layout_navigation_horizontalnav_horizontalnav_component__WEBPACK_IMPORTED_MODULE_28__.HorizontalnavComponent, _layout_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_30__.CustomizerComponent, _layout_customizer_horizontal_customizer_horizontal_customizer_component__WEBPACK_IMPORTED_MODULE_33__.HorizontalCustomizerComponent, _layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_34__.BlockTemplateComponent, _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_36__.FullLayoutComponent, _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_38__.PrivacyPolicyComponent, _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_39__.TermsConditionComponent, _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_40__.DriversComponent, _drivers_driver_detail_driver_detail_component__WEBPACK_IMPORTED_MODULE_41__.DriverDetailComponent, _document_type_document_type_component__WEBPACK_IMPORTED_MODULE_42__.DocumentTypeComponent, _licence_type_licence_type_component__WEBPACK_IMPORTED_MODULE_43__.LicenceTypeComponent, _ride_settings_ride_settings_component__WEBPACK_IMPORTED_MODULE_44__.RideSettingsComponent, _reservation_types_reservation_types_component__WEBPACK_IMPORTED_MODULE_45__.ReservationTypesComponent, _reservation_types_add_reservationtype_add_reservationtype_component__WEBPACK_IMPORTED_MODULE_46__.AddReservationtypeComponent, _document_type_add_documnettype_add_documnettype_component__WEBPACK_IMPORTED_MODULE_47__.AddDocumnettypeComponent, _licence_type_add_licencetype_add_licencetype_component__WEBPACK_IMPORTED_MODULE_48__.AddLicencetypeComponent, _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_49__.ReservationsComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_50__.DashboardComponent, _customers_customers_component__WEBPACK_IMPORTED_MODULE_51__.CustomersComponent, _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_52__.CustomerDetailComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.BrowserModule, _content_partials_partials_module__WEBPACK_IMPORTED_MODULE_31__.PartialsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_57__.HttpClientModule, ng2_charts__WEBPACK_IMPORTED_MODULE_58__.NgChartsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_59__.BrowserAnimationsModule, _content_partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_35__.MatchHeightModule, _layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_32__.BreadcrumbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_55__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_56__.FormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_60__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_61__.AngularFirestoreModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_62__.AngularFireAuthModule, _angular_router__WEBPACK_IMPORTED_MODULE_68__.RouterModule, _layout_settings_settings_module__WEBPACK_IMPORTED_MODULE_11__.SettingsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_63__.PerfectScrollbarModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_64__.ToastrModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_65__.NgxSpinnerModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_66__.LoadingBarRouterModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_67__.BlockUIModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_68__.RouterModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵsetComponentScope"](_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_36__.FullLayoutComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_69__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_68__.RouterOutlet, _layout_header_full_layout_navbar_full_layout_navbar_component__WEBPACK_IMPORTED_MODULE_17__.FullLayoutNavbarComponent, _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__.FooterComponent];
}, []);

/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_layout/public-layout/public-layout.component */ 5175);
/* harmony import */ var _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_layout/private-layout/private-layout.component */ 8915);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_guards/auth.guard */ 71094);
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ 54193);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ 60625);
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changelog/changelog.component */ 29479);
/* harmony import */ var _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_layout/full-layout/full-layout.component */ 27240);
/* harmony import */ var _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/privacy-policy/privacy-policy.component */ 62199);
/* harmony import */ var _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/terms-condition/terms-condition.component */ 76922);
/* harmony import */ var _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drivers/drivers.component */ 85943);
/* harmony import */ var _drivers_driver_detail_driver_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drivers/driver-detail/driver-detail.component */ 59382);
/* harmony import */ var _document_type_document_type_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./document-type/document-type.component */ 57631);
/* harmony import */ var _licence_type_licence_type_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./licence-type/licence-type.component */ 69527);
/* harmony import */ var _ride_settings_ride_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ride-settings/ride-settings.component */ 73235);
/* harmony import */ var _reservation_types_reservation_types_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reservation-types/reservation-types.component */ 70946);
/* harmony import */ var _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reservations/reservations.component */ 74452);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 77528);
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customers/customers.component */ 14643);
/* harmony import */ var _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customers/customer-detail/customer-detail.component */ 50441);




















const appRoutes = [{
  path: 'privacypolicy',
  component: _login_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__.PrivacyPolicyComponent
}, {
  path: 'termCondition',
  component: _login_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_8__.TermsConditionComponent
},
// Public layout
{
  path: '',
  component: _layout_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_0__.PublicLayoutComponent,
  children: [{
    path: 'register',
    component: _register__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent
  }, {
    path: 'login',
    component: _login__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
  }, {
    path: '',
    component: _login__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
  }]
}, {
  path: '',
  component: _layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_6__.FullLayoutComponent,
  children: [{
    path: 'error',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_full-pages_error_error_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/full-pages/error/error.module */ 63694)).then(m => m.ErrorModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'authentication',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_full-pages_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/full-pages/authentication/authentication.module */ 77733)).then(m => m.AuthenticationModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'others',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_full-pages_others_others_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/full-pages/others/others.module */ 88017)).then(m => m.OthersModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }]
},
// Private layout
{
  path: '',
  component: _layout_private_layout_private_layout_component__WEBPACK_IMPORTED_MODULE_1__.PrivateLayoutComponent,
  children: [{
    path: 'logout',
    component: _login__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'changelog',
    component: _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_5__.ChangelogComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'reservations',
    component: _reservations_reservations_component__WEBPACK_IMPORTED_MODULE_15__.ReservationsComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'dashboard',
    component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__.DashboardComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'documents',
    component: _document_type_document_type_component__WEBPACK_IMPORTED_MODULE_11__.DocumentTypeComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'licences',
    component: _licence_type_licence_type_component__WEBPACK_IMPORTED_MODULE_12__.LicenceTypeComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'drivers',
    component: _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_9__.DriversComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'customers',
    component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_17__.CustomersComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'settings',
    component: _ride_settings_ride_settings_component__WEBPACK_IMPORTED_MODULE_13__.RideSettingsComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'reservationtypes',
    component: _reservation_types_reservation_types_component__WEBPACK_IMPORTED_MODULE_14__.ReservationTypesComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'drivers/:id',
    component: _drivers_driver_detail_driver_detail_component__WEBPACK_IMPORTED_MODULE_10__.DriverDetailComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'customers/:id',
    component: _customers_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_18__.CustomerDetailComponent,
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'components',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-ui-switch_fesm2020_ngx-ui-switch_mjs"), __webpack_require__.e("src_app_content_ngbbootstrap_components_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/ngbbootstrap/components.module */ 27438)).then(m => m.ComponentsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'todo-app',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_ngx-quill_fesm2020_ngx-quill_mjs"), __webpack_require__.e("default-node_modules_quill-mention_dist_quill_mention_esm_js"), __webpack_require__.e("src_app_content_applications_todo-app_todo-app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/applications/todo-app/todo-app.module */ 28739)).then(m => m.TodoAppModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'chats',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_applications_chat_chats_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/applications/chat/chats.module */ 19011)).then(m => m.ChatsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'email',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-quill_fesm2020_ngx-quill_mjs"), __webpack_require__.e("default-node_modules_angular-archwizard_fesm2015_angular-archwizard_js"), __webpack_require__.e("default-node_modules_ngx-custom-validators_fesm2015_ngx-custom-validators_js"), __webpack_require__.e("src_app_content_applications_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/applications/email/email.module */ 900)).then(m => m.EmailModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'kanban',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_ngx-quill_fesm2020_ngx-quill_mjs"), __webpack_require__.e("default-node_modules_quill-mention_dist_quill_mention_esm_js"), __webpack_require__.e("src_app_content_applications_kanban_kanban_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/applications/kanban/kanban.module */ 68915)).then(m => m.KanbanModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'calender',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_applications_calender_calender_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/applications/calender/calender.module */ 29696)).then(m => m.CalenderModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'contacts',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2020_swimlane-ngx-datatable_mjs"), __webpack_require__.e("src_app_content_applications_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/applications/contacts/contacts.module */ 62553)).then(m => m.ContactsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'chartjs',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_charts-maps_chartjs_chartjs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/charts-maps/chartjs/chartjs.module */ 48347)).then(m => m.ChartjsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'form-elements',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_ngx-custom-validators_fesm2015_ngx-custom-validators_js"), __webpack_require__.e("default-node_modules_ngx-ui-switch_fesm2020_ngx-ui-switch_mjs"), __webpack_require__.e("default-node_modules_ng-multiselect-dropdown_fesm2015_ng-multiselect-dropdown_js"), __webpack_require__.e("src_app_content_forms_form-elements_form-elements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/forms/form-elements/form-elements.module */ 30273)).then(m => m.FormElementsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'form-layouts',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_forms_form-layouts_form-layouts_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/forms/form-layouts/form-layouts.module */ 60022)).then(m => m.FormLayoutsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'form-wizard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular-archwizard_fesm2015_angular-archwizard_js"), __webpack_require__.e("src_app_content_forms_form-wizard_form-wizard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/forms/form-wizard/form-wizard.module */ 84209)).then(m => m.FormWizardModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'form-repeater',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_forms_form-repeater_form-repeater_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/forms/form-repeater/form-repeater.module */ 31015)).then(m => m.FormRepeaterModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'ngchartist',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist_fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_content_charts-maps_ngchartist_ngchartist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/charts-maps/ngchartist/ngchartist.module */ 55944)).then(m => m.NgchartistModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'boostraptables',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2020_swimlane-ngx-datatable_mjs"), __webpack_require__.e("default-node_modules_ngx-ui-switch_fesm2020_ngx-ui-switch_mjs"), __webpack_require__.e("default-node_modules_ng-multiselect-dropdown_fesm2015_ng-multiselect-dropdown_js"), __webpack_require__.e("src_app_content_table_boostraptables_boostraptables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/table/boostraptables/boostraptables.module */ 47601)).then(m => m.BoostraptablesModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'datatables',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2020_swimlane-ngx-datatable_mjs"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-node_modules_ngx-clipboard_fesm2020_ngx-clipboard_mjs"), __webpack_require__.e("src_app_content_table_datatables_datatables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/table/datatables/datatables.module */ 61833)).then(m => m.DatatablesModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'datatablesext',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swimlane_ngx-datatable_fesm2020_swimlane-ngx-datatable_mjs"), __webpack_require__.e("default-node_modules_ngx-clipboard_fesm2020_ngx-clipboard_mjs"), __webpack_require__.e("src_app_content_table_datatablesext_datatablesext_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/table/datatablesext/datatablesext.module */ 54315)).then(m => m.DatatablesextModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'icons',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/icons/icons.module */ 95143)).then(m => m.IconsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'cards',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_cards_cards_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/cards/cards.module */ 84106)).then(m => m.CardsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'invoice',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("src_app_content_pages_invoice_invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/invoice/invoice.module */ 74241)).then(m => m.InvoiceModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'timelines',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fnxone_ngx-photoswipe_fesm2015_fnxone-ngx-photoswipe_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("src_app_content_pages_timelines_timelines_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/timelines/timelines.module */ 38738)).then(m => m.TimelinesModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'user',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fnxone_ngx-photoswipe_fesm2015_fnxone-ngx-photoswipe_js"), __webpack_require__.e("default-node_modules_ngx-echarts_fesm2020_ngx-echarts_mjs"), __webpack_require__.e("src_app_content_pages_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/user/user.module */ 82971)).then(m => m.UserModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'gallery',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fnxone_ngx-photoswipe_fesm2015_fnxone-ngx-photoswipe_js"), __webpack_require__.e("src_app_content_pages_gallery_gallery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/gallery/gallery.module */ 49535)).then(m => m.GalleryModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'news-feed',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_pages_news-feed_news-feed_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/news-feed/news-feed.module */ 62132)).then(m => m.NewsFeedModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'dropzone',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_pages_dropzone_dropzone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/dropzone/dropzone.module */ 65352)).then(m => m.DropzoneModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'social-feed',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_content_pages_social-feed_social-feed_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/social-feed/social-feed.module */ 71367)).then(m => m.SocialFeedModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'search',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_fnxone_ngx-photoswipe_fesm2015_fnxone-ngx-photoswipe_js"), __webpack_require__.e("src_app_content_pages_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/pages/search/search.module */ 29566)).then(m => m.SearchModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'advanceCards',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-chartist_fesm2015_ng-chartist_js"), __webpack_require__.e("src_app_content_advance-cards_advance-cards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/advance-cards/advance-cards.module */ 74063)).then(m => m.AdvanceCardsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }, {
    path: 'extraComponents',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-quill_fesm2020_ngx-quill_mjs"), __webpack_require__.e("default-node_modules_angular-archwizard_fesm2015_angular-archwizard_js"), __webpack_require__.e("default-node_modules_ngx-custom-validators_fesm2015_ngx-custom-validators_js"), __webpack_require__.e("src_app_content_extra-components_extra-components_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/content/extra-components/extra-components.module */ 7692)).then(m => m.ExtraComponentsModule),
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
  }]
},
// otherwise redirect to home
{
  path: '**',
  redirectTo: 'login'
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(appRoutes, {
  scrollOffset: [0, 0],
  scrollPositionRestoration: 'top'
});

/***/ }),

/***/ 29479:
/*!**************************************************!*\
  !*** ./src/app/changelog/changelog.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogComponent": () => (/* binding */ ChangelogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_layout/breadcrumb/breadcrumb.component */ 74986);






function ChangelogComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "m-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function ChangelogComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Release Updates: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "12-01-2023 [V3.5]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13)(8, "ul")(9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Upgraded project to use Angular 15.0.4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Make it compatible with Node 18.10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "24-07-2022 [V3.4]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "ul")(19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Resolve few deprecated warnings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "14-06-2022 [V3.3]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13)(26, "ul")(27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Upgraded project to use Angular 14.0.1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "26-11-2021 [V3.2]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 13)(34, "ul")(35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Upgraded project to use Angular 13.0.2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "26-08-2021 [V3.1]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 13)(42, "ul")(43, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Upgraded project to use ESLint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "25-06-2021 [V3.0]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 13)(50, "ul")(51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Upgraded project to use Angular 12.0.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "24-05-2021 [V2.6]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 13)(58, "ul")(59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Upgraded project to use Angular 11.2.12.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Added Kanban Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Added Hospital theme Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Fixed all high severity vulnerablities with Angular 11.2.12.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "11-02-2021 [V2.5]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 13)(72, "ul")(73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Upgraded project to use Angular 11.1.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Added Tree View under Extra Components");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "08-11-2020 [V2.4]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 13)(82, "ul")(83, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Upgraded project to use Angular 11.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Upgraded project to use ng-bootstrap 5.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Fix ngb-calender not default to current date.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Added Dropzone for file upload.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "01-09-2020 [V2.3]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 13)(96, "ul")(97, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Upgraded project to use Angular 10.1.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Fix Card layout issue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Other minor bug fixes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "29-07-2020 [V2.2]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 13)(106, "ul")(107, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Upgraded project to use Angular 10.0.6.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "New layout for TODO applications.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "30-02-2020 [V2.1]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 13)(114, "ul")(115, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Upgraded to Angular 9.1.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Upgraded to Bootstrap 5.2.2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Upgraded SCSS to latest HTML version of the Modern admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "New design for Email Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "New design for Chat Application (Static as well as Live)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "15-02-2020 [V2.0]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 13)(128, "ul")(129, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Upgraded project to use Angular 9.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Fixed bank navigation menu highlight issue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "12-06-2019 [V1.2]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 13)(136, "ul")(137, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Upgraded project to use Angular 9.0.0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Fixed bank navigation menu highlight issue.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "11-08-2019 [V1.1]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 13)(144, "ul")(145, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Added configuration to hide header icons.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Added ngx-toastr in TODO application.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Added fully functional CRUD Firebase API integration for TODO App.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "10-12-2019 [V1.0]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 13)(154, "ul")(155, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "Initial release");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
  }
}
class ChangelogComponent {
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
      'mainlabel': 'ChangeLog',
      'links': [{
        'name': 'Home',
        'isLink': true,
        'link': '/dashboard/sales'
      }, {
        'name': 'ChangeLog',
        'isLink': false,
        'link': '#'
      }]
    };
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) {
  return new (t || ChangelogComponent)();
};
ChangelogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ChangelogComponent,
  selectors: [["app-home"]],
  decls: 8,
  vars: 3,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "my-2"], [1, "card-text"]],
  template: function ChangelogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChangelogComponent_div_7_Template, 157, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEIiwiZmlsZSI6ImNoYW5nZWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhbmdlbG9nL2NoYW5nZWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBLDRYQUE0WCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_3__.BlockUI)('changelog')], ChangelogComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 12852:
/*!**************************************************************!*\
  !*** ./src/app/content/applications/quill/quillAutolinks.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuillAutoLink)
/* harmony export */ });
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ 30824);
/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var autolinker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autolinker */ 42103);


const defaults = {
  globalRegularExpression: /https?:\/\/[\S]+/g,
  urlRegularExpression: /(https?:\/\/[\S]+)/
};
class QuillAutoLink {
  constructor(quill, options) {
    this.autolinker = new autolinker__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.checkIfHasLink = (currentIndex, input) => {
      var hasLink = false;
      var linkedText = autolinker__WEBPACK_IMPORTED_MODULE_1__["default"].link(input, {
        replaceFn: match => {
          switch
            //   case 'url' :
            //     //console.log( "url: ", match.getUrl() );
            //     var index = (currentIndex - match.matchedText.length) - 1;
            //     this.textToUrl(index,match.matchedText,match.getUrl());
            //     return true;  // let Autolinker perform its normal anchor tag replacement
            // case 'email' :
            //     var email = match.getEmail();
            //     console.log( "email: ", email );
            //     return true;
            // case 'phone' :
            //     console.log( "Phone Number: ", match.getNumber() );
          (match.getType()) {}
        }
      });
      return hasLink;
    };
    this.quill = quill;
    options = options || {};
    this.options = Object.assign(Object.assign({}, defaults), options);
    this.registerTypeListener();
    this.registerPasteListener();
  }
  registerPasteListener() {
    this.quill.clipboard.addMatcher(Node.TEXT_NODE, (node, delta) => {
      if (typeof node.data !== 'string') {
        return;
      }
      const matches = node.data.match(this.options.globalRegularExpression);
      if (matches && matches.length > 0) {
        const newDelta = new (quill_delta__WEBPACK_IMPORTED_MODULE_0___default())();
        let str = node.data;
        matches.forEach(match => {
          const split = str.split(match);
          const beforeLink = split.shift();
          newDelta.insert(beforeLink);
          newDelta.insert(match, {
            link: match
          });
          str = split.join(match);
        });
        newDelta.insert(str);
        delta.ops = newDelta.ops;
      }
      return delta;
    });
  }
  registerTypeListener() {
    this.quill.on('text-change', delta => {
      let ops = delta.ops;
      // Only return true, if last operation includes whitespace inserts
      // Equivalent to listening for enter, tab or space
      if (!ops || ops.length < 1 || ops.length > 2) {
        return;
      }
      let lastOp = ops[ops.length - 1];
      if (!lastOp.insert || typeof lastOp.insert !== 'string' || !lastOp.insert.match(/\s/)) {
        return;
      }
      this.checkTextForUrl();
    });
  }
  checkTextForUrl() {
    let sel = this.quill.getSelection();
    if (!sel) {
      return;
    }
    let [leaf] = this.quill.getLeaf(sel.index);
    if (!leaf.text) {
      return;
    }
    if (leaf.parent != undefined && leaf.parent.domNode != undefined && leaf.parent.domNode.tagName.toLowerCase() == "a") {
      return;
    }
    var temp = leaf.text.substring(0, leaf.text.length - 1);
    var to_check_str = temp.substring(temp.lastIndexOf(' '));
    this.checkIfHasLink(sel.index, to_check_str);
  }
  textToUrl(index, text, url) {
    const ops = new (quill_delta__WEBPACK_IMPORTED_MODULE_0___default())().retain(index).delete(text.length).insert(text, {
      link: url
    });
    this.quill.updateContents(ops);
  }
}

/***/ }),

/***/ 15733:
/*!*****************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app.constants */ 39126);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/card.directive */ 48632);





const _c0 = ["mCard"];
const _c1 = ["mCardHeader"];
const _c2 = ["mCardHeaderTitle"];
const _c3 = ["mCardContent"];
const _c4 = ["mCardBody"];
const _c5 = ["mCardFooter"];
const _c6 = ["mCardHeaderTools"];
function CardComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 18)(2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardComponent_li_13_Template_i_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.toggleCollpase($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CardComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 20)(2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardComponent_li_14_Template_i_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.reload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CardComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 22)(2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardComponent_li_15_Template_i_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.toggleExpand($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CardComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 24)(2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardComponent_li_16_Template_i_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
const _c7 = [[["", "mCardHeaderTitle", ""]], [["", "mCardHeaderTools", ""]], [["", "mCardContent", ""]], [["", "mCardBody", ""]], [["", "mCardFooter", ""]]];
const _c8 = ["[mCardHeaderTitle]", "[mCardHeaderTools]", "[mCardContent]", "[mCardBody]", "[mCardFooter]"];
class CardComponent {
  constructor() {
    this.reloadFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngAfterViewInit() {
    if (this.elHeader && this.elHeader.nativeElement.children.length === 0) {
      this.elHeader.nativeElement.style.display = 'none';
    } else if (this.options && this.options['headerClass']) {
      this.options['headerClass'].forEach(element => {
        this.elHeader.nativeElement.classList.add(element);
      });
    }
    if (this.elHeaderTitle && this.elHeaderTitle.nativeElement.children.length === 0 && this.elHeaderTitle.nativeElement.innerText.trim().length === 0) {
      this.elHeader.nativeElement.style.display = 'none';
    }
    if (this.elFooter && this.elFooter.nativeElement.children.length === 0) {
      this.elFooter.nativeElement.style.display = 'none';
    }
    if (this.elHeaderTools && this.elHeaderTools.nativeElement.children.length === 0) {
      this.elFooter.nativeElement.style.display = 'none';
    }
    if (this.elContent && this.elContent.nativeElement.children.length === 0) {
      this.elContent.nativeElement.style.display = 'none';
    } else if (this.options && this.options['contentClass']) {
      this.options['contentClass'].forEach(element => {
        this.elContent.nativeElement.classList.add(element);
      });
    }
    if (this.elBody && this.elBody.nativeElement.children.length === 0) {
      this.elBody.nativeElement.style.display = 'none';
    } else if (this.options && this.options['bodyClass']) {
      this.options['bodyClass'].forEach(element => {
        this.elBody.nativeElement.classList.add(element);
      });
    }
    if (this.options && this.options['cardClass']) {
      this.options['cardClass'].forEach(element => {
        this.elCard.nativeElement.classList.add(element);
      });
    }
  }
  toggleCollpase(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    if (this.elContent.nativeElement.classList.contains('show')) {
      this.elContent.nativeElement.classList.add('collapse');
      this.elContent.nativeElement.classList.remove('show');
      if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
        target = event.target.querySelector('i');
      }
      target.classList.remove('ft-minus');
      target.classList.add('ft-plus');
    } else {
      this.elContent.nativeElement.classList.add('show');
      if (!target.classList.contains('ft-plus') && !target.classList.contains('ft-minus')) {
        target = event.target.querySelector('i');
      }
      this.elContent.nativeElement.classList.remove('collapse');
      target.classList.remove('ft-plus');
      target.classList.add('ft-minus');
    }
    this.toggleMobileMenu();
  }
  reload() {
    this.reloadFunction.emit(this.options);
  }
  close() {
    this.elCard.nativeElement.classList.add('hidden');
    this.elCard.nativeElement.classList.remove('card-fullscreen');
    this.toggleMobileMenu();
  }
  toggleExpand(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    if (this.elCard.nativeElement.classList.contains('card-fullscreen')) {
      this.elCard.nativeElement.classList.remove('card-fullscreen');
      if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
        target = event.target.querySelector('i');
      }
      target.classList.add('ft-maximize');
      target.classList.remove('ft-minimize');
    } else {
      this.elCard.nativeElement.classList.add('card-fullscreen');
      if (!target.classList.contains('ft-maximize') && !target.classList.contains('ft-minimize')) {
        target = event.target.querySelector('i');
      }
      target.classList.remove('ft-maximize');
      target.classList.add('ft-minimize');
    }
    this.toggleMobileMenu();
  }
  toggleMobileMenu() {
    if (this.elHeaderTools.nativeElement.classList.contains('visible')) {
      this.elHeaderTools.nativeElement.classList.remove('visible');
    } else {
      this.elHeaderTools.nativeElement.classList.add('visible');
    }
    // fire resize event for graphs
    setTimeout(() => {
      src_app_helpers_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.fireRefreshEventOnWindow();
    }, 300);
  }
}
CardComponent.ɵfac = function CardComponent_Factory(t) {
  return new (t || CardComponent)();
};
CardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CardComponent,
  selectors: [["m-card"]],
  viewQuery: function CardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.elCard = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.elHeader = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.elHeaderTitle = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.elContent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.elBody = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.elFooter = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.elHeaderTools = _t.first);
    }
  },
  inputs: {
    loading$: "loading$",
    options: "options"
  },
  outputs: {
    reloadFunction: "reloadFunction"
  },
  ngContentSelectors: _c8,
  decls: 26,
  vars: 5,
  consts: [["mCard", "", 1, "card", 3, "options"], ["mCard", ""], [1, "card-header"], ["mCardHeader", ""], [1, "card-title"], ["mCardHeaderTitle", ""], [1, "heading-elements-toggle", 3, "click"], [1, "la", "la-ellipsis-v", "font-medium-3"], [1, "heading-elements"], ["mCardHeaderTools", ""], [1, "list-inline", "mb-0"], [4, "ngIf"], [1, "card-content", "collpase", "show"], ["mCardContent", ""], [1, "card-body"], ["mCardBody", ""], [1, "card-footer"], ["mCardFooter", ""], ["data-action", "collapse"], [1, "feather", "ft-minus", 3, "click"], ["data-action", "reload"], [1, "feather", "ft-rotate-cw", 3, "click"], ["data-action", "expand"], [1, "feather", "ft-maximize", 3, "click"], ["data-action", "close"], [1, "feather", "ft-x", 3, "click"]],
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2, 3)(4, "h4", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CardComponent_Template_a_click_7_listener() {
        return ctx.toggleMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CardComponent_li_13_Template, 3, 0, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CardComponent_li_14_Template, 3, 0, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CardComponent_li_15_Template, 3, 0, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CardComponent_li_16_Template, 3, 0, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](19, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](22, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](25, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.minimize);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.reload);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.expand);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.options && ctx.options.close);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_1__.CardDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9wYXJ0aWFscy9nZW5lcmFsL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 9651:
/*!**************************************************************!*\
  !*** ./src/app/content/partials/general/card/card.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardModule": () => (/* binding */ CardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component */ 15733);
/* harmony import */ var src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_directives/card.directive */ 48632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);





class CardModule {}
CardModule.ɵfac = function CardModule_Factory(t) {
  return new (t || CardModule)();
};
CardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CardModule
});
CardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_0__.MatchHeightModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CardModule, {
    declarations: [_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, src_app_directives_card_directive__WEBPACK_IMPORTED_MODULE_2__.CardDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_0__.MatchHeightModule],
    exports: [_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent]
  });
})();

/***/ }),

/***/ 61986:
/*!******************************************************************************!*\
  !*** ./src/app/content/partials/general/match-height/match-height.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchHeightModule": () => (/* binding */ MatchHeightModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



class MatchHeightModule {}
MatchHeightModule.ɵfac = function MatchHeightModule_Factory(t) {
  return new (t || MatchHeightModule)();
};
MatchHeightModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatchHeightModule
});
MatchHeightModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatchHeightModule, {
    declarations: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_0__.MatchHeightDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_0__.MatchHeightDirective]
  });
})();

/***/ }),

/***/ 99532:
/*!*****************************************************!*\
  !*** ./src/app/content/partials/partials.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartialsModule": () => (/* binding */ PartialsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _general_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/card/card.module */ 9651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);





class PartialsModule {}
PartialsModule.ɵfac = function PartialsModule_Factory(t) {
  return new (t || PartialsModule)();
};
PartialsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PartialsModule
});
PartialsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _general_card_card_module__WEBPACK_IMPORTED_MODULE_0__.CardModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PartialsModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule],
    exports: [_general_card_card_module__WEBPACK_IMPORTED_MODULE_0__.CardModule]
  });
})();

/***/ }),

/***/ 50441:
/*!************************************************************************!*\
  !*** ./src/app/customers/customer-detail/customer-detail.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailComponent": () => (/* binding */ CustomerDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class CustomerDetailComponent {
  constructor() {}
  ngOnInit() {}
}
CustomerDetailComponent.ɵfac = function CustomerDetailComponent_Factory(t) {
  return new (t || CustomerDetailComponent)();
};
CustomerDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CustomerDetailComponent,
  selectors: [["app-customer-detail"]],
  decls: 2,
  vars: 0,
  template: function CustomerDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " customer-detail works!\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVyLWRldGFpbC9jdXN0b21lci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 14643:
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomersComponent": () => (/* binding */ CustomersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/customers.service */ 17130);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ 15733);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);








const _c0 = function (a1) {
  return ["/customers", a1];
};
function CustomersComponent_div_6_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Detaylar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](customer_r2.name + " " + customer_r2.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, customer_r2.id));
  }
}
function CustomersComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "m-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function CustomersComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " M\u00FC\u015Fteriler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 11)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Ad Soyad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0130\u015Flemler");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CustomersComponent_div_6_tr_13_Template, 6, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.customers);
  }
}
class CustomersComponent {
  constructor(customersService) {
    this.customersService = customersService;
  }
  ngOnInit() {
    this.getCustomers();
  }
  getCustomers() {
    this.customersService.getCustomers().subscribe(res => {
      this.customers = res;
    });
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
  return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_customers_service__WEBPACK_IMPORTED_MODULE_0__.CustomersService));
};
CustomersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomersComponent,
  selectors: [["app-customers"]],
  decls: 7,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-info", 3, "routerLink"]],
  template: function CustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CustomersComponent_div_6_Template, 14, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('changelog')], CustomersComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DashboardComponent {
  constructor() {}
  ngOnInit() {}
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)();
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 43,
  vars: 0,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "row"], [1, "col-md-12", "font-large-1", "danger"], [1, "row", "mt-3"], [1, "col-xl-3", "col-lg-6", "col-12"], [1, "card", "pull-up"], [1, "card-content"], [1, "card-body", "card_padding"], [1, "media", "d-flex"], [1, "media-body", "text-left"], [1, "info"], [1, "icon-basket-loaded", "info", "font-large-2", "float-right"], [1, "icon-pie-chart", "info", "font-large-2", "float-right"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "100");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Toplam Rezervasyon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "div", 8)(21, "div", 9)(22, "div", 10)(23, "div", 11)(24, "div", 12)(25, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "50");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Toplam \u015Eof\u00F6r");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7)(32, "div", 8)(33, "div", 9)(34, "div", 10)(35, "div", 11)(36, "div", 12)(37, "h3", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "400");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Toplam M\u00FC\u015Fteri");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 92169:
/*!******************************************************************************!*\
  !*** ./src/app/document-type/add-documnettype/add-documnettype.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddDocumnettypeComponent": () => (/* binding */ AddDocumnettypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_services_definition_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/definition.service */ 67448);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);







function AddDocumnettypeComponent_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
  }
}
class AddDocumnettypeComponent {
  constructor(formBuilder, activeModal, hammaddeService, toastr) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.hammaddeService = hammaddeService;
    this.toastr = toastr;
    this.submitted = false;
  }
  ngOnInit() {
    this.definitionForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    if (this.hammadde) {
      this.definitionForm.patchValue({
        name: this.hammadde.name
      });
    }
  }
  close() {
    this.activeModal.close();
  }
  save() {
    if (!this.definitionForm.valid) {
      this.definitionForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    console.log(this.definitionForm.value);
    if (this.hammadde) {
      //update
      const updatedModel = Object.assign(Object.assign({}, this.definitionForm.value), {
        id: this.hammadde.id
      });
      this.hammaddeService.editDocuments(updatedModel, this.hammadde.id).subscribe(res => {
        this.submitted = false;
        this.toastr.clear();
        this.toastr.success('', 'Kayıt güncelleme başarılı');
        this.definitionForm.reset();
      }, err => {
        this.toastr.error('', 'Kayıt güncelleme sırasında hata oluştu');
        this.submitted = false;
      });
    } else {
      //insert
      this.hammaddeService.addDocuments(this.definitionForm.value).subscribe(res => {
        this.submitted = false;
        this.toastr.clear();
        this.toastr.success('', 'Kayıt başarılı');
        this.definitionForm.reset();
      }, err => {
        this.toastr.error('', 'Kayıt sırasında hata oluştu');
        this.submitted = false;
      });
    }
  }
}
AddDocumnettypeComponent.ɵfac = function AddDocumnettypeComponent_Factory(t) {
  return new (t || AddDocumnettypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_definition_service__WEBPACK_IMPORTED_MODULE_0__.DefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
AddDocumnettypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddDocumnettypeComponent,
  selectors: [["app-add-documnettype"]],
  inputs: {
    hammadde: "hammadde"
  },
  decls: 20,
  vars: 3,
  consts: [[1, "modal-content"], [1, "modal-header"], ["id", "myModalLabel33", 1, "modal-title", "text-text-bold-900"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "formGroup"], [1, "modal-body"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "modal-footer"], ["type", "reset", 1, "btn", "grey", "btn-outline-secondary", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "disabled", "click"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], [1, "fa", "fa-refresh", "fa-spin"]],
  template: function AddDocumnettypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "D\u00F6k\u00FCman T\u00FCr\u00FC Ekle/G\u00FCncelle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDocumnettypeComponent_Template_button_click_5_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ad\u0131");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDocumnettypeComponent_Template_button_click_15_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kapat");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddDocumnettypeComponent_Template_button_click_17_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddDocumnettypeComponent_i_18_Template, 1, 0, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Kaydet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.definitionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 2px solid red;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n\r\n    ngb-modal-backdrop {\r\n    z-index: 1050 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1kb2N1bW5ldHR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix3RUFBd0U7RUFDMUU7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQ0FBK0M7QUFDbkQiLCJmaWxlIjoiYWRkLWRvY3VtbmV0dHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBuZ2ItbW9kYWwtYmFja2Ryb3Age1xyXG4gICAgei1pbmRleDogMTA1MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG9jdW1lbnQtdHlwZS9hZGQtZG9jdW1uZXR0eXBlL2FkZC1kb2N1bW5ldHR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix3RUFBd0U7RUFDMUU7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQ0FBK0M7QUFDbkQ7QUFDQSxveUJBQW95QiIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbmdiLW1vZGFsLWJhY2tkcm9wIHtcclxuICAgIHotaW5kZXg6IDEwNTAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 57631:
/*!**********************************************************!*\
  !*** ./src/app/document-type/document-type.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentTypeComponent": () => (/* binding */ DocumentTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _add_documnettype_add_documnettype_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-documnettype/add-documnettype.component */ 92169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_definition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/definition.service */ 67448);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ 15733);










function DocumentTypeComponent_div_6_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentTypeComponent_div_6_tr_15_Template_i_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const document_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openEditModal(document_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentTypeComponent_div_6_tr_15_Template_i_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const document_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.delete(document_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const document_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](document_r2.name);
  }
}
function DocumentTypeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "m-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function DocumentTypeComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " D\u00F6k\u00FCmanlar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentTypeComponent_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.openSaveModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table", 12)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "D\u00F6k\u00FCman");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u0130\u015Flemler");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DocumentTypeComponent_div_6_tr_15_Template, 7, 1, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.documents);
  }
}
class DocumentTypeComponent {
  constructor(definitionService, modal, toastr) {
    this.definitionService = definitionService;
    this.modal = modal;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.GetDocuments();
  }
  GetDocuments() {
    this.definitionService.getDocuments().subscribe(res => {
      this.documents = res;
    });
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
  openSaveModal() {
    const modalref = this.modal.open(_add_documnettype_add_documnettype_component__WEBPACK_IMPORTED_MODULE_0__.AddDocumnettypeComponent, {
      size: 'lg'
    });
    modalref.result.then(result => {
      this.GetDocuments();
    });
  }
  openEditModal(data) {
    const modalref = this.modal.open(_add_documnettype_add_documnettype_component__WEBPACK_IMPORTED_MODULE_0__.AddDocumnettypeComponent, {
      size: 'xl'
    });
    modalref.componentInstance.hammadde = data;
    modalref.result.then(result => {
      this.GetDocuments();
    });
  }
  delete(id) {
    this.definitionService.deleteDocuments(id).subscribe(res => {
      this.GetDocuments();
      this.toastr.success('', 'Kayıt silindi');
    });
  }
}
DocumentTypeComponent.ɵfac = function DocumentTypeComponent_Factory(t) {
  return new (t || DocumentTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_definition_service__WEBPACK_IMPORTED_MODULE_1__.DefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
DocumentTypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DocumentTypeComponent,
  selectors: [["app-document-type"]],
  decls: 7,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"], ["mCardBody", ""], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "la", "la-edit", "success", 2, "cursor", "pointer", 3, "click"], [1, "la", "la-remove", "danger", 2, "cursor", "pointer", 3, "click"]],
  template: function DocumentTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DocumentTypeComponent_div_6_Template, 16, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC10eXBlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG9jdW1lbnQtdHlwZS9kb2N1bWVudC10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('changelog')], DocumentTypeComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 59382:
/*!******************************************************************!*\
  !*** ./src/app/drivers/driver-detail/driver-detail.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverDetailComponent": () => (/* binding */ DriverDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_services_driver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/driver.service */ 12075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../content/partials/general/card/card.component */ 15733);








function DriverDetailComponent_div_6_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", l_r3.licenceType.name, " ");
  }
}
function DriverDetailComponent_div_6_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", l_r4.documentType.name, " ");
  }
}
function DriverDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "m-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function DriverDetailComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u015Eof\u00F6r Detay\u0131 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DriverDetailComponent_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.accept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Onayla");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "table")(8, "tr")(9, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tr")(12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Ad Soyad:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tr")(17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Telefon:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr")(22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u0130l:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tr")(26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0130l\u00E7e:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tr")(30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Banka Hesab\u0131:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tr")(34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Durum:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td")(37, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "tr")(40, "td", 12)(41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Lisanslar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, DriverDetailComponent_div_6_tr_43_Template, 3, 1, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "tr")(45, "td", 12)(46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "D\u00F6k\u00FCmanlar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, DriverDetailComponent_div_6_tr_48_Template, 3, 1, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.driver == null ? null : ctx_r0.driver.profilePhoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.driver == null ? null : ctx_r0.driver.name, " ", ctx_r0.driver == null ? null : ctx_r0.driver.surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.driver == null ? null : ctx_r0.driver.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (ctx_r0.driver == null ? null : ctx_r0.driver.isApproved) ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r0.driver == null ? null : ctx_r0.driver.isApproved) ? "Onayl\u0131" : "Onays\u0131z");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.driver == null ? null : ctx_r0.driver.licences);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.driver == null ? null : ctx_r0.driver.documents);
  }
}
class DriverDetailComponent {
  constructor(driverService, route) {
    this.driverService = driverService;
    this.route = route;
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.get();
  }
  get() {
    this.driverService.get(this.id).subscribe(res => {
      console.log(res);
      this.driver = res;
    });
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
  accept() {
    this.driverService.acceptDriver(this.id).subscribe(res => {
      this.get();
    });
  }
}
DriverDetailComponent.ɵfac = function DriverDetailComponent_Factory(t) {
  return new (t || DriverDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_driver_service__WEBPACK_IMPORTED_MODULE_0__.DriverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
DriverDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DriverDetailComponent,
  selectors: [["app-driver-detail"]],
  decls: 7,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"], ["mCardBody", ""], ["colspan", "2"], ["alt", "Driver Photo", "width", "150", "height", "150", 3, "src"], [1, "badge", 3, "ngClass"], [4, "ngFor", "ngForOf"]],
  template: function DriverDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DriverDetailComponent_div_6_Template, 49, 9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHJpdmVycy9kcml2ZXItZGV0YWlsL2RyaXZlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('changelog')], DriverDetailComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 85943:
/*!**********************************************!*\
  !*** ./src/app/drivers/drivers.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriversComponent": () => (/* binding */ DriversComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_driver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/driver.service */ 12075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ 15733);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);








const _c0 = function (a1) {
  return ["/drivers", a1];
};
function DriversComponent_div_6_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Detaylar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const driver_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](driver_r2.name + " " + driver_r2.surname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", driver_r2.isApproved ? "badge-success" : "badge-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](driver_r2.isApproved ? "Onayl\u0131" : "Onays\u0131z");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, driver_r2.id));
  }
}
function DriversComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "m-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function DriversComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u015Eof\u00F6rler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 11)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Ad Soyad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Durum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0130\u015Flemler");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DriversComponent_div_6_tr_15_Template, 9, 6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.drivers);
  }
}
class DriversComponent {
  constructor(driverService) {
    this.driverService = driverService;
  }
  ngOnInit() {
    this.getDrivers();
  }
  getDrivers() {
    this.driverService.getDrivers().subscribe(res => {
      this.drivers = res;
    });
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
}
DriversComponent.ɵfac = function DriversComponent_Factory(t) {
  return new (t || DriversComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_driver_service__WEBPACK_IMPORTED_MODULE_0__.DriverService));
};
DriversComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DriversComponent,
  selectors: [["app-drivers"]],
  decls: 7,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [1, "btn", "btn-sm", "btn-info", 3, "routerLink"]],
  template: function DriversComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DriversComponent_div_6_Template, 16, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcml2ZXJzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZHJpdmVycy9kcml2ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)('changelog')], DriversComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 96395:
/*!***************************************************************************!*\
  !*** ./src/app/licence-type/add-licencetype/add-licencetype.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLicencetypeComponent": () => (/* binding */ AddLicencetypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_services_definition_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/definition.service */ 67448);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);







function AddLicencetypeComponent_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);
  }
}
class AddLicencetypeComponent {
  constructor(formBuilder, activeModal, hammaddeService, toastr) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.hammaddeService = hammaddeService;
    this.toastr = toastr;
    this.submitted = false;
  }
  ngOnInit() {
    this.definitionForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    if (this.hammadde) {
      this.definitionForm.patchValue({
        name: this.hammadde.name
      });
    }
  }
  close() {
    this.activeModal.close();
  }
  save() {
    if (!this.definitionForm.valid) {
      this.definitionForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    console.log(this.definitionForm.value);
    if (this.hammadde) {
      //update
      const updatedModel = Object.assign(Object.assign({}, this.definitionForm.value), {
        id: this.hammadde.id
      });
      this.hammaddeService.editLicenceType(updatedModel, this.hammadde.id).subscribe(res => {
        this.submitted = false;
        this.toastr.clear();
        this.toastr.success('', 'Kayıt güncelleme başarılı');
        this.definitionForm.reset();
      }, err => {
        this.toastr.error('', 'Kayıt güncelleme sırasında hata oluştu');
        this.submitted = false;
      });
    } else {
      //insert
      this.hammaddeService.addLicenceType(this.definitionForm.value).subscribe(res => {
        this.submitted = false;
        this.toastr.clear();
        this.toastr.success('', 'Kayıt başarılı');
        this.definitionForm.reset();
      }, err => {
        this.toastr.error('', 'Kayıt sırasında hata oluştu');
        this.submitted = false;
      });
    }
  }
}
AddLicencetypeComponent.ɵfac = function AddLicencetypeComponent_Factory(t) {
  return new (t || AddLicencetypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_definition_service__WEBPACK_IMPORTED_MODULE_0__.DefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
AddLicencetypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddLicencetypeComponent,
  selectors: [["app-add-licencetype"]],
  inputs: {
    hammadde: "hammadde"
  },
  decls: 20,
  vars: 3,
  consts: [[1, "modal-content"], [1, "modal-header"], ["id", "myModalLabel33", 1, "modal-title", "text-text-bold-900"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "formGroup"], [1, "modal-body"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "modal-footer"], ["type", "reset", 1, "btn", "grey", "btn-outline-secondary", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "disabled", "click"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], [1, "fa", "fa-refresh", "fa-spin"]],
  template: function AddLicencetypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "D\u00F6k\u00FCman T\u00FCr\u00FC Ekle/G\u00FCncelle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLicencetypeComponent_Template_button_click_5_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ad\u0131");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLicencetypeComponent_Template_button_click_15_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Kapat");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddLicencetypeComponent_Template_button_click_17_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddLicencetypeComponent_i_18_Template, 1, 0, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Kaydet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.definitionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 2px solid red;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n\r\n    ngb-modal-backdrop {\r\n    z-index: 1050 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1saWNlbmNldHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHdFQUF3RTtFQUMxRTs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLCtDQUErQztBQUNuRCIsImZpbGUiOiJhZGQtbGljZW5jZXR5cGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbmdiLW1vZGFsLWJhY2tkcm9wIHtcclxuICAgIHotaW5kZXg6IDEwNTAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGljZW5jZS10eXBlL2FkZC1saWNlbmNldHlwZS9hZGQtbGljZW5jZXR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix3RUFBd0U7RUFDMUU7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQ0FBK0M7QUFDbkQ7QUFDQSxneUJBQWd5QiIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbmdiLW1vZGFsLWJhY2tkcm9wIHtcclxuICAgIHotaW5kZXg6IDEwNTAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5ibG9jay11aS13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 69527:
/*!********************************************************!*\
  !*** ./src/app/licence-type/licence-type.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LicenceTypeComponent": () => (/* binding */ LicenceTypeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _add_licencetype_add_licencetype_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-licencetype/add-licencetype.component */ 96395);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_definition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/definition.service */ 67448);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ 15733);










function LicenceTypeComponent_div_6_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LicenceTypeComponent_div_6_tr_15_Template_i_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const document_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openEditModal(document_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LicenceTypeComponent_div_6_tr_15_Template_i_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const document_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.delete(document_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const document_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](document_r2.name);
  }
}
function LicenceTypeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "m-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function LicenceTypeComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Lisanslar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LicenceTypeComponent_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.openSaveModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table", 12)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Lisans");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u0130\u015Flemler");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LicenceTypeComponent_div_6_tr_15_Template, 7, 1, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.documents);
  }
}
class LicenceTypeComponent {
  constructor(definitionService, modal, toastr) {
    this.definitionService = definitionService;
    this.modal = modal;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.GetDocuments();
  }
  GetDocuments() {
    this.definitionService.getLicences().subscribe(res => {
      this.documents = res;
    });
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
  openSaveModal() {
    const modalref = this.modal.open(_add_licencetype_add_licencetype_component__WEBPACK_IMPORTED_MODULE_0__.AddLicencetypeComponent, {
      size: 'lg'
    });
    modalref.result.then(result => {
      this.GetDocuments();
    });
  }
  openEditModal(data) {
    const modalref = this.modal.open(_add_licencetype_add_licencetype_component__WEBPACK_IMPORTED_MODULE_0__.AddLicencetypeComponent, {
      size: 'xl'
    });
    modalref.componentInstance.hammadde = data;
    modalref.result.then(result => {
      this.GetDocuments();
    });
  }
  delete(id) {
    this.definitionService.deleteLicenceType(id).subscribe(res => {
      this.GetDocuments();
      this.toastr.success('', 'Kayıt silindi');
    });
  }
}
LicenceTypeComponent.ɵfac = function LicenceTypeComponent_Factory(t) {
  return new (t || LicenceTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_definition_service__WEBPACK_IMPORTED_MODULE_1__.DefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
LicenceTypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LicenceTypeComponent,
  selectors: [["app-licence-type"]],
  decls: 7,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"], ["mCardBody", ""], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "la", "la-edit", "success", 2, "cursor", "pointer", 3, "click"], [1, "la", "la-remove", "danger", 2, "cursor", "pointer", 3, "click"]],
  template: function LicenceTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LicenceTypeComponent_div_6_Template, 16, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWNlbmNlLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGljZW5jZS10eXBlL2xpY2VuY2UtdHlwZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('changelog')], LicenceTypeComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 60625:
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* reexport safe */ _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 98458);


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/identity.service */ 25073);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);








function LoginComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kullan\u0131c\u0131 ad\u0131 gerekli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_22_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
  }
}
function LoginComponent_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Parola gerekli");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_27_div_1_Template, 2, 0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
  }
}
function LoginComponent_i_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 32);
  }
}
function LoginComponent_i_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class LoginComponent {
  constructor(modal, formBuilder, router, toastr, authService) {
    this.modal = modal;
    this.formBuilder = formBuilder;
    this.router = router;
    this.toastr = toastr;
    this.authService = authService;
    this.loading = false;
    this.submitted = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
    if (localStorage.getItem('currentUser')) {
      this.authService.doLogout();
    }
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  tryLogin() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const value = {
      username: this.f.email.value,
      password: this.f.password.value
    };
    this.authService.dologin(value).subscribe(res => {
      this.setUserInStorage(res);
      let returnUrl = '/dashboard';
      if (this.returnUrl) {
        returnUrl = this.returnUrl;
      }
      this.router.navigate([returnUrl]);
    }, err => {
      this.toastr.error('', 'Kullanıcı bilgileri hatalı.');
      this.submitted = true;
    });
    // .then(res => {
    //     this.setUserInStorage(res);
    //     localStorage.removeItem('currentLayoutStyle');
    //     let returnUrl = '/dashboard';
    //     if (this.returnUrl) {
    //       returnUrl = this.returnUrl;
    //     }
    //     this.router.navigate([returnUrl]);
    // }, err => {
    //     this.submitted = false;
    //     this.alertService.error(err.message);
    // });
  }

  setUserInStorage(res) {
    if (res.user) {
      localStorage.setItem('currentUser', JSON.stringify(res.user));
    } else {
      localStorage.setItem('currentUser', JSON.stringify(res));
    }
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_identity_service__WEBPACK_IMPORTED_MODULE_0__.IdentityService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["ng-component"]],
  decls: 37,
  vars: 11,
  consts: [[1, "app-content", "content"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], [1, "row", "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-4", "col-md-8", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "m-0"], [1, "card-header", "border-0"], [1, "card-title", "text-center"], ["src", "assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-body"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "formControlName", "email", "id", "user-name", "placeholder", "Eposta", "required", "", 1, "form-control", 3, "ngClass"], [1, "form-control-position"], [1, "la", "la-user"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "placeholder", "Parola", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-md-6", "col-12", "text-center", "text-sm-left", "pr-0"], [1, "col-md-6", "col-12", "float-sm-left", "text-center", "text-sm-right"], ["href", "recover-password.html", 1, "card-link"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-block"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], ["class", "feather ft-unlock", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "fa", "fa-refresh", "fa-spin"], [1, "feather", "ft-unlock"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6", 12)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Admin Giri\u015F");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "form", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_17_listener() {
        return ctx.tryLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "fieldset", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "fieldset", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 25)(31, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u015Eifremi unuttum?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, LoginComponent_i_34_Template, 1, 0, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LoginComponent_i_35_Template, 1, 0, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Giri\u015F ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.submitted);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: [".margin-left-5[_ngcontent-%COMP%]{\n    margin-left: 5px;\n}\n.terms[_ngcontent-%COMP%] {\n    float: right;\n}\n[_nghost-%COMP%]     .content .content-wrapper {\n    padding: 0!important;\n}\n[_nghost-%COMP%]     .btn-outline-twitter {\n    border: 1px solid #55acee!important;\n    color: #55acee !important;\n}\n[_nghost-%COMP%]     .icheckbox_square-blue, .iradio_square-blue[_ngcontent-%COMP%] {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    width: 22px;\n    height: 22px;\n     background: url('blue.png') no-repeat;  \n    border: none;\n    cursor: pointer;\n}\n[_nghost-%COMP%]     .icheckbox_square-blue {\n    background-position: 0 0;\n}\n[_nghost-%COMP%]     .lb-remember {\n    color: #2b335e;\n    padding-left: 3px;\n    width: max-content;\n}\n[_nghost-%COMP%]     .icheckbox_square-blue.checked {\n    background-position: -48px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0tBQ1gscUNBQStEO0lBQ2hFLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tbGVmdC01e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4udGVybXMge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuLW91dGxpbmUtdHdpdHRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1YWNlZSFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM1NWFjZWUgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaWNoZWNrYm94X3NxdWFyZS1ibHVlLCAuaXJhZGlvX3NxdWFyZS1ibHVlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYmx1ZS5wbmdcIikgbm8tcmVwZWF0OyAgXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAuaWNoZWNrYm94X3NxdWFyZS1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmxiLXJlbWVtYmVyIHtcbiAgICBjb2xvcjogIzJiMzM1ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmljaGVja2JveF9zcXVhcmUtYmx1ZS5jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7S0FDWCxxQ0FBK0Q7SUFDaEUsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBLG90REFBb3REIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1sZWZ0LTV7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi50ZXJtcyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50IC5jb250ZW50LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tb3V0bGluZS10d2l0dGVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTVhY2VlIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzU1YWNlZSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUsIC5pcmFkaW9fc3F1YXJlLWJsdWUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjJweDtcbiAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9ibHVlLnBuZ1wiKSBuby1yZXBlYXQ7ICBcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5pY2hlY2tib3hfc3F1YXJlLWJsdWUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cbjpob3N0IDo6bmctZGVlcCAubGItcmVtZW1iZXIge1xuICAgIGNvbG9yOiAjMmIzMzVlO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuaWNoZWNrYm94X3NxdWFyZS1ibHVlLmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 62199:
/*!******************************************************************!*\
  !*** ./src/app/login/privacy-policy/privacy-policy.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class PrivacyPolicyComponent {
  constructor() {}
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) {
  return new (t || PrivacyPolicyComponent)();
};
PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PrivacyPolicyComponent,
  selectors: [["app-privacy-policy"]],
  decls: 96,
  vars: 0,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width"], ["href", "https://firebase.google.com/policies/analytics", "target", "_blank"], ["href", "https://www.facebook.com/about/privacy/update/printable", "target", "_blank"], ["href", "https://privacypolicytemplate.net", "target", "_blank"], ["href", "https://app-privacy-policy-generator.firebaseapp.com/", "target", "_blank"]],
  template: function PrivacyPolicyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html")(1, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0)(3, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body")(7, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Evolvision Technologies built the Modern Admin app as a Commercial app. This SERVICE is provided by Evolvision Technologies and is intended for use as is. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. we will not use or share your information with anyone except as described in this Privacy Policy. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Modern Admin unless otherwise defined in this Privacy Policy. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p")(18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Information Collection and Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Email, First name, Last name, Profile picture. The information that we request will be retained by us and used as described in this privacy policy. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div")(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " The app does use third party services that may collect information used to identify you. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Link to privacy policy of third party service providers used by the app ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul")(28, "li")(29, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Google Analytics for Firebase");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p")(35, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Log Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " we want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201CIP\u201D) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p")(40, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cookies");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " This Service does not use these \u201Ccookies\u201D explicitly. However, the app may use third party code and libraries that use \u201Ccookies\u201D to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p")(47, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Service Providers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " we may employ third-party companies and individuals due to the following reasons: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul")(52, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "To facilitate our Service;");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "To provide the Service on our behalf;");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "To perform Service-related services; or");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "To assist us in analyzing how our Service is used.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " we want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p")(63, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " we value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p")(68, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Links to Other Sites");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p")(73, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Children\u2019s Privacy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " These Services do not address anyone under the age of 13. we do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p")(78, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Changes to This Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " we may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. we will notify you of any changes by posting the new Privacy Policy on this page. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "This policy is effective as of 2020-06-01");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p")(85, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at jimit@evolvision.com. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " This privacy policy page was created at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "privacypolicytemplate.net");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " and modified/generated by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "App Privacy Policy Generator");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["body[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 8px !important;\n    color: #141415;\n   font-size: larger;\n}\np[_ngcontent-%COMP%] {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGNBQWM7R0FDZixpQkFBaUI7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoicHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzE0MTQxNTtcbiAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxucCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsY0FBYztHQUNmLGlCQUFpQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjtBQUNBLDR2QkFBNHZCIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMTQxNDE1O1xuICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", "body[_ngcontent-%COMP%] { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding:1em; }"]
});

/***/ }),

/***/ 76922:
/*!********************************************************************!*\
  !*** ./src/app/login/terms-condition/terms-condition.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionComponent": () => (/* binding */ TermsConditionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class TermsConditionComponent {
  constructor() {}
}
TermsConditionComponent.ɵfac = function TermsConditionComponent_Factory(t) {
  return new (t || TermsConditionComponent)();
};
TermsConditionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TermsConditionComponent,
  selectors: [["app-terms-condition"]],
  decls: 55,
  vars: 0,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width"], ["href", "https://firebase.google.com/terms/analytics", "target", "_blank"], ["href", "https://www.facebook.com/legal/terms/plain_text_terms", "target", "_blank"], ["href", "https://app-privacy-policy-generator.firebaseapp.com/", "target", "_blank"]],
  template: function TermsConditionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html")(1, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0)(3, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms &");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body")(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Terms & Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " By downloading or using the app, these terms will automatically apply to you \u2013 you should make sure therefore that you read them carefully before using the app. You\u2019re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You\u2019re not allowed to attempt to extract the source code of the app, and you also shouldn\u2019t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Evolvision Technologies. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Evolvision Technologies is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you\u2019re paying for. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The Modern Admin app stores and processes personal data that you have provided to us, in order to provide our Service. It\u2019s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone\u2019s security features and it could mean that the Modern Admin app won\u2019t work properly or at all. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The app does use third party services that declare their own Terms and Conditions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Link to Terms and Conditions of third party service providers used by the app ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul")(22, "li")(23, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Google Analytics for Firebase");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " You should be aware that there are certain things that Evolvision Technologies will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Evolvision Technologies cannot take responsibility for the app not working at full functionality if you don\u2019t have access to Wi-Fi, and you don\u2019t have any of your data allowance left. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " If you\u2019re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you\u2019re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you\u2019re using the app, please be aware that we assume that you have received permission from the bill payer for using the app. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Along the same lines, Evolvision Technologies cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged \u2013 if it runs out of battery and you can\u2019t turn it on to avail the Service, Evolvision Technologies cannot accept responsibility. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " With respect to Evolvision Technologies\u2019s responsibility for your use of the app, when you\u2019re using the app, it\u2019s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Evolvision Technologies accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " At some point, we may wish to update the app. The app is currently available on \u2013 the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you\u2019ll need to download the updates if you want to keep using the app. Evolvision Technologies does not promise that it will always update the app so that it is relevant to you and/or works with the version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p")(40, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Changes to This Terms and Conditions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " we may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. we will notify you of any changes by posting the new Terms and Conditions on this page. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " These terms and conditions are effective as of 2020-06-01 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p")(47, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at jimit@evolvision.com. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " This Terms and Conditions page was generated by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "App Privacy Policy Generator");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["body[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 8px !important;\n    color: #141415;\n   font-size: larger;\n}\np[_ngcontent-%COMP%] {\n    display: block;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0dBQ2YsaUJBQWlCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMTQxNDE1O1xuICAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vdGVybXMtY29uZGl0aW9uL3Rlcm1zLWNvbmRpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixjQUFjO0dBQ2YsaUJBQWlCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0FBQ0EsNHZCQUE0dkIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMxNDE0MTU7XG4gICBmb250LXNpemU6IGxhcmdlcjtcbn1cbnAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */", "body[_ngcontent-%COMP%] { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding:1em; }"]
});

/***/ }),

/***/ 54193:
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* reexport safe */ _register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent)
/* harmony export */ });
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 29087);


/***/ }),

/***/ 29087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ 9906);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ 40138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ 61585);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ 88368);
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_api/user/user.service */ 15496);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../social-signin/social-signin.component */ 81459);












function RegisterComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_25_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.f.firstName.errors.required);
  }
}
function RegisterComponent_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_30_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
  }
}
function RegisterComponent_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_35_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Password must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RegisterComponent_div_35_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RegisterComponent_div_35_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.minlength);
  }
}
function RegisterComponent_i_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 39);
  }
}
function RegisterComponent_i_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 19);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c1 = function () {
  return ["/login"];
};
class RegisterComponent {
  constructor(formBuilder, router, alertService, authService, userService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.alertService = alertService;
    this.authService = authService;
    this.userService = userService;
    this.loading = false;
    this.submitted = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.user = {};
    this.users = [];
    this.defaultImage = '../assets/images/portrait/small/default.png';
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)]]
    });
    this.userService.getUsers().subscribe(users => {
      this.users = users.map(item => {
        return Object.assign(Object.assign({}, item.payload.doc.data()), {
          id: item.payload.doc['id']
        });
      });
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  tryRegister() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.doRegister(this.registerForm.value).then(res => {
      this.user = {
        name: this.registerForm.value.firstName,
        image: '../../../../assets/images/portrait/small/default.png',
        uid: res.user.uid
      };
      const currentUser = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
      currentUser.updateProfile({
        photoURL: this.defaultImage,
        displayName: this.registerForm.value.firstName
      }).then(user => {
        console.log(user, 'user succesfull update');
      }, err => {
        console.log(err);
      });
      this.loading = false;
      console.log(res);
      this.errorMessage = '';
      this.alertService.success('Registration successful', true);
      if (this.users.length === 0) {
        this.userService.createUser(this.user).then(user => {
          console.log(user);
        });
      } else if (this.users.length !== 0) {
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].uid !== res.user.uid) {
            this.userService.createUser(this.user).then(user => {
              console.log(user);
            });
            break;
          } else {
            console.log('error');
          }
        }
      } else {
        console.log('error');
      }
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
      this.loading = false;
      this.alertService.error(err.message);
    });
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_user_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["ng-component"]],
  decls: 53,
  vars: 17,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-4", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "m-0"], [1, "card-header", "border-0", "pb-0"], [1, "card-title", "text-center"], ["src", "assets/images/logo/logo-dark.png", "alt", "branding logo"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "pt-2"], [1, "card-content"], [1, "card-subtitle", "line-on-side", "text-muted", "text-center", "font-small-3", "mx-2", "my-1"], [1, "card-body"], [1, "form-horizontal", 3, "formGroup", "ngSubmit"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "formControlName", "firstName", "placeholder", "User Name", 1, "form-control", 3, "ngClass"], [1, "form-control-position"], [1, "feather", "ft-user"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "email", "formControlName", "email", "email", "", "placeholder", "Your Email Address", "required", "", 1, "form-control", 3, "ngClass"], [1, "feather", "ft-mail"], ["type", "password", "formControlName", "password", "id", "user-password", "placeholder", "Enter Password", "required", "", 1, "form-control", 3, "ngClass"], [1, "la", "la-key"], [1, "form-group", "row"], [1, "col-md-6", "col-12", "text-center", "text-sm-left"], [1, "custom-control", "custom-checkbox", "mb-1"], ["type", "checkbox", "name", "remember-me", "id", "remember-me", 1, "custom-control-input"], ["for", "remember-me", 1, "custom-control-label"], [1, "col-md-6", "col-12", "float-sm-left", "text-center", "text-sm-right"], ["href", "recover-password.html", 1, "card-link"], ["type", "submit", 1, "btn", "btn-outline-info", "btn-block"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], ["class", "feather ft-user", 4, "ngIf"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"], [1, "feather", "ft-unlock"], [1, "invalid-feedback"], [4, "ngIf"], [1, "fa", "fa-refresh", "fa-spin"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "h6", 11)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Easily Using");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-social-signin");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p", 13)(17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "OR Using Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 14)(20, "form", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_20_listener() {
        return ctx.tryRegister();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "fieldset", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, RegisterComponent_div_25_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "fieldset", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RegisterComponent_div_30_Template, 2, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "fieldset", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 3, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 25)(37, "div", 26)(38, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 30)(43, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, RegisterComponent_i_46_Template, 1, 0, "i", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, RegisterComponent_i_47_Template, 1, 0, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 14)(50, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](52, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.firstName.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstName.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.email.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.f.password.errors));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _social_signin_social_signin_component__WEBPACK_IMPORTED_MODULE_6__.SocialSigninComponent],
  styles: [".margin-left-5[_ngcontent-%COMP%]{\n    margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tbGVmdC01e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBLG9UQUFvVCIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tbGVmdC01e1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36010:
/*!****************************************************************************************!*\
  !*** ./src/app/reservation-types/add-reservationtype/add-reservationtype.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReservationtypeComponent": () => (/* binding */ AddReservationtypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var src_app_services_definition_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/definition.service */ 67448);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);







function AddReservationtypeComponent_i_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 18);
  }
}
class AddReservationtypeComponent {
  constructor(formBuilder, activeModal, hammaddeService, toastr) {
    this.formBuilder = formBuilder;
    this.activeModal = activeModal;
    this.hammaddeService = hammaddeService;
    this.toastr = toastr;
    this.submitted = false;
  }
  ngOnInit() {
    this.definitionForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: [''],
      price: [''],
      startPrice: [''],
      type: [1]
    });
    if (this.hammadde) {
      this.definitionForm.patchValue({
        name: this.hammadde.name,
        description: this.hammadde.description,
        price: this.hammadde.price,
        startPrice: this.hammadde.startPrice,
        type: this.hammadde.type
      });
    }
  }
  close() {
    this.activeModal.close();
  }
  save() {
    if (!this.definitionForm.valid) {
      this.definitionForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    console.log(this.definitionForm.value);
    if (this.hammadde) {
      //update
      const updatedModel = Object.assign(Object.assign({}, this.definitionForm.value), {
        id: this.hammadde.id
      });
      this.hammaddeService.editCompounds(updatedModel, this.hammadde.id).subscribe(res => {
        this.submitted = false;
        this.toastr.clear();
        this.toastr.success('', 'Kayıt güncelleme başarılı');
        this.definitionForm.reset();
      }, err => {
        this.toastr.error('', 'Kayıt güncelleme sırasında hata oluştu');
        this.submitted = false;
      });
    } else {
      //insert
      this.hammaddeService.addCompounds(this.definitionForm.value).subscribe(res => {
        this.submitted = false;
        this.toastr.clear();
        this.toastr.success('', 'Kayıt başarılı');
        this.definitionForm.reset();
      }, err => {
        this.toastr.error('', 'Kayıt sırasında hata oluştu');
        this.submitted = false;
      });
    }
  }
}
AddReservationtypeComponent.ɵfac = function AddReservationtypeComponent_Factory(t) {
  return new (t || AddReservationtypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_definition_service__WEBPACK_IMPORTED_MODULE_0__.DefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
AddReservationtypeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AddReservationtypeComponent,
  selectors: [["app-add-reservationtype"]],
  inputs: {
    hammadde: "hammadde"
  },
  decls: 44,
  vars: 7,
  consts: [[1, "modal-content"], [1, "modal-header"], ["id", "myModalLabel33", 1, "modal-title", "text-text-bold-900"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [3, "formGroup"], [1, "modal-body"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["formControlName", "description", "rows", "3", 1, "form-control"], ["type", "text", "formControlName", "startPrice", 1, "form-control"], ["formControlName", "type", 1, "form-control"], [3, "value"], ["type", "text", "formControlName", "price", 1, "form-control"], [1, "modal-footer"], ["type", "reset", 1, "btn", "grey", "btn-outline-secondary", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "disabled", "click"], ["class", "fa fa-refresh fa-spin", 4, "ngIf"], [1, "fa", "fa-refresh", "fa-spin"]],
  template: function AddReservationtypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Rezervasyon T\u00FCr\u00FC Ekle/G\u00FCncelle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddReservationtypeComponent_Template_button_click_5_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Ad\u0131");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "A\u00E7\u0131klama");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "textarea", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "A\u00E7\u0131l\u0131\u015F Fiyat\u0131");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7)(23, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "T\u00FCr\u00FC");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 11)(26, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Dakika ba\u015F\u0131 \u00FCcret");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Km ba\u015F\u0131 \u00FCcret");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Sabit \u00FCcret");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u015Eehir d\u0131\u015F\u0131");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 7)(35, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Saatlik Fiyat");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14)(39, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddReservationtypeComponent_Template_button_click_39_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Kapat");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddReservationtypeComponent_Template_button_click_41_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AddReservationtypeComponent_i_42_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Kaydet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.definitionForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submitted);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 2px solid red;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n\r\n    ngb-modal-backdrop {\r\n    z-index: 1050 !important;\r\n  }\r\n  \r\n  [_nghost-%COMP%]     .block-ui-wrapper {\r\n    background: rgba(255, 249, 249, 0.5) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZXNlcnZhdGlvbnR5cGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix3RUFBd0U7RUFDMUU7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwrQ0FBK0M7QUFDbkQiLCJmaWxlIjoiYWRkLXJlc2VydmF0aW9udHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBuZ2ItbW9kYWwtYmFja2Ryb3Age1xyXG4gICAgei1pbmRleDogMTA1MCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI0OSwgMjQ5LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzZXJ2YXRpb24tdHlwZXMvYWRkLXJlc2VydmF0aW9udHlwZS9hZGQtcmVzZXJ2YXRpb250eXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsd0VBQXdFO0VBQzFFOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsK0NBQStDO0FBQ25EO0FBQ0EsNHlCQUE0eUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIG5nYi1tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICB6LWluZGV4OiAxMDUwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 70946:
/*!******************************************************************!*\
  !*** ./src/app/reservation-types/reservation-types.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationTypesComponent": () => (/* binding */ ReservationTypesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _add_reservationtype_add_reservationtype_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-reservationtype/add-reservationtype.component */ 36010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_definition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/definition.service */ 67448);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ 15733);










function ReservationTypesComponent_div_6_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservationTypesComponent_div_6_tr_23_Template_i_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const document_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openEditModal(document_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservationTypesComponent_div_6_tr_23_Template_i_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const document_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.delete(document_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const document_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](document_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](document_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.gettype(document_r2.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](document_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](document_r2.startPrice);
  }
}
function ReservationTypesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "m-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function ReservationTypesComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Rezervasyon T\u00FCrleri ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservationTypesComponent_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.openSaveModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ekle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](6, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "table", 12)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Ad\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "A\u00E7\u0131klama");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Tipi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Fiyat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "A\u00E7\u0131l\u0131\u015F Fiyat\u0131");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u0130\u015Flemler");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ReservationTypesComponent_div_6_tr_23_Template, 15, 5, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.documents);
  }
}
class ReservationTypesComponent {
  constructor(definitionService, modal, toastr) {
    this.definitionService = definitionService;
    this.modal = modal;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.GetDocuments();
  }
  GetDocuments() {
    this.definitionService.getReservationTypes().subscribe(res => {
      this.documents = res;
    });
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
  openSaveModal() {
    const modalref = this.modal.open(_add_reservationtype_add_reservationtype_component__WEBPACK_IMPORTED_MODULE_0__.AddReservationtypeComponent, {
      size: 'lg'
    });
    modalref.result.then(result => {
      this.GetDocuments();
    });
  }
  openEditModal(data) {
    const modalref = this.modal.open(_add_reservationtype_add_reservationtype_component__WEBPACK_IMPORTED_MODULE_0__.AddReservationtypeComponent, {
      size: 'xl'
    });
    modalref.componentInstance.hammadde = data;
    modalref.result.then(result => {
      this.GetDocuments();
    });
  }
  delete(id) {
    this.definitionService.deleteCompounds(id).subscribe(res => {
      this.GetDocuments();
      this.toastr.success('', 'Kayıt silindi');
    });
  }
  gettype(type) {
    if (type == 1) {
      return "Dakika Bazlı";
    } else if (type == 2) {
      return "Km Bazlı";
    } else if (type == 3) {
      return "Sabit Ücret";
    } else if (type == 4) {
      return "Şehir Dışı";
    } else {
      return "Bilinmiyor";
    }
  }
}
ReservationTypesComponent.ɵfac = function ReservationTypesComponent_Factory(t) {
  return new (t || ReservationTypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_definition_service__WEBPACK_IMPORTED_MODULE_1__.DefinitionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
};
ReservationTypesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ReservationTypesComponent,
  selectors: [["app-reservation-types"]],
  decls: 7,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"], ["mCardBody", ""], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "la", "la-edit", "success", 2, "cursor", "pointer", 3, "click"], [1, "la", "la-remove", "danger", 2, "cursor", "pointer", 3, "click"]],
  template: function ReservationTypesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReservationTypesComponent_div_6_Template, 24, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__["ɵf"]],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZhdGlvbi10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzZXJ2YXRpb24tdHlwZXMvcmVzZXJ2YXRpb24tdHlwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUI)('changelog')], ReservationTypesComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 74452:
/*!********************************************************!*\
  !*** ./src/app/reservations/reservations.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservationsComponent": () => (/* binding */ ReservationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_reservation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/reservation.service */ 35032);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/partials/general/card/card.component */ 15733);









function ReservationsComponent_div_6_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const document_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, document_r2.createdDate, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](document_r2.reservationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](document_r2.driver.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](document_r2.customer.name);
  }
}
function ReservationsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "m-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("reloadFunction", function ReservationsComponent_div_6_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.reloadChangelog($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Rezervasyonlar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 11)(6, "thead")(7, "tr")(8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Tarih");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "S\u00FCr\u00FCc\u00FC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0130\u015Flemler");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ReservationsComponent_div_6_tr_17_Template, 10, 7, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.documents);
  }
}
class ReservationsComponent {
  constructor(definitionService, modal, toastr) {
    this.definitionService = definitionService;
    this.modal = modal;
    this.toastr = toastr;
  }
  ngOnInit() {
    this.GetDocuments();
  }
  GetDocuments() {
    this.definitionService.getDocuments().subscribe(res => {
      console.log(res);
      this.documents = res;
    });
  }
  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');
    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
}
ReservationsComponent.ɵfac = function ReservationsComponent_Factory(t) {
  return new (t || ReservationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_reservation_service__WEBPACK_IMPORTED_MODULE_0__.ReservationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};
ReservationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ReservationsComponent,
  selectors: [["app-reservations"]],
  decls: 7,
  vars: 2,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], ["id", "drag-area"], [1, "row"], ["class", "col-md-12", 4, "blockUI", "blockUIMessage"], [1, "col-md-12"], [3, "options", "reloadFunction"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"]],
  template: function ReservationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ReservationsComponent_div_6_Template, 18, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blockUI", "changelog")("blockUIMessage", "Loading");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _content_partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_6__["ɵf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZhdGlvbnMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_6__.BlockUI)('changelog')], ReservationsComponent.prototype, "blockUIChangelog", void 0);

/***/ }),

/***/ 73235:
/*!**********************************************************!*\
  !*** ./src/app/ride-settings/ride-settings.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RideSettingsComponent": () => (/* binding */ RideSettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class RideSettingsComponent {
  constructor() {}
  ngOnInit() {}
}
RideSettingsComponent.ɵfac = function RideSettingsComponent_Factory(t) {
  return new (t || RideSettingsComponent)();
};
RideSettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RideSettingsComponent,
  selectors: [["app-ride-settings"]],
  decls: 2,
  vars: 0,
  template: function RideSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ride-settings works!\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWRlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmlkZS1zZXR0aW5ncy9yaWRlLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 81459:
/*!**********************************************************!*\
  !*** ./src/app/social-signin/social-signin.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialSigninComponent": () => (/* binding */ SocialSigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/alert.service */ 61585);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/auth.service */ 88368);
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_api/user/user.service */ 15496);





class SocialSigninComponent {
  constructor(route, router, alertService, authService, userService) {
    this.route = route;
    this.router = router;
    this.alertService = alertService;
    this.authService = authService;
    this.userService = userService;
    this.homeURL = '/home';
    this.users = [];
    this.user = {};
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'];
    });
  }
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users.map(item => {
        return Object.assign(Object.assign({}, item.payload.doc.data()), {
          id: item.payload.doc['id']
        });
      });
    });
  }
  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(res => {
      this.setUserInStorage(res);
      if (this.returnUrl) {
        this.homeURL = this.returnUrl;
      }
      this.router.navigate([this.homeURL]);
    }, err => {
      this.alertService.error(err.message);
    });
  }
  tryFacebookLogin() {
    this.authService.doFacebookLogin().then(res => {
      this.setUserInStorage(res);
      if (this.returnUrl) {
        this.homeURL = this.returnUrl;
      }
      this.router.navigate([this.homeURL]);
    }, err => {
      this.alertService.error(err.message);
    });
  }
  tryTwitterLogin() {
    this.authService.doTwitterLogin().then(res => {
      this.setUserInStorage(res);
      if (this.returnUrl) {
        this.homeURL = this.returnUrl;
      }
      this.router.navigate([this.homeURL]);
    }, err => {
      console.log(err);
      this.alertService.error(err.message);
    });
  }
  tryGithubLogin() {
    this.authService.doGitHubLogin().then(res => {
      this.setUserInStorage(res);
      if (this.returnUrl) {
        this.homeURL = this.returnUrl;
      }
      this.router.navigate([this.homeURL]);
    }, err => {
      console.log(err);
      this.alertService.error(err.message);
    });
  }
  setUserInStorage(res) {
    if (res.user) {
      localStorage.setItem('currentUser', JSON.stringify(res.user));
      const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
      this.user = {
        name: loggedInUser.displayName,
        image: loggedInUser.photoURL,
        uid: loggedInUser.uid
      };
      if (this.users.length === 0) {
        this.userService.createUser(this.user).then(user => {
          console.log(user);
        });
      } else {
        let userExists = false;
        for (let i = 0; i < this.users.length; i++) {
          const userUid = this.users[i].uid;
          if (res.user.uid === userUid) {
            userExists = true;
            break;
          }
        }
        if (!userExists) {
          this.userService.createUser(this.user).then(user => {
            console.log(user);
          });
        }
      }
    } else {
      localStorage.setItem('currentUser', JSON.stringify(res));
    }
  }
}
SocialSigninComponent.ɵfac = function SocialSigninComponent_Factory(t) {
  return new (t || SocialSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_api_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
};
SocialSigninComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SocialSigninComponent,
  selectors: [["app-social-signin"]],
  decls: 9,
  vars: 0,
  consts: [[1, "text-center"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "click"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "click"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "click"], [1, "la", "la-google", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "click"], [1, "la", "la-github", "font-medium-4"]],
  template: function SocialSigninComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialSigninComponent_Template_a_click_1_listener() {
        return ctx.tryFacebookLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialSigninComponent_Template_a_click_3_listener() {
        return ctx.tryTwitterLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialSigninComponent_Template_a_click_5_listener() {
        return ctx.tryGoogleLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialSigninComponent_Template_a_click_7_listener() {
        return ctx.tryGithubLogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtc2lnbmluLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc29jaWFsLXNpZ25pbi9zb2NpYWwtc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
const environment = {
  production: false,
  apiUrl: 'https://forvalet.com/api/',
  url: 'http://localhost:45949/',
  firebase: {
    apiKey: 'AIzaSyCSG-EGU2RLITgpjf_ogf1w47edC_DXlWc',
    authDomain: 'evolvision-rnd.firebaseapp.com',
    databaseURL: 'https://evolvision-rnd.firebaseio.com',
    projectId: 'evolvision-rnd',
    storageBucket: 'evolvision-rnd.appspot.com',
    messagingSenderId: '890895206035',
    appId: '1:890895206035:web:a6d0e1574d59ffe40bef66'
  },
  googleApiKey: 'AIzaSyAIIYOxA7qeetFz6TuR1Qewc0Rrjhzx7ZU'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 45447:
/*!*********************************************************!*\
  !*** ./src/assets/data/customizer/customizerColor.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"colorArray":[{"cssClass":"bg-blue-grey"},{"cssClass":"bg-primary"},{"cssClass":"bg-danger"},{"cssClass":"bg-success"},{"cssClass":"bg-blue"},{"cssClass":"bg-cyan"},{"cssClass":"bg-pink"},{"cssClass":"bg-gradient-x-grey-blue"},{"cssClass":"bg-gradient-x-primary"},{"cssClass":"bg-gradient-x-danger"},{"cssClass":"bg-gradient-x-success"},{"cssClass":"bg-gradient-x-blue"},{"cssClass":"bg-gradient-x-cyan"},{"cssClass":"bg-gradient-x-pink"},{"cssClass":"bg-default"},{"cssClass":"bg-blue-grey bg-lighten-4"},{"cssClass":"bg-primary bg-lighten-4"},{"cssClass":"bg-danger bg-lighten-4"},{"cssClass":"bg-success bg-lighten-4"},{"cssClass":"bg-blue bg-lighten-4"},{"cssClass":"bg-cyan bg-lighten-4"},{"cssClass":"bg-pink bg-lighten-4"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map