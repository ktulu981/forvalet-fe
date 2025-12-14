"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_charts-maps_chartjs_chartjs_module_ts"],{

/***/ 48347:
/*!***************************************************************!*\
  !*** ./src/app/content/charts-maps/chartjs/chartjs.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartjsModule": () => (/* binding */ ChartjsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _charts_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/charts.component */ 8214);
/* harmony import */ var _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/general/card/card.module */ 9651);
/* harmony import */ var src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_layout/breadcrumb/breadcrumb.module */ 61180);
/* harmony import */ var src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_layout/blockui/block-template.component */ 86196);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);











class ChartjsModule {}
ChartjsModule.ɵfac = function ChartjsModule_Factory(t) {
  return new (t || ChartjsModule)();
};
ChartjsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ChartjsModule
});
ChartjsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUIModule.forRoot({
    template: src_app_layout_blockui_block_template_component__WEBPACK_IMPORTED_MODULE_3__.BlockTemplateComponent
  }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
    path: 'charts',
    component: _charts_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChartjsModule, {
    declarations: [_charts_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_layout_breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule, _partials_general_card_card_module__WEBPACK_IMPORTED_MODULE_1__.CardModule, ng_block_ui__WEBPACK_IMPORTED_MODULE_7__.BlockUIModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 39916:
/*!***************************************************************!*\
  !*** ./src/app/content/charts-maps/chartjs/charts/chartjs.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areaChartColors": () => (/* binding */ areaChartColors),
/* harmony export */   "areaChartData": () => (/* binding */ areaChartData),
/* harmony export */   "areaChartLabels": () => (/* binding */ areaChartLabels),
/* harmony export */   "areaChartLegend": () => (/* binding */ areaChartLegend),
/* harmony export */   "areaChartOptions": () => (/* binding */ areaChartOptions),
/* harmony export */   "areaChartType": () => (/* binding */ areaChartType),
/* harmony export */   "barChartColors": () => (/* binding */ barChartColors),
/* harmony export */   "barChartData": () => (/* binding */ barChartData),
/* harmony export */   "barChartLabels": () => (/* binding */ barChartLabels),
/* harmony export */   "barChartLegend": () => (/* binding */ barChartLegend),
/* harmony export */   "barChartOptions": () => (/* binding */ barChartOptions),
/* harmony export */   "barChartType": () => (/* binding */ barChartType),
/* harmony export */   "doughnutChartColors": () => (/* binding */ doughnutChartColors),
/* harmony export */   "doughnutChartData": () => (/* binding */ doughnutChartData),
/* harmony export */   "doughnutChartLabels": () => (/* binding */ doughnutChartLabels),
/* harmony export */   "doughnutChartOptions": () => (/* binding */ doughnutChartOptions),
/* harmony export */   "doughnutChartType": () => (/* binding */ doughnutChartType),
/* harmony export */   "lineChartColors": () => (/* binding */ lineChartColors),
/* harmony export */   "lineChartData": () => (/* binding */ lineChartData),
/* harmony export */   "lineChartLabels": () => (/* binding */ lineChartLabels),
/* harmony export */   "lineChartLegend": () => (/* binding */ lineChartLegend),
/* harmony export */   "lineChartOptions": () => (/* binding */ lineChartOptions),
/* harmony export */   "lineChartType": () => (/* binding */ lineChartType),
/* harmony export */   "lineChartsColors": () => (/* binding */ lineChartsColors),
/* harmony export */   "lineChartsData": () => (/* binding */ lineChartsData),
/* harmony export */   "lineChartsLabels": () => (/* binding */ lineChartsLabels),
/* harmony export */   "lineChartsLegend": () => (/* binding */ lineChartsLegend),
/* harmony export */   "lineChartsOptions": () => (/* binding */ lineChartsOptions),
/* harmony export */   "lineChartsType": () => (/* binding */ lineChartsType),
/* harmony export */   "pieChartColors": () => (/* binding */ pieChartColors),
/* harmony export */   "pieChartData": () => (/* binding */ pieChartData),
/* harmony export */   "pieChartLabels": () => (/* binding */ pieChartLabels),
/* harmony export */   "pieChartOptions": () => (/* binding */ pieChartOptions),
/* harmony export */   "pieChartType": () => (/* binding */ pieChartType),
/* harmony export */   "ploarChartColors": () => (/* binding */ ploarChartColors),
/* harmony export */   "polarAreaChartData": () => (/* binding */ polarAreaChartData),
/* harmony export */   "polarAreaChartLabels": () => (/* binding */ polarAreaChartLabels),
/* harmony export */   "polarAreaChartType": () => (/* binding */ polarAreaChartType),
/* harmony export */   "polarAreaLegend": () => (/* binding */ polarAreaLegend),
/* harmony export */   "polarChartBorderColor": () => (/* binding */ polarChartBorderColor),
/* harmony export */   "polarChartOptions": () => (/* binding */ polarChartOptions),
/* harmony export */   "radarChartData": () => (/* binding */ radarChartData),
/* harmony export */   "radarChartLabels": () => (/* binding */ radarChartLabels),
/* harmony export */   "radarChartOptions": () => (/* binding */ radarChartOptions),
/* harmony export */   "radarChartType": () => (/* binding */ radarChartType),
/* harmony export */   "scatterChartData": () => (/* binding */ scatterChartData),
/* harmony export */   "scatterChartLabels": () => (/* binding */ scatterChartLabels),
/* harmony export */   "scatterChartLegend": () => (/* binding */ scatterChartLegend),
/* harmony export */   "scatterChartOptions": () => (/* binding */ scatterChartOptions),
/* harmony export */   "scatterChartType": () => (/* binding */ scatterChartType)
/* harmony export */ });
///////////////////// start linechart ///////////
const lineChartData = [{
  data: [56, 70, 55, 46, 67, 52, 70],
  label: 'Series C',
  backgroundColor: 'rgb(138,233,204,0.5)',
  borderColor: 'rgb(138,233,204,1)',
  pointBackgroundColor: 'rgb(138,233,204,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(138,233,204,0.2)',
  fill: true,
  lineTension: 0.4
}, {
  data: [28, 48, 35, 29, 46, 27, 60],
  label: 'Series B',
  backgroundColor: 'rgb(68,186,239,0.7)',
  borderColor: 'rgb(168,186,239,1)',
  pointBackgroundColor: 'rgb(168,186,239,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(168,186,239,1)',
  fill: true,
  lineTension: 0.4
}, {
  data: [0, 20, 11, 19, 10, 22, 9],
  label: 'Series A',
  backgroundColor: 'rgb(1,57,204,2.11)',
  borderColor: 'rgb(166,157,204,1)',
  pointBackgroundColor: 'rgb(166,157,204,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(166,157,204,1)',
  fill: true,
  lineTension: 0.4
}];
const lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const lineChartOptions = {
  animation: {
    duration: 1000,
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000 // duration of animations when hovering an item
  },

  responsiveAnimationDuration: 1000,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      ticks: {
        padding: 4
      },
      gridLines: {
        color: '#f3f3f3',
        drawTicks: false
      },
      title: 'Month',
      scaleLabel: {
        display: true,
        text: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      gridLines: {
        color: '#f3f3f3',
        drawTicks: false
      },
      ticks: {
        padding: 4
      },
      scaleLabel: {
        display: true,
        labelString: 'Value'
      }
    }]
  }
};
const lineChartColors = [{
  backgroundColor: 'rgb(138,233,204,0.5)',
  borderColor: 'rgb(138,233,204,1)',
  pointBackgroundColor: 'rgb(138,233,204,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(138,233,204,0.2)'
}, {
  backgroundColor: 'rgb(68,186,239,0.8)',
  borderColor: 'rgb(168,186,239,1)',
  pointBackgroundColor: 'rgb(168,186,239,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(168,186,239,1)'
}, {
  backgroundColor: 'rgb(1,57,204,2.5)',
  borderColor: 'rgb(166,157,204,1)',
  pointBackgroundColor: 'rgb(166,157,204,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(166,157,204,1)'
}];
const lineChartLegend = true;
const lineChartType = 'line';
///////////////////// Start AreaChart///////////
const areaChartData = [{
  data: [0, 150, 140, 105, 190, 230, 270],
  label: 'Series A',
  backgroundColor: 'rgb(237,238,240,0.4)',
  borderColor: 'transparent',
  pointBackgroundColor: '#FFF',
  pointBorderColor: 'rgb(237,238,240,0.4)',
  pointHoverBackgroundColor: 'rgb(237,238,240,0.4)',
  pointRadius: '5',
  pointHoverBorderColor: '#FFF',
  pointHoverRadius: '5',
  pointBorderWidth: '2',
  fill: true,
  lineTension: 0.4
}, {
  data: [0, 90, 120, 240, 140, 250, 190],
  label: 'Series B',
  backgroundColor: 'rgb(133,158,233,0.9)',
  borderColor: 'transparent',
  pointBackgroundColor: '#FFF',
  pointBorderColor: 'rgb(133,158,233,0.9)',
  pointHoverBackgroundColor: 'rgb(133,158,233,0.9)',
  pointRadius: '5',
  pointHoverBorderColor: '#FFF',
  pointHoverRadius: '5',
  pointBorderWidth: '2',
  fill: true,
  lineTension: 0.4
}];
const areaChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const areaChartOptions = {
  animation: {
    duration: 1000,
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000 // duration of animations when hovering an item
  },

  responsiveAnimationDuration: 1000,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: '#f3f3f3',
        drawTicks: false
      },
      ticks: {
        padding: 4
      },
      scaleLabel: {
        display: true,
        labelString: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      gridLines: {
        color: '#f3f3f3',
        drawTicks: false
      },
      ticks: {
        padding: 4
      },
      scaleLabel: {
        display: true,
        labelString: 'Value'
      }
    }]
  }
};
const areaChartColors = [{
  backgroundColor: 'rgb(237,238,240,0.4)',
  borderColor: 'transparent',
  pointBackgroundColor: '#FFF',
  pointBorderColor: 'rgb(237,238,240,0.4)',
  pointHoverBackgroundColor: 'rgb(237,238,240,0.4)',
  pointRadius: '5',
  pointHoverBorderColor: '#FFF',
  pointHoverRadius: '5',
  pointBorderWidth: '2'
}, {
  backgroundColor: 'rgb(133,158,233,0.9)',
  borderColor: 'transparent',
  pointBackgroundColor: '#FFF',
  pointBorderColor: 'rgb(133,158,233,0.9)',
  pointHoverBackgroundColor: 'rgb(133,158,233,0.9)',
  pointRadius: '5',
  pointHoverBorderColor: '#FFF',
  pointHoverRadius: '5',
  pointBorderWidth: '2'
}];
const areaChartLegend = true;
const areaChartType = 'line';
///////////////////// End AreaChart///////////
///////////////////// End ScatterChart///////////
// scatterChart//
const scatterChartData = [{
  data: [{
    x: 1,
    y: -0.01711
  }, {
    x: 1.26,
    y: -2.708e-2
  }, {
    x: 1.58,
    y: -4.285e-2
  }, {
    x: 2.0,
    y: -6.772e-2
  }, {
    x: 2.51,
    y: -1.068e-1
  }, {
    x: 3.16,
    y: -1.681e-1
  }, {
    x: 3.98,
    y: -2.635e-1
  }, {
    x: 5.01,
    y: -4.106e-1
  }, {
    x: 6.31,
    y: -6.339e-1
  }, {
    x: 7.94,
    y: -9.659e-1
  }, {
    x: 10.00,
    y: -1.445
  }, {
    x: 12.6,
    y: -2.110
  }, {
    x: 15.8,
    y: -2.992
  }, {
    x: 20.0,
    y: -4.102
  }, {
    x: 25.1,
    y: -5.429
  }, {
    x: 31.6,
    y: -6.944
  }, {
    x: 39.8,
    y: -8.607
  }, {
    x: 50.1,
    y: -1.038e1
  }, {
    x: 63.1,
    y: -1.223e1
  }, {
    x: 79.4,
    y: -1.413e1
  }, {
    x: 100.00,
    y: -1.607e1
  }, {
    x: 126,
    y: -1.803e1
  }, {
    x: 158,
    y: -2e1
  }, {
    x: 200,
    y: -2.199e1
  }, {
    x: 251,
    y: -2.398e1
  }, {
    x: 316,
    y: -2.597e1
  }, {
    x: 398,
    y: -2.797e1
  }, {
    x: 501,
    y: -2.996e1
  }, {
    x: 631,
    y: -3.196e1
  }, {
    x: 794,
    y: -3.396e1
  }, {
    x: 1000,
    y: -3.596e1
  }],
  label: 'V(node2)',
  backgroundColor: 'rgba(81,117,224,.6)',
  borderColor: 'transparent',
  pointBorderColor: '#5175E0',
  pointBackgroundColor: '#FFF',
  pointBorderWidth: 2,
  pointHoverBorderWidth: 2,
  pointRadius: 4
}];
const scatterChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const scatterChartOptions = {
  animation: {
    duration: 1000,
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000 // duration of animations when hovering an item
  },

  responsiveAnimationDuration: 1000,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    myScale: {
      type: 'logarithmic',
      position: 'bottom',
      gridLines: {
        zeroLineColor: 'rgba(0,0,0,.1)',
        color: '#f3f3f3',
        drawTicks: false
      },
      ticks: {
        padding: 4
      },
      scaleLabel: {
        labelString: 'Frequency',
        display: true
      }
    },
    yAxes: [{
      type: 'linear',
      ticks: {
        padding: 4,
        userCallback: function (tick) {
          return tick.toString() + 'dB';
        }
      },
      gridLines: {
        zeroLineColor: 'rgba(81,117,224,1)',
        color: '#f3f3f3',
        drawTicks: false
      },
      scaleLabel: {
        labelString: 'Voltage',
        display: true
      }
    }]
  }
};
const scatterChartLegend = true;
const scatterChartType = 'scatter';
///////////////////// Start scatterChart ///////////////
///////////////////// Start Barchart ///////////////
const barChartOptions = {
  responsive: true,
  scaleShowVerticalLines: false,
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      categoryPercentage: 0.5
    }]
  }
};
const barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
const barChartType = 'bar';
const barChartLegend = true;
const barChartData = [{
  data: [65, 59, 80, 81, 56, 55, 40],
  label: 'Series A',
  backgroundColor: '#28d094',
  borderColor: '#28d094',
  pointBackgroundColor: '#28d094',
  pointBorderColor: '#28d094',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: '#28d094',
  barPercentage: 0.9,
  categoryPercentage: 0.5
}, {
  data: [28, 48, 40, 59, 86, 27, 90],
  label: 'Series B',
  backgroundColor: '#f98e76',
  borderColor: '#f98e76',
  pointBackgroundColor: '#f98e76',
  pointBorderColor: '#f98e76',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: '#f98e76',
  barPercentage: 0.9,
  categoryPercentage: 0.5
}];
const barChartColors = [{}, {}];
///////////////////// End barchart////////////////
///////////////////// Start Doughnut////////////////
const doughnutChartLabels = ['January', 'February', 'March', 'April', 'May'];
const doughnutChartData = [350, 250, 100, 200, 80];
const doughnutChartType = 'doughnut';
const doughnutChartColors = ['#00a5a8', '#28d094', '#ff4558', '#ff7d4d', '#626e82'];
const doughnutChartOptions = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};
///////////////////// End Doughnut////////////////
///////////////////// Start Radar////////////////
const radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
const radarChartData = [{
  label: 'Series A',
  data: [65, 59, 90, 81, 56, 55, 40],
  fill: true,
  backgroundColor: 'rgba(245,0,87,.3)',
  borderColor: 'rgba(229,229,229,0.7)',
  pointBackgroundColor: 'rgba(245,0,87,.3)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(245,0,87)'
}, {
  label: 'Series B',
  data: [28, 48, 40, 19, 96, 27, 100],
  fill: true,
  backgroundColor: 'rgba(29,233,182,.6)',
  borderColor: 'rgba(229,229,229,0.7)',
  pointBackgroundColor: 'rgb(29, 233,182)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgb(29, 233,182)'
}];
const radarChartType = 'radar';
const radarChartOptions = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};
///////////////////// End Radar////////////////
///////////////////// start PieChart////////////////
const pieChartLabels = ['January', 'February', 'March', 'April', 'May'];
const pieChartData = [300, 200, 100, 150, 80];
const pieChartType = 'pie';
const pieChartColors = ['#00a5a8', '#28d094', '#ff4558', '#ff7d4d', '#626e82'];
const pieChartOptions = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};
///////////////////// end Pie chart ////////////////
///////////////////// start polar-chart///////////
// PolarArea
const polarAreaChartLabels = ['January', 'February', 'March', 'April', 'May'];
const polarAreaChartData = [300, 500, 100, 40, 120];
const polarAreaLegend = true;
const ploarChartColors = ['#00a5a8', '#28d094', '#ff4558', '#ff7d4d', '#626e82'];
const polarChartBorderColor = '#fff';
const polarAreaChartType = 'polarArea';
const polarChartOptions = {
  animation: false,
  responsive: true,
  maintainAspectRatio: false
};
///////////////////// end polar-chart///////////
// lineChartsData//
const lineChartsData = [{
  data: [65, 59, 80, 81, 56, 55, 40],
  label: 'My First dataset',
  fill: false,
  borderDash: [5, 5],
  borderColor: '#9C27B0',
  pointBorderColor: '#9C27B0',
  pointBackgroundColor: '#FFF',
  pointBorderWidth: 2,
  pointHoverBorderWidth: 2,
  pointRadius: 4,
  lineTension: 0.4
}, {
  data: [28, 48, 40, 19, 86, 27, 90],
  label: 'My Second dataset',
  fill: false,
  borderDash: [5, 5],
  borderColor: '#00A5A8',
  pointBorderColor: '#00A5A8',
  pointBackgroundColor: '#FFF',
  pointBorderWidth: 2,
  pointHoverBorderWidth: 2,
  pointRadius: 4,
  lineTension: 0.4
}, {
  data: [45, 25, 16, 36, 67, 18, 76],
  label: 'My Third dataset - No bezier',
  lineTension: 0,
  fill: false,
  borderColor: '#FF7D4D',
  pointBorderColor: '#FF7D4D',
  pointBackgroundColor: '#FFF',
  pointBorderWidth: 2,
  pointHoverBorderWidth: 2,
  pointRadius: 4
}];
const lineChartsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const lineChartsOptions = {
  animation: {
    duration: 1000 // general animation time
  },

  hover: {
    animationDuration: 1000,
    mode: 'label'
  },
  responsiveAnimationDuration: 1000,
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom'
  },
  scales: {
    myScale: [{
      display: true,
      gridLines: {
        color: 'f3f3f3',
        drawTicks: false
      },
      ticks: {
        padding: 4
      },
      scaleLabel: {
        display: true,
        labelString: 'Month'
      }
    }],
    yAxes: [{
      display: true,
      gridLines: {
        color: '#f3f3f3',
        drawTicks: false
      },
      ticks: {
        padding: 4
      },
      scaleLabel: {
        display: true,
        labelString: 'Value'
      }
    }]
  },
  title: {
    display: true,
    text: 'Chart.js Line Chart - Legend'
  }
};
const lineChartsColors = [{
  fill: false,
  borderDash: [5, 5],
  borderColor: '#9C27B0',
  pointBorderColor: '#9C27B0',
  pointBackgroundColor: '#FFF',
  pointBorderWidth: 2,
  pointHoverBorderWidth: 2,
  pointRadius: 4
}, {
  fill: false,
  borderDash: [5, 5],
  borderColor: '#00A5A8',
  pointBorderColor: '#00A5A8',
  pointBackgroundColor: '#FFF',
  pointBorderWidth: 2,
  pointHoverBorderWidth: 2,
  pointRadius: 4
}, {
  lineTension: 0,
  fill: false,
  borderColor: '#FF7D4D',
  pointBorderColor: '#FF7D4D',
  pointBackgroundColor: '#FFF',
  pointBorderWidth: 2,
  pointHoverBorderWidth: 2,
  pointRadius: 4
}];
const lineChartsLegend = true;
const lineChartsType = 'line';
// lineChartsData//

/***/ }),

/***/ 8214:
/*!************************************************************************!*\
  !*** ./src/app/content/charts-maps/chartjs/charts/charts.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsComponent": () => (/* binding */ ChartsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ 82055);
/* harmony import */ var _chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartjs */ 39916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_layout/breadcrumb/breadcrumb.component */ 74986);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../partials/general/card/card.component */ 15733);








function ChartsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "m-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function ChartsComponent_div_7_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.reloadBarCharts($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Bar charts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "canvas", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r0.barChartData)("labels", ctx_r0.barChartLabels)("options", ctx_r0.barChartOptions)("legend", ctx_r0.barChartLegend)("chartType", ctx_r0.barChartType);
  }
}
function ChartsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "m-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("reloadFunction", function ChartsComponent_div_10_Template_m_card_reloadFunction_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.reloadLineCharts($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Line Charts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](4, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 13)(6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "canvas", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx_r1.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r1.lineChartsData)("labels", ctx_r1.lineChartsLabels)("options", ctx_r1.lineChartsOptions)("colors", ctx_r1.lineChartsColors)("legend", ctx_r1.lineChartsLegend)("type", ctx_r1.lineChartsType);
  }
}
class ChartsComponent {
  constructor() {
    this.options = {
      close: true,
      expand: true,
      minimize: true,
      reload: true
    };
    /**
     * barChart
     */
    this.barChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartOptions;
    this.barChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartLabels;
    this.barChartType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartType;
    this.barChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartLegend;
    this.barChartData = _chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartData;
    this.barChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartColors;
    /**
     * lineChart
     */
    this.lineChartData = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartData;
    this.lineChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartLabels;
    this.lineChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartOptions;
    this.lineChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartColors;
    this.lineChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartLegend;
    this.lineChartType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartType;
    /**
     * areaChart
     */
    this.areaChartData = _chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartData;
    this.areaChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartLabels;
    this.areaChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartOptions;
    this.areaChartColors = _chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartColors;
    this.areaChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartLegend;
    this.areaChartType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.areaChartType;
    /**
     * scatterChartData
     */
    this.scatterChartData = _chartjs__WEBPACK_IMPORTED_MODULE_0__.scatterChartData;
    this.scatterChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.scatterChartLabels;
    this.scatterChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.scatterChartOptions;
    //  public scatterChartColors = chartsData.scatterChartColors;
    this.scatterChartLegend = _chartjs__WEBPACK_IMPORTED_MODULE_0__.scatterChartLegend;
    this.scatterChartType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.scatterChartType;
    /**
    * Doughnut
    */
    this.doughnutChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartLabels;
    this.doughnutChartData = [{
      data: _chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartData,
      backgroundColor: _chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartColors
    }];
    this.doughnutChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.doughnutChartOptions;
    /**
    * Radar
    */
    this.radarChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.radarChartLabels;
    this.radarChartData = _chartjs__WEBPACK_IMPORTED_MODULE_0__.radarChartData;
    this.radarChartType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.radarChartType;
    this.radarChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.radarChartOptions;
    /**
     * Pie
     */
    this.pieChartOptions = {
      responsive: true
    };
    this.pieChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.pieChartLabels;
    this.pieChartData = [{
      data: _chartjs__WEBPACK_IMPORTED_MODULE_0__.pieChartData,
      backgroundColor: _chartjs__WEBPACK_IMPORTED_MODULE_0__.pieChartColors
    }];
    this.pieChartLegend = true;
    this.pieChartPlugins = [];
    this.pieChartType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.pieChartType;
    /**
     * PolarArea
     */
    this.polarAreaChartLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.polarAreaChartLabels;
    this.polarAreaChartData = [{
      data: _chartjs__WEBPACK_IMPORTED_MODULE_0__.polarAreaChartData,
      backgroundColor: _chartjs__WEBPACK_IMPORTED_MODULE_0__.ploarChartColors,
      borderColor: _chartjs__WEBPACK_IMPORTED_MODULE_0__.polarChartBorderColor
    }];
    this.polarAreaLegend = _chartjs__WEBPACK_IMPORTED_MODULE_0__.polarAreaLegend;
    this.polarAreaChartType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.polarAreaChartType;
    this.polarChartOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.polarChartOptions;
    /**
     * lineChart
     */
    this.lineChartsData = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartsData;
    this.lineChartsLabels = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartsLabels;
    this.lineChartsOptions = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartsOptions;
    this.lineChartsColors = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartsColors;
    this.lineChartsLegend = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartsLegend;
    this.lineChartsType = _chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartsType;
  }
  /**
   * OnInit
   */
  ngOnInit() {
    this.breadcrumb = {
      mainlabel: "Chartjs Charts",
      links: [{
        name: "Home",
        isLink: true,
        link: "/dashboard/sales"
      }, {
        name: "Chartjs",
        isLink: true,
        link: "#"
      }]
    };
  }
  /**
   * Reload card
   */
  reloadBarCharts() {
    this.blockUIBarCharts.start("Loading..");
    setTimeout(() => {
      this.blockUIBarCharts.stop();
    }, 2500);
  }
  reloadLineCharts() {
    this.blockUILineCharts.start("Loading..");
    setTimeout(() => {
      this.blockUILineCharts.stop();
    }, 2500);
  }
}
ChartsComponent.ɵfac = function ChartsComponent_Factory(t) {
  return new (t || ChartsComponent)();
};
ChartsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ChartsComponent,
  selectors: [["app-charts"]],
  decls: 81,
  vars: 39,
  consts: [[1, "app-content", "content"], [1, "content-wrapper"], [1, "content-header", "row", "mb-1"], [1, "col-12", 3, "breadcrumb"], [1, "content-body"], ["id", "chartjs-bar-charts"], [1, "row"], ["class", "col-12", 4, "blockUI", "blockUIMessage"], ["id", "chartjs-line-charts"], ["id", "chartjs-arealine-charts"], [1, "col-12"], ["mCardHeaderTitle", ""], ["mCardBody", ""], [1, "card-block"], [1, "height-400"], ["height", "400", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "legend", "type"], ["id", "chartjs-line-stacked-charts"], ["id", "chartjs-scatter-charts"], ["height", "400", "id", "scatter-chart", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "legend", "type"], ["id", "chartjs-pie-charts"], [1, "card"], [1, "card-content", "collapse", "show"], [1, "card-body"], [1, "pieChart", "height-400"], ["baseChart", "", "width", "400", 2, "display", "unset", 3, "type", "datasets", "labels", "options", "plugins", "legend"], ["id", "chartjs-doughnut-charts"], [1, "doughnutChart", "height-400"], ["baseChart", "", "width", "400", 2, "display", "unset", 3, "datasets", "options", "labels", "type"], ["id", "chartjs-polar-charts"], [1, "polarchart", "height-400"], ["baseChart", "", 3, "datasets", "labels", "legend", "options", "type"], ["id", "chartjs-radar-charts"], [1, "card", "radarChart"], ["baseChart", "", 3, "datasets", "options", "labels", "type"], [3, "options", "reloadFunction"], [1, "z"], ["height", "400", "baseChart", "", 1, "barchart", 3, "datasets", "labels", "options", "legend", "chartType"], ["height", "400", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "type"]],
  template: function ChartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-breadcrumb", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "section", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ChartsComponent_div_7_Template, 7, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 8)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ChartsComponent_div_10_Template, 8, 7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "section", 9)(12, "div", 6)(13, "div", 10)(14, "m-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Area Line charts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "canvas", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "section", 16)(22, "div", 6)(23, "div", 10)(24, "m-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](25, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Line Stacked Area Chart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 13)(29, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "canvas", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "section", 17)(32, "div", 6)(33, "div", 10)(34, "m-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](35, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Scatter Logx Chart ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](37, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 13)(39, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "canvas", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "section", 19)(42, "div", 6)(43, "div", 10)(44, "div", 20)(45, "div", 21)(46, "div", 22)(47, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Pie Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "canvas", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "section", 25)(52, "div", 6)(53, "div", 10)(54, "div", 20)(55, "div", 21)(56, "div", 22)(57, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Doughnut Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "canvas", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "section", 28)(62, "div", 6)(63, "div", 10)(64, "div", 20)(65, "div", 21)(66, "div", 22)(67, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Polar Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "canvas", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "section", 31)(72, "div", 6)(73, "div", 10)(74, "div", 32)(75, "div", 21)(76, "div", 22)(77, "div", 14)(78, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Radar Chart");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "canvas", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumb", ctx.breadcrumb);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "barCharts")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blockUI", "lineCharts")("blockUIMessage", "Loading");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.areaChartData)("labels", ctx.areaChartLabels)("options", ctx.areaChartOptions)("legend", ctx.areaChartLegend)("type", ctx.areaChartType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("type", ctx.lineChartType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.scatterChartData)("labels", ctx.scatterChartLabels)("options", ctx.scatterChartOptions)("legend", ctx.scatterChartLegend)("type", ctx.scatterChartType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "pie")("datasets", ctx.pieChartData)("labels", ctx.pieChartLabels)("options", ctx.pieChartOptions)("plugins", ctx.pieChartPlugins)("legend", ctx.pieChartLegend);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.doughnutChartData)("options", ctx.doughnutChartOptions)("labels", ctx.doughnutChartLabels)("type", "doughnut");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.polarAreaChartData)("labels", ctx.polarAreaChartLabels)("legend", ctx.polarAreaLegend)("options", ctx.polarChartOptions)("type", ctx.polarAreaChartType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.radarChartData)("options", ctx.radarChartOptions)("labels", ctx.radarChartLabels)("type", ctx.radarChartType);
    }
  },
  dependencies: [_layout_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, _partials_general_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent, ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["ɵf"]],
  styles: ["[_nghost-%COMP%]     .barchart  {\n    animation: chartjs-render-animation 0.001s;\n\n}\n[_nghost-%COMP%]     .lineCharts  {\n  animation: chartjs-render-animation 0.001s;\n\n}\n\n[_nghost-%COMP%]     .radarChart {\n  height: 470px !important;\n}\n\n[_nghost-%COMP%]     .doughnutChart {\n  text-align: center !important;\n}\n\n[_nghost-%COMP%]     .pieChart {\n  text-align: center !important;\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n@media(max-width:767px) {\n  [_nghost-%COMP%]     .chart\n   {\n    height:400px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFFSSwwQ0FBMEM7O0FBRTlDO0FBQ0E7RUFFRSwwQ0FBMEM7O0FBRTVDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRTs7SUFFRSx1QkFBdUI7RUFDekI7QUFDRiIsImZpbGUiOiJjaGFydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG46aG9zdCA6Om5nLWRlZXAgLmJhcmNoYXJ0ICB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNoYXJ0anMtcmVuZGVyLWFuaW1hdGlvbiAwLjAwMXM7XG4gICAgYW5pbWF0aW9uOiBjaGFydGpzLXJlbmRlci1hbmltYXRpb24gMC4wMDFzO1xuXG59XG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydHMgIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoYXJ0anMtcmVuZGVyLWFuaW1hdGlvbiAwLjAwMXM7XG4gIGFuaW1hdGlvbjogY2hhcnRqcy1yZW5kZXItYW5pbWF0aW9uIDAuMDAxcztcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJhZGFyQ2hhcnQge1xuICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG91Z2hudXRDaGFydCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBpZUNoYXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNoYXJ0XG4gICB7XG4gICAgaGVpZ2h0OjQwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9jaGFydHMtbWFwcy9jaGFydGpzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBRUksMENBQTBDOztBQUU5QztBQUNBO0VBRUUsMENBQTBDOztBQUU1Qzs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDtBQUNBO0VBQ0U7O0lBRUUsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFEQSxvMUNBQW8xQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG46aG9zdCA6Om5nLWRlZXAgLmJhcmNoYXJ0ICB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNoYXJ0anMtcmVuZGVyLWFuaW1hdGlvbiAwLjAwMXM7XG4gICAgYW5pbWF0aW9uOiBjaGFydGpzLXJlbmRlci1hbmltYXRpb24gMC4wMDFzO1xuXG59XG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydHMgIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGNoYXJ0anMtcmVuZGVyLWFuaW1hdGlvbiAwLjAwMXM7XG4gIGFuaW1hdGlvbjogY2hhcnRqcy1yZW5kZXItYW5pbWF0aW9uIDAuMDAxcztcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLnJhZGFyQ2hhcnQge1xuICBoZWlnaHQ6IDQ3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG91Z2hudXRDaGFydCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnBpZUNoYXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYmxvY2stdWktd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41KSAhaW1wb3J0YW50O1xufVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLmNoYXJ0XG4gICB7XG4gICAgaGVpZ2h0OjQwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)("barCharts")], ChartsComponent.prototype, "blockUIBarCharts", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,ng_block_ui__WEBPACK_IMPORTED_MODULE_5__.BlockUI)("lineCharts")], ChartsComponent.prototype, "blockUILineCharts", void 0);

/***/ })

}]);
//# sourceMappingURL=src_app_content_charts-maps_chartjs_chartjs_module_ts.js.map