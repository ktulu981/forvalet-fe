"use strict";
(self["webpackChunkmodern_admin"] = self["webpackChunkmodern_admin"] || []).push([["src_app_content_applications_todo-app_todo-app_module_ts"],{

/***/ 92031:
/*!*******************************************!*\
  !*** ./src/app/_api/todo/todo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoService": () => (/* binding */ TodoService)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 51181);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);




class TodoService {
  constructor(firestore) {
    this.firestore = firestore;
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    this.ref = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('todo');
  }
  getTODOS(userId) {
    return this.firestore.collection('todo', ref => ref.orderBy('createdDate', 'desc').where('uid', '==', userId)).snapshotChanges();
  }
  getAssignedTODOS(userId) {
    return this.firestore.collection('todo', ref => ref.orderBy('createdDate', 'desc').where('assignedTo.uid', '==', userId)).snapshotChanges();
  }
  createTodo(todo) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this.ref.add(todo).then(doc => {
        observer.next({
          data: doc
        });
      });
    });
  }
  sendMessage(todoId, data) {
    return this.firestore.collection('todo').doc(todoId).update({
      todoComments: data
    });
  }
  updateTODO(id, data) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  deleteTodo(id) {
    return this.ref.doc(id).delete();
  }
}
TodoService.ɵfac = function TodoService_Factory(t) {
  return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore));
};
TodoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TodoService,
  factory: TodoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 71864:
/*!********************************************************!*\
  !*** ./src/app/_directives/image.preload.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImagePreloadDirective": () => (/* binding */ ImagePreloadDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @angular-eslint/directive-selector */
class ImagePreloadDirective {
  updateUrl() {
    this.src = this.default;
  }
  load() {
    this.className = 'image-loaded';
  }
}
ImagePreloadDirective.ɵfac = function ImagePreloadDirective_Factory(t) {
  return new (t || ImagePreloadDirective)();
};
ImagePreloadDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ImagePreloadDirective,
  selectors: [["img", "default", ""]],
  hostVars: 3,
  hostBindings: function ImagePreloadDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImagePreloadDirective_error_HostBindingHandler() {
        return ctx.updateUrl();
      })("load", function ImagePreloadDirective_load_HostBindingHandler() {
        return ctx.load();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
    }
  },
  inputs: {
    src: "src",
    default: "default"
  }
});

/***/ }),

/***/ 28739:
/*!******************************************************************!*\
  !*** ./src/app/content/applications/todo-app/todo-app.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoAppModule": () => (/* binding */ TodoAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _todoapp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoapp.component */ 89495);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat */ 11879);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var src_app_api_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_api/todo/todo.service */ 92031);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_directives/image.preload.directive */ 71864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);




















class TodoAppModule {}
TodoAppModule.ɵfac = function TodoAppModule_Factory(t) {
  return new (t || TodoAppModule)();
};
TodoAppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: TodoAppModule
});
TodoAppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [src_app_api_todo_todo_service__WEBPACK_IMPORTED_MODULE_2__.TodoService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, ngx_quill__WEBPACK_IMPORTED_MODULE_10__.QuillModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule.forRoot(), _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule.initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.firebase), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule.enablePersistence(), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([{
    path: '',
    component: _todoapp_component__WEBPACK_IMPORTED_MODULE_0__.TodoappComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TodoAppModule, {
    declarations: [_todoapp_component__WEBPACK_IMPORTED_MODULE_0__.TodoappComponent, _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_3__.ImagePreloadDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__.PerfectScrollbarModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule, ngx_quill__WEBPACK_IMPORTED_MODULE_10__.QuillModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_3__.ImagePreloadDirective]
  });
})();

/***/ }),

/***/ 89495:
/*!********************************************************************!*\
  !*** ./src/app/content/applications/todo-app/todoapp.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoappComponent": () => (/* binding */ TodoappComponent)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var quill_mention__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-mention */ 75367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _api_todo_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_api/todo/todo.service */ 92031);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _api_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_api/user/user.service */ 15496);
/* harmony import */ var _services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/quill-initialize-service.service */ 47266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 73054);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-quill */ 63115);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_directives/image.preload.directive */ 71864);


















const _c0 = ["editor"];
const _c1 = function (a0, a1) {
  return {
    "active": a0,
    "": a1
  };
};
function TodoappComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_div_21_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const todo_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.showTodoMenu(todo_r19.Id, ctx_r20.todoFilterList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const todo_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c1, todo_r19.isSelected === true, todo_r19.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](todo_r19.lableIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](todo_r19.lableName);
  }
}
function TodoappComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_div_24_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const todo_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.showTodoMenu(todo_r22.Id, ctx_r23.todoLableList));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const todo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c1, todo_r22.isSelected === true, todo_r22.isSelected === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](todo_r22.lableName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", todo_r22.bulletClass, " d-inline-block rounded-circle ");
  }
}
function TodoappComponent_h5_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "New Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TodoappComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Mark Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function TodoappComponent_img_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 111);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r4.selectedUserImage ? ctx_r4.selectedUserImage : "../../../../assets/images/portrait/small/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function TodoappComponent_img_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 111);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r5.selectedAssignee ? ctx_r5.selectedAssignee.image : "../../../../assets/images/portrait/small/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function TodoappComponent_img_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 112);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.currentUserImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function TodoappComponent_img_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 112);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r8.selectedItem.creator.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function TodoappComponent_img_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 113);
  }
}
function TodoappComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r10.currentUserName, " creating this task ");
  }
}
function TodoappComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r11.selectedItem.creator.name, " created this task ");
  }
}
function TodoappComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " John Doe creating this task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TodoappComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 67)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "small", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const todo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", todo_r25.userid ? todo_r25.userid : "../../../../assets/images/portrait/small/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", todo_r25.comment, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](7, 3, todo_r25.created_at_date, "dd/MMM HH:mm"));
  }
}
function TodoappComponent_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_button_106_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.submitComment(ctx_r26.selectedItem.id, ctx_r26.todoCommentsField));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function TodoappComponent_button_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Add Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TodoappComponent_button_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_button_109_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.onUpdate(ctx_r28.selectedItem.id, ctx_r28.todo.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TodoappComponent_ul_138_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", item_r30.assignedTo.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
const _c2 = function (a0) {
  return {
    "completed": a0
  };
};
function TodoappComponent_ul_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 119)(1, "li", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_ul_138_Template_li_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.sidebartask($event));
    })("click", function TodoappComponent_ul_138_Template_li_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const item_r30 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.editModal(item_r30, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 121)(3, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_ul_138_Template_div_click_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TodoappComponent_ul_138_Template_input_change_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const item_r30 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.completeTODO(item_r30, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 128)(11, "div", 129)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TodoappComponent_ul_138_div_14_Template, 2, 1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_ul_138_Template_a_click_15_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const item_r30 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.todoFavorite($event, item_r30.id));
    })("click", function TodoappComponent_ul_138_Template_a_click_15_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_ul_138_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const item_r30 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.onDelete(item_r30.id));
    })("click", function TodoappComponent_ul_138_Template_a_click_17_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    const i_r31 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r30.completed)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, item_r30.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "checkbox", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", item_r30.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("for", "checkbox", i_r31, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge badge-", item_r30.type, " badge-pill");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r30.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r30.assignedTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", "todo-icon" + item_r30.id);
  }
}
const _c3 = function () {
  return {
    height: "90px"
  };
};
const _c4 = function () {
  return {
    standalone: true
  };
};
class TodoFilter {
  constructor(Id, lableName, isSelected) {
    this.Id = Id;
    this.lableName = lableName;
    this.isSelected = isSelected;
  }
}
class Comment {}
class TodoappComponent {
  /**
  * Constructor
  *
  * @param NgbModal              modal
  * @param FormBuilder           formBuilder
  * @param Renderer2             _renderer
  * @param TodoService           firebaseService
  * @param AngularFirestore      firestore
  * @param ToastrService         toastr
  */
  constructor(modal, formBuilder, _renderer, firebaseService, firestore, toastr, modalService, userService, QuillInitializeServiceServicec) {
    this.modal = modal;
    this.formBuilder = formBuilder;
    this._renderer = _renderer;
    this.firebaseService = firebaseService;
    this.firestore = firestore;
    this.toastr = toastr;
    this.modalService = modalService;
    this.userService = userService;
    this.QuillInitializeServiceServicec = QuillInitializeServiceServicec;
    this.initialData = __webpack_require__(/*! ../../../../assets/data/application/todo.json */ 19660);
    this.LableData = __webpack_require__(/*! ../../../../assets/data/application/todo_lable.json */ 23073);
    this.demoUserEmail = 'john@pixinvent.com';
    this.submitted = false;
    this.commentList = [];
    this.todoDisplayList = [];
    this.todoLableList = [];
    this.todoFilterList = [];
    this.selectedUserId = '';
    this.todoComments = [];
    this.selectedTodoTypeText = '';
    this.selectedTodoTypeValue = '';
    this.isShown = true;
    this.completedTodo = false;
    this.loader = true;
    this.blured = false;
    this.focused = false;
    this.hide = false;
    this.hasFocus = false;
    this.commentArray = [];
    this.isShowCropper = false;
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    this.demoUserImage = '../../../assets/images/portrait/small/avatar-s-19.png';
    this.currentUserImage = this.loggedInUser.photoURL;
    this.currentUserName = this.loggedInUser.name;
    this.config = {};
    this.atValues = [{
      id: 1,
      value: 'Fredrik Sundqvist',
      link: 'https://google.com'
    }, {
      id: 2,
      value: 'Patrik Sjölin'
    }];
    this.hashValues = [{
      id: 3,
      value: 'Fredrik Sundqvist 2'
    }, {
      id: 4,
      value: 'Patrik Sjölin 2'
    }];
    this.newTodoquillConfig = {
      toolbar: {
        container: [['bold', 'italic', 'underline', 'strike', 'image']]
      },
      autoLink: true,
      mention: {
        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
        mentionDenotationChars: ['@', '#'],
        source: (searchTerm, renderList, mentionChar) => {
          let values;
          if (mentionChar === '@') {
            values = this.atValues;
          } else {
            values = this.hashValues;
          }
          if (searchTerm.length === 0) {
            renderList(values, searchTerm);
          } else {
            const matches = [];
            for (let i = 0; i < values.length; i++) {
              if (values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) {
                matches.push(values[i]);
                renderList(matches, searchTerm);
              }
            }
          }
        }
      },
      keyboard: {
        bindings: {
          enter: {
            key: 13,
            handler: (range, context) => {
              console.log('enter');
              return true;
            }
          }
        }
      }
    };
    this.TodoquillConfig = {
      toolbar: {
        container: [['bold', 'italic', 'underline', 'strike']]
      },
      autoLink: true,
      // mention: {
      //   allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      //   mentionDenotationChars: ['@', '#'],
      //   source: (searchTerm: string, renderList: (arg0: any[], arg1: any) => void, mentionChar: string) => {
      //     let values;
      //     if (mentionChar === '@') {
      //       values = this.atValues;
      //     } else {
      //       values = this.hashValues;
      //     }
      //     if (searchTerm.length === 0) {
      //       renderList(values, searchTerm);
      //     } else {
      //       const matches = [];
      //       for (let i = 0; i < values.length; i++) {
      //         if (values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) {
      //           matches.push(values[i]);
      //           renderList(matches, searchTerm);
      //         }
      //       }
      //     }
      //   },
      // },
      keyboard: {
        bindings: {
          enter: {
            key: 13,
            handler: (range, context) => {
              console.log('enter');
              return true;
            }
          }
        }
      }
    };
  }
  get TodoFormGroup() {
    return this.todo.get('todoComments');
  }
  /**
   * OnInit
   */
  ngOnInit() {
    this.loader = true;
    this.resetForm();
    this.todos = [];
    this.currentUserImage = this.loggedInUser.photoURL;
    this.currentUserName = this.loggedInUser.displayName;
    this.todoLableList = this.LableData.todoLableList;
    this.todoFilterList = this.LableData.todoFilterList;
    this.userService.getUsers().subscribe(users => {
      let contactList = users.map(item => {
        return Object.assign(Object.assign({}, item.payload.doc.data()), {
          id: item.payload.doc['id']
        });
      });
      contactList = contactList.filter(element => {
        return this.loggedInUser.uid !== element['uid'] || this.loggedInUser.uid === element['uid'];
      });
      this.contact = contactList;
    });
    if (this.loggedInUser.email === this.demoUserEmail) {
      // To load default todo for demo account
      this.getDemoAccTodos().then(todos => {
        if (todos.length === 0) {
          this.addDemoAccountTodos().then(result => {
            if (result) {
              this.loadTodos();
            }
          });
        } else {
          this.loadTodos();
        }
      });
    } else {
      this.loadTodos();
    }
    this.todo = this.formBuilder.group({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      createdDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      assignedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      assignDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.nullValidator]),
      todoComments: this.formBuilder.array([this.formBuilder.group({
        comment: '',
        created_at_date: '',
        userid: ''
      })])
    });
  }
  // Load TODO of user
  loadTodos() {
    this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe(todos => {
      let todo = [];
      todo = todos.map(item => {
        return Object.assign(Object.assign({}, item.payload.doc.data()), {
          id: item.payload.doc['id']
        });
      });
      this.firebaseService.getAssignedTODOS(this.loggedInUser.uid).subscribe(assignedTodos => {
        let todoAssigned = [];
        todoAssigned = assignedTodos.map(item => {
          const toDoObj = item.payload.doc.data();
          if (toDoObj && toDoObj['uid'] !== this.loggedInUser.uid) {
            return Object.assign(Object.assign({}, item.payload.doc.data()), {
              id: item.payload.doc['id']
            });
          }
        });
        todoAssigned = todoAssigned.filter(item => {
          return item && item['uid'];
        });
        this.todos = todo.concat(todoAssigned);
        this.temp = this.todos;
        this.loader = false;
      });
    });
  }
  /**
   * Get the add todo Form value
   */
  get add() {
    return this.todo.controls;
  }
  /**
   * Get the update todo Form value
   */
  get update() {
    return this.todo.controls;
  }
  /**
   * Reset form value
   *
   * @param form      Form fields with previous value
   */
  resetForm(form) {
    if (form != null) {
      form.resetForm();
    }
  }
  addDemoAccountTodos() {
    const dataPromise = new Promise((resolve, reject) => {
      const promises = [];
      // Add default TODO for demo account
      for (let i = 0; i < this.initialData.length; i++) {
        const promise = this.firestore.collection('todo').add({
          title: this.initialData[i].title,
          description: this.initialData[i].description,
          badge: this.initialData[i].badge,
          type: this.initialData[i].type,
          completed: this.initialData[i].completed,
          isDeleted: this.initialData[i].isDeleted,
          createdDate: new Date(),
          uid: this.loggedInUser.uid,
          assignedTo: this.initialData[i].assignedTo,
          assignDate: this.initialData[i].assignDate,
          todoComments: this.initialData[i].todoComments
        });
        promises.push(promise);
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(promises).subscribe(results => {
        resolve(true);
      });
    });
    return dataPromise;
  }
  /**
   * Initial todo display
   */
  getDemoAccTodos() {
    const dataPromise = new Promise((resolve, reject) => {
      this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe(todos => {
        resolve(todos);
      });
    });
    return dataPromise;
  }
  /**
   * Add new todo
   *
   * Update todo
   *
   * @param value     Form field values
   * @param id        todo id
   */
  onSubmit(event) {
    this.submitted = true;
    let temp = [];
    this.todo.controls.assignDate.clearValidators();
    this.todo.get('assignDate').clearValidators();
    this.todo.get('assignDate').updateValueAndValidity();
    if (this.assignedTo) {
      this.selectedAssignee = this.assignedTo;
    }
    if (this.todoCommentsField == null) {
      temp = null;
    } else if (this.todoCommentsField !== null) {
      this.todoCommentsField = this.todoCommentsField.replace(/(<p>|<\/p>)/g, '');
      temp = [{
        comment: this.todoCommentsField,
        created_at_date: Date.now(),
        userid: this.currentUserImage
      }];
    }
    if (this.todo.invalid) {
      return;
    } else if (this.todo.valid) {
      this.todo.setValue({
        uid: this.loggedInUser.uid,
        title: this.todo.value.title,
        description: this.todo.value.description,
        type: this.selectedTodoTypeValue,
        completed: false,
        isDeleted: false,
        createdDate: new Date(),
        badge: this.selectedTodoTypeText,
        assignedTo: this.todo.value.assignedTo,
        assignDate: this.todo.value.assignDate,
        todoComments: temp
      });
      this.firebaseService.createTodo(this.todo.value).subscribe(res => {
        this.toastr.success('Added', 'Todo Created Successfully.', {
          timeOut: 500,
          closeButton: true
        });
      }, err => {
        this.toastr.error('Error', 'Add Todo Error.', {
          timeOut: 500,
          closeButton: true
        });
      });
      const toggleIcon = document.getElementById('todo-new-task');
      const toggle = document.getElementById('content-overlay');
      if (event.currentTarget.className === 'mt-1 ng-dirty ng-valid ng-touched' || 'mt-1 ng-dirty ng-touched ng-valid') {
        this._renderer.removeClass(toggleIcon, 'show');
        this._renderer.removeClass(toggle, 'show');
      }
    }
  }
  /**
  * Submit Comment
  */
  submitComment(id, comments) {
    if (comments != null) {
      comments = comments.replace(/(<p>|<\/p>)/g, '');
    }
    if (!comments) {
      comments = null;
    }
    if (this.loggedInUser.email === this.demoUserEmail) {
      this.currentUserImage = this.demoUserImage;
    }
    if (!this.todoComments || this.todoComments.length === 0) {
      this.todoComments = [];
    }
    // TODO Add todo comment from parameters to todoComments first
    if (comments != null) {
      this.todoComments.push({
        comment: comments,
        created_at_date: Date.now(),
        userid: this.currentUserImage
      });
    }
    if (this.todoId !== null) {
      this.todo.setValue({
        uid: this.todo.value.uid,
        title: this.todo.value.title,
        description: this.todo.value.description,
        type: this.todo.value.type,
        completed: false,
        isDeleted: false,
        createdDate: this.todo.value.createdDate,
        badge: this.todo.value.badge,
        assignedTo: this.todo.value.assignedTo,
        assignDate: this.todo.value.assignDate,
        todoComments: this.todoComments
      });
      this.todoCommentsField = null;
      comments = null;
      this.firebaseService.updateTODO(id, this.todo.value).subscribe(res => {
        this.toastr.success('Update', 'Todo Comment Updated Successfully.', {
          timeOut: 500,
          closeButton: true
        });
      }, err => {
        this.toastr.error('Error', 'Todo Comment Updated Error', {
          timeOut: 500,
          closeButton: true
        });
      });
      console.log(this.todo);
    }
  }
  /**
  * Update todo
  *
  * @param value     Form field values
  * @param id        todo id
  */
  onUpdate(id, value, event) {
    this.submitted = true;
    this.todo.controls.assignDate.clearValidators();
    this.todo.get('assignDate').clearValidators();
    this.todo.get('assignDate').updateValueAndValidity();
    if (this.todo.invalid) {
      return;
    } else if (this.todo.valid) {
      this.todo.setValue({
        uid: this.loggedInUser.uid,
        title: value.title,
        description: value.description,
        type: this.selectedTodoTypeValue,
        completed: value.completed,
        isDeleted: false,
        createdDate: this.selectedItem.createdDate,
        badge: this.selectedTodoTypeText,
        assignedTo: value.assignedTo,
        assignDate: value.assignDate,
        todoComments: this.todoComments
      });
      this.firebaseService.updateTODO(id, this.todo.value).subscribe(res => {
        this.toastr.success('Update', 'Todo Updated Successfully.', {
          timeOut: 500,
          closeButton: true
        });
      }, err => {
        this.toastr.error('Error', 'Todo Update Error!', {
          timeOut: 500,
          closeButton: true
        });
      });
      const toggleIcon = document.getElementById('todo-new-task');
      const toggle = document.getElementById('content-overlay');
      if (event.currentTarget.className === 'btn btn-danger update-todo ng-star-inserted' || 'btn btn-danger update-todo') {
        this._renderer.removeClass(toggleIcon, 'show');
        this._renderer.removeClass(toggle, 'show');
      }
    }
  }
  /**
   * Delete todo
   *
   * @param id      todo id
   */
  onDelete(id) {
    this.firebaseService.deleteTodo(id).then(res => {
      this.toastr.success('Deleted', 'Todo Deleted Successfully!', {
        timeOut: 500,
        closeButton: true
      });
    }, err => {
      this.toastr.error('Error', 'Todo Delete Error!', {
        timeOut: 500,
        closeButton: true
      });
    });
  }
  /**
   * filter task
   */
  search(term) {
    const searchTerm = term.currentTarget.value;
    if (searchTerm !== '') {
      this.todos = this.todos.filter(result => {
        if (result && searchTerm) {
          if (result.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || result.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    } else {
      this.todos = this.temp;
    }
  }
  /**
   * Open add todo modal
   *
   * @param content     Add todo modal id
   */
  open() {
    this.selectedItem = null;
    this.selectedTodoTypeValue = '';
    this.selectedTodoTypeText = '';
    this.todoComments = [];
    this.todoCommentsField = null;
    this.resetForm();
    this.selectedUserImage = '';
    this.todoId = null;
    this.todo = this.formBuilder.group({
      uid: this.loggedInUser.uid,
      title: '',
      description: '',
      type: '',
      completed: false,
      isDeleted: false,
      createdDate: new Date(),
      badge: '',
      assignedTo: '',
      assignDate: '',
      todoComments: ''
    });
  }
  /**
   * Open edit todo modal
   *
   * @param editContent    edit todo modal id
   * @param item           edit todo modal values
   */
  editModal(value, event) {
    this.selectedItem = value;
    if (this.contact.length > 0) {
      for (let index = 0; index < this.contact.length; index++) {
        const element = this.contact[index];
        if (element.uid === this.selectedItem.uid) {
          this.selectedItem['creator'] = element;
          break;
        }
      }
    }
    this.todoId = this.loggedInUser.uid;
    this.TodoId = this.loggedInUser.uid;
    this.todo = this.formBuilder.group({
      uid: this.loggedInUser.uid,
      title: this.selectedItem.title,
      description: this.selectedItem.description,
      type: this.selectedItem.type,
      completed: value.completed,
      isDeleted: false,
      badge: this.selectedItem.badge,
      createdDate: value.createdDate,
      assignDate: value.assignDate,
      assignedTo: value.assignedTo,
      todoComments: value.todoComments
    });
    this.todoCommentsField = value.todoComments;
    if (value.assignedTo) {
      this.selectedAssignee = value.assignedTo;
    }
    // this.firebaseService.getTODOS(this.loggedInUser.uid).subscribe(todos => {
    //   this.todos = todos.map(item => {
    //     return {
    //       ...item.payload.doc.data() as {},
    //       id: item.payload.doc.id
    //     };
    //   });
    // });
    for (let i = 0; i < this.todos.length; i++) {
      if (value.id === this.todos[i].id) {
        this.todoComments = this.todos[i].todoComments;
      }
    }
    const toggleIcon = document.getElementById('todo-new-task');
    const toggle = document.getElementById('content-overlay');
    const userImage = document.getElementById('avatar-user');
    const contentImage = document.getElementById('avatar-content');
    if (event.currentTarget.className === 'todo-item ng-star-inserted') {
      this._renderer.addClass(toggleIcon, 'show');
      this._renderer.addClass(toggle, 'show');
    } else if (this.todoId !== null) {
      this._renderer.addClass(contentImage, 'd-none');
      this._renderer.removeClass(userImage, 'd-none');
    }
  }
  /**
   * Get text and value
   *
   * @param event     Dropdown event
   */
  getSelectedTODOTypeText(event) {
    this.selectedTodoTypeText = event.target['options'][event.target['options'].selectedIndex].text;
    this.selectedTodoTypeValue = event.target['options'][event.target['options'].selectedIndex].value;
  }
  getSelectedTODOTypeImage(event) {
    this.selectedUserId = event.id;
    this.selectImage();
  }
  selectImage() {
    this.contact.forEach(element => {
      if (this.selectedUserId === element.id) {
        this.selectedUserImage = element.image;
      }
    });
  }
  completeTODO(data) {
    if (data.completed) {
      data.completed = false;
    } else {
      data.completed = true;
    }
    this.todo = this.formBuilder.group({
      uid: this.loggedInUser.uid,
      title: data.title,
      description: data.description,
      type: data.type,
      completed: data.completed,
      isDeleted: data.isDeleted,
      createdDate: data.createdDate,
      badge: data.badge,
      assignDate: data.assignDate,
      assignedTo: data.assignedTo,
      // todoImage: data.todoImage,
      todoComments: data.todoComments
    });
    this.firebaseService.updateTODO(data.id, this.todo.value).subscribe(res => {
      if (this.todo.value.completed === true) {
        this.toastr.success('Success', 'Todo Completed.', {
          timeOut: 500,
          closeButton: true
        });
      } else {
        this.toastr.success('Success', 'Todo Updated.', {
          timeOut: 500,
          closeButton: true
        });
      }
    }, err => {
      this.toastr.error('Error', 'Something went wrong!', {
        timeOut: 500,
        closeButton: true
      });
    });
  }
  /**
  * Overlay add/remove fuction in responsive
  *
  * @param event     Overlay click event
  */
  sidebartask(event) {
    const toggleIcon = document.getElementById('todo-new-task');
    const toggle = document.getElementById('content-overlay');
    const toggleSidebarIcon = document.getElementById('sidebar-left');
    const userImage = document.getElementById('avatar-user');
    const contentImage = document.getElementById('avatar-content');
    if (event.currentTarget.className === 'btn btn-danger btn-glow add-task-btn btn-block my-1') {
      this._renderer.addClass(toggleIcon, 'show');
      this._renderer.addClass(toggle, 'show');
      this._renderer.removeClass(toggleSidebarIcon, 'show');
    } else if (event.currentTarget.className.indexOf('todo-item') !== -1) {
      this._renderer.addClass(toggleIcon, 'show');
      this._renderer.addClass(toggle, 'show');
    } else if (event.currentTarget.className === 'close close-icon' || 'app-content-overlay show') {
      this._renderer.removeClass(toggleIcon, 'show');
      this._renderer.removeClass(toggle, 'show');
      this._renderer.removeClass(toggleSidebarIcon, 'show');
    }
  }
  sidebartaskedit(event) {
    const toggleIcon = document.getElementById('todo-new-task');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'btn btn-danger btn-glow add-task-btn btn-block my-1') {
      this._renderer.addClass(toggleIcon, 'show');
      this._renderer.addClass(toggle, 'show');
    }
  }
  showTodoMenu(Id, todo) {
    for (let j = 0; j < todo.length; j++) {
      for (let i = 0; i < this.todoLableList.length; i++) {
        for (let k = 0; k < this.todoFilterList.length; k++) {
          if (todo[j].lableName === this.todoLableList[i].lableName) {
            if (Id !== this.todoLableList[i].Id) {
              this.todoLableList[i].isSelected = false;
            }
            if (Id === this.todoLableList[i].Id) {
              this.todoLableList[i].isSelected = true;
              this.todoFilterList[k].isSelected = false;
            }
          } else if (todo[j].lableName === this.todoFilterList[k].lableName) {
            if (Id !== this.todoFilterList[k].Id) {
              this.todoFilterList[k].isSelected = false;
            }
            if (Id === this.todoFilterList[k].Id) {
              this.todoFilterList[k].isSelected = true;
              this.todoLableList[i].isSelected = false;
            }
          }
        }
      }
    }
  }
  sidebar(event) {
    const toggleIcon = document.getElementById('sidebar-left');
    const toggle = document.getElementById('content-overlay');
    if (event.currentTarget.className === 'sidebar-toggle d-block d-lg-none') {
      this._renderer.addClass(toggleIcon, 'show');
      this._renderer.addClass(toggle, 'show');
    } else if (event.currentTarget.className === 'sidebar-close-icon') {
      this._renderer.removeClass(toggleIcon, 'show');
      this._renderer.removeClass(toggle, 'show');
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
  todoFavorite(event, todoId) {
    const todoIcon = document.getElementById('todo-icon' + todoId);
    if (event.currentTarget.className === 'todo-item-favorite ml-75') {
      this._renderer.addClass(todoIcon, 'warning');
    } else if (event.currentTarget.className === 'todo-item-favorite ml-75 warning') {
      this._renderer.removeClass(todoIcon, 'warning');
    }
  }
}
TodoappComponent.ɵfac = function TodoappComponent_Factory(t) {
  return new (t || TodoappComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_todo_todo_service__WEBPACK_IMPORTED_MODULE_1__.TodoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_quill_initialize_service_service__WEBPACK_IMPORTED_MODULE_3__.QuillInitializeServiceService));
};
TodoappComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TodoappComponent,
  selectors: [["app-todoapp"]],
  viewQuery: function TodoappComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.componentRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
    }
  },
  decls: 142,
  vars: 36,
  consts: [[1, "app-content", "content"], ["id", "sidebar-left", 1, "sidebar-left"], [1, "sidebar"], [1, "todo-sidebar", "d-flex"], [1, "sidebar-close-icon", 3, "click"], [1, "ficon", "feather", "ft-x"], [1, "todo-app-menu"], [1, "form-group", "text-center", "add-task"], ["type", "button", 1, "btn", "btn-danger", "btn-glow", "add-task-btn", "btn-block", "my-1", 3, "click"], [1, "ficon", "feather", "ft-plus"], ["fxFlex", "auto", 1, "sidebar-menu-list", 3, "perfectScrollbar"], [1, "list-group"], ["href", "#", 1, "list-group-item", "border-0"], [1, "fonticon-wrap", "mr-50"], [1, "ficon", "feather", "ft-align-justify"], [1, "filter-label", "mt-2", "mb-1", "pt-25"], ["class", "list-group", 4, "ngFor", "ngForOf"], ["id", "todo-new-task", "fxFlex", "auto", 1, "todo-new-task-sidebar", 3, "perfectScrollbar"], [1, "card", "shadow-none", "p-0", "m-0"], [1, "card-header", "border-bottom", "py-75"], [1, "task-header", "d-flex", "justify-content-between", "align-items-center"], ["class", "new-task-title mb-0", 4, "ngIf"], ["class", "mark-complete-btn btn btn-primary btn-sm", 4, "ngIf"], [1, "dropdown", "mr-1"], [1, "ficon", "feather", "ft-paperclip", "cursor-pointer", "mr-50"], ["ngbDropdown", "", 1, "d-inline-block", 3, "open", "autoClose"], ["id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "dropdown-toggle", "new-taskDropdown"], [1, "ficon", "feather", "ft-more-vertical"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "dropdownnew-task"], [1, "dropdown-item", 3, "routerLink"], ["type", "button", 1, "close", "close-icon", 3, "click"], ["id", "compose-form", 1, "mt-1", 3, "formGroup", "ngSubmit"], [1, "card-content"], [1, "card-body", "py-0", "border-bottom"], [1, "form-group"], ["formControlName", "title", "name", "title", "cols", "1", "rows", "2", "placeholder", "Write a Task Name", "required", "", 1, "form-control", "task-title"], [1, "assigned", "d-flex", "justify-content-between"], [1, "form-group", "d-flex", "align-items-center", "mr-1"], [1, "avatar", "avatar-image"], ["class", "avatar-user-image ", "id", "avatar-user", "alt", "#", "width", "38", "height", "38", 3, "src", 4, "ngIf"], ["id", "avatar-content", 1, "avatar-content", "d-none"], [1, "ficon", "feather", "ft-user", "font-medium-4"], [1, "select-box", "mr-1"], ["bindLabel", "name", "formControlName", "assignedTo", 3, "items", "ngModel", "ngModelChange", "change"], [1, "form-group", "d-flex", "align-items-center", "position-relative"], [1, "input-group"], [1, "input-group-text", "mr-50", 3, "click"], [1, "ficon", "feather", "ft-calendar", 2, "cursor", "pointer"], ["placeholder", "yyyy-mm-dd", "formControlName", "assignDate", "name", "assignDate", "ngbDatepicker", "", 1, "form-control"], ["d2", "ngbDatepicker"], [1, "card-body", "border-bottom", "task-description"], [1, "snow-container", "border", "rounded", "p-50"], [1, "compose-editor", "mx-75", "ql-container", "ql-snow"], ["formControlName", "description", 3, "styles", "modules", "onFocus", "onBlur"], [1, "tag", "d-flex", "justify-content-between", "align-items-center", "pt-1"], [1, "flex-grow-1", "d-flex", "align-items-center"], [1, "ficon", "feather", "ft-tag", "align-middle", "mr-25"], ["id", "todo-select", "placeholder", "Select Tag", "formControlName", "type", "name", "type", 1, "custom-select", "form-control", 3, "change"], ["value", "", "selected", ""], ["value", "warning"], ["value", "secondary"], ["value", "primary"], ["value", "success"], ["value", "danger"], [1, "ml-25"], [1, "ficon", "feather", "ft-plus-circle", "cursor-pointer", "add-tags"], [1, "card-body", "pb-1"], [1, "d-flex", "align-items-center", "mb-1"], [1, "avatar", "mr-75"], ["width", "38", "height", "38", 3, "src", 4, "ngIf"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "width", "38", "height", "38", 4, "ngIf"], ["class", "avatar-content", 4, "ngIf"], [2, "font-family", "bold"], ["class", "d-flex align-items-center mb-1", 4, "ngFor", "ngForOf"], [1, "comment-editor", "mx-75", "ql-container", "ql-snow"], [1, "editor"], [3, "styles", "modules", "ngModel", "ngModelOptions", "onFocus", "onBlur", "ngModelChange"], ["quill", "ngModel"], [1, "d-flex", "justify-content-end"], ["type", "button", "class", "btn btn-sm btn-primary comment-btn", 3, "click", 4, "ngIf"], [1, "mt-1", "d-flex", "justify-content-end"], ["type", "submit", "class", "btn btn-danger add-todo", 4, "ngIf"], ["type", "button", "class", "btn btn-danger update-todo", 3, "click", 4, "ngIf"], [1, "content-right"], [1, "content-overlay"], [1, "content-wrapper"], [1, "content-header", "row"], [1, "content-body"], ["id", "content-overlay", 1, "app-content-overlay", 3, "click"], [1, "todo-app-area"], [1, "todo-app-list-wrapper"], [1, "todo-app-list"], [1, "todo-fixed-search", "d-flex", "justify-content-between", "align-items-center"], [1, "sidebar-toggle", "d-block", "d-lg-none", 3, "click"], [1, "form-group", "position-relative", "has-icon-left", "m-0", "flex-grow-1", "pl-2"], ["type", "text", "id", "todo-search", "placeholder", "Search Task", 1, "form-control", "todo-search", 3, "keyup"], [1, "form-control-position"], [1, "ficon", "feather", "ft-search"], [1, "todo-sort", "dropdown", "mr-1"], ["type", "button", "id", "folder", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "dropdownMenuButton", "dropdown-menu", "", "dropdown-menu-right", "", "show", "", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "role", "menu", "ngbDropdownToggle", "", 1, "btn", "dropdown-toggle", "sorting"], [1, "ficon", "feather", "ft-filter"], ["ngbDropdownMenu", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-sort"], [1, "todo-task-list", "list-group", 3, "perfectScrollbar"], ["class", "todo-task-list-wrapper list-unstyled", "id", "todo-task-list-drag", 4, "ngFor", "ngForOf"], [1, "no-results"], [1, "list-group-item", "border-0", 3, "routerLink", "ngClass", "click"], [1, "list-group-item", "border-0", "d-flex", "align-items-center", "justify-content-between", 3, "routerLink", "ngClass", "click"], [1, "new-task-title", "mb-0"], [1, "mark-complete-btn", "btn", "btn-primary", "btn-sm"], [1, "ficon", "feather", "ft-check", "align-middle"], [1, "mark-complete", "align-middle"], ["id", "avatar-user", "alt", "#", "width", "38", "height", "38", 1, "avatar-user-image", 3, "src"], ["width", "38", "height", "38", 3, "src"], ["src", "../../../../assets/images/portrait/small/avatar-s-19.png", "width", "38", "height", "38"], [1, "avatar-content"], [1, "ml-75", "text-muted"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "comment-btn", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", "add-todo"], ["type", "button", 1, "btn", "btn-danger", "update-todo", 3, "click"], ["id", "todo-task-list-drag", 1, "todo-task-list-wrapper", "list-unstyled"], [1, "todo-item", 3, "checked", "ngClass", "click"], [1, "todo-title-wrapper", "d-flex", "justify-content-sm-between", "justify-content-end", "align-items-center"], [1, "todo-title-area", "d-flex"], [1, "ficon", "feather", "ft-more-vertical", "handle"], [1, "custom-control", "custom-checkbox", 3, "click"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 3, "for"], [1, "todo-title", "mx-50", "m-0", "truncate"], [1, "todo-item-action", "d-flex", "align-items-center"], [1, "todo-badge-wrapper", "d-flex"], ["class", "avatar ml-1", 4, "ngIf"], [1, "todo-item-favorite", "ml-75", 3, "click"], [1, "ficon", "feather", "ft-star"], [1, "todo-item-delete", "ml-75", 3, "click"], [1, "ficon", "feather", "ft-trash-2"], [1, "avatar", "ml-1"], ["default", "../../../../assets/images/portrait/small/default.png", "alt", "avatar", "height", "30", "width", "30", 3, "src"]],
  template: function TodoappComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_Template_span_click_4_listener($event) {
        return ctx.sidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_Template_button_click_8_listener($event) {
        return ctx.sidebartask($event);
      })("click", function TodoappComponent_Template_button_click_8_listener() {
        return ctx.open();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "New Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "a", 12)(15, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " All");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TodoappComponent_div_21_Template, 6, 8, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Labels");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TodoappComponent_div_24_Template, 5, 8, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 17)(26, "div", 18)(27, "div", 19)(28, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TodoappComponent_h5_29_Template, 2, 0, "h5", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, TodoappComponent_button_30_Template, 4, 0, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 25)(34, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 28)(37, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Add to another project");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Create follow up task");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Print");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_Template_button_click_43_listener($event) {
        return ctx.sidebartask($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "form", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function TodoappComponent_Template_form_ngSubmit_45_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 32)(47, "div", 33)(48, "div", 34)(49, "textarea", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 36)(52, "div", 37)(53, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, TodoappComponent_img_54_Template, 1, 1, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, TodoappComponent_img_55_Template, 1, 1, "img", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "i", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 42)(59, "ng-select", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TodoappComponent_Template_ng_select_ngModelChange_59_listener($event) {
        return ctx.selectedAssignee = $event;
      })("change", function TodoappComponent_Template_ng_select_change_59_listener($event) {
        return ctx.getSelectedTODOTypeImage($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 44)(61, "div", 45)(62, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_Template_div_click_62_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](65);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r6.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "i", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "input", 48, 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 50)(67, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "div", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "quill-editor", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onFocus", function TodoappComponent_Template_quill_editor_onFocus_69_listener() {
        return ctx.focus();
      })("onBlur", function TodoappComponent_Template_quill_editor_onBlur_69_listener() {
        return ctx.blur();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 54)(71, "div", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "i", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "select", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TodoappComponent_Template_select_change_73_listener($event) {
        return ctx.getSelectedTODOTypeText($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "option", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Select Tag");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "option", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "option", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "option", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Bug");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "option", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "API");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "UI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](87, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 66)(89, "div", 67)(90, "div", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, TodoappComponent_img_91_Template, 1, 1, "img", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, TodoappComponent_img_92_Template, 1, 1, "img", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](93, TodoappComponent_img_93_Template, 1, 0, "img", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, TodoappComponent_div_94_Template, 2, 1, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, TodoappComponent_div_95_Template, 2, 1, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](96, TodoappComponent_div_96_Template, 2, 0, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "h4", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Comments:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, TodoappComponent_div_99_Template, 8, 6, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 75)(103, "quill-editor", 76, 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onFocus", function TodoappComponent_Template_quill_editor_onFocus_103_listener() {
        return ctx.focus();
      })("onBlur", function TodoappComponent_Template_quill_editor_onBlur_103_listener() {
        return ctx.blur();
      })("ngModelChange", function TodoappComponent_Template_quill_editor_ngModelChange_103_listener($event) {
        return ctx.todoCommentsField = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, TodoappComponent_button_106_Template, 3, 0, "button", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, TodoappComponent_button_108_Template, 2, 0, "button", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, TodoappComponent_button_109_Template, 2, 0, "button", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "div", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 87)(115, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_Template_div_click_115_listener($event) {
        return ctx.sidebartask($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 89)(117, "div", 90)(118, "div", 91)(119, "div", 92)(120, "div", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TodoappComponent_Template_div_click_120_listener($event) {
        return ctx.sidebar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](121, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "fieldset", 94)(123, "input", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function TodoappComponent_Template_input_keyup_123_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](125, "i", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 98)(127, "div", 25)(128, "button", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "i", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 101)(133, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "Ascending");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, "Descending");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, TodoappComponent_ul_138_Template, 19, 14, "ul", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div", 104)(140, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "No Items Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.todoFilterList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.todoLableList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.todoId === null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.todo);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.todoId === null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.contact)("ngModel", ctx.selectedAssignee);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](33, _c3))("modules", ctx.newTodoquillConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedItem && ctx.loggedInUser.photoURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedItem && ctx.selectedItem.creator && ctx.selectedItem.creator.image);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedItem && !ctx.loggedInUser.photoURL || ctx.selectedItem && !ctx.selectedItem.creator);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedItem && ctx.currentUserName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedItem && ctx.selectedItem.creator);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.currentUserName && (!ctx.selectedItem || !ctx.selectedItem.creator));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.todoComments);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](34, _c3))("modules", ctx.TodoquillConfig)("ngModel", ctx.todoCommentsField)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](35, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.todoId === null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.todoId !== null);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("open", false)("autoClose", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("perfectScrollbar", ctx.config);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.todos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbInputDatepicker, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, ngx_quill__WEBPACK_IMPORTED_MODULE_14__.QuillEditorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _directives_image_preload_directive__WEBPACK_IMPORTED_MODULE_4__.ImagePreloadDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: ["[_nghost-%COMP%]     .todo-app-menu {\n    width: 100% !important;\n    padding: .5rem 0;\n}\n[_nghost-%COMP%]     .ml-25 {\n  margin-left: .25rem!important;\n}\n[_nghost-%COMP%]     .todo-sidebar .todo-app-menu .sidebar-menu-list .filter-label {\n  font-family: Quicksand,Georgia,\"Times New Roman\",Times,serif;\n  letter-spacing: 1px;\n  color: #bac0c7;\n}\n [_nghost-%COMP%]     .border {\n    border: 1px solid #dde1e6 !important;\n} \n[_nghost-%COMP%]     .ql-container.ql-snow {\n  border: 0px solid #ccc;\n}\n[_nghost-%COMP%]     .ql-toolbar.ql-snow {\n  border: 0px solid #ccc;\n \n}\n[_nghost-%COMP%]     .btn-primary {\n   height: -moz-fit-content;\n   height: fit-content;\n   margin-right: 7px;\n}\n[_nghost-%COMP%]     .new-taskDropdown::after {\n   content: \"\" !important;\n}\n\n[_nghost-%COMP%]     .show > .dropdownnew-task {\nleft: -166px !important;\n}\n[_nghost-%COMP%]     .show > .dropdown-sort {\n   left: -48px !important;\n}\n@media (max-width: 991.98px){\n  .app-content[_ngcontent-%COMP%]   .content-right[_ngcontent-%COMP%] {\n      width: 100%!important;\n  }\n}\n[_nghost-%COMP%]     .py-75 {\n  padding-top: .75rem!important;\n}\n[_nghost-%COMP%]     .py-75 {\n  padding-bottom: .75rem!important;\n}\n[_nghost-%COMP%]     .ImageUpload {\n  width: 10%;\n  height: 10%;\n}\n[_nghost-%COMP%]     .add-todo{\n  margin-left: 10px;\n}\n[_nghost-%COMP%]     .todo-new-task-sidebar .avatar i {\n  right : 18px;\n  bottom : 18px;\n}\n[_nghost-%COMP%]     .ng-dropdown-panel .ng-dropdown-panel-items {\n   width: -moz-fit-content !important;\n   width: fit-content !important;\n}\n[_nghost-%COMP%]     .ng-select {\n  width: 130px;\n}\n\n@media (max-width: 349.98px) {\n  .sidebar[_ngcontent-%COMP%]   .todo-sidebar[_ngcontent-%COMP%] {\n    width : 230px;\n  }\n}\n@media (max-width: 575.98px) {\n  .todo-new-task-sidebar[_ngcontent-%COMP%] {\n    width : 88%;\n  }\n}\n[_nghost-%COMP%]      .gradient-mint {\n  background-image: linear-gradient(45deg,#28d094,#28d094)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-primary{\n  background-image: linear-gradient(45deg,#666ee8,#666ee8)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-warning {\n  background-image: linear-gradient(45deg,#ff9149,#ff9149)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-danger {\n  background-image: linear-gradient(45deg,#ff4961,#ff4961)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n [_nghost-%COMP%]      .gradient-info {\n  background-image: linear-gradient(45deg,#1e9ff2,#1e9ff2)!important;\n  width: 10px !important;\n  height: 10px !important;\n }\n \n[_nghost-%COMP%]     .btn-light:not(:disabled):not(.disabled):active {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: #d3d9df !important;\n}\n\n[_nghost-%COMP%]     .btn-light:hover:not(.disabled):active {\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n[_nghost-%COMP%]     .btn-light {\n  color: unset !important;\n  background-color: unset !important;\n  border-color: unset !important;\n}\n\n[_nghost-%COMP%]     .bg-primary {\n  background-color: #007bff !important;\n}\n\n[_nghost-%COMP%]     .text-white {\n  color: #fff !important;\n}\n\n[_nghost-%COMP%]     .custom-day {\n  text-align: center;\n  padding: .185rem .25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n[_nghost-%COMP%]     .custom-day:active {\n  color: #6d7183 !important;\n background-color: #fff !important;\n border-block-color: rgb(2, 117, 216) !important;\n \n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f8f9fa !important;\n}\n\n[_nghost-%COMP%]     .hidden {\n  display: block !important;\n}\n\n.ngb-dp-weekday[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n.ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  text-align: center;\n  font-style: italic;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.ngb-dp-month[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.btn-light[_ngcontent-%COMP%]:hover {\n  color: #212529 !important;\n  background-color: #e2e6ea !important;\n  border-color: #dae0e5 !important;\n}\n\n.ngb-datepicker-month-view[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.ngb-dp-header[_ngcontent-%COMP%] {\n  border-bottom: 0;\n  border-radius: .25rem .25rem 0 0;\n  padding-top: .25rem;\n}\n\n.ngb-dp-day[_ngcontent-%COMP%], .ngb-dp-week-number[_ngcontent-%COMP%], .ngb-dp-weekday[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n  background-color: rgb(2, 117, 216);\n  color: white;\n}\n\n.custom-day.faded[_ngcontent-%COMP%] {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n[_nghost-%COMP%]     .block-ui-wrapper {\n  background: rgba(255, 249, 249, 0.5) !important;\n}\n\n.custom-day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  border-radius: 0.25rem;\n  display: inline-block;\n  width: 2rem;\n}\n.custom-day[_ngcontent-%COMP%]:hover, .custom-day.focused[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n.weekend[_ngcontent-%COMP%] {\n  background-color: #f0ad4e;\n  border-radius: 1rem;\n  color: white;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]     .ft-calendar{\n  font-family: feather!important;\n  speak: none;\n  font-style: normal;\n  font-weight: 400;\n  font-size: large;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[_nghost-%COMP%]     .input-group-text {\n  display: flex;\n  align-items: center;\n  padding: unset !important;\n  margin-bottom: unset !important;\n  font-size: unset !important;\n  font-weight: unset !important;\n  line-height: unset !important;\n  color:unset !important;\n  text-align: unset !important;\n  white-space: unset !important;\n  background-color: unset !important;\n  border:  unset !important;\n  border-radius: unset !important;\n}\n.ml-75[_ngcontent-%COMP%], .mx-75[_ngcontent-%COMP%] {\n  margin-left: .75rem!important;\n  }\n.mx-50[_ngcontent-%COMP%] {\n  margin-left: .5rem!important;\n}\n.sidebar[_ngcontent-%COMP%] {\n    width : 270px !important;\n  }\n  .align-middle[_ngcontent-%COMP%] {\n    margin-left: 3px;\n}\n.mr-50[_ngcontent-%COMP%], .mx-50[_ngcontent-%COMP%] {\n  margin-right: .5rem!important;\n}\n[_nghost-%COMP%]     .ft-plus{\n  margin-right: 3px !important;\n}\ncontrol[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  margin-left: -12px;\n}\n[_nghost-%COMP%]     .ngb-dp-header {\n  background-color: var(--light) !important;\n}\n\n[_nghost-%COMP%]     .ngb-dp-weekdays {\n  background-color: var(--light);\n}\n\n[_nghost-%COMP%]     .ngb-dp-month-name {\n  background-color: var(--light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNERBQTREO0VBQzVELG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0NBQ0M7SUFDRyxvQ0FBb0M7QUFDeEM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCOztBQUV4QjtBQUNBO0dBQ0csd0JBQW1CO0dBQW5CLG1CQUFtQjtHQUNuQixpQkFBaUI7QUFDcEI7QUFDQTtHQUNHLHNCQUFzQjtBQUN6Qjs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0dBQ0csc0JBQXNCO0FBQ3pCO0FBQ0E7RUFDRTtNQUNJLHFCQUFxQjtFQUN6QjtBQUNGO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7R0FDRyxrQ0FBNkI7R0FBN0IsNkJBQTZCO0FBQ2hDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRSxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7Q0FDQSxvQkFBb0I7QUFDckI7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7Q0FDMUIsaUNBQWlDO0NBQ2pDLCtDQUErQzs7QUFFaEQ7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0I7QUFDRjtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0lBQ0ksd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoidG9kb2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC50b2RvLWFwcC1tZW51IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IC41cmVtIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1sLTI1IHtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbSFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvZG8tc2lkZWJhciAudG9kby1hcHAtbWVudSAuc2lkZWJhci1tZW51LWxpc3QgLmZpbHRlci1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsR2VvcmdpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogI2JhYzBjNztcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLmJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZTFlNiAhaW1wb3J0YW50O1xufSBcbjpob3N0IDo6bmctZGVlcCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5xbC10b29sYmFyLnFsLXNub3cge1xuICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xuIFxufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tcHJpbWFyeSB7XG4gICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5ldy10YXNrRHJvcGRvd246OmFmdGVyIHtcbiAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zaG93ID4gLmRyb3Bkb3dubmV3LXRhc2sge1xubGVmdDogLTE2NnB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNob3cgPiAuZHJvcGRvd24tc29ydCB7XG4gICBsZWZ0OiAtNDhweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KXtcbiAgLmFwcC1jb250ZW50IC5jb250ZW50LXJpZ2h0IHtcbiAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwIC5weS03NSB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5weS03NSB7XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5JbWFnZVVwbG9hZCB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMTAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hZGQtdG9kb3tcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvZG8tbmV3LXRhc2stc2lkZWJhciAuYXZhdGFyIGkge1xuICByaWdodCA6IDE4cHg7XG4gIGJvdHRvbSA6IDE4cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzQ5Ljk4cHgpIHtcbiAgLnNpZGViYXIgLnRvZG8tc2lkZWJhciB7XG4gICAgd2lkdGggOiAyMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC50b2RvLW5ldy10YXNrLXNpZGViYXIge1xuICAgIHdpZHRoIDogODglO1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1taW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMyOGQwOTQsIzI4ZDA5NCkhaW1wb3J0YW50O1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiB9XG4gOmhvc3QgOjpuZy1kZWVwICAuZ3JhZGllbnQtcHJpbWFyeXtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM2NjZlZTgsIzY2NmVlOCkhaW1wb3J0YW50O1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiB9XG4gOmhvc3QgOjpuZy1kZWVwICAuZ3JhZGllbnQtd2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZmY5MTQ5LCNmZjkxNDkpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LWRhbmdlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZmY0OTYxLCNmZjQ5NjEpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzFlOWZmMiwjMWU5ZmYyKSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuIH1cbiAvKiBkYXRlIHBpY2tlciBjc3MgKi9cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xuIFxufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmdiLWRwLWRheSB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLW1vbnRoIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDJyZW07XG59XG4uY3VzdG9tLWRheTpob3ZlciwgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4ud2Vla2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mdC1jYWxlbmRhcntcbiAgZm9udC1mYW1pbHk6IGZlYXRoZXIhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICBjb2xvcjp1bnNldCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiB1bnNldCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAgdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5tbC03NSwgLm14LTc1IHtcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbSFpbXBvcnRhbnQ7XG4gIH1cbi5teC01MCB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbSFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciB7XG4gICAgd2lkdGggOiAyNzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1taWRkbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4ubXItNTAsIC5teC01MCB7XG4gIG1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mdC1wbHVze1xuICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xufVxuY29udHJvbDpkaXNhYmxlZCwgLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtd2Vla2RheXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLW1vbnRoLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGVudC9hcHBsaWNhdGlvbnMvdG9kby1hcHAvdG9kb2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw0REFBNEQ7RUFDNUQsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7Q0FDQztJQUNHLG9DQUFvQztBQUN4QztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7O0FBRXhCO0FBQ0E7R0FDRyx3QkFBbUI7R0FBbkIsbUJBQW1CO0dBQ25CLGlCQUFpQjtBQUNwQjtBQUNBO0dBQ0csc0JBQXNCO0FBQ3pCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7R0FDRyxzQkFBc0I7QUFDekI7QUFDQTtFQUNFO01BQ0kscUJBQXFCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtHQUNHLGtDQUE2QjtHQUE3Qiw2QkFBNkI7QUFDaEM7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0Msa0VBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0Qix1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLGtFQUFrRTtFQUNsRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxrRUFBa0U7RUFDbEUsc0JBQXNCO0VBQ3RCLHVCQUF1QjtDQUN4QjtDQUNBLG9CQUFvQjtBQUNyQjtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtDQUMxQixpQ0FBaUM7Q0FDakMsK0NBQStDOztBQUVoRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QjtBQUNGO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7SUFDSSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUdBLG95WEFBb3lYIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC50b2RvLWFwcC1tZW51IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IC41cmVtIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1sLTI1IHtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbSFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvZG8tc2lkZWJhciAudG9kby1hcHAtbWVudSAuc2lkZWJhci1tZW51LWxpc3QgLmZpbHRlci1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQsR2VvcmdpYSxcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogI2JhYzBjNztcbn1cbiA6aG9zdCA6Om5nLWRlZXAgLmJvcmRlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZTFlNiAhaW1wb3J0YW50O1xufSBcbjpob3N0IDo6bmctZGVlcCAucWwtY29udGFpbmVyLnFsLXNub3cge1xuICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5xbC10b29sYmFyLnFsLXNub3cge1xuICBib3JkZXI6IDBweCBzb2xpZCAjY2NjO1xuIFxufVxuOmhvc3QgOjpuZy1kZWVwIC5idG4tcHJpbWFyeSB7XG4gICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5ldy10YXNrRHJvcGRvd246OmFmdGVyIHtcbiAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zaG93ID4gLmRyb3Bkb3dubmV3LXRhc2sge1xubGVmdDogLTE2NnB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNob3cgPiAuZHJvcGRvd24tc29ydCB7XG4gICBsZWZ0OiAtNDhweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KXtcbiAgLmFwcC1jb250ZW50IC5jb250ZW50LXJpZ2h0IHtcbiAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgfVxufVxuOmhvc3QgOjpuZy1kZWVwIC5weS03NSB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5weS03NSB7XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5JbWFnZVVwbG9hZCB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMTAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5hZGQtdG9kb3tcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLnRvZG8tbmV3LXRhc2stc2lkZWJhciAuYXZhdGFyIGkge1xuICByaWdodCA6IDE4cHg7XG4gIGJvdHRvbSA6IDE4cHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyB7XG4gICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAubmctc2VsZWN0IHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzQ5Ljk4cHgpIHtcbiAgLnNpZGViYXIgLnRvZG8tc2lkZWJhciB7XG4gICAgd2lkdGggOiAyMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC50b2RvLW5ldy10YXNrLXNpZGViYXIge1xuICAgIHdpZHRoIDogODglO1xuICB9XG59XG46aG9zdCA6Om5nLWRlZXAgIC5ncmFkaWVudC1taW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMyOGQwOTQsIzI4ZDA5NCkhaW1wb3J0YW50O1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiB9XG4gOmhvc3QgOjpuZy1kZWVwICAuZ3JhZGllbnQtcHJpbWFyeXtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCM2NjZlZTgsIzY2NmVlOCkhaW1wb3J0YW50O1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiB9XG4gOmhvc3QgOjpuZy1kZWVwICAuZ3JhZGllbnQtd2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZmY5MTQ5LCNmZjkxNDkpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LWRhbmdlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZmY0OTYxLCNmZjQ5NjEpIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gfVxuIDpob3N0IDo6bmctZGVlcCAgLmdyYWRpZW50LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIzFlOWZmMiwjMWU5ZmYyKSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuIH1cbiAvKiBkYXRlIHBpY2tlciBjc3MgKi9cbjpob3N0IDo6bmctZGVlcCAuYnRuLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkM2Q5ZGYgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQ6aG92ZXI6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYWUwZTUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5idG4tbGlnaHQge1xuICBjb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogLjE4NXJlbSAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tZGF5OmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmQ3MTgzICFpbXBvcnRhbnQ7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuIGJvcmRlci1ibG9jay1jb2xvcjogcmdiKDIsIDExNywgMjE2KSAhaW1wb3J0YW50O1xuIFxufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaGlkZGVuIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm5nYi1kcC13ZWVrZGF5IHtcbiAgY29sb3I6ICMxN2EyYjg7XG59XG5cbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICBsaW5lLWhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZ2ItZGF0ZXBpY2tlci1tb250aC12aWV3IHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmdiLWRwLWRheSB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRwLW1vbnRoIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5idG4tbGlnaHQ6aG92ZXIge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlNmVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RhZTBlNSAhaW1wb3J0YW50O1xufVxuXG4ubmdiLWRhdGVwaWNrZXItbW9udGgtdmlldyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubmdiLWRwLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbSAuMjVyZW0gMCAwO1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xufVxuXG4ubmdiLWRwLWRheSxcbi5uZ2ItZHAtd2Vlay1udW1iZXIsXG4ubmdiLWRwLXdlZWtkYXkge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4uY3VzdG9tLWRheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xODVyZW0gMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xufVxuXG4uY3VzdG9tLWRheS5mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmN1c3RvbS1kYXkucmFuZ2UsXG4uY3VzdG9tLWRheTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1kYXkuZmFkZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDExNywgMjE2LCAwLjUpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJsb2NrLXVpLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjQ5LCAyNDksIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1kYXkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDJyZW07XG59XG4uY3VzdG9tLWRheTpob3ZlciwgLmN1c3RvbS1kYXkuZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG4ud2Vla2VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mdC1jYWxlbmRhcntcbiAgZm9udC1mYW1pbHk6IGZlYXRoZXIhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICBjb2xvcjp1bnNldCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiB1bnNldCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAgdW5zZXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogdW5zZXQgIWltcG9ydGFudDtcbn1cbi5tbC03NSwgLm14LTc1IHtcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbSFpbXBvcnRhbnQ7XG4gIH1cbi5teC01MCB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbSFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciB7XG4gICAgd2lkdGggOiAyNzBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5hbGlnbi1taWRkbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4ubXItNTAsIC5teC01MCB7XG4gIG1hcmdpbi1yaWdodDogLjVyZW0haW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5mdC1wbHVze1xuICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xufVxuY29udHJvbDpkaXNhYmxlZCwgLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG59XG46aG9zdCA6Om5nLWRlZXAgLm5nYi1kcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5uZ2ItZHAtd2Vla2RheXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubmdiLWRwLW1vbnRoLW5hbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
const environment = {
  production: true,
  apiUrl: 'https://forvalet.com/api/',
  url: 'http://localhost:45949/',
  firebase: {
    apiKey: 'AIzaSyCSG-EGU2RLITgpjf_ogf1w47edC_DXlWc',
    authDomain: 'evolvision-rnd.firebaseapp.com',
    databaseURL: 'https://evolvision-rnd.firebaseio.com',
    projectId: 'evolvision-rnd',
    storageBucket: 'evolvision-rnd.appspot.com',
    messagingSenderId: '890895206035',
    appId: '1:890895206035:web:a6d0e1574d59ffe40bef66',
    measurementId: 'G-WYKKLCYFHE'
  },
  googleApiKey: 'AIzaSyAIIYOxA7qeetFz6TuR1Qewc0Rrjhzx7ZU'
};

/***/ }),

/***/ 19660:
/*!***********************************************!*\
  !*** ./src/assets/data/application/todo.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Brownie marzipan gingerbread cake muffin","description":"Oat cake biscuit liquorice biscuit cookie chocolate marshmallow dragée.","badge":"Project","type":"warning","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Ice cream toffee pudding caramels donut ice cream","description":"Chocolate bar chupa chups biscuit. Icing pudding cake caramels halvah.","badge":"","type":"","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Danish liquorice candy lemon drops gingerbread","description":"Jelly beans sesame snaps wafer sweet roll. Biscuit tart pastry lemon drops brownie.","badge":"Product","type":"secondary","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Chocolate macaroon oat cake pudding marzipan","description":"Sweet tart cake jujubes. Jelly beans carrot cake sugar plum candy dessert.","badge":"","type":"","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Toffee biscuit muffin toffee tootsie roll macaroon","description":"Tootsie roll caramels tart chupa chups tiramisu lollipop. Tiramisu soufflé bonbon.","badge":"UI","type":"danger","completed":false,"isDeleted":false,"createdDate":"","uid":""},{"title":"Powder chocolate fruitcake apple pie marshmallow","description":"Chocolate cookie tart apple pie cake cupcake gingerbread fruitcake cookie.","badge":"","type":"","completed":false,"isDeleted":false,"createdDate":"","uid":""}]');

/***/ }),

/***/ 23073:
/*!*****************************************************!*\
  !*** ./src/assets/data/application/todo_lable.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"todoFilterList":[{"Id":1,"lableName":"Favourite","lableIcon":"ficon feather ficon feather ft-star","isSelected":true},{"Id":2,"lableName":"Done","lableIcon":"ficon feather ft-check","isSelected":false},{"Id":3,"lableName":"Deleted","lableIcon":"ficon feather ft-trash-2","isSelected":false}],"todoLableList":[{"Id":1,"lableName":"Frontend","isSelected":false,"bulletClass":"gradient-primary"},{"Id":2,"lableName":"Backend","isSelected":false,"bulletClass":"gradient-mint"},{"Id":3,"lableName":"Issue","isSelected":false,"bulletClass":"gradient-warning"},{"Id":4,"lableName":"Design","isSelected":false,"bulletClass":"gradient-danger"},{"Id":5,"lableName":"Wireframe","isSelected":false,"bulletClass":"gradient-info"}]}');

/***/ })

}]);
//# sourceMappingURL=src_app_content_applications_todo-app_todo-app_module_ts.js.map