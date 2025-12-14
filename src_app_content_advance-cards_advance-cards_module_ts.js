"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_advance-cards_advance-cards_module_ts"],{

/***/ 74063:
/*!***************************************************************!*\
  !*** ./src/app/content/advance-cards/advance-cards.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceCardsModule": () => (/* binding */ AdvanceCardsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics/statistics.component */ 588);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-chartist */ 19419);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social/social.component */ 48329);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/charts.component */ 42689);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/general/card/card.module */ 9651);
/* harmony import */ var _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/general/match-height/match-height.module */ 61986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);













class AdvanceCardsModule {}
AdvanceCardsModule.ɵfac = function AdvanceCardsModule_Factory(t) {
  return new (t || AdvanceCardsModule)();
};
AdvanceCardsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AdvanceCardsModule
});
AdvanceCardsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_5__.MatchHeightModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([{
    path: 'statistics',
    component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_0__.StatisticsComponent
  }, {
    path: 'social',
    component: _social_social_component__WEBPACK_IMPORTED_MODULE_1__.SocialComponent
  }, {
    path: 'charts',
    component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__.ChartsComponent
  }]), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AdvanceCardsModule, {
    declarations: [_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_0__.StatisticsComponent, _social_social_component__WEBPACK_IMPORTED_MODULE_1__.SocialComponent, _charts_charts_component__WEBPACK_IMPORTED_MODULE_3__.ChartsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_4__.CardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.NgChartsModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, _partials_general_match_height_match_height_module__WEBPACK_IMPORTED_MODULE_5__.MatchHeightModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 42689:
/*!******************************************************************!*\
  !*** ./src/app/content/advance-cards/charts/charts.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsComponent": () => (/* binding */ ChartsComponent)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 97103);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/chart.api */ 19383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-chartist */ 19419);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/general/card/card.component */ 15733);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_directives/match-height.directive */ 83688);








function ChartsComponent_x_chartist_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 61);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r0.earningchart.data)("type", ctx_r0.earningchart.type)("options", ctx_r0.earningchart.options)("responsiveOptions", ctx_r0.earningchart.responsiveOptions)("events", ctx_r0.earningchart.events);
  }
}
function ChartsComponent_x_chartist_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 61);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r1.lineArea.data)("type", ctx_r1.lineArea.type)("options", ctx_r1.lineArea.options)("responsiveOptions", ctx_r1.lineArea.responsiveOptions)("events", ctx_r1.lineArea.events);
  }
}
function ChartsComponent_x_chartist_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 62);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r2.DonutChart.data)("type", ctx_r2.DonutChart.type)("options", ctx_r2.DonutChart.options)("responsiveOptions", ctx_r2.DonutChart.responsiveOptions)("events", ctx_r2.DonutChart.events);
  }
}
function ChartsComponent_x_chartist_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 61);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r3.donutChart2.data)("type", ctx_r3.donutChart2.type)("options", ctx_r3.donutChart2.options)("responsiveOptions", ctx_r3.donutChart2.responsiveOptions)("events", ctx_r3.donutChart2.events);
  }
}
function ChartsComponent_x_chartist_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 61);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r4.donutChart1.data)("type", ctx_r4.donutChart1.type)("options", ctx_r4.donutChart1.options)("responsiveOptions", ctx_r4.donutChart1.responsiveOptions)("events", ctx_r4.donutChart1.events);
  }
}
function ChartsComponent_x_chartist_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 61);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r5.barChart.data)("type", ctx_r5.barChart.type)("options", ctx_r5.barChart.options)("responsiveOptions", ctx_r5.barChart.responsiveOptions)("events", ctx_r5.barChart.events);
  }
}
function ChartsComponent_x_chartist_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 61);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r6.lineArea1.data)("type", ctx_r6.lineArea1.type)("options", ctx_r6.lineArea1.options)("responsiveOptions", ctx_r6.lineArea1.responsiveOptions)("events", ctx_r6.lineArea1.events);
  }
}
function ChartsComponent_x_chartist_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "x-chartist", 61);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r7.ecommercesaleslineArea.data)("type", ctx_r7.ecommercesaleslineArea.type)("options", ctx_r7.ecommercesaleslineArea.options)("responsiveOptions", ctx_r7.ecommercesaleslineArea.responsiveOptions)("events", ctx_r7.ecommercesaleslineArea.events);
  }
}
class ChartsComponent {
  constructor(chartApiservice) {
    this.chartApiservice = chartApiservice;
    this.hitRateOptions = {
      bodyClass: ['bg-hexagons', 'pt-0'],
      headerClass: ['bg-hexagons'],
      cardClass: ['pull-up'],
      close: false,
      expand: false,
      minimize: false,
      reload: true
    };
    this.dealsOptions = {
      bodyClass: ['bg-hexagons-danger'],
      cardClass: ['pull-up'],
      contentClass: ['bg-gradient-directional-danger']
    };
  }
  getlineArea() {
    const Chartdata = this.ChartistData;
    this.lineArea = {
      type: 'Line',
      data: Chartdata['lineArea'],
      options: {
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
          divisor: 1.8
        }),
        fullwidth: true,
        height: '320px',
        low: 0,
        showArea: true,
        fullWidth: true,
        showPoint: false,
        axisX: {
          showGrid: false
        },
        axisY: {
          low: 0,
          offset: 16,
          scaleMinSpace: 40,
          labelInterpolationFnc: function (value) {
            return value + 'K';
          }
        }
      },
      responsiveOptions: [['screen and (max-width: 640px) and (min-width: 200px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }], ['screen and (max-width: 380px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]],
      events: {
        created(data) {
          const defs = data.svg.elem('defs');
          defs.elem('linearGradient', {
            id: 'gradient1',
            x1: 1,
            y1: 1,
            x2: 1,
            y2: 1
          }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(22, 141, 238, 1)'
          }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(98, 188, 270, 11)'
          });
        }
      }
    };
    this.DonutChart = {
      type: 'Pie',
      data: Chartdata['donutDashboard'],
      options: {
        width: '100%',
        height: '280px',
        donut: true,
        startAngle: 0,
        labelInterpolationFnc: function (value) {
          const total = Chartdata['donutDashboard'].series.reduce(function (prev, series) {
            return prev + series.value;
          }, 0);
          return total + '%';
        }
      },
      events: {
        draw(data) {
          if (data.type === 'label') {
            if (data.index === 0) {
              data.element.attr({
                dx: data.element.root().width() / 2,
                dy: data.element.root().height() / 2
              });
            } else {
              data.element.remove();
            }
          }
        }
      }
    };
    this.barChart = {
      type: 'Bar',
      data: Chartdata['Bar'],
      options: {
        fullwidth: true,
        height: '320px',
        seriesBarDistance: 21,
        chartPadding: {
          top: 0
        },
        axisX: {
          showLable: true,
          showGrid: false,
          offset: 60,
          labelInterpolationFnc: function (value) {
            return value.slice(0, 3);
          }
        },
        axisY: {
          scaleMinSpace: 40
        }
      }
    };
    this.ecommercesaleslineArea = {
      type: 'Line',
      data: Chartdata['lineArea2'],
      options: {
        height: '300px',
        low: 0,
        showArea: true,
        fullWidth: true,
        onlyInteger: true,
        axisX: {
          showGrid: false
        },
        axisY: {
          low: 0,
          scaleMinSpace: 40,
          showGrid: false
        }
      },
      responsiveOptions: [['screen and (max-width: 640px) and (min-width: 381px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }], ['screen and (max-width: 380px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]],
      events: {
        draw(data) {
          const circleRadius = 6;
          if (data.type === 'point') {
            const circle = new chartist__WEBPACK_IMPORTED_MODULE_0__.Svg('circle', {
              cx: data.x,
              cy: data.y,
              r: circleRadius,
              class: 'ct-point-circle'
            });
            data.element.replace(circle);
          }
        }
      }
    };
  }
  getChartData() {
    const SaleschartData = this.salesData;
    this.earningchart = {
      type: 'Line',
      data: SaleschartData['earningchart'],
      options: {
        chartPadding: 0,
        height: '440px',
        low: 0,
        showArea: true,
        fullWidth: true,
        onlyInteger: true,
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: -1
        },
        axisY: {
          scaleMinSpace: 40,
          showGrid: false,
          showLabel: false,
          offset: -2
        }
      },
      responsiveOptions: [['screen and (max-width: 640px) and (min-width: 381px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      }], ['screen and (max-width: 380px)', {
        axisX: {
          labelInterpolationFnc: function (value, index) {
            return index % 3 === 0 ? value : null;
          }
        }
      }]],
      events: {
        created(data) {
          const defs = data.svg.elem('defs');
          defs.elem('linearGradient', {
            id: 'gradient1',
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0
          }).elem('stop', {
            offset: 0,
            'stop-color': 'rgb(255,73,97)'
          }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgb(255,73,97)'
          });
        },
        draw(data) {
          const circleRadius = 6;
          if (data.type === 'point') {
            const circle = new chartist__WEBPACK_IMPORTED_MODULE_0__.Svg('circle', {
              cx: data.x,
              cy: data.y,
              r: circleRadius,
              class: 'ct-point-circle'
            });
            data.element.replace(circle);
          }
        }
      }
    };
    this.lineArea1 = {
      type: 'Line',
      data: SaleschartData['lineArea'],
      options: {
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
          divisor: 2.8
        }),
        fullWidth: true,
        height: '320px',
        showArea: false,
        showPoint: false,
        axisX: {
          showGrid: false,
          showLabel: true,
          offset: 32
        },
        axisY: {
          showGrid: true,
          showLabel: true,
          scaleMinSpace: 28,
          offset: 44
        }
      },
      events: {
        created(data) {
          const defs = data.svg.elem('defs');
          defs.elem('linearGradient', {
            id: 'gradient2',
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0
          }).elem('stop', {
            offset: 0,
            'stop-color': 'rgb(255,73,97)'
          }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgb(255,73,97)'
          });
        },
        draw(data) {
          const circleRadius = 4;
          if (data.type === 'point') {
            const circle = new chartist__WEBPACK_IMPORTED_MODULE_0__.Svg('circle', {
              cx: data.x,
              cy: data.y,
              r: circleRadius,
              class: 'ct-point-circle'
            });
            data.element.replace(circle);
          } else if (data.type === 'label') {
            // adjust label position for rotation
            const dX = data.width / 2 + (26 - data.width);
            data.element.attr({
              x: data.element.attr('x') - dX
            });
          }
        }
      }
    };
    this.donutChart2 = {
      type: 'Pie',
      data: SaleschartData['donut1'],
      options: {
        chartPadding: 0,
        fullwidth: true,
        height: '273px',
        donut: true,
        showLabel: true,
        startAngle: 0,
        labelInterpolationFnc: function (value) {
          const total = 82;
          return total + '%';
        }
      },
      events: {
        draw(data) {
          if (data.type === 'label') {
            if (data.index === 0) {
              data.element.attr({
                dx: data.element.root().width() / 2,
                dy: data.element.root().height() / 2
              });
            } else {
              data.element.remove();
            }
          }
        }
      }
    };
    this.donutChart1 = {
      type: 'Pie',
      data: SaleschartData['donut2'],
      options: {
        chartPadding: 0,
        fullwidth: true,
        height: '273px',
        donut: true,
        showLabel: true,
        labelInterpolationFnc: function (value) {
          const total = 76;
          return total + '%';
        }
      },
      events: {
        draw(data) {
          if (data.type === 'label') {
            if (data.index === 0) {
              data.element.attr({
                dx: data.element.root().width() / 2,
                dy: data.element.root().height() / 2
              });
            } else {
              data.element.remove();
            }
          }
        }
      }
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Advance Charts Cards',
      links: [{
        name: 'Home',
        isLink: true,
        link: '/dashboard/sales'
      }, {
        name: 'Advance Cards',
        isLink: true,
        link: '#'
      }, {
        name: 'Charts',
        isLink: false,
        link: '#'
      }]
    };
    this.chartApiservice.getSalesData().subscribe(Response => {
      this.salesData = Response;
      this.getChartData();
    });
    this.chartApiservice.getEcommerceData().subscribe(Response => {
      this.ChartistData = Response;
      this.getlineArea();
    });
  }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
  return new (t || ChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_1__.ChartApiService));
};
ChartsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ChartsComponent,
  selectors: [["app-charts"]],
  decls: 131,
  vars: 11,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "charts-section"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], ["matchHeight", "card", 1, "row"], [1, "col-xl-4", "col-lg-12"], [1, "card", "text-white"], [1, "card-content"], [1, "position-relative"], [1, "chart-title", "position-absolute", "mt-2", "ml-2", "white"], [1, "earningchart"], [3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "chart-stats", "position-absolute", "position-bottom-0", "position-right-0", "mb-2", "mr-3"], ["href", "#", 1, "btn", "bg-danger", "mr-1", "white"], [1, "feather", "ft-bar-chart"], [1, "text-muted"], ["href", "#", 1, "danger", "darken-2"], [1, "col-xl-8", "col-lg-12"], [1, "card"], [1, "card-body"], [1, "list-inline", "text-center"], [1, "mr-1"], [1, "la", "la-circle", "danger"], [1, "la", "la-circle", "warning"], [1, "la", "la-circle", "success"], [1, "areaChartLegend"], [1, "earning-chart", "position-relative"], [1, "chart-title", "position-absolute", "mt-2", "ml-2"], [1, "font-medium-2", "text-muted", "text-center", "dountchartheader"], [1, "donut"], ["class", "pr_stats", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], ["id", "card", 3, "options"], ["mCardHeaderTitle", ""], [1, "danger"], ["mCardBody", ""], ["id", "donut-chart2", 1, "height-230", "donut-chart2"], [3, "options"], [1, "card-title", "white"], [1, "white"], [1, "float-right"], [1, "red", "lighten-4"], ["id", "donut-chart1", 1, "height-230", "donut-chart1"], [1, "card-body", "sales-growth-chart"], [1, "barchart"], [1, "Revenuechartist"], [1, "col-xl-12", "col-lg-12"], ["id", "cost-revenue", 1, "ecommercesaleslineArea", "position-relative"], [1, "card-footer"], [1, "row", "mt-1"], [1, "col-3", "text-center"], [1, "block", "font-weight-normal"], [1, "progress", "progress-sm", "mt-1", "mb-0", "box-shadow"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-gradient-x-info", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-gradient-x-warning", 2, "width", "60%"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-gradient-x-danger", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-gradient-x-success", 2, "width", "90%"], [3, "data", "type", "options", "responsiveOptions", "events"], [1, "pr_stats", 3, "data", "type", "options", "responsiveOptions", "events"]],
  template: function ChartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Charts");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ChartsComponent_x_chartist_17_Template, 1, 5, "x-chartist", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 17)(19, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Statistics ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "for the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "last year.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 22)(27, "div", 23)(28, "div", 12)(29, "div", 6)(30, "div", 24)(31, "ul", 25)(32, "li", 26)(33, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "iOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "li", 26)(38, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Windows");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "li", 26)(43, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Android");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ChartsComponent_x_chartist_48_Template, 1, 5, "x-chartist", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 9)(50, "div", 10)(51, "div", 23)(52, "div", 12)(53, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Project Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, ChartsComponent_x_chartist_58_Template, 1, 5, "x-chartist", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 10)(60, "m-card", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](61, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " Hit Rate ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "-12%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](65, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, ChartsComponent_x_chartist_67_Template, 1, 5, "x-chartist", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 10)(69, "m-card", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](70, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Deals ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "-55%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "span", 44)(76, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "152");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "/200");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, ChartsComponent_x_chartist_81_Template, 1, 5, "x-chartist", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 9)(83, "div", 10)(84, "div", 23)(85, "div", 12)(86, "div", 47)(87, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, ChartsComponent_x_chartist_88_Template, 1, 5, "x-chartist", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 22)(90, "div", 23)(91, "div", 12)(92, "div", 24)(93, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, ChartsComponent_x_chartist_94_Template, 1, 5, "x-chartist", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 9)(96, "div", 50)(97, "div", 23)(98, "div", 12)(99, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, ChartsComponent_x_chartist_100_Template, 1, 5, "x-chartist", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 52)(102, "div", 53)(103, "div", 54)(104, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Total Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "h2", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "18.6 k");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 54)(111, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "h2", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "64.54 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 54)(118, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, "Total Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "h2", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "24.38 B");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 54)(125, "h6", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "Total Revenue");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "h2", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "36.72 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](130, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.earningchart);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lineArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.DonutChart);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.hitRateOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.donutChart2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.dealsOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.donutChart1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.barChart);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lineArea1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ecommercesaleslineArea);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_chartist__WEBPACK_IMPORTED_MODULE_7__.ChartistComponent, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, src_app_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__.MatchHeightDirective],
  styles: ["[_nghost-%COMP%]     .areaChartLegend .ct-series-a .ct-line {\n    stroke:#1e9ff2;\n}\n[_nghost-%COMP%]     .areaChartLegend .ct-series-a .ct-line {\n    stroke: url(#gradient1);\n    stroke-width: 5px;\n    stroke-linecap: round;\n}\n[_nghost-%COMP%]     .areaChartLegend {\n    filter: drop-shadow(0px 20px 11px rgba(0, 0, 0, 0.5));\n}\n[_nghost-%COMP%]     .areaChartLegend .ct-series-a .ct-area {\n    fill: #ffffff;\n}\n[_nghost-%COMP%]     .areaChartLegend .ct-series-a .ct-line {\n    stroke: #3da2ea;\n}\n\n[_nghost-%COMP%]     .earningchart .ct-series-a .ct-line {\n   stroke: #FF4961;\n }\n[_nghost-%COMP%]     .earningchart .ct-series-a .ct-point-circle {\n    stroke-width: 3px;\n    stroke: #FF4961;\n    fill: #ffffff;\n}\n[_nghost-%COMP%]     .barchart .ct-series-a .ct-bar {\n    stroke: #ff394f !important;\n    stroke-width: 7px !important;\n}\n[_nghost-%COMP%]     .Revenuechartist .ct-series-a .ct-line {\n\n    stroke: url(#gradient2);\n    stroke-linecap: round;\n   }\n[_nghost-%COMP%]     .Revenuechartist {\n    filter: drop-shadow(0px 20px 11px rgba(252, 198, 198, 0.8)) !important;\n\n}\n[_nghost-%COMP%]     .Revenuechartist .ct-grid{\n    stroke-dasharray: 0px;\n    stroke: rgba(0, 0, 0, 0.4);\n    stroke-width: 0.6px;\n}\n[_nghost-%COMP%]     .Revenuechartist .ct-series-a .ct-line {\n    stroke: #ff4961;\n}\n[_nghost-%COMP%]     .Revenuechartist .ct-series-b .ct-line {\n    stroke: #c8c2c3;\n    stroke-dasharray: 8px 3px;\n}\n\n[_nghost-%COMP%]     .Revenuechartist .ct-label.ct-vertical.ct-start {\n    font-weight: 600;\n    color: #636161;\n    font-size: 12px;\n}\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-a .ct-point-circle {\n    stroke-width: 5px;\n    stroke: #ffffff;\n    fill: #1e9ff2;\n}\n\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-b .ct-point-circle {\n    stroke-width: 5px;\n    stroke: #ffffff;\n    fill: #58e0cd;\n    ;\n}\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-a .ct-area {\n    fill: #4105f9f5;\n}\n\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-b .ct-area {\n    fill: #03f7b2fa;\n}\n\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-b .ct-line {\n    stroke: #58e0cd;\n}\n[_nghost-%COMP%]     .ecommercesaleslineArea .ct-series-a .ct-line {\n    stroke: #1e9ff2;\n}\n[_nghost-%COMP%]     .donut-chart2{\n    margin-bottom: -25px;\n    margin-top: -17px;\n}\n\n[_nghost-%COMP%]     .donut-chart2 .ct-series-a .ct-slice-donut {\n    stroke: #28d094;\n    stroke-width: 5.5px !important;\n}\n\n[_nghost-%COMP%]     .donut-chart2 .ct-series-b .ct-slice-donut {\n    stroke: #ff4961;\n    stroke-width: 5.5px !important;\n}\n[_nghost-%COMP%]     .donut-chart2 {\nfilter: drop-shadow(0px 10px 11px rgba(187,187,187));\n    height: 288px;\n}\n[_nghost-%COMP%]     .donut-chart2 .ct-label {\n    fill: #ff4b62;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 1.75rem;\n    line-height: 1;\n}\n[_nghost-%COMP%]     .donut-chart1 {\n    margin-bottom: -25px;\n    margin-top: -17px;\n    height: 288px;\n}\n[_nghost-%COMP%]     .donut-chart1 .ct-series-a .ct-slice-donut {\n    stroke: #ff7889;\n    stroke-width: 5.5px !important;\n}\n\n[_nghost-%COMP%]     .donut-chart1 .ct-series-b .ct-slice-donut {\n    stroke: #ffffff;\n    stroke-width: 5.5px !important;\n}\n\n[_nghost-%COMP%]     .donut-chart1 .ct-label {\n    fill: #ffffff;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 1.75rem;\n    line-height: 1;\n}\n[_nghost-%COMP%]     .donut .ct-done .ct-slice-donut {\n    stroke: #28d094;\n    stroke-width: 24px !important;\n}\n\n[_nghost-%COMP%]     .donut .ct-progress .ct-slice-donut {\n    stroke: #ff4558;\n    stroke-width: 16px !important;\n}\n\n[_nghost-%COMP%]     .donut .ct-outstanding .ct-slice-donut {\n    stroke: #ff7d4d;\n    stroke-width: 8px !important;\n}\n\n[_nghost-%COMP%]     .donut .ct-started .ct-slice-donut {\n    stroke: #666ECC;\n    stroke-width: 32px !important;\n}\n\n[_nghost-%COMP%]     .donut .ct-label {\n    text-anchor: middle;\n    font-size: 20px;\n    fill: #868e96;\n}\n\n[_nghost-%COMP%]     .dountchartheader{\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7QUFDQTtJQUVJLHFEQUFxRDtBQUN6RDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtHQUNHLGVBQWU7Q0FDakI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLHVCQUF1QjtJQUN2QixxQkFBcUI7R0FDdEI7QUFDSDtJQUNJLHNFQUFzRTs7QUFFMUU7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQztBQUNBO0FBRUksb0RBQW9EO0lBQ3BELGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNoYXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5hcmVhQ2hhcnRMZWdlbmQgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcbiAgICBzdHJva2U6IzFlOWZmMjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYXJlYUNoYXJ0TGVnZW5kIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiB1cmwoI2dyYWRpZW50MSk7XG4gICAgc3Ryb2tlLXdpZHRoOiA1cHg7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hcmVhQ2hhcnRMZWdlbmQge1xuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjBweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC41KSkgIWltcG9ydGFudDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYXJlYUNoYXJ0TGVnZW5kIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gICAgZmlsbDogI2ZmZmZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYXJlYUNoYXJ0TGVnZW5kIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiAjM2RhMmVhO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmVhcm5pbmdjaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuICAgc3Ryb2tlOiAjRkY0OTYxO1xuIH1cbjpob3N0IDo6bmctZGVlcCAuZWFybmluZ2NoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcbiAgICBzdHJva2U6ICNGRjQ5NjE7XG4gICAgZmlsbDogI2ZmZmZmZjtcbn1cbjpob3N0IDo6bmctZGVlcCAuYmFyY2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXIge1xuICAgIHN0cm9rZTogI2ZmMzk0ZiAhaW1wb3J0YW50O1xuICAgIHN0cm9rZS13aWR0aDogN3B4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLlJldmVudWVjaGFydGlzdCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuXG4gICAgc3Ryb2tlOiB1cmwoI2dyYWRpZW50Mik7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgfVxuOmhvc3QgOjpuZy1kZWVwIC5SZXZlbnVlY2hhcnRpc3Qge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMTFweCByZ2JhKDI1MiwgMTk4LCAxOTgsIDAuOCkpICFpbXBvcnRhbnQ7XG5cbn1cbjpob3N0IDo6bmctZGVlcCAuUmV2ZW51ZWNoYXJ0aXN0IC5jdC1ncmlke1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBzdHJva2Utd2lkdGg6IDAuNnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5SZXZlbnVlY2hhcnRpc3QgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcbiAgICBzdHJva2U6ICNmZjQ5NjE7XG59XG46aG9zdCA6Om5nLWRlZXAgLlJldmVudWVjaGFydGlzdCAuY3Qtc2VyaWVzLWIgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogI2M4YzJjMztcbiAgICBzdHJva2UtZGFzaGFycmF5OiA4cHggM3B4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlJldmVudWVjaGFydGlzdCAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM2MzYxNjE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5lY29tbWVyY2VzYWxlc2xpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcbiAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgZmlsbDogIzFlOWZmMjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5lY29tbWVyY2VzYWxlc2xpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcbiAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgZmlsbDogIzU4ZTBjZDtcbiAgICA7XG59XG46aG9zdCA6Om5nLWRlZXAgLmVjb21tZXJjZXNhbGVzbGluZUFyZWEgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcbiAgICBmaWxsOiAjNDEwNWY5ZjU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZWNvbW1lcmNlc2FsZXNsaW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xuICAgIGZpbGw6ICMwM2Y3YjJmYTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5lY29tbWVyY2VzYWxlc2xpbmVBcmVhIC5jdC1zZXJpZXMtYiAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiAjNThlMGNkO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5lY29tbWVyY2VzYWxlc2xpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiAjMWU5ZmYyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDJ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQyIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogIzI4ZDA5NDtcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQyIC5jdC1zZXJpZXMtYiAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmNDk2MTtcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiB7XG4td2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDEwcHggMTFweCByZ2JhKDE4NywxODcsMTg3KSkgIWltcG9ydGFudDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDExcHggcmdiYSgxODcsMTg3LDE4NykpO1xuICAgIGhlaWdodDogMjg4cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiAuY3QtbGFiZWwge1xuICAgIGZpbGw6ICNmZjRiNjI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XG4gICAgaGVpZ2h0OiAyODhweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmNzg4OTtcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIC5jdC1zZXJpZXMtYiAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmZmZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDUuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQxIC5jdC1sYWJlbCB7XG4gICAgZmlsbDogI2ZmZmZmZjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZG9udXQgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG4gICAgc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQgLmN0LXByb2dyZXNzIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjZmY0NTU4O1xuICAgIHN0cm9rZS13aWR0aDogMTZweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmN2Q0ZDtcbiAgICBzdHJva2Utd2lkdGg6IDhweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0IC5jdC1zdGFydGVkIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjNjY2RUNDO1xuICAgIHN0cm9rZS13aWR0aDogMzJweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0IC5jdC1sYWJlbCB7XG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmlsbDogIzg2OGU5Njtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb3VudGNoYXJ0aGVhZGVye1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hZHZhbmNlLWNhcmRzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFFSSxxREFBcUQ7QUFDekQ7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7R0FDRyxlQUFlO0NBQ2pCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7QUFDQTs7SUFFSSx1QkFBdUI7SUFDdkIscUJBQXFCO0dBQ3RCO0FBQ0g7SUFDSSxzRUFBc0U7O0FBRTFFO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7QUFDQTtBQUVJLG9EQUFvRDtJQUNwRCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFBQSx3bE9BQXdsTyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYXJlYUNoYXJ0TGVnZW5kIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiMxZTlmZjI7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFyZWFDaGFydExlZ2VuZCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogdXJsKCNncmFkaWVudDEpO1xuICAgIHN0cm9rZS13aWR0aDogNXB4O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYXJlYUNoYXJ0TGVnZW5kIHtcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDIwcHggMTFweCByZ2JhKDAsIDAsIDAsIDAuNSkpICFpbXBvcnRhbnQ7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMjBweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFyZWFDaGFydExlZ2VuZCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICAgIGZpbGw6ICNmZmZmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmFyZWFDaGFydExlZ2VuZCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogIzNkYTJlYTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5lYXJuaW5nY2hhcnQgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcbiAgIHN0cm9rZTogI0ZGNDk2MTtcbiB9XG46aG9zdCA6Om5nLWRlZXAgLmVhcm5pbmdjaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gICAgc3Ryb2tlOiAjRkY0OTYxO1xuICAgIGZpbGw6ICNmZmZmZmY7XG59XG46aG9zdCA6Om5nLWRlZXAgLmJhcmNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyIHtcbiAgICBzdHJva2U6ICNmZjM5NGYgIWltcG9ydGFudDtcbiAgICBzdHJva2Utd2lkdGg6IDdweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5SZXZlbnVlY2hhcnRpc3QgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcblxuICAgIHN0cm9rZTogdXJsKCNncmFkaWVudDIpO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgIH1cbjpob3N0IDo6bmctZGVlcCAuUmV2ZW51ZWNoYXJ0aXN0IHtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAyMHB4IDExcHggcmdiYSgyNTIsIDE5OCwgMTk4LCAwLjgpKSAhaW1wb3J0YW50O1xuXG59XG46aG9zdCA6Om5nLWRlZXAgLlJldmVudWVjaGFydGlzdCAuY3QtZ3JpZHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAwcHg7XG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgc3Ryb2tlLXdpZHRoOiAwLjZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuUmV2ZW51ZWNoYXJ0aXN0IC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiAjZmY0OTYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5SZXZlbnVlY2hhcnRpc3QgLmN0LXNlcmllcy1iIC5jdC1saW5lIHtcbiAgICBzdHJva2U6ICNjOGMyYzM7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOHB4IDNweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5SZXZlbnVlY2hhcnRpc3QgLmN0LWxhYmVsLmN0LXZlcnRpY2FsLmN0LXN0YXJ0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNjM2MTYxO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZWNvbW1lcmNlc2FsZXNsaW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiA1cHg7XG4gICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgIGZpbGw6ICMxZTlmZjI7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZWNvbW1lcmNlc2FsZXNsaW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LXBvaW50LWNpcmNsZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiA1cHg7XG4gICAgc3Ryb2tlOiAjZmZmZmZmO1xuICAgIGZpbGw6ICM1OGUwY2Q7XG4gICAgO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5lY29tbWVyY2VzYWxlc2xpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gICAgZmlsbDogIzQxMDVmOWY1O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmVjb21tZXJjZXNhbGVzbGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgICBmaWxsOiAjMDNmN2IyZmE7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZWNvbW1lcmNlc2FsZXNsaW5lQXJlYSAuY3Qtc2VyaWVzLWIgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogIzU4ZTBjZDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZWNvbW1lcmNlc2FsZXNsaW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogIzFlOWZmMjtcbn1cbjpob3N0IDo6bmctZGVlcCAuZG9udXQtY2hhcnQye1xuICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG4gICAgc3Ryb2tlLXdpZHRoOiA1LjVweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MiAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNmZjQ5NjE7XG4gICAgc3Ryb2tlLXdpZHRoOiA1LjVweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDIge1xuLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDExcHggcmdiYSgxODcsMTg3LDE4NykpICFpbXBvcnRhbnQ7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTBweCAxMXB4IHJnYmEoMTg3LDE4NywxODcpKTtcbiAgICBoZWlnaHQ6IDI4OHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDIgLmN0LWxhYmVsIHtcbiAgICBmaWxsOiAjZmY0YjYyO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5kb251dC1jaGFydDEge1xuICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xN3B4O1xuICAgIGhlaWdodDogMjg4cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MSAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNmZjc4ODk7XG4gICAgc3Ryb2tlLXdpZHRoOiA1LjVweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MSAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNmZmZmZmY7XG4gICAgc3Ryb2tlLXdpZHRoOiA1LjVweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0LWNoYXJ0MSAuY3QtbGFiZWwge1xuICAgIGZpbGw6ICNmZmZmZmY7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjMjhkMDk0O1xuICAgIHN0cm9rZS13aWR0aDogMjRweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0IC5jdC1wcm9ncmVzcyAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmNDU1ODtcbiAgICBzdHJva2Utd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNmZjdkNGQ7XG4gICAgc3Ryb2tlLXdpZHRoOiA4cHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogIzY2NkVDQztcbiAgICBzdHJva2Utd2lkdGg6IDMycHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3QtbGFiZWwge1xuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZpbGw6ICM4NjhlOTY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG91bnRjaGFydGhlYWRlcntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 48329:
/*!******************************************************************!*\
  !*** ./src/app/content/advance-cards/social/social.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialComponent": () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class SocialComponent {
  constructor() {}
  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Advance Social Cards',
      links: [{
        name: 'Home',
        isLink: true,
        link: '/dashboard/sales'
      }, {
        name: 'Advance Cards',
        isLink: true,
        link: '#'
      }, {
        name: 'Social',
        isLink: false,
        link: '#'
      }]
    };
  }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) {
  return new (t || SocialComponent)();
};
SocialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SocialComponent,
  selectors: [["app-social"]],
  decls: 167,
  vars: 1,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "social-cards"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], [1, "row", "mt-2"], [1, "col-xl-4", "col-md-6", "col-12"], [1, "card", "profile-card-with-cover"], [1, "card-content"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../../../assets/images/backgrounds/fb.jpg') 0 30%"], [1, "card-profile-image"], ["src", "../../../../../assets/images/portrait/small/avatar-s-4.png", "alt", "Card image", 1, "rounded-circle", "img-border", "box-shadow-1"], [1, "profile-card-with-cover-content", "text-center"], [1, "profile-details", "mt-2"], [1, "card-title"], [1, "list-inline", "clearfix", "mt-2"], [1, "mr-3"], [1, "block"], [1, "card-body"], [1, "btn", "btn-social", "btn-min-width", "mr-1", "mb-1", "btn-facebook", 3, "routerLink"], [1, "la", "la-facebook"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../../../assets/images/backgrounds/in.jpg') 0 40%"], ["src", "../../../../../assets/images/portrait/small/avatar-s-9.png", "alt", "Card image", 1, "rounded-circle", "img-border", "box-shadow-1"], [1, "btn", "btn-social", "btn-min-width", "mr-1", "mb-1", "btn-linkedin", 3, "routerLink"], [1, "la", "la-linkedin"], [1, "card-img-top", "img-fluid", "bg-cover", "height-200", 2, "background", "url('../../../../../assets/images/backgrounds/tw.jpg') 0 30%"], ["src", "../../../../../assets/images/portrait/small/avatar-s-8.png", "alt", "Card image", 1, "rounded-circle", "img-border", "box-shadow-1"], [1, "btn", "btn-social", "btn-min-width", "mr-1", "mb-1", "btn-twitter", "white", 3, "routerLink"], [1, "la", "la-twitter"], [1, "col-lg-4", "col-md-12"], [1, "card", "bg-twitter", "white"], [1, "card-content", "p-2"], [1, "text-center", "mb-1"], [1, "la", "la-twitter", "font-large-3"], ["data-ride", "carousel", 1, "tweet-slider", "carousel", "slide", "text-center"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "yellow"], [1, "carousel-item"], [1, "card", "bg-facebook", "white"], [1, "la", "la-facebook", "font-large-3"], ["data-ride", "carousel", 1, "fb-post-slider", "carousel", "slide", "text-center"], [1, "card", "bg-linkedin", "white"], [1, "la", "la-linkedin", "font-large-3"], ["data-ride", "carousel", 1, "linkedin-post-slider", "carousel", "slide", "text-center"]],
  template: function SocialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Social Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User's social profile cards with followers - following numbers and follow button.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16)(20, "div", 17)(21, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Linda Holland");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul", 19)(24, "li", 20)(25, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "3.5K");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Likes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 20)(29, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "2845");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Followers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li")(33, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "645");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Following ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 22)(37, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10)(41, "div", 11)(42, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16)(47, "div", 17)(48, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Philip Garrett");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ul", 19)(51, "li", 20)(52, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "500+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Connections ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 20)(56, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "485");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Posts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "35");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Following ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22)(64, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 10)(68, "div", 11)(69, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 16)(74, "div", 17)(75, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Christine Wood");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ul", 19)(78, "li", 20)(79, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "1.6K");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Likes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 20)(83, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "264");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " Followers ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "h2", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "85");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Following ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 22)(91, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " Follow");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 6)(95, "div", 33)(96, "div", 34)(97, "div", 35)(98, "div", 22)(99, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 38)(102, "div", 39)(103, "div", 40)(104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Congratulations to Rob Jones in accounting for winning our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "#NFL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " football pool!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 42)(110, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Contests are a great thing to partner on. Partnerships immediately ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "#DOUBLE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " the reach.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 42)(116, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Puns, humor, and quotes are great content on ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "#Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, ". Find some related to your business.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 42)(122, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Are there ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "#common-sense");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " facts related to your business? Combine them with a great photo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 33)(128, "div", 43)(129, "div", 35)(130, "div", 22)(131, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 45)(134, "div", 39)(135, "div", 40)(136, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "Congratulations to Rob Jones in accounting for winning our #NFL football pool!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 42)(139, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Contests are a great thing to partner on. Partnerships immediately #DOUBLE the reach.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 42)(142, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Puns, humor, and quotes are great content on #Twitter. Find some related to your business. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 42)(145, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Are there #common-sense facts related to your business? Combine them with a great photo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 33)(148, "div", 46)(149, "div", 35)(150, "div", 22)(151, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 48)(154, "div", 39)(155, "div", 40)(156, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Congratulations to Rob Jones in accounting for winning our #NFL football pool!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 42)(159, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Contests are a great thing to partner on. Partnerships immediately #DOUBLE the reach.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 42)(162, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Puns, humor, and quotes are great content on #Twitter. Find some related to your business. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 42)(165, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Are there #common-sense facts related to your business? Combine them with a great photo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hZHZhbmNlLWNhcmRzL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 588:
/*!**************************************************************************!*\
  !*** ./src/app/content/advance-cards/statistics/statistics.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsComponent": () => (/* binding */ StatisticsComponent)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 97103);
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_chart_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/chart.api */ 19383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 19419);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_layout/breadcrumb/breadcrumb.component */ 74986);






function StatisticsComponent_x_chartist_1268_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 268);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r0.feedbacksdonutChart.data)("type", ctx_r0.feedbacksdonutChart.type)("options", ctx_r0.feedbacksdonutChart.options)("responsiveOptions", ctx_r0.feedbacksdonutChart.responsiveOptions)("events", ctx_r0.feedbacksdonutChart.events);
  }
}
function StatisticsComponent_x_chartist_1291_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 269);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r1.subscribersdonutChart.data)("type", ctx_r1.subscribersdonutChart.type)("options", ctx_r1.subscribersdonutChart.options)("responsiveOptions", ctx_r1.subscribersdonutChart.responsiveOptions)("events", ctx_r1.subscribersdonutChart.events);
  }
}
function StatisticsComponent_x_chartist_1308_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 270);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r2.usersdonutChart.data)("type", ctx_r2.usersdonutChart.type)("options", ctx_r2.usersdonutChart.options)("responsiveOptions", ctx_r2.usersdonutChart.responsiveOptions)("events", ctx_r2.usersdonutChart.events);
  }
}
function StatisticsComponent_x_chartist_1335_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 271);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r3.lineArea.data)("type", ctx_r3.lineArea.type)("options", ctx_r3.lineArea.options)("responsiveOptions", ctx_r3.lineArea.responsiveOptions)("events", ctx_r3.lineArea.events);
  }
}
function StatisticsComponent_x_chartist_1358_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 272);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r4.commentslineArea.data)("type", ctx_r4.commentslineArea.type)("options", ctx_r4.commentslineArea.options)("responsiveOptions", ctx_r4.commentslineArea.responsiveOptions)("events", ctx_r4.commentslineArea.events);
  }
}
function StatisticsComponent_x_chartist_1381_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 273);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r5.viewslineArea.data)("type", ctx_r5.viewslineArea.type)("options", ctx_r5.viewslineArea.options)("responsiveOptions", ctx_r5.viewslineArea.responsiveOptions)("events", ctx_r5.viewslineArea.events);
  }
}
function StatisticsComponent_x_chartist_1649_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 274);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r6.sparklineArea.data)("type", ctx_r6.sparklineArea.type)("options", ctx_r6.sparklineArea.options)("responsiveOptions", ctx_r6.sparklineArea.responsiveOptions)("events", ctx_r6.sparklineArea.events);
  }
}
function StatisticsComponent_x_chartist_1663_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 275);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r7.sparklineArea.data)("type", ctx_r7.sparklineArea.type)("options", ctx_r7.sparklineArea.options)("responsiveOptions", ctx_r7.sparklineArea.responsiveOptions)("events", ctx_r7.sparklineArea.events);
  }
}
function StatisticsComponent_x_chartist_1677_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 276);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r8.sparklineArea.data)("type", ctx_r8.sparklineArea.type)("options", ctx_r8.sparklineArea.options)("responsiveOptions", ctx_r8.sparklineArea.responsiveOptions)("events", ctx_r8.sparklineArea.events);
  }
}
function StatisticsComponent_x_chartist_1691_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 277);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r9.barChart.data)("type", ctx_r9.barChart.type)("options", ctx_r9.barChart.options)("responsiveOptions", ctx_r9.barChart.responsiveOptions)("events", ctx_r9.barChart.events);
  }
}
function StatisticsComponent_x_chartist_1704_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 278);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r10.barChart.data)("type", ctx_r10.barChart.type)("options", ctx_r10.barChart.options)("responsiveOptions", ctx_r10.barChart.responsiveOptions)("events", ctx_r10.barChart.events);
  }
}
function StatisticsComponent_x_chartist_1717_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "x-chartist", 279);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r11.barChart.data)("type", ctx_r11.barChart.type)("options", ctx_r11.barChart.options)("responsiveOptions", ctx_r11.barChart.responsiveOptions)("events", ctx_r11.barChart.events);
  }
}
class StatisticsComponent {
  constructor(chartApiservice) {
    this.chartApiservice = chartApiservice;
  }
  getlineArea() {
    const ChartData = this.Data;
    this.feedbacksdonutChart = {
      type: 'Pie',
      data: ChartData['feedbacksdonutChart'],
      options: {
        showLabel: false,
        chartPadding: 0,
        fullwidth: true,
        height: '200px',
        donut: true,
        startAngle: 0
      }
    };
    this.subscribersdonutChart = {
      type: 'Pie',
      data: ChartData['subscribersdonutChart'],
      options: {
        chartPadding: 0,
        fullwidth: true,
        height: '200px',
        donut: true,
        showLabel: false,
        startAngle: 0
      }
    };
    this.usersdonutChart = {
      type: 'Pie',
      data: ChartData['usersdonutChart'],
      options: {
        showLabel: false,
        chartPadding: 0,
        fullwidth: true,
        height: '200px',
        donut: true,
        startAngle: 0
      }
    };
    this.lineArea = {
      type: 'Line',
      data: ChartData['lineArea'],
      options: {
        // low: 650,
        fullwidth: true,
        height: '80px',
        showArea: true,
        axisX: {
          showGrid: false,
          showLabel: false
        },
        axisY: {
          showGrid: false,
          showLabel: false
        }
      }
    };
    this.commentslineArea = {
      type: 'Line',
      data: ChartData['commentslineArea'],
      options: {
        // low: 650,
        fullwidth: true,
        height: '80px',
        showArea: true,
        axisX: {
          showGrid: false,
          showLabel: false
        },
        axisY: {
          showGrid: false,
          showLabel: false
        }
      }
    };
    this.viewslineArea = {
      type: 'Line',
      data: ChartData['viewslineArea'],
      options: {
        // low: 650,
        fullwidth: true,
        height: '80px',
        showArea: true,
        axisX: {
          showGrid: false,
          showLabel: false
        },
        axisY: {
          showGrid: false,
          showLabel: false
        }
      }
    };
    this.sparklineArea = {
      type: 'Line',
      data: ChartData['sparklineArea'],
      options: {
        chartPadding: 0,
        showArea: true,
        showLine: false,
        showPoint: false,
        lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.none(),
        axisX: {
          showGrid: false,
          offset: -1
        },
        axisY: {
          showGrid: false,
          offset: -1
        }
      }
    };
    this.barChart = {
      type: 'Bar',
      data: ChartData['Bar'],
      options: {
        fullwidth: true,
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: 100
        },
        axisY: {
          showGrid: false,
          showLabel: false
        }
      }
    };
    this.barChart1 = {
      type: 'Bar',
      data: ChartData['Bar1'],
      options: {
        fullwidth: true,
        axisX: {
          showGrid: false,
          showLabel: false,
          offset: 100
        },
        axisY: {
          showGrid: false,
          showLabel: false
        }
      }
    };
    this.lineArea = {
      type: 'Line',
      data: ChartData['lineArea'],
      options: {
        // low: 650,
        fullwidth: true,
        height: '75px',
        showArea: true,
        axisX: {
          showGrid: false,
          showLabel: false
        },
        axisY: {
          showGrid: false,
          showLabel: false
        }
      }
    };
  }
  ngOnInit() {
    this.breadcrumb = {
      mainlabel: 'Advance Statistics Cards',
      links: [{
        name: 'Home',
        isLink: true,
        link: '/dashboard/sales'
      }, {
        name: 'Advance Cards',
        isLink: true,
        link: '#'
      }, {
        name: 'Statistics Cards',
        isLink: false,
        link: '#'
      }]
    };
    this.chartApiservice.getStatisticsData().subscribe(Response => {
      this.Data = Response;
      this.getlineArea();
    });
  }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) {
  return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_chart_api__WEBPACK_IMPORTED_MODULE_1__.ChartApiService));
};
StatisticsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: StatisticsComponent,
  selectors: [["app-statistics"]],
  decls: 1718,
  vars: 13,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "minimal-statistics"], [1, "row"], [1, "col-12", "mt-3", "mb-1"], [1, "text-uppercase"], [1, "col-xl-3", "col-md-6", "col-12"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "media", "d-flex"], [1, "align-self-center"], [1, "icon-pencil", "info", "font-large-2", "float-left"], [1, "media-body", "text-right"], [1, "icon-speech", "warning", "font-large-2", "float-left"], [1, "icon-graph", "success", "font-large-2", "float-left"], [1, "icon-pointer", "danger", "font-large-2", "float-left"], [1, "media-body", "text-left"], [1, "danger"], [1, "icon-rocket", "danger", "font-large-2", "float-right"], [1, "success"], [1, "icon-user", "success", "font-large-2", "float-right"], [1, "warning"], [1, "icon-pie-chart", "warning", "font-large-2", "float-right"], [1, "info"], [1, "icon-support", "info", "font-large-2", "float-right"], [1, "icon-book-open", "info", "font-large-2", "float-right"], [1, "progress", "mt-1", "mb-0", 2, "height", "7px"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "80%"], [1, "icon-bubbles", "warning", "font-large-2", "float-right"], ["role", "progressbar", "aria-valuenow", "35", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "35%"], [1, "icon-cup", "success", "font-large-2", "float-right"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "60%"], [1, "icon-direction", "danger", "font-large-2", "float-right"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "40%"], ["id", "minimal-statistics-bg"], [1, "card", "bg-info"], [1, "icon-pencil", "text-white", "font-large-2", "float-left"], [1, "media-body", "text-white", "text-right"], [1, "text-white"], [1, "card", "bg-danger"], [1, "icon-speech", "text-white", "font-large-2", "float-left"], [1, "card", "bg-success"], [1, "icon-graph", "text-white", "font-large-2", "float-left"], [1, "card", "bg-warning"], [1, "icon-pointer", "text-white", "font-large-2", "float-left"], [1, "media-body", "text-white", "text-left"], [1, "icon-rocket", "text-white", "font-large-2", "float-right"], [1, "icon-user", "text-white", "font-large-2", "float-right"], [1, "icon-pie-chart", "text-white", "font-large-2", "float-right"], [1, "icon-support", "text-white", "font-large-2", "float-right"], ["id", "crypto-stats-1", 1, "row"], [1, "card-body", "pb-1"], [1, "col-7"], [1, "text-white", "mb-1"], ["title", "XRP", 1, "cc", "XRP"], [1, "col-5", "text-right"], [1, "la", "la-caret-up"], ["title", "BTC", 1, "cc", "BTC"], ["title", "ETH", 1, "cc", "ETH"], ["title", "LTC", 1, "cc", "LTC"], ["id", "crypto-stats-2", 1, "row"], [1, "row", "text-white"], [1, "col-6"], ["title", "XRP", 1, "cc", "XRP-alt", "font-large-1"], [1, "pt-1", "m-0", "text-white"], [1, "col-6", "text-right", "pl-0"], [1, "text-white", "mb-2", "font-large-1"], ["title", "BTC", 1, "cc", "BTC-alt", "font-large-1"], ["title", "ETH", 1, "cc", "ETH-alt", "font-large-1"], ["title", "LTC", 1, "cc", "LTC-alt", "font-large-1"], ["id", "crypto-stats-3", 1, "row"], [1, "card", "crypto-card-3", "bg-info"], [1, "card-body", "cc", "XRP", "pb-1"], [1, "text-white", "mb-3"], [1, "card", "crypto-card-3", "bg-warning"], [1, "card-body", "cc", "BTC", "pb-1"], [1, "card", "crypto-card-3", "bg-danger"], [1, "card-body", "cc", "ETH", "pb-1"], [1, "card", "crypto-card-3", "bg-success"], [1, "card-body", "cc", "LTC", "pb-1"], [1, "la", "la-dollar", "background-round", "text-white"], [1, "la", "la-arrow-up"], [1, "col-6", "text-right"], [1, "text-white", "mb-2"], [1, "la", "la-star-o", "background-round", "text-white"], [1, "la", "la-arrow-down"], [1, "la", "la-line-chart", "background-round", "text-white"], [1, "la", "la-rocket", "background-round", "text-white"], ["id", "minimal-gradient-statistics-bg"], [1, "card", "bg-gradient-directional-info"], [1, "card", "bg-gradient-directional-danger"], [1, "card", "bg-gradient-directional-success"], [1, "card", "bg-gradient-directional-warning"], ["id", "icon-section"], [1, "media", "align-items-stretch"], [1, "p-2", "text-center", "bg-info", "rounded-left"], [1, "icon-camera", "font-large-2", "text-white"], [1, "p-2", "media-body"], [1, "text-bold-400", "mb-0"], [1, "p-2", "text-center", "bg-danger", "rounded-left"], [1, "icon-user", "font-large-2", "text-white"], [1, "p-2", "text-center", "bg-success", "rounded-left"], [1, "icon-basket-loaded", "font-large-2", "text-white"], [1, "p-2", "text-center", "bg-warning", "rounded-left"], [1, "icon-wallet", "font-large-2", "text-white"], [1, "p-2", "media-body", "text-left"], [1, "p-2", "text-center", "bg-warning", "rounded-right"], [1, "p-2", "text-center", "bg-success", "rounded-right"], [1, "p-2", "text-center", "bg-danger", "rounded-right"], [1, "p-2", "text-center", "bg-info", "rounded-right"], [1, "py-1", "px-2", "media-body"], [1, "text-bold-400"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "45%"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "75%"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "60%"], ["id", "icon-section-bg"], [1, "p-2", "text-center", "bg-info", "bg-darken-2", "rounded-left"], [1, "p-2", "bg-info", "text-white", "media-body", "rounded-right"], [1, "text-white", "text-bold-400", "mb-0"], [1, "p-2", "text-center", "bg-danger", "bg-darken-2", "rounded-left"], [1, "p-2", "bg-danger", "text-white", "media-body", "rounded-right"], [1, "p-2", "text-center", "bg-success", "bg-darken-2", "rounded-left"], [1, "p-2", "bg-success", "text-white", "media-body", "rounded-right"], [1, "p-2", "text-center", "bg-warning", "bg-darken-2", "rounded-left"], [1, "p-2", "bg-warning", "text-white", "media-body", "rounded-right"], [1, "p-2", "bg-warning", "text-white", "media-body", "text-left", "rounded-left"], [1, "p-2", "text-center", "bg-warning", "bg-darken-2", "rounded-right"], [1, "p-2", "bg-success", "text-white", "media-body", "text-left", "rounded-left"], [1, "p-2", "text-center", "bg-success", "bg-darken-2", "rounded-right"], [1, "p-2", "bg-danger", "text-white", "media-body", "text-left", "rounded-left"], [1, "p-2", "text-center", "bg-danger", "bg-darken-2", "rounded-right"], [1, "p-2", "bg-info", "text-white", "media-body", "text-left", "rounded-left"], [1, "p-2", "text-center", "bg-info", "bg-darken-2", "rounded-right"], ["id", "icon-section-bg-gradient"], [1, "p-2", "bg-gradient-x-info", "text-white", "media-body", "rounded-right"], [1, "p-2", "bg-gradient-x-danger", "text-white", "media-body", "rounded-right"], [1, "p-2", "bg-gradient-x-success", "text-white", "media-body", "rounded-right"], [1, "p-2", "bg-gradient-x-warning", "text-white", "media-body", "rounded-right"], [1, "p-2", "bg-gradient-x-warning", "text-white", "media-body", "text-left", "rounded-left"], [1, "p-2", "bg-gradient-x-success", "text-white", "media-body", "text-left", "rounded-left"], [1, "p-2", "bg-gradient-x-danger", "text-white", "media-body", "text-left", "rounded-left"], [1, "p-2", "bg-gradient-x-info", "text-white", "media-body", "text-left", "rounded-left"], ["id", "stats-subtitle"], [1, "col-xl-6", "col-md-12"], [1, "card", "overflow-hidden"], [1, "card-body", "cleartfix"], [1, "icon-pencil", "info", "font-large-2", "mr-2"], [1, "media-body"], [1, "icon-speech", "warning", "font-large-2", "mr-2"], [1, "mr-2"], [1, "icon-heart", "danger", "font-large-2"], [1, "icon-wallet", "success", "font-large-2"], ["id", "stats-icon-subtitle"], [1, "bg-info", "p-2", "media-middle"], [1, "icon-pencil", "font-large-2", "text-white"], [1, "media-body", "p-2"], [1, "media-right", "p-2", "media-middle"], [1, "bg-warning", "p-2", "media-middle", "rounded-left"], [1, "icon-speech", "font-large-2", "text-white"], [1, "p-2", "media-middle"], [1, "media-right", "bg-danger", "p-2", "media-middle", "rounded-right"], [1, "icon-heart", "font-large-2", "text-white"], [1, "media-right", "bg-success", "p-2", "media-middle", "rounded-right"], ["id", "stats-icon-subtitle-bg"], [1, "media", "align-items-stretch", "bg-info", "text-white", "rounded"], [1, "bg-info", "bg-darken-2", "p-2", "media-middle"], [1, "media", "align-items-stretch", "bg-warning", "text-white", "rounded"], [1, "bg-warning", "bg-darken-2", "p-2", "media-middle"], [1, "media", "align-items-stretch", "bg-danger", "text-white", "rounded"], [1, "media-right", "bg-danger", "bg-darken-2", "p-2", "media-middle"], [1, "media", "align-items-stretch", "bg-success", "text-white", "rounded"], [1, "media-right", "bg-success", "bg-darken-2", "p-2", "media-middle", "rounded"], [1, "media", "align-items-stretch", "bg-gradient-x-info", "text-white", "rounded"], [1, "media", "align-items-stretch", "bg-gradient-x-warning", "text-white", "rounded"], [1, "media", "align-items-stretch", "bg-gradient-x-danger", "text-white", "rounded"], [1, "media", "align-items-stretch", "bg-gradient-x-success", "text-white", "rounded"], ["id", "grouped-stats", 1, "grouped-stats"], [1, "col-12"], [1, "col-lg-4", "col-md-12", "col-sm-12", "border-right-blue-grey", "border-right-lighten-5"], [1, "card-body", "text-center"], [1, "card-header", "mb-2"], [1, "display-4", "blue-grey", "darken-1"], [1, "knob-center-icon", "icon-note", "knob", "hide-value", "responsive", "angle-offset", 2, "width", "79px", "height", "50px", "position", "absolute", "vertical-align", "middle", "margin-top", "70px", "margin-left", "-30px", "border", "0px", "background", "none", "font", "bold 30px Arial", "text-align", "center", "color", "rgb(225, 225, 225)", "padding", "0px", "font-size", "50px"], ["class", "feedbacks", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "list-inline", "clearfix", "mt-2"], [1, "border-right-blue-grey", "border-right-lighten-2", "pr-1"], [1, "blue-grey", "darken-1", "text-bold-400"], [1, "danger", "darken-2"], [1, "la", "la-caret-down"], [1, "warning", "darken-2"], [1, "knob-center-icon", "icon-user", "knob", "hide-value", "responsive", "angle-offset", 2, "width", "79px", "height", "50px", "position", "absolute", "vertical-align", "middle", "margin-top", "70px", "margin-left", "-38px", "border", "0px", "background", "none", "font", "bold 30px Arial", "text-align", "center", "color", "rgb(225, 225, 225)", "padding", "0px", "font-size", "50px"], ["class", "Subscribers", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "la", "la-user"], [1, "knob-center-icon", "icon-users", "knob", "hide-value", "responsive", "angle-offset", 2, "width", "79px", "height", "50px", "position", "absolute", "vertical-align", "middle", "margin-top", "70px", "margin-left", "-38px", "border", "0px", "background", "none", "font", "bold 30px Arial", "text-align", "center", "color", "rgb(225, 225, 225)", "padding", "0px", "font-size", "50px"], ["class", "Users", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "icon-male"], [1, "pl-1"], [1, "icon-female"], [1, "p-1", "text-center"], [1, "blue-grey", "darken-1"], ["class", "Likes", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "list-inline", "clearfix"], [1, "success", "text-bold-400"], ["id", "morris-comments", 2, "height", "75px"], ["class", "Comments", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "warning", "text-bold-400"], ["id", "morris-views", 2, "height", "75px"], ["class", "Views", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "danger", "text-bold-400"], [1, "row", "card-icons"], [1, "col-lg-3", "col-md-6", "col-sm-12", "border-right-blue-grey", "border-right-lighten-5"], [1, "media", "d-flex", "p-2"], [1, "icon-camera", "font-large-1", "blue-grey", "d-block", "mb-1"], [1, "text-muted", "text-right"], [1, "font-large-2", "text-bold-300", "info"], [1, "icon-user", "font-large-1", "blue-grey", "d-block", "mb-1"], [1, "font-large-2", "text-bold-300", "danger"], [1, "icon-bulb", "font-large-1", "blue-grey", "d-block", "mb-1"], [1, "font-large-2", "text-bold-300", "success"], [1, "col-lg-3", "col-md-6", "col-sm-12"], [1, "icon-wallet", "font-large-1", "blue-grey", "d-block", "mb-1"], [1, "font-large-2", "text-bold-300", "warning"], [1, "col-lg-3", "col-md-6", "col-12", "border-right-blue-grey", "border-right-lighten-5"], [1, "float-left", "pl-2"], [1, "font-large-3", "text-bold-300"], [1, "float-left", "mt-2", "ml-1"], [1, "blue-grey", "darken-1", "block"], [1, "col-lg-3", "col-md-6", "col-12"], [1, "font-large-3", "text-bold-300", "info"], [1, "font-large-3", "text-bold-300", "danger"], [1, "font-large-3", "text-bold-300", "success"], [1, "font-large-3", "text-bold-300", "warning"], [1, "card", "bg-gradient-x-info"], [1, "col-lg-3", "col-md-6", "col-sm-12", "border-right-info", "border-right-lighten-3"], [1, "display-4", "text-white"], [1, "icon-camera", "font-large-2"], [1, "icon-user", "font-large-2"], [1, "icon-bulb", "font-large-2"], [1, "icon-wallet", "font-large-2"], [1, "card", "bg-gradient-x-danger"], [1, "col-lg-3", "col-md-6", "col-sm-12", "border-right-danger", "border-right-lighten-3"], [1, "card", "bg-gradient-x-success"], [1, "col-lg-3", "col-md-6", "col-sm-12", "border-right-success", "border-right-lighten-3"], ["id", "sparkline-stats"], [1, "col-lg-4", "col-12"], [1, "card", "border-0"], [1, "display-4"], [1, "text-muted"], [1, "icon-bulb", "font-large-2", "blue-grey", "lighten-3"], ["id", "sp-line-total-cost"], ["class", "sp-line-total-cost", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "icon-graph", "font-large-2", "blue-grey", "lighten-3"], ["id", "sp-line-total-sales"], ["class", "sp-line-total-sales", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "icon-wallet", "font-large-2", "blue-grey", "lighten-3"], ["id", "sp-line-total-revenue"], ["class", "sp-line-total-revenue", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "col-xl-4", "col-md-6", "col-12"], ["id", "sp-bar-total-cost"], ["class", "sp-bar-total-cost", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], ["id", "sp-bar-total-sales"], ["class", "sp-bar-total-sales", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], ["id", "sp-bar-total-revenue"], ["class", "sp-bar-total-revenue", 3, "data", "type", "options", "responsiveOptions", "events", 4, "ngIf"], [1, "feedbacks", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "Subscribers", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "Users", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "Likes", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "Comments", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "Views", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "sp-line-total-cost", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "sp-line-total-sales", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "sp-line-total-revenue", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "sp-bar-total-cost", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "sp-bar-total-sales", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "sp-bar-total-revenue", 3, "data", "type", "options", "responsiveOptions", "events"]],
  template: function StatisticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6)(7, "div", 7)(8, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Minimal Statistics Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Statistics on minimal cards.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16)(21, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "278");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "New Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 9)(26, "div", 10)(27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16)(33, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "156");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "New Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "div", 12)(41, "div", 13)(42, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 16)(45, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "64.89 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Bounce Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 9)(50, "div", 10)(51, "div", 11)(52, "div", 12)(53, "div", 13)(54, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 16)(57, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Total Visits");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 6)(62, "div", 9)(63, "div", 10)(64, "div", 11)(65, "div", 12)(66, "div", 13)(67, "div", 20)(68, "h3", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "278");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "New Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 9)(75, "div", 10)(76, "div", 11)(77, "div", 12)(78, "div", 13)(79, "div", 20)(80, "h3", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "156");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "New Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 9)(87, "div", 10)(88, "div", 11)(89, "div", 12)(90, "div", 13)(91, "div", 20)(92, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "64.89 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Conversion Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 9)(99, "div", 10)(100, "div", 11)(101, "div", 12)(102, "div", 13)(103, "div", 20)(104, "h3", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "Support Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 6)(111, "div", 9)(112, "div", 10)(113, "div", 11)(114, "div", 12)(115, "div", 13)(116, "div", 20)(117, "h3", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "278");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "New Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 9)(126, "div", 10)(127, "div", 11)(128, "div", 12)(129, "div", 13)(130, "div", 20)(131, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "156");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "New Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 9)(140, "div", 10)(141, "div", 11)(142, "div", 12)(143, "div", 13)(144, "div", 20)(145, "h3", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "64.89 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Bounce Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 9)(154, "div", 10)(155, "div", 11)(156, "div", 12)(157, "div", 13)(158, "div", 20)(159, "h3", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Total Visits");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](164, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](166, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "section", 38)(168, "div", 6)(169, "div", 7)(170, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "Minimal Statistics With Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](173, "Statistics on minimal cards with background color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 6)(175, "div", 9)(176, "div", 39)(177, "div", 11)(178, "div", 12)(179, "div", 13)(180, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 41)(183, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "278");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "New Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 9)(188, "div", 43)(189, "div", 11)(190, "div", 12)(191, "div", 13)(192, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 41)(195, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "156");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "New Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 9)(200, "div", 45)(201, "div", 11)(202, "div", 12)(203, "div", 13)(204, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 41)(207, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "64.89 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](210, "Bounce Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 9)(212, "div", 47)(213, "div", 11)(214, "div", 12)(215, "div", 13)(216, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](217, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "div", 41)(219, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "Total Visits");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "div", 6)(224, "div", 9)(225, "div", 47)(226, "div", 11)(227, "div", 12)(228, "div", 13)(229, "div", 49)(230, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "278");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "New Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](235, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "div", 9)(237, "div", 45)(238, "div", 11)(239, "div", 12)(240, "div", 13)(241, "div", 49)(242, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, "156");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "New Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](247, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "div", 9)(249, "div", 43)(250, "div", 11)(251, "div", 12)(252, "div", 13)(253, "div", 49)(254, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "64.89 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "Conversion Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](259, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "div", 9)(261, "div", 39)(262, "div", 11)(263, "div", 12)(264, "div", 13)(265, "div", 49)(266, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](267, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "Support Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](271, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](272, "section", 38)(273, "div", 6)(274, "div", 7)(275, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](276, "Crypto Wallet Statistics With Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "Statistics on minimal cards with background color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "div", 54)(280, "div", 9)(281, "div", 39)(282, "div", 11)(283, "div", 55)(284, "div", 6)(285, "div", 56)(286, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](287, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](288, " Ripple");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](289, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](290, "200 XRP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "div", 59)(292, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](293, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](294, " $150");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](295, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "$1.50");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "div", 9)(298, "div", 47)(299, "div", 11)(300, "div", 55)(301, "div", 6)(302, "div", 56)(303, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](304, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, " Bitcoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, "3.5 BTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "div", 59)(309, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](310, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](311, " $950");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](313, "$9980");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](314, "div", 9)(315, "div", 43)(316, "div", 11)(317, "div", 55)(318, "div", 6)(319, "div", 56)(320, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](321, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, " Ethereum");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, "10 ETH");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "div", 59)(326, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](327, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, " $90");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, "$944");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "div", 9)(332, "div", 45)(333, "div", 11)(334, "div", 55)(335, "div", 6)(336, "div", 56)(337, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](338, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](339, " Litecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](340, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](341, "24 LTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](342, "div", 59)(343, "h4", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](344, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](345, " $90");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](346, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](347, "$180");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "div", 64)(349, "div", 9)(350, "div", 39)(351, "div", 11)(352, "div", 55)(353, "div", 65)(354, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](355, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, "200 XRP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "div", 69)(359, "h2", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](360, "$1.50");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](361, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](362, "Ripple");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](363, "div", 9)(364, "div", 47)(365, "div", 11)(366, "div", 55)(367, "div", 65)(368, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](369, "i", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "3.5 BTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "div", 69)(373, "h3", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](374, "$9,980");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, "Bitcoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "div", 9)(378, "div", 43)(379, "div", 11)(380, "div", 55)(381, "div", 65)(382, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](383, "i", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](384, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](385, "10 ETH");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 69)(387, "h3", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388, "$944");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, "Ethereum");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "div", 9)(392, "div", 45)(393, "div", 11)(394, "div", 55)(395, "div", 65)(396, "div", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](397, "i", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399, "24 LTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "div", 69)(401, "h3", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](402, "$180");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](404, "Litecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "div", 74)(406, "div", 9)(407, "div", 75)(408, "div", 11)(409, "div", 76)(410, "h4", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](411, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, " Ripple");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "h6", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](414, "Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](415, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, "200 XRP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "div", 9)(418, "div", 78)(419, "div", 11)(420, "div", 79)(421, "h4", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](422, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](423, " Bitcoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "h6", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, "Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](427, "3.5 BTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](428, "div", 9)(429, "div", 80)(430, "div", 11)(431, "div", 81)(432, "h4", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](433, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](434, " Ethereum");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](435, "h6", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](436, "Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, "10 ETH");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "div", 9)(440, "div", 82)(441, "div", 11)(442, "div", 83)(443, "h4", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](444, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](445, " Litecoin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "h6", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447, "Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](448, "h6", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](449, "24 LTC");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](450, "section", 38)(451, "div", 6)(452, "div", 7)(453, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](454, "Compny Sales Statistics With Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](456, "Statistics on minimal cards with background color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "div", 6)(458, "div", 9)(459, "div", 45)(460, "div", 11)(461, "div", 55)(462, "div", 65)(463, "div", 66)(464, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](465, "i", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](467, "45% ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](468, "i", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](469, "div", 86)(470, "h3", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](471, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](472, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](473, "90%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](474, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](475, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](476, "Grate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "div", 9)(478, "div", 43)(479, "div", 11)(480, "div", 55)(481, "div", 65)(482, "div", 66)(483, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](484, "i", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](485, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](486, "10% ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](487, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](488, "div", 86)(489, "h3", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](490, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](491, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](492, "39%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](493, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](494, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](495, "Average");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](496, "div", 9)(497, "div", 39)(498, "div", 11)(499, "div", 55)(500, "div", 65)(501, "div", 66)(502, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](503, "i", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](504, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](505, "20% ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](506, "i", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](507, "div", 86)(508, "h3", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](509, "Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](510, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511, "60%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](512, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](513, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](514, "Good");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](515, "div", 9)(516, "div", 47)(517, "div", 11)(518, "div", 55)(519, "div", 65)(520, "div", 66)(521, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](522, "i", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](523, "h4", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](524, "82% ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](525, "i", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](526, "div", 86)(527, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](528, "Referral");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](529, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](530, "980");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](531, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](532, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](533, "Grate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](534, "section", 92)(535, "div", 6)(536, "div", 7)(537, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](538, "Minimal Statistics With Gradient Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](539, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](540, "Statistics on minimal cards with gradient background color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](541, "div", 6)(542, "div", 9)(543, "div", 93)(544, "div", 11)(545, "div", 12)(546, "div", 13)(547, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](548, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "div", 41)(550, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](551, "278");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](552, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](553, "New Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](554, "div", 9)(555, "div", 94)(556, "div", 11)(557, "div", 12)(558, "div", 13)(559, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](560, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "div", 41)(562, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](563, "156");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](564, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](565, "New Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](566, "div", 9)(567, "div", 95)(568, "div", 11)(569, "div", 12)(570, "div", 13)(571, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](572, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](573, "div", 41)(574, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](575, "64.89 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](576, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](577, "Bounce Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](578, "div", 9)(579, "div", 96)(580, "div", 11)(581, "div", 12)(582, "div", 13)(583, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](584, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](585, "div", 41)(586, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](587, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](588, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](589, "Total Visits");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](590, "div", 6)(591, "div", 9)(592, "div", 96)(593, "div", 11)(594, "div", 12)(595, "div", 13)(596, "div", 49)(597, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](598, "278");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](599, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](600, "New Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](601, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](602, "i", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](603, "div", 9)(604, "div", 95)(605, "div", 11)(606, "div", 12)(607, "div", 13)(608, "div", 49)(609, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](610, "156");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](611, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](612, "New Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](613, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](614, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](615, "div", 9)(616, "div", 94)(617, "div", 11)(618, "div", 12)(619, "div", 13)(620, "div", 49)(621, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](622, "64.89 %");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](623, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](624, "Conversion Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](625, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](626, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](627, "div", 9)(628, "div", 93)(629, "div", 11)(630, "div", 12)(631, "div", 13)(632, "div", 49)(633, "h3", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](634, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](635, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](636, "Support Tickets");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](637, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](638, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](639, "section", 97)(640, "div", 6)(641, "div", 7)(642, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](643, "Icon Section");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](644, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](645, "Statistics on minimal cards with attractive icon section.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](646, "div", 6)(647, "div", 9)(648, "div", 10)(649, "div", 11)(650, "div", 98)(651, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](652, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](653, "div", 101)(654, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](655, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](656, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](657, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](658, "div", 9)(659, "div", 10)(660, "div", 11)(661, "div", 98)(662, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](663, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](664, "div", 101)(665, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](666, "New Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](667, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](668, "1,22,356");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](669, "div", 9)(670, "div", 10)(671, "div", 11)(672, "div", 98)(673, "div", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](674, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](675, "div", 101)(676, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](677, "New Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](678, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](679, "4,65,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](680, "div", 9)(681, "div", 10)(682, "div", 11)(683, "div", 98)(684, "div", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](685, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](686, "div", 101)(687, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](688, "Total Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](689, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](690, "5.6 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](691, "div", 6)(692, "div", 9)(693, "div", 10)(694, "div", 11)(695, "div", 98)(696, "div", 109)(697, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](698, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](699, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](700, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](701, "div", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](702, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](703, "div", 9)(704, "div", 10)(705, "div", 11)(706, "div", 98)(707, "div", 109)(708, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](709, "New Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](710, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](711, "1,22,356");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](712, "div", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](713, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](714, "div", 9)(715, "div", 10)(716, "div", 11)(717, "div", 98)(718, "div", 109)(719, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](720, "New Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](721, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](722, "4,65,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](723, "div", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](724, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](725, "div", 9)(726, "div", 10)(727, "div", 11)(728, "div", 98)(729, "div", 109)(730, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](731, "Total Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](732, "h5", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](733, "5.6 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](734, "div", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](735, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](736, "div", 6)(737, "div", 9)(738, "div", 10)(739, "div", 11)(740, "div", 98)(741, "div", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](742, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](743, "div", 114)(744, "h5", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](745, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](746, "h5", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](747, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](748, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](749, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](750, "div", 9)(751, "div", 10)(752, "div", 11)(753, "div", 98)(754, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](755, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](756, "div", 114)(757, "h5", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](758, "New Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](759, "h5", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](760, "1,22,356");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](761, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](762, "div", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](763, "div", 9)(764, "div", 10)(765, "div", 11)(766, "div", 98)(767, "div", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](768, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](769, "div", 114)(770, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](771, "New Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](772, "h5", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](773, "4,65,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](774, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](775, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](776, "div", 9)(777, "div", 10)(778, "div", 11)(779, "div", 98)(780, "div", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](781, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](782, "div", 114)(783, "h5", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](784, "Total Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](785, "h5", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](786, "5.6 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](787, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](788, "div", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](789, "section", 119)(790, "div", 6)(791, "div", 7)(792, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](793, "Icon Section With Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](794, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](795, "Statistics on minimal cards with attractive icon section and background color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](796, "div", 6)(797, "div", 9)(798, "div", 10)(799, "div", 11)(800, "div", 98)(801, "div", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](802, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](803, "div", 121)(804, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](805, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](806, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](807, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](808, "div", 9)(809, "div", 10)(810, "div", 11)(811, "div", 98)(812, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](813, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](814, "div", 124)(815, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](816, "New Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](817, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](818, "1,22,356");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](819, "div", 9)(820, "div", 10)(821, "div", 11)(822, "div", 98)(823, "div", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](824, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](825, "div", 126)(826, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](827, "New Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](828, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](829, "4,65,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](830, "div", 9)(831, "div", 10)(832, "div", 11)(833, "div", 98)(834, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](835, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](836, "div", 128)(837, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](838, "Total Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](839, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](840, "5.6 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](841, "div", 6)(842, "div", 9)(843, "div", 10)(844, "div", 11)(845, "div", 98)(846, "div", 129)(847, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](848, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](849, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](850, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](851, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](852, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](853, "div", 9)(854, "div", 10)(855, "div", 11)(856, "div", 98)(857, "div", 131)(858, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](859, "New Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](860, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](861, "1,22,356");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](862, "div", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](863, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](864, "div", 9)(865, "div", 10)(866, "div", 11)(867, "div", 98)(868, "div", 133)(869, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](870, "New Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](871, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](872, "4,65,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](873, "div", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](874, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](875, "div", 9)(876, "div", 10)(877, "div", 11)(878, "div", 98)(879, "div", 135)(880, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](881, "Total Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](882, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](883, "5.6 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](884, "div", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](885, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](886, "section", 137)(887, "div", 6)(888, "div", 7)(889, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](890, "Icon Section With Gradient Background Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](891, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](892, "Statistics on minimal cards with attractive icon section and gradient background color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](893, "div", 6)(894, "div", 9)(895, "div", 10)(896, "div", 11)(897, "div", 98)(898, "div", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](899, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](900, "div", 138)(901, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](902, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](903, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](904, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](905, "div", 9)(906, "div", 10)(907, "div", 11)(908, "div", 98)(909, "div", 123);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](910, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](911, "div", 139)(912, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](913, "New Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](914, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](915, "1,22,356");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](916, "div", 9)(917, "div", 10)(918, "div", 11)(919, "div", 98)(920, "div", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](921, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](922, "div", 140)(923, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](924, "New Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](925, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](926, "4,65,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](927, "div", 9)(928, "div", 10)(929, "div", 11)(930, "div", 98)(931, "div", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](932, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](933, "div", 141)(934, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](935, "Total Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](936, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](937, "5.6 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](938, "div", 6)(939, "div", 9)(940, "div", 10)(941, "div", 11)(942, "div", 98)(943, "div", 142)(944, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](945, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](946, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](947, "28");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](948, "div", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](949, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](950, "div", 9)(951, "div", 10)(952, "div", 11)(953, "div", 98)(954, "div", 143)(955, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](956, "New Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](957, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](958, "1,22,356");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](959, "div", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](960, "i", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](961, "div", 9)(962, "div", 10)(963, "div", 11)(964, "div", 98)(965, "div", 144)(966, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](967, "New Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](968, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](969, "4,65,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](970, "div", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](971, "i", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](972, "div", 9)(973, "div", 10)(974, "div", 11)(975, "div", 98)(976, "div", 145)(977, "h5", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](978, "Total Profit");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](979, "h5", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](980, "5.6 M");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](981, "div", 136);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](982, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](983, "section", 146)(984, "div", 6)(985, "div", 7)(986, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](987, "Statistics With Subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](988, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](989, "Statistics on minimal cards with Title & Sub Title.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](990, "div", 6)(991, "div", 147)(992, "div", 148)(993, "div", 11)(994, "div", 149)(995, "div", 98)(996, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](997, "i", 150);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](998, "div", 151)(999, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1000, "Total Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1001, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1002, "Monthly blog posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1003, "div", 14)(1004, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1005, "18,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1006, "div", 147)(1007, "div", 10)(1008, "div", 11)(1009, "div", 149)(1010, "div", 98)(1011, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1012, "i", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1013, "div", 151)(1014, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1015, "Total Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1016, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1017, "Monthly blog comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1018, "div", 14)(1019, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1020, "84,695");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1021, "div", 6)(1022, "div", 147)(1023, "div", 10)(1024, "div", 11)(1025, "div", 149)(1026, "div", 98)(1027, "div", 14)(1028, "h1", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1029, "$76,456.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1030, "div", 151)(1031, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1032, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1033, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1034, "Monthly Sales Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1035, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1036, "i", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1037, "div", 147)(1038, "div", 10)(1039, "div", 11)(1040, "div", 149)(1041, "div", 98)(1042, "div", 14)(1043, "h1", 153);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1044, "$36,000.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1045, "div", 151)(1046, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1047, "Total Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1048, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1049, "Monthly Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1050, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1051, "i", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1052, "section", 156)(1053, "div", 6)(1054, "div", 7)(1055, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1056, "Statistics With Icon Section & Subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1057, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1058, "Statistics on minimal cards with icon section and Title, Sub Title.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1059, "div", 6)(1060, "div", 147)(1061, "div", 148)(1062, "div", 11)(1063, "div", 98)(1064, "div", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1065, "i", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1066, "div", 159)(1067, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1068, "Total Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1069, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1070, "Monthly blog posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1071, "div", 160)(1072, "h1", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1073, "18,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1074, "div", 147)(1075, "div", 10)(1076, "div", 11)(1077, "div", 98)(1078, "div", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1079, "i", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1080, "div", 159)(1081, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1082, "Total Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1083, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1084, "Monthly blog comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1085, "div", 160)(1086, "h1", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1087, "84,695");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1088, "div", 6)(1089, "div", 147)(1090, "div", 10)(1091, "div", 11)(1092, "div", 98)(1093, "div", 163)(1094, "h1", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1095, "$76,456.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1096, "div", 159)(1097, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1098, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1099, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1100, "Monthly sales amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1101, "div", 164);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1102, "i", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1103, "div", 147)(1104, "div", 10)(1105, "div", 11)(1106, "div", 98)(1107, "div", 163)(1108, "h1", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1109, "$76,456.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1110, "div", 159)(1111, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1112, "Total Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1113, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1114, "Monthly Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1115, "div", 166);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1116, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1117, "section", 167)(1118, "div", 6)(1119, "div", 7)(1120, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1121, "Statistics With Icon Section, Subtitle & Bg Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1122, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1123, "Statistics on minimal cards with icon section, title, sub title and background color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1124, "div", 6)(1125, "div", 147)(1126, "div", 148)(1127, "div", 11)(1128, "div", 168)(1129, "div", 169);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1130, "i", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1131, "div", 159)(1132, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1133, "Total Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1134, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1135, "Monthly blog posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1136, "div", 160)(1137, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1138, "18,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1139, "div", 147)(1140, "div", 10)(1141, "div", 11)(1142, "div", 170)(1143, "div", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1144, "i", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1145, "div", 159)(1146, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1147, "Total Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1148, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1149, "Monthly blog comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1150, "div", 160)(1151, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1152, "84,695");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1153, "div", 6)(1154, "div", 147)(1155, "div", 10)(1156, "div", 11)(1157, "div", 172)(1158, "div", 163)(1159, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1160, "$76,456.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1161, "div", 159)(1162, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1163, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1164, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1165, "Monthly sales amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1166, "div", 173);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1167, "i", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1168, "div", 147)(1169, "div", 10)(1170, "div", 11)(1171, "div", 174)(1172, "div", 163)(1173, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1174, "$76,456.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1175, "div", 159)(1176, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1177, "Total Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1178, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1179, "Monthly Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1180, "div", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1181, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1182, "section", 167)(1183, "div", 6)(1184, "div", 7)(1185, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1186, "Statistics With Icon Section, Subtitle & Bg Gradient Color");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1187, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1188, "Statistics on minimal cards with icon section, title, sub title and background Gradient color.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1189, "div", 6)(1190, "div", 147)(1191, "div", 148)(1192, "div", 11)(1193, "div", 176)(1194, "div", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1195, "i", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1196, "div", 159)(1197, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1198, "Total Posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1199, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1200, "Monthly blog posts");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1201, "div", 160)(1202, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1203, "18,000");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1204, "div", 147)(1205, "div", 10)(1206, "div", 11)(1207, "div", 177)(1208, "div", 163);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1209, "i", 162);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1210, "div", 159)(1211, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1212, "Total Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1213, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1214, "Monthly blog comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1215, "div", 160)(1216, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1217, "84,695");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1218, "div", 6)(1219, "div", 147)(1220, "div", 10)(1221, "div", 11)(1222, "div", 178)(1223, "div", 163)(1224, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1225, "$76,456.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1226, "div", 159)(1227, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1228, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1229, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1230, "Monthly sales amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1231, "div", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1232, "i", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1233, "div", 147)(1234, "div", 10)(1235, "div", 11)(1236, "div", 179)(1237, "div", 163)(1238, "h1", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1239, "$76,456.00");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1240, "div", 159)(1241, "h4", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1242, "Total Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1243, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1244, "Monthly Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1245, "div", 160);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1246, "i", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1247, "section", 180)(1248, "div", 6)(1249, "div", 7)(1250, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1251, "Grouped Card Statistics");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1252, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1253, "Statistics with grouped cards, knobs and icons.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1254, "div", 6)(1255, "div", 181)(1256, "div", 10)(1257, "div", 11)(1258, "div", 6)(1259, "div", 182)(1260, "div", 183)(1261, "div", 184)(1262, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1263, "New Feedbacks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1264, "h3", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1265, "2,487");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1266, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1267, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1268, StatisticsComponent_x_chartist_1268_Template, 1, 5, "x-chartist", 187);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1269, "ul", 188)(1270, "li", 189)(1271, "h1", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1272, "95%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1273, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1274, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1275, " Positive");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1276, "li")(1277, "h1", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1278, "5%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1279, "span", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1280, "i", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1281, " Negative");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1282, "div", 182)(1283, "div", 183)(1284, "div", 184)(1285, "span", 193);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1286, "New Subscribers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1287, "h3", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1288, "1,496");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1289, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1290, "i", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1291, StatisticsComponent_x_chartist_1291_Template, 1, 5, "x-chartist", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1292, "ul", 188)(1293, "li")(1294, "h1", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1295, "1465");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1296, "span", 193);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1297, "i", 196);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1298, " Average Monthly Subscribers");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1299, "div", 182)(1300, "div", 183)(1301, "div", 184)(1302, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1303, "Total Users");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1304, "h3", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1305, "7,684");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1306, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1307, "i", 197);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1308, StatisticsComponent_x_chartist_1308_Template, 1, 5, "x-chartist", 198);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1309, "ul", 188)(1310, "li", 189)(1311, "h1", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1312, "24%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1313, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1314, "i", 199);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1315, " Male");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1316, "li", 200)(1317, "h1", 190);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1318, "76%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1319, "span", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1320, "i", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1321, " Female");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1322, "div", 6)(1323, "div", 181)(1324, "div", 10)(1325, "div", 11)(1326, "div", 6)(1327, "div", 182)(1328, "div", 202)(1329, "div")(1330, "h3", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1331, "34,879");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1332, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1333, "Total Likes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1334, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1335, StatisticsComponent_x_chartist_1335_Template, 1, 5, "x-chartist", 204);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1336, "ul", 205)(1337, "li", 189)(1338, "h1", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1339, "4789");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1340, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1341, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1342, " Per Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1343, "li", 200)(1344, "h1", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1345, "389");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1346, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1347, "i", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1348, " Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1349, "div", 182)(1350, "div", 202)(1351, "div")(1352, "h3", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1353, "14,962");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1354, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1355, "Total Comments");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1356, "div", 11)(1357, "div", 207);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1358, StatisticsComponent_x_chartist_1358_Template, 1, 5, "x-chartist", 208);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1359, "ul", 205)(1360, "li", 189)(1361, "h1", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1362, "147");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1363, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1364, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1365, " Per Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1366, "li", 200)(1367, "h1", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1368, "54");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1369, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1370, "i", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1371, " Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1372, "div", 182)(1373, "div", 202)(1374, "div")(1375, "h3", 185);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1376, "76,894");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1377, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1378, "Total Views");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1379, "div", 11)(1380, "div", 210);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1381, StatisticsComponent_x_chartist_1381_Template, 1, 5, "x-chartist", 211);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1382, "ul", 205)(1383, "li", 189)(1384, "h1", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1385, "6897");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1386, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1387, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1388, " Per Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1389, "li", 200)(1390, "h1", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1391, "498");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1392, "span", 203);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1393, "i", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1394, " Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1395, "div", 213)(1396, "div", 181)(1397, "div", 10)(1398, "div", 11)(1399, "div", 12)(1400, "div", 6)(1401, "div", 214)(1402, "div", 215)(1403, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1404, "i", 216);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1405, "span", 217);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1406, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1407, "div", 16)(1408, "span", 218);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1409, "579");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1410, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1411, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1412, "div", 214)(1413, "div", 215)(1414, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1415, "i", 219);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1416, "span", 217);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1417, "New Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1418, "div", 16)(1419, "span", 220);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1420, "423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1421, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1422, "div", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1423, "div", 214)(1424, "div", 215)(1425, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1426, "i", 221);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1427, "span", 217);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1428, "Conversion Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1429, "div", 16)(1430, "span", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1431, "61%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1432, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1433, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1434, "div", 223)(1435, "div", 215)(1436, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1437, "i", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1438, "span", 217);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1439, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1440, "div", 16)(1441, "span", 225);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1442, "$687");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1443, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1444, "div", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1445, "div", 6)(1446, "div", 181)(1447, "div", 10)(1448, "div", 11)(1449, "div", 12)(1450, "div", 6)(1451, "div", 226)(1452, "div", 227)(1453, "span", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1454, "589");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1455, "div", 229)(1456, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1457, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1458, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1459, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1460, "div", 226)(1461, "div", 227)(1462, "span", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1463, "765");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1464, "div", 229)(1465, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1466, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1467, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1468, "Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1469, "div", 226)(1470, "div", 227)(1471, "span", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1472, "693");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1473, "div", 229)(1474, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1475, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1476, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1477, "Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1478, "div", 231)(1479, "div", 227)(1480, "span", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1481, "946");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1482, "div", 229)(1483, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1484, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1485, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1486, "Visitors");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1487, "div", 6)(1488, "div", 181)(1489, "div", 10)(1490, "div", 11)(1491, "div", 12)(1492, "div", 6)(1493, "div", 226)(1494, "div", 227)(1495, "span", 232);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1496, "589");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1497, "div", 229)(1498, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1499, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1500, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1501, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1502, "div", 226)(1503, "div", 227)(1504, "span", 233);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1505, "765");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1506, "div", 229)(1507, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1508, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1509, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1510, "Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1511, "div", 226)(1512, "div", 227)(1513, "span", 234);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1514, "693");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1515, "div", 229)(1516, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1517, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1518, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1519, "Orders");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1520, "div", 231)(1521, "div", 227)(1522, "span", 235);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1523, "946");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1524, "div", 229)(1525, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1526, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1527, "span", 230);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1528, "Visitors");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1529, "div", 6)(1530, "div", 181)(1531, "div", 236)(1532, "div", 11)(1533, "div", 6)(1534, "div", 237)(1535, "div", 183)(1536, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1537, "i", 239);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1538, " 1579");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1539, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1540, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1541, "div", 237)(1542, "div", 183)(1543, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1544, "i", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1545, " 1423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1546, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1547, "New Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1548, "div", 237)(1549, "div", 183)(1550, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1551, "i", 241);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1552, " 61%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1553, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1554, "Conversion Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1555, "div", 223)(1556, "div", 183)(1557, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1558, "i", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1559, " $687");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1560, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1561, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1562, "div", 6)(1563, "div", 181)(1564, "div", 243)(1565, "div", 11)(1566, "div", 6)(1567, "div", 244)(1568, "div", 183)(1569, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1570, "i", 239);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1571, " 1579");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1572, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1573, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1574, "div", 244)(1575, "div", 183)(1576, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1577, "i", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1578, " 1423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1579, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1580, "New Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1581, "div", 244)(1582, "div", 183)(1583, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1584, "i", 241);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1585, " 61%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1586, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1587, "Conversion Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1588, "div", 223)(1589, "div", 183)(1590, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1591, "i", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1592, " $687");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1593, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1594, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1595, "div", 6)(1596, "div", 181)(1597, "div", 245)(1598, "div", 11)(1599, "div", 6)(1600, "div", 246)(1601, "div", 183)(1602, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1603, "i", 239);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1604, " 1579");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1605, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1606, "Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1607, "div", 246)(1608, "div", 183)(1609, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1610, "i", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1611, " 1423");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1612, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1613, "New Clients");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1614, "div", 246)(1615, "div", 183)(1616, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1617, "i", 241);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1618, " 61%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1619, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1620, "Conversion Rate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1621, "div", 223)(1622, "div", 183)(1623, "h1", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1624, "i", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1625, " $687");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1626, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1627, "Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1628, "section", 247)(1629, "div", 6)(1630, "div", 7)(1631, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1632, "Sparkline Statisctics");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1633, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1634, "Statistics with sparkline charts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1635, "div", 6)(1636, "div", 248)(1637, "div", 249)(1638, "div", 11)(1639, "div", 12)(1640, "div", 13)(1641, "div", 151)(1642, "h1", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1643, "$15,678");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1644, "span", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1645, "Total Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1646, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1647, "i", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1648, "div", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1649, StatisticsComponent_x_chartist_1649_Template, 1, 5, "x-chartist", 254);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1650, "div", 248)(1651, "div", 249)(1652, "div", 11)(1653, "div", 12)(1654, "div", 13)(1655, "div", 151)(1656, "h1", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1657, "$45,668");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1658, "span", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1659, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1660, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1661, "i", 255);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1662, "div", 256);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1663, StatisticsComponent_x_chartist_1663_Template, 1, 5, "x-chartist", 257);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1664, "div", 248)(1665, "div", 249)(1666, "div", 11)(1667, "div", 12)(1668, "div", 13)(1669, "div", 151)(1670, "h1", 250);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1671, "$32,454");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1672, "span", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1673, "Total Revenue");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1674, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1675, "i", 258);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1676, "div", 259);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1677, StatisticsComponent_x_chartist_1677_Template, 1, 5, "x-chartist", 260);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1678, "div", 6)(1679, "div", 261)(1680, "div", 10)(1681, "div", 11)(1682, "div", 12)(1683, "div", 13)(1684, "div", 151)(1685, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1686, "$15,678");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1687, "span", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1688, "Total Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1689, "div", 14)(1690, "div", 262);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1691, StatisticsComponent_x_chartist_1691_Template, 1, 5, "x-chartist", 263);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1692, "div", 261)(1693, "div", 10)(1694, "div", 11)(1695, "div", 12)(1696, "div", 13)(1697, "div", 151)(1698, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1699, "$45,668");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1700, "span", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1701, "Total Sales");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1702, "div", 14)(1703, "div", 264);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1704, StatisticsComponent_x_chartist_1704_Template, 1, 5, "x-chartist", 265);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1705, "div", 261)(1706, "div", 10)(1707, "div", 11)(1708, "div", 12)(1709, "div", 13)(1710, "div", 151)(1711, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1712, "$32,454");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1713, "span", 251);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1714, "Total Revenue");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1715, "div", 14)(1716, "div", 266);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1717, StatisticsComponent_x_chartist_1717_Template, 1, 5, "x-chartist", 267);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1265);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.feedbacksdonutChart);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.subscribersdonutChart);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.usersdonutChart);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.lineArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.commentslineArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.viewslineArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](268);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sparklineArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sparklineArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sparklineArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.barChart);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.barChart);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.barChart);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistComponent, _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent],
  styles: ["[_nghost-%COMP%]     .Likes .ct-series-a .ct-point {\n    stroke: #28d094;\n}\n[_nghost-%COMP%]     .Likes .ct-line {\n    fill: none;\n    stroke-width: 2px;\n}\n[_nghost-%COMP%]     .Likes .ct-point{\n    stroke-width: 0px;\n}\n[_nghost-%COMP%]     .Likes .ct-series-a .ct-line {\n    stroke: #28d094;\n}\n[_nghost-%COMP%]     .Likes .ct-series-a .ct-area {\n    fill: #28d094;\n}\n[_nghost-%COMP%]     .Comments .ct-series-a .ct-point {\n    stroke: #FF9149;\n}\n[_nghost-%COMP%]     .Comments .ct-line {\n    fill: none;\n    stroke-width: 2px;\n}\n[_nghost-%COMP%]     .Comments .ct-point{\n    stroke-width: 0px;\n}\n[_nghost-%COMP%]     .Comments .ct-series-a .ct-line {\n    stroke: #FF9149;\n}\n[_nghost-%COMP%]     .Comments .ct-series-a .ct-area {\n    fill: #FF9149;\n}\n[_nghost-%COMP%]     .Views .ct-series-a .ct-point {\n    stroke: #FF4961;\n}\n[_nghost-%COMP%]     .Views .ct-line {\n    fill: none;\n    stroke-width: 2px;\n}\n[_nghost-%COMP%]     .Views .ct-point{\n    stroke-width: 0px;\n}\n[_nghost-%COMP%]     .Views .ct-series-a .ct-line {\n    stroke: #FF4961;\n}\n[_nghost-%COMP%]     .Views .ct-series-a .ct-area {\n    fill: #FF4961;\n}\n[_nghost-%COMP%]     .sp-line-total-cost .ct-series-a .ct-point{\n    stroke: #ff9149;\n}\n[_nghost-%COMP%]     .sp-line-total-cost .ct-series-a .ct-line{\n    stroke: #ff9149;\n\n}\n[_nghost-%COMP%]     .sp-line-total-cost .ct-series-a .ct-area{\n    fill: #ff9149;\n    fill-opacity: 1;\n}\n[_nghost-%COMP%]     .sp-line-total-cost .ct-point{\n    stroke-width: 0px;\n}\n[_nghost-%COMP%]     .sp-line-total-cost svg {\n    margin-left: 13px;\n}\n[_nghost-%COMP%]     .sp-line-total-sales .ct-series-a .ct-point{\n    stroke: #28d094;\n}\n[_nghost-%COMP%]     .sp-line-total-sales .ct-series-a .ct-line{\n    stroke: #28d094;\n\n}\n[_nghost-%COMP%]     .sp-line-total-sales .ct-series-a .ct-area{\n    fill: #28d094;\n    fill-opacity: 1;\n}\n[_nghost-%COMP%]     .sp-line-total-sales .ct-point{\n    stroke-width: 0px;\n}\n[_nghost-%COMP%]     .sp-line-total-sales svg {\n    margin-left: 13px;\n}\n[_nghost-%COMP%]     .sp-line-total-revenue .ct-series-a .ct-point{\n    stroke: #ff4961;\n}\n[_nghost-%COMP%]     .sp-line-total-revenue .ct-series-a .ct-line{\n    stroke: #ff4961;\n\n}\n[_nghost-%COMP%]     .sp-line-total-revenue .ct-series-a .ct-area{\n    fill: #ff4961;\n    fill-opacity: 1;\n}\n[_nghost-%COMP%]     .sp-line-total-revenue .ct-point{\n    stroke-width: 0px;\n}\n[_nghost-%COMP%]     .sp-line-total-revenue svg {\n    margin-left: 13px;\n}\n[_nghost-%COMP%]     .ct-bar {\n    fill: none;\n    stroke-width: 2px;\n}\n[_nghost-%COMP%]      .sp-bar-total-cost .ct-series-a .ct-bar{\n    stroke: #ff9148;\n}\n[_nghost-%COMP%]      .sp-bar-total-sales .ct-series-a .ct-bar{\n    stroke: #28d094;\n}\n[_nghost-%COMP%]      .sp-bar-total-revenue .ct-series-a .ct-bar{\n    stroke: #ff4961;\n}\n[_nghost-%COMP%]      .sp-bar-total-cost {\n    margin-bottom: -90px;\n}\n[_nghost-%COMP%]      .sp-bar-total-sales{\n    margin-bottom: -90px;\n}\n[_nghost-%COMP%]      .sp-bar-total-revenue{\n    margin-bottom: -90px;\n}\n[_nghost-%COMP%]     .feedbacks .ct-series-a .ct-slice-donut {\n    stroke: #28d094;\n    stroke-width: 10px !important;\n}\n[_nghost-%COMP%]     .Subscribers .ct-series-a .ct-slice-donut {\n    stroke: #ff9149;\n    stroke-width: 10px !important;\n}\n[_nghost-%COMP%]     .Users .ct-series-a .ct-slice-donut {\n    stroke: #ff4961;\n    stroke-width: 10px !important;\n}\n[_nghost-%COMP%]      .ct-series-b .ct-slice-donut {\n    stroke: #eeeeee;\n    stroke-width: 12px !important;\n}\n[_nghost-%COMP%]      .text-muted {\n   position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtHQUNHLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJzdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLkxpa2VzIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQge1xuICAgIHN0cm9rZTogIzI4ZDA5NDtcbn1cbjpob3N0IDo6bmctZGVlcCAuTGlrZXMgLmN0LWxpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLkxpa2VzIC5jdC1wb2ludHtcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuTGlrZXMgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLkxpa2VzIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gICAgZmlsbDogIzI4ZDA5NDtcbn1cbjpob3N0IDo6bmctZGVlcCAuQ29tbWVudHMgLmN0LXNlcmllcy1hIC5jdC1wb2ludCB7XG4gICAgc3Ryb2tlOiAjRkY5MTQ5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Db21tZW50cyAuY3QtbGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuQ29tbWVudHMgLmN0LXBvaW50e1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Db21tZW50cyAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogI0ZGOTE0OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuQ29tbWVudHMgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcbiAgICBmaWxsOiAjRkY5MTQ5O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5WaWV3cyAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50IHtcbiAgICBzdHJva2U6ICNGRjQ5NjE7XG59XG46aG9zdCA6Om5nLWRlZXAgLlZpZXdzIC5jdC1saW5lIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5WaWV3cyAuY3QtcG9pbnR7XG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLlZpZXdzIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiAjRkY0OTYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5WaWV3cyAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICAgIGZpbGw6ICNGRjQ5NjE7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtY29zdCAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50e1xuICAgIHN0cm9rZTogI2ZmOTE0OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1jb3N0IC5jdC1zZXJpZXMtYSAuY3QtbGluZXtcbiAgICBzdHJva2U6ICNmZjkxNDk7XG5cbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1jb3N0IC5jdC1zZXJpZXMtYSAuY3QtYXJlYXtcbiAgICBmaWxsOiAjZmY5MTQ5O1xuICAgIGZpbGwtb3BhY2l0eTogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1jb3N0IC5jdC1wb2ludHtcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1jb3N0IHN2ZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtc2FsZXMgLmN0LXNlcmllcy1hIC5jdC1wb2ludHtcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtc2FsZXMgLmN0LXNlcmllcy1hIC5jdC1saW5le1xuICAgIHN0cm9rZTogIzI4ZDA5NDtcblxufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXNhbGVzIC5jdC1zZXJpZXMtYSAuY3QtYXJlYXtcbiAgICBmaWxsOiAjMjhkMDk0O1xuICAgIGZpbGwtb3BhY2l0eTogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1zYWxlcyAuY3QtcG9pbnR7XG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtc2FsZXMgc3ZnIHtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1yZXZlbnVlIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnR7XG4gICAgc3Ryb2tlOiAjZmY0OTYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXJldmVudWUgLmN0LXNlcmllcy1hIC5jdC1saW5le1xuICAgIHN0cm9rZTogI2ZmNDk2MTtcblxufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXJldmVudWUgLmN0LXNlcmllcy1hIC5jdC1hcmVhe1xuICAgIGZpbGw6ICNmZjQ5NjE7XG4gICAgZmlsbC1vcGFjaXR5OiAxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXJldmVudWUgLmN0LXBvaW50e1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXJldmVudWUgc3ZnIHtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuY3QtYmFyIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwICAuc3AtYmFyLXRvdGFsLWNvc3QgLmN0LXNlcmllcy1hIC5jdC1iYXJ7XG4gICAgc3Ryb2tlOiAjZmY5MTQ4O1xufVxuOmhvc3QgOjpuZy1kZWVwICAuc3AtYmFyLXRvdGFsLXNhbGVzIC5jdC1zZXJpZXMtYSAuY3QtYmFye1xuICAgIHN0cm9rZTogIzI4ZDA5NDtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnNwLWJhci10b3RhbC1yZXZlbnVlIC5jdC1zZXJpZXMtYSAuY3QtYmFye1xuICAgIHN0cm9rZTogI2ZmNDk2MTtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnNwLWJhci10b3RhbC1jb3N0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAtOTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnNwLWJhci10b3RhbC1zYWxlc3tcbiAgICBtYXJnaW4tYm90dG9tOiAtOTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnNwLWJhci10b3RhbC1yZXZlbnVle1xuICAgIG1hcmdpbi1ib3R0b206IC05MHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mZWVkYmFja3MgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjMjhkMDk0O1xuICAgIHN0cm9rZS13aWR0aDogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5TdWJzY3JpYmVycyAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNmZjkxNDk7XG4gICAgc3Ryb2tlLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLlVzZXJzIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2ZmNDk2MTtcbiAgICBzdHJva2Utd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjZWVlZWVlO1xuICAgIHN0cm9rZS13aWR0aDogMTJweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwICAudGV4dC1tdXRlZCB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hZHZhbmNlLWNhcmRzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0dBQ0csa0JBQWtCO0FBQ3JCOztBQUVBLDRqTUFBNGpNIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5MaWtlcyAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50IHtcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLkxpa2VzIC5jdC1saW5lIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5MaWtlcyAuY3QtcG9pbnR7XG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLkxpa2VzIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gICAgc3Ryb2tlOiAjMjhkMDk0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5MaWtlcyAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICAgIGZpbGw6ICMyOGQwOTQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLkNvbW1lbnRzIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQge1xuICAgIHN0cm9rZTogI0ZGOTE0OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuQ29tbWVudHMgLmN0LWxpbmUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLkNvbW1lbnRzIC5jdC1wb2ludHtcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuQ29tbWVudHMgLmN0LXNlcmllcy1hIC5jdC1saW5lIHtcbiAgICBzdHJva2U6ICNGRjkxNDk7XG59XG46aG9zdCA6Om5nLWRlZXAgLkNvbW1lbnRzIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gICAgZmlsbDogI0ZGOTE0OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuVmlld3MgLmN0LXNlcmllcy1hIC5jdC1wb2ludCB7XG4gICAgc3Ryb2tlOiAjRkY0OTYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5WaWV3cyAuY3QtbGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuVmlld3MgLmN0LXBvaW50e1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5WaWV3cyAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuICAgIHN0cm9rZTogI0ZGNDk2MTtcbn1cbjpob3N0IDo6bmctZGVlcCAuVmlld3MgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcbiAgICBmaWxsOiAjRkY0OTYxO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLWNvc3QgLmN0LXNlcmllcy1hIC5jdC1wb2ludHtcbiAgICBzdHJva2U6ICNmZjkxNDk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtY29zdCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmV7XG4gICAgc3Ryb2tlOiAjZmY5MTQ5O1xuXG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtY29zdCAuY3Qtc2VyaWVzLWEgLmN0LWFyZWF7XG4gICAgZmlsbDogI2ZmOTE0OTtcbiAgICBmaWxsLW9wYWNpdHk6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtY29zdCAuY3QtcG9pbnR7XG4gICAgc3Ryb2tlLXdpZHRoOiAwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtY29zdCBzdmcge1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXNhbGVzIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnR7XG4gICAgc3Ryb2tlOiAjMjhkMDk0O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXNhbGVzIC5jdC1zZXJpZXMtYSAuY3QtbGluZXtcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG5cbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1zYWxlcyAuY3Qtc2VyaWVzLWEgLmN0LWFyZWF7XG4gICAgZmlsbDogIzI4ZDA5NDtcbiAgICBmaWxsLW9wYWNpdHk6IDE7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtc2FsZXMgLmN0LXBvaW50e1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zcC1saW5lLXRvdGFsLXNhbGVzIHN2ZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNwLWxpbmUtdG90YWwtcmV2ZW51ZSAuY3Qtc2VyaWVzLWEgLmN0LXBvaW50e1xuICAgIHN0cm9rZTogI2ZmNDk2MTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1yZXZlbnVlIC5jdC1zZXJpZXMtYSAuY3QtbGluZXtcbiAgICBzdHJva2U6ICNmZjQ5NjE7XG5cbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1yZXZlbnVlIC5jdC1zZXJpZXMtYSAuY3QtYXJlYXtcbiAgICBmaWxsOiAjZmY0OTYxO1xuICAgIGZpbGwtb3BhY2l0eTogMTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1yZXZlbnVlIC5jdC1wb2ludHtcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3AtbGluZS10b3RhbC1yZXZlbnVlIHN2ZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmN0LWJhciB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnNwLWJhci10b3RhbC1jb3N0IC5jdC1zZXJpZXMtYSAuY3QtYmFye1xuICAgIHN0cm9rZTogI2ZmOTE0ODtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnNwLWJhci10b3RhbC1zYWxlcyAuY3Qtc2VyaWVzLWEgLmN0LWJhcntcbiAgICBzdHJva2U6ICMyOGQwOTQ7XG59XG46aG9zdCA6Om5nLWRlZXAgIC5zcC1iYXItdG90YWwtcmV2ZW51ZSAuY3Qtc2VyaWVzLWEgLmN0LWJhcntcbiAgICBzdHJva2U6ICNmZjQ5NjE7XG59XG46aG9zdCA6Om5nLWRlZXAgIC5zcC1iYXItdG90YWwtY29zdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTkwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgIC5zcC1iYXItdG90YWwtc2FsZXN7XG4gICAgbWFyZ2luLWJvdHRvbTogLTkwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgIC5zcC1iYXItdG90YWwtcmV2ZW51ZXtcbiAgICBtYXJnaW4tYm90dG9tOiAtOTBweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZmVlZGJhY2tzIC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogIzI4ZDA5NDtcbiAgICBzdHJva2Utd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuU3Vic2NyaWJlcnMgLmN0LXNlcmllcy1hIC5jdC1zbGljZS1kb251dCB7XG4gICAgc3Ryb2tlOiAjZmY5MTQ5O1xuICAgIHN0cm9rZS13aWR0aDogMTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5Vc2VycyAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcbiAgICBzdHJva2U6ICNmZjQ5NjE7XG4gICAgc3Ryb2tlLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgIC5jdC1zZXJpZXMtYiAuY3Qtc2xpY2UtZG9udXQge1xuICAgIHN0cm9rZTogI2VlZWVlZTtcbiAgICBzdHJva2Utd2lkdGg6IDEycHggIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAgLnRleHQtbXV0ZWQge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_content_advance-cards_advance-cards_module_ts.js.map