"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_full-pages_others_others_module_ts"],{

/***/ 5080:
/*!**************************************************************************!*\
  !*** ./src/app/content/full-pages/others/bg-image/bg-image.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BgImageComponent": () => (/* binding */ BgImageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = ["weeks"];
const _c1 = ["days"];
const _c2 = ["hours"];
const _c3 = ["minutes"];
const _c4 = ["seconds"];
class BgImageComponent {
  constructor() {
    this.targetDate = new Date(2023, 5, 11);
    this.targetTime = this.targetDate.getTime();
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.currentTime = `${this.months[this.targetDate.getMonth()]} ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
      !isNaN(this.days.nativeElement.innerText) ? this.days.nativeElement.innerText = Math.floor(this.difference) : this.days.nativeElement.innerHTML = ``;
    }, 1000);
  }
  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }
}
BgImageComponent.ɵfac = function BgImageComponent_Factory(t) {
  return new (t || BgImageComponent)();
};
BgImageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BgImageComponent,
  selectors: [["app-bg-image"]],
  viewQuery: function BgImageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.weeks = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.days = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hours = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minutes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.seconds = _t.first);
    }
  },
  decls: 48,
  vars: 1,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-6", "col-10", "p-0"], [1, "card", "card-transparent", "box-shadow-0", "border-0"], [1, "card-content"], [1, "text-center"], [1, "card-text", "pb-2", "white"], ["src", "../../../../../assets/images/logo/logo-light-lg.png", "width", "300", "alt", "bg-img", 1, "img-responsive", "block", "width-300", "mx-auto"], [1, "count-down-timer"], [1, "wrapper"], [1, "times"], ["days", ""], ["hours", ""], ["minutes", ""], ["seconds", ""], [1, "description"], [1, "col-12", "pt-1"], [1, "card-text", "lead", "white"], [1, "col-12", "text-center", "pt-2"], [1, "socialIcon", "card-text"], [3, "routerLink"], [1, "la", "la-facebook-square", "white"], [1, "la", "la-twitter-square", "white"], [1, "la", "la-google-plus-square", "white"], [1, "la", "la-linkedin-square", "white"]],
  template: function BgImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WE ARE LAUNCHING SOON.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", null, 15)(20, "p", null, 16)(22, "p", null, 17)(24, "p", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19)(27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Minutes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Seconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20)(36, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Our website is under construction.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22)(39, "p", 23)(40, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Countdown to ", ctx.currentTime, " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: max-content !important;\n}\n\n[_nghost-%COMP%]     .fixed-navbar {\n  padding-top: 0rem !important;\n}\n\n[_nghost-%COMP%]     .countdown {\n  color: white !important;\n  font-size: 3rem !important;\n  display: block !important;\n}\n\n[_nghost-%COMP%]     .measurements-text {\n  font-size: 1.5rem !important;\n}\n\n[_nghost-%COMP%]     .countdown .measurements {\n  padding: 1.5rem !important;\n  float: left;\n  border-radius: 0.5rem;\n}\n\n[_nghost-%COMP%]     .count-down-timer {\n  text-align: center;\n  max-width: 400px;\n  margin: 20px auto;\n  color: #fff;\n  border-radius: 6px;\n  padding: 10px;\n  font-family: sans-serif;\n}\n\n[_nghost-%COMP%]     .count-down-timer .wrapper .description {\n  display: grid;\n  grid-template-columns: repeat(5, calc(25% - 5px));\n  grid-column-gap: 10px;\n  font-size: 1.5rem;\n\n}\n\n[_nghost-%COMP%]     .count-down-timer .wrapper .times {\n  display: grid;\n  grid-template-columns: repeat(5, calc(25% - 5px));\n  grid-column-gap: 10px;\n  font-size: 3.0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJnLWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxxQkFBcUI7RUFDckIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpREFBaUQ7RUFDakQscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJiZy1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCBib2R5IHtcbiAgaGVpZ2h0OiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmZpeGVkLW5hdmJhciB7XG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnRkb3duIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogM3JlbSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1lYXN1cmVtZW50cy10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudGRvd24gLm1lYXN1cmVtZW50cyB7XG4gIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50LWRvd24tdGltZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudC1kb3duLXRpbWVyIC53cmFwcGVyIC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGNhbGMoMjUlIC0gNXB4KSk7XG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG5cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudC1kb3duLXRpbWVyIC53cmFwcGVyIC50aW1lcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIGNhbGMoMjUlIC0gNXB4KSk7XG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcbiAgZm9udC1zaXplOiAzLjByZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL290aGVycy9iZy1pbWFnZS9iZy1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpREFBaUQ7RUFDakQscUJBQXFCO0VBQ3JCLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaURBQWlEO0VBQ2pELHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7QUFDQSxvaEVBQW9oRSIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5maXhlZC1uYXZiYXIge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50ZG93biB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tZWFzdXJlbWVudHMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnRkb3duIC5tZWFzdXJlbWVudHMge1xuICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudC1kb3duLXRpbWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnQtZG93bi10aW1lciAud3JhcHBlciAuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBjYWxjKDI1JSAtIDVweCkpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnQtZG93bi10aW1lciAud3JhcHBlciAudGltZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBjYWxjKDI1JSAtIDVweCkpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMy4wcmVtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 89689:
/*!**************************************************************************!*\
  !*** ./src/app/content/full-pages/others/bg-video/bg-video.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BgVideoComponent": () => (/* binding */ BgVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-countdown */ 51314);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class BgVideoComponent {
  constructor() {
    this.text = {
      Weeks: 'Weeks',
      Days: 'Days',
      Hours: 'Hours',
      Minutes: 'Minutes',
      Seconds: 'Seconds'
    };
  }
}
BgVideoComponent.ɵfac = function BgVideoComponent_Factory(t) {
  return new (t || BgVideoComponent)();
};
BgVideoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BgVideoComponent,
  selectors: [["app-bg-video"]],
  decls: 26,
  vars: 0,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12"], [1, "card", "card-transparent", "box-shadow-0", "border-0", "coming-soon-content"], [1, "card-content"], [1, "text-center"], [1, "card-text", "pt-1", "pb-2", "white"], ["src", "../../../../../assets/images/logo/logo-light-lg.png", "width", "300", "alt", "bg-img", 1, "img-responsive", "block", "width-300", "mx-auto"], ["units", "Weeks | Days | Hours | Minutes | Seconds", "end", "August 24, 2019", 1, "card-text", "getting-started", "pt-1", "mt-2", "white", "d-inline-block"], [1, "col-12", "pt-1"], [1, "card-text", "lead", "white"], [1, "col-12", "text-center", "pt-2"], [1, "socialIcon"], [3, "routerLink"], [1, "la", "la-facebook-square", "white"], [1, "la", "la-twitter-square", "white"], [1, "la", "la-google-plus-square", "white"], [1, "la", "la-linkedin-square", "white"]],
  template: function BgVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "h5", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "WE ARE LAUNCHING SOON.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10)(12, "countdown", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12)(14, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our website is under construction.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14)(17, "p", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [ngx_countdown__WEBPACK_IMPORTED_MODULE_1__.CountdownComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: max-content !important;\n}\n\n[_nghost-%COMP%]     .fixed-navbar {\n  padding-top: 0rem !important;\n}\n\n[_nghost-%COMP%]     .countdown {\n  color: white !important;\n  font-size: 3rem !important;\n  display: block !important;\n}\n\n[_nghost-%COMP%]     .measurements-text {\n  font-size: 1.5rem !important;\n}\n\n[_nghost-%COMP%]     .countdown .measurements {\n  padding: 1.5rem !important;\n  float: left;\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJnLXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImJnLXZpZGVvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZml4ZWQtbmF2YmFyIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudGRvd24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWVhc3VyZW1lbnRzLXRleHQge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50ZG93biAubWVhc3VyZW1lbnRzIHtcbiAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL290aGVycy9iZy12aWRlby9iZy12aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQSxnaENBQWdoQyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5maXhlZC1uYXZiYXIge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50ZG93biB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tZWFzdXJlbWVudHMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnRkb3duIC5tZWFzdXJlbWVudHMge1xuICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 44877:
/*!******************************************************************!*\
  !*** ./src/app/content/full-pages/others/flat/flat.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlatComponent": () => (/* binding */ FlatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


const _c0 = ["weeks"];
const _c1 = ["days"];
const _c2 = ["hours"];
const _c3 = ["minutes"];
const _c4 = ["seconds"];
class FlatComponent {
  constructor() {
    this.targetDate = new Date(2023, 5, 11);
    this.targetTime = this.targetDate.getTime();
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.currentTime = `${this.months[this.targetDate.getMonth()]} ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setInterval(() => {
      this.tickTock();
      this.difference = this.targetTime - this.now;
      this.difference = this.difference / (1000 * 60 * 60 * 24);
      !isNaN(this.days.nativeElement.innerText) ? this.days.nativeElement.innerText = Math.floor(this.difference) : this.days.nativeElement.innerHTML = ``;
    }, 1000);
  }
  tickTock() {
    this.date = new Date();
    this.now = this.date.getTime();
    this.days.nativeElement.innerText = Math.floor(this.difference);
    this.hours.nativeElement.innerText = 23 - this.date.getHours();
    this.minutes.nativeElement.innerText = 60 - this.date.getMinutes();
    this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
  }
}
FlatComponent.ɵfac = function FlatComponent_Factory(t) {
  return new (t || FlatComponent)();
};
FlatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FlatComponent,
  selectors: [["app-flat"]],
  viewQuery: function FlatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.weeks = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.days = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hours = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minutes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.seconds = _t.first);
    }
  },
  decls: 48,
  vars: 1,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-6", "col-10", "p-0"], [1, "card", "card-transparent", "box-shadow-0", "border-0"], [1, "card-content"], [1, "text-center"], [1, "card-text", "pb-2", "white"], ["src", "../../../../../assets/images/logo/logo-light-lg.png", "width", "300", "alt", "bg-img", 1, "img-responsive", "block", "width-300", "mx-auto"], [1, "count-down-timer"], [1, "wrapper"], [1, "times"], ["days", ""], ["hours", ""], ["minutes", ""], ["seconds", ""], [1, "description"], [1, "col-12", "pt-1"], [1, "card-text", "lead", "white"], [1, "col-12", "text-center", "pt-2"], [1, "socialIcon", "card-text"], [3, "routerLink"], [1, "la", "la-facebook-square", "white"], [1, "la", "la-twitter-square", "white"], [1, "la", "la-google-plus-square", "white"], [1, "la", "la-linkedin-square", "white"]],
  template: function FlatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "WE ARE LAUNCHING SOON.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", null, 15)(20, "p", null, 16)(22, "p", null, 17)(24, "p", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19)(27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Minutes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Seconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20)(36, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Our website is under construction.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22)(39, "p", 23)(40, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Countdown to ", ctx.currentTime, " ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: max-content !important;\n}\n\n[_nghost-%COMP%]     .fixed-navbar {\n  padding-top: 0rem !important;\n}\n\n[_nghost-%COMP%]     .countdown {\n  color: white !important;\n  font-size: 3rem !important;\n  display: block !important;\n}\n\n[_nghost-%COMP%]     .measurements-text {\n  font-size: 1.5rem !important;\n}\n\n[_nghost-%COMP%]     .countdown .measurements {\n  padding: 1.5rem !important;\n  float: left;\n  border-radius: 0.5rem;\n}\n\n[_nghost-%COMP%]     .count-down-timer {\n  text-align: center;\n  max-width: 400px;\n  margin: 20px auto;\n  color: #fff;\n  border-radius: 6px;\n  padding: 10px;\n  font-family: sans-serif;\n}\n\n[_nghost-%COMP%]     .count-down-timer .wrapper .description {\n  display: grid;\n  grid-template-columns: repeat(5, calc(25% - 5px));\n  grid-column-gap: 10px;\n  font-size: 1.5rem;\n\n}\n\n[_nghost-%COMP%]     .count-down-timer .wrapper .times {\n  display: grid;\n  grid-template-columns: repeat(5, calc(25% - 5px));\n  grid-column-gap: 10px;\n  font-size: 3.0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaURBQWlEO0VBQ2pELHFCQUFxQjtFQUNyQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImZsYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5maXhlZC1uYXZiYXIge1xuICBwYWRkaW5nLXRvcDogMHJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50ZG93biB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tZWFzdXJlbWVudHMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnRkb3duIC5tZWFzdXJlbWVudHMge1xuICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudC1kb3duLXRpbWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnQtZG93bi10aW1lciAud3JhcHBlciAuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBjYWxjKDI1JSAtIDVweCkpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuXG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnQtZG93bi10aW1lciAud3JhcHBlciAudGltZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBjYWxjKDI1JSAtIDVweCkpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMy4wcmVtO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL290aGVycy9mbGF0L2ZsYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaURBQWlEO0VBQ2pELHFCQUFxQjtFQUNyQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlEQUFpRDtFQUNqRCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0EsNGdFQUE0Z0UiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIGJvZHkge1xuICBoZWlnaHQ6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZml4ZWQtbmF2YmFyIHtcbiAgcGFkZGluZy10b3A6IDByZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb3VudGRvd24ge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWVhc3VyZW1lbnRzLXRleHQge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50ZG93biAubWVhc3VyZW1lbnRzIHtcbiAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY291bnQtZG93bi10aW1lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50LWRvd24tdGltZXIgLndyYXBwZXIgLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgY2FsYygyNSUgLSA1cHgpKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvdW50LWRvd24tdGltZXIgLndyYXBwZXIgLnRpbWVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgY2FsYygyNSUgLSA1cHgpKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDMuMHJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4058:
/*!********************************************************************************!*\
  !*** ./src/app/content/full-pages/others/maintenance/maintenance.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class MaintenanceComponent {
  constructor() {}
}
MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) {
  return new (t || MaintenanceComponent)();
};
MaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MaintenanceComponent,
  selectors: [["app-maintenance"]],
  decls: 32,
  vars: 0,
  consts: [["lang", "en", "data-textdirection", "ltr", 1, "loading"], ["data-open", "click", "data-menu", "vertical-menu-modern", "data-col", "1-column", 1, "vertical-layout", "vertical-menu-modern", "1-column", "bg-maintenance-image", "blank-page"], [1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "flexbox-container"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-4", "col-10", "box-shadow-2", "p-0"], [1, "card", "border-grey", "border-lighten-3", "px-1", "py-1", "box-shadow-3", "m-0"], [1, "card-body"], [1, "card-title", "text-center"], ["src", "../../../../../assets/images/logo/logo-dark-lg.png", "width", "250", "alt", "logo", 1, "img-fluid", "mx-auto", "d-block", "pt-2"], [1, "card-body", "text-center"], [1, "mt-2"], [1, "la", "la-cog", "spinner", "font-large-2"], [1, "socialIcon", "card-text", "text-center", "pt-2", "pb-2"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"]],
  template: function MaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "body", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "section", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13)(14, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This page is under maintenance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "We're sorry for the inconvenience. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Please check back later.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16)(24, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  height: max-content !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoibWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL290aGVycy9tYWludGVuYW5jZS9tYWludGVuYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLDRVQUE0VSIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgYm9keSB7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 88017:
/*!************************************************************!*\
  !*** ./src/app/content/full-pages/others/others.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OthersModule": () => (/* binding */ OthersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _flat_flat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flat/flat.component */ 44877);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bg-image/bg-image.component */ 5080);
/* harmony import */ var _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bg-video/bg-video.component */ 89689);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 4058);
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-page/search-page.component */ 26779);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-countdown */ 51314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);











class OthersModule {}
OthersModule.ɵfac = function OthersModule_Factory(t) {
  return new (t || OthersModule)();
};
OthersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: OthersModule
});
OthersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_countdown__WEBPACK_IMPORTED_MODULE_8__.CountdownModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{
    path: 'flat',
    component: _flat_flat_component__WEBPACK_IMPORTED_MODULE_0__.FlatComponent
  }, {
    path: 'bgImage',
    component: _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_1__.BgImageComponent
  }, {
    path: 'bgVideo',
    component: _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_2__.BgVideoComponent
  }, {
    path: 'maintenance',
    component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.MaintenanceComponent
  }, {
    path: 'searchPage',
    component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__.SearchPageComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OthersModule, {
    declarations: [_flat_flat_component__WEBPACK_IMPORTED_MODULE_0__.FlatComponent, _bg_image_bg_image_component__WEBPACK_IMPORTED_MODULE_1__.BgImageComponent, _bg_video_bg_video_component__WEBPACK_IMPORTED_MODULE_2__.BgVideoComponent, _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.MaintenanceComponent, _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_4__.SearchPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule, ngx_countdown__WEBPACK_IMPORTED_MODULE_8__.CountdownModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 26779:
/*!********************************************************************************!*\
  !*** ./src/app/content/full-pages/others/search-page/search-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPageComponent": () => (/* binding */ SearchPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



const _c0 = function () {
  return ["/search/searchWebsite"];
};
const _c1 = function () {
  return ["/search/searchImages"];
};
const _c2 = function () {
  return ["/search/searchVideos"];
};
class SearchPageComponent {
  constructor() {}
}
SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) {
  return new (t || SearchPageComponent)();
};
SearchPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchPageComponent,
  selectors: [["app-search-page"]],
  decls: 48,
  vars: 8,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "content-body"], [1, "row", "full-height-vh-with-nav"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "col-lg-6", "col-10"], ["src", "../../../../../assets/images/logo/logo-dark-lg.png", "alt", "Modern Search", 1, "img-fluid", "mx-auto", "d-block", "pb-3", "pt-4", "width-65-per"], [1, "form-group", "position-relative"], ["type", "text", "id", "iconLeft1", "placeholder", "Explore Modern ...", 1, "form-control", "form-control-xl", "input-xl"], [1, "form-control-position"], [1, "feather", "ft-mic", "font-medium-4"], [1, "row", "py-2"], [1, "col-12", "text-center"], [1, "btn", "btn-primary", "btn-md", "mb-1", "right_space", 3, "routerLink"], [1, "feather", "ft-search"], ["ngbDropdown", "", 1, "dropdown"], ["ngbDropdownToggle", "", "id", "btnSearchDrop", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "true", 1, "btn", "btn-warning", "btn-md", "dropdown-toggle", "dropdown-menu-right", "mb-1"], [1, "la", "la-cog"], ["ngbDropdownMenu", "", "aria-labelledby", "btnSearchDrop", 1, "dropdown-menu", "mt-1", "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink"], [1, "feather", "ft-globe"], [1, "la", "la-file-image-o"], [1, "feather", "ft-video"], [1, "la", "la-map-o"], [1, "dropdown-divider", "block"], [1, "la", "la-smile-o"], [1, "row", "py-1"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-twitter", 3, "routerLink"], [1, "la", "la-twitter"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-linkedin", 3, "routerLink"], [1, "la", "la-linkedin", "font-medium-4"], [1, "btn", "btn-social-icon", "mr-1", "mb-1", "btn-outline-github", 3, "routerLink"], [1, "la", "la-github", "font-medium-4"]],
  template: function SearchPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12)(13, "div", 13)(14, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Modern Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 16)(18, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Advanced search");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19)(22, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Web");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Images");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Maps");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " I'm Feeling Lucky");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27)(39, "div", 13)(40, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbDropdownMenu, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 14px !important;\n    left: 0px !important;\n    transform: translate3d(11px, -276px, 0px);\n}\n\n.right_space[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n\n[_nghost-%COMP%]     .content-wrapper {\n  padding: 2.2rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQix5Q0FBeUM7QUFDN0M7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic2VhcmNoLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMXB4LCAtMjc2cHgsIDBweCk7XG59XG5cbi5yaWdodF9zcGFjZSB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY29udGVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMi4ycmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9mdWxsLXBhZ2VzL290aGVycy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIseUNBQXlDO0FBQzdDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLDR1QkFBNHVCIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE0cHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDExcHgsIC0yNzZweCwgMHB4KTtcbn1cblxuLnJpZ2h0X3NwYWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiAyLjJyZW0gIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 51314:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-countdown/fesm2020/ngx-countdown.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountdownComponent": () => (/* binding */ CountdownComponent),
/* harmony export */   "CountdownGlobalConfig": () => (/* binding */ CountdownGlobalConfig),
/* harmony export */   "CountdownModule": () => (/* binding */ CountdownModule),
/* harmony export */   "CountdownStatus": () => (/* binding */ CountdownStatus),
/* harmony export */   "CountdownTimer": () => (/* binding */ CountdownTimer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);




function CountdownComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.i.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function CountdownComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};
var CountdownStatus;
(function (CountdownStatus) {
  CountdownStatus[CountdownStatus["ing"] = 0] = "ing";
  CountdownStatus[CountdownStatus["pause"] = 1] = "pause";
  CountdownStatus[CountdownStatus["stop"] = 2] = "stop";
  CountdownStatus[CountdownStatus["done"] = 3] = "done";
})(CountdownStatus || (CountdownStatus = {}));
class CountdownTimer {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.fns = [];
    this.commands = [];
    this.nextTime = 0;
    this.ing = false;
  }
  start() {
    if (this.ing === true) {
      return;
    }
    this.ing = true;
    this.nextTime = +new Date();
    this.ngZone.runOutsideAngular(() => {
      this.process();
    });
  }
  process() {
    while (this.commands.length) {
      this.commands.shift()();
    }
    let diff = +new Date() - this.nextTime;
    const count = 1 + Math.floor(diff / 100);
    diff = 100 - diff % 100;
    this.nextTime += 100 * count;
    for (let i = 0, len = this.fns.length; i < len; i += 2) {
      let frequency = this.fns[i + 1];
      // 100/s
      if (0 === frequency) {
        this.fns[i](count);
        // 1000/s
      } else {
        // 先把末位至0，再每次加2
        frequency += 2 * count - 1;
        const step = Math.floor(frequency / 20);
        if (step > 0) {
          this.fns[i](step);
        }
        // 把末位还原成1
        this.fns[i + 1] = frequency % 20 + 1;
      }
    }
    if (!this.ing) {
      return;
    }
    setTimeout(() => this.process(), diff);
  }
  add(fn, frequency) {
    this.commands.push(() => {
      this.fns.push(fn);
      this.fns.push(frequency === 1000 ? 1 : 0);
      this.ing = true;
    });
    return this;
  }
  remove(fn) {
    this.commands.push(() => {
      const i = this.fns.indexOf(fn);
      if (i !== -1) {
        this.fns.splice(i, 2);
      }
      this.ing = this.fns.length > 0;
    });
    return this;
  }
}
CountdownTimer.ɵfac = function CountdownTimer_Factory(t) {
  return new (t || CountdownTimer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
CountdownTimer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CountdownTimer,
  factory: CountdownTimer.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownTimer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

// tslint:disable: no-inferrable-types
class CountdownGlobalConfig {
  constructor(locale) {
    this.locale = locale;
    this.demand = false;
    this.leftTime = 0;
    this.format = 'HH:mm:ss';
    this.timezone = '+0000';
    this.formatDate = ({
      date,
      formatStr,
      timezone
    }) => {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(new Date(date), formatStr, this.locale, timezone || this.timezone || '+0000');
    };
  }
}
CountdownGlobalConfig.ɵfac = function CountdownGlobalConfig_Factory(t) {
  return new (t || CountdownGlobalConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
};
CountdownGlobalConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CountdownGlobalConfig,
  factory: CountdownGlobalConfig.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownGlobalConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }];
  }, null);
})();
class CountdownComponent {
  constructor(locale, timer, defCog, cdr, ngZone) {
    this.locale = locale;
    this.timer = timer;
    this.defCog = defCog;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.frequency = 1000;
    this._notify = {};
    this.status = CountdownStatus.ing;
    this.isDestroy = false;
    this.i = {};
    this.left = 0;
    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  set config(i) {
    if (i.notify != null && !Array.isArray(i.notify) && i.notify > 0) {
      i.notify = [i.notify];
    }
    this._config = i;
  }
  get config() {
    return this._config;
  }
  /**
   * Start countdown, you must manually call when `demand: false`
   */
  begin() {
    this.status = CountdownStatus.ing;
    this.callEvent('start');
  }
  /**
   * Restart countdown
   */
  restart() {
    if (this.status !== CountdownStatus.stop) {
      this.destroy();
    }
    this.init();
    this.callEvent('restart');
  }
  /**
   * Stop countdown, must call `restart` when stopped, it's different from pause, unable to recover
   */
  stop() {
    if (this.status === CountdownStatus.stop) {
      return;
    }
    this.status = CountdownStatus.stop;
    this.destroy();
    this.callEvent('stop');
  }
  /**
   * Pause countdown, you can use `resume` to recover again
   */
  pause() {
    if (this.status === CountdownStatus.stop || this.status === CountdownStatus.pause) {
      return;
    }
    this.status = CountdownStatus.pause;
    this.callEvent('pause');
  }
  /**
   * Resume countdown
   */
  resume() {
    if (this.status === CountdownStatus.stop || this.status !== CountdownStatus.pause) {
      return;
    }
    this.status = CountdownStatus.ing;
    this.callEvent('resume');
  }
  callEvent(action) {
    this.event.emit({
      action,
      left: this.left,
      status: this.status,
      text: this.i.text
    });
  }
  init() {
    const {
      locale,
      defCog
    } = this;
    const config = this.config = {
      ...new CountdownGlobalConfig(locale),
      ...defCog,
      ...this.config
    };
    // tslint:disable-next-line: no-bitwise
    const frq = this.frequency = ~config.format.indexOf('S') ? 100 : 1000;
    this.status = config.demand ? CountdownStatus.pause : CountdownStatus.ing;
    this.getLeft();
    // bind reflow to me
    const _reflow = this.reflow;
    this.reflow = (count = 0, force = false) => _reflow.apply(this, [count, force]);
    if (Array.isArray(config.notify)) {
      config.notify.forEach(time => {
        if (time < 1) {
          throw new Error(`The notify config must be a positive integer.`);
        }
        time = time * 1000;
        time = time - time % frq;
        this._notify[time] = true;
      });
    }
    this.timer.add(this.reflow, frq).start();
    this.reflow(0, true);
  }
  destroy() {
    this.timer.remove(this.reflow);
    return this;
  }
  /**
   * 更新时钟
   */
  reflow(count = 0, force = false) {
    if (this.isDestroy) {
      return;
    }
    const {
      status,
      config,
      _notify
    } = this;
    if (!force && status !== CountdownStatus.ing) {
      return;
    }
    let value = this.left = this.left - this.frequency * count;
    if (value < 1) {
      value = 0;
    }
    this.i = {
      value,
      text: config.formatDate({
        date: value,
        formatStr: config.format,
        timezone: config.timezone
      })
    };
    if (typeof config.prettyText === 'function') {
      this.i.text = config.prettyText(this.i.text);
    }
    this.cdr.detectChanges();
    if (config.notify === 0 || _notify[value]) {
      this.ngZone.run(() => {
        this.callEvent('notify');
      });
    }
    if (value === 0) {
      this.ngZone.run(() => {
        this.status = CountdownStatus.done;
        this.destroy();
        this.callEvent('done');
      });
    }
  }
  /**
   * 获取倒计时剩余帧数
   */
  getLeft() {
    const {
      config,
      frequency
    } = this;
    let left = config.leftTime * 1000;
    const end = config.stopTime;
    if (!left && end) {
      left = end - new Date().getTime();
    }
    this.left = left - left % frequency;
  }
  ngOnInit() {
    this.init();
    if (!this.config.demand) {
      this.begin();
    }
  }
  ngOnDestroy() {
    this.isDestroy = true;
    this.destroy();
  }
  ngOnChanges(changes) {
    if (!changes.config.firstChange) {
      this.restart();
    }
  }
}
CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
  return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownTimer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CountdownGlobalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
CountdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CountdownComponent,
  selectors: [["countdown"]],
  hostVars: 2,
  hostBindings: function CountdownComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("count-down", true);
    }
  },
  inputs: {
    config: "config",
    render: "render"
  },
  outputs: {
    event: "event"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CountdownTimer]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 5,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
  template: function CountdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountdownComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CountdownComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.render);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.render)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.i));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'countdown',
      template: `
    <ng-container *ngIf="!render">
      <span [innerHTML]="i.text"></span>
    </ng-container>
    <ng-container *ngTemplateOutlet="render; context: { $implicit: i }"></ng-container>
  `,
      host: {
        '[class.count-down]': 'true'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      providers: [CountdownTimer],
      standalone: true
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID]
      }]
    }, {
      type: CountdownTimer
    }, {
      type: CountdownGlobalConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    render: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class CountdownModule {}
CountdownModule.ɵfac = function CountdownModule_Factory(t) {
  return new (t || CountdownModule)();
};
CountdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CountdownModule
});
CountdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [CountdownComponent]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [CountdownComponent],
      exports: [CountdownComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-countdown.mjs.map

/***/ })

}]);
//# sourceMappingURL=src_app_content_full-pages_others_others_module_ts.js.map