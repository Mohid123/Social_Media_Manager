(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "/2RN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
      \*****************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function RN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "U5Cf");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-apexcharts */
      "Tczp");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__["NgApexchartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
              path: '',
              component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            }])],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");
      /* harmony import */


      var _core_services_club_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../core/services/club.service */
      "wDSB");
      /* harmony import */


      var _core_services_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../core/services/report.service */
      "ZPyn");
      /* harmony import */


      var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/services/auth.service */
      "7dP1");
      /* harmony import */


      var _layout_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../_layout/components/aside/aside.component */
      "TMbS");
      /* harmony import */


      var _app_core_services_mediaupload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/core/services/mediaupload.service */
      "ewSq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-apexcharts */
      "Tczp");

      var _c0 = ["chart"];
      var _c1 = ["appTour"];

      function DashboardComponent_ng_container_21_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 48);
        }
      }

      function DashboardComponent_ng_container_21_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 49);
        }
      }

      function DashboardComponent_ng_container_21_i_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 50);
        }
      }

      function DashboardComponent_ng_container_21_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "post was ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "failed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r13.postedTo, " ");
        }
      }

      function DashboardComponent_ng_container_21_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "post was ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "succeed");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r13.postedTo, " ");
        }
      }

      function DashboardComponent_ng_container_21_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "post was ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "pending");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r13.postedTo, " ");
        }
      }

      function DashboardComponent_ng_container_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardComponent_ng_container_21_i_6_Template, 1, 0, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardComponent_ng_container_21_i_7_Template, 1, 0, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_ng_container_21_i_8_Template, 1, 0, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_ng_container_21_div_9_Template, 7, 1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_ng_container_21_div_10_Template, 7, 1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardComponent_ng_container_21_div_11_Template, 7, 1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var report_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", report_r13.time, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", report_r13.successStatus == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", report_r13.successStatus == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", report_r13.successStatus == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", report_r13.successStatus == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", report_r13.successStatus == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", report_r13.successStatus == 2);
        }
      }

      function DashboardComponent_ng_template_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Take a tour");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_23_Template_button_click_3_listener() {
            var d_r24 = ctx.dismiss;
            return d_r24("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Welcome!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "We're glad you're here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "To get a feel take our guided tour where we'll get you setup and show you how to start publishing your social posts.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_23_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var c_r23 = ctx.close;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            ctx_r26.openJoyRide();
            return c_r23("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Take a tour");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_template_23_Template_button_click_19_listener() {
            var c_r23 = ctx.close;
            return c_r23("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Skip");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_span_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.facebookStats.total);
        }
      }

      function DashboardComponent_span_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.facebookStats.succeeded);
        }
      }

      function DashboardComponent_span_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.facebookStats.failed);
        }
      }

      function DashboardComponent_span_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.instagramStats.total);
        }
      }

      function DashboardComponent_span_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.instagramStats.succeeded);
        }
      }

      function DashboardComponent_span_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.instagramStats.failed);
        }
      }

      function DashboardComponent_span_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.clubStats == null ? null : ctx_r9.clubStats.total);
        }
      }

      function DashboardComponent_span_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.clubStats == null ? null : ctx_r10.clubStats.succeeded);
        }
      }

      function DashboardComponent_span_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r11.clubStats == null ? null : ctx_r11.clubStats.failed);
        }
      }

      function DashboardComponent_div_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "apx-chart", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.series)("chart", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.chart)("xaxis", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.xaxis)("stroke", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.stroke)("tooltip", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.tooltip)("dataLabels", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.dataLabels)("legend", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.legend)("markers", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.markers)("grid", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.grid)("yaxis", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.yaxis)("title", ctx_r12.chartOptions == null ? null : ctx_r12.chartOptions.title);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "background-color": a0
        };
      };

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(spinner, clubService, _reportService, cf, mainAuthService, modalService, asideComponent, mediaService) {
          _classCallCheck(this, DashboardComponent);

          this.spinner = spinner;
          this.clubService = clubService;
          this._reportService = _reportService;
          this.cf = cf;
          this.mainAuthService = mainAuthService;
          this.modalService = modalService;
          this.asideComponent = asideComponent;
          this.mediaService = mediaService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.latestReports = [];
          this.facebookStatistics = [0, 0, 0, 0, 0, 0, 0, 0];
          this.instagramStatistics = [0, 0, 0, 0, 0, 0, 0, 0];
          this.clubStatistics = [0, 0, 0, 0, 0, 0, 0, 0];
          this.selectedClub$ = this.clubService.SelectedClub$;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var _a;

            this.signedInuserID = (_a = this.mainAuthService.loggedInUser) === null || _a === void 0 ? void 0 : _a.userID;
            this.getLatestReports();
            this.getSignedInUserStats();
            this.getLastSevenDaysStats();
            this.showAppTour();
            this.mediaService.subscribeToProgressEvents(function (progress) {
              _this.updateProgress = progress;

              _this.cf.detectChanges();
            }); // this.spinner.show()
            // this.openJoyRide()
          }
        }, {
          key: "showAppTour",
          value: function showAppTour() {
            var user = JSON.parse(localStorage.getItem('newUser'));

            if (user === true) {
              this.cf.detectChanges();
              this.openVerticallyCentered(this.modalContent);
              this.cf.detectChanges();
            } else {
              return;
            }
          }
        }, {
          key: "openVerticallyCentered",
          value: function openVerticallyCentered(content) {
            var _this2 = this;

            this.modalService.open(content, {
              centered: true
            }).result.then(function (result) {
              _this2.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
            });
            localStorage.removeItem('newUser');
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "initializeStatsChart",
          value: function initializeStatsChart() {
            this.chartOptions = {
              series: [{
                name: "Facebook",
                data: this.facebookStatistics,
                color: "#3b5998"
              }, {
                name: "Instagram",
                data: this.instagramStatistics,
                color: "#D62976"
              }, {
                name: this.clubService.selectedClub.clubName,
                data: this.clubStatistics,
                color: this.clubService.selectedClub.clubColor
              }],
              chart: {
                height: 400,
                type: "line"
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: 5,
                curve: "smooth",
                dashArray: [0, 8, 9],
                colors: ['#3b5998', '#D62976', '#FBAD50', '#FBAD50', '#FBAD50']
              },
              title: {
                text: "Page Statistics",
                align: "left"
              },
              legend: {
                tooltipHoverFormatter: function tooltipHoverFormatter(val, opts) {
                  return val + " - <strong>" + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + "</strong>";
                }
              },
              markers: {
                size: 0,
                hover: {
                  sizeOffset: 10
                }
              },
              xaxis: {
                labels: {
                  trim: false
                },
                categories: [new Date(new Date().setDate(new Date().getDate() - 7)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 7)).toLocaleString('default', {
                  month: 'short'
                }), new Date(new Date().setDate(new Date().getDate() - 6)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 6)).toLocaleString('default', {
                  month: 'short'
                }), new Date(new Date().setDate(new Date().getDate() - 5)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleString('default', {
                  month: 'short'
                }), new Date(new Date().setDate(new Date().getDate() - 4)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 4)).toLocaleString('default', {
                  month: 'short'
                }), new Date(new Date().setDate(new Date().getDate() - 3)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 3)).toLocaleString('default', {
                  month: 'short'
                }), new Date(new Date().setDate(new Date().getDate() - 2)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleString('default', {
                  month: 'short'
                }), new Date(new Date().setDate(new Date().getDate() - 1)).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleString('default', {
                  month: 'short'
                }), new Date(new Date().setDate(new Date().getDate())).getDate() + ' ' + new Date(new Date().setDate(new Date().getDate())).toLocaleString('default', {
                  month: 'short'
                })]
              },
              tooltip: {
                y: [{
                  title: {
                    formatter: function formatter(val) {
                      return val + " (Posts)";
                    }
                  }
                }, {
                  title: {
                    formatter: function formatter(val) {
                      return val + " (Posts)";
                    }
                  }
                }, {
                  title: {
                    formatter: function formatter(val) {
                      return val + " (Posts)";
                    }
                  }
                }]
              },
              grid: {
                borderColor: "#f1f1f1"
              }
            };
            this.cf.detectChanges();
          }
        }, {
          key: "getLatestReports",
          value: function getLatestReports() {
            var _this3 = this;

            var _a;

            var userId = (_a = this.mainAuthService.loggedInUser) === null || _a === void 0 ? void 0 : _a.userID;

            this._reportService.getLatestReports(userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (res) {
              if (!res.hasErrors()) {
                _this3.latestReports = res.data;

                _this3.cf.detectChanges();
              }
            });
          }
        }, {
          key: "openJoyRide",
          value: function openJoyRide() {
            this.asideComponent.onClick();
          }
        }, {
          key: "getInstagramStats",
          value: function getInstagramStats() {
            return this._reportService.getInstagramStats(this.signedInuserID);
          }
        }, {
          key: "getClubStats",
          value: function getClubStats() {
            return this._reportService.getClubStatus(this.signedInuserID);
          }
        }, {
          key: "getSignedInUserStats",
          value: function getSignedInUserStats() {
            var _this4 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(this._reportService.getFacebookStats(this.signedInuserID), this._reportService.getInstagramStats(this.signedInuserID), this._reportService.getClubStatus(this.signedInuserID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (res) {
              if (!res[0].hasErrors()) {
                _this4.facebookStats = res[0].data;
              }

              if (!res[1].hasErrors()) {
                _this4.instagramStats = res[1].data;
              }

              if (!res[2].hasErrors()) {
                _this4.clubStats = res[2].data;
              }
            });
          }
        }, {
          key: "getLastSevenDaysStats",
          value: function getLastSevenDaysStats() {
            var _this5 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(this._reportService.getLastSevenDaysStats(this.signedInuserID, 'Facebook'), this._reportService.getLastSevenDaysStats(this.signedInuserID, 'Instagram'), this._reportService.getLastSeventDaysStatsForClub(this.signedInuserID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (res) {
              if (!res[0].hasErrors()) {
                _this5.facebookStatistics = res[0].data;
              }

              if (!res[1].hasErrors()) {
                _this5.instagramStatistics = res[1].data;
              }

              if (!res[2].hasErrors()) {
                _this5.clubStatistics = res[2].data;
              }

              _this5.initializeStatsChart();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.complete();
            this.destroy$.unsubscribe();
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_club_service__WEBPACK_IMPORTED_MODULE_5__["ClubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["MainAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_layout_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_8__["AsideComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_mediaupload_service__WEBPACK_IMPORTED_MODULE_9__["MediauploadService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
          }
        },
        decls: 99,
        vars: 22,
        consts: [[1, "row", 2, "position", "relative"], [1, "col-lg-3"], [1, "card", "card-custom", "card-stretch"], [1, "card-header", 2, "background-color", "#1e1e2d"], [1, "card-title"], [1, "card-label"], [1, "svg-icon", "svg-icon-primary", "svg-icon-2x"], ["src", "../../../assets/media/custom/timer.svg"], [1, "nav-text", "text-white"], [1, "card-body"], [1, "container", "d-flex", "justify-content-center", 2, "border-bottom", "1px solid lightgrey", "padding-bottom", "25px"], [1, "fa", "fa-genderless", "text-success", "icon-md", "mr-2", "ml-2"], [1, "fa", "fa-genderless", "text-danger", "icon-md", "mr-2", "ml-2"], [1, "fa", "fa-genderless", "text-info", "icon-md", "mr-2", "ml-2"], [1, "card-scroll", "custom-scrollbar-css", "padd"], [1, "card-body", "pt-4"], [4, "ngFor", "ngForOf"], [1, "example-preview"], ["appTour", ""], [1, "col-lg-9"], [1, "card", "card-custom", "bgi-no-repeat", "card-stretch", 2, "background-position", "right top", "background-size", "30% auto", "background-image", "url(assets/media/svg/shapes/abstract-2.svg)"], [1, "row"], [1, "col-xl-4", "col-xs-3"], [1, "card", "card-custom", "bgi-no-repeat", "card-stretch", "gutter-b", 2, "background-color", "#3B5998 !important"], [1, "socicon-facebook", "mr-5", "icon-lg", "text-white"], [1, "text-white", "font-weight-bolder", "font-size-h5", "mb-2", "mt-5"], [1, "btn", "btn-light-primary", "mr-2"], [1, "label", "pulse", "pulse-primary"], ["class", "font-weight-bolder", 4, "ngIf"], [1, "pulse-ring"], [1, "btn", "btn-light-success", "mr-2"], [1, "label", "pulse", "pulse-success"], [1, "btn", "btn-light-danger", "mr-2"], [1, "label", "pulse", "pulse-danger"], [1, "card", "card-custom", "bgi-no-repeat", "card-stretch", "gutter-b", 2, "background-color", "#D62976 !important"], [1, "socicon-instagram", "mr-5", "icon-lg", "text-white"], [1, "card", "card-custom", "bgi-no-repeat", "card-stretch", "gutter-b", 3, "ngStyle"], [1, "svg-icon", "menu-icon", "icon-lg"], [1, "rounded", 2, "height", "auto", "width", "29px", 3, "src"], ["id", "chart", 4, "ngIf"], [1, "timeline", "timeline-6", "mt-3"], [1, "timeline-item", "align-items-start"], [1, "timeline-label", "font-weight-bolder", "text-dark-75", "font-size-lg"], [1, "timeline-badge"], ["class", "fa fa-genderless text-danger icon-xl", 4, "ngIf"], ["class", "fa fa-genderless text-success icon-xl", 4, "ngIf"], ["class", "fa fa-genderless text-info icon-xl", 4, "ngIf"], ["class", "font-weight-mormal font-size-lg timeline-content text-bold pl-5", 4, "ngIf"], [1, "fa", "fa-genderless", "text-danger", "icon-xl"], [1, "fa", "fa-genderless", "text-success", "icon-xl"], [1, "fa", "fa-genderless", "text-info", "icon-xl"], [1, "font-weight-mormal", "font-size-lg", "timeline-content", "text-bold", "pl-5"], [1, "text-danger", "font-weight-bolder"], [1, "text-success", "font-weight-bolder"], [1, "text-info", "font-weight-bolder"], [1, "modal-header", "d-flex", "justify-content-center", 2, "background-color", "#1e1e2d"], [1, "modal-title", "text-white"], ["type", "button", "aria-label", "Close", 1, "close", "ml-auto", 3, "click"], [1, "ki", "ki-bold-close", "icon-sm", 2, "color", "rgba(255, 255, 255, 0.877)"], ["aria-hidden", "true"], [1, "modal-body", "justify-content-center", "text-center", "d-inline"], [1, "text-center"], ["src", "./assets/media/bg/setup.png", "alt", "", 2, "width", "18rem"], [1, "justify-content-center"], [1, "modal-footer", "d-flex", "justify-content-center"], ["type", "button", 1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "font-weight-bolder"], ["id", "chart"], [3, "series", "chart", "xaxis", "stroke", "tooltip", "dataLabels", "legend", "markers", "grid", "yaxis", "title"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \xA0 Activity log");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Succeed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Failed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " pending ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DashboardComponent_ng_container_21_Template, 12, 7, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DashboardComponent_ng_template_23_Template, 21, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Total ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DashboardComponent_span_37_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Succeed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, DashboardComponent_span_42_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Failed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, DashboardComponent_span_47_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Instagram");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Total ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, DashboardComponent_span_58_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Succeed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, DashboardComponent_span_63_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Failed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, DashboardComponent_span_68_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Total ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DashboardComponent_span_84_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Succeed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, DashboardComponent_span_89_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Failed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, DashboardComponent_span_94_Template, 2, 1, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, DashboardComponent_div_97_Template, 2, 11, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "app-progress-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var tmp_7_0 = null;
            var tmp_8_0 = null;
            var tmp_9_0 = null;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.latestReports);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.facebookStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.facebookStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.facebookStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.instagramStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.instagramStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.instagramStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](72, 14, ctx.selectedClub$)) == null ? null : tmp_7_0.clubColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](77, 16, ctx.selectedClub$)) == null ? null : tmp_8_0.logoURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 18, ctx.selectedClub$)) == null ? null : tmp_9_0.clubName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clubStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clubStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clubStats);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chartOptions);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: ["@media (min-width: 992px) {\n  .footer-fixed[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding-bottom: 0px;\n  }\n}\n.custom-scrollbar-css[_ngcontent-%COMP%] {\n  height: 200px;\n}\n\n.custom-scrollbar-css[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\n.custom-scrollbar-css[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n\n.custom-scrollbar-css[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #eee;\n}\n\n.custom-scrollbar-css[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 1rem;\n  background-color: #34ABC5;\n  background-image: linear-gradient(to top, #949494 0%, #1E1E2D 100%);\n}\n@media screen and (max-width: 1600px) {\n  .btn[_ngcontent-%COMP%] {\n    padding: 6px;\n    font-size: 10px;\n    margin: 5px 0px;\n  }\n\n  .font-size-lg[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .card-body[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n}\n.padd[_ngcontent-%COMP%] {\n  height: 660px;\n}\n@media screen and (max-width: 500px) {\n  .padd[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQTtJQUNJLG1CQUFBO0VBRkY7QUFDRjtBQUlBO0VBQ0ksYUFBQTtBQUZKO0FBSUUsK0JBQUE7QUFDQTtFQUNFLGtCQUFBO0FBREo7QUFHRSxvQkFBQTtBQUNBO0VBQ0UsVUFBQTtBQUFKO0FBRUUsb0JBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQ0o7QUFDRSxxQkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1FQUFBO0FBRUo7QUFBRTtFQUlFO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBQU47O0VBRUU7SUFDRSxlQUFBO0VBQ0o7O0VBQ0E7SUFDRSxZQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0UsYUFBQTtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KVxyXG57XHJcbi5mb290ZXItZml4ZWQgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDsgXHJcbn1cclxufVxyXG4uY3VzdG9tLXNjcm9sbGJhci1jc3Mge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgLyogQ3VzdG9tIFNjcm9sbGJhciB1c2luZyBDU1MgKi9cclxuICAuY3VzdG9tLXNjcm9sbGJhci1jc3Mge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAvKiBzY3JvbGxiYXIgd2lkdGggKi9cclxuICAuY3VzdG9tLXNjcm9sbGJhci1jc3M6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgfVxyXG4gIC8qIHNjcm9sbGJhciB0cmFjayAqL1xyXG4gIC5jdXN0b20tc2Nyb2xsYmFyLWNzczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICB9XHJcbiAgLyogc2Nyb2xsYmFyIGhhbmRsZSAqL1xyXG4gIC5jdXN0b20tc2Nyb2xsYmFyLWNzczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNEFCQzU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjOTQ5NDk0IDAlLCAjMUUxRTJEIDEwMCUpO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIFxyXG4gXHJcbiAgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgXHJcbntcclxuICAgIC5idG57XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuZm9udC1zaXplLWxnIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY2FyZC1ib2R5e1xyXG4gICAgcGFkZGluZzogMHB4XHJcbiAgfVxyXG4gICBcclxufVxyXG4ucGFkZHtcclxuICBoZWlnaHQ6IDY2MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAucGFkZHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
          }, {
            type: _core_services_club_service__WEBPACK_IMPORTED_MODULE_5__["ClubService"]
          }, {
            type: _core_services_report_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["MainAuthService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
          }, {
            type: _layout_components_aside_aside_component__WEBPACK_IMPORTED_MODULE_8__["AsideComponent"]
          }, {
            type: _app_core_services_mediaupload_service__WEBPACK_IMPORTED_MODULE_9__["MediauploadService"]
          }];
        }, {
          chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["chart"]
          }],
          modalContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["appTour"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.5f553708fb495ac951e3.js.map