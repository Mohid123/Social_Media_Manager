(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["builder-builder-module"], {
    /***/
    "1U00":
    /*!*******************************************************************************************!*\
      !*** ./src/app/_metronic/partials/content/general/code-preview/code-preview.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CodePreviewComponent */

    /***/
    function U00(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodePreviewComponent", function () {
        return CodePreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../assets/js/layout/extended/examples */
      "suls");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-highlightjs */
      "dJsq");
      /* harmony import */


      var _core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/pipes/safe.pipe */
      "ZRVv");

      function CodePreviewComponent_div_0_li_14_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("highlight", ctx_r9.viewItem.htmlCode);
        }
      }

      function CodePreviewComponent_div_0_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "HTML");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CodePreviewComponent_div_0_li_14_ng_template_3_Template, 3, 1, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CodePreviewComponent_div_0_li_15_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("highlight", ctx_r10.viewItem.tsCode);
        }
      }

      function CodePreviewComponent_div_0_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "TypeScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CodePreviewComponent_div_0_li_15_ng_template_3_Template, 3, 1, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CodePreviewComponent_div_0_li_16_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("highlight", ctx_r11.viewItem.cssCode);
        }
      }

      function CodePreviewComponent_div_0_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CodePreviewComponent_div_0_li_16_ng_template_3_Template, 3, 1, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CodePreviewComponent_div_0_li_17_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("highlight", ctx_r12.viewItem.scssCode);
        }
      }

      function CodePreviewComponent_div_0_li_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "SASS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CodePreviewComponent_div_0_li_17_ng_template_3_Template, 3, 1, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CodePreviewComponent_div_0_li_18_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "code", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("highlight", ctx_r13.viewItem.jsonCode);
        }
      }

      function CodePreviewComponent_div_0_li_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CodePreviewComponent_div_0_li_18_ng_template_3_Template, 3, 1, "ng-template", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function CodePreviewComponent_div_0_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "safe");
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](1, 1, ctx_r7.viewItem.afterCodeTitle, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function CodePreviewComponent_div_0_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "safe");
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](1, 1, ctx_r8.viewItem.afterCodeDescription, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
        }
      }

      function CodePreviewComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ul", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CodePreviewComponent_div_0_li_14_Template, 4, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, CodePreviewComponent_div_0_li_15_Template, 4, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, CodePreviewComponent_div_0_li_16_Template, 4, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CodePreviewComponent_div_0_li_17_Template, 4, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, CodePreviewComponent_div_0_li_18_Template, 4, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, CodePreviewComponent_div_0_div_21_Template, 2, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, CodePreviewComponent_div_0_div_22_Template, 2, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.viewItem.beforeCodeTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.viewItem.htmlCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.viewItem.tsCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.viewItem.cssCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.viewItem.scssCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.viewItem.jsonCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbNavOutlet", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.viewItem.afterCodeTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.viewItem.afterCodeDescription);
        }
      }

      var _c0 = ["*"];

      var CodePreviewComponent = /*#__PURE__*/function () {
        function CodePreviewComponent(el) {
          _classCallCheck(this, CodePreviewComponent);

          this.el = el;
        }

        _createClass(CodePreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var elements = this.el.nativeElement.querySelectorAll('.example.example-compact');

            _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_1__["default"].init(elements);
          }
        }]);

        return CodePreviewComponent;
      }();

      CodePreviewComponent.??fac = function CodePreviewComponent_Factory(t) {
        return new (t || CodePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CodePreviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CodePreviewComponent,
        selectors: [["app-code-preview"]],
        inputs: {
          viewItem: "viewItem"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 1,
        consts: [["class", "card card-custom example example-compact gutter-b", 4, "ngIf"], [1, "card", "card-custom", "example", "example-compact", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "card-toolbar"], [1, "example-tools", "justify-content-center"], ["ngbTooltip", "View code", 1, "example-toggle"], ["ngbTooltip", "Copy code", 1, "example-copy"], [1, "card-body"], [1, "example-code", "mb-5"], ["ngbNav", "", 1, "example-nav", "nav", "nav-tabs", "nav-bold", "nav-tabs-line", "nav-tabs-line-2x"], ["nav", "ngbNav"], ["ngbNavItem", "", "class", "nav-item", 4, "ngIf"], [1, "mt-2", 3, "ngbNavOutlet"], ["class", "kt-portlet__preview", 3, "innerHTML", 4, "ngIf"], ["ngbNavItem", "", 1, "nav-item"], ["ngbNavLink", "", 1, "nav-link"], ["ngbNavContent", ""], [1, "example-highlight"], [3, "highlight"], ["ngbTabContent", ""], [1, "kt-portlet__preview", 3, "innerHTML"]],
        template: function CodePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, CodePreviewComponent_div_0_Template, 23, 9, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.viewItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavContent"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_4__["Highlight"]],
        pipes: [_core_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"]],
        styles: ["[_nghost-%COMP%]     ngb-tabset > .nav-tabs {\n  display: none;\n}\n[_nghost-%COMP%]   .hljs[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjb2RlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0FBRE47QUFLRTtFQUNFLGtDQUFBO0FBSEoiLCJmaWxlIjoiY29kZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIDo6bmctZGVlcCB7XHJcbiAgICBuZ2ItdGFic2V0ID4gLm5hdi10YWJzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5obGpzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CodePreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-code-preview',
            templateUrl: './code-preview.component.html',
            styleUrls: ['./code-preview.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          viewItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "93Pz":
    /*!**********************************************************************!*\
      !*** ./src/app/_metronic/partials/content/general/general.module.ts ***!
      \**********************************************************************/

    /*! exports provided: GeneralModule */

    /***/
    function Pz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralModule", function () {
        return GeneralModule;
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


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-highlightjs */
      "dJsq");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-inline-svg */
      "W79Q");
      /* harmony import */


      var _notice_notice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notice/notice.component */
      "I0zi");
      /* harmony import */


      var _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./code-preview/code-preview.component */
      "1U00");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core */
      "WsYS");

      var GeneralModule = function GeneralModule() {
        _classCallCheck(this, GeneralModule);
      };

      GeneralModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: GeneralModule
      });
      GeneralModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function GeneralModule_Factory(t) {
          return new (t || GeneralModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["HighlightModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], // ngbootstrap
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](GeneralModule, {
          declarations: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_6__["NoticeComponent"], _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_7__["CodePreviewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["HighlightModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], // ngbootstrap
          _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"]],
          exports: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_6__["NoticeComponent"], _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_7__["CodePreviewComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GeneralModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_6__["NoticeComponent"], _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_7__["CodePreviewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["HighlightModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"], // ngbootstrap
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_5__["InlineSVGModule"]],
            exports: [_notice_notice_component__WEBPACK_IMPORTED_MODULE_6__["NoticeComponent"], _code_preview_code_preview_component__WEBPACK_IMPORTED_MODULE_7__["CodePreviewComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "I0zi":
    /*!*******************************************************************************!*\
      !*** ./src/app/_metronic/partials/content/general/notice/notice.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: NoticeComponent */

    /***/
    function I0zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoticeComponent", function () {
        return NoticeComponent;
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


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-inline-svg */
      "W79Q");

      function NoticeComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("inlineSVG", ctx_r1.svg);
        }
      }

      function NoticeComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx_r2.icon);
        }
      }

      function NoticeComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, NoticeComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, NoticeComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.svg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.icon);
        }
      }

      var _c0 = ["*"];

      var NoticeComponent = /*#__PURE__*/function () {
        function NoticeComponent() {
          _classCallCheck(this, NoticeComponent);
        }

        _createClass(NoticeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NoticeComponent;
      }();

      NoticeComponent.??fac = function NoticeComponent_Factory(t) {
        return new (t || NoticeComponent)();
      };

      NoticeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NoticeComponent,
        selectors: [["app-notice"]],
        inputs: {
          classes: "classes",
          icon: "icon",
          svg: "svg"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 2,
        consts: [["role", "alert", 1, "alert", "alert-custom", "alert-white", "alert-shadow", "gutter-b", 3, "ngClass"], [4, "ngIf"], [1, "alert-text"], [1, "alert-icon", "alert-icon-top"], [1, "svg-icon", "svg-icon-3x", "svg-icon-primary", 3, "inlineSVG"], [3, "ngClass"]],
        template: function NoticeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, NoticeComponent_ng_container_1_Template, 4, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.classes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.icon || ctx.svg);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_2__["InlineSVGDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NoticeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notice',
            templateUrl: './notice.component.html'
          }]
        }], function () {
          return [];
        }, {
          classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          svg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "eE3h":
    /*!****************************************************!*\
      !*** ./src/app/pages/builder/builder.component.ts ***!
      \****************************************************/

    /*! exports provided: BuilderComponent */

    /***/
    function eE3h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuilderComponent", function () {
        return BuilderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../assets/js/layout/extended/examples */
      "suls");
      /* harmony import */


      var _metronic_core___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_metronic/core/ */
      "WsYS");
      /* harmony import */


      var _metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_metronic/partials/content/general/notice/notice.component */
      "I0zi");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-highlightjs */
      "dJsq");

      var _c0 = ["form"];

      var BuilderComponent = /*#__PURE__*/function () {
        function BuilderComponent(layout, el) {
          _classCallCheck(this, BuilderComponent);

          this.layout = layout;
          this.el = el;
          this.activeTabId = 1;
        }

        _createClass(BuilderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model = this.layout.getConfig();
          }
        }, {
          key: "setActiveTab",
          value: function setActiveTab(tabId) {
            this.activeTabId = tabId;
          }
        }, {
          key: "getActiveTabCSSClass",
          value: function getActiveTabCSSClass(tabId) {
            if (tabId !== this.activeTabId) {
              return '';
            }

            return 'active';
          }
        }, {
          key: "resetPreview",
          value: function resetPreview() {
            this.layout.refreshConfigToDefault();
          }
        }, {
          key: "submitPreview",
          value: function submitPreview() {
            this.layout.setConfig(this.model);
            location.reload();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // init code preview examples
            // see /src/assets/js/layout/extended/examples.js
            var elements = this.el.nativeElement.querySelectorAll('.example');

            _assets_js_layout_extended_examples__WEBPACK_IMPORTED_MODULE_1__["default"].init(elements);
          }
        }]);

        return BuilderComponent;
      }();

      BuilderComponent.??fac = function BuilderComponent_Factory(t) {
        return new (t || BuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_metronic_core___WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      BuilderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: BuilderComponent,
        selectors: [["app-builder"]],
        viewQuery: function BuilderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 301,
        vars: 36,
        consts: [[3, "svg"], [1, "card", "card-custom", "gutter-b"], [1, "card-header", "card-header-tabs-line"], ["role", "tablist", 1, "nav", "nav-dark", "nav-bold", "nav-tabs", "nav-tabs-line"], [1, "nav-item"], ["role", "tab", 1, "nav-link", "cursor-pointer", 3, "ngClass", "click"], ["novalidate", "", 1, "form", 3, "ngSubmit"], ["form", "ngForm"], [1, "card-body"], [1, "tab-content", "pt-3"], [1, "tab-pane", 3, "ngClass"], [1, "form-group", "row"], [1, "col-lg-3", "col-form-label", "text-lg-right"], [1, "col-lg-9", "col-xl-4"], [1, "switch", "switch-icon"], ["type", "checkbox", "name", "builder[header][self][fixed][desktop]", "value", "true", 3, "ngModel", "ngModelChange"], [1, "form-text", "text-muted"], ["type", "checkbox", "name", "builder[header][self][fixed][mobile]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[header][self][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "fluid"], ["value", "fixed"], ["type", "checkbox", "name", "builder[header][menu][self][display]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[header][menu][self][static]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[header][menu][self][layout]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "default"], ["value", "tab"], ["type", "checkbox", "name", "builder[header][menu][self][rootArrow]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[subheader][display]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[subheader][fixed]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[subheader][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["name", "builder[subheader][style]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "transparent"], ["value", "solid"], ["name", "builder[layout][subheader][layoutVersion]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], ["value", "v1"], ["value", "v2"], ["value", "v3"], ["value", "v4"], ["value", "v5"], ["value", "v6"], ["name", "builder[content][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], [1, "col-lg-9", "col-xl-6"], ["type", "checkbox", "name", "builder[aside][self][display]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[aside][menu][static]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[aside][self][fixed]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builde[aside][self][minimize][toggle]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[aside][self][minimize][default]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[aside][menu][scroll]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[aside][menu][dropdown]", "value", "true", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "builder[footer][fixed]", "value", "true", 3, "ngModel", "ngModelChange"], ["name", "builder[footer][width]", 1, "form-control", "form-control-solid", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-lg-4"], [1, "col-lg-8"], ["type", "submit", "name", "builder_submit", 1, "btn", "btn-primary"], ["type", "submit", "name", "builder_reset", 1, "btn", "btn-secondary", 3, "click"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "example", "mb-10"], [1, "example-code"], ["data-placement", "left", "ngbTooltip", "Copy code", 1, "example-copy"], [1, "example-highlight"], [3, "highlight"]],
        template: function BuilderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-notice", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " The layout builder is to assist your set and configure your preferred project layout specifications and preview it in real time. The configured layout options will be saved until you change or reset them. To use the layout builder, choose the layout options and click the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Preview");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " button to preview the changes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_10_listener() {
              return ctx.setActiveTab(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Header ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_13_listener() {
              return ctx.setActiveTab(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Subheader ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_16_listener() {
              return ctx.setActiveTab(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Content ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_19_listener() {
              return ctx.setActiveTab(4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Aside ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_a_click_22_listener() {
              return ctx.setActiveTab(5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Footer ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function BuilderComponent_Template_form_ngSubmit_24_listener() {
              return ctx.submitPreview();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Desktop Fixed Header:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_35_listener($event) {
              return ctx.model.header.self.fixed.desktop = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Enable fixed header for desktop mode ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Mobile Fixed Header:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_45_listener($event) {
              return ctx.model.header.self.fixed.mobile = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Enable fixed header for mobile mode ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Header Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_53_listener($event) {
              return ctx.model.header.self.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Select header width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Display Header Menu:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_66_listener($event) {
              return ctx.model.header.menu.self.display = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Display header menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Static Header Menu:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_76_listener($event) {
              return ctx.model.header.menu.self["static"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Static header menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Header Menu Layout:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_84_listener($event) {
              return ctx.model.header.menu.self.layout = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Select header width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Header Menu Arrows:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_97_listener($event) {
              return ctx.model.header.menu.self.rootArrow = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Enable header menu root link arrows ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Display Subheader:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_108_listener($event) {
              return ctx.model.subheader.display = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Display subheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Fixed Subheader:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_118_listener($event) {
              return ctx.model.subheader.fixed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " Enable fixed(sticky) subheader. Requires ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Solid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " subheader style. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_129_listener($event) {
              return ctx.model.subheader.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Select layout width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Subheader Style:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_140_listener($event) {
              return ctx.model.subheader.style = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Transparent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Solid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "Select subheader style");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Subheader Layout:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "select", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_151_listener($event) {
              return ctx.model.subheader.layoutVersion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Subheader 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Subheader 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Subheader 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "Subheader 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "option", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Subheader 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "option", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Subheader 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Select subheader layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "select", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_171_listener($event) {
              return ctx.model.content.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Select layout width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "Display:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_185_listener($event) {
              return ctx.model.aside.self.display = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](186, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Display aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Static aside menu:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_195_listener($event) {
              return ctx.model.aside.menu["static"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "Static aside menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Fixed:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "input", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_205_listener($event) {
              return ctx.model.aside.self.fixed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "Set fixed aside layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](211, "Minimize:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_215_listener($event) {
              return ctx.model.aside.self.minimize.toggle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](216, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "Allow aside minimizing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "Default Minimize:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_225_listener($event) {
              return ctx.model.aside.self.minimize["default"] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](226, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, " Set aside minimized by default ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "Scroll:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_235_listener($event) {
              return ctx.model.aside.menu.scroll = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](236, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "Enable aside scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Submenu toggle dropdown:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "input", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_245_listener($event) {
              return ctx.model.aside.menu.dropdown = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](246, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " Select Submenu Toggle mode (works only when ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "Scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, " is disabled. *By default - mode is 'accordion'). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "Fixed Desktop Footer:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_input_ngModelChange_259_listener($event) {
              return ctx.model.footer.fixed = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, "Set fixed desktop footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Width:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "select", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BuilderComponent_Template_select_ngModelChange_267_listener($event) {
              return ctx.model.footer.width = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "Fluid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "Select layout width type.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](276, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, " Preview ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "button", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BuilderComponent_Template_button_click_281_listener() {
              return ctx.resetPreview();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, " Reset ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "h3", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "Generated Config");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, " Use for layout config in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "src/app/_metronic/configs/default-layout.config.ts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](296, "span", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](299, "code", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](300, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("svg", "./assets/media/svg/icons/Tools/Tools.svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.self.fixed.desktop);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.self.fixed.mobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.self.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.menu.self.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.menu.self["static"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.menu.self.layout);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.header.menu.self.rootArrow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.fixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.style);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.subheader.layoutVersion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.content.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.menu["static"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.fixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.minimize.toggle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.self.minimize["default"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.menu.scroll);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.aside.menu.dropdown);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.getActiveTabCSSClass(5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.footer.fixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.model.footer.width);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("highlight", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](300, 34, ctx.model));
          }
        },
        directives: [_metronic_partials_content_general_notice_notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["Highlight"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        styles: ["[_nghost-%COMP%]   .hljs[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0NBQUE7QUFBSiIsImZpbGUiOiJidWlsZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5obGpzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BuilderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-builder',
            templateUrl: './builder.component.html',
            styleUrls: ['./builder.component.scss']
          }]
        }], function () {
          return [{
            type: _metronic_core___WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "suls":
    /*!***************************************************!*\
      !*** ./src/assets/js/layout/extended/examples.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function suls(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */


      (function (module) {
        /* harmony import */
        var _components_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./../../components/util.js */
        "rh/z");
        /* eslint-disable */


        var KTLayoutExamples = function () {
          var initDefaultMode = function initDefaultMode(element) {
            var elements = element;

            if (typeof elements === 'undefined') {
              elements = document.querySelectorAll('.example:not(.example-compact):not(.example-hover):not(.example-basic)');
            }

            if (elements && elements.length > 0) {
              for (var i = 0; i < elements.length; ++i) {
                var example = elements[i];

                var copy = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-copy');

                if (copy) {
                  var clipboard = new ClipboardJS(copy, {
                    target: function target(trigger) {
                      var example = trigger.closest('.example');

                      var el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-code .tab-pane.active');

                      if (!el) {
                        el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-code');
                      }

                      return el;
                    }
                  });
                  clipboard.on('success', function (e) {
                    _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(e.trigger, 'example-copied');

                    e.clearSelection();
                    setTimeout(function () {
                      _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(e.trigger, 'example-copied');
                    }, 2000);
                  });
                }
              }
            }
          };

          var initCompactMode = function initCompactMode(element) {
            var example, code, toggle, copy, clipboard;
            var elements = element;

            if (typeof elements === 'undefined') {
              var elements = document.querySelectorAll('.example.example-compact');
            }

            if (elements && elements.length > 0) {
              for (var i = 0; i < elements.length; ++i) {
                var example = elements[i];

                var toggle = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-toggle');

                var copy = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-copy'); // Handle toggle


                _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addEvent(toggle, 'click', function () {
                  var example = this.closest('.example');

                  var code = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-code');

                  var the = this;

                  if (_components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hasClass(this, 'example-toggled')) {
                    _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].slideUp(code, 300, function () {
                      _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(the, 'example-toggled');

                      _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(code, 'example-code-on');

                      _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].hide(code);
                    });
                  } else {
                    _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(code, 'example-code-on');

                    _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(this, 'example-toggled');

                    _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].slideDown(code, 300, function () {
                      _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].show(code);
                    });
                  }
                }); // Handle copy


                if (copy) {
                  var clipboard = new ClipboardJS(copy, {
                    target: function target(trigger) {
                      var example = trigger.closest('.example');

                      var el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-code .tab-pane.active');

                      if (!el) {
                        el = _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].find(example, '.example-code');
                      }

                      return el;
                    }
                  });
                  clipboard.on('success', function (e) {
                    _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].addClass(e.trigger, 'example-copied');

                    e.clearSelection();
                    setTimeout(function () {
                      _components_util_js__WEBPACK_IMPORTED_MODULE_0__["KTUtil"].removeClass(e.trigger, 'example-copied');
                    }, 2000);
                  });
                }
              }
            }
          };

          return {
            init: function init(element, options) {
              initDefaultMode(element);
              initCompactMode(element);
            }
          };
        }(); // webpack support


        if (true && typeof module.exports !== 'undefined') {// module.exports = KTLayoutExamples;
        }
        /* harmony default export */


        __webpack_exports__["default"] = KTLayoutExamples;
        /* WEBPACK VAR INJECTION */
      }).call(this, __webpack_require__(
      /*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */
      "3UD+")(module));
      /***/
    },

    /***/
    "vzru":
    /*!*************************************************!*\
      !*** ./src/app/pages/builder/builder.module.ts ***!
      \*************************************************/

    /*! exports provided: BuilderModule */

    /***/
    function vzru(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuilderModule", function () {
        return BuilderModule;
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


      var _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_metronic/partials/content/general/general.module */
      "93Pz");
      /* harmony import */


      var _builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./builder.component */
      "eE3h");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "G0yt");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-highlightjs */
      "dJsq");

      var BuilderModule = function BuilderModule() {
        _classCallCheck(this, BuilderModule);
      };

      BuilderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: BuilderModule
      });
      BuilderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function BuilderModule_Factory(t) {
          return new (t || BuilderModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](BuilderModule, {
          declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BuilderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _metronic_partials_content_general_general_module__WEBPACK_IMPORTED_MODULE_3__["GeneralModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_7__["HighlightModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
              path: '',
              component: _builder_component__WEBPACK_IMPORTED_MODULE_4__["BuilderComponent"]
            }])]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=builder-builder-module-es5.4b7e3675776b9725cbf8.js.map